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

var reg = /\| *smiles[12]? *= *([^}\n \|]*)/i;
function getSmiles(content) {
    var res = reg.exec(content);
    if (res) {
        return res[1];
    }
}

var pageList = require('./data/update.json');
var results = [],
    errors = [],
    notfound = [],
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

for (var i = 0; i < length; i++) {
    var id = pageList[i].id;
    var path = util.getPagePath(id);
    var file = path.full;
    var page = JSON.parse(fs.readFileSync(file));
    var result = {};
    result.code = page.title;

    var smiles = getSmiles(page.content);
    if (smiles) {
        try {
            var molecule = ACT.Molecule.fromSmiles(smiles);
            var mf = molecule.getMolecularFormula().getFormula();
            result.mf = {type: 'mf', value: mf};
            var chemcalc = Chemcalc.analyseMF(mf);
            result.mw = chemcalc.mw;
            result.em = chemcalc.em;
            result.act_idx = molecule.getIndex();
            result.actID = {
                type: 'actelionID',
                value: molecule.getIDCode(),
                coordinates: molecule.getIDCoordinates()
            };
            results.push(result);
        } catch (e) {
            errors.push({
                id: id,
                smiles: smiles,
                error: e.f
            });
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
    notfound: notfound.length
};
theResult.data = {
    molecules: results,
    errors: errors,
    notfound: notfound
};
theResult.query = {type: 'mol2d', value: ''};
theResult.queryOptions = {searchMode: 'Substructure'};

console.log('Successfully extracted ' + results.length + ' molecules');
console.log(errors.length + ' errors');
console.log(notfound.length + ' not found');

fs.writeFileSync('./data/data.json', JSON.stringify(theResult, null, 2));
if (program.publish) {
    if (program.limit) {
        console.error('Cannot publish partial data');
    } else {
        fs.writeFileSync('../site/src/json/data.json', JSON.stringify(theResult));
    }
}
