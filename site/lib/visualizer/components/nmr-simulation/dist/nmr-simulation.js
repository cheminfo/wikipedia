(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nmrSimulation"] = factory();
	else
		root["nmrSimulation"] = factory();
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const arrayUtils = __webpack_require__(16);

/**
 * Real matrix
 * @class Matrix
 * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
 * 2D array containing the data or Matrix instance to clone
 * @param {number} [nColumns] - Number of columns of the new matrix
 */
class Matrix extends Array {
    constructor(nRows, nColumns) {
        if (Matrix.isMatrix(nRows)) {
            return nRows.clone();
        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
            super(nRows);
            if (Number.isInteger(nColumns) && nColumns > 0) {
                for (var i = 0; i < nRows; i++) {
                    this[i] = new Array(nColumns);
                }
            } else {
                throw new TypeError('nColumns must be a positive integer');
            }
        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
            var matrix = nRows;
            nRows = matrix.length;
            nColumns = matrix[0].length;
            if (typeof nColumns !== 'number' || nColumns === 0) {
                throw new TypeError('Data must be a 2D array with at least one element');
            }
            super(nRows);
            for (var i = 0; i < nRows; i++) {
                if (matrix[i].length !== nColumns) {
                    throw new RangeError('Inconsistent array dimensions');
                }
                this[i] = [].concat(matrix[i]);
            }
        } else {
            throw new TypeError('First argument must be a positive number or an array');
        }
        this.rows = nRows;
        this.columns = nColumns;
    }

    // Native array methods should return instances of Array, not Matrix
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * Constructs a Matrix with the chosen dimensions from a 1D array
     * @param {number} newRows - Number of rows
     * @param {number} newColumns - Number of columns
     * @param {Array} newData - A 1D array containing data for the matrix
     * @returns {Matrix} - The new matrix
     */
    static from1DArray(newRows, newColumns, newData) {
        var length = newRows * newColumns;
        if (length !== newData.length) {
            throw new RangeError('Data length does not match given dimensions');
        }
        var newMatrix = new Matrix(newRows, newColumns);
        for (var row = 0; row < newRows; row++) {
            for (var column = 0; column < newColumns; column++) {
                newMatrix[row][column] = newData[row * newColumns + column];
            }
        }
        return newMatrix;
    }

    /**
     * Creates a row vector, a matrix with only one row.
     * @param {Array} newData - A 1D array containing data for the vector
     * @returns {Matrix} - The new matrix
     */
    static rowVector(newData) {
        var vector = new Matrix(1, newData.length);
        for (var i = 0; i < newData.length; i++) {
            vector[0][i] = newData[i];
        }
        return vector;
    }

    /**
     * Creates a column vector, a matrix with only one column.
     * @param {Array} newData - A 1D array containing data for the vector
     * @returns {Matrix} - The new matrix
     */
    static columnVector(newData) {
        var vector = new Matrix(newData.length, 1);
        for (var i = 0; i < newData.length; i++) {
            vector[i][0] = newData[i];
        }
        return vector;
    }

    /**
     * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
     * @param {number} rows - Number of rows
     * @param {number} columns - Number of columns
     * @returns {Matrix} - The new matrix
     */
    static empty(rows, columns) {
        return new Matrix(rows, columns);
    }

    /**
     * Creates a matrix with the given dimensions. Values will be set to zero.
     * @param {number} rows - Number of rows
     * @param {number} columns - Number of columns
     * @returns {Matrix} - The new matrix
     */
    static zeros(rows, columns) {
        return Matrix.empty(rows, columns).fill(0);
    }

    /**
     * Creates a matrix with the given dimensions. Values will be set to one.
     * @param {number} rows - Number of rows
     * @param {number} columns - Number of columns
     * @returns {Matrix} - The new matrix
     */
    static ones(rows, columns) {
        return Matrix.empty(rows, columns).fill(1);
    }

    /**
     * Creates a matrix with the given dimensions. Values will be randomly set.
     * @param {number} rows - Number of rows
     * @param {number} columns - Number of columns
     * @param {function} [rng] - Random number generator (default: Math.random)
     * @returns {Matrix} The new matrix
     */
    static rand(rows, columns, rng) {
        if (rng === undefined) rng = Math.random;
        var matrix = Matrix.empty(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                matrix[i][j] = rng();
            }
        }
        return matrix;
    }

    /**
     * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
     * @param {number} rows - Number of rows
     * @param {number} [columns] - Number of columns (Default: rows)
     * @returns {Matrix} - The new identity matrix
     */
    static eye(rows, columns) {
        if (columns === undefined) columns = rows;
        var min = Math.min(rows, columns);
        var matrix = Matrix.zeros(rows, columns);
        for (var i = 0; i < min; i++) {
            matrix[i][i] = 1;
        }
        return matrix;
    }

    /**
     * Creates a diagonal matrix based on the given array.
     * @param {Array} data - Array containing the data for the diagonal
     * @param {number} [rows] - Number of rows (Default: data.length)
     * @param {number} [columns] - Number of columns (Default: rows)
     * @returns {Matrix} - The new diagonal matrix
     */
    static diag(data, rows, columns) {
        var l = data.length;
        if (rows === undefined) rows = l;
        if (columns === undefined) columns = rows;
        var min = Math.min(l, rows, columns);
        var matrix = Matrix.zeros(rows, columns);
        for (var i = 0; i < min; i++) {
            matrix[i][i] = data[i];
        }
        return matrix;
    }

    /**
     * Returns a matrix whose elements are the minimum between matrix1 and matrix2
     * @param matrix1
     * @param matrix2
     * @returns {Matrix}
     */
    static min(matrix1, matrix2) {
        var rows = matrix1.length;
        var columns = matrix1[0].length;
        var result = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                result[i][j] = Math.min(matrix1[i][j], matrix2[i][j]);
            }
        }
        return result;
    }

    /**
     * Returns a matrix whose elements are the maximum between matrix1 and matrix2
     * @param matrix1
     * @param matrix2
     * @returns {Matrix}
     */
    static max(matrix1, matrix2) {
        var rows = matrix1.length;
        var columns = matrix1[0].length;
        var result = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                result[i][j] = Math.max(matrix1[i][j], matrix2[i][j]);
            }
        }
        return result;
    }

    /**
     * Check that the provided value is a Matrix and tries to instantiate one if not
     * @param value - The value to check
     * @returns {Matrix}
     */
    static checkMatrix(value) {
        return Matrix.isMatrix(value) ? value : new Matrix(value);
    }

    /**
     * Returns true if the argument is a Matrix, false otherwise
     * @param value - The value to check
     * @return {boolean}
     */
    static isMatrix(value) {
        return (value != null) && (value.klass === 'Matrix');
    }

    /**
     * @property {number} - The number of elements in the matrix.
     */
    get size() {
        return this.rows * this.columns;
    }

    /**
     * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
     * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
     * @returns {Matrix} this
     */
    apply(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }
        var ii = this.rows;
        var jj = this.columns;
        for (var i = 0; i < ii; i++) {
            for (var j = 0; j < jj; j++) {
                callback.call(this, i, j);
            }
        }
        return this;
    }

    /**
     * Creates an exact and independent copy of the matrix
     * @returns {Matrix}
     */
    clone() {
        var newMatrix = new Matrix(this.rows, this.columns);
        for (var row = 0; row < this.rows; row++) {
            for (var column = 0; column < this.columns; column++) {
                newMatrix[row][column] = this[row][column];
            }
        }
        return newMatrix;
    }

    /**
     * Returns a new 1D array filled row by row with the matrix values
     * @returns {Array}
     */
    to1DArray() {
        var array = new Array(this.size);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                array[i * this.columns + j] = this[i][j];
            }
        }
        return array;
    }

    /**
     * Returns a 2D array containing a copy of the data
     * @returns {Array}
     */
    to2DArray() {
        var copy = new Array(this.rows);
        for (var i = 0; i < this.rows; i++) {
            copy[i] = [].concat(this[i]);
        }
        return copy;
    }

    /**
     * @returns {boolean} true if the matrix has one row
     */
    isRowVector() {
        return this.rows === 1;
    }

    /**
     * @returns {boolean} true if the matrix has one column
     */
    isColumnVector() {
        return this.columns === 1;
    }

    /**
     * @returns {boolean} true if the matrix has one row or one column
     */
    isVector() {
        return (this.rows === 1) || (this.columns === 1);
    }

    /**
     * @returns {boolean} true if the matrix has the same number of rows and columns
     */
    isSquare() {
        return this.rows === this.columns;
    }

    /**
     * @returns {boolean} true if the matrix is square and has the same values on both sides of the diagonal
     */
    isSymmetric() {
        if (this.isSquare()) {
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j <= i; j++) {
                    if (this[i][j] !== this[j][i]) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    }

    /**
     * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
     * @param {number} rowIndex - Index of the row
     * @param {number} columnIndex - Index of the column
     * @param {number} value - The new value for the element
     * @returns {Matrix} this
     */
    set(rowIndex, columnIndex, value) {
        this[rowIndex][columnIndex] = value;
        return this;
    }

    /**
     * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
     * @param {number} rowIndex - Index of the row
     * @param {number} columnIndex - Index of the column
     * @returns {number}
     */
    get(rowIndex, columnIndex) {
        return this[rowIndex][columnIndex];
    }

    /**
     * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
     * rows of the matrix, and colRep times the number of columns of the matrix
     * @param {number} rowRep - Number of times the rows should be repeated
     * @param {number} colRep - Number of times the columns should be re
     * @example
     * var matrix = new Matrix([[1,2]]);
     * matrix.repeat(2); // [[1,2],[1,2]]
     */
    repeat(rowRep, colRep) {
        rowRep = rowRep || 1;
        colRep = colRep || 1;
        var matrix = new Matrix(this.rows * rowRep, this.columns * colRep);
        for (var i = 0; i < rowRep; i++) {
            for (var j = 0; j < colRep; j++) {
                matrix.setSubMatrix(this, this.rows * i, this.columns * j);
            }
        }
        return matrix;
    }

    /**
     * Fills the matrix with a given value. All elements will be set to this value.
     * @param {number} value - New value
     * @returns {Matrix} this
     */
    fill(value) {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] = value;
            }
        }
        return this;
    }

    /**
     * Negates the matrix. All elements will be multiplied by (-1)
     * @returns {Matrix} this
     */
    neg() {
        return this.mulS(-1);
    }

    /**
     * Returns a new array from the given row index
     * @param {number} index - Row index
     * @returns {Array}
     */
    getRow(index) {
        checkRowIndex(this, index);
        return [].concat(this[index]);
    }

    /**
     * Returns a new row vector from the given row index
     * @param {number} index - Row index
     * @returns {Matrix}
     */
    getRowVector(index) {
        return Matrix.rowVector(this.getRow(index));
    }

    /**
     * Sets a row at the given index
     * @param {number} index - Row index
     * @param {Array|Matrix} array - Array or vector
     * @returns {Matrix} this
     */
    setRow(index, array) {
        checkRowIndex(this, index);
        array = checkRowVector(this, array, true);
        this[index] = array;
        return this;
    }

    /**
     * Removes a row from the given index
     * @param {number} index - Row index
     * @returns {Matrix} this
     */
    removeRow(index) {
        checkRowIndex(this, index);
        if (this.rows === 1)
            throw new RangeError('A matrix cannot have less than one row');
        this.splice(index, 1);
        this.rows -= 1;
        return this;
    }

    /**
     * Adds a row at the given index
     * @param {number} [index = this.rows] - Row index
     * @param {Array|Matrix} array - Array or vector
     * @returns {Matrix} this
     */
    addRow(index, array) {
        if (array === undefined) {
            array = index;
            index = this.rows;
        }
        checkRowIndex(this, index, true);
        array = checkRowVector(this, array, true);
        this.splice(index, 0, array);
        this.rows += 1;
        return this;
    }

    /**
     * Swaps two rows
     * @param {number} row1 - First row index
     * @param {number} row2 - Second row index
     * @returns {Matrix} this
     */
    swapRows(row1, row2) {
        checkRowIndex(this, row1);
        checkRowIndex(this, row2);
        var temp = this[row1];
        this[row1] = this[row2];
        this[row2] = temp;
        return this;
    }

    /**
     * Returns a new array from the given column index
     * @param {number} index - Column index
     * @returns {Array}
     */
    getColumn(index) {
        checkColumnIndex(this, index);
        var column = new Array(this.rows);
        for (var i = 0; i < this.rows; i++) {
            column[i] = this[i][index];
        }
        return column;
    }

    /**
     * Returns a new column vector from the given column index
     * @param {number} index - Column index
     * @returns {Matrix}
     */
    getColumnVector(index) {
        return Matrix.columnVector(this.getColumn(index));
    }

    /**
     * Sets a column at the given index
     * @param {number} index - Column index
     * @param {Array|Matrix} array - Array or vector
     * @returns {Matrix} this
     */
    setColumn(index, array) {
        checkColumnIndex(this, index);
        array = checkColumnVector(this, array);
        for (var i = 0; i < this.rows; i++) {
            this[i][index] = array[i];
        }
        return this;
    }

    /**
     * Removes a column from the given index
     * @param {number} index - Column index
     * @returns {Matrix} this
     */
    removeColumn(index) {
        checkColumnIndex(this, index);
        if (this.columns === 1)
            throw new RangeError('A matrix cannot have less than one column');
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 1);
        }
        this.columns -= 1;
        return this;
    }

    /**
     * Adds a column at the given index
     * @param {number} [index = this.columns] - Column index
     * @param {Array|Matrix} array - Array or vector
     * @returns {Matrix} this
     */
    addColumn(index, array) {
        if (typeof array === 'undefined') {
            array = index;
            index = this.columns;
        }
        checkColumnIndex(this, index, true);
        array = checkColumnVector(this, array);
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 0, array[i]);
        }
        this.columns += 1;
        return this;
    }

    /**
     * Swaps two columns
     * @param {number} column1 - First column index
     * @param {number} column2 - Second column index
     * @returns {Matrix} this
     */
    swapColumns(column1, column2) {
        checkColumnIndex(this, column1);
        checkColumnIndex(this, column2);
        var temp, row;
        for (var i = 0; i < this.rows; i++) {
            row = this[i];
            temp = row[column1];
            row[column1] = row[column2];
            row[column2] = temp;
        }
        return this;
    }

    /**
     * Adds the values of a vector to each row
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    addRowVector(vector) {
        vector = checkRowVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] += vector[j];
            }
        }
        return this;
    }

    /**
     * Subtracts the values of a vector from each row
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    subRowVector(vector) {
        vector = checkRowVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] -= vector[j];
            }
        }
        return this;
    }

    /**
     * Multiplies the values of a vector with each row
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    mulRowVector(vector) {
        vector = checkRowVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] *= vector[j];
            }
        }
        return this;
    }

    /**
     * Divides the values of each row by those of a vector
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    divRowVector(vector) {
        vector = checkRowVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] /= vector[j];
            }
        }
        return this;
    }

    /**
     * Adds the values of a vector to each column
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    addColumnVector(vector) {
        vector = checkColumnVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] += vector[i];
            }
        }
        return this;
    }

    /**
     * Subtracts the values of a vector from each column
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    subColumnVector(vector) {
        vector = checkColumnVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] -= vector[i];
            }
        }
        return this;
    }

    /**
     * Multiplies the values of a vector with each column
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    mulColumnVector(vector) {
        vector = checkColumnVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] *= vector[i];
            }
        }
        return this;
    }

    /**
     * Divides the values of each column by those of a vector
     * @param {Array|Matrix} vector - Array or vector
     * @returns {Matrix} this
     */
    divColumnVector(vector) {
        vector = checkColumnVector(this, vector);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                this[i][j] /= vector[i];
            }
        }
        return this;
    }

    /**
     * Multiplies the values of a row with a scalar
     * @param {number} index - Row index
     * @param {number} value
     * @returns {Matrix} this
     */
    mulRow(index, value) {
        checkRowIndex(this, index);
        for (var i = 0; i < this.columns; i++) {
            this[index][i] *= value;
        }
        return this;
    }

    /**
     * Multiplies the values of a column with a scalar
     * @param {number} index - Column index
     * @param {number} value
     * @returns {Matrix} this
     */
    mulColumn(index, value) {
        checkColumnIndex(this, index);
        for (var i = 0; i < this.rows; i++) {
            this[i][index] *= value;
        }
    }

    /**
     * Returns the maximum value of the matrix
     * @returns {number}
     */
    max() {
        var v = this[0][0];
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                if (this[i][j] > v) {
                    v = this[i][j];
                }
            }
        }
        return v;
    }

    /**
     * Returns the index of the maximum value
     * @returns {Array}
     */
    maxIndex() {
        var v = this[0][0];
        var idx = [0, 0];
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                if (this[i][j] > v) {
                    v = this[i][j];
                    idx[0] = i;
                    idx[1] = j;
                }
            }
        }
        return idx;
    }

    /**
     * Returns the minimum value of the matrix
     * @returns {number}
     */
    min() {
        var v = this[0][0];
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                if (this[i][j] < v) {
                    v = this[i][j];
                }
            }
        }
        return v;
    }

    /**
     * Returns the index of the minimum value
     * @returns {Array}
     */
    minIndex() {
        var v = this[0][0];
        var idx = [0, 0];
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                if (this[i][j] < v) {
                    v = this[i][j];
                    idx[0] = i;
                    idx[1] = j;
                }
            }
        }
        return idx;
    }

    /**
     * Returns the maximum value of one row
     * @param {number} row - Row index
     * @returns {number}
     */
    maxRow(row) {
        checkRowIndex(this, row);
        var v = this[row][0];
        for (var i = 1; i < this.columns; i++) {
            if (this[row][i] > v) {
                v = this[row][i];
            }
        }
        return v;
    }

    /**
     * Returns the index of the maximum value of one row
     * @param {number} row - Row index
     * @returns {Array}
     */
    maxRowIndex(row) {
        checkRowIndex(this, row);
        var v = this[row][0];
        var idx = [row, 0];
        for (var i = 1; i < this.columns; i++) {
            if (this[row][i] > v) {
                v = this[row][i];
                idx[1] = i;
            }
        }
        return idx;
    }

    /**
     * Returns the minimum value of one row
     * @param {number} row - Row index
     * @returns {number}
     */
    minRow(row) {
        checkRowIndex(this, row);
        var v = this[row][0];
        for (var i = 1; i < this.columns; i++) {
            if (this[row][i] < v) {
                v = this[row][i];
            }
        }
        return v;
    }

    /**
     * Returns the index of the maximum value of one row
     * @param {number} row - Row index
     * @returns {Array}
     */
    minRowIndex(row) {
        checkRowIndex(this, row);
        var v = this[row][0];
        var idx = [row, 0];
        for (var i = 1; i < this.columns; i++) {
            if (this[row][i] < v) {
                v = this[row][i];
                idx[1] = i;
            }
        }
        return idx;
    }

    /**
     * Returns the maximum value of one column
     * @param {number} column - Column index
     * @returns {number}
     */
    maxColumn(column) {
        checkColumnIndex(this, column);
        var v = this[0][column];
        for (var i = 1; i < this.rows; i++) {
            if (this[i][column] > v) {
                v = this[i][column];
            }
        }
        return v;
    }

    /**
     * Returns the index of the maximum value of one column
     * @param {number} column - Column index
     * @returns {Array}
     */
    maxColumnIndex(column) {
        checkColumnIndex(this, column);
        var v = this[0][column];
        var idx = [0, column];
        for (var i = 1; i < this.rows; i++) {
            if (this[i][column] > v) {
                v = this[i][column];
                idx[0] = i;
            }
        }
        return idx;
    }

    /**
     * Returns the minimum value of one column
     * @param {number} column - Column index
     * @returns {number}
     */
    minColumn(column) {
        checkColumnIndex(this, column);
        var v = this[0][column];
        for (var i = 1; i < this.rows; i++) {
            if (this[i][column] < v) {
                v = this[i][column];
            }
        }
        return v;
    }

    /**
     * Returns the index of the minimum value of one column
     * @param {number} column - Column index
     * @returns {Array}
     */
    minColumnIndex(column) {
        checkColumnIndex(this, column);
        var v = this[0][column];
        var idx = [0, column];
        for (var i = 1; i < this.rows; i++) {
            if (this[i][column] < v) {
                v = this[i][column];
                idx[0] = i;
            }
        }
        return idx;
    }

    /**
     * Returns an array containing the diagonal values of the matrix
     * @returns {Array}
     */
    diag() {
        var min = Math.min(this.rows, this.columns);
        var diag = new Array(min);
        for (var i = 0; i < min; i++) {
            diag[i] = this[i][i];
        }
        return diag;
    }

    /**
     * Returns the sum of all elements of the matrix
     * @returns {number}
     */
    sum() {
        var v = 0;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                v += this[i][j];
            }
        }
        return v;
    }

    /**
     * Returns the mean of all elements of the matrix
     * @returns {number}
     */
    mean() {
        return this.sum() / this.size;
    }

    /**
     * Returns the product of all elements of the matrix
     * @returns {number}
     */
    prod() {
        var prod = 1;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                prod *= this[i][j];
            }
        }
        return prod;
    }

    /**
     * Computes the cumulative sum of the matrix elements (in place, row by row)
     * @returns {Matrix} this
     */
    cumulativeSum() {
        var sum = 0;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                sum += this[i][j];
                this[i][j] = sum;
            }
        }
        return this;
    }

    /**
     * Computes the dot (scalar) product between the matrix and another
     * @param {Matrix} vector2 vector
     * @returns {number}
     */
    dot(vector2) {
        if (Matrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
        var vector1 = this.to1DArray();
        if (vector1.length !== vector2.length) {
            throw new RangeError('vectors do not have the same size');
        }
        var dot = 0;
        for (var i = 0; i < vector1.length; i++) {
            dot += vector1[i] * vector2[i];
        }
        return dot;
    }

    /**
     * Returns the matrix product between this and other
     * @param {Matrix} other
     * @returns {Matrix}
     */
    mmul(other) {
        other = Matrix.checkMatrix(other);
        if (this.columns !== other.rows)
            console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');

        var m = this.rows;
        var n = this.columns;
        var p = other.columns;

        var result = new Matrix(m, p);

        var Bcolj = new Array(n);
        for (var j = 0; j < p; j++) {
            for (var k = 0; k < n; k++)
                Bcolj[k] = other[k][j];

            for (var i = 0; i < m; i++) {
                var Arowi = this[i];

                var s = 0;
                for (k = 0; k < n; k++)
                    s += Arowi[k] * Bcolj[k];

                result[i][j] = s;
            }
        }
        return result;
    }

    /**
     * Returns a row-by-row scaled matrix
     * @param {Number} [min=0] - Minimum scaled value
     * @param {Number} [max=1] - Maximum scaled value
     * @returns {Matrix} - The scaled matrix
     */
    scaleRows(min, max) {
        min = min === undefined ? 0 : min;
        max = max === undefined ? 1 : max;
        if (min >= max) {
            throw new RangeError('min should be strictly smaller than max');
        }
        var newMatrix = Matrix.empty(this.rows, this.columns);
        for (var i = 0; i < this.rows; i++) {
            var scaled = arrayUtils.scale(this.getRow(i), {min, max});
            newMatrix.setRow(i, scaled);
        }
        return newMatrix;
    }

    /**
     * Returns a new column-by-column scaled matrix
     * @param {Number} [min=0] - Minimum scaled value
     * @param {Number} [max=1] - Maximum scaled value
     * @returns {Matrix} - The new scaled matrix
     * @example
     * var matrix = new Matrix([[1,2],[-1,0]]);
     * var scaledMatrix = matrix.scaleColumns(); // [[1,1],[0,0]]
     */
    scaleColumns(min, max) {
        min = min === undefined ? 0 : min;
        max = max === undefined ? 1 : max;
        if (min >= max) {
            throw new RangeError('min should be strictly smaller than max');
        }
        var newMatrix = Matrix.empty(this.rows, this.columns);
        for (var i = 0; i < this.columns; i++) {
            var scaled = arrayUtils.scale(this.getColumn(i), {
                min: min,
                max: max
            });
            newMatrix.setColumn(i, scaled);
        }
        return newMatrix;
    }


    /**
     * Returns the Kronecker product (also known as tensor product) between this and other
     * See https://en.wikipedia.org/wiki/Kronecker_product
     * @param {Matrix} other
     * @return {Matrix}
     */
    kroneckerProduct(other) {
        other = Matrix.checkMatrix(other);

        var m = this.rows;
        var n = this.columns;
        var p = other.rows;
        var q = other.columns;

        var result = new Matrix(m * p, n * q);
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                for (var k = 0; k < p; k++) {
                    for (var l = 0; l < q; l++) {
                        result[p * i + k][q * j + l] = this[i][j] * other[k][l];
                    }
                }
            }
        }
        return result;
    }

    /**
     * Transposes the matrix and returns a new one containing the result
     * @returns {Matrix}
     */
    transpose() {
        var result = new Matrix(this.columns, this.rows);
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                result[j][i] = this[i][j];
            }
        }
        return result;
    }

    /**
     * Sorts the rows (in place)
     * @param {function} compareFunction - usual Array.prototype.sort comparison function
     * @returns {Matrix} this
     */
    sortRows(compareFunction) {
        if (compareFunction === undefined) compareFunction = compareNumbers;
        for (var i = 0; i < this.rows; i++) {
            this[i].sort(compareFunction);
        }
        return this;
    }

    /**
     * Sorts the columns (in place)
     * @param {function} compareFunction - usual Array.prototype.sort comparison function
     * @returns {Matrix} this
     */
    sortColumns(compareFunction) {
        if (compareFunction === undefined) compareFunction = compareNumbers;
        for (var i = 0; i < this.columns; i++) {
            this.setColumn(i, this.getColumn(i).sort(compareFunction));
        }
        return this;
    }

    /**
     * Returns a subset of the matrix
     * @param {number} startRow - First row index
     * @param {number} endRow - Last row index
     * @param {number} startColumn - First column index
     * @param {number} endColumn - Last column index
     * @returns {Matrix}
     */
    subMatrix(startRow, endRow, startColumn, endColumn) {
        if ((startRow > endRow) || (startColumn > endColumn) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
            throw new RangeError('Argument out of range');
        }
        var newMatrix = new Matrix(endRow - startRow + 1, endColumn - startColumn + 1);
        for (var i = startRow; i <= endRow; i++) {
            for (var j = startColumn; j <= endColumn; j++) {
                newMatrix[i - startRow][j - startColumn] = this[i][j];
            }
        }
        return newMatrix;
    }

    /**
     * Returns a subset of the matrix based on an array of row indices
     * @param {Array} indices - Array containing the row indices
     * @param {number} [startColumn = 0] - First column index
     * @param {number} [endColumn = this.columns-1] - Last column index
     * @returns {Matrix}
     */
    subMatrixRow(indices, startColumn, endColumn) {
        if (startColumn === undefined) startColumn = 0;
        if (endColumn === undefined) endColumn = this.columns - 1;
        if ((startColumn > endColumn) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
            throw new RangeError('Argument out of range');
        }

        var newMatrix = new Matrix(indices.length, endColumn - startColumn + 1);
        for (var i = 0; i < indices.length; i++) {
            for (var j = startColumn; j <= endColumn; j++) {
                if (indices[i] < 0 || indices[i] >= this.rows) {
                    throw new RangeError('Row index out of range: ' + indices[i]);
                }
                newMatrix[i][j - startColumn] = this[indices[i]][j];
            }
        }
        return newMatrix;
    }

    /**
     * Returns a subset of the matrix based on an array of column indices
     * @param {Array} indices - Array containing the column indices
     * @param {number} [startRow = 0] - First row index
     * @param {number} [endRow = this.rows-1] - Last row index
     * @returns {Matrix}
     */
    subMatrixColumn(indices, startRow, endRow) {
        if (startRow === undefined) startRow = 0;
        if (endRow === undefined) endRow = this.rows - 1;
        if ((startRow > endRow) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows)) {
            throw new RangeError('Argument out of range');
        }

        var newMatrix = new Matrix(endRow - startRow + 1, indices.length);
        for (var i = 0; i < indices.length; i++) {
            for (var j = startRow; j <= endRow; j++) {
                if (indices[i] < 0 || indices[i] >= this.columns) {
                    throw new RangeError('Column index out of range: ' + indices[i]);
                }
                newMatrix[j - startRow][i] = this[j][indices[i]];
            }
        }
        return newMatrix;
    }

    /**
     * Set a part of the matrix to the given sub-matrix
     * @param {Matrix|Array< Array >} matrix - The source matrix from which to extract values.
     * @param startRow - The index of the first row to set
     * @param startColumn - The index of the first column to set
     * @returns {Matrix}
     */
    setSubMatrix(matrix, startRow, startColumn) {
        matrix = Matrix.checkMatrix(matrix);
        var endRow = startRow + matrix.rows - 1;
        var endColumn = startColumn + matrix.columns - 1;
        if ((startRow > endRow) || (startColumn > endColumn) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
            throw new RangeError('Argument out of range');
        }
        for (var i = 0; i < matrix.rows; i++) {
            for (var j = 0; j < matrix.columns; j++) {
                this[startRow + i][startColumn + j] = matrix[i][j];
            }
        }
        return this;
    }

    /**
     * Returns the trace of the matrix (sum of the diagonal elements)
     * @returns {number}
     */
    trace() {
        var min = Math.min(this.rows, this.columns);
        var trace = 0;
        for (var i = 0; i < min; i++) {
            trace += this[i][i];
        }
        return trace;
    }
}

