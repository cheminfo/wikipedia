(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SAF = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
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
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const lodash_escaperegexp_1 = __importDefault(require("lodash.escaperegexp"));
const match_1 = __importDefault(require("./match/match"));
const charSplit_1 = __importDefault(require("./utils/charSplit"));
const convertKeywordsToCriteria_1 = __importDefault(require("./utils/convertKeywordsToCriteria"));
const ensureObjectOfRegExps_1 = __importDefault(require("./utils/ensureObjectOfRegExps"));
/**
 *
 * Filter.
 *
 * @param data - Array to filter.
 * @param [options={}] - Object.
 * @param [options.limit=Infinity] - Maximum number of results.
 * @param [options.caseSensitive=false] - By default we ignore case.
 * @param [options.ignorePaths=[]] - Array of jpath to ignore.
 * @param [options.includePaths] - Array of jpath to allow, default everything.
 * @param [options.pathAlias={}] - Key (string), value (string of regexp).
 * @param [options.keywords=[]] - List of keywords used to filter the array.
 * @param [options.index=false] - Returns the indices in the array that match.
 * @param [options.predicate='AND'] - Could be either AND or OR.
 * @returns String[] | number[].
 */
function filter(data, options = {}) {
    let { index = false, predicate = 'AND', ignorePaths: ignorePathsOption = [], includePaths: includePathsOption, pathAlias: pathAliasOption = {}, } = options;
    const limit = options.limit ? options.limit : Infinity;
    const insensitive = options.caseSensitive ? '' : 'i';
    let keywords = options.keywords || [];
    const pathAlias = (0, ensureObjectOfRegExps_1.default)(pathAliasOption, { insensitive });
    const ignorePaths = ignorePathsOption.map((path) => typeof path === 'string'
        ? new RegExp(`(^|\\.)${(0, lodash_escaperegexp_1.default)(path)}(\\.|$)`, insensitive)
        : path);
    const includePaths = includePathsOption
        ? includePathsOption.map((path) => typeof path === 'string'
            ? new RegExp(`(^|\\.)${(0, lodash_escaperegexp_1.default)(path)}(\\.|$)`, insensitive)
            : path)
        : undefined;
    if (typeof keywords === 'string') {
        keywords = (0, charSplit_1.default)(keywords, /[ \t\r\n]/);
    }
    const criteria = (0, convertKeywordsToCriteria_1.default)(keywords, {
        insensitive,
        pathAlias,
    });
    let matched = 0;
    if (index) {
        const result = [];
        for (let i = 0; i < data.length && matched < limit; i++) {
            if ((0, match_1.default)(data[i], criteria, predicate, {
                ignorePaths,
                includePaths,
                pathAlias,
            })) {
                matched = result.push(i);
            }
        }
        return result;
    }
    else {
        const result = [];
        for (let i = 0; i < data.length && matched < limit; i++) {
            if ((0, match_1.default)(data[i], criteria, predicate, {
                ignorePaths,
                includePaths,
                pathAlias,
            })) {
                matched = result.push(data[i]);
            }
        }
        return result;
    }
}
exports.filter = filter;

},{"./match/match":3,"./utils/charSplit":6,"./utils/convertKeywordsToCriteria":7,"./utils/ensureObjectOfRegExps":8,"lodash.escaperegexp":1}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recursiveMatch_1 = __importDefault(require("./recursiveMatch"));
/**
 * Match.
 *
 * @param element - String | number | Record<string, string>.
 * @param criteria - Criterion[].
 * @param predicate - String.
 * @param options - Object.
 * @param options.ignorePaths - RegExp[].
 * @param options.pathAlias - Record<string, string|RegExp>s.
 * @returns Boolean.
 */
function match(element, criteria, predicate, options) {
    if (criteria.length) {
        let found = false;
        for (const criterion of criteria) {
            // match XOR negate
            if ((0, recursiveMatch_1.default)(element, criterion, [], options)
                ? !criterion.negate
                : criterion.negate) {
                if (predicate === 'OR') {
                    return true;
                }
                found = true;
            }
            else if (predicate === 'AND') {
                return false;
            }
        }
        return found;
    }
    return true;
}
exports.default = match;

},{"./recursiveMatch":5}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * NativeMatch.
 *
 * @param element - String|number.
 * @param keyword - Criterion.
 * @returns Boolean.
 */
function nativeMatch(element, keyword) {
    if (typeof element === 'string') {
        return keyword.checkString(element);
    }
    else if (typeof element === 'number') {
        return keyword.checkNumber(element);
    }
    else {
        return false;
    }
}
exports.default = nativeMatch;

},{}],5:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativeMatch_1 = __importDefault(require("./nativeMatch"));
/**
 * RecursiveMatch.
 *
 * @param element - String | number | Record<string, string>.
 * @param criterium - Criterion.
 * @param keys - String[].
 * @param options - Object.
 * @param options.ignorePaths - RegExp[].
 * @returns Boolean.
 */
