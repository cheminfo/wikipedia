import fs from 'node:fs';
import { setTimeout as wait } from 'node:timers/promises';

import * as util from './util.js';

/**
 * @type {import('./types.js').WikiIds}
 */
let total = [];

console.log('Getting page ids');

await getForTemplate('Infobox_drug');
console.log(`${total.length} Drugbox`);

const diff = total.length;

await getForTemplate('Chembox');
console.log(`${total.length - diff} Chembox`);

let oldIds = [];
try {
  oldIds = JSON.parse(fs.readFileSync('./data/ids.json', 'utf-8'));
} catch {
  // No old ids.
}

console.log(`${total.length} Total`);
console.log(`Before : ${oldIds.length}`);
fs.mkdirSync('./data', { recursive: true });
fs.writeFileSync('./data/ids.json', JSON.stringify(total));

/**
 * @param {string} templateName
 */
function getForTemplate(templateName) {
  return getList(templateName).then(concatResult);

  /**
   * @param {GetListResult} result
   * @returns {Promise<void>}
   */
  async function concatResult(result) {
    total = total.concat(result.ids);
    if (result.eicontinue) {
      await wait(10_000);
      return getList(templateName, result.eicontinue).then(concatResult);
    }
  }
}

/**
 * @typedef {{ids: number[]; eicontinue: string | false }} GetListResult
 */

/**
 * https://en.wikipedia.org/w/api.php?action=help&modules=query%2Bembeddedin
 * https://en.wikipedia.org/w/api.php?action=query&list=embeddedin&eititle=Template:Infobox_drug&continue&einamespace=0
 * Template:Chembox
 * @param {string} templateName
 * @param {string} [eicontinue]
 * @returns {Promise<GetListResult>}
 */
async function getList(templateName, eicontinue) {
  const params = {
    action: 'query',
    list: 'embeddedin',
    eititle: `Template:${templateName}`,
    continue: '',
    einamespace: 0,
    eilimit: 500,
    prop: 'info',
    eicontinue,
  };
  const result = await util.request(params);
  return {
    ids: result.query.embeddedin.map(
      (/** @type {{ pageid: number; }} */ v) => v.pageid,
    ),
    eicontinue: result.continue ? result.continue.eicontinue : false,
  };
}
