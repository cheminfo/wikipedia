'use strict';

define(function () {

    var reg = /^doi:/i;

    return {
        filter: function doiFilter(value, resolve) {
            // the filter always receive a dataobject and is therefore typed
            // we can change the type of the object so that it can be easily displayed in another module or rendered the
            // expected way
            if (value)
                value = String(value.get()).replace(reg, '');
            resolve({type: 'string', value: 'http://dx.doi.org/' + value});
        }
    };

});
