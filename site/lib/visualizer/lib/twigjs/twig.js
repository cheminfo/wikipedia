define(["components/twig.js/twig.min", "src/util/typerenderer", "src/util/util"], function (a, b, c) {
    return a.extend(function (a) {
        a.Template.prototype.renderAsync = function () {
            var a = this.promises = [];
            return {
                render: function () {
                    Promise.all(a).then(function (a) {
                        for (var b, c = 0, d = a.length; d > c; c++)b = a[c], $("#" + b.id).html(b.html), b.def.build && b.def.build()
                    })
                }, html: this.render.apply(this, arguments)
            }
        }
    }), a.extendFunction("rendertype", function (a, d) {
        if (a) {
            d && (a = new DataObject({type: d, value: a}));
            var e = c.getNextUniqueId();
            return this.promises.push(new Promise(function (c) {
                var d = b.toScreen(a, {});
                d.always(function (a) {
                    c({html: a, def: d, id: e})
                })
            })), '<div id="' + e + '"></div>'
        }
    }), a.extendFunction("toJSON", function (a, b) {
        return b = b || 2, "<pre><code>" + JSON.stringify(a, null, b) + "</code></pre>"
    }), a.extendFunction("log", function () {
        console.log.apply(console, arguments)
    }), a
});