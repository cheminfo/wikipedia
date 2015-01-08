var fs = require('fs'),
    util = require('./util'),
    ACT = require('./actelion'),
    Chemcalc = require('chemcalc'),
    ProgressBar = require('progress'),
    program = require('commander');

program
    .option('-l, --limit <n>', 'Limit number of parsed pages', parseInt, 0)
    .option('-p, --publish', 'Publish the final data file')
    .parse(process.argv);

var reg = /\| *smiles\d* *= *([^}\n \|]*)/gi;
function getSmiles(content) {
    var res = [];
    var smiles;
    while(smiles = reg.exec(content)) {
        res.push(smiles[1]);
    }
    return res;
}

var pageList = require('./data/update.json');
var results = [],
    errors = [],
    nogood = [],
    notfound = [],
    dup = [],
    length = pageList.length;

if(program.limit) {
    length = Math.min(program.limit, length);
}

console.log(length + ' pages to parse');

var bar = new ProgressBar('  [:bar] :current treated', {
    width: 30,
    incomplete: ' ',
    total: length
});

var uniq = {}; // Keep a hashmap of pageID + actelionID to prevent duplicates

for (var i = 0; i < length; i++) {
    var id = pageList[i].id;
    var path = util.getPagePath(id);
    var file = path.full;
    var page = JSON.parse(fs.readFileSync(file));
    var result = {};
    result.code = page.title;

    var allError = true;

    var smiles = getSmiles(page.content);
    if (smiles.length) {
        for(var j = 0; j < smiles.length; j++) {
            try {
                var molecule = ACT.Molecule.fromSmiles(smiles[j]);
                allError = false; // At least one SMILES is good for this file
                var idcode = molecule.getIDCode();
                var uniqid = id + '_' + idcode;
                if(uniq[uniqid]) {
                    dup.push(id);
                    continue; // If exact same molecule is already present for this page, skip
                }
                var mf = molecule.getMolecularFormula().getFormula();
                result.mf = {type: 'mf', value: mf};
                var chemcalc = Chemcalc.analyseMF(mf);
                result.mw = chemcalc.mw;
                result.em = chemcalc.em;
                result.act_idx = molecule.getIndex();
                result.actID = {
                    type: 'actelionID',
                    value: idcode,
                    coordinates: molecule.getIDCoordinates()
                };
                results.push(result);
                uniq[uniqid] = true;
            } catch (e) {
                errors.push({
                    id: id,
                    smiles: smiles[j],
                    error: e.f
                });
            }
        }
        if (allError) {
            nogood.push(id);
        }
    } else {
        notfound.push(id);
    }
    bar.tick();
}

var theResult = {};
theResult.count = {
    molecules: results.length,
    errors: errors.length,
    nogood: nogood.length,
    notfound: notfound.length,
    dup: dup
};
theResult.data = {
    molecules: results,
    errors: errors,
    nogood: nogood,
    notfound: notfound,
    dup: dup
};
theResult.query = {type: 'mol2d', value: ''};
theResult.queryOptions = {searchMode: 'Substructure'};

console.log('Successfully parsed ' + results.length + ' SMILES');
console.log(errors.length + ' parsing errors');
console.log(nogood.length + ' pages with only bad SMILES');
console.log(notfound.length + ' SMILES not found');
console.log(dup.length + ' dropped duplicates');

fs.writeFileSync('./data/data.json', JSON.stringify(theResult, null, 2));
if (program.publish) {
    if (program.limit) {
        console.error('Cannot publish partial data');
    } else {
        fs.writeFileSync('../site/src/json/data.json', JSON.stringify(theResult));
    }
}
