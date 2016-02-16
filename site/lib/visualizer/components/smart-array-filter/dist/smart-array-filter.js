(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["smartArrayFilter"] = factory();
	else
		root["smartArrayFilter"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = filter;
	module.exports.match = match;

	var operators = __webpack_require__(1);
	var parseKeywords = __webpack_require__(2);

	function filter(array, options) {
	    options = options || {};
	    var result = [];

	    var insensitive = options.caseSensitive ? '' : 'i';
	    var keywords = options.keywords || [];
	    if (typeof keywords === 'string') {
	        keywords = parseKeywords(keywords);
	    }
	    keywords = keywords.map(function (keyword) {
	        var criterion = {
	            is: false,
	            key: false,
	            negate: false,
	            valueReg: undefined
	        };

	        if (keyword.charAt(0) === '-') {
	            criterion.negate = true;
	            keyword = keyword.substring(1);
	        }
	        var colon = keyword.indexOf(':');
	        if (colon > -1) {
	            var value = keyword.substring(colon + 1);
	            if (colon > 0) {
	                var key = keyword.substring(0, colon);
	                if (key === 'is') {
	                    criterion.is = new RegExp('^' + value + '$', insensitive);
	                }
	                criterion.key = key;
	            }
	            fillCriterion(criterion, value, insensitive);
	        } else {
	            fillCriterion(criterion, keyword, insensitive);
	        }

	        return criterion;
	    });
	    for (var i = 0; i < array.length; i++) {
	        if (match(array[i], keywords, options.predicate || 'AND')) {
	            result.push(array[i]);
	        }
	    }
	    return result;
	}

	function fillCriterion(criterion, keyword, insensitive) {

	    var strKey = keyword;
	    if (keyword.charAt(0) === '=') {
	        strKey = '^' + keyword.substring(1) + '$';
	    }
	    var reg = new RegExp(strKey, insensitive);
	    criterion.checkString = function (str) { return reg.test(str) };

	    var match = /(<|<=|=|>=|>|\.\.)?(\d+)(?:(\.\.)(\d*))?/.exec(keyword);
	    var checkNumber = returnFalse;
	    if (match) {
	        var operator = match[1];
	        var mainNumber = parseFloat(match[2]);
	        var dots = match[3];
	        var otherNumber = match[4];
	        if (operator) {
	            checkNumber = operators[operator](mainNumber);
	        } else if (dots) {
	            if (otherNumber !== '') {
	                otherNumber = parseFloat(otherNumber);
	                checkNumber = function (other) {
	                    return mainNumber <= other && other <= otherNumber;
	                };
	            } else {
	                checkNumber = operators['>='](mainNumber);
	            }
	        } else {
	            checkNumber = operators['='](mainNumber);
	        }
	    }

	    criterion.checkNumber = checkNumber;
	}

	function match(element, keywords, predicate) {
	    if (keywords.length) {
	        var found = false;
	        for (var i = 0; i < keywords.length; i++) {
	            // match XOR negate
	            if (recursiveMatch(element, keywords[i]) ? !keywords[i].negate : keywords[i].negate) {
	                if (predicate === 'OR') {
	                    return true;
	                }
	                found = true;
	            } else if (predicate === 'AND') {
	                return false;
	            }
	        }
	        return found;
	    }
	    return true;
	}

	function recursiveMatch(element, keyword, key) {
	    if (typeof element === 'object') {
	        if (Array.isArray(element)) {
	            for (var i = 0; i < element.length; i++) {
	                if (recursiveMatch(element[i], keyword)) {
	                    return true;
	                }
	            }
	        } else {
	            for (var i in element) {
	                if (recursiveMatch(element[i], keyword, i)) {
	                    return true;
	                }
	            }
	        }
	    } else if (key && keyword.is && keyword.is.test(key)) {
	        return !!element;
	    } else if (!keyword.is) {
	        if (key && keyword.key && key !== keyword.key) return false;
	        return nativeMatch(element, keyword);
	    }
	    return false;
	}

	function nativeMatch(element, keyword) {
	    if (typeof element === 'string') {
	        return keyword.checkString(element);
	    } else if (typeof element === 'number') {
	        return keyword.checkNumber(element);
	    } else {
	        return false;
	    }
	}

	function returnFalse() {
	    return false;
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var operators = {
	    '<': function (value) {
	        return function (other) {
	            return other < value;
	        }
	    },
	    '<=': function (value) {
	        return function (other) {
	            return other <= value;
	        }
	    },
	    '=': function (value) {
	        return function (other) {
	            return other === value;
	        }
	    },
	    '>=': function (value) {
	        return function (other) {
	            return other >= value;
	        }
	    },
	    '>': function (value) {
	        return function (other) {
	            return other > value;
	        }
	    }
	};

	operators['..'] = operators['<='];

	module.exports = operators;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var separators = /[ ;,\t\r\n]/;

	module.exports = parseKeywords;

	function parseKeywords(keywords) {
	    var result = [];
	    var inQuotes = false;
	    var inSeparator = true;
	    var currentWord = [];
	    var previous = '';
	    for (var i = 0; i < keywords.length; i++) {
	        var current = keywords.charAt(i);
	        if (inQuotes) {
	            if (previous === '"') {
	                // escaped quote
	                if (current === '"') {
	                    previous = '';
	                    continue;
	                }
	                // end of quoted part
	                currentWord.pop(); // remove last quote that was added
	                inQuotes = false;
	                i--;
	                continue;
	            }
	            currentWord.push(current);
	            previous = current;
	            continue;
	        }
	        if (inSeparator) {
	            // still in separator ?
	            if (separators.test(current)) {
	                previous = current;
	                continue;
	            }
	            inSeparator = false;
	        }
	        // start of quoted part
	        if (current === '"') {
	            inQuotes = true;
	            previous = '';
	            continue;
	        }
	        // start of separator part
	        if (separators.test(current)) {
	            if (currentWord.length) result.push(currentWord.join(''));
	            currentWord = [];
	            inSeparator = true;
	            continue;
	        }
	        currentWord.push(current);
	        previous = '';
	    }

	    if (previous === '"') currentWord.pop();
	    if (currentWord.length) result.push(currentWord.join(''));

	    return result;
	}


/***/ }
/******/ ])
});
;