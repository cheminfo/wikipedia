'use strict';

define(['lib/chemistry/gc-generator'], function (GC) {

    return {
        filter: function gcFilter(gc, resolve) {

            var generator = new GC();
            generator.appendPeaks(gc);
            resolve(generator.getSpectrum());

        }
    };

});
