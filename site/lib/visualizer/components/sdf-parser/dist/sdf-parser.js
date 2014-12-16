!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.SDFParser=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



// options: an object

function parse(sdf, options) {
    // we will find the delimiter in order to be much faster and not use regular expression
    var header = sdf.substr(0, 1000);
    var crlf = '\n';
    if (header.indexOf('\r\n') > -1) {
        crlf = '\r\n';
    } else if (header.indexOf('\r') > -1) {
        crlf = '\r';
    }

    var sdfParts = sdf.split(crlf + '$$$$' + crlf);
    var molecules = [];
    var labels = {};

    var start = Date.now();

    var i = 0, ii = sdfParts.length,
        sdfPart, parts, molecule, j, jj,
        lines, from, to, label, k, kk;
    for (; i < ii; i++) {
        sdfPart = sdfParts[i];
        parts = sdfPart.split(crlf + '>');
        if (parts.length > 0 && parts[0].length > 10) {
            molecule = {};
            molecules.push(molecule);
            molecule.molfile = {type: 'mol2d', value: parts[0] + crlf};
            jj = parts.length;
            for (j = 1; j < jj; j++) {
                lines = parts[j].split(crlf);
                from = lines[0].indexOf('<');
                to = lines[0].indexOf('>');
                label = lines[0].substring(from + 1, to);
                if (labels[label]) {
                    labels[label].counter++;
                } else {
                    labels[label] = {counter: 1, isNumeric: true};
                }
                kk = lines.length - 1;
                for (k = 1; k < kk; k++) {
                    if (molecule[label]) {
                        molecule[label] += crlf + lines[k];
                    } else {
                        molecule[label] = lines[k];
                    }
                }
                if (labels[label].isNumeric) {
                    if (!isFinite(molecule[label])) {
                        labels[label].isNumeric = false;
                    }
                }
            }
        }
    }

    // all numeric fields should be converted to numbers
    var numericFields=[];
    for (var label in labels) {
        var currentLabel=labels[label];
        currentLabel.minValue=Number.MAX_VALUE;
        currentLabel.maxValue=Number.MIN_VALUE;
        if (currentLabel.isNumeric) {
            for (var j=0; j < molecules.length; j++) {
                if (molecules[j][label]) {
                    var value=parseFloat(molecules[j][label]);
                    molecules[j][label]=value;
                    if (value>currentLabel.maxValue) currentLabel.maxValue=value;
                    if (value<currentLabel.minValue) currentLabel.minValue=value;
                }
            }
        }
    }

    var statistics = [];

    for (var key in labels) {
        var statistic=labels[key];
        statistic.label=key;
        statistics.push(statistic);
    }

    return {
        time: Date.now() - start,
        molecules: molecules,
        labels: Object.keys(labels),
        statistics: statistics
    };

}

module.exports = parse;


},{}]},{},[1])(1)
});