// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Tools.cs
define(function(){
    
    function entropy(matrix, eps) {
        if(typeof(eps)==='undefined') eps = 0;
        var sum = 0, l1 = matrix.length, l2 = matrix[0].length;
        for(var i = 0; i < l1; i++)
            for(var j = 0; j < l2; j++)
                sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
        return -sum;
    }
    
    function mean(matrix, dimension) {
        if(typeof(dimension)==='undefined') dimension = 0;
        var rows = matrix.length;
        var cols = matrix[0].length;
        var theMean;
        
        if(dimension === -1) {
            theMean = [0];
            var N = rows * cols;
            for(var i = 0; i < rows; i++)
                for(var j = 0; j < cols; j++)
                    theMean[0] += matrix[i][j];
            theMean[0] /= N;
        }
        else if(dimension === 0) {
            theMean = new Array(cols);
            var N = rows;
            
            for (var j = 0; j < cols; j++) {
                theMean[j] = 0;
                for(var i = 0; i < rows; i++)
                    theMean[j] += matrix[i][j];
                theMean[j] /= N;
            }
        }
        else if(dimension === 1) {
            theMean = new Array(rows);
            var N = cols;
            
            for (var j = 0; j < rows; j++) {
                theMean[j] = 0;
                for (var i = 0; i < cols; i++)
                    theMean[j] += matrix[j][i];
                theMean[j] /= N;
            }
        }
        else
            throw "Invalid dimension.";
        return theMean;
    }
    
    function standardDeviation(matrix, means, unbiased) {
        var vari = variance(matrix, means, unbiased), l = vari.length;
        for(var i = 0; i < l; i++)
            vari[i] = Math.sqrt(vari[i]);
        return vari;
    }
    
    function variance(matrix, means, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        if(typeof(means)==='undefined') means = mean(matrix);
        var rows = matrix.length;
        if(rows === 0) return [];
        var cols = matrix[0].length;
        var vari = new Array(cols);
        
        for(var j = 0; j < cols; j++) {
            var sum1 = 0, sum2 = 0, x = 0;
            for(var i = 0; i < rows; i++) {
                x = matrix[i][j] - means[j];
                sum1 += x;
                sum2 += x * x;
            }
            
            if(unbiased)
                vari[j] = (sum2 - ((sum1 * sum1) / rows)) / (rows - 1);
            else
                vari[j] = (sum2 - ((sum1 * sum1) / rows)) / rows;
        }
        return vari;
    }
    
    function median(matrix) {
        var rows = matrix.length, cols = matrix[0].length;
        var medians = new Array(cols);
        
        for(var i = 0; i < cols; i++) {
            var data = new Array(rows);
            for(var j = 0; j < rows; j++)
                data[j] = matrix[j][i];
            data.sort();
            var N = data.length;
            if(N % 2 === 0)
                medians[i] = (data[N / 2] + data[(N / 2) - 1]) * 0.5;
            else
                medians[i] = data[Math.floor(N / 2)]; 
        }
        return medians;
    }
    
    function mode(matrix) {
        var rows = matrix.length, cols = matrix[0].length;
        var modes = new Array(cols);
        for(var i = 0; i < cols; i++) {
            var itemCount = new Array(rows);
            for(var k = 0; k < rows; itemCount[k++]=0);
            var itemArray = new Array(rows);
            var count = 0;
            
            for(var j = 0; j < rows; j++) {
                var index = itemArray.indexOf(matrix[j][i]);
                if(index >= 0)
                    itemCount[index]++;
                else {
                    itemArray[count] = matrix[j][i];
                    itemCount[count] = 1;
                    count++;
                }
            }
            
            var maxValue = 0, maxIndex = 0;
            for(var j = 0; j < count; j++) {
                if(itemCount[j] > maxValue) {
                    maxValue = itemCount[j];
                    maxIndex = j;
                }
            }
            
            modes[i] = itemArray[maxIndex];
        }
        return modes;
    }
    
    function skewness(matrix, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var means = mean(matrix);
        var n = matrix.length, l = means.length;
        var skew = new Array(l);
        
        for(var j = 0; j < l; j++) {
            var s2 = 0, s3 = 0;
            for(var i = 0; i < n; i++) {
                var dev = matrix[i][j] - means[j];
                s2 += dev * dev;
                s3 += dev * dev * dev;
            }
            
            var m2 = s2 / n;
            var m3 = s3 / n;
            var g = m3 / Math.pow(m2, 3 / 2);
            
            if(unbiased) {
                var a = Math.sqrt(n * (n - 1));
                var b = n - 2;
                skew[j] = (a / b) * g;
            }
            else
                skew[j] = g;
        }
        
        return skew;
    }
    
    function kurtosis(matrix, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var means = mean(matrix);
        var n = matrix.length, m = matrix[0].length;
        var kurt = new Array(m);
        
        for(var j = 0; j < m; j++) {
            var s2 = 0, s4 = 0;
            for(var i = 0; i < n; i++) {
                var dev = matrix[i][j] - means[j];
                s2 += dev * dev;
                s4 += dev * dev * dev * dev;
            }
            var m2 = s2 / n;
            var m4 = s4 / n;
            
            if(unbiased) {
                var v = s2 / (n-1);
                var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
                var b = s4 / (v * v);
                var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));
                kurt[j] = a * b - 3 * c;
            }
            else
                kurt[j] = m4 / (m2 * m2) - 3;
        }
        return kurt;
    }
    
    function standardError(matrix) {
        var samples = matrix.length;
        var standardDeviations = standardDeviation(matrix), l = standardDeviations.length;
        var standardErrors = new Arrray(l);
        var sqrtN = Math.sqrt(samples);
        
        for(var i = 0; i < l; i++)
            standardErrors[i] = standardDeviations[i] / sqrtN;
        return standardErrors;
    }
    
    function covariance(matrix, dimension) {
        return scatter(matrix, undefined, dimension);
    }
    
    function scatter(matrix, divisor, dimension) {
        if(typeof(dimension)==='undefined') dimension = 0;
                if(typeof(divisor)==='undefined') {
            if(dimension===0)
                divisor = matrix.length-1;
            else if(dimension===1)
                divisor = matrix[0].length-1;
        }
        var means = mean(matrix, dimension);
        var rows = matrix.length;
        if(rows===0) return [[]];
        var cols = matrix[0].length;
        var cov;
        
        if(dimension === 0) {
            cov = new Array(cols);
            for(var i = 0; i < cols; cov[i++]=new Array(cols));
            for(var i = 0; i < cols; i++) {
                for(var j = i; j < cols ; j++) {
                    var s = 0;
                    for(var k = 0; k < rows; k++)
                        s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                    s /= divisor;
                    cov[i][j] = s;
                    cov[j][i] = s;
                }
            }
        }
        else if(dimension === 1) {
            cov = new Array(rows);
            for(var i = 0; i < rows; cov[i++]=new Array(rows));
            for (var i = 0; i < rows; i++) {
                for(var j = i; j < rows; j++) {
                    var s = 0;
                    for (var k = 0; k < cols; k++)
                        s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                    s /= divisor;
                    cov[i][j] = s;
                    cov[j][i] = s;
                }
            }
        }
        else
            throw "Invalid dimension.";
        
        return cov;
    }
    
    function correlation(matrix) {
        var means = mean(matrix);
        var standardDeviations = standardDeviation(matrix, true, means);
        var scores = zScores(matrix, means, standardDeviations);
        var rows = matrix.length, cols = matrix[0].length;
        
        var cor = new Array(cols);
        for(var i = 0; i < cols; cor[i++]=new Array(cols));
        for(var i = 0; i < cols; i++) {
            for(var j = i; j < cols; j++) {
                var c = 0;
                for(var k = 0, l = scores.length; k < l; k++)
                    c += scores[k][j] * scores[k][i];
                c /= rows - 1;
                cor[i][j] = c;
                cor[j][i] = c;
            }
        }
        return cor;
    }
    
    function zScores(matrix, means, standardDeviations) {
        if(typeof(means)==='undefined') means = mean(matrix);
        if(typeof(standardDeviations)==='undefined') standardDeviations = standardDeviation(matrix, true, means);
        return standardize(center(matrix, means, false), standardDeviations, true);
    }
    
    function center(matrix, means, inPlace) {
        if(typeof(means)==='undefined') means = mean(matrix);
        if(typeof(inPlace)==='undefined') inPlace = false;
        var result = matrix;
        
        if(!inPlace) {
            var l = matrix.length
            result = new Array(l);
            for(var i = 0; i < l; i++)
                result[i] = new Array(matrix[i].length);
        }
        
        for(var i = 0; i < l; i++) {
            var row = result[i];
            for(var j = 0, jj = row.length; j < jj; j++)
                row[j] = matrix[i][j] - means[j];
        }
        return result;
    }
    
    function standardize(matrix, standardDeviations, inPlace) {
        if(typeof(standardDeviations)==='undefined') standardDeviations = standardDeviation(matrix);
        if(typeof(inPlace)==='undefined') inPlace = false;
        var result = matrix, l = matrix.length;
        
        if(!inPlace) {
            result = new Array(l);
            for(var i = 0; i < l; i++)
                result[i] = new Array(matrix[i].length);
        }
        
        for(var i = 0; i < l; i++) {
            var resultRow = result[i];
            var sourceRow = matrix[i];
            for(var j = 0, jj = resultRow.length; j < jj; j++) {
                if(standardDeviations[j] !== 0 && !isNaN(standardDeviations[j]))
                    resultRow[j] = sourceRow[j] / standardDeviations[j];
            }
        }
        return result;
    }
    
    function weightedVariance(matrix, weights) {
        var means = mean(matrix);
        var rows = matrix.length;
        if(rows === 0) return [];
        var cols = matrix[0].length;
        var vari = new Array(cols);
        
        for(var j = 0; j < cols; j++) {
            var sum = 0;
            var a = 0, b = 0;
            
            for(var i = 0; i < rows; i++) {
                var z = matrix[i][j] - means[j];
                var w = weights[i];
                
                sum += w * (z * z);
                b += w;
                a += w * w;
            }
            
            vari[j] = sum * (b / (b * b - a));
        }
        
        return vari;
    }
    
    function weightedMean(matrix, weights, dimension) {
        if(typeof(dimension)==='undefined') dimension = 0;
        var rows = matrix.length;
        if(rows===0) return [];
        var cols = matrix[0].length;
        var means;
        
        if(dimension === 0) {
            means = new Array(cols);
            for(var i = 0; i < cols; means[i++]=0);
            for (var i = 0; i < rows; i++) {
                var row = matrix[i];
                var w = weights[i];
                for (var j = 0; j < cols; j++)
                    means[j] += row[j] * w;
            }
        }
        else if(dimension === 1) {
            means = new Array(rows);
            for(var i = 0; i < rows; means[i++]=0);
            for (var j = 0; j < rows; j++) {
                var row = matrix[j];
                var w = weights[j];
                for (var i = 0; i < cols; i++)
                    means[j] += row[i] * w;
            }
        }
        else
            throw "Invalid dimension.";
            
        var weightSum = sum(weights);
        if(weightSum !== 0)
            for (var i = 0, ii = means.length; i < ii; i++)
                means[i] /= weightSum;
        return means;
    }
    
    function weightedCovariance(matrix, weights, means, dimension) {
        if(typeof(dimension)==='undefined') dimension = 0;
        if(typeof(means)==='undefined') means = weightedMean(matrix, weights, dimension);
        var s1 = 0, s2 = 0;
        for(var i = 0, ii = weights.length; i < ii; i++) {
            s1 += weights[i];
            s2 += weights[i] * weights[i];
        }
        var factor = s1 / (s1 * s1 - s2);
        return weightedScatter(matrix, weights, means, factor, dimension);
    }
    
    function weightedScatter(matrix, weights, means, factor, dimensions) {
        if(typeof(dimension)==='undefined') dimension = 0;
        if(typeof(means)==='undefined') means = weightedMean(matrix, weights, dimension);
        if(typeof(factor)==='undefined') factor = 1;
        var rows = matrix.length;
        if(rows === 0) return [[]];
        var cols = matrix[0].length;
        var cov;
        
        if(dimension === 0) {
            cov = new Array(cols);
            for(var i = 0; i < cols; cov[i++]=new Array(cols));
            for(var i = 0; i < cols; i++) {
                for(var j = i; j < cols; j++) {
                    var s = 0;
                    for(var k = 0; k < rows; k++)
                        s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                    cov[i][j] = s * factor;
                    cov[j][i] = s * factor;
                }
            }
        }
        else if(dimension === 1) {
            cov = new Array(rows);
            for(var i = 0; i < rows; cov[i++]=new Array(rows));
            for (var i = 0; i < rows; i++) {
                for (var j = i; j < rows; j++) {
                    var s = 0;
                    for (var k = 0; k < cols; k++)
                        s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                    cov[i][j] = s * factor;
                    cov[j][i] = s * factor;
                }
            }
        }
        else
            throw "Invalid dimension";
        
        return cov;
    }
    
    // private
    function sum(vector) {
        var sum = 0, l = vector.length;
        for(var i = 0; i < l; i++)
            sum += vector[i];
        return sum;
    }
    
    return {
        entropy: entropy,
        mean: mean,
        standardDeviation: standardDeviation,
        variance: variance,
        median: median,
        mode: mode,
        skewness: skewness,
        kurtosis: kurtosis,
        standardError: standardError,
        covariance: covariance,
        scatter: scatter,
        correlation: correlation,
        zScores: zScores,
        center: center,
        standardize: standardize,
        weightedVariance: weightedVariance,
        weightedMean: weightedMean,
        weightedCovariance: weightedCovariance,
        weightedScatter: weightedScatter
    };
    
});