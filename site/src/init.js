define(['src/util/api', 'src/util/debug', 'lib/actelion/actelion.js', 'components/async/lib/async'], function (API, Debug, ACT, async) {
    return function () {

        if (API.cache('db')) {
            return;
        }

        function getName(value) {
            value = value.replace(/_/g, ' ');
            value = decodeURIComponent(value);
            return value;
        }

        function toObj(val) {
            return {id: val};
        }

        var errors = API.getData('errors');

        var fullA = API.getData('fullA');
        var full = fullA.map(toObj);

        var el = errors.length;
        var hid = 0;

        for (var k = 0; k < el; k++) {
            var id = errors[k].id;
            var idx = fullA.indexOf(id);
            if (idx > -1) {
                var error = full[idx];
                if (!error._highlight) {
                    error._highlight = [++hid];
                } else {
                    error._highlight.push(++hid);
                }
                errors[k]._highlight = [hid];
            } else {
                errors[k]._highlight = [];
            }
        }

        API.createData('full', full);
        API.createData('dup', API.getData('dupA').map(toObj));
        API.createData('notfound', API.getData('notfoundA').map(toObj));

        var molecules = API.getData('molecules');
        if (molecules && molecules.length) {
            // ?mini=true => only 500 molecules for testing
            var l = molecules.length;
            if(document.location.search.indexOf('mini') > -1) {
                l = Math.min(l, 500);
            }
            var db = new Array(l);
            var result = new Array(l);
            API.cache('db', db);
            var timer = Debug.timer();
            var i = 0, ii, molecule;

            async.whilst(function () {
                ii = Math.min(i + 1000, l);

                for (; i < ii; i++) {
                    API.loading('mol', 'Loading molecules (' + (i + 1) + '/' + l + ')');
                    molecule = molecules[i];
                    // we will add the links in the molecules
                    molecule.link = 'http://en.wikipedia.org/w/index.php?printable=yes&title=' + molecule.code;
                    molecule.wiki = 'http://en.wikipedia.org/w/index.php?title=' + molecule.code;
                    molecule.name = getName(molecule.code);
                    molecule.lowName = molecule.name.toLowerCase();
                    var newEntry = {};
                    newEntry.molecule = ACT.Molecule.fromIDCode(molecule.actID.value, false);
                    newEntry.molecule.ensureHelperArrays(3);
                    newEntry.index = i;
                    db[i] = newEntry;
                    result[i] = molecule;
                }

                return ii !== l
            }, function (callback) {
                setImmediate(callback);
            }, function () {
                Debug.debug(timer.time('ms'));
                API.createData('searchResult', result);
                API.stopLoading('mol');
            });

        }
    };
});
