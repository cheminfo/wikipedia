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

        var molecules = API.getData('molecules');
        if (molecules && molecules.length) {
            var l = molecules.length,
                db = new Array(l),
                result = new Array(l);
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
                setImmediate(function () {
                    callback();
                });
            }, function () {
                Debug.debug(timer.time('ms'));
                API.createData('searchResult', result);
                API.stopLoading('mol');
            });

        }
    };
});
