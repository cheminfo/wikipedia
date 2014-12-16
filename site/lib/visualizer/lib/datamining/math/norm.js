// https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Norm.cs
define(function(){

    function squareEuclidean(a) {
        var sum = 0;
        for(var i = 0, ii = a.length; i < ii; i++)
            sum += a[i] * a[i];
        return sum;
    }
    
    function euclidean(a) {
        return Math.sqrt(squareEuclidean(a));
    }
    
    function squareEuclideanM(a, dimension) {
        if(typeof(dimension)==='undefined') dimension = 0;
        var rows = a.length;
        var cols = a[0].length;
        
        var norm;

        if (dimension === 0) {
            norm = new Array(cols);

            for (var j = 0; j < cols; j++) {
                var sum = 0;
                for (var i = 0; i < rows; i++) {
                    var v = a[i][j];
                    sum += v * v;
                }
                norm[j] = sum;
            }
        }
        else {
            norm = new Array(rows);

            for (var i = 0; i < rows; i++) {
                var sum = 0;
                for (var j = 0; j < cols; j++) {
                    var v = a[i][j];
                    sum += v * v;
                }
                norm[i] = sum;
            }
        }
        return norm;
    }
    
    function euclideanM(a, dimension) {
        var norm = squareEuclideanM(a,dimension);
        for (var i = 0, ii = norm.length; i < ii; i++)
            norm[i] = Math.sqrt(norm[i]);

        return norm;
    }
    
    return {
        squareEuclidean: squareEuclidean,
        euclidean: euclidean,
        squareEuclideanM: squareEuclideanM,
        euclideanM: euclideanM
    };

});