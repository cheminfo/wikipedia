var util = require('./util'),
    fs = require('fs');

var total = [];

console.log('Getting page ids');

var diff = 0;

getForTemplate('Infobox_drug').then(function () {
    console.log(total.length + ' Drugbox');
    diff = total.length;
    return getForTemplate('Chembox');
}).then(function () {
    console.log((total.length - diff) + ' Chembox');
    var oldIds = [];
    try {
        oldIds = require('./data/ids.json');
    } catch (e) {}
    console.log(total.length + ' Total');
    console.log('Before : ' + oldIds.length);
    fs.writeFileSync('./data/ids.json', JSON.stringify(total));
}).catch(function (err) {
    console.error(err);
});

function getForTemplate(templateName) {

    return getList(templateName).then(concatResult);

    function concatResult(result) {
        total = total.concat(result.ids);
        if (result.eicontinue) {
            return getList(templateName, result.eicontinue).then(concatResult);
        }
    }
}

// http://en.wikipedia.org/w/api.php?action=help&modules=query%2Bembeddedin
// https://en.wikipedia.org/w/api.php?action=query&list=embeddedin&eititle=Template:Infobox_drug&continue&einamespace=0
// Template:Chembox

function getList(templateName, eicontinue) {
    var param = {
        action: 'query',
        list: 'embeddedin',
        eititle: 'Template:' + templateName,
        'continue': '',
        einamespace: 0,
        eilimit: 500,
        prop: 'info'
    };
    if (eicontinue) {
        param.eicontinue = eicontinue;
    }
    return util.request(param).then(function (result) {
        return {
            ids: result.query.embeddedin.map(function (v) {
                return v.pageid
            }),
            eicontinue: result.continue ? result.continue.eicontinue : false
        };
    });
}
