// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Analysis/PrincipalComponentAnalysis.cs?source=cc
define(["./../matrix-tools","./../../math/matrix","./../../math/decompositions"], function(MTools, Matrix, DC){

    function PrincipalComponentAnalysis(data, method) {
        if(arguments.length === 0) return; // For static instanciators
        if(typeof(method)==='undefined') method = "center";
        if(!(data instanceof Matrix)) data = new Matrix(data);
                
        this.source = data.clone();
        this.columnMeans = MTools.mean(data);
        this.columnStdDev = MTools.standardDeviation(data, this.columnMeans);
        this.analysisMethod = method;
        this.sourceDimensions = data.columns;
        this.onlyCovarianceMatrixAvailable = false;
        this.overwriteSourceMatrix = false;
    }
    
    PrincipalComponentAnalysis.fromCovarianceMatrix = function(mean, covariance) {
        if(!(covariance instanceof Matrix)) covariance = new Matrix(covariance);
        if(!covariance.isSquare())
            throw "Covariance matrix must be square";
            
        var pca = new PrincipalComponentAnalysis();
        pca.columnMeans = mean;
        pca.covarianceMatrix = covariance;
        pca.analysisMethod = "center";
        pca.onlyCovarianceMatrixAvailable = true;
        pca.sourceDimensions = covariance.rows;
        
        return pca;
    }
    
    PrincipalComponentAnalysis.fromCorrelationMatrix = function(mean, stdDev, correlation) {
        if(!(correlation instanceof Matrix)) correlation = new Matrix(correlation);
        if(!correlation.isSquare())
            throw "Correlation matrix must be square";
            
        var pca = new PrincipalComponentAnalysis();
        pca.columnMeans = mean;
        pca.columnStdDev = stdDev;
        pca.covarianceMatrix = correlation;
        pca.analysisMethod = "standardize";
        pca.onlyCovarianceMatrixAvailable = true;
        pca.sourceDimensions = correlation.rows;
        
        return pca;
    }
    
    PrincipalComponentAnalysis.prototype = {
        compute : function() {
            if(!this.onlyCovarianceMatrixAvailable) {
                var rows = this.source.rows;
                var matrix = adjust(this, this.source, this.overwriteSourceMatrix);
                var svd = new DC.SingularValueDecomposition(matrix)
                
                this.singularValues = svd.diagonal();
                this.eigenvectors = svd.V;
                this.result = svd.U.mmul(Matrix.diag(this.singularValues));
                this.eigenvalues = new Array(this.singularValues.length);
                for(var i = 0, ii = this.singularValues.length; i < ii; i++)
                    this.eigenvalues[i] = this.singularValues[i] * this.singularValues[i] / (rows - 1);
            }
            else {
                var evd = new DC.EigenvalueDecomposition(this.covarianceMatrix);
                this.eigenvalues = evd.RealEigenvalues;
                this.eigenvectors = evd.eigenvectors;
                this.singularValues = new Array(this.eigenvalues.length);
                // sort values
            }
            
            createComponents(this);
        },
        transform : function(data, dimensions) {
            if(this.eigenvectors===undefined) throw "The analysis must have been computed first.";
            if(!(data instanceof Matrix)) data = new Matrix(data);
            if(data.columns !== this.sourceDimensions) throw "The input data should have the same number of columns as the original data.";
            if(dimensions < 0 || dimensions > this.singularValues.length) throw "The specified number of dimensions must be equal or less than the number of components available in the analysis";
            var rows = data.rows, cols = data.columns;
            data = adjust(this, data, false);
            var r = Matrix.zeros(rows, dimensions);

            for (var i = 0; i < rows; i++)
                for (var j = 0; j < dimensions; j++)
                    for (var k = 0; k < cols; k++)
                        r[i][j] += data[i][k] * this.eigenvectors[k][j];
            return r;
        },
        numberOfComponents : function(threshold) {
            if (threshold < 0 || threshold > 1.0) throw "Threshold should be a value between 0 and 1.";
            for (var i = 0, ii = this.componentCumulative.length; i < ii; i++) {
                if (this.componentCumulative[i] >= threshold)
                    return i + 1;
            }
            return this.componentCumulative.length;
        }
    };
    
    function adjust(pca, matrix, inPlace) {
        var result = MTools.center(matrix, pca.columnMeans, inPlace);
        if(pca.analysisMethod === "standardize") {
            for (var j = 0, jj = pca.columnStdDev.length; j < jj; j++)
                if(pca.columnStdDev[j] === 0)
                    throw "Standard deviation cannot be zero (cannot standardize the constant variable at column index " + j + ").";
            MTools.standardize(result, pca.columnStdDev, true);
        }
        if(inPlace)
            return new Matrix(matrix);
        else
            return new Matrix(result);
    }
    
    function createComponents(pca) {
        var numComponents = pca.singularValues.length;
        pca.componentProportions = new Array(numComponents);
        pca.componentCumulative = new Array(numComponents);
        
        var sum = 0;
        for (var i = 0; i < numComponents; i++)
            sum += Math.abs(pca.eigenvalues[i]);
        sum = (sum === 0) ? 0 : (1 / sum);
        
        for (var i = 0; i < numComponents; i++)
            pca.componentProportions[i] = Math.abs(pca.eigenvalues[i]) * sum;
        
        pca.componentCumulative[0] = pca.componentProportions[0];
        for (var i = 1, ii = pca.componentCumulative.length; i < ii; i++)
            pca.componentCumulative[i] = pca.componentCumulative[i - 1] + pca.componentProportions[i];
        
        /*var components = new Array(pca.singularValues.length);
        for (var i = 0, ii = components.length; i < ii; i++)
            components[i] = new PrincipalComponent(pca, i);*/
    }
    
    return PrincipalComponentAnalysis;

});