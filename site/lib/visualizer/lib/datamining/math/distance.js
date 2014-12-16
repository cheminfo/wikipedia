// https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Distance.cs
define(function(){
    
    function manhattan(x,y) {
        var sum = 0,
            i = 0,
            ii = x.length;
        for(; i < ii; i++)
            sum += Math.abs(x[i]-y[i]);
        return sum;
    }
    
    function chebyshev(x,y) {
        var max = Math.abs(x[0],y[0]),
            i = 1,
            ii = x.length,
            abs;
        for(; i < ii; i++) {
            abs = Math.abs(x[i]-y[i]);
            if(abs > max) max = abs;
        }
        return max;
    }
    
    function squareEuclidean(x,y) {
        var d = 0,
            i = 0,
            ii = x.length,
            u;
        for(; i < ii; i++) {
            u = x[i] - y[i];
            d += u*u;
        }
        return d;
    }
    
    function euclidean(x,y) {
        return Math.sqrt(squareEuclidean(x,y));
    }
    
    // Bhattacharyya distance between two normalized histograms.
    function bhattacharyya(x,y) {
        var bins = x.length,
            b = 0,
            i = 0;
        for(; i < bins; i++)
            b += Math.sqrt(x[i]) * Math.sqrt(y[i]);
        return Math.sqrt(1-b);
    }
    
    // Hamming distance between two boolean vectors.
    function hamming(x,y) {
        var d = 0,
            i = 0,
            ii = x.length;
        for(; i < ii; i++)
            if(x[i] !== y[i]) d++;
        return d;
    }
    
    return {
        manhattan : manhattan,
        chebyshev : chebyshev,
        squareEuclidean : squareEuclidean,
        euclidean : euclidean,
        bhattacharyya : bhattacharyya,
        hamming : hamming
    };
    
});