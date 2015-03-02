

define(['lodash', 'src/util/util', 'marked', 'highlightjs'], function (_, Util, marked, highlights) {
    var cssPromises = [];
    cssPromises.push(Util.loadCss('./components/highlight.js/src/styles/default.css'));
    var cssLoaded = Promise.all(cssPromises);

    return {
        filter: function gcFilter(md, resolve) {
            cssLoaded.then(function() {
                resolve({
                    type: 'html',
                    value: marked(md.resurrect(), {
                        highlight: function (code) {
                            return highlights.highlightAuto(code).value;
                        }
                    })
                });
            });

        }
    };
});