function recursiveMatch(element, criterium, keys, options) {
    if (typeof element === 'object') {
        if (Array.isArray(element)) {
            for (const elm of element) {
                if (recursiveMatch(elm, criterium, keys, options)) {
                    return true;
                }
            }
        }
        else {
            for (const i in element) {
                keys.push(i);
                const didMatch = recursiveMatch(element[i], criterium, keys, options);
                keys.pop();
                if (didMatch)
                    return true;
            }
        }
    }
    else if (criterium.is) {
        // we check for the presence of a key (jpath)
        if (criterium.is.test(keys.join('.'))) {
            return !!element;
        }
        else {
            return false;
        }
    }
    else {
        // need to check if keys match
        const joinedKeys = keys.join('.');
        for (const ignorePath of options.ignorePaths) {
            if (ignorePath.test(joinedKeys))
                return false;
        }
        if (options.includePaths) {
            let included = false;
            for (const includePath of options.includePaths) {
                if (includePath.test(joinedKeys)) {
                    included = true;
                    break;
                }
            }
            if (!included)
                return false;
        }
        if (criterium.key) {
            if (!criterium.key.test(joinedKeys))
                return false;
        }
        return (0, nativeMatch_1.default)(element, criterium);
    }
    return false;
}
exports.default = recursiveMatch;

},{"./nativeMatch":4}],6:[function(require,module,exports){
"use strict";
/**
 * We split a string into an array of strings except if it in single or double quotes.
 * @param string
 * @param char
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
function charSplit(string, delimiter) {
    const results = [];
    let inQuotes = false;
    let start = 0;
    let quote = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (inQuotes) {
            if (char === quote) {
                inQuotes = false;
                quote = '';
            }
        }
        else if (char === '"' || char === "'") {
            inQuotes = true;
            quote = char;
        }
        else if (char.match(delimiter) && !inQuotes) {
            results.push(string.slice(start, i).trim());
            start = i + 1;
        }
        if (i === string.length - 1) {
            results.push(string.slice(start).trim());
        }
    }
    return results
        .map((result) => {
        if (result.startsWith('"') && result.endsWith('"')) {
            return result.slice(1, -1);
        }
        if (result.startsWith("'") && result.endsWith("'")) {
            return result.slice(1, -1);
        }
        return result;
    })
        .filter((result) => result);
}
exports.default = charSplit;

},{}],7:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_escaperegexp_1 = __importDefault(require("lodash.escaperegexp"));
const getCheckNumber_1 = __importDefault(require("./getCheckNumber"));
const getCheckString_1 = __importDefault(require("./getCheckString"));
/**
 * @internal
 */
function convertKeywordsToCriteria(keywords, options) {
    const { insensitive, pathAlias } = options;
    return keywords.map((keyword) => {
        const criterion = {};
        if (keyword.startsWith('-')) {
            criterion.negate = true;
            keyword = keyword.substring(1);
        }
        const colon = keyword.indexOf(':');
        if (colon > -1) {
            const value = keyword.substring(colon + 1);
            if (colon > 0) {
                const key = keyword.substring(0, colon);
                if (key === 'is') {
                    // a property path exists
                    criterion.is = new RegExp(`(^|\\.)${(0, lodash_escaperegexp_1.default)(value)}(\\.|$)`, insensitive);
                }
                if (pathAlias[key]) {
                    criterion.key = pathAlias[key];
                }
                else {
                    criterion.key = new RegExp(`(^|\\.)${(0, lodash_escaperegexp_1.default)(key)}(\\.|$)`, insensitive);
                }
            }
            fillCriterion(criterion, value, insensitive);
        }
        else {
            fillCriterion(criterion, keyword, insensitive);
        }
        return criterion;
    });
}
exports.default = convertKeywordsToCriteria;
/**
 * FillCriterion.
 *
 * @param criterion - Criterion.
 * @param keyword - String.
 * @param insensitive - String.
 */
function fillCriterion(criterion, keyword, insensitive) {
    criterion.checkString = (0, getCheckString_1.default)(keyword, insensitive);
    criterion.checkNumber = (0, getCheckNumber_1.default)(keyword);
}

},{"./getCheckNumber":9,"./getCheckString":10,"lodash.escaperegexp":1}],8:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_escaperegexp_1 = __importDefault(require("lodash.escaperegexp"));
/**
 * EnsureObjectOfRegExps.
 *
 * @param object  - { [index: string]: string|RegExp }.
 * @param options - Object.
 * @param options.insensitive - String.
 * @returns - Record<string, string|RegExp>.
 */
