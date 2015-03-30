define(['src/util/api', 'components/openchemlib/dist/openchemlib-core'], function (API, ACT) {
    return function putMol() {
        var hover = API.getData('hover');
        var act;
        if (hover && (act = hover.get('actID'))) {
            var mol = ACT.Molecule.fromIDCode(act.value, act.coordinates).toMolfile();
            API.createData('customQueryOpts', {searchMode: 'Similarity'});
            API.createData('queryOptions', {searchMode: 'Similarity'});
            API.createData('selectedMol', {type: 'mol2d', value: mol});
            API.createData('query', {type: 'mol2d', value: mol});
        }
    };

});
