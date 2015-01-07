function showAbout() {
    require(['jquery-ui'], function () {
        $('#aboutDialog').dialog({
            modal: true,
            title: "About wikipedia chemical structure explorer",
            minWidth: 600,
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
