function showAbout() {
    require(['src/util/ui'], function (ui) {
        ui.dialog($('#aboutDialog'), {
            title: 'About wikipedia chemical structure explorer',
            minWidth: 600,
            buttons: {
                OK: function () {
                    $(this).dialog('close');
                }
            },
            noWrap: true
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
    baseUrl: 'http://www.lactame.com/visualizer/v2.51.0'
});

require(['init'], function() {
});
