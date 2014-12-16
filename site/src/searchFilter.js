define(['src/util/api', 'lib/actelion/actelion.js'], function (API, ACT) {
    return {
        filter: function (value, resolve, reject) {

            resolve(value);

            var molfile, options;
            if(value.__name === 'query') {
                molfile = value;
                options = API.getData('queryOptions');
            } else if(value.__name === 'queryOptions') {
                options = value;
                molfile = API.getData('query');
            }

            var molecules = API.getData('molecules');

            var result = [];

            if (!molfile || !molfile.get() || !options || !molecules) {
                for (var i = 0, ii = molecules.length; i < ii; i++) {
                    result.push(molecules[i]);
                }
                return API.createData('searchResult', result);
            }

            var queryMol = ACT.Molecule.fromMolfile(molfile.get());
            var mode = String(options.get('searchMode'));

            switch (mode) {
                case 'Exact structure':
                {
                    var idcode = queryMol.getIDCode();
                    for (var i = 0, ii = molecules.length; i < ii; i++) {
                        if (String(molecules[i].actID.value) === idcode) {
                            result = [molecules[i]];
                            break;
                        }
                    }
                    break;
                }
                case 'Substructure':
                {
                    queryMol.setFragment(true);
                    var queryIndex = queryMol.index;
                    var searcher = new ACT.SSSearchWithIndex();
                    searcher.setFragment(queryMol, queryIndex);
                    var db = API.cache('db');
                    for (var i = 0, ii = db.length; i < ii; i++) {
                        var actmol = db[i].molecule,
                            mol = molecules[db[i].index];
                        searcher.setMolecule(actmol, mol.act_idx);
                        if (searcher.isFragmentInMolecule()) {
                            result.push(mol);
                        }
                    }
                    result.sort(function (a, b) {
                        return a.mw - b.mw;
                    })

                    break;
                }
                case 'Similarity':
                {
                    var index = queryMol.getIndex();
                    var targetMW = queryMol.getMolecularFormula().getRelativeWeight();
                    var targetID = queryMol.getIDCode();
                    var intermediate = [];
                    var similarity;
                    for (var i = 0, ii = molecules.length; i < ii; i++) {
                        if (String(molecules[i].actID.value) === targetID) {
                            similarity=1e10;
                        } else {
                            similarity = ACT.SSSearchWithIndex.getTanimotoSimilarity(index, molecules[i].act_idx) * 100000 - Math.abs(targetMW - molecules[i].mw) / 1000;
                        }
                        intermediate.push([molecules[i], similarity]);
                    }
                    intermediate.sort(function (a, b) {
                        return b[1] - a[1];
                    });

                    for (var i = 0, ii = intermediate.length; i < ii; i++) {
                        result.push(intermediate[i][0]);
                    }

                    break;
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
            API.setVar('hover', ['searchResult', 0]);
        }
    };
});
