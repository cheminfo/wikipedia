/**
 * json-chart - JSON Chart validator
 * @version v1.0.0
 * @link https://github.com/cheminfo/json-chart
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.JSONChart=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});