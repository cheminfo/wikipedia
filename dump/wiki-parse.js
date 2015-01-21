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

var regChembox = /{{ *chembox/i,
    regDrugbox = /{{ *drugbox/i,
    regInfoboxDrug = /{{ *infobox drug/i,
    regSmiles = /\| *smiles\d* *= *([^}\n\|]+)/gi;

function getSmiles(content) {

    var res = [];

    var idx = content.search(regChembox);
    if (idx > -1) {
        parse(content, idx, res);
    }

    idx = content.search(regDrugbox);
    if (idx > -1) {
        parse(content, idx, res);
    }

    idx = content.search(regInfoboxDrug);
    if (idx > -1) {
        parse(content, idx, res);
    }

    return res;

}

function parse(content, idx, res) {

    var boxEndIdx = idx+2;
    var counter = 1;
    while(counter) {
        if(content[boxEndIdx] === '{') {
            if(content[boxEndIdx+1] === '{') {
                counter++;
                boxEndIdx += 2;
                continue;
            }
        } else if(content[boxEndIdx] === '}') {
            if (content[boxEndIdx+1] === '}') {
                counter--;
                boxEndIdx += 2;
                continue;
            }
        }
        boxEndIdx++;
    }

    var boxContent = content.substring(idx, boxEndIdx);

    var match;
    while (match = regSmiles.exec(boxContent)) {
        res.push(match[1].trim());
    }

}

var pageList = require('./data/update.json');
pageList.sort(function (a, b){
   return a.id - b.id; 
});
var results = [],
    errors = [],
    nogood = [],
    notfound = [],
    dup = [],
    smilesList = [],
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
                result.id = page.id;
                result.code = page.title;
                smilesList.push(page.title+'\t'+smiles[j]);
                result.smiles = smiles[j];
                var mf = molecule.getMolecularFormula().getFormula();
                result.mf = {type: 'mf', value: mf};
                var chemcalc = Chemcalc.analyseMF(mf);
                result.mw = chemcalc.mw;
                result.em = chemcalc.em;
                result.act_idx = molecule.getIndex();
                result.actID = {
                    type: 'actelionID',
                    value: idcode
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
    dup: dup.length
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

console.log(results.length + ' parsed molecules');
console.log(errors.length + ' parsing errors');
console.log(nogood.length + ' pages with only bad SMILES');
console.log(notfound.length + ' SMILES not found');
console.log(dup.length + ' dropped duplicates');

smilesList = smilesList.join('\n')+'\n';

var pubStr = JSON.stringify(theResult);
pubStr = pubStr
    .replace('"data":{"molecules":[','\n"data":{"molecules":[\n')
    .replace(/},\{/g, '},\n{')
    .replace('],"errors":[','\n],"errors":[\n')
    .replace('"nogood":[','\n"nogood":[')
    .replace('"notfound":[','\n"notfound":[')
    .replace('"dup":[', '\n"dup":[')
    .replace('"query":{', '\n"query":{');

fs.writeFileSync('./data/data.json', pubStr);
fs.writeFileSync('./data/smiles.txt', smilesList);
if (program.publish) {
    if (program.limit) {
        console.error('Cannot publish partial data');
    } else {
        fs.writeFileSync('../site/src/json/data.json', pubStr);
        fs.writeFileSync('../site/smiles.txt', smilesList);
    }
}
