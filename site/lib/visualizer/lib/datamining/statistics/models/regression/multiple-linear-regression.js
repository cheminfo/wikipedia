// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Models/Regression/Linear/MultipleLinearRegression.cs
define(["./../../../math/matrix","./../../../math/decompositions"],function(Matrix,DC){
    
    function MultipleLinearRegression(inputs, intercept) {
        if(typeof(intercept)==='undefined') intercept = false;
        if(intercept===true) inputs++;
        this.coefficients = new Array(inputs);
        this.addIntercept = intercept;
    }
    
    MultipleLinearRegression.prototype = {
        get inputs() {
            return this.coefficients.length - (this.addIntercept ? 1 : 0);
        },
        hasIntercept : function() {
            return this.addIntercept;
        },
        regress : function(inputs, outputs, robust) {
            if(inputs.rows !== outputs.length) throw "Number of input and output samples does not match.";
            if(typeof(robust)==='undefined') robust = true;
            
            var parameters = this.inputs;
            var rows = inputs.rows;
            var cols = inputs.columns;
            
            if(parameters !== cols)
                throw "Input vectors should have length "+parameters+" but they have "+cols;
            
            var solver,designMatrix;
            
            if(!this.addIntercept)
                designMatrix = inputs.clone();
            else {
                designMatrix = Matrix.empty(rows, cols + 1);
                for(var i = 0; i < rows; i++) {
                    for(var j = 0; j < cols; j++)
                        designMatrix[i][j] = inputs[i][j];
                    designMatrix[i][cols] = 1;
                }
            }
            
            if(robust || cols >= rows) {
                solver = new DC.SingularValueDecomposition(designMatrix,{computeLeftSingularVectors: true,
                    computeRightSingularVectors: true,
                    autoTranspose: true});
            }
            else {
                solver = new DC.QrDecomposition(designMatrix);
            }
            
            this.coefficients = solver.solve(Matrix.columnVector(outputs)).to1DArray();
            
            var error = 0, e;
            for(var i = 0; i < outputs.length; i++) {
                e = outputs[i] - this.compute(inputs[i]);
                error += e * e;
            }
            
            return error;
        },
        coefficientOfDetermination : function(inputs, outputs, adjust) {
            if(typeof(adjust)==='undefined') adjust = false;
            var n = inputs.rows;
            var p = this.inputs;
            var SSe = 0;
            var SSt = 0;
            var avg = 0;
            var d;

            for (var i = 0; i < outputs.length; i++)
                avg += outputs[i];
            avg /= n;

            for (var i = 0; i < outputs.length; i++)
            {
                d = outputs[i] - this.compute(inputs[i]);
                SSe += d * d;

                d = outputs[i] - avg;
                SSt += d * d;
            }

            var r2 = (SSt !== 0) ? 1 - (SSe / SSt) : 1;

            if (!adjust)
                return r2;
            else {
                if (r2 === 1)
                    return 1;

                if (n - p === 1)
                    return NaN;
                else
                    return 1 - (1 - r2) * ((n - 1) / (n - p - 1));
            }
        },
        compute : function(input) {
            if(input instanceof Matrix)
                return computeMatrix(this,input);
            if(input.length !== this.inputs)
                throw "Input vectors should have length "+this.inputs+".";
            var output = 0;
            for(var i = 0, ii = input.length; i < ii; i++)
                output += this.coefficients[i] * input[i];
                
            if(this.addIntercept)
                output += this.coefficients[input.length];
            
            return output;
        },
        toString : function(decimals) {
            var dec = (typeof decimals !== 'undefined');
            var coeff = this.coefficients;
            var str = "y(";
            var inputs = (this.addIntercept) ? coeff.length - 1 : coeff.length;
            
            for(var i = 0; i < inputs; i++) {
                str += "x"+i;
                if(i < inputs-1)
                    str += ", ";
            }
            
            str += ") = ";
            
            for(var i = 0; i < inputs; i++) {
                if(dec)
                    str += coeff[i].toFixed(decimals)+"*x"+i;
                else
                    str += parseFloat(coeff[i].toFixed(10))+"*x"+i;
                    
                if(i < inputs-1)
                    str += " + ";
            }
            
            if(this.addIntercept) {
                if(dec)
                    str += " + "+coeff[inputs].toFixed(decimals);
                else
                    str += " + "+parseFloat(coeff[inputs].toFixed(10));
            }
            return str;
        }
    };
    
    function computeMatrix(mlr, input) {
        var l = input.rows;
        var output = new Array(l);
        
        for(var i = 0; i < l; i++)
            output[i] = mlr.compute(input[i]);
            
        return output;
    }
    
    return MultipleLinearRegression;
    
});