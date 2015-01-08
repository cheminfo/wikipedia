var util = require('./util'),
    ids = require('./data/ids.json'),
    fs = require('fs'),
    ProgressBar = require('progress');

var start = 0,
    length = ids.length,
    revisions = [],
    missing = [];

console.log(ids.length + ' ids');

var bar = new ProgressBar('  [:bar] :current treated (:eta s)', {
    width: 30,
    incomplete: ' ',
    total: length
});

getNextEntries().then(function () {
    console.log(revisions.length + ' revisions');
    fs.writeFileSync('./data/rev.json', JSON.stringify(revisions));
    console.log(missing.length + ' missing');
    fs.writeFileSync('./data/rev-missing.json', JSON.stringify(missing));
}).catch(function (err) {
    console.error(err);
});

function getNextEntries() {
    var idsToGet = [];
    var ii = Math.min(length, start + 50);
    for (; start < ii; start++) {
        idsToGet.push(ids[start]);
    }
    start = ii;
    return getRevisions(idsToGet).then(function () {
        bar.tick(idsToGet.length);
        if (start < length) {
            return getNextEntries();
        }
    });
}

// http://en.wikipedia.org/w/api.php?action=help&modules=query%2Brevisions
// http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=ids&pageids=1912|4191
// Max 50 page ids at the same time

function getRevisions(ids) {
    var param = {
        action: 'query',
        prop: 'revisions',
        rvprop: 'ids',
        'continue': '',
        pageids: ids.join(['|'])
    };
    return util.request(param).then(function (result) {
        var pages = result.query.pages;
        for (var i = 0; i < ids.length; i++) {
            var page = pages[ids[i]];
            if (page) {
                revisions.push({
                    id: page.pageid,
                    rev: page.revisions[0].revid
                });
            } else {
                missing.push(ids[i]);
            }
        }
    });
}