Matrix.prototype.klass = 'Matrix';

module.exports = Matrix;

/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
    var max = outer ? matrix.rows : matrix.rows - 1;
    if (index < 0 || index > max)
        throw new RangeError('Row index out of range');
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @param {boolean} copy
 * @returns {Array}
 * @throws {RangeError}
 */
function checkRowVector(matrix, vector, copy) {
    if (Matrix.isMatrix(vector)) {
        vector = vector.to1DArray();
    } else if (copy) {
        vector = [].concat(vector);
    }
    if (vector.length !== matrix.columns)
        throw new RangeError('vector size must be the same as the number of columns');
    return vector;
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @param {boolean} copy
 * @returns {Array}
 * @throws {RangeError}
 */
function checkColumnVector(matrix, vector, copy) {
    if (Matrix.isMatrix(vector)) {
        vector = vector.to1DArray();
    } else if (copy) {
        vector = [].concat(vector);
    }
    if (vector.length !== matrix.rows)
        throw new RangeError('vector size must be the same as the number of rows');
    return vector;
}

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkColumnIndex(matrix, index, outer) {
    var max = outer ? matrix.columns : matrix.columns - 1;
    if (index < 0 || index > max)
        throw new RangeError('Column index out of range');
}

/**
 * @private
 * Check that two matrices have the same dimensions
 * @param {Matrix} matrix
 * @param {Matrix} otherMatrix
 */
function checkDimensions(matrix, otherMatrix) {
    if (matrix.rows !== otherMatrix.length ||
        matrix.columns !== otherMatrix[0].length) {
        throw new RangeError('Matrices dimensions must be equal');
    }
}

function compareNumbers(a, b) {
    return a - b;
}

/*
 Synonyms
 */

Matrix.random = Matrix.rand;
Matrix.diagonal = Matrix.diag;
Matrix.prototype.diagonal = Matrix.prototype.diag;
Matrix.identity = Matrix.eye;
Matrix.prototype.negate = Matrix.prototype.neg;
Matrix.prototype.tensorProduct = Matrix.prototype.kroneckerProduct;

/*
 Add dynamically instance and static methods for mathematical operations
 */

var inplaceOperator = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

var inplaceOperatorScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this[i][j] = this[i][j] %op% value;
        }
    }
    return this;
})
`;

var inplaceOperatorMatrix = `
(function %name%M(matrix) {
    checkDimensions(this, matrix);
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this[i][j] = this[i][j] %op% matrix[i][j];
        }
    }
    return this;
})
`;

var staticOperator = `
(function %name%(matrix, value) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.%name%(value);
})
`;

var inplaceMethod = `
(function %name%() {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this[i][j] = %method%(this[i][j]);
        }
    }
    return this;
})
`;

var staticMethod = `
(function %name%(matrix) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.%name%();
})
`;

var inplaceMethodWithArgs = `
(function %name%(%args%) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this[i][j] = %method%(this[i][j], %args%);
        }
    }
    return this;
})
`;

var staticMethodWithArgs = `
(function %name%(matrix, %args%) {
    var newMatrix = new Matrix(matrix);
    return newMatrix.%name%(%args%);
})
`;

var inplaceMethodWithOneArgScalar = `
(function %name%S(%args%) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this[i][j] = %method%(this[i][j], %args%);
        }
    }
    return this;
})
`;
var inplaceMethodWithOneArgMatrix = `
(function %name%M(%args%) {
    checkDimensions(this, %args%);
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this[i][j] = %method%(this[i][j], %args%[i][j]);
        }
    }
    return this;
})
`;

var inplaceMethodWithOneArg = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

var staticMethodWithOneArg = staticMethodWithArgs;

var operators = [
    // Arithmetic operators
    ['+', 'add'],
    ['-', 'sub', 'subtract'],
    ['*', 'mul', 'multiply'],
    ['/', 'div', 'divide'],
    ['%', 'mod', 'modulus'],
    // Bitwise operators
    ['&', 'and'],
    ['|', 'or'],
    ['^', 'xor'],
    ['<<', 'leftShift'],
    ['>>', 'signPropagatingRightShift'],
    ['>>>', 'rightShift', 'zeroFillRightShift']
];

for (var operator of operators) {
    var inplaceOp = eval(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
    var inplaceOpS = eval(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
    var inplaceOpM = eval(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
    var staticOp = eval(fillTemplateFunction(staticOperator, {name: operator[1]}));
    for (var i = 1; i < operator.length; i++) {
        Matrix.prototype[operator[i]] = inplaceOp;
        Matrix.prototype[operator[i] + 'S'] = inplaceOpS;
        Matrix.prototype[operator[i] + 'M'] = inplaceOpM;
        Matrix[operator[i]] = staticOp;
    }
}

var methods = [
    ['~', 'not']
];

[
    'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
    'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p',
    'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
].forEach(function (mathMethod) {
    methods.push(['Math.' + mathMethod, mathMethod]);
});

for (var method of methods) {
    var inplaceMeth = eval(fillTemplateFunction(inplaceMethod, {name: method[1], method: method[0]}));
    var staticMeth = eval(fillTemplateFunction(staticMethod, {name: method[1]}));
    for (var i = 1; i < method.length; i++) {
        Matrix.prototype[method[i]] = inplaceMeth;
        Matrix[method[i]] = staticMeth;
    }
}

var methodsWithArgs = [
    ['Math.pow', 1, 'pow']
];

for (var methodWithArg of methodsWithArgs) {
    var args = 'arg0';
    for (var i = 1; i < methodWithArg[1]; i++) {
        args += `, arg${i}`;
    }
    if (methodWithArg[1] !== 1) {
        var inplaceMethWithArgs = eval(fillTemplateFunction(inplaceMethodWithArgs, {
            name: methodWithArg[2],
            method: methodWithArg[0],
            args: args
        }));
        var staticMethWithArgs = eval(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
        for (var i = 2; i < methodWithArg.length; i++) {
            Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
            Matrix[methodWithArg[i]] = staticMethWithArgs;
        }
    } else {
        var tmplVar = {
            name: methodWithArg[2],
            args: args,
            method: methodWithArg[0]
        };
        console.log(tmplVar);
        let inplaceMethod = eval(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
        let inplaceMethodS = eval(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
        let inplaceMethodM = eval(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
        console.log(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
        let staticMethod = eval(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
        for (var i = 2; i < methodWithArg.length; i++) {
            Matrix.prototype[methodWithArg[i]] = inplaceMethod;
            Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
            Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
            Matrix[methodWithArg[i]] = staticMethod;
        }
    }
}

function fillTemplateFunction(template, values) {
    for (var i in values) {
        template = template.replace(new RegExp('%' + i + '%', 'g'), values[i]);
    }
    return template;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Cluster () {
    this.children = [];
    this.distance = -1;
    this.index = [];
}

/**
 * Creates an array of values where maximum distance smaller than the threshold
 * @param {number} threshold
 * @return {Array <Cluster>}
 */
Cluster.prototype.cut = function (threshold) {
    if (threshold < 0) throw new RangeError('Threshold too small');
    var root = new Cluster();
    root.children = this.children;
    root.distance = this.distance;
    root.index = this.index;
    var list = [root];
    var ans = [];
    while (list.length > 0) {
        var aux = list.shift();
        if (threshold >= aux.distance)
            ans.push(aux);
        else
            list = list.concat(aux.children);
    }
    return ans;
};

/**
 * Merge the leaves in the minimum way to have 'minGroups' number of clusters
 * @param {number} minGroups
 * @return {Cluster}
 */
Cluster.prototype.group = function (minGroups) {
    if (minGroups < 1) throw new RangeError('Number of groups too small');
    var root = new Cluster();
    root.children = this.children;
    root.distance = this.distance;
    root.index = this.index;
    if (minGroups === 1)
        return root;
    var list = [root];
    var aux;
    while (list.length < minGroups && list.length !== 0) {
        aux = list.shift();
        list = list.concat(aux.children);
    }
    if (list.length === 0) throw new RangeError('Number of groups too big');
    for (var i = 0; i < list.length; i++)
        if (list[i].distance === aux.distance) {
            list.concat(list[i].children.slice(1));
            list[i] = list[i].children[0];
        }
    for (var j = 0; j < list.length; j++)
        if (list[j].distance !== 0) {
            var obj = list[j];
            obj.children = obj.index;
        }
    return root;
};

module.exports = Cluster;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.hypotenuse = function hypotenuse(a, b) {
    if (Math.abs(a) > Math.abs(b)) {
        var r = b / a;
        return Math.abs(a) * Math.sqrt(1 + r * r);
    }
    if (b !== 0) {
        var r = a / b;
        return Math.abs(b) * Math.sqrt(1 + r * r);
    }
    return 0;
};

// For use in the decomposition algorithms. With big matrices, access time is
// too long on elements from array subclass
// todo check when it is fixed in v8
// http://jsperf.com/access-and-write-array-subclass
exports.getEmpty2DArray = function (rows, columns) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
    }
    return array;
};

exports.getFilled2DArray = function (rows, columns, value) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            array[i][j] = value;
        }
    }
    return array;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = newArray

function newArray (n, value) {
  n = n || 0
  var array = new Array(n)
  for (var i = 0; i < n; i++) {
    array[i] = value
  }
  return array
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(haystack, needle, comparator, low, high) {
  var mid, cmp;

  if(low === undefined)
    low = 0;

  else {
    low = low|0;
    if(low < 0 || low >= haystack.length)
      throw new RangeError("invalid lower bound");
  }

  if(high === undefined)
    high = haystack.length - 1;

  else {
    high = high|0;
    if(high < low || high >= haystack.length)
      throw new RangeError("invalid upper bound");
  }

  while(low <= high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle, mid, haystack);

    /* Too low. */
    if(cmp < 0.0)
      low  = mid + 1;

    /* Too high. */
    else if(cmp > 0.0)
      high = mid - 1;

    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return ~low;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function squaredEuclidean(p, q) {
    var d = 0;
    for (var i = 0; i < p.length; i++) {
        d += (p[i] - q[i]) * (p[i] - q[i]);
    }
    return d;
}

function euclidean(p, q) {
    return Math.sqrt(squaredEuclidean(p, q));
}

module.exports = euclidean;
euclidean.squared = squaredEuclidean;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cluster = __webpack_require__(1);
var util = __webpack_require__(36);

function ClusterLeaf (index) {
    Cluster.call(this);
    this.index = index;
    this.distance = 0;
    this.children = undefined;
}

util.inherits(ClusterLeaf, Cluster);

module.exports = ClusterLeaf;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(0);
module.exports.Decompositions = module.exports.DC = __webpack_require__(29);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const HashTable = __webpack_require__(19);

class SparseMatrix {
    constructor(rows, columns, options = {}) {
        if (rows instanceof SparseMatrix) { // clone
            const other = rows;
            this._init(other.rows, other.columns, other.elements.clone(), other.threshold);
            return;
        }

        if (Array.isArray(rows)) {
            const matrix = rows;
            rows = matrix.length;
            options = columns || {};
            columns = matrix[0].length;
            this._init(rows, columns, new HashTable(options), options.threshold);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    var value = matrix[i][j];
                    if (this.threshold && Math.abs(value) < this.threshold) value = 0;
                    if (value !== 0) {
                        this.elements.set(i * columns + j, matrix[i][j]);
                    }
                }
            }
        } else {
            this._init(rows, columns, new HashTable(options), options.threshold);
        }
    }

    _init(rows, columns, elements, threshold) {
        this.rows = rows;
        this.columns = columns;
        this.elements = elements;
        this.threshold = threshold || 0;
    }
    
    static eye(rows = 1, columns = rows) {
        const min = Math.min(rows, columns);
        const matrix = new SparseMatrix(rows, columns, {initialCapacity: min});
        for (var i = 0; i < min; i++) {
            matrix.set(i, i, 1);
        }
        return matrix;
    }

    clone() {
        return new SparseMatrix(this);
    }
    
    to2DArray() {
        const copy = new Array(this.rows);
        for (var i = 0; i < this.rows; i++) {
            copy[i] = new Array(this.columns);
            for (var j = 0; j < this.columns; j++) {
                copy[i][j] = this.get(i, j);
            }
        }
        return copy;
    }

    isSquare() {
        return this.rows === this.columns;
    }

    isSymmetric() {
        if (!this.isSquare()) return false;

        var symmetric = true;
        this.forEachNonZero((i, j, v) => {
            if (this.get(j, i) !== v) {
                symmetric = false;
                return false;
            }
            return v;
        });
        return symmetric;
    }

    get cardinality() {
        return this.elements.size;
    }

    get size() {
        return this.rows * this.columns;
    }

    get(row, column) {
        return this.elements.get(row * this.columns + column);
    }

    set(row, column, value) {
        if (this.threshold && Math.abs(value) < this.threshold) value = 0;
        if (value === 0) {
            this.elements.remove(row * this.columns + column);
        } else {
            this.elements.set(row * this.columns + column, value);
        }
        return this;
    }
    
    mmul(other) {
        if (this.columns !== other.rows)
            console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');
        
        const m = this.rows;
        const p = other.columns;
        
        const result = new SparseMatrix(m, p);
        this.forEachNonZero((i, j, v1) => {
            other.forEachNonZero((k, l, v2) => {
                if (j === k) {
                    result.set(i, l, result.get(i, l) + v1 * v2);
                }
                return v2;
            });
            return v1;
        });
        return result;
    }

    kroneckerProduct(other) {
        const m = this.rows;
        const n = this.columns;
        const p = other.rows;
        const q = other.columns;

        const result = new SparseMatrix(m * p, n * q, {
            initialCapacity: this.cardinality * other.cardinality
        });
        this.forEachNonZero((i, j, v1) => {
            other.forEachNonZero((k, l, v2) => {
                result.set(p * i + k, q * j + l, v1 * v2);
                return v2;
            });
            return v1;
        });
        return result;
    }

    forEachNonZero(callback) {
        this.elements.forEachPair((key, value) => {
            const i = (key / this.columns) | 0;
            const j = key % this.columns;
            let r = callback(i, j, value);
            if (r === false) return false; // stop iteration
            if (this.threshold && Math.abs(r) < this.threshold) r = 0;
            if (r !== value) {
                if (r === 0) {
                    this.elements.remove(key, true);
                } else {
                    this.elements.set(key, r);
                }
            }
            return true;
        });
        this.elements.maybeShrinkCapacity();
        return this;
    }

    getNonZeros() {
        const cardinality = this.cardinality;
        const rows = new Array(cardinality);
        const columns = new Array(cardinality);
        const values = new Array(cardinality);
        var idx = 0;
        this.forEachNonZero((i, j, value) => {
            rows[idx] = i;
            columns[idx] = j;
            values[idx] = value;
            idx++;
            return value;
        });
        return {rows, columns, values};
    }

    setThreshold(newThreshold) {
        if (newThreshold !== 0 && newThreshold !== this.threshold) {
            this.threshold = newThreshold;
            this.forEachNonZero((i, j, v) => v);
        }
        return this;
    }
}

SparseMatrix.prototype.klass = 'Matrix';

SparseMatrix.identity = SparseMatrix.eye;
SparseMatrix.prototype.tensorProduct = SparseMatrix.prototype.kroneckerProduct;

module.exports = SparseMatrix;

/*
 Add dynamically instance and static methods for mathematical operations
 */

var inplaceOperator = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

var inplaceOperatorScalar = `
(function %name%S(value) {
    this.forEachNonZero((i, j, v) => v %op% value);
    return this;
})
`;

var inplaceOperatorMatrix = `
(function %name%M(matrix) {
    matrix.forEachNonZero((i, j, v) => {
        this.set(i, j, this.get(i, j) %op% v);
        return v;
    });
    return this;
})
`;

var staticOperator = `
(function %name%(matrix, value) {
    var newMatrix = new SparseMatrix(matrix);
    return newMatrix.%name%(value);
})
`;

var inplaceMethod = `
(function %name%() {
    this.forEachNonZero((i, j, v) => %method%(v));
    return this;
})
`;

var staticMethod = `
(function %name%(matrix) {
    var newMatrix = new SparseMatrix(matrix);
    return newMatrix.%name%();
})
`;

var operators = [
    // Arithmetic operators
    ['+', 'add'],
    ['-', 'sub', 'subtract'],
    ['*', 'mul', 'multiply'],
    ['/', 'div', 'divide'],
    ['%', 'mod', 'modulus'],
    // Bitwise operators
    ['&', 'and'],
    ['|', 'or'],
    ['^', 'xor'],
    ['<<', 'leftShift'],
    ['>>', 'signPropagatingRightShift'],
    ['>>>', 'rightShift', 'zeroFillRightShift']
];

for (var operator of operators) {
    for (var i = 1; i < operator.length; i++) {
        SparseMatrix.prototype[operator[i]] = eval(fillTemplateFunction(inplaceOperator, {name: operator[i], op: operator[0]}));
        SparseMatrix.prototype[operator[i] + 'S'] = eval(fillTemplateFunction(inplaceOperatorScalar, {name: operator[i] + 'S', op: operator[0]}));
        SparseMatrix.prototype[operator[i] + 'M'] = eval(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[i] + 'M', op: operator[0]}));

        SparseMatrix[operator[i]] = eval(fillTemplateFunction(staticOperator, {name: operator[i]}));
    }
}

var methods = [
    ['~', 'not']
];

[
    'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
    'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p',
    'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
].forEach(function (mathMethod) {
    methods.push(['Math.' + mathMethod, mathMethod]);
});

for (var method of methods) {
    for (var i = 1; i < method.length; i++) {
        SparseMatrix.prototype[method[i]] = eval(fillTemplateFunction(inplaceMethod, {name: method[i], method: method[0]}));
        SparseMatrix[method[i]] = eval(fillTemplateFunction(staticMethod, {name: method[i]}));
    }
}

function fillTemplateFunction(template, values) {
    for (var i in values) {
        template = template.replace(new RegExp('%' + i + '%', 'g'), values[i]);
    }
    return template;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareNumbers(a, b) {
    return a - b;
}

/**
 * Computes the sum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.sum = function sum(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
};

/**
 * Computes the maximum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.max = function max(values) {
    var max = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] > max) max = values[i];
    }
    return max;
};

/**
 * Computes the minimum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.min = function min(values) {
    var min = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] < min) min = values[i];
    }
    return min;
};

/**
 * Computes the min and max of the given values
 * @param {Array} values
 * @returns {{min: number, max: number}}
 */
exports.minMax = function minMax(values) {
    var min = values[0];
    var max = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] < min) min = values[i];
        if (values[i] > max) max = values[i];
    }
    return {
        min: min,
        max: max
    };
};

/**
 * Computes the arithmetic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.arithmeticMean = function arithmeticMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        sum += values[i];
    }
    return sum / l;
};

/**
 * {@link arithmeticMean}
 */
exports.mean = exports.arithmeticMean;

/**
 * Computes the geometric mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.geometricMean = function geometricMean(values) {
    var mul = 1;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        mul *= values[i];
    }
    return Math.pow(mul, 1 / l);
};

/**
 * Computes the mean of the log of the given values
 * If the return value is exponentiated, it gives the same result as the
 * geometric mean.
 * @param {Array} values
 * @returns {number}
 */
exports.logMean = function logMean(values) {
    var lnsum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        lnsum += Math.log(values[i]);
    }
    return lnsum / l;
};

/**
 * Computes the weighted grand mean for a list of means and sample sizes
 * @param {Array} means - Mean values for each set of samples
 * @param {Array} samples - Number of original values for each set of samples
 * @returns {number}
 */
exports.grandMean = function grandMean(means, samples) {
    var sum = 0;
    var n = 0;
    var l = means.length;
    for (var i = 0; i < l; i++) {
        sum += samples[i] * means[i];
        n += samples[i];
    }
    return sum / n;
};

/**
 * Computes the truncated mean of the given values using a given percentage
 * @param {Array} values
 * @param {number} percent - The percentage of values to keep (range: [0,1])
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var k = Math.floor(l * percent);
    var sum = 0;
    for (var i = k; i < (l - k); i++) {
        sum += values[i];
    }
    return sum / (l - 2 * k);
};

/**
 * Computes the harmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.harmonicMean = function harmonicMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] === 0) {
            throw new RangeError('value at index ' + i + 'is zero');
        }
        sum += 1 / values[i];
    }
    return l / sum;
};

/**
 * Computes the contraharmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.contraHarmonicMean = function contraHarmonicMean(values) {
    var r1 = 0;
    var r2 = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        r1 += values[i] * values[i];
        r2 += values[i];
    }
    if (r2 < 0) {
        throw new RangeError('sum of values is negative');
    }
    return r1 / r2;
};

/**
 * Computes the median of the given values
 * @param {Array} values
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.median = function median(values, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var half = Math.floor(l / 2);
    if (l % 2 === 0) {
        return (values[half - 1] + values[half]) * 0.5;
    } else {
        return values[half];
    }
};

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.variance = function variance(values, unbiased) {
    if (unbiased === undefined) unbiased = true;
    var theMean = exports.mean(values);
    var theVariance = 0;
    var l = values.length;

    for (var i = 0; i < l; i++) {
        var x = values[i] - theMean;
        theVariance += x * x;
    }

    if (unbiased) {
        return theVariance / (l - 1);
    } else {
        return theVariance / l;
    }
};

/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.standardDeviation = function standardDeviation(values, unbiased) {
    return Math.sqrt(exports.variance(values, unbiased));
};

exports.standardError = function standardError(values) {
    return exports.standardDeviation(values) / Math.sqrt(values.length);
};

/**
 * IEEE Transactions on biomedical engineering, vol. 52, no. 1, january 2005, p. 76-
 * Calculate the standard deviation via the Median of the absolute deviation
 *  The formula for the standard deviation only holds for Gaussian random variables.
 * @returns {{mean: number, stdev: number}}
 */
exports.robustMeanAndStdev = function robustMeanAndStdev(y) {
    var mean = 0, stdev = 0;
    var length = y.length, i = 0;
    for (i = 0; i < length; i++) {
        mean += y[i];
    }
    mean /= length;
    var averageDeviations = new Array(length);
    for (i = 0; i < length; i++)
        averageDeviations[i] = Math.abs(y[i] - mean);
    averageDeviations.sort(compareNumbers);
    if (length % 2 === 1) {
        stdev = averageDeviations[(length - 1) / 2] / 0.6745;
    } else {
        stdev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
    }

    return {
        mean: mean,
        stdev: stdev
    };
};

exports.quartiles = function quartiles(values, alreadySorted) {
    if (typeof (alreadySorted) === 'undefined') alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }

    var quart = values.length / 4;
    var q1 = values[Math.ceil(quart) - 1];
    var q2 = exports.median(values, true);
    var q3 = values[Math.ceil(quart * 3) - 1];

    return {q1: q1, q2: q2, q3: q3};
};

exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
    return Math.sqrt(exports.pooledVariance(samples, unbiased));
};

exports.pooledVariance = function pooledVariance(samples, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var sum = 0;
    var length = 0, l = samples.length;
    for (var i = 0; i < l; i++) {
        var values = samples[i];
        var vari = exports.variance(values);

        sum += (values.length - 1) * vari;

        if (unbiased)
            length += values.length - 1;
        else
            length += values.length;
    }
    return sum / length;
};

exports.mode = function mode(values) {
    var l = values.length,
        itemCount = new Array(l),
        i;
    for (i = 0; i < l; i++) {
        itemCount[i] = 0;
    }
    var itemArray = new Array(l);
    var count = 0;

    for (i = 0; i < l; i++) {
        var index = itemArray.indexOf(values[i]);
        if (index >= 0)
            itemCount[index]++;
        else {
            itemArray[count] = values[i];
            itemCount[count] = 1;
            count++;
        }
    }

    var maxValue = 0, maxIndex = 0;
    for (i = 0; i < count; i++) {
        if (itemCount[i] > maxValue) {
            maxValue = itemCount[i];
            maxIndex = i;
        }
    }

    return itemArray[maxIndex];
};

exports.covariance = function covariance(vector1, vector2, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var mean1 = exports.mean(vector1);
    var mean2 = exports.mean(vector2);

    if (vector1.length !== vector2.length)
        throw 'Vectors do not have the same dimensions';

    var cov = 0, l = vector1.length;
    for (var i = 0; i < l; i++) {
        var x = vector1[i] - mean1;
        var y = vector2[i] - mean2;
        cov += x * y;
    }

    if (unbiased)
        return cov / (l - 1);
    else
        return cov / l;
};

exports.skewness = function skewness(values, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var theMean = exports.mean(values);

    var s2 = 0, s3 = 0, l = values.length;
    for (var i = 0; i < l; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s3 += dev * dev * dev;
    }
    var m2 = s2 / l;
    var m3 = s3 / l;

    var g = m3 / (Math.pow(m2, 3 / 2.0));
    if (unbiased) {
        var a = Math.sqrt(l * (l - 1));
        var b = l - 2;
        return (a / b) * g;
    } else {
        return g;
    }
};

exports.kurtosis = function kurtosis(values, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var theMean = exports.mean(values);
    var n = values.length, s2 = 0, s4 = 0;

    for (var i = 0; i < n; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s4 += dev * dev * dev * dev;
    }
    var m2 = s2 / n;
    var m4 = s4 / n;

    if (unbiased) {
        var v = s2 / (n - 1);
        var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
        var b = s4 / (v * v);
        var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));

        return a * b - 3 * c;
    } else {
        return m4 / (m2 * m2) - 3;
    }
};

exports.entropy = function entropy(values, eps) {
    if (typeof (eps) === 'undefined') eps = 0;
    var sum = 0, l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * Math.log(values[i] + eps);
    return -sum;
};

exports.weightedMean = function weightedMean(values, weights) {
    var sum = 0, l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * weights[i];
    return sum;
};

exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
    return Math.sqrt(exports.weightedVariance(values, weights));
};

exports.weightedVariance = function weightedVariance(values, weights) {
    var theMean = exports.weightedMean(values, weights);
    var vari = 0, l = values.length;
    var a = 0, b = 0;

    for (var i = 0; i < l; i++) {
        var z = values[i] - theMean;
        var w = weights[i];

        vari += w * (z * z);
        b += w;
        a += w * w;
    }

    return vari * (b / (b * b - a));
};

exports.center = function center(values, inPlace) {
    if (typeof (inPlace) === 'undefined') inPlace = false;

    var result = values;
    if (!inPlace)
        result = [].concat(values);

    var theMean = exports.mean(result), l = result.length;
    for (var i = 0; i < l; i++)
        result[i] -= theMean;
};

exports.standardize = function standardize(values, standardDev, inPlace) {
    if (typeof (standardDev) === 'undefined') standardDev = exports.standardDeviation(values);
    if (typeof (inPlace) === 'undefined') inPlace = false;
    var l = values.length;
    var result = inPlace ? values : new Array(l);
    for (var i = 0; i < l; i++)
        result[i] = values[i] / standardDev;
    return result;
};

exports.cumulativeSum = function cumulativeSum(array) {
    var l = array.length;
    var result = new Array(l);
    result[0] = array[0];
    for (var i = 1; i < l; i++)
        result[i] = result[i - 1] + array[i];
    return result;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(9);
exports.matrix = __webpack_require__(31);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var numberIsNan = __webpack_require__(32);

function assertNum(x) {
	if (typeof x !== 'number' || numberIsNan(x)) {
		throw new TypeError('Expected a number');
	}
}

exports.asc = function (a, b) {
	assertNum(a);
	assertNum(b);
	return a - b;
};

exports.desc = function (a, b) {
	assertNum(a);
	assertNum(b);
	return b - a;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(7);
const newArray = __webpack_require__(3);
const simpleClustering = __webpack_require__(30);
const hlClust = __webpack_require__(23);
const DEBUG = false;

class SpinSystem {
    constructor(chemicalShifts, couplingConstants, multiplicity) {
        this.chemicalShifts = chemicalShifts;
        this.couplingConstants = couplingConstants;
        this.multiplicity = multiplicity;
        this.nSpins = chemicalShifts.length;
        this._initConnectivity();
        this._initClusters();
    }

    static fromSpinusPrediction(result) {
        var lines = result.split('\n');
        var nspins = lines.length - 1;
        var cs = new Array(nspins);
        var integrals = new Array(nspins);
        var ids = {};
        var jc = Matrix.zeros(nspins, nspins);
        for (let i = 0; i < nspins; i++) {
            var tokens = lines[i].split('\t');
            cs[i] = +tokens[2];
            ids[tokens[0] - 1] = i;
            integrals[i] = +tokens[5];//Is it always 1??
        }
        for (let i = 0; i < nspins; i++) {
            tokens = lines[i].split('\t');
            var nCoup = (tokens.length - 4) / 3;
            for (j = 0; j < nCoup; j++) {
                var withID = tokens[4 + 3 * j] - 1;
                var idx = ids[withID];
                jc[i][idx] = +tokens[6 + 3 * j];
            }
        }

        for (var j = 0; j < nspins; j++) {
            for (var i = j; i < nspins; i++) {
                jc[j][i] = jc[i][j];
            }
        }
        return new SpinSystem(cs, jc, newArray(nspins, 2));
    }

    static fromPrediction(input) {
        let predictions = SpinSystem._ungroupAtoms(input);
        const nSpins = predictions.length;
        const cs = new Array(nSpins);
        const jc = Matrix.zeros(nSpins, nSpins);
        const multiplicity = new Array(nSpins);
        const ids = {};
        var i,k,j;
        for(i=0;i<nSpins;i++) {
            cs[i] = predictions[i].delta;
            ids[predictions[i].atomIDs[0]] = i;
        }
        for( i = 0; i < nSpins; i++) {
            cs[i] = predictions[i].delta;
            j = predictions[i].j;
            for( k = 0; k < j.length; k++) {
                //console.log(ids[result[i].atomIDs[0]],ids[j[k].assignment]);
                jc[ids[predictions[i].atomIDs[0]]][ids[j[k].assignment]] = j[k].coupling;
                jc[ids[j[k].assignment]][ids[predictions[i].atomIDs[0]]] = j[k].coupling;
            }
            multiplicity[i] = predictions[i].integral+1;
        }

        return new SpinSystem(cs, jc, multiplicity);
    }


    static _ungroupAtoms(prediction) {
        let result = [];
        prediction.forEach(pred => {
            let atomIDs = pred['atomIDs'];
            for(let i = 0; i < atomIDs.length; i++) {
                let tempPred = JSON.parse(JSON.stringify(pred));
                tempPred.atomIDs = [atomIDs[i]];
                tempPred.integral = 1;
                result.push(tempPred);
            }
        });

        return result;
    }


    _initClusters() {
        this.clusters = simpleClustering(this.connectivity, {out:"indexes"});
    }

    _initConnectivity() {
        const couplings = this.couplingConstants;
        const connectivity = Matrix.ones(couplings.length, couplings.length);
        for (var i = 0; i < couplings.length; i++) {
            for (var j = i; j < couplings[i].length; j++) {
                if (couplings[i][j] === 0) {
                    connectivity[i][j] = 0;
                    connectivity[j][i] = 0;
                }
            }
        }
        this.connectivity = connectivity;
    }


    _calculateBetas(J, frequency){
        var betas = Matrix.zeros(J.length, J.length);
        //Before clustering, we must add hidden J, we could use molecular information if available
        var i,j;
        for( i=0;i<J.rows;i++){
            for( j=i;j<J.columns;j++){
                if((this.chemicalShifts[i]-this.chemicalShifts[j])!=0){
                    betas[i][j] = 1 - Math.abs(J[i][j]/((this.chemicalShifts[i]-this.chemicalShifts[j])*frequency));
                    betas[j][i] = betas[i][j];
                }
                else if( !(i == j || J[i][j] !== 0) ){
                        betas[i][j] = 1;
                        betas[j][i] = 1;
                    }
            }
        }
        return betas;
    }

    ensureClusterSize(options){
        var betas = this._calculateBetas(this.couplingConstants, options.frequency||400);
        var cluster = hlClust.agnes(betas, {isDistanceMatrix:true});
        var list = [];
        this._splitCluster(cluster, list, options.maxClusterSize||8, false);
        var clusters = this._mergeClusters(list);
        this.nClusters = clusters.length;
        //console.log(clusters);
        this.clusters  = new Array(clusters.length);
        //System.out.println(this.conmatrix);
        for(var j=0;j<this.nClusters;j++) {
            this.clusters[j] = [];
            for(var i = 0; i < this.nSpins; i++) {
                if(clusters[j][i] !== 0) {
                    if (clusters[j][i] < 0)
                        this.clusters[j].push(-(i + 1));
                    else
                        this.clusters[j].push(i);
                }
            }
        }
        if(DEBUG){
            console.log("Cluster list");
            console.log(this.clusters);

        }
    }

    /**
     * Recursively split the clusters until the maxClusterSize criteria has been ensured.
     * @param cluster
     * @param clusterList
     */
    _splitCluster(cluster, clusterList, maxClusterSize, force) {
        if(!force && cluster.index.length <= maxClusterSize) {
            clusterList.push(this._getMembers(cluster));
        }
        else{
            for(var child of cluster.children){
                if (!isNaN(child.index) || child.index.length <= maxClusterSize) {
                    var members = this._getMembers(child);
                    //Add the neighbors that shares at least 1 coupling with the given cluster
                    var count = 0;
                    for (var i = 0; i < this.nSpins; i++) {
                        if (members[i] == 1) {
                            count++;
                            for (var j = 0; j < this.nSpins; j++) {
                                if (this.connectivity[i][j] == 1 && members[j] == 0) {
                                    members[j] = -1;
                                    count++;
                                }
                            }
                        }
                    }

                    if (count <= maxClusterSize)
                        clusterList.push(members);
                    else {
                        if (isNaN(child.index))
                            this._splitCluster(child, clusterList, maxClusterSize, true);
                        else {
                            //We have to threat this spin alone and use the resurrection algorithm instead of the simulation
                            members[child.index] = 2;
                            clusterList.push(members);
                        }
                    }
                }
                else{
                    this._splitCluster(child, clusterList, maxClusterSize, false);
                }
            }
        }
    }
    /**
     * Recursively gets the cluster members
     * @param cluster
     * @param members
     */

    _getMembers(cluster) {
        var members = new Array(this.nSpins);
        for(var i = 0; i < this.nSpins; i++) {
            members[i]=0;
        }
        if(!isNaN(cluster.index)) {
            members[cluster.index*1] = 1;
        }
        else{
            for(var index of cluster.index) {
                members[index.index*1] = 1;
            }
        }
        return members;
    }

    _mergeClusters(list) {
        var nElements = 0;
        var clusterA, clusterB, i, j, index, common, count;
        for(i = list.length-1; i >=0 ; i--) {
            clusterA = list[i];
            nElements = clusterA.length;
            index=0;

            //Is it a candidate to be merged?
            while(index < nElements && clusterA[index++] != -1);

            if(index < nElements) {
                for(j = list.length-1; j>= i+1; j--) {
                    clusterB = list[j];
                    //Do they have common elements?
                    index = 0;
                    common = 0;
                    count = 0;
                    while(index < nElements) {
                        if(clusterA[index]*clusterB[index] === -1) {
                            common++;
                        }
                        if(clusterA[index] !==0 || clusterB[index] !== 0) {
                            count++;
                        }
                        index++;
                    }

                    if(common > 0 && count <= this.maxClusterSize) {
                        //Then we can merge those 2 clusters
                        index = 0;
                        while(index<nElements) {
                            if(clusterB[index] === 1) {
                                clusterA[index]=1;
                            }
                            else{
                                if(clusterB[index] === -1 && clusterA[index] !== 1) {
                                    clusterA[index]=-1;
                                }
                            }
                            index++;
                        }
                        //list.remove(clusterB);
                        list.splice(j,1);
                        j++;
                    }
                }
            }
        }

        return list;
    }
}

module.exports = SpinSystem;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(7);
const SparseMatrix = __webpack_require__(8);
const binarySearch = __webpack_require__(4);
const sortAsc = __webpack_require__(11).asc;
const newArray = __webpack_require__(3);

const getPauli = __webpack_require__(38);

const DEBUG = false;
const smallValue = 1e-2;

function simulate1d(spinSystem, options) {
    var i, j;
    const frequencyMHz = (options.frequency || 400);
    const from = (options.from || 0) * frequencyMHz;
    const to = (options.to || 10) * frequencyMHz;
    const lineWidth = options.lineWidth || 1;
    const nbPoints = options.nbPoints || 1024;
    const maxClusterSize = options.maxClusterSize || 10;
    const output = options.output || "y";

    const chemicalShifts = spinSystem.chemicalShifts.slice();
    for (i = 0; i < chemicalShifts.length; i++) {
        chemicalShifts[i] = chemicalShifts[i] * frequencyMHz;
    }

    let lineWidthPoints = (nbPoints * lineWidth / Math.abs(to - from)) / 2.355;
    let lnPoints = lineWidthPoints * 20;

    const gaussianLength = lnPoints | 0;
    const gaussian = new Array(gaussianLength);
    const b = lnPoints / 2;
    const c = lineWidthPoints * lineWidthPoints * 2;
    for (i = 0; i < gaussianLength; i++) {
        gaussian[i] = 1e12 * Math.exp(-((i - b) * (i - b)) / c);
    }

    const result = new newArray(nbPoints, 0);

    const multiplicity = spinSystem.multiplicity;
    for (var h = 0; h < spinSystem.clusters.length; h++) {
        const cluster = spinSystem.clusters[h];

        var clusterFake = new Array(cluster.length);
        for (i = 0; i < cluster.length; i++) {
            clusterFake[i] = cluster[i]<0?-cluster[i]-1:cluster[i];
        }

        var weight = 1;
        var sumI = 0;
        const frequencies = [];
        const intensities = [];
        if (cluster.length > maxClusterSize) {
            //This is a single spin, but the cluster exceeds the maxClusterSize criteria
            //we use the simple multiplicity algorithm
            //Add the central peak. It will be split with every single J coupling.
            var index  = 0;
            while (cluster[index++]<0);
            index = cluster[index-1];
            var currentSize, jc;
            frequencies.push(-chemicalShifts[index]);
            for (i = 0;i < cluster.length; i++) {
                if (cluster[i] < 0) {
                    jc = spinSystem.couplingConstants[index][clusterFake[i]] / 2;
                    currentSize = frequencies.length;
                    for ( j=0 ; j < currentSize; j++) {
                        frequencies.push(frequencies[j] + jc);
                        frequencies[j] -= jc;
                    }
                }
            }

            frequencies.sort(sortAsc);
            sumI=frequencies.length;
            weight=1;

            for (i=0;i<sumI;i++){
                intensities.push(1);
            }

        } else {
            const hamiltonian = getHamiltonian(
                chemicalShifts,
                spinSystem.couplingConstants,
                multiplicity,
                spinSystem.connectivity,
                clusterFake
            );

            const hamSize = hamiltonian.rows;
            const evd = new Matrix.DC.EVD(hamiltonian);
            const V = evd.eigenvectorMatrix;
            const diagB = evd.realEigenvalues;
            const assignmentMatrix = new SparseMatrix(hamSize, hamSize);
            const multLen = cluster.length;
            weight = 0;
            for (var n = 0; n < multLen; n++) {
                const L = getPauli(multiplicity[clusterFake[n]]);

                let temp = 1;
                for (j = 0; j < n; j++) {
                    temp *= multiplicity[clusterFake[j]];
                }
                const A = SparseMatrix.eye(temp);

                temp = 1;
                for (j = n + 1; j < multLen; j++) {
                    temp *= multiplicity[clusterFake[j]];
                }
                const B = SparseMatrix.eye(temp);
                const tempMat = A.kroneckerProduct(L.m).kroneckerProduct(B);
                if (cluster[n] >= 0) {
                    assignmentMatrix.add(tempMat.mul(cluster[n] + 1));
                    weight++;
                } else {
                    assignmentMatrix.add(tempMat.mul(cluster[n]));
                }
            }

            let rhoip = Matrix.zeros(hamSize, hamSize);
            assignmentMatrix.forEachNonZero((i, j, v) => {
                if (v > 0) {
                    const row = V[j];
                    for (var k = 0; k < row.length; k++) {
                        if (row[k] !== 0) {
                            rhoip.set(i, k, rhoip.get(i, k) + row[k]);
                        }
                    }
                }
                return v;
            });

            let rhoip2 = rhoip.clone();
            assignmentMatrix.forEachNonZero((i, j, v) => {
                if (v < 0) {
                    const row = V[j];
                    for (var k = 0; k < row.length; k++) {
                        if (row[k] !== 0) {
                            rhoip2.set(i, k, rhoip2.get(i, k) + row[k]);
                        }
                    }
                }
                return v;
            });

            const tV = V.transpose();
            rhoip = tV.mmul(rhoip);
            rhoip = new SparseMatrix(rhoip, {threshold: smallValue});
            triuTimesAbs(rhoip, smallValue);
            rhoip2 = tV.mmul(rhoip2);
            rhoip2 = new SparseMatrix(rhoip2, {threshold: smallValue});
            triuTimesAbs(rhoip2, smallValue);

            rhoip2.forEachNonZero((i, j, v) => {
                var val = rhoip.get(i, j);
                val = Math.min(Math.abs(val), Math.abs(v));
                val *= val;

                sumI += val;
                var valFreq = diagB[i] - diagB[j];
                var insertIn = binarySearch(frequencies, valFreq, sortAsc);
                if (insertIn < 0) {
                    frequencies.splice(-1 - insertIn, 0, valFreq);
                    intensities.splice(-1 - insertIn, 0, val);
                } else {
                    intensities[insertIn] += val;
                }
            });
        }
        const numFreq = frequencies.length;
        //console.log("New Spin");
        if (numFreq > 0) {
            weight = weight / sumI;
            const diff = lineWidth / 32;
            let valFreq = frequencies[0];
            let inte = intensities[0];
            let count = 1;
            for (i = 1; i < numFreq; i++) {
                if (Math.abs(frequencies[i] - valFreq / count) < diff) {
                    inte += intensities[i];
                    valFreq += frequencies[i];
                    count++;
                } else {
                    addPeak(result, valFreq / count, inte * weight, from, to, nbPoints, gaussian);
                    valFreq = frequencies[i];
                    inte = intensities[i];
                    count = 1;
                }
            }
            addPeak(result, valFreq / count, inte * weight, from, to, nbPoints, gaussian);
        }
    }
    if(output==="xy")
        return {x:_getX(options.from, options.to, nbPoints),y:result};
    if(output == "y")
        return result;
}

function addPeak(result, freq, height, from, to, nbPoints, gaussian) {
    //console.log(freq, height)
    const center = (nbPoints * (-freq-from) / (to - from)) | 0;
    const lnPoints = gaussian.length;
    var index = 0;
    var indexLorentz = 0;
    for (var i = center - lnPoints / 2; i < center + lnPoints / 2; i++) {
        index = i | 0;
        if (i >= 0 && i < nbPoints) {
            result[index] = result[index] + gaussian[indexLorentz] * height;
        }
        indexLorentz++;
    }
}

function triuTimesAbs(A, val) {
    A.forEachNonZero((i, j, v) => {
        if (i > j) return 0;
        if (Math.abs(v) <= val) return 0;
        return v;
    });
}

function getHamiltonian(chemicalShifts, couplingConstants, multiplicity, conMatrix, cluster) {
    let hamSize = 1;
    for (var i = 0; i < cluster.length; i++) {
        hamSize *= multiplicity[cluster[i]];
    }

    if(DEBUG) console.log("Hamiltonian size: "+hamSize);

    const clusterHam = new SparseMatrix(hamSize, hamSize);

    for (var pos = 0; pos < cluster.length; pos++) {
        var n = cluster[pos];

        const L = getPauli(multiplicity[n]);

        let A1, B1;
        let temp = 1;
        for (let i = 0; i < pos; i++) {
            temp *= multiplicity[cluster[i]];
        }
        A1 = SparseMatrix.eye(temp);

        temp = 1;
        for (let i = pos + 1; i < cluster.length; i++) {
            temp *= multiplicity[cluster[i]];
        }
        B1 = SparseMatrix.eye(temp);

        const alpha = chemicalShifts[n];
        const kronProd = A1.kroneckerProduct(L.z).kroneckerProduct(B1);
        clusterHam.add(kronProd.mul(alpha));

        for (var pos2 = 0; pos2 < cluster.length; pos2++) {
            const k = cluster[pos2];
            if (conMatrix[n][k] === 1) {
                const S = getPauli(multiplicity[k]);

                let A2, B2;
                let temp = 1;
                for (let i = 0; i < pos2; i++) {
                    temp *= multiplicity[cluster[i]];
                }
                A2 = SparseMatrix.eye(temp);

                temp = 1;
                for (let i = pos2 + 1; i < cluster.length; i++) {
                    temp *= multiplicity[cluster[i]];
                }
                B2 = SparseMatrix.eye(temp);

                const kron1 = A1.kroneckerProduct(L.x).kroneckerProduct(B1).mmul(A2.kroneckerProduct(S.x).kroneckerProduct(B2));
                kron1.add(A1.kroneckerProduct(L.y).kroneckerProduct(B1).mul(-1).mmul(A2.kroneckerProduct(S.y).kroneckerProduct(B2)));
                kron1.add(A1.kroneckerProduct(L.z).kroneckerProduct(B1).mmul(A2.kroneckerProduct(S.z).kroneckerProduct(B2)));

                clusterHam.add(kron1.mul(couplingConstants[n][k] / 2));
            }
        }
    }

    return clusterHam;
}

function _getX(from, to, nbPoints){
    const x = new Array(nbPoints);
    const dx = (to-from)/(nbPoints-1);
    for (var i = 0 ; i < nbPoints; i++) {
        x[i]=from+i*dx;
    }
    return x;
}

module.exports = simulate1d;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Stat = __webpack_require__(10).array;
/**
 * Function that returns an array of points given 1D array as follows:
 *
 * [x1, y1, .. , x2, y2, ..]
 *
 * And receive the number of dimensions of each point.
 * @param array
 * @param dimensions
 * @returns {Array} - Array of points.
 */
function coordArrayToPoints(array, dimensions) {
    if(array.length % dimensions !== 0) {
        throw new RangeError('Dimensions number must be accordance with the size of the array.');
    }

    var length = array.length / dimensions;
    var pointsArr = new Array(length);

    var k = 0;
    for(var i = 0; i < array.length; i += dimensions) {
        var point = new Array(dimensions);
        for(var j = 0; j < dimensions; ++j) {
            point[j] = array[i + j];
        }

        pointsArr[k] = point;
        k++;
    }

    return pointsArr;
}


/**
 * Function that given an array as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * Returns an array as follows:
 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
 *
 * And receives the number of dimensions of each coordinate.
 * @param array
 * @param dimensions
 * @returns {Array} - Matrix of coordinates
 */
function coordArrayToCoordMatrix(array, dimensions) {
    if(array.length % dimensions !== 0) {
        throw new RangeError('Dimensions number must be accordance with the size of the array.');
    }

    var coordinatesArray = new Array(dimensions);
    var points = array.length / dimensions;
    for (var i = 0; i < coordinatesArray.length; i++) {
        coordinatesArray[i] = new Array(points);
    }

    for(i = 0; i < array.length; i += dimensions) {
        for(var j = 0; j < dimensions; ++j) {
            var currentPoint = Math.floor(i / dimensions);
            coordinatesArray[j][currentPoint] = array[i + j];
        }
    }

    return coordinatesArray;
}

/**
 * Function that receives a coordinate matrix as follows:
 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
 *
 * Returns an array of coordinates as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * @param coordMatrix
 * @returns {Array}
 */
function coordMatrixToCoordArray(coordMatrix) {
    var coodinatesArray = new Array(coordMatrix.length * coordMatrix[0].length);
    var k = 0;
    for(var i = 0; i < coordMatrix[0].length; ++i) {
        for(var j = 0; j < coordMatrix.length; ++j) {
            coodinatesArray[k] = coordMatrix[j][i];
            ++k;
        }
    }

    return coodinatesArray;
}

/**
 * Tranpose a matrix, this method is for coordMatrixToPoints and
 * pointsToCoordMatrix, that because only transposing the matrix
 * you can change your representation.
 *
 * @param matrix
 * @returns {Array}
 */
function transpose(matrix) {
    var resultMatrix = new Array(matrix[0].length);
    for(var i = 0; i < resultMatrix.length; ++i) {
        resultMatrix[i] = new Array(matrix.length);
    }

    for (i = 0; i < matrix.length; ++i) {
        for(var j = 0; j < matrix[0].length; ++j) {
            resultMatrix[j][i] = matrix[i][j];
        }
    }

    return resultMatrix;
}

/**
 * Function that transform an array of points into a coordinates array
 * as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * @param points
 * @returns {Array}
 */
function pointsToCoordArray(points) {
    var coodinatesArray = new Array(points.length * points[0].length);
    var k = 0;
    for(var i = 0; i < points.length; ++i) {
        for(var j = 0; j < points[0].length; ++j) {
            coodinatesArray[k] = points[i][j];
            ++k;
        }
    }

    return coodinatesArray;
}

/**
 * Apply the dot product between the smaller vector and a subsets of the
 * largest one.
 *
 * @param firstVector
 * @param secondVector
 * @returns {Array} each dot product of size of the difference between the
 *                  larger and the smallest one.
 */
function applyDotProduct(firstVector, secondVector) {
    var largestVector, smallestVector;
    if(firstVector.length <= secondVector.length) {
        smallestVector = firstVector;
        largestVector = secondVector;
    } else {
        smallestVector = secondVector;
        largestVector = firstVector;
    }

    var difference = largestVector.length - smallestVector.length + 1;
    var dotProductApplied = new Array(difference);

    for (var i = 0; i < difference; ++i) {
        var sum = 0;
        for (var j = 0; j < smallestVector.length; ++j) {
            sum += smallestVector[j] * largestVector[i + j];
        }
        dotProductApplied[i] = sum;
    }

    return dotProductApplied;
}
/**
 * To scale the input array between the specified min and max values. The operation is performed inplace
 * if the options.inplace is specified. If only one of the min or max parameters is specified, then the scaling
 * will multiply the input array by min/min(input) or max/max(input)
 * @param input
 * @param options
 * @returns {*}
 */
function scale(input, options){
    var y;
    if(options.inPlace){
        y = input;
    }
    else{
        y = new Array(input.length);
    }
    const max = options.max;
    const min = options.min;
    if(typeof max === "number"){
        if(typeof min === "number"){
            var minMax = Stat.minMax(input);
            var factor = (max - min)/(minMax.max-minMax.min);
            for(var i=0;i< y.length;i++){
                y[i]=(input[i]-minMax.min)*factor+min;
            }
        }
        else{
            var currentMin = Stat.max(input);
            var factor = max/currentMin;
            for(var i=0;i< y.length;i++){
                y[i] = input[i]*factor;
            }
        }
    }
    else{
        if(typeof min === "number"){
            var currentMin = Stat.min(input);
            var factor = min/currentMin;
            for(var i=0;i< y.length;i++){
                y[i] = input[i]*factor;
            }
        }
    }
    return y;
}

module.exports = {
    coordArrayToPoints: coordArrayToPoints,
    coordArrayToCoordMatrix: coordArrayToCoordMatrix,
    coordMatrixToCoordArray: coordMatrixToCoordArray,
    coordMatrixToPoints: transpose,
    pointsToCoordArray: pointsToCoordArray,
    pointsToCoordMatrix: transpose,
    applyDotProduct: applyDotProduct,
    scale:scale
};



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * Function that returns a Number array of equally spaced numberOfPoints
 * containing a representation of intensities of the spectra arguments x
 * and y.
 *
 * The options parameter contains an object in the following form:
 * from: starting point
 * to: last point
 * numberOfPoints: number of points between from and to
 * variant: "slot" or "smooth" - smooth is the default option
 *
 * The slot variant consist that each point in the new array is calculated
 * averaging the existing points between the slot that belongs to the current
 * value. The smooth variant is the same but takes the integral of the range
 * of the slot and divide by the step size between two points in the new array.
 *
 * @param x - sorted increasing x values
 * @param y
 * @param options
 * @returns {Array} new array with the equally spaced data.
 *
 */
function getEquallySpacedData(x, y, options) {
    if (x.length>1 && x[0]>x[1]) {
        x=x.slice().reverse();
        y=y.slice().reverse();
    }

    var xLength = x.length;
    if(xLength !== y.length)
        throw new RangeError("the x and y vector doesn't have the same size.");

    if (options === undefined) options = {};

    var from = options.from === undefined ? x[0] : options.from
    if (isNaN(from) || !isFinite(from)) {
        throw new RangeError("'From' value must be a number");
    }
    var to = options.to === undefined ? x[x.length - 1] : options.to;
    if (isNaN(to) || !isFinite(to)) {
        throw new RangeError("'To' value must be a number");
    }

    var reverse = from > to;
    if(reverse) {
        var temp = from;
        from = to;
        to = temp;
    }

    var numberOfPoints = options.numberOfPoints === undefined ? 100 : options.numberOfPoints;
    if (isNaN(numberOfPoints) || !isFinite(numberOfPoints)) {
        throw new RangeError("'Number of points' value must be a number");
    }
    if(numberOfPoints < 1)
        throw new RangeError("the number of point must be higher than 1");

    var algorithm = options.variant === "slot" ? "slot" : "smooth"; // default value: smooth

    var output = algorithm === "slot" ? getEquallySpacedSlot(x, y, from, to, numberOfPoints) : getEquallySpacedSmooth(x, y, from, to, numberOfPoints);

    return reverse ? output.reverse() : output;
}

/**
 * function that retrieves the getEquallySpacedData with the variant "smooth"
 *
 * @param x
 * @param y
 * @param from - Initial point
 * @param to - Final point
 * @param numberOfPoints
 * @returns {Array} - Array of y's equally spaced with the variant "smooth"
 */
function getEquallySpacedSmooth(x, y, from, to, numberOfPoints) {
    var xLength = x.length;

    var step = (to - from) / (numberOfPoints - 1);
    var halfStep = step / 2;

    var start = from - halfStep;
    var output = new Array(numberOfPoints);

    var initialOriginalStep = x[1] - x[0];
    var lastOriginalStep = x[x.length - 1] - x[x.length - 2];

    // Init main variables
    var min = start;
    var max = start + step;

    var previousX = Number.MIN_VALUE;
    var previousY = 0;
    var nextX = x[0] - initialOriginalStep;
    var nextY = 0;

    var currentValue = 0;
    var slope = 0;
    var intercept = 0;
    var sumAtMin = 0;
    var sumAtMax = 0;

    var i = 0; // index of input
    var j = 0; // index of output

    function getSlope(x0, y0, x1, y1) {
        return (y1 - y0) / (x1 - x0);
    }

    main: while(true) {
        while (nextX - max >= 0) {
            // no overlap with original point, just consume current value
            var add = integral(0, max - previousX, slope, previousY);
            sumAtMax = currentValue + add;

            output[j] = (sumAtMax - sumAtMin) / step;
            j++;

            if (j === numberOfPoints)
                break main;

            min = max;
            max += step;
            sumAtMin = sumAtMax;
        }

        if(previousX <= min && min <= nextX) {
            add = integral(0, min - previousX, slope, previousY);
            sumAtMin = currentValue + add;
        }

        currentValue += integral(previousX, nextX, slope, intercept);

        previousX = nextX;
        previousY = nextY;

        if (i < xLength) {
            nextX = x[i];
            nextY = y[i];
            i++;
        } else if (i === xLength) {
            nextX += lastOriginalStep;
            nextY = 0;
        }
        // updating parameters
        slope = getSlope(previousX, previousY, nextX, nextY);
        intercept = -slope*previousX + previousY;
    }

    return output;
}

/**
 * function that retrieves the getEquallySpacedData with the variant "slot"
 *
 * @param x
 * @param y
 * @param from - Initial point
 * @param to - Final point
 * @param numberOfPoints
 * @returns {Array} - Array of y's equally spaced with the variant "slot"
 */
function getEquallySpacedSlot(x, y, from, to, numberOfPoints) {
    var xLength = x.length;

    var step = (to - from) / (numberOfPoints - 1);
    var halfStep = step / 2;
    var lastStep = x[x.length - 1] - x[x.length - 2];

    var start = from - halfStep;
    var output = new Array(numberOfPoints);

    // Init main variables
    var min = start;
    var max = start + step;

    var previousX = -Number.MAX_VALUE;
    var previousY = 0;
    var nextX = x[0];
    var nextY = y[0];
    var frontOutsideSpectra = 0;
    var backOutsideSpectra = true;

    var currentValue = 0;

    // for slot algorithm
    var currentPoints = 0;

    var i = 1; // index of input
    var j = 0; // index of output

    main: while(true) {
        if (previousX>=nextX) throw (new Error('x must be an increasing serie'));
        while (previousX - max > 0) {
            // no overlap with original point, just consume current value
            if(backOutsideSpectra) {
                currentPoints++;
                backOutsideSpectra = false;
            }

            output[j] = currentPoints <= 0 ? 0 : currentValue / currentPoints;
            j++;

            if (j === numberOfPoints)
                break main;

            min = max;
            max += step;
            currentValue = 0;
            currentPoints = 0;
        }

        if(previousX > min) {
            currentValue += previousY;
            currentPoints++;
        }

        if(previousX === -Number.MAX_VALUE || frontOutsideSpectra > 1)
            currentPoints--;

        previousX = nextX;
        previousY = nextY;

        if (i < xLength) {
            nextX = x[i];
            nextY = y[i];
            i++;
        } else {
            nextX += lastStep;
            nextY = 0;
            frontOutsideSpectra++;
        }
    }

    return output;
}
/**
 * Function that calculates the integral of the line between two
 * x-coordinates, given the slope and intercept of the line.
 *
 * @param x0
 * @param x1
 * @param slope
 * @param intercept
 * @returns {number} integral value.
 */
function integral(x0, x1, slope, intercept) {
    return (0.5 * slope * x1 * x1 + intercept * x1) - (0.5 * slope * x0 * x0 + intercept * x0);
}

exports.getEquallySpacedData = getEquallySpacedData;
exports.integral = integral;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = exports = __webpack_require__(14);
exports.getEquallySpacedData = __webpack_require__(15).getEquallySpacedData;
exports.SNV = __webpack_require__(17).SNV;
exports.binarySearch = __webpack_require__(18);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.SNV = SNV;
var Stat = __webpack_require__(10).array;

/**
 * Function that applies the standard normal variate (SNV) to an array of values.
 *
 * @param data - Array of values.
 * @returns {Array} - applied the SNV.
 */
function SNV(data) {
    var mean = Stat.mean(data);
    var std = Stat.standardDeviation(data);
    var result = data.slice();
    for (var i = 0; i < data.length; i++) {
        result[i] = (result[i] - mean) / std;
    }
    return result;
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Performs a binary search of value in array
 * @param {number[]} array - Array in which value will be searched. It must be sorted.
 * @param {number} value - Value to search in array
 * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
 */
function binarySearch(array, value, options) {
    options = options || {};
    var low = options.from || 0;
    var high = options.to || array.length - 1;

    while (low <= high) {
        var mid = (low + high) >>> 1;
        var midValue = array[mid];
        if (midValue < value) {
            low = mid + 1;
        } else if (midValue > value) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -(low + 1);
}

module.exports = binarySearch;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const newArray = __webpack_require__(3);

const primeFinder = __webpack_require__(20);
const nextPrime = primeFinder.nextPrime;
const largestPrime = primeFinder.largestPrime;

const FREE = 0;
const FULL = 1;
const REMOVED = 2;

const defaultInitialCapacity = 150;
const defaultMinLoadFactor = 1 / 6;
const defaultMaxLoadFactor = 2 / 3;

class HashTable {
    constructor(options = {}) {
        if (options instanceof HashTable) {
            this.table = options.table.slice();
            this.values = options.values.slice();
            this.state = options.state.slice();
            this.minLoadFactor = options.minLoadFactor;
            this.maxLoadFactor = options.maxLoadFactor;
            this.distinct = options.distinct;
            this.freeEntries = options.freeEntries;
            this.lowWaterMark = options.lowWaterMark;
            this.highWaterMark = options.maxLoadFactor;
            return;
        }

        const initialCapacity = options.initialCapacity === undefined ? defaultInitialCapacity : options.initialCapacity;
        if (initialCapacity < 0) {
            throw new RangeError(`initial capacity must not be less than zero: ${initialCapacity}`);
        }

        const minLoadFactor = options.minLoadFactor === undefined ? defaultMinLoadFactor : options.minLoadFactor;
        const maxLoadFactor = options.maxLoadFactor === undefined ? defaultMaxLoadFactor : options.maxLoadFactor;
        if (minLoadFactor < 0 || minLoadFactor >= 1) {
            throw new RangeError(`invalid minLoadFactor: ${minLoadFactor}`);
        }
        if (maxLoadFactor <= 0 || maxLoadFactor >= 1) {
            throw new RangeError(`invalid maxLoadFactor: ${maxLoadFactor}`);
        }
        if (minLoadFactor >= maxLoadFactor) {
            throw new RangeError(`minLoadFactor (${minLoadFactor}) must be smaller than maxLoadFactor (${maxLoadFactor})`);
        }

        let capacity = initialCapacity;
        // User wants to put at least capacity elements. We need to choose the size based on the maxLoadFactor to
        // avoid the need to rehash before this capacity is reached.
        // actualCapacity * maxLoadFactor >= capacity
        capacity = (capacity / maxLoadFactor) | 0;
        capacity = nextPrime(capacity);
        if (capacity === 0) capacity = 1;

        this.table = newArray(capacity, 0);
        this.values = newArray(capacity, 0);
        this.state = newArray(capacity, 0);

        this.minLoadFactor = minLoadFactor;
        if (capacity === largestPrime) {
            this.maxLoadFactor = 1;
        } else {
            this.maxLoadFactor = maxLoadFactor;
        }

        this.distinct = 0;
        this.freeEntries = capacity;

        this.lowWaterMark = 0;
        this.highWaterMark = chooseHighWaterMark(capacity, this.maxLoadFactor);
    }

    clone() {
        return new HashTable(this);
    }

    get size() {
        return this.distinct;
    }

    get(key) {
        const i = this.indexOfKey(key);
        if (i < 0) return 0;
        return this.values[i];
    }

    set(key, value) {
        let i = this.indexOfInsertion(key);
        if (i < 0) {
            i = -i - 1;
            this.values[i] = value;
            return false;
        }

        if (this.distinct > this.highWaterMark) {
            const newCapacity = chooseGrowCapacity(this.distinct + 1, this.minLoadFactor, this.maxLoadFactor);
            this.rehash(newCapacity);
            return this.set(key, value);
        }

        this.table[i] = key;
        this.values[i] = value;
        if (this.state[i] === FREE) this.freeEntries--;
        this.state[i] = FULL;
        this.distinct++;

        if (this.freeEntries < 1) {
            const newCapacity = chooseGrowCapacity(this.distinct + 1, this.minLoadFactor, this.maxLoadFactor);
            this.rehash(newCapacity);
        }

        return true;
    }
    
    remove(key, noRehash) {
        const i = this.indexOfKey(key);
        if (i < 0) return false;

        this.state[i] = REMOVED;
        this.distinct--;

        if (!noRehash) this.maybeShrinkCapacity();

        return true;
    }

    delete(key, noRehash) {
        const i = this.indexOfKey(key);
        if (i < 0) return false;

        this.state[i] = FREE;
        this.distinct--;

        if (!noRehash) this.maybeShrinkCapacity();

        return true;
    }

    maybeShrinkCapacity() {
        if (this.distinct < this.lowWaterMark) {
            const newCapacity = chooseShrinkCapacity(this.distinct, this.minLoadFactor, this.maxLoadFactor);
            this.rehash(newCapacity);
        }
    }

    containsKey(key) {
        return this.indexOfKey(key) >= 0;
    }

    indexOfKey(key) {
        const table = this.table;
        const state = this.state;
        const length = this.table.length;

        const hash = key & 0x7fffffff;
        let i = hash % length;
        let decrement = hash % (length - 2);
        if (decrement === 0) decrement = 1;

        while (state[i] !== FREE && (state[i] === REMOVED || table[i] !== key)) {
            i -= decrement;
            if (i < 0) i += length;
        }

        if (state[i] === FREE) return -1;
        return i;
    }

    containsValue(value) {
        return this.indexOfValue(value) >= 0;
    }

    indexOfValue(value) {
        const values = this.values;
        const state = this.state;

        for (var i = 0; i < state.length; i++) {
            if (state[i] === FULL && values[i] === value) {
                return i;
            }
        }

        return -1;
    }

    indexOfInsertion(key) {
        const table = this.table;
        const state = this.state;
        const length = table.length;


        const hash = key & 0x7fffffff;
        let i = hash % length;
        let decrement = hash % (length - 2);
        if (decrement === 0) decrement = 1;

        while (state[i] === FULL && table[i] !== key) {
            i -= decrement;
            if (i < 0) i += length;
        }

        if (state[i] === REMOVED) {
            const j = i;
            while (state[i] !== FREE && (state[i] === REMOVED || table[i] !== key)) {
                i -= decrement;
                if (i < 0) i += length;
            }
            if (state[i] === FREE) i = j;
        }

        if (state[i] === FULL) {
            return -i - 1;
        }

        return i;
    }

    ensureCapacity(minCapacity) {
        if (this.table.length < minCapacity) {
            const newCapacity = nextPrime(minCapacity);
            this.rehash(newCapacity);
        }
    }

    rehash(newCapacity) {
        const oldCapacity = this.table.length;

        if (newCapacity <= this.distinct) throw new Error('Unexpected');

        const oldTable = this.table;
        const oldValues = this.values;
        const oldState = this.state;

        const newTable = newArray(newCapacity, 0);
        const newValues = newArray(newCapacity, 0);
        const newState = newArray(newCapacity, 0);

        this.lowWaterMark = chooseLowWaterMark(newCapacity, this.minLoadFactor);
        this.highWaterMark = chooseHighWaterMark(newCapacity, this.maxLoadFactor);

        this.table = newTable;
        this.values = newValues;
        this.state = newState;
        this.freeEntries = newCapacity - this.distinct;

        for (var i = 0; i < oldCapacity; i++) {
            if (oldState[i] === FULL) {
                var element = oldTable[i];
                var index = this.indexOfInsertion(element);
                newTable[index] = element;
                newValues[index] = oldValues[i];
                newState[index] = FULL;
            }
        }
    }

    forEachKey(callback) {
        for (var i = 0; i < this.state.length; i++) {
            if (this.state[i] === FULL) {
                if (!callback(this.table[i])) return false;
            }
        }
        return true;
    }

    forEachValue(callback) {
        for (var i = 0; i < this.state.length; i++) {
            if (this.state[i] === FULL) {
                if (!callback(this.values[i])) return false;
            }
        }
        return true;
    }

    forEachPair(callback) {
        for (var i = 0; i < this.state.length; i++) {
            if (this.state[i] === FULL) {
                if (!callback(this.table[i], this.values[i])) return false;
            }
        }
        return true;
    }
}

module.exports = HashTable;

function chooseLowWaterMark(capacity, minLoad) {
    return (capacity * minLoad) | 0;
}

function chooseHighWaterMark(capacity, maxLoad) {
    return Math.min(capacity - 2, (capacity * maxLoad) | 0);
}

function chooseGrowCapacity(size, minLoad, maxLoad) {
    return nextPrime(Math.max(size + 1, (4 * size / (3 * minLoad + maxLoad)) | 0));
}

function chooseShrinkCapacity(size, minLoad, maxLoad) {
    return nextPrime(Math.max(size + 1, (4 * size / (minLoad + 3 * maxLoad)) | 0));
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const binarySearch = __webpack_require__(4);
const sortAsc = __webpack_require__(11).asc;

const largestPrime = 0x7fffffff;

const primeNumbers = [
    //chunk #0
    largestPrime, // 2^31-1

    //chunk #1
    5, 11, 23, 47, 97, 197, 397, 797, 1597, 3203, 6421, 12853, 25717, 51437, 102877, 205759,
    411527, 823117, 1646237, 3292489, 6584983, 13169977, 26339969, 52679969, 105359939,
    210719881, 421439783, 842879579, 1685759167,

    //chunk #2
    433, 877, 1759, 3527, 7057, 14143, 28289, 56591, 113189, 226379, 452759, 905551, 1811107,
    3622219, 7244441, 14488931, 28977863, 57955739, 115911563, 231823147, 463646329, 927292699,
    1854585413,

    //chunk #3
    953, 1907, 3821, 7643, 15287, 30577, 61169, 122347, 244703, 489407, 978821, 1957651, 3915341,
    7830701, 15661423, 31322867, 62645741, 125291483, 250582987, 501165979, 1002331963,
    2004663929,

    //chunk #4
    1039, 2081, 4177, 8363, 16729, 33461, 66923, 133853, 267713, 535481, 1070981, 2141977, 4283963,
    8567929, 17135863, 34271747, 68543509, 137087021, 274174111, 548348231, 1096696463,

    //chunk #5
    31, 67, 137, 277, 557, 1117, 2237, 4481, 8963, 17929, 35863, 71741, 143483, 286973, 573953,
    1147921, 2295859, 4591721, 9183457, 18366923, 36733847, 73467739, 146935499, 293871013,
    587742049, 1175484103,

    //chunk #6
    599, 1201, 2411, 4831, 9677, 19373, 38747, 77509, 155027, 310081, 620171, 1240361, 2480729,
    4961459, 9922933, 19845871, 39691759, 79383533, 158767069, 317534141, 635068283, 1270136683,

    //chunk #7
    311, 631, 1277, 2557, 5119, 10243, 20507, 41017, 82037, 164089, 328213, 656429, 1312867,
    2625761, 5251529, 10503061, 21006137, 42012281, 84024581, 168049163, 336098327, 672196673,
    1344393353,

    //chunk #8
    3, 7, 17, 37, 79, 163, 331, 673, 1361, 2729, 5471, 10949, 21911, 43853, 87719, 175447, 350899,
    701819, 1403641, 2807303, 5614657, 11229331, 22458671, 44917381, 89834777, 179669557,
    359339171, 718678369, 1437356741,

    //chunk #9
    43, 89, 179, 359, 719, 1439, 2879, 5779, 11579, 23159, 46327, 92657, 185323, 370661, 741337,
    1482707, 2965421, 5930887, 11861791, 23723597, 47447201, 94894427, 189788857, 379577741,
    759155483, 1518310967,

    //chunk #10
    379, 761, 1523, 3049, 6101, 12203, 24407, 48817, 97649, 195311, 390647, 781301, 1562611,
    3125257, 6250537, 12501169, 25002389, 50004791, 100009607, 200019221, 400038451, 800076929,
    1600153859,

    //chunk #11
    13, 29, 59, 127, 257, 521, 1049, 2099, 4201, 8419, 16843, 33703, 67409, 134837, 269683,
    539389, 1078787, 2157587, 4315183, 8630387, 17260781, 34521589, 69043189, 138086407,
    276172823, 552345671, 1104691373,

    //chunk #12
    19, 41, 83, 167, 337, 677,
    1361, 2729, 5471, 10949, 21911, 43853, 87719, 175447, 350899,
    701819, 1403641, 2807303, 5614657, 11229331, 22458671, 44917381, 89834777, 179669557,
    359339171, 718678369, 1437356741,

    //chunk #13
    53, 107, 223, 449, 907, 1823, 3659, 7321, 14653, 29311, 58631, 117269,
    234539, 469099, 938207, 1876417, 3752839, 7505681, 15011389, 30022781,
    60045577, 120091177, 240182359, 480364727, 960729461, 1921458943
];

primeNumbers.sort(sortAsc);

function nextPrime(value) {
    let index = binarySearch(primeNumbers, value, sortAsc);
    if (index < 0) {
        index = ~index;
    }
    return primeNumbers[index];
}

exports.nextPrime = nextPrime;
exports.largestPrime = largestPrime;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var euclidean = __webpack_require__(5);
var ClusterLeaf = __webpack_require__(6);
var Cluster = __webpack_require__(1);

/**
 * @param cluster1
 * @param cluster2
 * @param disFun
 * @returns {number}
 */
function simpleLink(cluster1, cluster2, disFun) {
    var m = 10e100;
    for (var i = 0; i < cluster1.length; i++)
        for (var j = 0; j < cluster2.length; j++) {
            var d = disFun[cluster1[i]][ cluster2[j]];
            m = Math.min(d,m);
        }
    return m;
}

/**
 * @param cluster1
 * @param cluster2
 * @param disFun
 * @returns {number}
 */
function completeLink(cluster1, cluster2, disFun) {
    var m = -1;
    for (var i = 0; i < cluster1.length; i++)
        for (var j = 0; j < cluster2.length; j++) {
            var d = disFun[cluster1[i]][ cluster2[j]];
            m = Math.max(d,m);
        }
    return m;
}

/**
 * @param cluster1
 * @param cluster2
 * @param disFun
 * @returns {number}
 */
function averageLink(cluster1, cluster2, disFun) {
    var m = 0;
    for (var i = 0; i < cluster1.length; i++)
        for (var j = 0; j < cluster2.length; j++)
            m += disFun[cluster1[i]][ cluster2[j]];
    return m / (cluster1.length * cluster2.length);
}

/**
 * @param cluster1
 * @param cluster2
 * @param disFun
 * @returns {*}
 */
function centroidLink(cluster1, cluster2, disFun) {
    var m = -1;
    var dist = new Array(cluster1.length*cluster2.length);
    for (var i = 0; i < cluster1.length; i++)
        for (var j = 0; j < cluster2.length; j++) {
            dist[i*cluster1.length+j]=(disFun[cluster1[i]][ cluster2[j]]);
        }
    return median(dist);
}

/**
 * @param cluster1
 * @param cluster2
 * @param disFun
 * @returns {number}
 */
function wardLink(cluster1, cluster2, disFun) {
    return centroidLink(cluster1, cluster2, disFun)
        *cluster1.length*cluster2.length / (cluster1.length+cluster2.length);
}

function compareNumbers(a, b) {
    return a - b;
}

function median(values, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var half = Math.floor(l / 2);
    if (l % 2 === 0) {
        return (values[half - 1] + values[half]) * 0.5;
    } else {
        return values[half];
    }
}

var defaultOptions = {
    disFunc: euclidean,
    kind: 'single',
    isDistanceMatrix:false

};

/**
 * Continuously merge nodes that have the least dissimilarity
 * @param {Array <Array <number>>} distance - Array of points to be clustered
 * @param {json} options
 * @option isDistanceMatrix: Is the input a distance matrix?
 * @constructor
 */
function agnes(data, options) {
    options = Object.assign({}, defaultOptions, options);
    var len = data.length;

    var distance = data;//If source
    if(!options.isDistanceMatrix) {
        distance = new Array(len);
        for(var i = 0;i < len; i++) {
            distance[i] = new Array(len);
            for (var j = 0; j < len; j++) {
                distance[i][j] = options.disFunc(data[i],data[j]);
            }
        }
    }


    // allows to use a string or a given function
    if (typeof options.kind === "string") {
        switch (options.kind) {
            case 'single':
                options.kind = simpleLink;
                break;
            case 'complete':
                options.kind = completeLink;
                break;
            case 'average':
                options.kind = averageLink;
                break;
            case 'centroid':
                options.kind = centroidLink;
                break;
            case 'ward':
                options.kind = wardLink;
                break;
            default:
                throw new RangeError('Unknown kind of similarity');
        }
    }
    else if (typeof options.kind !== "function")
        throw new TypeError('Undefined kind of similarity');

    var list = new Array(len);
    for (var i = 0; i < distance.length; i++)
        list[i] = new ClusterLeaf(i);
    var min  = 10e5,
        d = {},
        dis = 0;

    while (list.length > 1) {
        // calculates the minimum distance
        d = {};
        min = 10e5;
        for (var j = 0; j < list.length; j++){
            for (var k = j + 1; k < list.length; k++) {
                var fdistance, sdistance;
                if (list[j] instanceof ClusterLeaf)
                    fdistance = [list[j].index];
                else {
                    fdistance = new Array(list[j].index.length);
                    for (var e = 0; e < fdistance.length; e++)
                        fdistance[e] = list[j].index[e].index;
                }
                if (list[k] instanceof ClusterLeaf)
                    sdistance = [list[k].index];
                else {
                    sdistance = new Array(list[k].index.length);
                    for (var f = 0; f < sdistance.length; f++)
                        sdistance[f] = list[k].index[f].index;
                }
                dis = options.kind(fdistance, sdistance, distance).toFixed(4);
                if (dis in d) {
                    d[dis].push([list[j], list[k]]);
                }
                else {
                    d[dis] = [[list[j], list[k]]];
                }
                min = Math.min(dis, min);
            }
        }
        // cluster dots
        var dmin = d[min.toFixed(4)];
        var clustered = new Array(dmin.length);
        var aux,
            count = 0;
        while (dmin.length > 0) {
            aux = dmin.shift();
            for (var q = 0; q < dmin.length; q++) {
                var int = dmin[q].filter(function(n) {
                    //noinspection JSReferencingMutableVariableFromClosure
                    return aux.indexOf(n) !== -1
                });
                if (int.length > 0) {
                    var diff = dmin[q].filter(function(n) {
                        //noinspection JSReferencingMutableVariableFromClosure
                        return aux.indexOf(n) === -1
                    });
                    aux = aux.concat(diff);
                    dmin.splice(q-- ,1);
                }
            }
            clustered[count++] = aux;
        }
        clustered.length = count;

        for (var ii = 0; ii < clustered.length; ii++) {
            var obj = new Cluster();
            obj.children = clustered[ii].concat();
            obj.distance = min;
            obj.index = new Array(len);
            var indCount = 0;
            for (var jj = 0; jj < clustered[ii].length; jj++) {
                if (clustered[ii][jj] instanceof ClusterLeaf)
                    obj.index[indCount++] = clustered[ii][jj];
                else {
                    indCount += clustered[ii][jj].index.length;
                    obj.index = clustered[ii][jj].index.concat(obj.index);
                }
                list.splice((list.indexOf(clustered[ii][jj])), 1);
            }
            obj.index.length = indCount;
            list.push(obj);
        }
    }
    return list[0];
}

module.exports = agnes;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var euclidean = __webpack_require__(5);
var ClusterLeaf = __webpack_require__(6);
var Cluster = __webpack_require__(1);

/**
 * @param {Array <Array <number>>} cluster1
 * @param {Array <Array <number>>} cluster2
 * @param {function} disFun
 * @returns {number}
 */
function simpleLink(cluster1, cluster2, disFun) {
    var m = 10e100;
    for (var i = 0; i < cluster1.length; i++)
        for (var j = i; j < cluster2.length; j++) {
            var d = disFun(cluster1[i], cluster2[j]);
            m = Math.min(d,m);
        }
    return m;
}

/**
 * @param {Array <Array <number>>} cluster1
 * @param {Array <Array <number>>} cluster2
 * @param {function} disFun
 * @returns {number}
 */
function completeLink(cluster1, cluster2, disFun) {
    var m = -1;
    for (var i = 0; i < cluster1.length; i++)
        for (var j = i; j < cluster2.length; j++) {
            var d = disFun(cluster1[i], cluster2[j]);
            m = Math.max(d,m);
        }
    return m;
}

/**
 * @param {Array <Array <number>>} cluster1
 * @param {Array <Array <number>>} cluster2
 * @param {function} disFun
 * @returns {number}
 */
function averageLink(cluster1, cluster2, disFun) {
    var m = 0;
    for (var i = 0; i < cluster1.length; i++)
        for (var j = 0; j < cluster2.length; j++)
            m += disFun(cluster1[i], cluster2[j]);
    return m / (cluster1.length * cluster2.length);
}

/**
 * @param {Array <Array <number>>} cluster1
 * @param {Array <Array <number>>} cluster2
 * @param {function} disFun
 * @returns {number}
 */
function centroidLink(cluster1, cluster2, disFun) {
    var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0;
    for (var i = 0; i < cluster1.length; i++) {
        x1 += cluster1[i][0];
        y1 += cluster1[i][1];
    }
    for (var j = 0; j < cluster2.length; j++) {
        x2 += cluster2[j][0];
        y2 += cluster2[j][1];
    }
    x1 /= cluster1.length;
    y1 /= cluster1.length;
    x2 /= cluster2.length;
    y2 /= cluster2.length;
    return disFun([x1,y1], [x2,y2]);
}

/**
 * @param {Array <Array <number>>} cluster1
 * @param {Array <Array <number>>} cluster2
 * @param {function} disFun
 * @returns {number}
 */
function wardLink(cluster1, cluster2, disFun) {
    var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0;
    for (var i = 0; i < cluster1.length; i++) {
        x1 += cluster1[i][0];
        y1 += cluster1[i][1];
    }
    for (var j = 0; j < cluster2.length; j++) {
        x2 += cluster2[j][0];
        y2 += cluster2[j][1];
    }
    x1 /= cluster1.length;
    y1 /= cluster1.length;
    x2 /= cluster2.length;
    y2 /= cluster2.length;
    return disFun([x1,y1], [x2,y2])*cluster1.length*cluster2.length / (cluster1.length+cluster2.length);
}

/**
 * Returns the most distant point and his distance
 * @param {Array <Array <number>>} splitting - Clusters to split
 * @param {Array <Array <number>>} data - Original data
 * @param {function} disFun - Distance function
 * @returns {{d: number, p: number}} - d: maximum difference between points, p: the point more distant
 */
function diff(splitting, data, disFun) {
    var ans = {
        d:0,
        p:0
    };

    var Ci = new Array(splitting[0].length);
    for (var e = 0; e < splitting[0].length; e++)
        Ci[e] = data[splitting[0][e]];
    var Cj = new Array(splitting[1].length);
    for (var f = 0; f < splitting[1].length; f++)
        Cj[f] = data[splitting[1][f]];

    var dist, ndist;
    for (var i = 0; i < Ci.length; i++) {
        dist = 0;
        for (var j = 0; j < Ci.length; j++)
            if (i !== j)
                dist += disFun(Ci[i], Ci[j]);
        dist /= (Ci.length - 1);
        ndist = 0;
        for (var k = 0; k < Cj.length; k++)
            ndist += disFun(Ci[i], Cj[k]);
        ndist /= Cj.length;
        if ((dist - ndist) > ans.d) {
            ans.d = (dist - ndist);
            ans.p = i;
        }
    }
    return ans;
}

var defaultOptions = {
    dist: euclidean,
    kind: 'single'
};

/**
 * Intra-cluster distance
 * @param {Array} index
 * @param {Array} data
 * @param {function} disFun
 * @returns {number}
 */
function intrDist(index, data, disFun) {
    var dist = 0,
        count = 0;
    for (var i = 0; i < index.length; i++)
        for (var j = i; j < index.length; j++) {
            dist += disFun(data[index[i].index], data[index[j].index]);
            count++
        }
    return dist / count;
}

/**
 * Splits the higher level clusters
 * @param {Array <Array <number>>} data - Array of points to be clustered
 * @param {json} options
 * @constructor
 */
function diana(data, options) {
    options = options || {};
    for (var o in defaultOptions)
        if (!(options.hasOwnProperty(o)))
            options[o] = defaultOptions[o];
    if (typeof options.kind === "string") {
        switch (options.kind) {
            case 'single':
                options.kind = simpleLink;
                break;
            case 'complete':
                options.kind = completeLink;
                break;
            case 'average':
                options.kind = averageLink;
                break;
            case 'centroid':
                options.kind = centroidLink;
                break;
            case 'ward':
                options.kind = wardLink;
                break;
            default:
                throw new RangeError('Unknown kind of similarity');
        }
    }
    else if (typeof options.kind !== "function")
        throw new TypeError('Undefined kind of similarity');
    var tree = new Cluster();
    tree.children = new Array(data.length);
    tree.index = new Array(data.length);
    for (var ind = 0; ind < data.length; ind++) {
        tree.children[ind] = new ClusterLeaf(ind);
        tree.index[ind] = new ClusterLeaf(ind);
    }

    tree.distance = intrDist(tree.index, data, options.dist);
    var m, M, clId,
        dist, rebel;
    var list = [tree];
    while (list.length > 0) {
        M = 0;
        clId = 0;
        for (var i = 0; i < list.length; i++) {
            m = 0;
            for (var j = 0; j < list[i].length; j++) {
                for (var l = (j + 1); l < list[i].length; l++) {
                    m = Math.max(options.dist(data[list[i].index[j].index], data[list[i].index[l].index]), m);
                }
            }
            if (m > M) {
                M = m;
                clId = i;
            }
        }
        M = 0;
        if (list[clId].index.length === 2) {
            list[clId].children = [list[clId].index[0], list[clId].index[1]];
            list[clId].distance = options.dist(data[list[clId].index[0].index], data[list[clId].index[1].index]);
        }
        else if (list[clId].index.length === 3) {
            list[clId].children = [list[clId].index[0], list[clId].index[1], list[clId].index[2]];
            var d = [
                options.dist(data[list[clId].index[0].index], data[list[clId].index[1].index]),
                options.dist(data[list[clId].index[1].index], data[list[clId].index[2].index])
            ];
            list[clId].distance = (d[0] + d[1]) / 2;
        }
        else {
            var C = new Cluster();
            var sG = new Cluster();
            var splitting = [new Array(list[clId].index.length), []];
            for (var spl = 0; spl < splitting[0].length; spl++)
                splitting[0][spl] = spl;
            for (var ii = 0; ii < splitting[0].length; ii++) {
                dist = 0;
                for (var jj = 0; jj < splitting[0].length; jj++)
                    if (ii !== jj)
                        dist += options.dist(data[list[clId].index[splitting[0][jj]].index], data[list[clId].index[splitting[0][ii]].index]);
                dist /= (splitting[0].length - 1);
                if (dist > M) {
                    M = dist;
                    rebel = ii;
                }
            }
            splitting[1] = [rebel];
            splitting[0].splice(rebel, 1);
            dist = diff(splitting, data, options.dist);
            while (dist.d > 0) {
                splitting[1].push(splitting[0][dist.p]);
                splitting[0].splice(dist.p, 1);
                dist = diff(splitting, data, options.dist);
            }
            var fData = new Array(splitting[0].length);
            C.index = new Array(splitting[0].length);
            for (var e = 0; e < fData.length; e++) {
                fData[e] = data[list[clId].index[splitting[0][e]].index];
                C.index[e] = list[clId].index[splitting[0][e]];
                C.children[e] = list[clId].index[splitting[0][e]];
            }
            var sData = new Array(splitting[1].length);
            sG.index = new Array(splitting[1].length);
            for (var f = 0; f < sData.length; f++) {
                sData[f] = data[list[clId].index[splitting[1][f]].index];
                sG.index[f] = list[clId].index[splitting[1][f]];
                sG.children[f] = list[clId].index[splitting[1][f]];
            }
            C.distance = intrDist(C.index, data, options.dist);
            sG.distance = intrDist(sG.index, data, options.dist);
            list.push(C);
            list.push(sG);
            list[clId].children = [C, sG];
        }
        list.splice(clId, 1);
    }
    return tree;
}

module.exports = diana;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports.agnes = __webpack_require__(21);
exports.diana = __webpack_require__(22);
//exports.birch = require('./birch');
//exports.cure = require('./cure');
//exports.chameleon = require('./chameleon');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(0);

// https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
function CholeskyDecomposition(value) {
    if (!(this instanceof CholeskyDecomposition)) {
        return new CholeskyDecomposition(value);
    }
    value = Matrix.checkMatrix(value);
    if (!value.isSymmetric())
        throw new Error('Matrix is not symmetric');

    var a = value,
        dimension = a.rows,
        l = new Matrix(dimension, dimension),
        positiveDefinite = true,
        i, j, k;

    for (j = 0; j < dimension; j++) {
        var Lrowj = l[j];
        var d = 0;
        for (k = 0; k < j; k++) {
            var Lrowk = l[k];
            var s = 0;
            for (i = 0; i < k; i++) {
                s += Lrowk[i] * Lrowj[i];
            }
            Lrowj[k] = s = (a[j][k] - s) / l[k][k];
            d = d + s * s;
        }

        d = a[j][j] - d;

        positiveDefinite &= (d > 0);
        l[j][j] = Math.sqrt(Math.max(d, 0));
        for (k = j + 1; k < dimension; k++) {
            l[j][k] = 0;
        }
    }

    if (!positiveDefinite) {
        throw new Error('Matrix is not positive definite');
    }

    this.L = l;
}

CholeskyDecomposition.prototype = {
    get lowerTriangularMatrix() {
        return this.L;
    },
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var l = this.L,
            dimension = l.rows;

        if (value.rows !== dimension) {
            throw new Error('Matrix dimensions do not match');
        }

        var count = value.columns,
            B = value.clone(),
            i, j, k;

        for (k = 0; k < dimension; k++) {
            for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                    B[k][j] -= B[i][j] * l[k][i];
                }
                B[k][j] /= l[k][k];
            }
        }

        for (k = dimension - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                    B[k][j] -= B[i][j] * l[i][k];
                }
                B[k][j] /= l[k][k];
            }
        }

        return B;
    }
};

module.exports = CholeskyDecomposition;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(0);
const util = __webpack_require__(2);
const hypotenuse = util.hypotenuse;
const getFilled2DArray = util.getFilled2DArray;

const defaultOptions = {
    assumeSymmetric: false
};

// https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
function EigenvalueDecomposition(matrix, options) {
    options = Object.assign({}, defaultOptions, options);
    if (!(this instanceof EigenvalueDecomposition)) {
        return new EigenvalueDecomposition(matrix, options);
    }
    matrix = Matrix.checkMatrix(matrix);
    if (!matrix.isSquare()) {
        throw new Error('Matrix is not a square matrix');
    }

    var n = matrix.columns,
        V = getFilled2DArray(n, n, 0),
        d = new Array(n),
        e = new Array(n),
        value = matrix,
        i, j;

    var isSymmetric = false;
    if (options.assumeSymmetric) {
        isSymmetric = true;
    } else {
        isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                V[i][j] = value.get(i, j);
            }
        }
        tred2(n, e, d, V);
        tql2(n, e, d, V);
    }
    else {
        var H = getFilled2DArray(n, n, 0),
            ort = new Array(n);
        for (j = 0; j < n; j++) {
            for (i = 0; i < n; i++) {
                H[i][j] = value.get(i, j);
            }
        }
        orthes(n, H, ort, V);
        hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
}

EigenvalueDecomposition.prototype = {
    get realEigenvalues() {
        return this.d;
    },
    get imaginaryEigenvalues() {
        return this.e;
    },
    get eigenvectorMatrix() {
        if (!Matrix.isMatrix(this.V)) {
            this.V = new Matrix(this.V);
        }
        return this.V;
    },
    get diagonalMatrix() {
        var n = this.n,
            e = this.e,
            d = this.d,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                X[i][j] = 0;
            }
            X[i][i] = d[i];
            if (e[i] > 0) {
                X[i][i + 1] = e[i];
            }
            else if (e[i] < 0) {
                X[i][i - 1] = e[i];
            }
        }
        return X;
    }
};

function tred2(n, e, d, V) {

    var f, g, h, i, j, k,
        hh, scale;

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
    }

    for (i = n - 1; i > 0; i--) {
        scale = 0;
        h = 0;
        for (k = 0; k < i; k++) {
            scale = scale + Math.abs(d[k]);
        }

        if (scale === 0) {
            e[i] = d[i - 1];
            for (j = 0; j < i; j++) {
                d[j] = V[i - 1][j];
                V[i][j] = 0;
                V[j][i] = 0;
            }
        } else {
            for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
            }

            f = d[i - 1];
            g = Math.sqrt(h);
            if (f > 0) {
                g = -g;
            }

            e[i] = scale * g;
            h = h - f * g;
            d[i - 1] = f - g;
            for (j = 0; j < i; j++) {
                e[j] = 0;
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                V[j][i] = f;
                g = e[j] + V[j][j] * f;
                for (k = j + 1; k <= i - 1; k++) {
                    g += V[k][j] * d[k];
                    e[k] += V[k][j] * f;
                }
                e[j] = g;
            }

            f = 0;
            for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
            }

            hh = f / (h + h);
            for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];
                for (k = j; k <= i - 1; k++) {
                    V[k][j] -= (f * e[k] + g * d[k]);
                }
                d[j] = V[i - 1][j];
                V[i][j] = 0;
            }
        }
        d[i] = h;
    }

    for (i = 0; i < n - 1; i++) {
        V[n - 1][i] = V[i][i];
        V[i][i] = 1;
        h = d[i + 1];
        if (h !== 0) {
            for (k = 0; k <= i; k++) {
                d[k] = V[k][i + 1] / h;
            }

            for (j = 0; j <= i; j++) {
                g = 0;
                for (k = 0; k <= i; k++) {
                    g += V[k][i + 1] * V[k][j];
                }
                for (k = 0; k <= i; k++) {
                    V[k][j] -= g * d[k];
                }
            }
        }

        for (k = 0; k <= i; k++) {
            V[k][i + 1] = 0;
        }
    }

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
        V[n - 1][j] = 0;
    }

    V[n - 1][n - 1] = 1;
    e[0] = 0;
}

function tql2(n, e, d, V) {

    var g, h, i, j, k, l, m, p, r,
        dl1, c, c2, c3, el1, s, s2,
        iter;

    for (i = 1; i < n; i++) {
        e[i - 1] = e[i];
    }

    e[n - 1] = 0;

    var f = 0,
        tst1 = 0,
        eps = Math.pow(2, -52);

    for (l = 0; l < n; l++) {
        tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
        m = l;
        while (m < n) {
            if (Math.abs(e[m]) <= eps * tst1) {
                break;
            }
            m++;
        }

        if (m > l) {
            iter = 0;
            do {
                iter = iter + 1;

                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = hypotenuse(p, 1);
                if (p < 0) {
                    r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];
                for (i = l + 2; i < n; i++) {
                    d[i] -= h;
                }

                f = f + h;

                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;
                for (i = m - 1; i >= l; i--) {
                    c3 = c2;
                    c2 = c;
                    s2 = s;
                    g = c * e[i];
                    h = c * p;
                    r = hypotenuse(p, e[i]);
                    e[i + 1] = s * r;
                    s = e[i] / r;
                    c = p / r;
                    p = c * d[i] - s * g;
                    d[i + 1] = h + s * (c * g + s * d[i]);

                    for (k = 0; k < n; k++) {
                        h = V[k][i + 1];
                        V[k][i + 1] = s * V[k][i] + c * h;
                        V[k][i] = c * V[k][i] - s * h;
                    }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;

            }
            while (Math.abs(e[l]) > eps * tst1);
        }
        d[l] = d[l] + f;
        e[l] = 0;
    }

    for (i = 0; i < n - 1; i++) {
        k = i;
        p = d[i];
        for (j = i + 1; j < n; j++) {
            if (d[j] < p) {
                k = j;
                p = d[j];
            }
        }

        if (k !== i) {
            d[k] = d[i];
            d[i] = p;
            for (j = 0; j < n; j++) {
                p = V[j][i];
                V[j][i] = V[j][k];
                V[j][k] = p;
            }
        }
    }
}

function orthes(n, H, ort, V) {

    var low = 0,
        high = n - 1,
        f, g, h, i, j, m,
        scale;

    for (m = low + 1; m <= high - 1; m++) {
        scale = 0;
        for (i = m; i <= high; i++) {
            scale = scale + Math.abs(H[i][m - 1]);
        }

        if (scale !== 0) {
            h = 0;
            for (i = high; i >= m; i--) {
                ort[i] = H[i][m - 1] / scale;
                h += ort[i] * ort[i];
            }

            g = Math.sqrt(h);
            if (ort[m] > 0) {
                g = -g;
            }

            h = h - ort[m] * g;
            ort[m] = ort[m] - g;

            for (j = m; j < n; j++) {
                f = 0;
                for (i = high; i >= m; i--) {
                    f += ort[i] * H[i][j];
                }

                f = f / h;
                for (i = m; i <= high; i++) {
                    H[i][j] -= f * ort[i];
                }
            }

            for (i = 0; i <= high; i++) {
                f = 0;
                for (j = high; j >= m; j--) {
                    f += ort[j] * H[i][j];
                }

                f = f / h;
                for (j = m; j <= high; j++) {
                    H[i][j] -= f * ort[j];
                }
            }

            ort[m] = scale * ort[m];
            H[m][m - 1] = scale * g;
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            V[i][j] = (i === j ? 1 : 0);
        }
    }

    for (m = high - 1; m >= low + 1; m--) {
        if (H[m][m - 1] !== 0) {
            for (i = m + 1; i <= high; i++) {
                ort[i] = H[i][m - 1];
            }

            for (j = m; j <= high; j++) {
                g = 0;
                for (i = m; i <= high; i++) {
                    g += ort[i] * V[i][j];
                }

                g = (g / ort[m]) / H[m][m - 1];
                for (i = m; i <= high; i++) {
                    V[i][j] += g * ort[i];
                }
            }
        }
    }
}

function hqr2(nn, e, d, V, H) {
    var n = nn - 1,
        low = 0,
        high = nn - 1,
        eps = Math.pow(2, -52),
        exshift = 0,
        norm = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        z = 0,
        iter = 0,
        i, j, k, l, m, t, w, x, y,
        ra, sa, vr, vi,
        notlast, cdivres;

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            d[i] = H[i][i];
            e[i] = 0;
        }

        for (j = Math.max(i - 1, 0); j < nn; j++) {
            norm = norm + Math.abs(H[i][j]);
        }
    }

    while (n >= low) {
        l = n;
        while (l > low) {
            s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);
            if (s === 0) {
                s = norm;
            }
            if (Math.abs(H[l][l - 1]) < eps * s) {
                break;
            }
            l--;
        }

        if (l === n) {
            H[n][n] = H[n][n] + exshift;
            d[n] = H[n][n];
            e[n] = 0;
            n--;
            iter = 0;
        } else if (l === n - 1) {
            w = H[n][n - 1] * H[n - 1][n];
            p = (H[n - 1][n - 1] - H[n][n]) / 2;
            q = p * p + w;
            z = Math.sqrt(Math.abs(q));
            H[n][n] = H[n][n] + exshift;
            H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
            x = H[n][n];

            if (q >= 0) {
                z = (p >= 0) ? (p + z) : (p - z);
                d[n - 1] = x + z;
                d[n] = d[n - 1];
                if (z !== 0) {
                    d[n] = x - w / z;
                }
                e[n - 1] = 0;
                e[n] = 0;
                x = H[n][n - 1];
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                    z = H[n - 1][j];
                    H[n - 1][j] = q * z + p * H[n][j];
                    H[n][j] = q * H[n][j] - p * z;
                }

                for (i = 0; i <= n; i++) {
                    z = H[i][n - 1];
                    H[i][n - 1] = q * z + p * H[i][n];
                    H[i][n] = q * H[i][n] - p * z;
                }

                for (i = low; i <= high; i++) {
                    z = V[i][n - 1];
                    V[i][n - 1] = q * z + p * V[i][n];
                    V[i][n] = q * V[i][n] - p * z;
                }
            } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
            }

            n = n - 2;
            iter = 0;
        } else {
            x = H[n][n];
            y = 0;
            w = 0;
            if (l < n) {
                y = H[n - 1][n - 1];
                w = H[n][n - 1] * H[n - 1][n];
            }

            if (iter === 10) {
                exshift += x;
                for (i = low; i <= n; i++) {
                    H[i][i] -= x;
                }
                s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
            }

            if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;
                if (s > 0) {
                    s = Math.sqrt(s);
                    if (y < x) {
                        s = -s;
                    }
                    s = x - w / ((y - x) / 2 + s);
                    for (i = low; i <= n; i++) {
                        H[i][i] -= s;
                    }
                    exshift += s;
                    x = y = w = 0.964;
                }
            }

            iter = iter + 1;

            m = n - 2;
            while (m >= l) {
                z = H[m][m];
                r = x - z;
                s = y - z;
                p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
                q = H[m + 1][m + 1] - z - r - s;
                r = H[m + 2][m + 1];
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;
                if (m === l) {
                    break;
                }
                if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
                    break;
                }
                m--;
            }

            for (i = m + 2; i <= n; i++) {
                H[i][i - 2] = 0;
                if (i > m + 2) {
                    H[i][i - 3] = 0;
                }
            }

            for (k = m; k <= n - 1; k++) {
                notlast = (k !== n - 1);
                if (k !== m) {
                    p = H[k][k - 1];
                    q = H[k + 1][k - 1];
                    r = (notlast ? H[k + 2][k - 1] : 0);
                    x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    if (x !== 0) {
                        p = p / x;
                        q = q / x;
                        r = r / x;
                    }
                }

                if (x === 0) {
                    break;
                }

                s = Math.sqrt(p * p + q * q + r * r);
                if (p < 0) {
                    s = -s;
                }

                if (s !== 0) {
                    if (k !== m) {
                        H[k][k - 1] = -s * x;
                    } else if (l !== m) {
                        H[k][k - 1] = -H[k][k - 1];
                    }

                    p = p + s;
                    x = p / s;
                    y = q / s;
                    z = r / s;
                    q = q / p;
                    r = r / p;

                    for (j = k; j < nn; j++) {
                        p = H[k][j] + q * H[k + 1][j];
                        if (notlast) {
                            p = p + r * H[k + 2][j];
                            H[k + 2][j] = H[k + 2][j] - p * z;
                        }

                        H[k][j] = H[k][j] - p * x;
                        H[k + 1][j] = H[k + 1][j] - p * y;
                    }

                    for (i = 0; i <= Math.min(n, k + 3); i++) {
                        p = x * H[i][k] + y * H[i][k + 1];
                        if (notlast) {
                            p = p + z * H[i][k + 2];
                            H[i][k + 2] = H[i][k + 2] - p * r;
                        }

                        H[i][k] = H[i][k] - p;
                        H[i][k + 1] = H[i][k + 1] - p * q;
                    }

                    for (i = low; i <= high; i++) {
                        p = x * V[i][k] + y * V[i][k + 1];
                        if (notlast) {
                            p = p + z * V[i][k + 2];
                            V[i][k + 2] = V[i][k + 2] - p * r;
                        }

                        V[i][k] = V[i][k] - p;
                        V[i][k + 1] = V[i][k + 1] - p * q;
                    }
                }
            }
        }
    }

    if (norm === 0) {
        return;
    }

    for (n = nn - 1; n >= 0; n--) {
        p = d[n];
        q = e[n];

        if (q === 0) {
            l = n;
            H[n][n] = 1;
            for (i = n - 1; i >= 0; i--) {
                w = H[i][i] - p;
                r = 0;
                for (j = l; j <= n; j++) {
                    r = r + H[i][j] * H[j][n];
                }

                if (e[i] < 0) {
                    z = w;
                    s = r;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        H[i][n] = (w !== 0) ? (-r / w) : (-r / (eps * norm));
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                        t = (x * s - z * r) / q;
                        H[i][n] = t;
                        H[i + 1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                    }

                    t = Math.abs(H[i][n]);
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        } else if (q < 0) {
            l = n - 1;

            if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
                H[n - 1][n - 1] = q / H[n][n - 1];
                H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
            } else {
                cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
                H[n - 1][n - 1] = cdivres[0];
                H[n - 1][n] = cdivres[1];
            }

            H[n][n - 1] = 0;
            H[n][n] = 1;
            for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;
                for (j = l; j <= n; j++) {
                    ra = ra + H[i][j] * H[j][n - 1];
                    sa = sa + H[i][j] * H[j][n];
                }

                w = H[i][i] - p;

                if (e[i] < 0) {
                    z = w;
                    r = ra;
                    s = sa;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        cdivres = cdiv(-ra, -sa, w, q);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                        vi = (d[i] - p) * 2 * q;
                        if (vr === 0 && vi === 0) {
                            vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                        }
                        cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                        if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                            H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
                            H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
                        } else {
                            cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
                            H[i + 1][n - 1] = cdivres[0];
                            H[i + 1][n] = cdivres[1];
                        }
                    }

                    t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n - 1] = H[j][n - 1] / t;
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            for (j = i; j < nn; j++) {
                V[i][j] = H[i][j];
            }
        }
    }

    for (j = nn - 1; j >= low; j--) {
        for (i = low; i <= high; i++) {
            z = 0;
            for (k = low; k <= Math.min(j, high); k++) {
                z = z + V[i][k] * H[k][j];
            }
            V[i][j] = z;
        }
    }
}

function cdiv(xr, xi, yr, yi) {
    var r, d;
    if (Math.abs(yr) > Math.abs(yi)) {
        r = yi / yr;
        d = yr + r * yi;
        return [(xr + r * xi) / d, (xi - r * xr) / d];
    }
    else {
        r = yr / yi;
        d = yi + r * yr;
        return [(r * xr + xi) / d, (r * xi - xr) / d];
    }
}

module.exports = EigenvalueDecomposition;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(0);

// https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
function LuDecomposition(matrix) {
    if (!(this instanceof LuDecomposition)) {
        return new LuDecomposition(matrix);
    }
    matrix = Matrix.checkMatrix(matrix);

    var lu = matrix.clone(),
        rows = lu.rows,
        columns = lu.columns,
        pivotVector = new Array(rows),
        pivotSign = 1,
        i, j, k, p, s, t, v,
        LUrowi, LUcolj, kmax;

    for (i = 0; i < rows; i++) {
        pivotVector[i] = i;
    }

    LUcolj = new Array(rows);

    for (j = 0; j < columns; j++) {

        for (i = 0; i < rows; i++) {
            LUcolj[i] = lu[i][j];
        }

        for (i = 0; i < rows; i++) {
            LUrowi = lu[i];
            kmax = Math.min(i, j);
            s = 0;
            for (k = 0; k < kmax; k++) {
                s += LUrowi[k] * LUcolj[k];
            }
            LUrowi[j] = LUcolj[i] -= s;
        }

        p = j;
        for (i = j + 1; i < rows; i++) {
            if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                p = i;
            }
        }

        if (p !== j) {
            for (k = 0; k < columns; k++) {
                t = lu[p][k];
                lu[p][k] = lu[j][k];
                lu[j][k] = t;
            }

            v = pivotVector[p];
            pivotVector[p] = pivotVector[j];
            pivotVector[j] = v;

            pivotSign = -pivotSign;
        }

        if (j < rows && lu[j][j] !== 0) {
            for (i = j + 1; i < rows; i++) {
                lu[i][j] /= lu[j][j];
            }
        }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
}

LuDecomposition.prototype = {
    isSingular: function () {
        var data = this.LU,
            col = data.columns;
        for (var j = 0; j < col; j++) {
            if (data[j][j] === 0) {
                return true;
            }
        }
        return false;
    },
    get determinant() {
        var data = this.LU;
        if (!data.isSquare())
            throw new Error('Matrix must be square');
        var determinant = this.pivotSign, col = data.columns;
        for (var j = 0; j < col; j++)
            determinant *= data[j][j];
        return determinant;
    },
    get lowerTriangularMatrix() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i > j) {
                    X[i][j] = data[i][j];
                } else if (i === j) {
                    X[i][j] = 1;
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get upperTriangularMatrix() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i <= j) {
                    X[i][j] = data[i][j];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get pivotPermutationVector() {
        return this.pivotVector.slice();
    },
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var lu = this.LU,
            rows = lu.rows;

        if (rows !== value.rows)
            throw new Error('Invalid matrix dimensions');
        if (this.isSingular())
            throw new Error('LU matrix is singular');

        var count = value.columns,
            X = value.subMatrixRow(this.pivotVector, 0, count - 1),
            columns = lu.columns,
            i, j, k;

        for (k = 0; k < columns; k++) {
            for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        for (k = columns - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= lu[k][k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        return X;
    }
};

module.exports = LuDecomposition;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(0);
var hypotenuse = __webpack_require__(2).hypotenuse;

//https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
function QrDecomposition(value) {
    if (!(this instanceof QrDecomposition)) {
        return new QrDecomposition(value);
    }
    value = Matrix.checkMatrix(value);

    var qr = value.clone(),
        m = value.rows,
        n = value.columns,
        rdiag = new Array(n),
        i, j, k, s;

    for (k = 0; k < n; k++) {
        var nrm = 0;
        for (i = k; i < m; i++) {
            nrm = hypotenuse(nrm, qr[i][k]);
        }
        if (nrm !== 0) {
            if (qr[k][k] < 0) {
                nrm = -nrm;
            }
            for (i = k; i < m; i++) {
                qr[i][k] /= nrm;
            }
            qr[k][k] += 1;
            for (j = k + 1; j < n; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * qr[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    qr[i][j] += s * qr[i][k];
                }
            }
        }
        rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
}

QrDecomposition.prototype = {
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var qr = this.QR,
            m = qr.rows;

        if (value.rows !== m)
            throw new Error('Matrix row dimensions must agree');
        if (!this.isFullRank())
            throw new Error('Matrix is rank deficient');

        var count = value.columns,
            X = value.clone(),
            n = qr.columns,
            i, j, k, s;

        for (k = 0; k < n; k++) {
            for (j = 0; j < count; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * X[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    X[i][j] += s * qr[i][k];
                }
            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= this.Rdiag[k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * qr[i][k];
                }
            }
        }

        return X.subMatrix(0, n - 1, 0, count - 1);
    },
    isFullRank: function () {
        var columns = this.QR.columns;
        for (var i = 0; i < columns; i++) {
            if (this.Rdiag[i] === 0) {
                return false;
            }
        }
        return true;
    },
    get upperTriangularMatrix() {
        var qr = this.QR,
            n = qr.columns,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i < j) {
                    X[i][j] = qr[i][j];
                } else if (i === j) {
                    X[i][j] = this.Rdiag[i];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get orthogonalMatrix() {
        var qr = this.QR,
            rows = qr.rows,
            columns = qr.columns,
            X = new Matrix(rows, columns),
            i, j, k, s;

        for (k = columns - 1; k >= 0; k--) {
            for (i = 0; i < rows; i++) {
                X[i][k] = 0;
            }
            X[k][k] = 1;
            for (j = k; j < columns; j++) {
                if (qr[k][k] !== 0) {
                    s = 0;
                    for (i = k; i < rows; i++) {
                        s += qr[i][k] * X[i][j];
                    }

                    s = -s / qr[k][k];

                    for (i = k; i < rows; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
        }
        return X;
    }
};

module.exports = QrDecomposition;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(0);
var util = __webpack_require__(2);
var hypotenuse = util.hypotenuse;
var getFilled2DArray = util.getFilled2DArray;

// https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
function SingularValueDecomposition(value, options) {
    if (!(this instanceof SingularValueDecomposition)) {
        return new SingularValueDecomposition(value, options);
    }
    value = Matrix.checkMatrix(value);

    options = options || {};

    var m = value.rows,
        n = value.columns,
        nu = Math.min(m, n);

    var wantu = true, wantv = true;
    if (options.computeLeftSingularVectors === false)
        wantu = false;
    if (options.computeRightSingularVectors === false)
        wantv = false;
    var autoTranspose = options.autoTranspose === true;

    var swapped = false;
    var a;
    if (m < n) {
        if (!autoTranspose) {
            a = value.clone();
            console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
        } else {
            a = value.transpose();
            m = a.rows;
            n = a.columns;
            swapped = true;
            var aux = wantu;
            wantu = wantv;
            wantv = aux;
        }
    } else {
        a = value.clone();
    }

    var s = new Array(Math.min(m + 1, n)),
        U = getFilled2DArray(m, nu, 0),
        V = getFilled2DArray(n, n, 0),
        e = new Array(n),
        work = new Array(m);

    var nct = Math.min(m - 1, n);
    var nrt = Math.max(0, Math.min(n - 2, m));

    var i, j, k, p, t, ks, f, cs, sn, max, kase,
        scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

    for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
        if (k < nct) {
            s[k] = 0;
            for (i = k; i < m; i++) {
                s[k] = hypotenuse(s[k], a[i][k]);
            }
            if (s[k] !== 0) {
                if (a[k][k] < 0) {
                    s[k] = -s[k];
                }
                for (i = k; i < m; i++) {
                    a[i][k] /= s[k];
                }
                a[k][k] += 1;
            }
            s[k] = -s[k];
        }

        for (j = k + 1; j < n; j++) {
            if ((k < nct) && (s[k] !== 0)) {
                t = 0;
                for (i = k; i < m; i++) {
                    t += a[i][k] * a[i][j];
                }
                t = -t / a[k][k];
                for (i = k; i < m; i++) {
                    a[i][j] += t * a[i][k];
                }
            }
            e[j] = a[k][j];
        }

        if (wantu && (k < nct)) {
            for (i = k; i < m; i++) {
                U[i][k] = a[i][k];
            }
        }

        if (k < nrt) {
            e[k] = 0;
            for (i = k + 1; i < n; i++) {
                e[k] = hypotenuse(e[k], e[i]);
            }
            if (e[k] !== 0) {
                if (e[k + 1] < 0)
                    e[k] = -e[k];
                for (i = k + 1; i < n; i++) {
                    e[i] /= e[k];
                }
                e[k + 1] += 1;
            }
            e[k] = -e[k];
            if ((k + 1 < m) && (e[k] !== 0)) {
                for (i = k + 1; i < m; i++) {
                    work[i] = 0;
                }
                for (j = k + 1; j < n; j++) {
                    for (i = k + 1; i < m; i++) {
                        work[i] += e[j] * a[i][j];
                    }
                }
                for (j = k + 1; j < n; j++) {
                    t = -e[j] / e[k + 1];
                    for (i = k + 1; i < m; i++) {
                        a[i][j] += t * work[i];
                    }
                }
            }
            if (wantv) {
                for (i = k + 1; i < n; i++) {
                    V[i][k] = e[i];
                }
            }
        }
    }

    p = Math.min(n, m + 1);
    if (nct < n) {
        s[nct] = a[nct][nct];
    }
    if (m < p) {
        s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
        e[nrt] = a[nrt][p - 1];
    }
    e[p - 1] = 0;

    if (wantu) {
        for (j = nct; j < nu; j++) {
            for (i = 0; i < m; i++) {
                U[i][j] = 0;
            }
            U[j][j] = 1;
        }
        for (k = nct - 1; k >= 0; k--) {
            if (s[k] !== 0) {
                for (j = k + 1; j < nu; j++) {
                    t = 0;
                    for (i = k; i < m; i++) {
                        t += U[i][k] * U[i][j];
                    }
                    t = -t / U[k][k];
                    for (i = k; i < m; i++) {
                        U[i][j] += t * U[i][k];
                    }
                }
                for (i = k; i < m; i++) {
                    U[i][k] = -U[i][k];
                }
                U[k][k] = 1 + U[k][k];
                for (i = 0; i < k - 1; i++) {
                    U[i][k] = 0;
                }
            } else {
                for (i = 0; i < m; i++) {
                    U[i][k] = 0;
                }
                U[k][k] = 1;
            }
        }
    }

    if (wantv) {
        for (k = n - 1; k >= 0; k--) {
            if ((k < nrt) && (e[k] !== 0)) {
                for (j = k + 1; j < n; j++) {
                    t = 0;
                    for (i = k + 1; i < n; i++) {
                        t += V[i][k] * V[i][j];
                    }
                    t = -t / V[k + 1][k];
                    for (i = k + 1; i < n; i++) {
                        V[i][j] += t * V[i][k];
                    }
                }
            }
            for (i = 0; i < n; i++) {
                V[i][k] = 0;
            }
            V[k][k] = 1;
        }
    }

    var pp = p - 1,
        iter = 0,
        eps = Math.pow(2, -52);
    while (p > 0) {
        for (k = p - 2; k >= -1; k--) {
            if (k === -1) {
                break;
            }
            if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
                e[k] = 0;
                break;
            }
        }
        if (k === p - 2) {
            kase = 4;
        } else {
            for (ks = p - 1; ks >= k; ks--) {
                if (ks === k) {
                    break;
                }
                t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
                if (Math.abs(s[ks]) <= eps * t) {
                    s[ks] = 0;
                    break;
                }
            }
            if (ks === k) {
                kase = 3;
            } else if (ks === p - 1) {
                kase = 1;
            } else {
                kase = 2;
                k = ks;
            }
        }

        k++;

        switch (kase) {
            case 1: {
                f = e[p - 2];
                e[p - 2] = 0;
                for (j = p - 2; j >= k; j--) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    if (j !== k) {
                        f = -sn * e[j - 1];
                        e[j - 1] = cs * e[j - 1];
                    }
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][p - 1];
                            V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
                            V[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 2 : {
                f = e[k - 1];
                e[k - 1] = 0;
                for (j = k; j < p; j++) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    f = -sn * e[j];
                    e[j] = cs * e[j];
                    if (wantu) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][k - 1];
                            U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
                            U[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 3 : {
                scale = Math.max(Math.max(Math.max(Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2])), Math.abs(e[p - 2])), Math.abs(s[k])), Math.abs(e[k]));
                sp = s[p - 1] / scale;
                spm1 = s[p - 2] / scale;
                epm1 = e[p - 2] / scale;
                sk = s[k] / scale;
                ek = e[k] / scale;
                b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                c = (sp * epm1) * (sp * epm1);
                shift = 0;
                if ((b !== 0) || (c !== 0)) {
                    shift = Math.sqrt(b * b + c);
                    if (b < 0) {
                        shift = -shift;
                    }
                    shift = c / (b + shift);
                }
                f = (sk + sp) * (sk - sp) + shift;
                g = sk * ek;
                for (j = k; j < p - 1; j++) {
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    if (j !== k) {
                        e[j - 1] = t;
                    }
                    f = cs * s[j] + sn * e[j];
                    e[j] = cs * e[j] - sn * s[j];
                    g = sn * s[j + 1];
                    s[j + 1] = cs * s[j + 1];
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][j + 1];
                            V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
                            V[i][j] = t;
                        }
                    }
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    s[j] = t;
                    f = cs * e[j] + sn * s[j + 1];
                    s[j + 1] = -sn * e[j] + cs * s[j + 1];
                    g = sn * e[j + 1];
                    e[j + 1] = cs * e[j + 1];
                    if (wantu && (j < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][j + 1];
                            U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
                            U[i][j] = t;
                        }
                    }
                }
                e[p - 2] = f;
                iter = iter + 1;
                break;
            }
            case 4: {
                if (s[k] <= 0) {
                    s[k] = (s[k] < 0 ? -s[k] : 0);
                    if (wantv) {
                        for (i = 0; i <= pp; i++) {
                            V[i][k] = -V[i][k];
                        }
                    }
                }
                while (k < pp) {
                    if (s[k] >= s[k + 1]) {
                        break;
                    }
                    t = s[k];
                    s[k] = s[k + 1];
                    s[k + 1] = t;
                    if (wantv && (k < n - 1)) {
                        for (i = 0; i < n; i++) {
                            t = V[i][k + 1];
                            V[i][k + 1] = V[i][k];
                            V[i][k] = t;
                        }
                    }
                    if (wantu && (k < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = U[i][k + 1];
                            U[i][k + 1] = U[i][k];
                            U[i][k] = t;
                        }
                    }
                    k++;
                }
                iter = 0;
                p--;
                break;
            }
        }
    }

    if (swapped) {
        var tmp = V;
        V = U;
        U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
}

SingularValueDecomposition.prototype = {
    get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    },
    get norm2() {
        return this.s[0];
    },
    get rank() {
        var eps = Math.pow(2, -52),
            tol = Math.max(this.m, this.n) * this.s[0] * eps,
            r = 0,
            s = this.s;
        for (var i = 0, ii = s.length; i < ii; i++) {
            if (s[i] > tol) {
                r++;
            }
        }
        return r;
    },
    get diagonal() {
        return this.s;
    },
    // https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
    get threshold() {
        return (Math.pow(2, -52) / 2) * Math.max(this.m, this.n) * this.s[0];
    },
    get leftSingularVectors() {
        if (!Matrix.isMatrix(this.U)) {
            this.U = new Matrix(this.U);
        }
        return this.U;
    },
    get rightSingularVectors() {
        if (!Matrix.isMatrix(this.V)) {
            this.V = new Matrix(this.V);
        }
        return this.V;
    },
    get diagonalMatrix() {
        return Matrix.diag(this.s);
    },
    solve: function (value) {

        var Y = value,
            e = this.threshold,
            scols = this.s.length,
            Ls = Matrix.zeros(scols, scols),
            i;

        for (i = 0; i < scols; i++) {
            if (Math.abs(this.s[i]) <= e) {
                Ls[i][i] = 0;
            } else {
                Ls[i][i] = 1 / this.s[i];
            }
        }

        var U = this.U;
        var V = this.rightSingularVectors;

        var VL = V.mmul(Ls),
            vrows = V.rows,
            urows = U.length,
            VLU = Matrix.zeros(vrows, urows),
            j, k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < scols; k++) {
                    sum += VL[i][k] * U[j][k];
                }
                VLU[i][j] = sum;
            }
        }

        return VLU.mmul(Y);
    },
    solveForDiagonal: function (value) {
        return this.solve(Matrix.diag(value));
    },
    inverse: function () {
        var V = this.V;
        var e = this.threshold,
            vrows = V.length,
            vcols = V[0].length,
            X = new Matrix(vrows, this.s.length),
            i, j;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                    X[i][j] = V[i][j] / this.s[j];
                } else {
                    X[i][j] = 0;
                }
            }
        }

        var U = this.U;

        var urows = U.length,
            ucols = U[0].length,
            Y = new Matrix(vrows, urows),
            k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < ucols; k++) {
                    sum += X[i][k] * U[j][k];
                }
                Y[i][j] = sum;
            }
        }

        return Y;
    }
};

module.exports = SingularValueDecomposition;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(0);

var SingularValueDecomposition = __webpack_require__(28);
var EigenvalueDecomposition = __webpack_require__(25);
var LuDecomposition = __webpack_require__(26);
var QrDecomposition = __webpack_require__(27);
var CholeskyDecomposition = __webpack_require__(24);

function inverse(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    return solve(matrix, Matrix.eye(matrix.rows));
}

Matrix.inverse = Matrix.inv = inverse;
Matrix.prototype.inverse = Matrix.prototype.inv = function () {
    return inverse(this);
};

function solve(leftHandSide, rightHandSide) {
    leftHandSide = Matrix.checkMatrix(leftHandSide);
    rightHandSide = Matrix.checkMatrix(rightHandSide);
    return leftHandSide.isSquare() ? new LuDecomposition(leftHandSide).solve(rightHandSide) : new QrDecomposition(leftHandSide).solve(rightHandSide);
}

Matrix.solve = solve;
Matrix.prototype.solve = function (other) {
    return solve(this, other);
};

module.exports = {
    SingularValueDecomposition: SingularValueDecomposition,
    SVD: SingularValueDecomposition,
    EigenvalueDecomposition: EigenvalueDecomposition,
    EVD: EigenvalueDecomposition,
    LuDecomposition: LuDecomposition,
    LU: LuDecomposition,
    QrDecomposition: QrDecomposition,
    QR: QrDecomposition,
    CholeskyDecomposition: CholeskyDecomposition,
    CHO: CholeskyDecomposition,
    inverse: inverse,
    solve: solve
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by acastillo on 8/8/16.
 */


const defOptions = {
    threshold:0,
    out:"assignment"
};
//TODO Consider a matrix of distances too
module.exports = function fullClusterGenerator(conMat, opt) {
    const options = Object.assign({}, defOptions, opt);
    var clList, i, j, k;
    if(typeof conMat[0] === "number"){
        clList = fullClusterGeneratorVector(conMat);
    }
    else{
        if(typeof conMat[0] === "object"){
            var nRows = conMat.length;
            var conn = new Array(nRows*(nRows+1)/2);
            var index = 0;
            for(var i=0;i<nRows;i++){
                for(var j=i;j<nRows;j++){
                    if(conMat[i][j]>options.threshold)
                        conn[index++]= 1;
                    else
                        conn[index++]= 0;
                }
            }
            clList = fullClusterGeneratorVector(conn);
        }
    }
    if (options.out === "indexes" || options.out === "values") {
        var result = new Array(clList.length);
        for(i=0;i<clList.length;i++){
            result[i] = [];
            for(j=0;j<clList[i].length;j++){
                if(clList[i][j] != 0){
                    result[i].push(j);
                }
            }
        }
        if (options.out === "values") {
            var resultAsMatrix = new Array(result.length);
            for (i = 0; i<result.length;i++){
                resultAsMatrix[i]=new Array(result[i].length);
                for(j = 0; j < result[i].length; j++){
                    resultAsMatrix[i][j]=new Array(result[i].length);
                    for(k = 0; k < result[i].length; k++){
                        resultAsMatrix[i][j][k]=conMat[result[i][j]][result[i][k]];
                    }
                }
            }
            return resultAsMatrix;
        }
        else{
            return result;
        }
    }

    return clList;

}

function fullClusterGeneratorVector(conn){
    var nRows = Math.sqrt(conn.length*2+0.25)-0.5;
    var clusterList = [];
    var available = new Array(nRows);
    var remaining = nRows, i=0;
    var cluster = [];
    //Mark all the elements as available
    for(i=nRows-1;i>=0;i--){
        available[i]=1;
    }
    var nextAv=-1;
    var toInclude = [];
    while(remaining>0){
        if(toInclude.length===0){
            //If there is no more elements to include. Start a new cluster
            cluster = new Array(nRows);
            for(i = 0;i < nRows ;i++)
                cluster[i]=0;
            clusterList.push(cluster);
            for(nextAv = 0;available[nextAv]==0;nextAv++){};
        }
        else{
            nextAv=toInclude.splice(0,1);
        }
        cluster[nextAv]=1;
        available[nextAv]=0;
        remaining--;
        //Copy the next available row
        var row = new Array(nRows);
        for( i = 0;i < nRows;i++){
            var c=Math.max(nextAv,i);
            var r=Math.min(nextAv,i);
            //The element in the conn matrix
            //console.log("index: "+r*(2*nRows-r-1)/2+c)
            row[i]=conn[r*(2*nRows-r-1)/2+c];
            //There is new elements to include in this row?
            //Then, include it to the current cluster
            if(row[i]==1&&available[i]==1&&cluster[i]==0){
                toInclude.push(i);
                cluster[i]=1;
            }
        }
    }
    return clusterList;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayStat = __webpack_require__(9);

function compareNumbers(a, b) {
    return a - b;
}

exports.max = function max(matrix) {
    var max = -Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }
    return max;
};

exports.min = function min(matrix) {
    var min = Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
        }
    }
    return min;
};

exports.minMax = function minMax(matrix) {
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }
    return {
        min:min,
        max:max
    };
};

exports.entropy = function entropy(matrix, eps) {
    if (typeof (eps) === 'undefined') {
        eps = 0;
    }
    var sum = 0,
        l1 = matrix.length,
        l2 = matrix[0].length;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
        }
    }
    return -sum;
};

exports.mean = function mean(matrix, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theMean, N, i, j;

    if (dimension === -1) {
        theMean = [0];
        N = rows * cols;
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theMean[0] += matrix[i][j];
            }
        }
        theMean[0] /= N;
    } else if (dimension === 0) {
        theMean = new Array(cols);
        N = rows;
        for (j = 0; j < cols; j++) {
            theMean[j] = 0;
            for (i = 0; i < rows; i++) {
                theMean[j] += matrix[i][j];
            }
            theMean[j] /= N;
        }
    } else if (dimension === 1) {
        theMean = new Array(rows);
        N = cols;
        for (j = 0; j < rows; j++) {
            theMean[j] = 0;
            for (i = 0; i < cols; i++) {
                theMean[j] += matrix[j][i];
            }
            theMean[j] /= N;
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theMean;
};

exports.sum = function sum(matrix, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theSum, i, j;

    if (dimension === -1) {
        theSum = [0];
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theSum[0] += matrix[i][j];
            }
        }
    } else if (dimension === 0) {
        theSum = new Array(cols);
        for (j = 0; j < cols; j++) {
            theSum[j] = 0;
            for (i = 0; i < rows; i++) {
                theSum[j] += matrix[i][j];
            }
        }
    } else if (dimension === 1) {
        theSum = new Array(rows);
        for (j = 0; j < rows; j++) {
            theSum[j] = 0;
            for (i = 0; i < cols; i++) {
                theSum[j] += matrix[j][i];
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theSum;
};

exports.product = function product(matrix, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theProduct, i, j;

    if (dimension === -1) {
        theProduct = [1];
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theProduct[0] *= matrix[i][j];
            }
        }
    } else if (dimension === 0) {
        theProduct = new Array(cols);
        for (j = 0; j < cols; j++) {
            theProduct[j] = 1;
            for (i = 0; i < rows; i++) {
                theProduct[j] *= matrix[i][j];
            }
        }
    } else if (dimension === 1) {
        theProduct = new Array(rows);
        for (j = 0; j < rows; j++) {
            theProduct[j] = 1;
            for (i = 0; i < cols; i++) {
                theProduct[j] *= matrix[j][i];
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theProduct;
};

exports.standardDeviation = function standardDeviation(matrix, means, unbiased) {
    var vari = exports.variance(matrix, means, unbiased), l = vari.length;
    for (var i = 0; i < l; i++) {
        vari[i] = Math.sqrt(vari[i]);
    }
    return vari;
};

exports.variance = function variance(matrix, means, unbiased) {
    if (typeof (unbiased) === 'undefined') {
        unbiased = true;
    }
    means = means || exports.mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum1 = 0, sum2 = 0, x = 0;
        for (var i = 0; i < rows; i++) {
            x = matrix[i][j] - means[j];
            sum1 += x;
            sum2 += x * x;
        }
        if (unbiased) {
            vari[j] = (sum2 - ((sum1 * sum1) / rows)) / (rows - 1);
        } else {
            vari[j] = (sum2 - ((sum1 * sum1) / rows)) / rows;
        }
    }
    return vari;
};

exports.median = function median(matrix) {
    var rows = matrix.length, cols = matrix[0].length;
    var medians = new Array(cols);

    for (var i = 0; i < cols; i++) {
        var data = new Array(rows);
        for (var j = 0; j < rows; j++) {
            data[j] = matrix[j][i];
        }
        data.sort(compareNumbers);
        var N = data.length;
        if (N % 2 === 0) {
            medians[i] = (data[N / 2] + data[(N / 2) - 1]) * 0.5;
        } else {
            medians[i] = data[Math.floor(N / 2)];
        }
    }
    return medians;
};

exports.mode = function mode(matrix) {
    var rows = matrix.length,
        cols = matrix[0].length,
        modes = new Array(cols),
        i, j;
    for (i = 0; i < cols; i++) {
        var itemCount = new Array(rows);
        for (var k = 0; k < rows; k++) {
            itemCount[k] = 0;
        }
        var itemArray = new Array(rows);
        var count = 0;

        for (j = 0; j < rows; j++) {
            var index = itemArray.indexOf(matrix[j][i]);
            if (index >= 0) {
                itemCount[index]++;
            } else {
                itemArray[count] = matrix[j][i];
                itemCount[count] = 1;
                count++;
            }
        }

        var maxValue = 0, maxIndex = 0;
        for (j = 0; j < count; j++) {
            if (itemCount[j] > maxValue) {
                maxValue = itemCount[j];
                maxIndex = j;
            }
        }

        modes[i] = itemArray[maxIndex];
    }
    return modes;
};

exports.skewness = function skewness(matrix, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var means = exports.mean(matrix);
    var n = matrix.length, l = means.length;
    var skew = new Array(l);

    for (var j = 0; j < l; j++) {
        var s2 = 0, s3 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s3 += dev * dev * dev;
        }

        var m2 = s2 / n;
        var m3 = s3 / n;
        var g = m3 / Math.pow(m2, 3 / 2);

        if (unbiased) {
            var a = Math.sqrt(n * (n - 1));
            var b = n - 2;
            skew[j] = (a / b) * g;
        } else {
            skew[j] = g;
        }
    }
    return skew;
};

exports.kurtosis = function kurtosis(matrix, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var means = exports.mean(matrix);
    var n = matrix.length, m = matrix[0].length;
    var kurt = new Array(m);

    for (var j = 0; j < m; j++) {
        var s2 = 0, s4 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s4 += dev * dev * dev * dev;
        }
        var m2 = s2 / n;
        var m4 = s4 / n;

        if (unbiased) {
            var v = s2 / (n - 1);
            var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
            var b = s4 / (v * v);
            var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));
            kurt[j] = a * b - 3 * c;
        } else {
            kurt[j] = m4 / (m2 * m2) - 3;
        }
    }
    return kurt;
};

exports.standardError = function standardError(matrix) {
    var samples = matrix.length;
    var standardDeviations = exports.standardDeviation(matrix);
    var l = standardDeviations.length;
    var standardErrors = new Array(l);
    var sqrtN = Math.sqrt(samples);

    for (var i = 0; i < l; i++) {
        standardErrors[i] = standardDeviations[i] / sqrtN;
    }
    return standardErrors;
};

exports.covariance = function covariance(matrix, dimension) {
    return exports.scatter(matrix, undefined, dimension);
};

exports.scatter = function scatter(matrix, divisor, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    if (typeof (divisor) === 'undefined') {
        if (dimension === 0) {
            divisor = matrix.length - 1;
        } else if (dimension === 1) {
            divisor = matrix[0].length - 1;
        }
    }
    var means = exports.mean(matrix, dimension);
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov, i, j, s, k;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
};

exports.correlation = function correlation(matrix) {
    var means = exports.mean(matrix),
        standardDeviations = exports.standardDeviation(matrix, true, means),
        scores = exports.zScores(matrix, means, standardDeviations),
        rows = matrix.length,
        cols = matrix[0].length,
        i, j;

    var cor = new Array(cols);
    for (i = 0; i < cols; i++) {
        cor[i] = new Array(cols);
    }
    for (i = 0; i < cols; i++) {
        for (j = i; j < cols; j++) {
            var c = 0;
            for (var k = 0, l = scores.length; k < l; k++) {
                c += scores[k][j] * scores[k][i];
            }
            c /= rows - 1;
            cor[i][j] = c;
            cor[j][i] = c;
        }
    }
    return cor;
};

exports.zScores = function zScores(matrix, means, standardDeviations) {
    means = means || exports.mean(matrix);
    if (typeof (standardDeviations) === 'undefined') standardDeviations = exports.standardDeviation(matrix, true, means);
    return exports.standardize(exports.center(matrix, means, false), standardDeviations, true);
};

exports.center = function center(matrix, means, inPlace) {
    means = means || exports.mean(matrix);
    var result = matrix,
        l = matrix.length,
        i, j, jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var row = result[i];
        for (j = 0, jj = row.length; j < jj; j++) {
            row[j] = matrix[i][j] - means[j];
        }
    }
    return result;
};

exports.standardize = function standardize(matrix, standardDeviations, inPlace) {
    if (typeof (standardDeviations) === 'undefined') standardDeviations = exports.standardDeviation(matrix);
    var result = matrix,
        l = matrix.length,
        i, j, jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var resultRow = result[i];
        var sourceRow = matrix[i];
        for (j = 0, jj = resultRow.length; j < jj; j++) {
            if (standardDeviations[j] !== 0 && !isNaN(standardDeviations[j])) {
                resultRow[j] = sourceRow[j] / standardDeviations[j];
            }
        }
    }
    return result;
};

exports.weightedVariance = function weightedVariance(matrix, weights) {
    var means = exports.mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum = 0;
        var a = 0, b = 0;

        for (var i = 0; i < rows; i++) {
            var z = matrix[i][j] - means[j];
            var w = weights[i];

            sum += w * (z * z);
            b += w;
            a += w * w;
        }

        vari[j] = sum * (b / (b * b - a));
    }

    return vari;
};

exports.weightedMean = function weightedMean(matrix, weights, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length,
        means, i, ii, j, w, row;

    if (dimension === 0) {
        means = new Array(cols);
        for (i = 0; i < cols; i++) {
            means[i] = 0;
        }
        for (i = 0; i < rows; i++) {
            row = matrix[i];
            w = weights[i];
            for (j = 0; j < cols; j++) {
                means[j] += row[j] * w;
            }
        }
    } else if (dimension === 1) {
        means = new Array(rows);
        for (i = 0; i < rows; i++) {
            means[i] = 0;
        }
        for (j = 0; j < rows; j++) {
            row = matrix[j];
            w = weights[j];
            for (i = 0; i < cols; i++) {
                means[j] += row[i] * w;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    var weightSum = arrayStat.sum(weights);
    if (weightSum !== 0) {
        for (i = 0, ii = means.length; i < ii; i++) {
            means[i] /= weightSum;
        }
    }
    return means;
};

exports.weightedCovariance = function weightedCovariance(matrix, weights, means, dimension) {
    dimension = dimension || 0;
    means = means || exports.weightedMean(matrix, weights, dimension);
    var s1 = 0, s2 = 0;
    for (var i = 0, ii = weights.length; i < ii; i++) {
        s1 += weights[i];
        s2 += weights[i] * weights[i];
    }
    var factor = s1 / (s1 * s1 - s2);
    return exports.weightedScatter(matrix, weights, means, factor, dimension);
};

exports.weightedScatter = function weightedScatter(matrix, weights, means, factor, dimension) {
    dimension = dimension || 0;
    means = means || exports.weightedMean(matrix, weights, dimension);
    if (typeof (factor) === 'undefined') {
        factor = 1;
    }
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov, i, j, k, s;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Number.isNaN || function (x) {
	return x !== x;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 34 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(35);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(34);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37), __webpack_require__(33)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const SparseMatrix = __webpack_require__(8);

function createPauli(mult) {
    const spin = (mult - 1) / 2;
    const prjs = new Array(mult);
    const temp = new Array(mult);
    for (var i = 0; i < mult; i++) {
        prjs[i] = (mult - 1) - i - spin;
        temp[i] = Math.sqrt(spin * (spin + 1) - prjs[i] * (prjs[i] + 1));
    }
    const p = diag(temp, 1, mult, mult);
    for (i = 0; i < mult; i++) {
        temp[i] = Math.sqrt(spin * (spin + 1) - prjs[i] * (prjs[i] - 1));
    }
    const m = diag(temp, -1, mult, mult);
    const x = p.clone().add(m).mul(0.5);
    const y = m.clone().mul(-1).add(p).mul(-0.5);
    const z = diag(prjs, 0, mult, mult);
    return {x, y, z, m, p};
}

function diag(A, d, n, m) {
    const diag = new SparseMatrix(n, m, {initialCapacity: 20});
    for (var i = 0; i < A.length; i++) {
        if ((i - d) >= 0 && (i - d) < n && i < m) {
            diag.set(i - d, i, A[i]);
        }
    }
    return diag;
}

const pauli2 = createPauli(2);

function getPauli(mult) {
    if (mult === 2) return pauli2;
    else return createPauli(mult);
}

module.exports = getPauli;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.SpinSystem = __webpack_require__(12);
exports.simulate1D = __webpack_require__(13);


/***/ })
/******/ ]);
});