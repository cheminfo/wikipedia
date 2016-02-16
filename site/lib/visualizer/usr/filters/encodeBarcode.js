'use strict';

define(['components/jsbarcode/jsBarcode.min'], function () {

    return {
        filter: function (dataObject, resolve, reject) {
            var $img = $('<img/>');
            var obj = dataObject.get();
            try {
                $img.JsBarcode(obj.val || 'Hi!', obj);
                console.log(obj);
                return resolve({
                    type: 'png',
                    value: $img[0].src
                });
            } catch (e) {
                reject(e);
            }


        }
    };

});
