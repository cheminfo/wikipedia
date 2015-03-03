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
    regSmiles = /\| *smiles\d* *= *([^ }\r\t\n\|][^}\r\t\n\|]*)/gi;

function getSmiles(content) {

    var res = [];

    /*
    We found that some pages may contain multiple infoboxes,
    so we search all of them
     */

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

    /*
    We need to find where the infobox ends
     */
    var boxEndIdx = idx + 2;
    var counter = 1;
    while (counter && boxEndIdx <= content.length) {
        if (content[boxEndIdx] === '{') {
            if (content[boxEndIdx + 1] === '{') {
                counter++;
                boxEndIdx += 2;
                continue;
            }
        } else if (content[boxEndIdx] === '}') {
            if (content[boxEndIdx + 1] === '}') {
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
pageList.sort(function (a, b) {
    return a.id - b.id;
});
var results = [],
    errors = [],
    nogood = [],
    notfound = [],
    dup = [],
    smilesList = [],
    idcodeList = [],
    length = pageList.length;

if (program.limit) {
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
    var result;

    var allError = true;

    var smiles = getSmiles(page.content);
    if (smiles.length) {
        for (var j = 0; j < smiles.length; j++) {
            try {
                var molecule = ACT.Molecule.fromSmiles(smiles[j]);
                allError = false; // At least one SMILES is good for this file
                var idcode = molecule.getIDCode();
                var uniqid = id + '_' + idcode;
                if (uniq[uniqid]) {
                    dup.push(id);
                    continue; // If exact same molecule is already present for this page, skip
                }
                var mf = molecule.getMolecularFormula().getFormula();
                result = {
                    id: page.id,
                    code: page.title,
                    smiles: smiles[j],
                    mf: {type: 'mf', value: mf},
                    mw: 0,
                    em: 0,
                    act_idx: molecule.getIndex(),
                    actID: {type: 'actelionID', value: idcode}
                };
                smilesList.push(page.title + '\t' + smiles[j]);
                idcodeList.push(idcode + '\t' + page.title);
                try {
                    var chemcalc = Chemcalc.analyseMF(mf);
                    result.mw = chemcalc.mw;
                    result.em = chemcalc.em;
                } catch (e) {
                    // MF parsing error
                    console.error('\nchemcalc could not parse the following ' +
                    'MF: ' + mf);
                    console.error(e);
                }
                results.push(result);
                uniq[uniqid] = true;
            } catch (e) {
                // SMILES parsing error
                errors.push({
                    id: id,
                    smiles: smiles[j],
                    error: e.e
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
    date: (new Date()).toISOString(),
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

console.log(results.length + ' parsed molecules');
console.log(errors.length + ' parsing errors');
console.log(nogood.length + ' pages with only bad SMILES');
console.log(notfound.length + ' SMILES not found');
console.log(dup.length + ' dropped duplicates');

smilesList = smilesList.join('\n') + '\n';
idcodeList = idcodeList.join('\n') + '\n';

/*
The JSON string is reformatted in order to have one line per SMILES. Allows to
use the diff tool from Git to easily see changes between two exports
 */
var pubStr = JSON.stringify(theResult)
    .replace('"data":{"molecules":[', '\n"data":{"molecules":[\n')
    .replace(/},\{/g, '},\n{')
    .replace('],"errors":[', '\n],"errors":[\n')
    .replace('"nogood":[', '\n"nogood":[')
    .replace('"notfound":[', '\n"notfound":[')
    .replace('"dup":[', '\n"dup":[')
    .replace('"query":{', '\n"query":{');

fs.writeFileSync('./data/data.json', pubStr);
fs.writeFileSync('./data/smiles.txt', smilesList);
fs.writeFileSync('./data/idcode.txt', idcodeList);

if (program.publish) {
    if (program.limit) {
        console.error('Cannot publish partial data');
    } else {
        // Copying data in the public site directory
        /*
        data.json: main data file loaded by the visualizer. Contains all the
        parsed structures, information about the molecular formula, name and ID
        of the Wikipedia page
         */
        fs.writeFileSync('../site/src/json/data.json', pubStr);
        /*
        smiles.txt: tab-delimited list of the SMILES codes and Wikipedia article
        names. The names may contain UTF-8 characters (like greek letters).
        It can cause problems when trying to sort the list in natural order
         */
        fs.writeFileSync('../site/smiles.txt', smilesList);
        /*
        idcode.txt: tab-delimited list of the IDCodes and Wikipedia article
        names.
         */
        fs.writeFileSync('../site/idcode.txt', idcodeList);
    }
}
