'use strict';

define(['uri/URI'], function (URI) {
    return function updateFragment(smiles) {
        var url = new URI(window.location.href);
        url.fragment(encodeURIComponent(smiles));
        window.history.pushState(null, "", url.href());
    };

});
