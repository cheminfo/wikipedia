define(["./matrix"],function(Matrix){
    // https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
    function EigenvalueDecomposition(matrix) {
        if(!(matrix instanceof Matrix))
            throw "Argument has to be a Matrix";
        if(!matrix.isSquare())
            throw "Matrix is not a square matrix.";
            
        var n = matrix.columns; this.n = n;
        var V = Matrix.zeros(n,n); this.V = V;
        this.d = new Array(n);
        this.e = new Array(n);
        
        var value = matrix;
        
        this.symmetric = matrix.isSymmetric();
        if(this.symmetric) {
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                    V[i][j] = value[i][j];
                }
            }
            tred2(this);
            tql2(this);
        }
        else {
            var H = Matrix.zeros(n, n); this.H = H;
            this.ort = new Array(n);
            
            for (var j = 0; j < n; j++) {
                for (var i = 0; i < n; i++) {
                    H[i][j] = value[i][j];
                }
            }
            orthes(this);
            hqr2(this);
        }
    }
    
    function tred2(evd) {
        var n = evd.n;
        var d = evd.d;
        var e = evd.e;
        var V = evd.V;
        
        for (var j = 0; j < n; j++)
            d[j] = V[n-1][j];
        
        for(var i = n-1; i > 0; i--) {
            var scale = 0.0;
            var h = 0.0;
            for (var k = 0; k < i; k++)
                scale = scale + Math.abs(d[k]);
            
            if (scale === 0.0) {
                e[i] = d[i-1];
                for (var j = 0; j < i; j++) {
                    d[j] = V[i-1][j];
                    V[i][j] = 0.0;
                    V[j][i] = 0.0;
                }
            }
            else {
                for (var k = 0; k < i; k++) {
                    d[k] /= scale;
                    h += d[k] * d[k];
                }

                var f = d[i-1];
                var g = Math.sqrt(h);
                if (f > 0) g = -g;

                e[i] = scale * g;
                h = h - f * g;
                d[i-1] = f - g;
                for (var j = 0; j < i; j++)
                    e[j] = 0.0;

                for (var j = 0; j < i; j++) {
                    f = d[j];
                    V[j][i] = f;
                    g = e[j] + V[j][j] * f;
                    for (var k = j+1; k <= i-1; k++) {
                        g += V[k][j] * d[k];
                        e[k] += V[k][j] * f;
                    }
                    e[j] = g;
                }
                                
                f = 0.0;
                for (var j = 0; j < i; j++) {
                    e[j] /= h;
                    f += e[j] * d[j];
                }
                
                var hh = f / (h + h);
                for (var j = 0; j < i; j++)
                    e[j] -= hh * d[j];

                for (var j = 0; j < i; j++) {
                    f = d[j];
                    g = e[j];
                    for (var k = j; k <= i-1; k++)
                        V[k][j] -= (f * e[k] + g * d[k]);

                    d[j] = V[i-1][j];
                    V[i][j] = 0.0;
                }
            }
            d[i] = h;
        }
        
        for (var i = 0; i < n-1; i++) {
            V[n-1][i] = V[i][i];
            V[i][i] = 1.0;
            var h = d[i+1];
            if (h !== 0.0) {
                for (var k = 0; k <= i; k++)
                    d[k] = V[k][i+1] / h;

                for (var j = 0; j <= i; j++) {
                    var g = 0.0;
                    for (var k = 0; k <= i; k++)
                        g += V[k][i+1] * V[k][j];
                    for (var k = 0; k <= i; k++)
                        V[k][j] -= g * d[k];
                }
            }

            for (var k = 0; k <= i; k++)
                V[k][i+1] = 0.0;
        }
        
        for (var j = 0; j < n; j++) {
            d[j] = V[n-1][j];
            V[n-1][j] = 0.0;
        }
                
        V[n-1][n-1] = 1.0;
        e[0] = 0.0;
    }
    
    function tql2(evd) {
        var n = evd.n;
        var e = evd.e;
        var d = evd.d;
        var V = evd.V;
        
        for (var i = 1; i < n; i++)
            e[i-1] = e[i];
        
        e[n-1] = 0.0;
        
        var f = 0.0;
        var tst1 = 0.0;
        var eps = Math.pow(2.0,-52.0);
        
        for (var l = 0; l < n; l++) {
            tst1 = Math.max(tst1,Math.abs(d[l]) + Math.abs(e[l]));
            var m = l;
            while (m < n) {
                if (Math.abs(e[m]) <= eps*tst1)
                    break;
                m++;
            }

            if (m > l) {
                var iter = 0;
                do {
                    iter = iter + 1;

                    var g = d[l];
                    var p = (d[l+1] - g) / (2.0 * e[l]);
                    var r = hypotenuse(p,1.0);
                    if (p < 0) {
                        r = -r;
                    }

                    d[l] = e[l] / (p + r);
                    d[l+1] = e[l] * (p + r);
                    var dl1 = d[l+1];
                    var h = g - d[l];
                    for (var i = l+2; i < n; i++) {
                        d[i] -= h;
                    }

                    f = f + h;

                    p = d[m];
                    var c = 1.0;
                    var c2 = c;
                    var c3 = c;
                    var el1 = e[l+1];
                    var s = 0.0;
                    var s2 = 0.0;
                    for (var i = m-1; i >= l; i--) {
                        c3 = c2;
                        c2 = c;
                        s2 = s;
                        g = c * e[i];
                        h = c * p;
                        r = hypotenuse(p,e[i]);
                        e[i+1] = s * r;
                        s = e[i] / r;
                        c = p / r;
                        p = c * d[i] - s * g;
                        d[i+1] = h + s * (c * g + s * d[i]);

                        for (var k = 0; k < n; k++) {
                            h = V[k][i+1];
                            V[k][i+1] = s * V[k][i] + c * h;
                            V[k][i] = c * V[k][i] - s * h;
                        }
                    }
                            
                    p = -s * s2 * c3 * el1 * e[l] / dl1;
                    e[l] = s * p;
                    d[l] = c * p;

                } 
                while (Math.abs(e[l]) > eps*tst1);
            }
            d[l] = d[l] + f;
            e[l] = 0.0;
        }
        
        for (var i = 0; i < n-1; i++) {
            var k = i;
            var p = d[i];
            for (var j = i+1; j < n; j++) {
                if (d[j] < p) {
                    k = j;
                    p = d[j];
                }
            }
                     
            if (k !== i) {
                d[k] = d[i];
                d[i] = p;
                for (var j = 0; j < n; j++) {
                    p = V[j][i];
                    V[j][i] = V[j][k];
                    V[j][k] = p;
                }
            }
        }
    }
    
    function orthes(evd) {
        var n = evd.n;
        var H = evd.H;
        var ort = evd.ort;
        var V = evd.V
    
        var low = 0;
        var high = n-1;
 
        for (var m = low+1; m <= high-1; m++) {
            var scale = 0.0;
            for (var i = m; i <= high; i++)
                scale = scale + Math.abs(H[i][m-1]);

            if (scale !== 0.0) {
                var h = 0.0;
                for (var i = high; i >= m; i--) {
                    ort[i] = H[i][m-1]/scale;
                    h += ort[i] * ort[i];
                }
                        
                var g = Math.sqrt(h);
                if (ort[m] > 0) g = -g;

                h = h - ort[m] * g;
                ort[m] = ort[m] - g;

                for (var j = m; j < n; j++) {
                    var f = 0.0;
                    for (var i = high; i >= m; i--) 
                        f += ort[i]*H[i][j];

                    f = f/h;
                    for (var i = m; i <= high; i++)
                        H[i][j] -= f*ort[i];
                }

                for (var i = 0; i <= high; i++) {
                    var f = 0.0;
                    for (var j = high; j >= m; j--)
                        f += ort[j]*H[i][j];

                    f = f/h;
                    for (var j = m; j <= high; j++)
                        H[i][j] -= f*ort[j];
                }

                ort[m] = scale*ort[m];
                H[m][m-1] = scale*g;
            }
        }
 
        for (var i = 0; i < n; i++)
            for (var j = 0; j < n; j++)
                V[i][j] = (i === j ? 1.0 : 0.0);

        for (var m = high-1; m >= low+1; m--) {
            if (H[m][m-1] !== 0.0) {
                for (var i = m+1; i <= high; i++)
                    ort[i] = H[i][m-1];

                for (var j = m; j <= high; j++) {
                    var g = 0.0;
                    for (var i = m; i <= high; i++)
                        g += ort[i] * V[i][j];

                    g = (g / ort[m]) / H[m][m-1];
                    for (var i = m; i <= high; i++)
                        V[i][j] += g * ort[i];
                }
            }
        }
    }
    
    function hqr2(evd) {
        var nn = evd.n;
        var n = nn-1;
        var low = 0;
        var high = nn-1;
        var eps = Math.pow(2.0,-52.0);
        var exshift = 0.0;
        var p = 0;
        var q = 0;
        var r = 0;
        var s = 0;
        var z = 0;
        var t;
        var w;
        var x;
        var y;
        
        var H = evd.H;
        var V = evd.V;
        var d = evd.d;
        var e = evd.e
        
        var norm = 0.0;
        for (var i = 0; i < nn; i++) {
            if (i < low | i > high) {
                d[i] = H[i][i];
                e[i] = 0.0;
            }
                    
            for (var j = Math.max(i-1,0); j < nn; j++)
                norm = norm + Math.abs(H[i][j]);
        }

        var iter = 0;
        while (n >= low) {
            var l = n;
            while (l > low) {
                s = Math.abs(H[l-1][l-1]) + Math.abs(H[l][l]);
                if (s === 0.0) s = norm;
                if (Math.abs(H[l][l-1]) < eps * s)
                    break;

                l--;
            }

            if (l === n) {
                H[n][n] = H[n][n] + exshift;
                d[n] = H[n][n];
                e[n] = 0.0;
                n--;
                iter = 0;
            } 
            else if (l === n-1) {
                w = H[n][n-1] * H[n-1][n];
                p = (H[n-1][n-1] - H[n][n]) / 2.0;
                q = p * p + w;
                z = Math.sqrt(Math.abs(q));
                H[n][n] = H[n][n] + exshift;
                H[n-1][n-1] = H[n-1][n-1] + exshift;
                x = H[n][n];

                if (q >= 0) {
                    z = (p >= 0) ? (p + z) : (p - z);
                    d[n-1] = x + z;
                    d[n] = d[n-1];
                    if (z !== 0.0) 
                        d[n] = x - w / z;
                    e[n-1] = 0.0;
                    e[n] = 0.0;
                    x = H[n,n-1];
                    s = Math.abs(x) + Math.abs(z);
                    p = x / s;
                    q = z / s;
                    r = Math.sqrt(p * p+q * q);
                    p = p / r;
                    q = q / r;

                    for (var j = n-1; j < nn; j++) {
                        z = H[n-1][j];
                        H[n-1][j] = q * z + p * H[n][j];
                        H[n][j] = q * H[n][j] - p * z;
                    }

                    for (var i = 0; i <= n; i++) {
                        z = H[i][n-1];
                        H[i][n-1] = q * z + p * H[i][n];
                        H[i][n] = q * H[i][n] - p * z;
                    }

                    for (var i = low; i <= high; i++) {
                        z = V[i][n-1];
                        V[i][n-1] = q * z + p * V[i][n];
                        V[i][n] = q * V[i][n] - p * z;
                    }
                }
                else {
                    d[n-1] = x + p;
                    d[n] = x + p;
                    e[n-1] = z;
                    e[n] = -z;
                }
                        
                n = n - 2;
                iter = 0;
            }
            else {
                x = H[n][n];
                y = 0.0;
                w = 0.0;
                if (l < n) {
                    y = H[n-1][n-1];
                    w = H[n][n-1] * H[n-1][n];
                }

                if (iter === 10) {
                    exshift += x;
                    for (var i = low; i <= n; i++)
                        H[i][i] -= x;

                    s = Math.abs(H[n][n-1]) + Math.abs(H[n-1][n-2]);
                    x = y = 0.75 * s;
                    w = -0.4375 * s * s;
                }

                if (iter === 30) {
                    s = (y - x) / 2.0;
                    s = s * s + w;
                    if (s > 0) {
                        s = Math.sqrt(s);
                        if (y < x) s = -s;
                        s = x - w / ((y - x) / 2.0 + s);
                        for (var i = low; i <= n; i++)
                            H[i][i] -= s;
                        exshift += s;
                        x = y = w = 0.964;
                    }
                }

                iter = iter + 1;

                var m = n-2;
                while (m >= l) {
                    z = H[m][m];
                    r = x - z;
                    s = y - z;
                    p = (r * s - w) / H[m+1][m] + H[m][m+1];
                    q = H[m+1][m+1] - z - r - s;
                    r = H[m+2][m+1];
                    s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    p = p / s;
                    q = q / s;
                    r = r / s;
                    if (m === l) 
                        break;
                    if (Math.abs(H[m][m-1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m-1][m-1]) + Math.abs(z) + Math.Abs(H[m+1][m+1])))) 
                        break;
                    m--;
                }

                for (var i = m+2; i <= n; i++) 
                {
                    H[i][i-2] = 0.0;
                    if (i > m+2)
                        H[i][i-3] = 0.0;
                }

                for (var k = m; k <= n-1; k++) {
                    var notlast = (k !== n-1);
                    if (k !== m) {
                        p = H[k][k-1];
                        q = H[k+1][k-1];
                        r = (notlast ? H[k+2][k-1] : 0.0);
                        x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                        if (x !== 0.0) {
                            p = p / x;
                            q = q / x;
                            r = r / x;
                        }
                    }
                            
                    if (x === 0.0)
                        break;

                    s = Math.sqrt(p * p + q * q + r * r);
                    if (p < 0)
                        s = -s;
                                     
                    if (s !== 0) {
                        if (k !== m)
                            H[k][k-1] = -s * x;
                        else 
                            if (l !== m)
                                H[k][k-1] = -H[k][k-1];

                        p = p + s;
                        x = p / s;
                        y = q / s;
                        z = r / s;
                        q = q / p;
                        r = r / p;

                        for (var j = k; j < nn; j++) 
                        {
                            p = H[k][j] + q * H[k+1][j];
                            if (notlast) 
                            {
                                p = p + r * H[k+2][j];
                                H[k+2][j] = H[k+2][j] - p * z;
                            }
                            
                            H[k][j] = H[k][j] - p * x;
                            H[k+1][j] = H[k+1][j] - p * y;
                        }

                        for (var i = 0; i <= Math.min(n,k+3); i++) {
                            p = x * H[i][k] + y * H[i][k+1];
                            if (notlast) {
                                p = p + z * H[i][k+2];
                                H[i][k+2] = H[i][k+2] - p * r;
                            }
                            
                            H[i][k] = H[i][k] - p;
                            H[i][k+1] = H[i][k+1] - p * q;
                        }

                        for (var i = low; i <= high; i++) {
                            p = x * V[i][k] + y * V[i][k+1];
                            if (notlast) {
                                p = p + z * V[i][k+2];
                                V[i][k+2] = V[i][k+2] - p * r;
                            }
                            
                            V[i][k] = V[i][k] - p;
                            V[i][k+1] = V[i][k+1] - p * q;
                        }
                    }
                }
            }
        }
                
        if (norm === 0.0) {
            return;
        }
 
        for (n = nn-1; n >= 0; n--) {
            p = d[n];
            q = e[n];

            if (q === 0) {
                var l = n;
                H[n][n] = 1.0;
                for (var i = n-1; i >= 0; i--) {
                    w = H[i][i] - p;
                    r = 0.0;
                    for (var j = l; j <= n; j++) 
                        r = r + H[i][j] * H[j][n];
                    
                    if (e[i] < 0.0) {
                        z = w;
                        s = r;
                    }
                    else {
                        l = i;
                        if (e[i] === 0.0) {
                            H[i][n] = (w !== 0.0) ? (-r / w) : (-r / (eps * norm));
                        }
                        else {
                            x = H[i][i+1];
                            y = H[i+1][i];
                            q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                            t = (x * s - z * r) / q;
                            H[i][n] = t;
                            H[i+1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                        }

                        t = Math.abs(H[i][n]);
                        if ((eps * t) * t > 1) 
                            for (var j = i; j <= n; j++)
                                H[j][n] = H[j][n] / t;
                    }
                }
            }
            else if (q < 0) {
                var l = n-1;

                if (Math.abs(H[n][n-1]) > Math.abs(H[n-1][n])) {
                    H[n-1][n-1] = q / H[n][n-1];
                    H[n-1][n] = -(H[n][n] - p) / H[n][n-1];
                }
                else {
                    cdiv(evd,0.0,-H[n-1][n],H[n-1][n-1]-p,q);
                    H[n-1][n-1] = evd.cdivr;
                    H[n-1][n] = evd.cdivi;
                }
                        
                H[n][n-1] = 0.0;
                H[n][n] = 1.0;
                for (var i = n-2; i >= 0; i--) {
                    var ra,sa,vr,vi;
                    ra = 0.0;
                    sa = 0.0;
                    for (var j = l; j <= n; j++) {
                        ra = ra + H[i][j] * H[j][n-1];
                        sa = sa + H[i][j] * H[j][n];
                    }
                    
                    w = H[i][i] - p;

                    if (e[i] < 0.0) {
                        z = w;
                        r = ra;
                        s = sa;
                    }
                    else {
                        l = i;
                        if (e[i] === 0) {
                            cdiv(evd,-ra,-sa,w,q);
                            H[i][n-1] = evd.cdivr;
                            H[i][n] = evd.cdivi;
                        } 
                        else {
                            x = H[i][i+1];
                            y = H[i+1][i];
                            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                            vi = (d[i] - p) * 2.0 * q;
                            if (vr === 0.0 & vi === 0.0) 
                                vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                            cdiv(evd,x*r-z*ra+q*sa,x*s-z*sa-q*ra,vr,vi);
                            H[i][n-1] = evd.cdivr;
                            H[i][n] = evd.cdivi;
                            if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                                H[i+1][n-1] = (-ra - w * H[i][n-1] + q * H[i][n]) / x;
                                H[i+1][n] = (-sa - w * H[i][n] - q * H[i][n-1]) / x;
                            }
                            else {
                                cdiv(evd,-r-y*H[i][n-1],-s-y*H[i][n],z,q);
                                H[i+1][n-1] = evd.cdivr;
                                H[i+1][n] = evd.cdivi;
                            }
                        }

                        t = Math.max(Math.abs(H[i][n-1]),Math.abs(H[i][n]));
                        if ((eps * t) * t > 1) {
                            for (var j = i; j <= n; j++) {
                                H[j][n-1] = H[j][n-1] / t;
                                H[j][n] = H[j][n] / t;
                            }
                        }
                    }
                }
            }
        }

        for (var i = 0; i < nn; i++) 
            if (i < low | i > high) 
                for (var j = i; j < nn; j++) 
                    V[i][j] = H[i][j];

        for (var j = nn-1; j >= low; j--) {
            for (var i = low; i <= high; i++) {
                z = 0.0;
                for (var k = low; k <= Math.min(j,high); k++)
                    z = z + V[i][k] * H[k][j];
                V[i][j] = z;
            }
        }
    }
    
    function cdiv(evd, xr, xi, yr, yi) {
        var r;
        var d;
        if (Math.abs(yr) > Math.abs(yi)) 
        {
            r = yi/yr;
            d = yr + r*yi;
            evd.cdivr = (xr + r*xi)/d;
            evd.cdivi = (xi - r*xr)/d;
        } 
        else 
        {
            r = yr/yi;
            d = yi + r*yr;
            evd.cdivr = (r*xr + xi)/d;
            evd.cdivi = (r*xi - xr)/d;
        }
    }

    EigenvalueDecomposition.prototype = {
        get realEigenvalues() {
            return this.d;
        },
        get imaginaryEigenvalues() {
            return this.e;
        },
        get eigenvectorMatrix() {
            return this.V;
        },
        get diagonalMatrix() {
            var n = this.n;
            var e = this.e;
            var d = this.d
            var X = Matrix.empty(n, n);
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++)
                    X[i][j] = 0.0;

                X[i][i] = d[i];
                if (e[i] > 0) {
                    X[i][i+1] = e[i];
                }
                else if (e[i] < 0) {
                    X[i][i-1] = e[i];
                }
            }
            
            return X;
        }
    };
    
    // https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
    function LuDecomposition(matrix) {
        if(!(matrix instanceof Matrix))
            throw "Argument has to be a Matrix";
            
        this.LU = matrix.clone();
        var lu = this.LU;
        var rows = matrix.rows;
        var columns = matrix.columns;
        var pivotVector = new Array(rows);
        for(var i=0; i<rows; i++) {
            pivotVector[i] = i;
        }
        
        var pivotSign = 1;
        var LUrowi;
        var LUcolj = new Array(rows);
        
        for(var j=0; j<columns; j++) {
        
            for(var i=0; i<rows; i++) {
                LUcolj[i] = lu[i][j];
            }
            
            for(var i=0; i<rows; i++) {
                LUrowi = lu[i];
                var kmax = Math.min(i,j)
                var s = 0.0;
                for(var k=0; k<kmax; k++) {
                    s += LUrowi[k]*LUcolj[k];
                }
                LUrowi[j] = LUcolj[i] -= s;
            }
            
            var p = j;
            for(var i=j+1; i<rows; i++) {
                if(Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                    p = i;
                }
            }
            
            if(p !== j) {
                for(var k=0; k<columns; k++) {
                    var t = lu[p][k];
                    lu[p][k] = lu[j][k];
                    lu[j][k] = t;
                }
                
                var v = pivotVector[p];
                pivotVector[p] = pivotVector[j];
                pivotVector[j] = v;
                
                pivotSign = -pivotSign;
            }
            
            if(j < rows & lu[j][j] !== 0.0) {
                for(var i=j+1; i<rows; i++) {
                    lu[i][j] /= lu[j][j];
                }
            }
        }
        this.pivotVector = pivotVector;
        this.pivotSign = pivotSign;
    }
    
    LuDecomposition.prototype = {
        isNonSingular : function() {
            var col = this.LU.columns;
            var data = this.LU;
            for(var j=0; j<col; j++)
                if(data[j][j]===0)
                    return false;
            return true;
        },
        determinant : function() {
            if(!this.LU.isSquare())
                throw "Matrix must be square";
            var determinant = this.pivotSign, col = this.LU.columns, data = this.LU;
            for(var j=0; j<col; j++)
                determinant *= data[j][j];
            return determinant;
        },
        lowerTriangularFactor : function() {
            var rows = this.LU.rows;
            var columns = this.LU.columns;
            var X = Matrix.empty(rows, columns);
            var data=this.LU;
            for(var i=0; i<rows; i++) {
                for(var j=0; j<columns; j++) {
                    if(i > j)
                        X[i][j] = data[i][j];
                    else if (i===j)
                        X[i][j] = 1;
                    else
                        X[i][j] = 0;
                }
            }
            return X;
        },
        upperTriangularFactor : function() {
            var rows = this.LU.rows;
            var columns = this.LU.columns;
            var X = Matrix.empty(rows, columns);
            var data=this.LU;
            for(var i=0; i<rows; i++) {
                for(var j=0; j<columns; j++) {
                    if(i <= j)
                        X[i][j] = data[i][j];
                    else
                        X[i][j] = 0;
                }
            }
            return X;
        },
        pivotPermutationVector : function() {
            /*var rows = this.LU.rows;
            var p = new Array(rows);
            for(var i=0; i<rows; i++) {
                p[i] = this.pivotVector[i];
            }
            return p;*/
            return this.pivotVector.slice();
        },
        solve : function(value) {
            if(!(value instanceof Matrix))
                throw "Argument has to be a Matrix.";
            if(this.LU.rows !== value.rows)
                throw "Invalid matrix dimensions.";
            if(!this.isNonSingular())
                throw "Matrix is singular.";
            
            var count = value.columns;
            var X = value.subMatrixRow(this.pivotVector, 0, count-1);
            var rows = this.LU.rows;
            var columns = this.LU.columns;
            var lu = this.LU;

            for (var k = 0; k < columns; k++) {
                for (var i = k + 1; i < columns; i++) {
                    for (var j = 0; j < count; j++) {
                        X[i][j] -= X[k][j] * lu[i][k];
                    }
                }
            }
            for (var k = columns - 1; k >= 0; k--) {
                for (var j = 0; j < count; j++) {
                    X[k][j] /= lu[k][k];
                }
                for (var i = 0; i < k; i++) {
                    for (var j = 0; j < count; j++) {
                        X[i][j] -= X[k][j] * lu[i][k];
                    }
                }
            }
            return X;
        }
    };
    
    //https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
    function QrDecomposition(value) {
        if(!(value instanceof Matrix))
            throw "Argument has to be a Matrix";
            
        this.QR = value.clone();
        var qr = this.QR;
        var m = value.rows;
        var n = value.columns;
        this.Rdiag = new Array(n);
        
        for(var k=0; k<n; k++) {
            var nrm = 0;
            for(var i=k; i<m; i++) {
                nrm = hypotenuse(nrm,qr[i][k]);
            }
            if(nrm !== 0) {
                if(qr[k][k] < 0) {
                    nrm = -nrm;
                }
                for(var i=k; i<m; i++) {
                    qr[i][k] /= nrm;
                }
                qr[k][k] += 1.0;
                for(var j=k+1; j<n; j++) {
                    var s = 0.0;
                    for(var i=k; i<m; i++) {
                        s += qr[i][k]*qr[i][j];
                    }
                    s = -s/qr[k][k];
                    for(var i=k; i<m; i++) {
                        qr[i][j] += s*qr[i][k];
                    }
                }
            }
            this.Rdiag[k] = -nrm;
        }
    }
    
    QrDecomposition.prototype = {
        solve : function(value) {
            if(!(value instanceof Matrix))
                throw "Argument has to be a Matrix";
            if(value.rows !== this.QR.rows)
                throw "Matrix row dimensions must agree.";
            if(!this.isFullRank())
                throw "Matrix is rank deficient.";
            
            var count = value.columns;
            var X = value.clone();
            var m = this.QR.rows;
            var n = this.QR.columns;
            var qr = this.QR;
            
            for(var k=0; k<n; k++) {
                for(var j=0; j<count; j++) {
                    var s = 0.0;
                    for(var i=k; i<m; i++) {
                        s += qr[i][k] * X[i][j];
                    }
                    s = -s / qr[k][k];
                    for(var i=k; i<m; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
            for(var k = n-1; k >= 0; k--) {
                for(var j = 0; j < count; j++) {
                    X[k][j] /= this.Rdiag[k];
                }
                for(var i = 0; i < k; i++) {
                    for(var j = 0; j < count; j++) {
                        X[i][j] -= X[k][j] * qr[i][k];
                    }
                }
            }
            
            return X.subMatrix(0, n-1, 0, count-1);
        },
        isFullRank : function() {
            var columns = this.QR.columns;
            for(var i = 0; i < columns; i++) {
                if(this.Rdiag[i] === 0) {
                    return false;
                }
            }
            return true;
        },
        upperTriangularFactor : function() {
            var n = this.QR.columns;
            var X = Matrix.empty(n, n);
            var qr = this.QR;
            for(var i = 0; i < n; i++) {
                for(var j = 0; j < n; j++) {
                    if(i < j)
                        X[i][j] = qr[i][j];
                    else if (i === j)
                        X[i][j] = this.Rdiag[i];
                    else
                        X[i][j] = 0.0;
                }
            }
            return X;
        },
        orthogonalFactor : function() {
            var rows = this.QR.rows, columns = this.QR.columns;
            var X = Matrix.empty(rows, columns);
            var qr = this.QR;
            
            for(var k = columns - 1; k >= 0; k--) {
                for(var i = 0; i < rows; i++) {
                    X[i][k] = 0.0;
                }
                X[k][k] = 1.0;
                for(var j = k; j < columns; j++) {
                    if(qr[k][k] !== 0) {
                        var s = 0.0;
                        for(var i = k; i < rows; i++) {
                            s += qr[i][k] * X[i][j];
                        }
                        
                        s = -s / qr[k][k];
                        
                        for(var i = k; i < rows; i++) {
                            X[i][j] += s * qr[i][k];
                        }
                    }
                }
            }
            return X;
        }
    };
    
    // https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
    function SingularValueDecomposition(value, options) {
        if(!(value instanceof Matrix))
            throw "Argument has to be a Matrix";
        
        options = options ? options : {};
        
        var a = value.clone();
        var m = value.rows, n = value.columns;
        var nu = Math.min(m,n);
        var s = new Array(Math.min(m+1,n));
        var U = Matrix.zeros(m, nu);
        var V = Matrix.zeros(n, n);
        var e = new Array(n), work = new Array(m);
        
        var wantu = true, wantv = true;
        if(options.computeLeftSingularVectors===false)
            wantu = false;
        if(options.computeRightSingularVectors===false)
            wantv = false;
        var autoTranspose = options.autoTranspose===true ? true : false;
        
        var swapped = false;
        if(m < n) {
            if(!autoTranspose) {
                console.warn("WARNING: Computing SVD on a matrix with more columns than rows.");
            }
            else {
                a = a.transpose();
                m = a.rows;
                n = a.columns;
                swapped = true;
                var aux = wantu;
                wantu = wantv;
                wantv = aux;
            }
        }
        
        var nct = Math.min(m-1,n);
        var nrt = Math.max(0,Math.min(n-2,m));
        for(var k = 0, max = Math.max(nct,nrt); k < max; k++) {
            if(k < nct) {
                s[k] = 0;
                for (var i = k; i < m; i++) {
                    s[k] = hypotenuse(s[k],a[i][k]);
                }
                if (s[k] !== 0.0) {
                    if (a[k][k] < 0.0) {
                        s[k] = -s[k];
                    }
                    for (var i = k; i < m; i++) {
                        a[i][k] /= s[k];
                    }
                    a[k][k] += 1.0;
                }
                s[k] = -s[k];
            }
            
            for (var j = k+1; j < n; j++) {
                if ((k < nct) & (s[k] !== 0.0)) {
                    var t = 0;
                    for (var i = k; i < m; i++)
                        t += a[i][k]*a[i][j];
                    t = -t/a[k][k];
                    for (var i = k; i < m; i++)
                        a[i][j] += t*a[i][k];
                }
                e[j] = a[k][j];
            }
            
            if (wantu & (k < nct)) {
                for (var i = k; i < m; i++)
                    U[i][k] = a[i][k];
            }

            if (k < nrt) {
                e[k] = 0;
                for (var i = k+1; i < n; i++) {
                    e[k] = hypotenuse(e[k],e[i]);
                }
                if (e[k] !== 0.0) {
                    if (e[k+1] < 0.0)
                        e[k] = -e[k];
                    for (var i = k+1; i < n; i++)
                        e[i] /= e[k];
                    e[k+1] += 1.0;
                }
                e[k] = -e[k];
                if ((k+1 < m) & (e[k] !== 0.0)) {
                    for (var i = k+1; i < m; i++)
                        work[i] = 0.0;
                    for (var j = k+1; j < n; j++)
                        for (var i = k+1; i < m; i++)
                            work[i] += e[j]*a[i][j];
                    for (var j = k+1; j < n; j++) {
                        var t = -e[j]/e[k+1];
                        for (var i = k+1; i < m; i++)
                            a[i][j] += t*work[i];
                    }
                }
                if (wantv) {
                    for (var i = k+1; i < n; i++)
                        V[i][k] = e[i];
                }
            }
        }
        
        var p = Math.min(n,m+1);
        if(nct < n) s[nct] = a[nct][nct];
        if (m < p) s[p-1] = 0.0;
        if (nrt+1 < p) e[nrt] = a[nrt][p-1];
        e[p-1] = 0.0;
        
        if (wantu) {
            for (var j = nct; j < nu; j++) {
                for (var i = 0; i < m; i++) 
                    U[i][j] = 0.0;
                U[j][j] = 1.0;
            }
            for (var k = nct-1; k >= 0; k--) {
                if (s[k] !== 0.0) {
                    for (var j = k+1; j < nu; j++) {
                        var t = 0;
                        for (var i = k; i < m; i++) 
                            t += U[i][k]*U[i][j];
                        t = -t/U[k][k];
                        for (var i = k; i < m; i++)
                            U[i][j] += t*U[i][k];
                    }
                    for (var i = k; i < m; i++ )
                        U[i][k] = -U[i][k];
                    U[k][k] = 1.0 + U[k][k];
                    for (var i = 0; i < k-1; i++) 
                        U[i][k] = 0.0;
                } 
                else {
                    for (var i = 0; i < m; i++)
                        U[i][k] = 0.0;
                    U[k][k] = 1.0;
                }
            }
        }
        
        if (wantv) {
            for (var k = n-1; k >= 0; k--) {
                if ((k < nrt) & (e[k] !== 0.0)) {
                    for (var j = k+1; j < nu; j++) {
                        var t = 0;
                        for (var i = k+1; i < n; i++) 
                            t += V[i][k]*V[i][j];
                        t = -t/V[k+1][k];
                        for (var i = k+1; i < n; i++)
                            V[i][j] += t*V[i][k];
                    }
                }
                for (var i = 0; i < n; i++) 
                    V[i][k] = 0.0;
                V[k][k] = 1.0;
            }
        }
        
        var pp = p-1;
        var iter = 0;
        var eps = Math.pow(2.0, -52.0);
        while(p > 0) {
            var k, kase;
            for (k = p-2; k >= -1; k--) {
                if (k === -1)
                    break;
                if (Math.abs(e[k]) <= eps*(Math.abs(s[k]) + Math.abs(s[k+1]))) {
                    e[k] = 0.0;
                    break;
                }
            }
            if (k === p-2) {
                kase = 4;
            }
            else {
                var ks;
                for (ks = p-1; ks >= k; ks--) {
                    if (ks === k) 
                        break;
                    var t = (ks !== p ? Math.abs(e[ks]) : 0.0) + (ks !== k+1 ? Math.abs(e[ks-1]) : 0.0);
                    if (Math.abs(s[ks]) <= eps*t) {
                        s[ks] = 0.0;
                        break;
                    }
                }
                if (ks === k) 
                    kase = 3;
                else if (ks === p-1) 
                    kase = 1;
                else {
                    kase = 2;
                    k = ks;
                }
            }
                                        
            k++;
            
            switch(kase) {
                case 1: {
                    var f = e[p-2];
                    e[p-2] = 0.0;
                    for (var j = p-2; j >= k; j--) {
                        var t = hypotenuse(s[j],f);
                        var cs = s[j]/t;
                        var sn = f/t;
                        s[j] = t;
                        if (j !== k) {
                            f = -sn*e[j-1];
                            e[j-1] = cs*e[j-1];
                        }
                        if (wantv) {
                            for (var i = 0; i < n; i++) {
                                t = cs*V[i][j] + sn*V[i][p-1];
                                V[i][p-1] = -sn*V[i][j] + cs*V[i][p-1];
                                V[i][j] = t;
                            }
                        }
                    }
                }
                    break;
                case 2 : {
                    var f = e[k-1];
                    e[k-1] = 0.0;
                    for (var j = k; j < p; j++) {
                        var t = hypotenuse(s[j],f);
                        var cs = s[j]/t;
                        var sn = f/t;
                        s[j] = t;
                        f = -sn*e[j];
                        e[j] = cs*e[j];
                        if (wantu) {
                            for (var i = 0; i < m; i++) {
                                t = cs*U[i][j] + sn*U[i][k-1];
                                U[i][k-1] = -sn*U[i][j] + cs*U[i][k-1];
                                U[i][j] = t;
                            }
                        }
                    }
                }
                    break;
                case 3 : {
                    var scale = Math.max(Math.max(Math.max(Math.max(Math.abs(s[p-1]),Math.abs(s[p-2])),Math.abs(e[p-2])), Math.abs(s[k])),Math.abs(e[k]));
                    var sp = s[p-1]/scale;
                    var spm1 = s[p-2]/scale;
                    var epm1 = e[p-2]/scale;
                    var sk = s[k]/scale;
                    var ek = e[k]/scale;
                    var b = ((spm1 + sp)*(spm1 - sp) + epm1*epm1)/2.0;
                    var c = (sp*epm1)*(sp*epm1);
                    var shift = 0.0;
                    if ((b !== 0.0) | (c !== 0.0)) {
                        shift = Math.sqrt(b*b + c);
                        if (b < 0.0)
                            shift = -shift;
                        shift = c/(b + shift);
                    }
                    var f = (sk + sp)*(sk - sp) + shift;
                    var g = sk*ek;
                    for (var j = k; j < p-1; j++) {
                        var t = hypotenuse(f,g);
                        var cs = f/t;
                        var sn = g/t;
                        if (j !== k)
                            e[j-1] = t;
                        f = cs*s[j] + sn*e[j];
                        e[j] = cs*e[j] - sn*s[j];
                        g = sn*s[j+1];
                        s[j+1] = cs*s[j+1];
                        if (wantv) {
                            for (var i = 0; i < n; i++) {
                                t = cs*V[i][j] + sn*V[i][j+1];
                                V[i][j+1] = -sn*V[i][j] + cs*V[i][j+1];
                                V[i][j] = t;
                            }
                        }
                        t = hypotenuse(f, g);
                        cs = f/t;
                        sn = g/t;
                        s[j] = t;
                        f = cs*e[j] + sn*s[j+1];
                        s[j+1] = -sn*e[j] + cs*s[j+1];
                        g = sn*e[j+1];
                        e[j+1] = cs*e[j+1];
                        if (wantu && (j < m-1)) {
                             for (var i = 0; i < m; i++) {
                                t = cs*U[i][j] + sn*U[i][j+1];
                                U[i][j+1] = -sn*U[i][j] + cs*U[i][j+1];
                                U[i][j] = t;
                            }
                        }
                    }
                    e[p-2] = f;
                    iter = iter + 1;
                }
                    break;
                case 4: {
                    if (s[k] <= 0.0) {
                        s[k] = (s[k] < 0.0 ? -s[k] : 0.0);
                        if (wantv)
                            for (var i = 0; i <= pp; i++)
                                V[i][k] = -V[i][k];
                    }
                    while (k < pp) {
                        if (s[k] >= s[k+1]) 
                            break;
                        var t = s[k];
                        s[k] = s[k+1];
                        s[k+1] = t;
                        if (wantv && (k < n-1)) 
                            for (var i = 0; i < n; i++) {
                                t = V[i][k+1]; 
                                V[i][k+1] = V[i][k]; 
                                V[i][k] = t;
                            }
                        if (wantu && (k < m-1)) 
                            for (var i = 0; i < m; i++) {
                                t = U[i][k+1]; 
                                U[i][k+1] = U[i][k]; 
                                U[i][k] = t;
                            }
                        k++;
                    }
                    iter = 0;
                    p--;
                }
                    break;
            }
        }
        
        this.m = m;
        this.n = n;
        this.s = s;
        if(swapped) {
            this.U = V;
            this.V = U;
        } else {
            this.U = U;
            this.V = V;
        }
    }
    
    SingularValueDecomposition.prototype = {
        get condition() {
            return this.s[0] / this.s[Math.min(this.m,this.n) - 1];
        },
        get norm2() {
            return this.s[0];
        },
        get rank() {
            var eps = Math.pow(2.0,-52.0);
            var tol = Math.max(this.m,this.n)*this.s[0]*eps;
            var r = 0;
            var s = this.s;
            for(var i = 0, ii = s.length; i < ii; i++) {
                if(s[i] > tol)
                    r++;
            }
            return r;
        },
        get diagonal() {
            return this.s;
        },
        // https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
        get threshold() {
            return (Math.pow(2.0,-52.0)/2) * Math.max(this.m,this.n) * this.s[0];
        },
        solve : function(value) {
            
            var Y = value;
            var e = this.threshold;
            var scols = this.s.length;
            
            var Ls = Matrix.zeros(scols, scols);
            
            for (var i = 0; i < scols; i++) {
                if (Math.abs(this.s[i]) <= e)
                    Ls[i][i] = 0;
                else Ls[i][i] = 1 / this.s[i];
            }
            

            var VL = this.V.mmul(Ls);
            
            var vrows = this.V.rows;
            var urows = this.U.rows;
            var VLU = Matrix.zeros(vrows, urows);
            for (var i = 0; i < vrows; i++) {
                for (var j = 0; j < urows; j++) {
                    var sum = 0;
                    for (var k = 0; k < scols; k++)
                        sum += VL[i][k] * this.U[j][k];
                    VLU[i][j] = sum;
                }
            }

            return VLU.mmul(Y);
        },
        solveForDiagonal : function(value) {
            return this.solve(Matrix.diag(value));
        }
    };
    
    // https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
    function CholeskyDecomposition(value) {
        if(!(value instanceof Matrix))
            throw "Argument has to be a Matrix";
        if(!value.isSquare())
            throw "Matrix is not square";
        
        var dimension = value.rows;
        this.L = Matrix.empty(dimension,dimension);
        
        var a = value;
        var l = this.L;
        
        this.positiveDefinite = true;
        this.symmetric = true;
        
        for(var j = 0; j < dimension; j++) {
            var Lrowj = l[j];
            var d = 0.0;
            for (var k = 0; k < j; k++) {
                var Lrowk = l[k];
                var s = 0.0;
                for (var i = 0; i < k; i++) {
                    s += Lrowk[i] * Lrowj[i];
                }
                Lrowj[k] = s = (a[j][k] - s) / l[k][k];
                d = d + s*s;
                
                this.symmetric = this.symmetric & (a[k][j] == a[j][k]); 
            }

            d = a[j][j] - d;
            
            this.positiveDefinite = this.positiveDefinite & (d > 0.0);
            l[j][j] = Math.sqrt(Math.max(d,0.0));
            for (var k = j + 1; k < dimension; k++) {
                l[j][k] = 0.0;
            }
        }
    }
    
    CholeskyDecomposition.prototype = {
        isSymmetric : function() {
            return this.symmetric;
        },
        isPositiveDefinite : function() {
            return this.positiveDefinite;
        },
        get leftTriangularFactor() {
            return this.L;
        },
        solve : function(value) {
            if(!(value instanceof Matrix))
                throw "Argument has to be a Matrix.";
            if(value.rows !== this.L.rows)
                throw "Matrix dimensions do not match.";
            if(!this.symmetric)
                throw "Matrix is not symmetric";
            if(!this.positiveDefinite)
                throw "Matrix is not positive definite";
            
            var dimension = this.L.rows;
            var count = value.columns;
            var B = value.clone()
            var l = this.L;

            for (var k = 0; k < dimension; k++) {
                for (var j = 0; j < count; j++) {
                    for (var i = 0; i < k; i++) {
                        B[k][j] -= B[i][j] * l[k][i];
                    }
                    B[k][j] /= l[k][k];
                }
            }

            for (var k = dimension - 1; k >= 0; k--) {
                for (var j = 0; j < count; j++) {
                    for (var i = k + 1; i < dimension; i++) {
                        B[k][j] -= B[i][j] * l[i][k];
                    }
                    B[k][j] /= l[k][k];
                }
            }

            return B;
        }
    };
    
    function hypotenuse(a, b) {
        if(Math.abs(a) > Math.abs(b)) {
            var r = b / a;
            return Math.abs(a) * Math.sqrt(1 + r * r);
        }
        if(b !== 0) {
            var r = a / b;
            return Math.abs(b) * Math.sqrt(1 + r * r);
        }
        
        return 0.0;
    }
    
    return {
        LuDecomposition: LuDecomposition,
        QrDecomposition: QrDecomposition,
        SingularValueDecomposition: SingularValueDecomposition,
        EigenvalueDecomposition: EigenvalueDecomposition,
        CholeskyDecomposition: CholeskyDecomposition
    };
    
});