/**
 * jcampconverter - Parse and convert JCAMP data
 * @version v2.0.5
 * @link https://github.com/cheminfo/jcampconverter
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.JcampConverter=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


function getConverter() {

    // the following RegExp can only be used for XYdata, some peakTables have values with a "E-5" ...
    var xyDataSplitRegExp = /[,\t \+-]*(?=[^\d,\t \.])|[ \t]+(?=[\d+\.-])/;
    var removeCommentRegExp = /\$\$.*/;
    var peakTableSplitRegExp = /[,\t ]+/;
    var DEBUG = false;

    var GC_MS_FIELDS = ['TIC', '.RIC', 'SCANNUMBER'];

    function convertToFloatArray(stringArray) {
        var l = stringArray.length;
        var floatArray = new Array(l);
        for (var i = 0; i < l; i++) {
            floatArray[i] = parseFloat(stringArray[i]);
        }
        return floatArray;
    }

    /*
     options.keepSpectra: keep the original spectra for a 2D
     */

    function convert(jcamp, options) {
        options = options || {};

        var keepRecordsRegExp=/^[A-Z]+$/;
        if (options.keepRecordsRegExp) keepRecordsRegExp=options.keepRecordsRegExp;

        var start = new Date();

        var ntuples = {},
            ldr,
            dataLabel,
            dataValue,
            ldrs,
            i, ii, position, endLine, infos;

        var result = {};
        result.profiling = [];
        result.logs = [];
        var spectra = [];
        result.spectra = spectra;
        result.info = {};
        var spectrum = {};

        if (!(typeof jcamp == 'string')) return result;
        // console.time('start');

        if (result.profiling) result.profiling.push({action: 'Before split to LDRS', time: new Date() - start});

        ldrs = jcamp.split(/[\r\n]+##/);

        if (result.profiling) result.profiling.push({action: 'Split to LDRS', time: new Date() - start});

        if (ldrs[0]) ldrs[0] = ldrs[0].replace(/^[\r\n ]*##/, '');

        for (i = 0, ii = ldrs.length; i < ii; i++) {
            ldr = ldrs[i];
            // This is a new LDR
            position = ldr.indexOf('=');
            if (position > 0) {
                dataLabel = ldr.substring(0, position);
                dataValue = ldr.substring(position + 1).trim();
            } else {
                dataLabel = ldr;
                dataValue = '';
            }
            dataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();

            if (dataLabel == 'DATATABLE') {

                endLine = dataValue.indexOf('\n');
                if (endLine == -1) endLine = dataValue.indexOf('\r');
                if (endLine > 0) {
                    var xIndex = -1;
                    var yIndex = -1;
                    // ##DATA TABLE= (X++(I..I)), XYDATA
                    // We need to find the variables

                    infos = dataValue.substring(0, endLine).split(/[ ,;\t]+/);

                    if (infos[0].indexOf('++') > 0) {
                        var firstVariable = infos[0].replace(/.*\(([a-zA-Z0-9]+)\+\+.*/, '$1');
                        var secondVariable = infos[0].replace(/.*\.\.([a-zA-Z0-9]+).*/, '$1');
                        xIndex = ntuples.symbol.indexOf(firstVariable);
                        yIndex = ntuples.symbol.indexOf(secondVariable);
                    }

                    if (xIndex == -1) xIndex = 0;
                    if (yIndex == -1) yIndex = 0;

                    if (ntuples.first) {
                        if (ntuples.first.length > xIndex) spectrum.firstX = ntuples.first[xIndex];
                        if (ntuples.first.length > yIndex) spectrum.firstY = ntuples.first[yIndex];
                    }
                    if (ntuples.last) {
                        if (ntuples.last.length > xIndex) spectrum.lastX = ntuples.last[xIndex];
                        if (ntuples.last.length > yIndex) spectrum.lastY = ntuples.last[yIndex];
                    }
                    if (ntuples.vardim && ntuples.vardim.length > xIndex) {
                        spectrum.nbPoints = ntuples.vardim[xIndex];
                    }
                    if (ntuples.factor) {
                        if (ntuples.factor.length > xIndex) spectrum.xFactor = ntuples.factor[xIndex];
                        if (ntuples.factor.length > yIndex) spectrum.yFactor = ntuples.factor[yIndex];
                    }
                    if (ntuples.units) {
                        if (ntuples.units.length > xIndex) spectrum.xUnit = ntuples.units[xIndex];
                        if (ntuples.units.length > yIndex) spectrum.yUnit = ntuples.units[yIndex];
                    }
                    spectrum.datatable = infos[0];
                    if (infos[1] && infos[1].indexOf('PEAKS') > -1) {
                        dataLabel = 'PEAKTABLE';
                    } else if (infos[1] && (infos[1].indexOf('XYDATA') || infos[0].indexOf('++') > 0)) {
                        dataLabel = 'XYDATA';
                        spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
                    }
                }
            }


            if (dataLabel == 'TITLE') {
                spectrum.title = dataValue;
            } else if (dataLabel == 'DATATYPE') {
                spectrum.dataType = dataValue;
                if (dataValue.indexOf('nD') > -1) {
                    result.twoD = true;
                }
            } else if (dataLabel == 'XUNITS') {
                spectrum.xUnit = dataValue;
            } else if (dataLabel == 'YUNITS') {
                spectrum.yUnit = dataValue;
            } else if (dataLabel == 'FIRSTX') {
                spectrum.firstX = parseFloat(dataValue);
            } else if (dataLabel == 'LASTX') {
                spectrum.lastX = parseFloat(dataValue);
            } else if (dataLabel == 'FIRSTY') {
                spectrum.firstY = parseFloat(dataValue);
            } else if (dataLabel == 'NPOINTS') {
                spectrum.nbPoints = parseFloat(dataValue);
            } else if (dataLabel == 'XFACTOR') {
                spectrum.xFactor = parseFloat(dataValue);
            } else if (dataLabel == 'YFACTOR') {
                spectrum.yFactor = parseFloat(dataValue);
            } else if (dataLabel == 'DELTAX') {
                spectrum.deltaX = parseFloat(dataValue);
            } else if (dataLabel == '.OBSERVEFREQUENCY' || dataLabel == '$SFO1') {
                if (!spectrum.observeFrequency) spectrum.observeFrequency = parseFloat(dataValue);
            } else if (dataLabel == '.OBSERVENUCLEUS') {
                if (!spectrum.xType) result.xType = dataValue.replace(/[^a-zA-Z0-9]/g, '');
            } else if (dataLabel == '$SFO2') {
                if (!result.indirectFrequency) result.indirectFrequency = parseFloat(dataValue);

            } else if (dataLabel == '$OFFSET') {   // OFFSET for Bruker spectra
                result.shiftOffsetNum = 0;
                if (!result.shiftOffsetVal)  result.shiftOffsetVal = parseFloat(dataValue);
            } else if (dataLabel == '$REFERENCEPOINT') {   // OFFSET for Varian spectra


                // if we activate this part it does not work for ACD specmanager
                //         } else if (dataLabel=='.SHIFTREFERENCE') {   // OFFSET FOR Bruker Spectra
                //                 var parts = dataValue.split(/ *, */);
                //                 result.shiftOffsetNum = parseInt(parts[2].trim());
                //                 result.shiftOffsetVal = parseFloat(parts[3].trim());
            } else if (dataLabel == 'VARNAME') {
                ntuples.varname = dataValue.split(/[, \t]+/);
            } else if (dataLabel == 'SYMBOL') {
                ntuples.symbol = dataValue.split(/[, \t]+/);
            } else if (dataLabel == 'VARTYPE') {
                ntuples.vartype = dataValue.split(/[, \t]+/);
            } else if (dataLabel == 'VARFORM') {
                ntuples.varform = dataValue.split(/[, \t]+/);
            } else if (dataLabel == 'VARDIM') {
                ntuples.vardim = convertToFloatArray(dataValue.split(/[, \t]+/));
            } else if (dataLabel == 'UNITS') {
                ntuples.units = dataValue.split(/[, \t]+/);
            } else if (dataLabel == 'FACTOR') {
                ntuples.factor = convertToFloatArray(dataValue.split(/[, \t]+/));
            } else if (dataLabel == 'FIRST') {
                ntuples.first = convertToFloatArray(dataValue.split(/[, \t]+/));
            } else if (dataLabel == 'LAST') {
                ntuples.last = convertToFloatArray(dataValue.split(/[, \t]+/));
            } else if (dataLabel == 'MIN') {
                ntuples.min = convertToFloatArray(dataValue.split(/[, \t]+/));
            } else if (dataLabel == 'MAX') {
                ntuples.max = convertToFloatArray(dataValue.split(/[, \t]+/));
            } else if (dataLabel == '.NUCLEUS') {
                if (result.twoD) {
                    result.yType = dataValue.split(/[, \t]+/)[0];
                }
            } else if (dataLabel == 'PAGE') {
                spectrum.page = dataValue.trim();
                spectrum.pageValue = parseFloat(dataValue.replace(/^.*=/, ''));
                spectrum.pageSymbol = spectrum.page.replace(/=.*/, '');
                var pageSymbolIndex = ntuples.symbol.indexOf(spectrum.pageSymbol);
                var unit = '';
                if (ntuples.units && ntuples.units[pageSymbolIndex]) {
                    unit = ntuples.units[pageSymbolIndex];
                }
                if (result.indirectFrequency && unit != 'PPM') {
                    spectrum.pageValue /= result.indirectFrequency;
                }
            } else if (dataLabel == 'RETENTIONTIME') {
                spectrum.pageValue = parseFloat(dataValue);
            } else if (dataLabel == 'XYDATA') {
                prepareSpectrum(result, spectrum);
                // well apparently we should still consider it is a PEAK TABLE if there are no '++' after
                if (dataValue.match(/.*\+\+.*/)) {
                    parseXYData(spectrum, dataValue, result);
                } else {
                    parsePeakTable(spectrum, dataValue, result);
                }
                spectra.push(spectrum);
                spectrum = {};
            } else if (dataLabel == 'PEAKTABLE') {
                prepareSpectrum(result, spectrum);
                parsePeakTable(spectrum, dataValue, result);
                spectra.push(spectrum);
                spectrum = {};
            } else if (isMSField(dataLabel)) {
                spectrum[convertMSFieldToLabel(dataLabel)] = dataValue;
            } else if (dataLabel.match(keepRecordsRegExp)) {
                result.info[dataLabel] = dataValue.trim();
            }
        }

        // Currently disabled
        //    if (options && options.lowRes) addLowRes(spectra,options);

        if (result.profiling) result.profiling.push({action: 'Finished parsing', time: new Date() - start});

        if (result.twoD) {
            add2D(result);
            if (result.profiling) result.profiling.push({
                action: 'Finished countour plot calculation',
                time: new Date() - start
            });
            if (!options.keepSpectra) {
                delete result.spectra;
            }
        }


        // maybe it is a GC (HPLC) / MS. In this case we add a new format
        if (spectra.length > 1 && spectra[0].dataType.toLowerCase().match(/.*mass./)) {
            addGCMS(result);
            if (result.profiling) result.profiling.push({
                action: 'Finished GCMS calculation',
                time: new Date() - start
            });
        }

        if (result.profiling) {
            result.profiling.push({action: 'Total time', time: new Date() - start});
        }

        //   console.log(result);
        //    console.log(JSON.stringify(spectra));
        return result;

    }


    function convertMSFieldToLabel(value) {
        return value.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    function isMSField(dataLabel) {
        for (var i = 0; i < GC_MS_FIELDS.length; i++) {
            if (dataLabel == GC_MS_FIELDS[i]) return true;
        }
        return false;
    }

    function addGCMS(result) {
        var spectra = result.spectra;
        var existingGCMSFields = [];
        var i;
        for (i = 0; i < GC_MS_FIELDS.length; i++) {
            var label = convertMSFieldToLabel(GC_MS_FIELDS[i]);
            if (spectra[0][label]) {
                existingGCMSFields.push(label);
            }
        }
        var gcms = {};
        gcms.gc = {};
        gcms.ms = [];
        for (i = 0; i < existingGCMSFields.length; i++) {
            gcms.gc[existingGCMSFields[i]] = [];
        }
        for (i = 0; i < spectra.length; i++) {
            var spectrum = spectra[i];
            for (var j = 0; j < existingGCMSFields.length; j++) {
                gcms.gc[existingGCMSFields[j]].push(spectrum.pageValue);
                gcms.gc[existingGCMSFields[j]].push(parseFloat(spectrum[existingGCMSFields[j]]));
            }
            if (spectrum.data) gcms.ms[i] = spectrum.data[0];

        }
        result.gcms = gcms;
    }

    function prepareSpectrum(result, spectrum) {
        if (!spectrum.xFactor) spectrum.xFactor = 1;
        if (!spectrum.yFactor) spectrum.yFactor = 1;
        if (spectrum.observeFrequency) {
            if (spectrum.xUnit && spectrum.xUnit.toUpperCase() == 'HZ') {
                spectrum.xUnit = 'PPM';
                spectrum.xFactor = spectrum.xFactor / spectrum.observeFrequency;
                spectrum.firstX = spectrum.firstX / spectrum.observeFrequency;
                spectrum.lastX = spectrum.lastX / spectrum.observeFrequency;
                spectrum.deltaX = spectrum.deltaX / spectrum.observeFrequency;
            }
        }
        if (result.shiftOffsetVal) {
            var shift = spectrum.firstX - result.shiftOffsetVal;
            spectrum.firstX = spectrum.firstX - shift;
            spectrum.lastX = spectrum.lastX - shift;
        }
    }

    function parsePeakTable(spectrum, value, result) {
        var i, ii, j, jj, values;
        var currentData = [];
        spectrum.data = [currentData];

        // counts for around 20% of the time
        var lines = value.split(/,? *,?[;\r\n]+ */);

        var k = 0;
        for (i = 1, ii = lines.length; i < ii; i++) {
            values = lines[i].trim().replace(removeCommentRegExp, '').split(peakTableSplitRegExp);
            if (values.length % 2 == 0) {
                for (j = 0, jj = values.length; j < jj; j = j + 2) {
                    // takes around 40% of the time to add and parse the 2 values nearly exclusively because of parseFloat
                    currentData[k++] = (parseFloat(values[j]) * spectrum.xFactor);
                    currentData[k++] = (parseFloat(values[j + 1]) * spectrum.yFactor);
                }
            } else {
                result.logs.push('Format error: ' + values);
            }
        }
    }

    function parseXYData(spectrum, value, result) {
        // we check if deltaX is defined otherwise we calculate it
        if (!spectrum.deltaX) {
            spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
        }

        var currentData = [];
        spectrum.data = [currentData];

        var currentX = spectrum.firstX;
        var currentY = spectrum.firstY;
        var lines = value.split(/[\r\n]+/);
        var lastDif, values, ascii, expectedY;
        values = [];
        for (var i = 1, ii = lines.length; i < ii; i++) {
            //var previousValues=JSON.parse(JSON.stringify(values));
            values = lines[i].trim().replace(removeCommentRegExp, '').split(xyDataSplitRegExp);
            if (values.length > 0) {
                if (DEBUG) {
                    if (!spectrum.firstPoint) {
                        spectrum.firstPoint = parseFloat(values[0]);
                    }
                    var expectedCurrentX = parseFloat(values[0] - spectrum.firstPoint) * spectrum.xFactor + spectrum.firstX;
                    if ((lastDif || lastDif == 0)) {
                        expectedCurrentX += spectrum.deltaX;
                    }
                    result.logs.push('Checking X value: currentX: ' + currentX + ' - expectedCurrentX: ' + expectedCurrentX);
                }
                for (var j = 1, jj = values.length; j < jj; j++) {
                    if (j == 1 && (lastDif || lastDif == 0)) {
                        lastDif = null; // at the beginning of each line there should be the full value X / Y so the diff is always undefined
                        // we could check if we have the expected Y value
                        ascii = values[j].charCodeAt(0);

                        if (false) { // this code is just to check the jcamp DIFDUP and the next line repeat of Y value
                            // + - . 0 1 2 3 4 5 6 7 8 9
                            if ((ascii == 43) || (ascii == 45) || (ascii == 46) || ((ascii > 47) && (ascii < 58))) {
                                expectedY = parseFloat(values[j]);
                            } else
                            // positive SQZ digits @ A B C D E F G H I (ascii 64-73)
                            if ((ascii > 63) && (ascii < 74)) {
                                // we could use parseInt but parseFloat is faster at least in Chrome
                                expectedY = parseFloat(String.fromCharCode(ascii - 16) + values[j].substring(1));
                            } else
                            // negative SQZ digits a b c d e f g h i (ascii 97-105)
                            if ((ascii > 96) && (ascii < 106)) {
                                // we could use parseInt but parseFloat is faster at least in Chrome
                                expectedY = -parseFloat(String.fromCharCode(ascii - 48) + values[j].substring(1));
                            }
                            if (expectedY != currentY) {
                                result.logs.push('Y value check error: Found: ' + expectedY + ' - Current: ' + currentY);
                                result.logs.push('Previous values: ' + previousValues.length);
                                result.logs.push(previousValues);
                            }
                        }
                    } else {
                        if (values[j].length > 0) {
                            ascii = values[j].charCodeAt(0);
                            // + - . 0 1 2 3 4 5 6 7 8 9
                            if ((ascii == 43) || (ascii == 45) || (ascii == 46) || ((ascii > 47) && (ascii < 58))) {
                                lastDif = null;
                                currentY = parseFloat(values[j]);
                                currentData.push(currentX, currentY * spectrum.yFactor);;
                                currentX += spectrum.deltaX;
                            } else
                            // positive SQZ digits @ A B C D E F G H I (ascii 64-73)
                            if ((ascii > 63) && (ascii < 74)) {
                                lastDif = null;
                                currentY = parseFloat(String.fromCharCode(ascii - 16) + values[j].substring(1));
                                currentData.push(currentX, currentY * spectrum.yFactor);;
                                currentX += spectrum.deltaX;
                            } else
                            // negative SQZ digits a b c d e f g h i (ascii 97-105)
                            if ((ascii > 96) && (ascii < 106)) {
                                lastDif = null;
                                currentY = -parseFloat(String.fromCharCode(ascii - 48) + values[j].substring(1));
                                currentData.push(currentX, currentY * spectrum.yFactor);;
                                currentX += spectrum.deltaX;
                            } else



                            // DUP digits S T U V W X Y Z s (ascii 83-90, 115)
                            if (((ascii > 82) && (ascii < 91)) || (ascii == 115)) {
                                var dup = parseFloat(String.fromCharCode(ascii - 34) + values[j].substring(1)) - 1;
                                if (ascii == 115) {
                                    dup = parseFloat('9' + values[j].substring(1)) - 1;
                                }
                                for (var l = 0; l < dup; l++) {
                                    if (lastDif) {
                                        currentY = currentY + lastDif;
                                    }
                                    currentData.push(currentX, currentY * spectrum.yFactor);;
                                    currentX += spectrum.deltaX;
                                }
                            } else
                            // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
                            if (ascii == 37) {
                                lastDif = parseFloat('0' + values[j].substring(1));
                                currentY += lastDif;
                                currentData.push(currentX, currentY * spectrum.yFactor);;
                                currentX += spectrum.deltaX;
                            } else if ((ascii > 73) && (ascii < 83)) {
                                lastDif = parseFloat(String.fromCharCode(ascii - 25) + values[j].substring(1));
                                currentY += lastDif;
                                currentData.push(currentX, currentY * spectrum.yFactor);;
                                currentX += spectrum.deltaX;
                            } else
                            // negative DIF digits j k l m n o p q r (ascii 106-114)
                            if ((ascii > 105) && (ascii < 115)) {
                                lastDif = -parseFloat(String.fromCharCode(ascii - 57) + values[j].substring(1));
                                currentY += lastDif;
                                currentData.push(currentX, currentY * spectrum.yFactor);;
                                currentX += spectrum.deltaX;
                            }
                        }
                    }
                }
            }
        }

    }

    function convertTo3DZ(spectra) {
        var noise = 0;
        var minZ = spectra[0].data[0][0];
        var maxZ = minZ;
        var ySize = spectra.length;
        var xSize = spectra[0].data[0].length / 2;
        var z = new Array(ySize);
        for (var i = 0; i < ySize; i++) {
            z[i] = new Array(xSize);
            for (var j = 0; j < xSize; j++) {
                z[i][j] = spectra[i].data[0][j * 2 + 1];
                if (z[i][j] < minZ) minZ = spectra[i].data[0][j * 2 + 1];
                if (z[i][j] > maxZ) maxZ = spectra[i].data[0][j * 2 + 1];
                if (i != 0 && j != 0) {
                    noise += Math.abs(z[i][j] - z[i][j - 1]) + Math.abs(z[i][j] - z[i - 1][j]);
                }
            }
        }
        return {
            z: z,
            minX: spectra[0].data[0][0],
            maxX: spectra[0].data[0][spectra[0].data[0].length - 2],
            minY: spectra[0].pageValue,
            maxY: spectra[ySize - 1].pageValue,
            minZ: minZ,
            maxZ: maxZ,
            noise: noise / ((ySize - 1) * (xSize - 1) * 2)
        };

    }

    function add2D(result) {
        var zData = convertTo3DZ(result.spectra);
        result.contourLines = generateContourLines(zData);
        delete zData.z;
        result.minMax = zData;
    }


    function generateContourLines(zData, options) {
        //console.time('generateContourLines');
        var noise = zData.noise;
        var z = zData.z;
        var contourLevels = [];
        var nbLevels = 7;
        var povarHeight = new Float32Array(4);
        var isOver = [];
        var nbSubSpectra = z.length;
        var nbPovars = z[0].length;
        var pAx, pAy, pBx, pBy;

        var x0 = zData.minX;
        var xN = zData.maxX;
        var dx = (xN - x0) / (nbPovars - 1);
        var y0 = zData.minY;
        var yN = zData.maxY;
        var dy = (yN - y0) / (nbSubSpectra - 1);
        var minZ = zData.minZ;
        var maxZ = zData.maxZ;

        //System.out.prvarln('y0 '+y0+' yN '+yN);
        // -------------------------
        // Povars attribution
        //
        // 0----1
        // |  / |
        // | /  |
        // 2----3
        //
        // ---------------------d------

        var lineZValue;
        for (var level = 0; level < nbLevels * 2; level++) { // multiply by 2 for positif and negatif
            var contourLevel = {};
            contourLevels.push(contourLevel);
            var side = level % 2;
            if (side == 0) {
                lineZValue = (maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) + 5 * noise;
            } else {
                lineZValue = -(maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) - 5 * noise;
            }
            var lines = [];
            contourLevel.zValue = lineZValue;
            contourLevel.lines = lines;

            if (lineZValue <= minZ || lineZValue >= maxZ) continue;

            for (var iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
                for (var povar = 0; povar < nbPovars - 1; povar++) {
                    povarHeight[0] = z[iSubSpectra][povar];
                    povarHeight[1] = z[iSubSpectra][povar + 1];
                    povarHeight[2] = z[(iSubSpectra + 1)][povar];
                    povarHeight[3] = z[(iSubSpectra + 1)][(povar + 1)];

                    for (var i = 0; i < 4; i++) {
                        isOver[i] = (povarHeight[i] > lineZValue);
                    }

                    // Example povar0 is over the plane and povar1 and
                    // povar2 are below, we find the varersections and add
                    // the segment
                    if (isOver[0] != isOver[1] && isOver[0] != isOver[2]) {
                        pAx = povar + (lineZValue - povarHeight[0]) / (povarHeight[1] - povarHeight[0]);
                        pAy = iSubSpectra;
                        pBx = povar;
                        pBy = iSubSpectra + (lineZValue - povarHeight[0]) / (povarHeight[2] - povarHeight[0]);
                        lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                    }
                    if (isOver[3] != isOver[1] && isOver[3] != isOver[2]) {
                        pAx = povar + 1;
                        pAy = iSubSpectra + 1 - (lineZValue - povarHeight[3]) / (povarHeight[1] - povarHeight[3]);
                        pBx = povar + 1 - (lineZValue - povarHeight[3]) / (povarHeight[2] - povarHeight[3]);
                        pBy = iSubSpectra + 1;
                        lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                    }
                    // test around the diagonal
                    if (isOver[1] != isOver[2]) {
                        pAx = povar + 1 - (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
                        pAy = iSubSpectra + (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
                        if (isOver[1] != isOver[0]) {
                            pBx = povar + 1 - (lineZValue - povarHeight[1]) / (povarHeight[0] - povarHeight[1]);
                            pBy = iSubSpectra;
                            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                        }
                        if (isOver[2] != isOver[0]) {
                            pBx = povar;
                            pBy = iSubSpectra + 1 - (lineZValue - povarHeight[2]) / (povarHeight[0] - povarHeight[2]);
                            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                        }
                        if (isOver[1] != isOver[3]) {
                            pBx = povar + 1;
                            pBy = iSubSpectra + (lineZValue - povarHeight[1]) / (povarHeight[3] - povarHeight[1]);
                            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                        }
                        if (isOver[2] != isOver[3]) {
                            pBx = povar + (lineZValue - povarHeight[2]) / (povarHeight[3] - povarHeight[2]);
                            pBy = iSubSpectra + 1;
                            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                        }
                    }
                }
            }
        }
        // console.timeEnd('generateContourLines');
        return {
            minX: zData.minX,
            maxX: zData.maxX,
            minY: zData.minY,
            maxY: zData.maxY,
            segments: contourLevels
        };
        //return contourLevels;
    }


    function addLowRes(spectra, options) {
        var spectrum;
        var averageX, averageY;
        var targetNbPoints = options.lowRes;
        var highResData;
        for (var i = 0; i < spectra.length; i++) {
            spectrum = spectra[i];
            // we need to find the current higher resolution
            if (spectrum.data.length > 0) {
                highResData = spectrum.data[0];
                for (var j = 1; j < spectrum.data.length; j++) {
                    if (spectrum.data[j].length > highResData.length) {
                        highResData = spectrum.data[j];
                    }
                }

                if (targetNbPoints > (highResData.length / 2)) return;
                var i, ii;
                var lowResData = [];
                var modulo = Math.ceil(highResData.length / (targetNbPoints * 2));
                for (i = 0, ii = highResData.length; i < ii; i = i + 2) {
                    if (i % modulo == 0) {
                        lowResData.push(highResData[i], highResData[i + 1])
                    }
                }
                spectrum.data.push(lowResData);
            }
        }
    }

    return convert;

}

var convert = getConverter();

function JcampConverter(input, options, useWorker) {
    if (typeof options === 'boolean') {
        useWorker = options;
        options = {};
    }
    if (useWorker) {
        return postToWorker(input, options);
    } else {
        return convert(input, options);
    }
}

var stamps = {},
    worker;

function postToWorker(input, options) {
    if (!worker) {
        createWorker();
    }
    return new Promise(function (resolve) {
        var stamp = Date.now() + '' + Math.random();
        stamps[stamp] = resolve;
        worker.postMessage({stamp: stamp, input: input, options: options});
    });
}

function createWorker() {
    var workerURL = URL.createObjectURL(new Blob([
        'var getConverter =' + getConverter.toString() + ';var convert = getConverter(); onmessage = function (event) { postMessage({stamp: event.data.stamp, output: convert(event.data.input, event.data.options)}); };'
    ], {type: 'application/javascript'}));
    worker = new Worker(workerURL);
    URL.revokeObjectURL(workerURL);
    worker.addEventListener('message', function (event) {
        var stamp = event.data.stamp;
        if (stamps[stamp]) {
            stamps[stamp](event.data.output);
        }
    });
}

module.exports = {
    convert: JcampConverter
};
},{}]},{},[1])(1)
});