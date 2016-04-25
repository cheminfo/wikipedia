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

	var escapeRegExp = __webpack_require__(1);
	var operators = __webpack_require__(4);
	var parseKeywords = __webpack_require__(5);

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
	                    criterion.is = new RegExp('^' + escapeRegExp(value) + '$', insensitive);
	                }
	                criterion.key = key;
	            }
	            fillCriterion(criterion, value, insensitive);
	        } else {
	            fillCriterion(criterion, keyword, insensitive);
	        }

	        return criterion;
	    });
	    
	    var index = !!options.index;
	    for (var i = 0; i < array.length; i++) {
	        if (match(array[i], keywords, options.predicate || 'AND')) {
	            result.push(index ? i : array[i]);
	        }
	    }
	    return result;
	}

	function fillCriterion(criterion, keyword, insensitive) {

	    var strKey;
	    if (keyword.charAt(0) === '=') {
	        strKey = '^' + escapeRegExp(keyword.substring(1)) + '$';
	    } else {
	        strKey = escapeRegExp(keyword);
	    }
	    var reg = new RegExp(strKey, insensitive);
	    criterion.checkString = function (str) { return reg.test(str) };

	    var match = /(<|<=|=|>=|>|\.\.)?(-?\d*\.?\d+)(?:(\.\.)(-?\d*\.?\d*))?/.exec(keyword);
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var toString = __webpack_require__(2);

	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	    reHasRegExpChar = RegExp(reRegExpChar.source);

	/**
	 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escapeRegExp('[lodash](https://lodash.com/)');
	 * // => '\[lodash\]\(https://lodash\.com/\)'
	 */
	function escapeRegExp(string) {
	  string = toString(string);
	  return (string && reHasRegExpChar.test(string))
	    ? string.replace(reRegExpChar, '\\$&')
	    : string;
	}

	module.exports = escapeRegExp;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * lodash 4.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var Symbol = root.Symbol;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module), (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
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
/* 5 */
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