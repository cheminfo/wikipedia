// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Analysis/PartialLeastSquaresAnalysis.cs
define(["./../matrix-tools","./../../math/matrix","./../../math/norm","./../../math/decompositions"], function(MTools, Matrix, Norm, DC){

    function PartialLeastSquaresAnalysis(inputs, outputs, method, algorithm) {
        if(typeof(method)==='undefined') method = "center";
        if(typeof(algorithm)==='undefined') algorithm = "nipals";
        if(!(inputs instanceof Matrix)) inputs = new Matrix(inputs);
        if(!(outputs instanceof Matrix)) outputs = new Matrix(outputs);
        
        if(inputs.rows !== outputs.rows)
            throw "The number of rows in the inputs matrix must match the number of rows in the outputs matrix.";
        
        this.analysisMethod = method;
        this._algorithm = algorithm;
        
        this.sourceX = inputs;
        this.sourceY = outputs;
        
        this.meanX = MTools.mean(inputs);
        this.meanY = MTools.mean(outputs);
        this.stdDevX = MTools.standardDeviation(inputs, this.meanX);
        this.stdDevY = MTools.standardDeviation(outputs, this.meanY);
        
        this.inputVariables = new PartialLeastSquaresVariables(this, true);
        this.outputVariables = new PartialLeastSquaresVariables(this, false);
        
        this.overwriteSourceMatrix = false;
    }
    
    PartialLeastSquaresAnalysis.prototype = {
        get source() {
            return this.sourceX;
        },
        get output() {
            return this.sourceY;
        },
        get predictors() {
            return this.inputVariables;
        },
        get dependents() {
            return this.outputVariables;
        },
        get weights() {
            return this._weights;
        },
        get factors() {
            return this.factorCollection;
        },
        get algorithm() {
            return this._algorithm;
        },
        get method() {
            return this.analysisMethod;
        },
        get importance() {
            return this.vip;
        },
        set overwrite(value) {
            if(typeof value === 'boolean')
                this.overwriteSourceMatrix = value;
        },
        compute : function(factors) {
        
            var maxFactors = Math.min(this.sourceX.rows-1,this.sourceX.columns);
            if(typeof(factors)==='undefined') factors = maxFactors;
            if(factors > maxFactors)
                throw "Argument factors out of range.";
            
            var inputs = adjust(this,this.sourceX,this.meanX,this.stdDevX,this.overwriteSourceMatrix);
            var outputs = adjust(this,this.sourceY,this.meanY,null,this.overwriteSourceMatrix);
            
            if(this.algorithm === "simpls")
                simpls(this, inputs, outputs, factors);
            else
                nipals(this, inputs, outputs, factors, 0);
            
            this.cumulativeProportionX = new Array(factors);
            this.cumulativeProportionY = new Array(factors);
            this.cumulativeProportionX[0] = this.componentProportionX[0];
            this.cumulativeProportionY[0] = this.componentProportionY[0];
            for (var i = 1; i < factors; i++) {
                this.cumulativeProportionX[i] = this.cumulativeProportionX[i - 1] + this.componentProportionX[i];
                this.cumulativeProportionY[i] = this.cumulativeProportionY[i - 1] + this.componentProportionY[i];
                console.log(this.cumulativeProportionX[i] + " " + this.cumulativeProportionY[i]);
            }

            this.vip = computeVariableImportanceInProjection(this, factors);

            var array = new Array(factors);
            for (var i = 0, ii = array.length; i < ii; i++)
                array[i] = new PartialLeastSquaresFactor(this, i);
            this.factorCollection = array;
        },
        transform : function(data, dimensions) {
            if(typeof(dimensions)==='undefined') dimensions = this.loadingsX.columns;
            if(!(data instanceof Matrix)) data = new Matrix(data);
            var rows = data.rows;
            var cols = data.columns;
            if(cols > this.loadingsX.rows) throw "The data matrix should have a number of columns less than or equal to the number of rows in the loadings matrix for the input variables.";
            
            var result = Matrix.zeros(rows, dimensions);
            var source = adjust(this, data, this.meanX, this.stdDevX, false);
            var loadingsX = this.loadingsX;
            
            for (var i = 0; i < rows; i++)
                for (var j = 0; j < dimensions; j++)
                    for (var k = 0; k < cols; k++)
                        result[i][j] += source[i][k] * loadingsX[k][j];

            return result;
        },
        transformOutput : function(outputs, dimensions) {
            if(typeof(dimensions)==='undefined') dimensions = this.loadingsY.columns;
            if(!(outputs instanceof Matrix)) outputs = new Matrix(outputs);
            var rows = outputs.rows;
            var cols = outputs.columns;
            if(cols > this.loadingsY.rows) throw "The data matrix should have a number of columns less than or equal to the number of rows in the loadings matrix for the input variables.";
            
            var result = Matrix.zeros(rows, dimensions);
            var source = adjust(this, outputs, this.meanY, this.stdDevY, false);
            var loadingsY = this.loadingsY;
            
            for (var i = 0; i < rows; i++)
                for (var j = 0; j < dimensions; j++)
                    for (var k = 0; k < cols; k++)
                        result[i][j] += source[i][k] * loadingsY[k][j];

            return result;
        },
        createRegression : function(factors) {
            if(typeof(factors)==='undefined') factors = this.factorCollection.length;
            if(factors > this.factorCollection.length)
                throw "The number of factors should be equal to or less than the number of factors computed in the analysis.";
            var xcols = this.sourceX.columns;
            var ycols = this.sourceY.columns;

            var B = Matrix.zeros(xcols, ycols);
            var coeffbase = this.coeffbase, loadingsY = this.loadingsY;
            for (var i = 0; i < xcols; i++)
                for (var j = 0; j < ycols; j++)
                    for (var k = 0; k < factors; k++)
                        B[i][j] += coeffbase[i][k] * loadingsY[j][k];

            if (this.analysisMethod === "standardize")
                for (var i = 0; i < xcols; i++)
                    for (var j = 0; j < ycols; j++)
                        B[i][j] = B[i][j] / this.stdDevX[i];

            var A = new Array(ycols);
            for (var i = 0; i < ycols; i++) {
                var sum = 0;
                for (var j = 0; j < xcols; j++)
                    sum += this.meanX[j] * B[j][i];
                A[i] = this.meanY[i] - sum;
            }
            
            var toReturn;
            require(["./../models/regression/multivariate-linear-regression"],function(MLR){
                toReturn = new MLR(B, A, true);
            });
            return toReturn;
        }
    };
    
    function simpls(plsa, inputsX, outputsY, factors) {

        var rows = plsa.sourceX.rows;
        var xcols = plsa.sourceX.columns;
        var ycols = plsa.sourceY.columns;

        var T = Matrix.zeros(rows, factors);  // factor score matrix T
        var U = Matrix.zeros(rows, factors);  // factor score matrix U
        var P = Matrix.zeros(xcols, factors); // loading matrix P, the loadings for X such that X = TP + F
        var C = Matrix.zeros(ycols, factors); // loading matrix C, the loadings for Y such that Y = TC + E
        var W = Matrix.zeros(xcols, factors); // weight matrix W
        var varX = new Array(factors);
        var varY = new Array(factors);

        var V = Matrix.zeros(xcols, factors);

        var covariance = inputsX.transpose().mmul(outputsY);

        var toLog = "";
            for(var i = 0; i < covariance.rows; i++)
                for(var j = 0; j < covariance.columns; j++)
                    toLog += covariance.get(i,j)+" ";
            console.log(toLog);
            
            console.log("start iteration");
        
        for (var factor = 0; factor < factors; factor++) {
        
            var svd = new DC.SingularValueDecomposition(covariance,
                {computeLeftSingularVectors: true,
                computeRightSingularVectors: false,
                autoTranspose: true});

            var w = svd.U.getColumn(0);
            var c = covariance.transpose().mmul(w);
            w = w.to1DArray();

            var t = new Array(rows);
            for(var i = 0 ; i < rows; t[i++] = 0);
            
            for (var i = 0; i < rows; i++)
                for (var j = 0, jj = w.length ; j < jj; j++)
                    t[i] += inputsX[i][j] * w[j];

            var norm_t = Norm.euclidean(t);
            for(var i = 0; i < rows; i++)
                    t[i] /= norm_t;

            var p = new Array(xcols);
            for(var i = 0 ; i < xcols; p[i++] = 0);
            
            for (var i = 0; i < xcols; i++)
                for (var j = 0; j < rows; j++)
                    p[i] += inputsX[j][i] * t[j];

            for(var i = 0, ii = w.length; i < ii; i++)
                w[i] /= norm_t;
            c = c.divS(norm_t).to1DArray();

            var u = new Array(rows);
            for (var i = 0; i < rows; i++)
                for (var j = 0, jj = c.length; j < jj; j++)
                    u[i] += outputsY[i][j] * c[j];

            var v = p.slice();

            if (factor > 0) {
                for (var j = 0; j < factor; j++) {
                    var proj = 0;
                    for (var k = 0; k < xcols; k++)
                        proj += v[k] * V[k][j];

                    for (var k = 0; k < xcols; k++)
                        v[k] -= proj * V[k][j];
                }

                for (var j = 0; j < factor; j++) {
                    var proj = 0;
                    for (var k = 0; k < rows; k++)
                        proj += u[k] * T[k][j];

                    for (var k = 0; k < rows; k++)
                        u[k] -= proj * T[k][j];
                }
            }
            
            var normV = Norm.euclidean(v);
            console.log(normV);
            for(var i = 0, ii = v.length; i < ii; i++)
                v[i] /= normV;

            var cov = covariance.clone();
            for (var i = 0, ii = v.Length; i < ii; i++) {
                for (var j = 0; j < ii; j++) {
                    var d = v[i] * v[j];

                    for (var k = 0; k < ycols; k++)
                        cov[i][k] -= d * covariance[j][k];
                }
            }
            covariance = cov;

            console.log(w[0])
            var toLog = "";
            for(var i = 0; i < covariance.rows; i++)
                for(var j = 0; j < covariance.columns; j++)
                    toLog += covariance.get(i,j)+" ";
            console.log(toLog);
            
            W.setColumn(factor, w);
            U.setColumn(factor, u);
            C.setColumn(factor, c);
            T.setColumn(factor, t);
            P.setColumn(factor, p);
            V.setColumn(factor, v);
            
            varX[factor] = Matrix.rowVector(p).dot(Matrix.columnVector(p));
            varY[factor] = Matrix.rowVector(c).dot(Matrix.columnVector(c));
        }
        
        plsa.scoresX = T;
        plsa.scoresY = U;
        plsa.loadingsX = P;
        plsa.loadingsY = C;
        plsa._weights = W;
        plsa.coeffbase = W;

        plsa.componentProportionX = new Array(factors);
        plsa.componentProportionY = new Array(factors);

        var sumX = 0, sumY = 0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < xcols; j++)
                sumX += inputsX[i][j] * inputsX[i][j];

            for (var j = 0; j < ycols; j++)
                sumY += outputsY[i][j] * outputsY[i][j];
        }

        for (var i = 0; i < factors; i++) {
            plsa.componentProportionY[i] = varY[i] / sumY;
            plsa.componentProportionX[i] = varX[i] / sumX;
        }

    }
    
    function nipals(plsa, inputsX, outputsY, factors, tolerance) {

        var rows = plsa.sourceX.rows;
        var xcols = plsa.sourceX.columns;
        var ycols = plsa.sourceY.columns;

        var E = plsa.inputsX.clone();
        var F = plsa.outputsY.clone();

        var T = Matrix.zeros(rows, factors);  // factor score matrix T
        var U = Matrix.zeros(rows, factors);  // factor score matrix U
        var P = Matrix.zeros(xcols, factors); // loading matrix P, the loadings for X such that X = TP + F
        var C = Matrix.zeros(ycols, factors); // loading matrix C, the loadings for Y such that Y = TC + E
        var W = Matrix.zeros(xcols, xcols);   // weight matrix W
        var B = Array(xcols);

        var varX = new Array(factors);
        var varY = new Array(factors);

        var stop = false;
        
        for (var factor = 0; factor < factors && !stop; factor++)
        {
            var t = E.getColumn(largest(E)).to1DArray();

            var u = F.getColumn(largest(F)).to1DArray();

            var w = new Array(xcols);
            for(var i = 0; i < xcols; w[i++]=0);
            
            var c = new Array(ycols);
            for(var i = 0; i < xcols; c[i++]=0);

            var norm_t = Norm.euclidean(t);

            while (norm_t > 1e-14)
            {
                var t0 = t.slice();

                w = new Array(xcols);
                for(var i = 0; i < xcols; w[i++]=0);
                
                for (var j = 0; j < xcols; j++)
                    for (var i = 0, ii = u.length; i < ii; i++)
                        w[j] += E[i][j] * u[i];

                var normW = Norm.euclidean(w);
                for(var i = 0; i < xcols; i++)
                    w[i] /= normW;
                
                t = new Array(rows);
                for(var i = 0; i < rows; t[i++]=0);
                
                for (var i = 0; i < rows; i++)
                    for (var j = 0; j < xcols; j++)
                        t[i] += E[i][j] * w[j];

                norm_t = Norm.euclidean(t);
                for(var i = 0; i < rows; i++)
                    t[i] /= norm_t;

                c = new Array(ycols);
                for(var i = 0; i < ycols; c[i++]=0);
                
                for (var j = 0; j < ycols; j++)
                    for (var i = 0; i < rows; i++)
                        c[j] += F[i][j] * t[i];

                var normC = Norm.euclidean(c);
                for(var i = 0; i < ycols; i++)
                    c[i] /= normC;

                u = new Array(rows);
                for (var i = 0; i < rows; i++)
                    for (var j = 0; j < ycols; j++)
                        u[i] += F[i][j] * c[j];

                norm_t = 0.0;
                for (var i = 0; i < rows; i++) {
                    var d = (t0[i] - t[i]);
                    norm_t += d * d;
                }
                norm_t = Math.sqrt(norm_t);
            }

            var b = Matrix.columnVector(t).dot(Matrix.rowVector(u));

            var p = new Array(xcols);
            for(var i = 0; i < xcols; p[i++]=0);
            
            for (var j = 0; j < xcols; j++)
                for (var i = 0; i < rows; i++)
                    p[j] += E[i][j] * t[i];

            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < xcols; j++)
                    E[i][j] -= t[i] * p[j];

                for (var j = 0; j < ycols; j++)
                    F[i][j] -= b * t[i] * c[j];
            }

            varY[factor] = b * b;
            varX[factor] = Matrix.columnVector(p).dot(Matrix.rowVector(p));

            T.setColumn(factor, t);
            P.setColumn(factor, p);
            U.setColumn(factor, u);
            C.setColumn(factor, c);
            W.setColumn(factor, w);
            B[factor] = b;

            var norm_x = Norm.euclideanM(E);
            var norm_y = Norm.euclideanM(F);

            stop = true;
            for (var i = 0, ii = norm_x.length; i < ii && stop === true; i++) {
                if (norm_x[i] > tolerance || norm_y[i] > tolerance)
                    stop = false;
            }
        }

        plsa.coeffbase = new DC.SingularValueDecomposition(P.transpose()).solveForDiagonal(B);

        plsa.scoresX = T;
        plsa.scoresY = U;
        plsa.loadingsX = P;
        plsa.loadingsY = C;
        plsa._weights = W;

        plsa.componentProportionX = new Array(factors);
        plsa.componentProportionY = new Array(factors);

        var sumX = 0.0, sumY = 0.0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < xcols; j++)
                sumX += inputsX[i][j] * inputsX[i][j];

            for (var j = 0; j < ycols; j++)
                sumY += outputsY[i][j] * outputsY[i][j];
        }

        for (var i = 0; i < factors; i++) {
            plsa.componentProportionY[i] = varY[i] / sumY;
            plsa.componentProportionX[i] = varX[i] / sumX;
        }
    }
    
    function computeVariableImportanceInProjection(plsa, factors) {

        var xcols = plsa.sourceX.columns;

        var importance = Matrix.zeros(xcols, factors);

        for (var j = 0; j < xcols; j++) {
            var SS1 = new Array(factors);
            var SS2 = new Array(factors);

            for (var k = 0; k < factors; k++) {
                var b = plsa.loadingsY.getColumn(k)[0][0];
                var t = plsa.scoresX.getColumn(k);
                var w = plsa.loadingsX.getColumn(k).to1DArray();

                var ss = (b * b) * (t.dot(t.transpose()));
                var wn = (w[j] * w[j]) / Norm.squareEuclidean(w);

                SS1[k] = ss * wn;
                SS2[k] = ss;
            }
            
            var sum1 = 0;
            for(var i = 0; i < factors; i++) {
                sum1 += SS1[i];
                sum2 += SS2[i];
            }
            
            var sum1, sum2;
            require(["./../array-tools"],function(ATools){
                sum1 = ATools.cumulativeSum(SS1);
                sum2 = ATools.cumulativeSum(SS2);
            });

            for (var k = 0; k < factors; k++)
                importance[j][k] = Math.sqrt(xcols * sum1[k] / sum2[k]);
        }
        return importance;
    }
    
    function PartialLeastSquaresFactor() {
    
    }
    
    function PartialLeastSquaresFactorCollection() {
    
    }
    
    function adjust(plsa, matrix, columnMeans, columnStdDev, inPlace) {
        var result = MTools.center(matrix,columnMeans,inPlace);
        if(columnStdDev !== null && plsa.analysisMethod === "standardize") {
            for (var j = 0, jj = columnStdDev.length; j < jj; j++)
                if (columnStdDev[j] === 0) throw new ArithmeticException("Standard deviation cannot be zero (cannot standardize the constant variable at column index " + j + ").");
            MTools.standardize(result, columnStdDev, true);
        }
        
        return new Matrix(result);
    }
    
    function largest(matrix) {
        var rows = matrix.rows;
        var cols = matrix.columns;
        
        var index = 0;
        var max = 0;
        for(var i = 0; i < cols; i++) {
            var squareSum = 0;
            for(var j = 0; j < rows; j++)
                squareSum += matrix[j][i] * matrix[j][i];
            
            if(squareSum > max) {
                max = squareSum;
                index = i;
            }
        }
        return index;
    }
    
    function PartialLeastSquaresVariables(analysis, inputs) {
        this.analysis = analysis;
        this.inputs = inputs;
    }
    
    PartialLeastSquaresVariables.prototype = {
        get source() {
            return this.inputs ? this.analysis.sourceX : this.analysis.sourceY;
        },
        get result() {
            return this.inputs ? this.analysis.scoresX : this.analysis.scoresY;
        },
        get means() {
            return this.inputs ? this.analysis.meanX : this.analysis.meanY;
        },
        get standardDeviations() {
            return this.inputs ? this.analysis.stdDevX : this.analysis.stdDevY;
        },
        get factorMatrix() {
            return this.inputs ? this.analysis.loadingsX : this.analysis.loadingsY;
        },
        get factorProportions() {
            return this.inputs ? this.analysis.cumulativeProportionX : this.analysis.cumulativeProportionY;
        },
        transform : function(data, factors) {
            return inputs ? this.analysis.transform(data, factors) : this.analysis.transformOutput(data, factors);
        }
    };
    
    
    return PartialLeastSquaresAnalysis;

});