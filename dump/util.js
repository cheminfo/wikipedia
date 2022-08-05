var superagent = require('superagent');

exports.request = function (options) {
    options.format = 'json';
    return new Promise(function (resolve, reject) {
        superagent.get('https://en.wikipedia.org/w/api.php')
            .set('User-Agent', 'WikipediaSMILES/1.0 (https://wikipedia.cheminfo.org) SuperAgent/1.0')
            .query(options)
            .end(function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
    });
};

exports.getPagePath = function (id) {
    var idStr = String(id),
        l = idStr.length;
    var prefix = idStr.substring(l, l - 2);
    var prePath = './data/pages/' + prefix;
    return {
        prefix: prePath,
        full: prePath + '/' + idStr + '.json'
    };
};
