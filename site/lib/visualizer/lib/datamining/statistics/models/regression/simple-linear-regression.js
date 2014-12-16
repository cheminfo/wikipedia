// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Models/Regression/Linear/SimpleLinearRegression.cs
define(["./multiple-linear-regression","./../../../math/matrix"],function(MLR,Matrix){
    
    function SimpleLinearRegression() {
        this.regression = new MLR(2);
    }
    
    SimpleLinearRegression.prototype = {
        get slope() {
            return this.regression.coefficients[1];
        },
        get intercept() {
            return this.regression.coefficients[0];
        },
        regress : function(inputs, outputs) {
            if(inputs.length !== outputs.length)
                throw "Number of input and output samples does not match.";
                
            var X = new Array(inputs.length);
            for(var i = 0, ii = inputs.length; i < ii; i++)
                X[i] = [1, inputs[i]];
                
            return this.regression.regress(new Matrix(X), outputs);
        },
        compute : function(input) {
            if(input instanceof Array)
                return computeArray(this, input);
            return this.slope * input + this.intercept;
        },
        coefficientOfDetermination : function(inputs, outputs, adjust) {
            if(typeof(adjust)==='undefined') adjust = false;
            
            var l = inputs.length;
            var X = new Array(l);
            for(var i = 0; i < l; i++)
                X[i] = [1, inputs[i]];
                
            return this.regression.coefficientOfDetermination(new Matrix(X), outputs, adjust);
        },
        toString : function(decimals) {
            if(typeof decimals === 'undefined')
                return "y(x) = "+parseFloat(this.slope.toFixed(10))+"x + "+parseFloat(this.intercept.toFixed(10));
            else
                return "y(x) = "+this.slope.toFixed(decimals)+"x + "+this.intercept.toFixed(decimals);
        }
    };
    
    function computeArray(slr, input) {
        var output = new Array(input.length);
        for(var i = 0, ii = input.length; i < ii; i++)
            output[i] = slr.compute(input[i]);
        return output;
    }
    
    return SimpleLinearRegression;
    
});