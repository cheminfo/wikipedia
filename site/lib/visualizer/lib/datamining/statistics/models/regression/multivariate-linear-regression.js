// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Models/Regression/Linear/MultivariateLinearRegression.cs
define(["./../../../math/decompositions","./../../../math/matrix"],function(DC,Matrix){
    
    function MultivariateLinearRegression(coefficients, intercepts, insertConstant) {
        if(typeof(insertConstant)==='undefined') insertConstant = false;
        
        if(coefficients instanceof Matrix) {
            this.coefficients = coefficients; // Matrix
            this.intercepts = intercepts; // Array
            this.insertConstant = insertConstant; // bool
        }
        else {
            this.coefficients = Matrix.zeros(coefficients, intercepts);
            this.intercepts = new Array(intercepts);
            for(var i = 0; i < intercepts; this.intercepts[i++] = 0);
            this.insertConstant = insertConstant;
        }
    }
    
    MultivariateLinearRegression.prototype = {
        get inputs() {
            return this.coefficients.rows;
        },
        get outputs() {
            return this.coefficients.columns;
        },
        regress : function(inputs, outputs) {
            if(inputs.rows !== outputs.rows)
                throw "Number of input and output samples does not match.";
            var cols = inputs.columns;
            var rows = inputs.rows;
            
            if(this.insertConstant) cols++;
            
            for (var c = 0, cc = this.coefficients.columns; c < cc; c++){
            
                var B = new Array(cols);
                for(var i = 0, ii = B.length; i < ii; B[i++]=0);
                var V = Matrix.zeros(cols, cols);

                for (var i = 0; i < cols; i++) {
                    for (var j = 0; j < cols; j++) {
                        for (var k = 0; k < rows; k++) {
                            if (this.insertConstant) {
                                var a = (i === cols - 1) ? 1 : inputs[k][i];
                                var b = (j === cols - 1) ? 1 : inputs[k][j];

                                V[i][j] += a * b;
                            }
                            else {
                                V[i][j] += inputs[k][i] * inputs[k][j];
                            }
                        }
                    }

                    for (var k = 0; k < rows; k++) {
                        if (this.insertConstant && (i === cols - 1)) {
                            B[i] += outputs[k][c];
                        }
                        else
                        {
                            B[i] += inputs[k][i] * outputs[k][c];
                        }
                    }
                }

                var coef = new DC.SingularValueDecomposition(V).solve(Matrix.columnVector(B)).to1DArray();

                if (this.insertConstant) {
                    this.intercepts[c] = coef[coef.length - 1];
                    for (var i = 0; i < cols - 1; i++)
                        this.coefficients[i][c] = coef[i];
                }
                else {
                    for (var i = 0; i < cols; i++)
                        this.coefficients[i][c] = coef[i];
                }
            }

            var error = 0, e;
            for (var i = 0, ii = outputs.rows; i < ii; i++) {
                var y = this.compute(inputs[i]);

                for (var c = 0, cc = y.length; c < cc; c++) {
                    e = outputs[i][c] - y[c];
                    error += e * e;
                }
            }

            return error;
        },
        coefficientOfDetermination : function(inputs, outputs, adjust) {
            if(typeof(adjust)==='undefined') adjust = false;
            
            var N = inputs.rows;
            var M = this.coefficients.columns;
            var P = this.coefficients.rows;
            var SSe = new Array(M);
            var SSt = new Array(M);
            var avg = new Array(M);
            var r2  = new Array(M);
            for(var i = 0; i < M; i++) {
                avg[i] = 0;
                SSe[i] = 0;
                SSt[i] = 0;
            }
            var d;
            
            for(var c = 0; c < M; c++) {
                for(var i = 0; i < N; i++) {
                    avg[c] += outputs[i][c];
                }
                avg[c] /= N;
            }
            
             for (var i = 0; i < N; i++) {
                var y = this.compute(inputs[i]);
                for (var c = 0; c < M; c++) {
                    d = outputs[i][c] - y[c];
                    SSe[c] += d * d;

                    d = outputs[i][c] - avg[c];
                    SSt[c] += d * d;
                }
            }

            for (var c = 0; c < M; c++)
                r2[c] = 1.0 - (SSe[c] / SSt[c]);

            if (adjust) {
                for (var c = 0; c < M; c++) {
                    if (r2[c] === 1)
                        continue;

                    if (N === P + 1) {
                        r2[c] = NaN;
                    }
                    else {
                        r2[c] = 1 - (1 - r2[c]) * ((N - 1) / (N - P - 1));
                    }
                }
            }

            return r2;
        },
        compute : function(input) {
            if(input instanceof Matrix)
                return computeMatrix(this,input);
            var N = input.length;
            var M = this.coefficients.columns;

            var result = new Array(M);
            for (var i = 0; i < M; i++) {
                result[i] = this.intercepts[i];

                for (var j = 0; j < N; j++)
                    result[i] += input[j] * this.coefficients[j][i];
            }

            return result;
        }
    };
    
    function computeMatrix(mlr,input) {
        var l = input.length;
        var output = new Array(l);
        for(var j = 0; j < l; j++)
            output[j] = mlr.compute(input[j]);
        return output;
    }
    
    return MultivariateLinearRegression;

});