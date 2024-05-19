import fs from 'node:fs';
import { parseArgs } from 'node:util';

import { MF } from 'mf-parser';
import OCL from 'openchemlib';
import ProgressBar from 'progress';

import * as util from './util.js';

const { values: args } = parseArgs({
  strict: true,
  options: {
    limit: {
      type: 'string',
      short: 'l',
      default: '0',
    },
    publish: {
      type: 'boolean',
      short: 'p',
      default: false,
    },
    help: {
      type: 'boolean',
      short: 'h',
    },
  },
});

if (args.help) {
  console.log(`node wiki-parse.js
Options:
  --limit <n> (short: -l) Limit number of parsed pages
  --publish   (short: -p) Publish the final data file
  `);
  process.exit(0);
}

const regChembox = /{{ *chembox/i;
const regDrugbox = /{{ *drugbox/i;
const regInfoboxDrug = /{{ *infobox drug/i;
const regSmiles = /\| *smiles\d* *= *(?<smiles>[^ }\r\t\n|][^}\r\t\n|]*)/gi;

function getSmiles(content) {
  let res = [];

  /*
    We found that some pages may contain multiple infoboxes,
    so we search all of them
     */

  let idx = content.search(regChembox);
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
  let boxEndIdx = idx + 2;
  let counter = 1;
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

  let boxContent = content.substring(idx, boxEndIdx);

  let match;
  while ((match = regSmiles.exec(boxContent))) {
    const cleanSmiles = match.groups.smiles
      .trim()
      .replaceAll(/\s+/g, '')
      .replace(/<!--.*?-->/g, '');
    if (cleanSmiles) {
      res.push(cleanSmiles);
    }
  }
}

const pageList = JSON.parse(fs.readFileSync('./data/update.json'));

pageList.sort((a, b) => {
  return a.id - b.id;
});
let results = [];
let errors = [];
let nogood = [];
let notfound = [];
let dup = [];
let smilesList = [];
let idcodeList = [];
let length = pageList.length;

if (args.limit !== '0') {
  length = Math.min(Number(args.limit), length);
}

console.log(`${length} pages to parse`);

let bar = new ProgressBar('  [:bar] :current treated', {
  width: 30,
  incomplete: ' ',
  total: length,
});

let uniq = {}; // Keep a hashmap of pageID + idCode to prevent duplicates

for (let i = 0; i < length; i++) {
  let id = pageList[i].id;
  let path = util.getPagePath(id);
  let file = path.full;
  let page = JSON.parse(fs.readFileSync(file));
  let result;

  let allError = true;

  let smiles = getSmiles(page.content);
  if (smiles.length) {
    for (let j = 0; j < smiles.length; j++) {
      try {
        let molecule = OCL.Molecule.fromSmiles(smiles[j]);
        allError = false; // At least one SMILES is good for this file
        let idcode = molecule.getIDCode();
        let uniqid = `${id}_${idcode}`;
        if (uniq[uniqid]) {
          dup.push(id);
          continue; // If exact same molecule is already present for this page, skip
        }
        const oclMF = molecule.getMolecularFormula();
        result = {
          id: page.id,
          code: page.title,
          smiles: smiles[j],
          mf: { type: 'mf', value: oclMF.formula },
          mw: oclMF.relativeWeight,
          em: oclMF.absoluteWeight,
          // eslint-disable-next-line camelcase
          act_idx: molecule.getIndex(),
          actID: { type: 'actelionID', value: idcode },
        };
        smilesList.push(`${page.title}\t${smiles[j]}`);
        idcodeList.push(`${idcode}\t${page.title}`);
        try {
          const mf = new MF(oclMF.formula);
          const info = mf.getInfo();
          result.mf.value = mf.toMF();
          result.mw = info.mass;
          result.em = info.monoisotopicMass;
        } catch (e) {
          // MF parsing error
          console.error(`\ncould not parse the following MF: ${oclMF.formula}`);
          console.error(e);
        }
        results.push(result);
        uniq[uniqid] = true;
      } catch (e) {
        // SMILES parsing error
        errors.push({
          id,
          smiles: smiles[j],
          error: e.toString().match(/.*?:.*?: (?<message>.*)/).groups.message,
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

let theResult = {};
let count = {
  date: new Date().toISOString(),
  molecules: results.length,
  errors: errors.length,
  nogood: nogood.length,
  notfound: notfound.length,
  dup: dup.length,
};
theResult.count = count;
theResult.data = {
  molecules: results,
  errors,
  nogood,
  notfound,
  dup,
};

console.log(`${results.length} parsed molecules`);
console.log(`${errors.length} parsing errors`);
console.log(`${nogood.length} pages with only bad SMILES`);
console.log(`${notfound.length} SMILES not found`);
console.log(`${dup.length} dropped duplicates`);

smilesList = `${smilesList.join('\n')}\n`;
idcodeList = `${idcodeList.join('\n')}\n`;

/*
The JSON string is reformatted in order to have one line per SMILES. Allows to
use the diff tool from Git to easily see changes between two exports
 */
let pubStr = JSON.stringify(theResult)
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

if (args.publish) {
  if (args.limit !== '0') {
    console.error('Cannot publish partial data');
  } else {
    // Copying data in the public site directory
    /*
        data.json: main data file loaded by the application. Contains all the
        parsed structures, information about the molecular formula, name and ID
        of the Wikipedia page.
         */
    fs.writeFileSync('../public/data.json', pubStr);
    // Cumulative statistics about the data
    const stats = JSON.parse(fs.readFileSync('../stats.json')).map((x) =>
      JSON.stringify(x),
    );
    stats.push(JSON.stringify(count));
    fs.writeFileSync('../stats.json', `[\n${stats.join(',\n')}\n]`);
    /*
        smiles.txt: tab-delimited list of the SMILES codes and Wikipedia article
        names. The names may contain UTF-8 characters (like greek letters).
        It can cause problems when trying to sort the list in natural order
         */
    fs.writeFileSync('../public/smiles.txt', smilesList);
    /*
        idcode.txt: tab-delimited list of the IDCodes and Wikipedia article
        names.
         */
    fs.writeFileSync('../public/idcode.txt', idcodeList);
  }
}
