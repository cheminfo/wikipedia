define(function() {

    function check(data, options) {
        var options=options || {};
        // we will try to determine the type of the value
        // type could be:
        // 1DY, 1DXY, 2DXYXY, 2DXXYY
        var type=options.type;

        if (! type) { // auto determination of type
            if (Array.isArray(value)) { //
                if (value[0] && Array.isArray(value)) {
                    if (Array.isArray(value[0])) {
                        if (value.length==2) {
                            type="2DXXYY";
                        } else {
                            type="2DXYXY";
                        }
                    } else { // 1D
                        type="1DY"; // by default we say it is just Y points ... dangerous !
                    }
                }
            }
        }
        var chart={};

        switch (type) {
            case "1DY":
                chart={
                    data: {
                        y:value
                    }
                }
                break;
            case "1DXY":
                var x=new Array(value.length/2);
                var y=new Array(value.length/2);
                for (var i=0; i<value.length; i=i+2) {
                    x[i/2]=value[i];
                    y[i/2]=value[i+1];
                }
                chart={
                    data: {
                        x:x,
                        y:y
                    }
                }
                break;
            case "2DXYXY":
                var x=new Array(value.length);
                var y=new Array(value.length);
                for (var i=0; i<value.length; i++) {
                    x[i]=value[i][0];
                    y[i]=value[i][1];
                }
                chart={
                    data: {
                        x:x,
                        y:y
                    }
                }
                break;
            case "2DXXYY":
                chart={
                    data: {
                        x:value[0],
                        y:value[1]
                    }
                }
                break;
            default:
                chart=value;
        }

        // We will now check the chart
        // Is there always some x data ????
        if (! chart.data) {
            chart.data=[];
        }
        if (! Array.isArray(chart.data)) {
            chart.data=[chart.data]
        }
        for (var i=0; i<chart.data.length; i++) {
            var data=chart.data[i];
            if (! data.y || ! Array.isArray(data.y)) data.y=[];
            if (data.y.length>1) {
                if (! data.x || ! Array.isArray(data.x) || data.x.length!=data.y.length) {
                    var minX = options.minX || 0;
                    var maxX = options.maxX || (data.y.length - 1);
                    var step = (maxX - minX) / (data.y.length - 1);
                    data.x=new Array(data.y.length);
                    for (var j = 0; j < data.y.length; j++) {
                        data.x[j]=minX + step * j;
                    }
                }
            }
        }

        return chart;
    }



    return {
        check: check
    };
});