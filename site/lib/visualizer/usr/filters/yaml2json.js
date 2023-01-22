'use strict';

define(['js-yaml'], function (Yaml) {
  return {
    filter: function base64Filter(dataObject, resolve, reject) {
      if (dataObject.getType() !== 'string')
        return reject(new TypeError('yaml2json filter expects a string'));

      var str = dataObject.get();
      var json = Yaml.safeLoad(str);

      resolve(json);
    }
  };
});
