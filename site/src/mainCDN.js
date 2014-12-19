function showMain() {
    require('src/main/grid').switchToLayer('Default layer');
}

function showAbout() {
    require('src/main/grid').switchToLayer('About');
}

requirejs.config({
    baseUrl: 'http://www.lactame.com/visualizer/v2.9.9'
});

require(['init'], function() {
});