function ensureObjectOfRegExps(object, options) {
    const { insensitive } = options;
    const toReturn = {};
    for (const [key, value] of Object.entries(object)) {
        if (value instanceof RegExp) {
            toReturn[key] = value;
        }
        else {
            toReturn[key] = new RegExp(`(^|\\.)${(0, lodash_escaperegexp_1.default)(value)}(\\.|$)`, insensitive);
        }
    }
    return toReturn;
}
exports.default = ensureObjectOfRegExps;

},{"lodash.escaperegexp":1}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitNumberOperator = void 0;
const operators = {
    '<': function lt(values) {
        const value = Number(values[0]);
        return (number) => {
            return number < value;
        };
    },
    '<=': function lte(values) {
        const value = Number(values[0]);
        return (number) => {
            return number <= value;
        };
    },
    '=': function equal(values) {
        const possibleNumbers = values[0]
            .split(',')
            .filter((item) => item)
            .map(Number);
        return (number) => {
            for (let i = 0; i < possibleNumbers.length; i++) {
                if (number === possibleNumbers[i]) {
                    return true;
                }
            }
            return false;
        };
    },
    '>=': function gte(values) {
        const value = Number(values[0]);
        return (number) => {
            return number >= value;
        };
    },
    '>': function gt(values) {
        const value = Number(values[0]);
        return (number) => {
            return number > value;
        };
    },
    '..': function range(values) {
        const valueLow = Number(values[0]);
        const valueHigh = Number(values[1]);
        return (number) => number >= valueLow && number <= valueHigh;
    },
};
/**
 * @internal
 */
function getCheckNumber(keyword) {
    const { values, operator } = splitNumberOperator(keyword);
    const checkOperator = operators[operator];
    if (!checkOperator) {
        throw new Error(`unknown operator ${operator}`);
    }
    return checkOperator(values);
}
exports.default = getCheckNumber;
/**
 * @internal
 */
function splitNumberOperator(keyword) {
    const match = /^\s*\(?\s*(?<startOperator><=|>=|<|=|>|\.\.)?(?<firstValue>-?\d*\.?\d+)(?:(?<afterDots>\.\.)(?<secondValue>-?\d*\.?\d*))?\s*\)?\s*$/.exec(keyword);
    if (!match) {
        return {
            operator: '=',
            values: [keyword],
        };
    }
    if (!match.groups) {
        throw new Error('unreachable');
    }
    const { startOperator, firstValue, afterDots, secondValue } = match.groups;
    let operator = startOperator;
    let values = firstValue ? [firstValue] : [];
    // ..12
    if (startOperator === '..') {
        operator = '<=';
    }
    // 12..
    else if (!startOperator && afterDots && !secondValue) {
        operator = '>=';
    }
    // 12..14
    else if (afterDots) {
        operator = '..';
    }
    if (secondValue) {
        values.push(secondValue);
    }
    return {
        values,
        operator: operator || '=',
    };
}
exports.splitNumberOperator = splitNumberOperator;

},{}],10:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStringOperator = void 0;
const lodash_escaperegexp_1 = __importDefault(require("lodash.escaperegexp"));
const charSplit_1 = __importDefault(require("./charSplit"));
const operators = {
    '<': function lt(query) {
        return (string) => {
            return string < query[0];
        };
    },
    '<=': function lte(query) {
        return (string) => {
            return string <= query[0];
        };
    },
    '=': function equal(query, insensitive) {
        const possibilities = (0, charSplit_1.default)(query[0], ',')
            .filter((item) => item)
            .map((string) => new RegExp(`^${(0, lodash_escaperegexp_1.default)(string)}$`, insensitive));
        return (string) => {
            for (const possibility of possibilities) {
                if (possibility.test(string)) {
                    return true;
                }
            }
            return false;
        };
    },
    '~': function fuzzy(query, insensitive) {
        const possibilities = (0, charSplit_1.default)(query[0], ',')
            .filter((item) => item)
            .map((string) => new RegExp((0, lodash_escaperegexp_1.default)(string), insensitive));
        return (string) => {
            for (const possibility of possibilities) {
                if (possibility.test(string)) {
                    return true;
                }
            }
            return false;
        };
    },
    '>=': function lge(query) {
        return (string) => {
            return string >= query[0];
        };
    },
    '>': function lg(query) {
        return (string) => {
            return string > query[0];
        };
    },
    '..': function range(query) {
        return (string) => {
            return string >= query[0] && string <= query[1];
        };
    },
};
/**
 * GetCheckString.
 *
 * @param keyword - String.
 * @param insensitive - String.
 * @returns CheckString. (string)=>boolean.
 */
function getCheckString(keyword, insensitive) {
    const { values, operator } = splitStringOperator(keyword);
    const operatorCheck = operators[operator];
    if (!operatorCheck) {
        throw new Error(`unreachable unknown operator ${operator}`);
    }
    return operatorCheck(values, insensitive);
}
exports.default = getCheckString;
/**
 * @internal
 */
function splitStringOperator(keyword) {
    const parts = keyword.split('..');
    const match = /^\s*\(?(?<operator><=|<|=|>=|>)?\s*(?<value>\S*)\s*\)?$/.exec(parts[0]);
    if (!match) {
        // Should never happen
        return {
            operator: '~',
            values: [keyword],
        };
    }
    if (!match.groups) {
        throw new Error('unreachable');
    }
    let { operator, value } = match.groups;
    let secondQuery = parts[1];
    let values = [value];
    if (parts.length > 1) {
        operator = '..';
        if (!secondQuery) {
            operator = '>=';
        }
        else if (!value) {
            values = [secondQuery];
            operator = '<=';
        }
        else {
            values.push(secondQuery);
        }
    }
    return {
        operator: operator || '~',
        values,
    };
}
exports.splitStringOperator = splitStringOperator;

},{"./charSplit":6,"lodash.escaperegexp":1}]},{},[2])(2)
});
