import fs from 'node:fs';

import ProgressBar from 'progress';

import * as util from './util.js';

const allRevs = JSON.parse(fs.readFileSync('./data/rev.json'));
let pageInfo;
try {
  pageInfo = JSON.parse(fs.readFileSync('./data/update.json'));
} catch (e) {
  pageInfo = [];
}

if (!fs.existsSync('./data/pages')) {
  fs.mkdirSync('./data/pages');
}

let updated = 0;
let added = 0;
let start = 0;
let length = allRevs.length;

const bar = new ProgressBar('  [:bar] :current treated', {
  width: 30,
  incomplete: ' ',
  total: length,
});

try {
  await getNextPages();
} finally {
  saveInfo();
}

function getNextPages() {
  let pagesToGet = [];
  let oldStart = start;
  while (pagesToGet.length < 50 && start < length) {
    let page = allRevs[start++];
    let idx = indexOfPage(page);
    if (idx === -1 || pageInfo[idx].rev !== page.rev) {
      pagesToGet.push(page);
    }
  }

  let tick = start - oldStart;

  if (pagesToGet.length) {
    return getPages(pagesToGet).then(() => {
      bar.tick(tick);
      if (start < length) {
        return getNextPages();
      }
    });
  } else {
    bar.tick(tick);
    return Promise.resolve();
  }
}

function saveInfo() {
  // Remove pages that no longer exist
  let removed = 0;
  let final = [];
  loop1: for (let i = 0; i < pageInfo.length; i++) {
    let page = pageInfo[i];
    for (let j = 0; j < allRevs.length; j++) {
      if (allRevs[j].id === page.id) {
        final.push(page);
        continue loop1;
      }
    }
    // did not find id in allRevs, removing page
    try {
      removed++;
      fs.unlinkSync(util.getPagePath(page.id));
    } catch {
      // ignore
    }
  }

  console.log(`${added} new`);
  console.log(`${updated} updated`);
  console.log(`${removed} removed`);
  fs.writeFileSync('./data/update.json', JSON.stringify(final));
}

function markUpdated(page) {
  let idx = indexOfPage(page);
  if (idx > -1) {
    pageInfo[idx] = page;
    updated++;
  } else {
    pageInfo.push(page);
    added++;
  }
}

function indexOfPage(page) {
  for (let i = 0; i < pageInfo.length; i++) {
    if (pageInfo[i].id === page.id) {
      return i;
    }
  }
  return -1;
}

function savePage(id, content) {
  let path = util.getPagePath(id);
  if (!fs.existsSync(path.prefix)) {
    fs.mkdirSync(path.prefix);
  }
  fs.writeFileSync(path.full, content);
}

// https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&pageids=1912|4191
// Max 50 page ids at the same time
function getPages(pages) {
  let param = {
    action: 'query',
    prop: 'revisions',
    rvprop: 'content',
    continue: '',
    pageids: pages.map((page) => page.id).join(['|']),
  };
  return util.request(param).then((result) => {
    let resPages = result.query.pages;
    for (let i in resPages) {
      if (i === '0') {
        continue;
      }
      let page = resPages[i];
      let pageJSON = JSON.stringify(
        {
          id: page.pageid,
          title: page.title,
          content: page.revisions[0]['*'],
        },
        null,
        2,
      );
      savePage(page.pageid, pageJSON);
      for (let j = 0; j < pages.length; j++) {
        if (pages[j].id === page.pageid) {
          markUpdated(pages[j]);
        }
      }
    }
  });
}
