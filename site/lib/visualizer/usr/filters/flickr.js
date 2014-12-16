

define([], function () {

    return {
        filter: function flickrFilter(image, resolve) {

            var result = {};
            image = image.get();
            result.type = "jpg";
            result.value = "http://farm" + image[ "_farm" ] + ".staticflickr.com/" + image["_server"] + "/" + image["_id"] + "_" + image["_secret"] + "_b.jpg";
            resolve(result);

        }
    };

});