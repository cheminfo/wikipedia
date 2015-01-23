define(function () {
    return function openWikiID(id) {
        window.open('http://en.wikipedia.org/w/index.php?curid=' + id, '_blank')
    };
});
