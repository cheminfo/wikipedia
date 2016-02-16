'use strict';

define(function () {

    var reg = new RegExp('^data:([^;]+);base64,(.+)$');

    return {
        filter: function base64Filter(dataObject, resolve, reject) {
            if (dataObject.getType() !== 'string')
                return reject(new TypeError('Base 64 filter expects a string'));

            var str = dataObject.get();
            var result = reg.exec(str);
            if (!result)
                return reject('Base 64 filter could not match a base 64 pattern' + reg.toString());

            resolve({
                mimeType: result[1],
                base64: result[2]
            });
        }
    };
});
