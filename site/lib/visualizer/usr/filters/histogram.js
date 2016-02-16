'use strict';

define(['lib/pixastic/pixastic'], function (Pixastic) {

    return {
        filter: function histogramFilter(dataObject, resolve) {
            var image = new Image();
            image.src = dataObject.get();
            var hist = {};
            Pixastic.process(image, 'colorhistogram', {returnValue: hist});
            resolve(hist);
        }
    };

});
