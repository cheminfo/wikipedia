var util = require('./util'),
    fs = require('fs');

var total = [];

getForTemplate('Infobox_drug').then(function () {
    return getForTemplate('Chembox');
}).then(function () {
    console.log('Found ' + total.length + ' pages');
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
