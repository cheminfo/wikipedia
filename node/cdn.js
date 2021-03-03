/*
Automatically update the indexCDN.html and mainCDN.js files
 */

var config = require('./config.json');

var fs = require('fs');

var main = fs.readFileSync('../site/src/main.js', 'utf-8');
var mainCDN = main.replace("baseUrl: 'lib/visualizer'", "baseUrl: 'https://www.lactame.com/visualizer/" + config.visualizer.cdn + "'");
fs.writeFileSync('../site/src/mainCDN.js', mainCDN);

var index = fs.readFileSync('../site/index.html', 'utf-8');
var indexCDN = index.replace('<script data-main="src/main" src="lib/visualizer/components/requirejs/require.js">', '<script data-main="src/mainCDN" src="http://www.lactame.com/visualizer/' + config.visualizer.cdn + '/components/requirejs/require.js">');
fs.writeFileSync('../site/indexCDN.html', indexCDN);
