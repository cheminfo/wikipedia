define(['src/util/api', 'lib/actelion/actelion.js'], function (API, ACT) {
    return {
        filter: function (value, resolve, reject) {

            resolve(value);

            var molfile, options;
            if (value.__name === 'query') {
                molfile = value;
                options = API.getData('queryOptions');
            } else if (value.__name === 'queryOptions') {
                options = value;
                molfile = API.getData('query');
            }

            var molecules = API.getData('molecules');

            var result = [],
                i, ii;

            if (!molfile || !molfile.get() || !options) {
                for (i = 0, ii = molecules.length; i < ii; i++) {
                    result.push(molecules[i]);
                }
                sendResult(result);
            }

            var queryMol = ACT.Molecule.fromMolfile(molfile.get());
            var mode = String(options.get('searchMode'));
            var targetMW;

            switch (mode) {
                case 'Exact structure':
                {
                    var idcode = queryMol.getIDCode();
                    for (i = 0, ii = molecules.length; i < ii; i++) {
                        if (String(molecules[i].actID.value) === idcode) {
                            result = [molecules[i]];
                            break;
                        }
                    }
                    break;
                }
                case 'Substructure':
                {
                    targetMW = queryMol.getMolecularFormula().getRelativeWeight();
                    queryMol.setFragment(true);
                    var queryIndex = queryMol.index;
                    var searcher = new ACT.SSSearchWithIndex();
                    searcher.setFragment(queryMol, queryIndex);
                    var db = API.cache('db');
                    for (i = 0, ii = db.length; i < ii; i++) {
                        var actmol = db[i].molecule,
                            mol = molecules[db[i].index];
                        searcher.setMolecule(actmol, mol.act_idx);
                        if (searcher.isFragmentInMolecule()) {
                            result.push(mol);
                        }
                    }
                    result.sort(function (a, b) {
                        return Math.abs(targetMW - a.mw) - Math.abs(targetMW - b.mw);
                    });

                    break;
                }
                case 'Similarity':
                {
                    var index = queryMol.getIndex();
                    targetMW = queryMol.getMolecularFormula().getRelativeWeight();
                    var targetID = queryMol.getIDCode();
                    var intermediate = [];
                    var similarity;
                    for (i = 0, ii = molecules.length; i < ii; i++) {
                        if (String(molecules[i].actID.value) === targetID) {
                            similarity = 1e10;
                        } else {
                            similarity = ACT.SSSearchWithIndex.getTanimotoSimilarity(index, molecules[i].act_idx) * 100000 - Math.abs(targetMW - molecules[i].mw) / 1000;
                        }
                        intermediate.push([molecules[i], similarity]);
                    }
                    intermediate.sort(function (a, b) {
                        return b[1] - a[1];
                    });

                    for (i = 0, ii = intermediate.length; i < ii; i++) {
                        result.push(intermediate[i][0]);
                    }

                    break;
                }
            }

            sendResult(result);

            API.setVar('hover', ['searchResult', 0]);

            function sendResult(result) {
                var name = String(options.get('name')).toLowerCase();
                if (name != 'undefined') { // filter by name
                    var oldResult = result;
                    result = [];
                    for (i = 0, ii = oldResult.length; i < ii; i++) {
                        if (oldResult[i].lowName.indexOf(name) > -1) {
                            result.push(oldResult[i]);
                        }
                    }
                }

                // if there is some result we get the wikipedia article if the first article changed !

                if (result.length > 0) {
                    var oldLink = '';
                    if (API.getData('link')) {
                        oldLink = API.getData('link') + '';
                    }
                    var newLink = result[0].link + '';
                    if (oldLink != newLink) {
                        API.createData('link', result[0].link);
                    }
                }

                API.createData('searchResult', result);
            }

        }
    };
});
