function showMain() {
    require('src/main/grid').switchToLayer('Default layer');
}

function showAbout() {
    require('src/main/grid').switchToLayer('About');
}

requirejs.config({
    baseUrl: 'lib/visualizer'
});

require(['init'], function() {
});