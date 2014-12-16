// https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Tools.cs
define(function(){
    
    // Random number generator withseed (Mersenne twister ?)
    function random(seed) {
    
    }
    
    function angle(x, y) {
        if (y >= 0) {
            if (x >= 0)
                return Math.atan(y / x);
            return Math.PI - Math.atan(-y / x);
        }
        else {
            if (x >= 0)
                return 2 * Math.PI - Math.atan(-y / x);
            return Math.PI + Math.atan(y / x);
        }
    }
    
    function nextPowerOf2(x) {
        --x;
        x |= x >> 1;
        x |= x >> 2;
        x |= x >> 4;
        x |= x >> 8;
        x |= x >> 16;
        return ++x;
    }
    
    function previousPowerOf2(x) {
        return nextPowerOf2(x + 1) / 2;
    }
    
    function hypotenuse(a, b) {
        var r = 0;
        var absA = Math.abs(a);
        var absB = Math.abs(b);

        if (absA > absB) {
            r = b / a;
            r = absA * Math.sqrt(1 + r * r);
        }
        else if (b != 0) {
            r = a / b;
            r = absB * Math.sqrt(1 + r * r);
        }
        return r;
    }
    
    function mod(x, m) {
        if(m < 0)
            m = -m;
        var r = x % m;
        return r < 0 ? r + m : r;
    }
    
    function scale(fromMin, fromMax, toMin, toMax, x) {
        if(fromMax - fromMin === 0) return 0;
        if(typeof(x)==='number')
            return (toMax - toMin) * (x - fromMin) / (fromMax - fromMin) + toMin;
        // array
        var result = new Array(x.length);
        for(var i = 0, ii = x.length; i < ii; i++)
            result[i] = (toMax - toMin) * (x[i] - fromMin) / (fromMax - fromMin) + toMin;
        return result;
    }
    
    function acosh(x) {
        if(x < 1)
            throw "Argument out of range";
        return Math.log(x + Math.sqrt(x * x - 1));
    }
    
    function asinh(d) {
        var x;
        var sign;

        if (d === 0)
            return d;

        if (d < 0) {
            sign = -1;
            x = -d;
        }
        else {
            sign = 1;
            x = d;
        }
        return sign * Math.log(x + Math.sqrt(x * x + 1));
    }
    
    function atanh(d) {
        if (d > 1 || d < -1)
            throw "Argument out of range";
        return 0.5 * Math.log((1 + d) / (1 - d));
    }
    
    function factorialPower(value, degree) {
        for(var i = 0; i < degree; i++)
            value *= degree--;
        return value;
    }
    
    function truncatedPower(value, degree) {
        var x = Math.pow(value, degree);
        return (x > 0) ? x : 0;
    }
    
    
    
    return {
        random: random,
        angle: angle,
        nextPowerOf2: nextPowerOf2,
        previousPowerOf2: previousPowerOf2,
        hypotenuse: hypotenuse,
        mod: mod,
        scale: scale,
        acosh: acosh,
        asinh: asinh,
        atanh: atanh,
        factorialPower: factorialPower,
        truncatedPower: truncatedPower
    }

});