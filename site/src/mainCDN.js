function showAbout() {
    require(['jquery-ui'], function () {
        $('#aboutDialog').dialog({
            modal: true,
            buttons: {
                Ok: function () {
                    $(this).dialog('close');
                }
            }
        });
    });
}

requirejs.config({
    baseUrl: 'http://www.lactame.com/visualizer/v2.9.9'
});

require(['init'], function() {
});
