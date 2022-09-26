import fs from 'node:fs';

import * as util from './util.js';

let total = [];

console.log('Getting page ids');

let diff = 0;

await getForTemplate('Infobox_drug');
console.log(`${total.length} Drugbox`);
diff = total.length;

await getForTemplate('Chembox');
console.log(`${total.length - diff} Chembox`);
let oldIds = [];
try {
  oldIds = JSON.parse(fs.readFileSync('./data/ids.json'));
} catch {
  // No old ids.
}
console.log(`${total.length} Total`);
console.log(`Before : ${oldIds.length}`);
fs.writeFileSync('./data/ids.json', JSON.stringify(total));

function getForTemplate(templateName) {
  return getList(templateName).then(concatResult);

  function concatResult(result) {
    total = total.concat(result.ids);
    if (result.eicontinue) {
      return getList(templateName, result.eicontinue).then(concatResult);
    }
  }
}

// https://en.wikipedia.org/w/api.php?action=help&modules=query%2Bembeddedin
// https://en.wikipedia.org/w/api.php?action=query&list=embeddedin&eititle=Template:Infobox_drug&continue&einamespace=0
// Template:Chembox
async function getList(templateName, eicontinue) {
  let param = {
    action: 'query',
    list: 'embeddedin',
    eititle: `Template:${templateName}`,
    continue: '',
    einamespace: 0,
    eilimit: 500,
    prop: 'info',
  };
  if (eicontinue) {
    param.eicontinue = eicontinue;
  }
  const result = await util.request(param);
  return {
    ids: result.query.embeddedin.map((v) => v.pageid),
    eicontinue: result.continue ? result.continue.eicontinue : false,
  };
}
