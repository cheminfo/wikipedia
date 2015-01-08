var util = require('./util'),
    fs = require('fs'),
    ProgressBar = require('progress');

var allRevs = require('./data/rev.json');
var pageInfo;
try {
    pageInfo = require('./data/update.json');
} catch (e) {
    pageInfo = [];
}

if (!fs.existsSync('./data/pages')) {
    fs.mkdirSync('./data/pages');
}

var updated = 0,
    added = 0,
    start = 0,
    length = allRevs.length;

var bar = new ProgressBar('  [:bar] :current treated', {
    width: 30,
    incomplete: ' ',
    total: length
});

getNextPages().then(function () {
    saveInfo();
}).catch(function (err) {
    console.error(err);
    saveInfo();
    process.exit(1);
});

function getNextPages() {
    var pagesToGet = [];
    var oldStart = start;
    while (pagesToGet.length < 50 && start < length) {
        var page = allRevs[start++];
        var idx = indexOfPage(page);
        if (idx === -1 || pageInfo[idx].rev !== page.rev) {
            pagesToGet.push(page);
        }
    }

    var tick = start - oldStart;

    if (pagesToGet.length) {
        return getPages(pagesToGet).then(function () {
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
    var removed = 0;
    var final = [];
    loop1: for (var i = 0; i < pageInfo.length; i++) {
        var page = pageInfo[i];
        for (var j = 0; j < allRevs.length; j++) {
            if (allRevs[j].id === page.id) {
                final.push(page);
                continue loop1;
            }
        }
        // did not find id in allRevs, removing page
        try {
            removed++;
            fs.unlinkSync(util.getPagePath(page.id));
        } catch(e) {}
    }

    console.log(added + ' new');
    console.log(updated + ' updated');
    console.log(removed + ' removed');
    fs.writeFileSync('./data/update.json', JSON.stringify(final));
}

function markUpdated(page) {
    var idx = indexOfPage(page);
    if (idx > -1) {
        pageInfo[idx] = page;
        updated++;
    } else {
        pageInfo.push(page);
        added++;
    }
}

function indexOfPage(page) {
    for (var i = 0; i < pageInfo.length; i++) {
        if (pageInfo[i].id === page.id) {
            return i;
        }
    }
    return -1;
}

function savePage(id, content) {
    var path = util.getPagePath(id);
    if (!fs.existsSync(path.prefix)) {
        fs.mkdirSync(path.prefix);
    }
    fs.writeFileSync(path.full, content);
}

// http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&pageids=1912|4191
// Max 50 page ids at the same time
function getPages(pages) {
    var param = {
        action: 'query',
        prop: 'revisions',
        rvprop: 'content',
        'continue': '',
        pageids: pages.map(function (page) {
            return page.id
        }).join(['|'])
    };
    return util.request(param).then(function (result) {
        var resPages = result.query.pages;
        for (var i in resPages) {
            if (i === '0') {
                continue;
            }
            var page = resPages[i];
            var pageJSON = JSON.stringify({
                id: page.pageid,
                title: page.title,
                content: page.revisions[0]['*']
            }, null, 2);
            savePage(page.pageid, pageJSON);
            for (var j = 0; j < pages.length; j++) {
                if (pages[j].id === page.pageid) {
                    markUpdated(pages[j]);
                }
            }
        }
    });
}
