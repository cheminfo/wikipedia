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
    baseUrl: 'lib/visualizer'
});

require(['init'], function() {
});
