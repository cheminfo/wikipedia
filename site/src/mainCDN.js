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

function switchLayer() {
    var switchLink = $('#wikipediaLayerSwitch');
    var grid = require('src/main/grid');
    if (switchLink.attr('data-current-page') === 'main') {
        grid.switchToLayer('BrowseErrors');
        switchLink.attr('data-current-page', 'errors');
        switchLink.text('Explore structures');
    } else {
        grid.switchToLayer('Default layer');
        switchLink.attr('data-current-page', 'main');
        switchLink.text('Browse errors');
    }
}

requirejs.config({
    baseUrl: 'http://www.lactame.com/visualizer/v2.11.0'
});

require(['init'], function() {
});
