(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSONChart"] = factory();
	else
		root["JSONChart"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function check(value, options) {
	    if (options === undefined) options = {};
	    // we will try to determine the type of the value
	    // type could be:
	    // 1DY, 1DXY, 2DXYXY, 2DXXYY
	    var type = options.type;

	    if (!type) { // auto determination of type
	        if (Array.isArray(value)) { //
	            if (value[0]) {
	                if (Array.isArray(value[0])) {
	                    if (value.length == 2) {
	                        type = '2DXXYY';
	                    } else {
	                        type = '2DXYXY';
	                    }
	                } else { // 1D
	                    type = '1DY'; // by default we say it is just Y points ... dangerous !
	                }
	            }
	        } else if (typeof value==='object') {
	            if (value.x || value.y) {
	                type = 'XY';
	            }
	        }
	    }
	    
	    
	    var chart;

	    switch (type) {
	        case '1DY':
	            chart = {
	                data: {
	                    y: value
	                }
	            };
	            break;
	        case 'XY':
	            chart = {
	                data: value
	            };
	            break;
	        case '1DXY':
	            var x = new Array(value.length / 2);
	            var y = new Array(value.length / 2);
	            for (var i = 0; i < value.length; i = i + 2) {
	                x[i / 2] = value[i];
	                y[i / 2] = value[i + 1];
	            }
	            chart = {
	                data: {
	                    x: x,
	                    y: y
	                }
	            };
	            break;
	        case '2DXYXY':
	            var x = new Array(value.length);
	            var y = new Array(value.length);
	            for (var i = 0; i < value.length; i++) {
	                x[i] = value[i][0];
	                y[i] = value[i][1];
	            }
	            chart = {
	                data: {
	                    x: x,
	                    y: y
	                }
	            };
	            break;
	        case '2DXXYY':
	            chart = {
	                data: {
	                    x: value[0],
	                    y: value[1]
	                }
	            };
	            break;
	        default:
	            chart = value;
	    }

	    // We will now check the chart
	    // Is there always some x data ????
	    if (!chart.data) {
	        chart.data = [];
	    }
	    if (!Array.isArray(chart.data)) {
	        chart.data = [chart.data]
	    }
	    for (var i = 0; i < chart.data.length; i++) {
	        var data = chart.data[i];
	        if (!data.y || !Array.isArray(data.y)) data.y = [];
	        if (data.y.length > 1) {
	            if (!data.x || !Array.isArray(data.x) || data.x.length != data.y.length) {
	                var minX = options.minX || 0;
	                var maxX = options.maxX || (data.y.length - 1);
	                var step = (maxX - minX) / (data.y.length - 1);
	                data.x = new Array(data.y.length);
	                for (var j = 0; j < data.y.length; j++) {
	                    data.x[j] = minX + step * j;
	                }
	            }
	        }
	    }

	    return chart;
	}

	exports.check = exports.validate = check;


/***/ }
/******/ ])
});
;