// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Tools.cs
define(function(){

    function mean(values) {
        var sum = 0, l = values.length;
        for(var i = 0; i < l; i++)
            sum += values[i];
        return sum / l;
    }
    
    function geometricMean(values) {
        var sum = 0, l = values.length;
        for(var i = 0; i < l; i++)
            sum *= values[i];
        return Math.pow(sum, 1/l);
    }
    
    function logGeometricMean(values) {
        var lnsum = 0, l = values.length;
        for(var i = 0; i < l; i++)
            lnsum += Math.log(values[i]);
        return lnsum / l;
    }
    
    function grandMean(means, samples) {
        var sum = 0, n = 0, l = means.length;
        for(var i = 0; i < l; i++) {
            sum += samples[i] * means[i];
            n += samples[i];
        }
        return sum / n;
    }
    
    function truncatedMean(values, percent, inPlace) {
        if(typeof(inPlace)==='undefined') inPlace = false;
        
        values = inPlace ? values : values.slice();
        values.sort();
        
        var l = values.length;
        var k = Math.floor(l*percent);
        
        var sum = 0;
        for(var i = k; i < l - k; i++)
            sum += values[i];
        
        return sum / (l - 2 * k);
    }
    
    function contraHarmonicMean(values, order) {
        if(typeof(order)==='undefined') order = 1;
        var r1 = 0, r2 = 0, l = values.length;
        for(var i = 0; i < l; i++) {
            r1 += Math.pow(values[i], order + 1);
            r2 += Math.pow(values[i], order);
        }
        return r1 / r2;
    }
    
    function standardDeviation(values, unbiased) {
        return Math.sqrt(variance(values, unbiased));
    }
    
    function standardError(values) {
        return standardDeviation(values) / Math.sqrt(samples.length);
    }
    
    function median(values, alreadySorted) {
        if(typeof(alreadySorted)==='undefined') alreadySorted = false;
        if(!alreadySorted) {
            values = values.slice();
            values.sort();
        }
        
        var l = values.length;
        var half = Math.floor(l / 2);
        if(l % 2 === 0)
            return (values[half-1] + values[half]) * 0.5;
        return values[half];
    }
    
    function quartiles(values, alreadySorted) {
        if(typeof(alreadySorted)==='undefined') alreadySorted = false;
        if(!alreadySorted) {
            values = values.slice();
            values.sort();
        }
        
        var quart = values.length / 4;
        var q1 = values[Math.ceil(quart)-1];
        var q2 = median(values, true);
        var q3 = values[Math.ceil(quart*3)-1];

        return {q1: q1, q2: q2, q3: q3};
    }
    
    function variance(values, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var theMean = mean(values);
        var theVariance = 0, l = values.length;
        
        for(var i = 0; i < l; i++) {
            var x = values[i] - theMean;
            theVariance += x * x;
        }
        
        if(unbiased)
            return theVariance / (l - 1);
        else
            return theVariance / l;
    }
    
    function pooledStandardDeviation(samples, unbiased) {
        return Math.sqrt(pooledVariance(samples, unbiased));
    }
    
    function pooledVariance(samples, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var sum = 0;
        var length = 0, l = samples.length;
        for(var i = 0; i < l; i++) {
            var values = samples[i];
            var vari = variance(values);
            
            sum += (values.length-1) * vari;
            
            if(unbiased)
                length += values.length - 1;
            else
                length += values.length;
        }
        return sum / length;
    }
    
    function mode(values) {
        var l = values.length
        var itemCount = new Array(l);
        for(var i = 0; i < l; itemCount[i++]=0);
        var itemArray = new Array(l);
        var count = 0;
        
        for(var i = 0; i < l; i++) {
            var index = itemArray.indexOf(values[i]);
            if(index >= 0)
                itemCount[index]++;
            else {
                itemArray[count] = values[i];
                itemCount[count] = 1;
                count++;
            }
        }
        
        var maxValue = 0, maxIndex = 0;
        for(var i = 0; i < count; i++) {
            if(itemCount[i] > maxValue) {
                maxValue = itemCount[i];
                maxIndex = i;
            }
        }
        
        return itemArray[maxIndex];
    }
    
    function covariance(vector1, vector2, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var mean1 = mean(vector1);
        var mean2 = mean(vector2);
        
        if(vector1.length !== vector2.length)
            throw "Vectors do not have the same dimensions";
        
        var cov = 0, l = vector1.length;
        for(var i = 0; i < l; i++) {
            var x = vector1[i] - mean1;
            var y = vector2[i] - mean2;
            cov += x * y;
        }
        
        if(unbiased)
            return cov / (l - 1);
        else
            return cov / l;
    }
    
    function skewness(values, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var theMean = mean(values);
        
        var s2 = 0, s3 = 0, l = values.length;
        for(var i = 0; i < l; i++) {
            var dev = values[i] - theMean;
            s2 += dev * dev;
            s3 += dev * dev * dev;
        }
        var m2 = s2 / l;
        var m3 = s3 / l;
        
        var g = m3 / (Math.pow(m2, 3 / 2.0));
        if(unbiased) {
            var a = Math.sqrt(l *(l - 1));
            var b = l - 2;
            return (a / b) * g;
        }
        else {
            return g;
        }
    }
    
    function kurtosis(values, unbiased) {
        if(typeof(unbiased)==='undefined') unbiased = true;
        var theMean = mean(values);
        var n = values.length, s2 = 0, s4 = 0;
        
        for(var i = 0; i < n; i++) {
            var dev = values[i] - theMean;
            s2 += dev * dev;
            s4 += dev * dev * dev * dev;
        }
        var m2 = s2 / n;
        var m4 = s4 / n;
        
        if(unbiased) {
            var v = s2 / (n - 1);
            var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
            var b = s4 / (v * v);
            var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));
            
            return a * b - 3 * c;
        }
        else {
            return m4 / (m2 * m2) - 3;
        }
    }
    
    function entropy(values, eps) {
        if(typeof(eps)==='undefined') eps = 0;
        var sum = 0, l = values.length;
        for(var i = 0; i < l; i++)
            sum += values[i] * Math.log(values[i] + eps);
        return -sum;
    }
    
    function weightedMean(values, weigths) {
        var sum = 0, l = values.length;
        for(var i = 0; i < l; i++)
            sum += values[i] * weights[i];
        return sum;
    }
    
    function weightedStandardDeviation(values, weights) {
        return Math.sqrt(weightedVariance(values, weigths));
    }
    
    function weightedVariance(values, weigths) {
        var theMean = weightedMean(values, weigths);
        var vari = 0, l = values.length;
        var a = 0, b = 0;
        
        for(var i = 0; i < l; i++) {
            var z = values[i] - theMean;
            var w = weights[i];
            
            vari += w * (z * z);
            b += w;
            a += w * w;
        }
        
        return vari * (b / (b * b - a));
    }
    
    function center(values, inPlace) {
        if(typeof(inPlace)==='undefined') inPlace = false;
        
        var result = values;
        if(!inPlace)
            result = values.slice();
        
        var theMean = mean(result), l = result.length;
        for(var i = 0; i < l; i++)
            result[i] -= theMean;
    }
    
    function standardize(values, standardDev, inPlace) {
        if(typeof(standardDev)==='undefined') standardDev = standardDeviation(values);
        if(typeof(inPlace)==='undefined') inPlace = false;
        var l = values.length;
        var result = inPlace ? values : new Array(l);
        for(var i = 0; i < l; i++)
            result[i] = values[i] / standardDev;
        return result;
    }
    
    function cumulativeSum(array) {
        var l = array.length;
        var result = new Array(l);
        result[0] = array[0];
        for(var i = 1; i < l ; i++)
            result[i] = result[i-1] + array[i];
        return result;
    }

    return {
        mean: mean,
        geometricMean: geometricMean,
        logGeometricMean: logGeometricMean,
        grandMean: grandMean,
        truncatedMean: truncatedMean,
        contraHarmonicMean: contraHarmonicMean,
        standardDeviation: standardDeviation,
        standardError: standardError,
        median: median,
        quartiles: quartiles,
        variance: variance,
        pooledStandardDeviation: pooledStandardDeviation,
        pooledVariance: pooledVariance,
        mode: mode,
        covariance: covariance,
        skewness: skewness,
        kurtosis: kurtosis,
        entropy: entropy,
        weightedMean: weightedMean,
        weightedStandardDeviation: weightedStandardDeviation,
        weightedVariance: weightedVariance,
        center: center,
        standardize: standardize,
        cumulativeSum : cumulativeSum
    };

});