define(['src/util/api'], function (API) {

    return function viewDrug() {
        var currentDrug = API.getData('hover');
        if (currentDrug) {
            var link = currentDrug.get('wiki').get();
            window.open(link, '_blank')
        }
    };

});
