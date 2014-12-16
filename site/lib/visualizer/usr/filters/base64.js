

define(function () {

    var reg = new RegExp("^data:([^;]+);base64,(.+)$");

    return {
        filter: function base64Filter(dataObject, resolve, reject) {
            if (dataObject.getType() !== "string")
                return reject();

            var str = dataObject.get();
            var result = reg.exec(str);
            if (!result)
                return reject();

            resolve({
                mimeType: result[1],
                base64: result[2]
            });
        }
    };

});