define(["./matrix"],function(Matrix){
    
    function distanceMatrixSymmetric(data, distanceFunction) {
        var length = data.length,
            result = Matrix.empty(length,length);
        for(var i = 0; i < length; i++) {
            var object1 = data[i];
            for(var j = i; j < length; j++) {
                var object2 = data[j];
                var value = distanceFunction(object1,object2);
                result[i][j] = value;
                result[j][i] = value;
            }
        }
        return result;
    }
    
    return distanceMatrixSymmetric;
    
});