define(['components/jit/Jit/jit'], function($jit) {
    //Here we implement custom node rendering types for the RGraph  
    //Using this feature requires some javascript and canvas experience.  
    $jit.RGraph.Plot.NodeTypes.implement({
        //This node type is used for plotting the upper-left pie chart  
        'image': {
            'render': function(node, canvas) {
                function paintImage(image) {
                    var ratio = dim / ((image.width > image.height) ? image.width : image.height);
                    ctx.drawImage(image, pos.x - (image.width / 2 * ratio), pos.y - (image.height / 2 * ratio), image.width * ratio, image.height * ratio);
                }
                $jit.imageCache = $jit.imageCache || [];
                var pos = node.pos.getc(true),
                        dim = node.getData('dim');
                if (node.data.image) {
                    var ctx = canvas.getCtx();
                    var image = new Image();
                    image.src = node.data.image.value ? node.data.image.value : node.data.image;
                    if ($jit.imageCache[image.src]) {
                        image = $jit.imageCache[image.src];
                        paintImage(image);
                    } else {
                        image.onload = function() {
                            paintImage(image);
                            $jit.imageCache[image.src] = image;
                        }
                    }
                } else {
                    this.nodeHelper.circle.render('fill', pos, dim, canvas);
                }
            },
            'contains': function(node, pos) {
                var npos = node.pos.getc(true),
                        dim = node.getData('dim');
                return this.nodeHelper.circle.contains(npos, pos, dim);
            }
        },
        'piechart': {
            'render': function(node, canvas) {
                var pos = node.pos.getc(true),
                    dim = node.getData('dim');
                if (node.data.piechart) {
                    var ctx = canvas.getCtx();
                    var x = pos.x, y = pos.y, angle = 0, pie = node.data.piechart, l = pie.length;
                    var total = 0
                    for(var i = 0; i < l; total += pie[i++][0]);
                    var rapport = Math.PI*2/total;
                    for(var i = 0; i < l; i++) {
                        var slice = pie[i], sliceAngle = slice[0]*rapport;
                        ctx.beginPath();
                        ctx.arc(x, y, dim, angle, angle+sliceAngle);
                        ctx.lineTo(x, y);
                        ctx.fillStyle = slice[1];
                        ctx.fill();
                        angle += sliceAngle;
                    }
                } else {
                    this.nodeHelper.circle.render('fill', pos, dim, canvas);
                }
            },
            'contains': function(node, pos) {
                var npos = node.pos.getc(true),
                        dim = node.getData('dim');
                return this.nodeHelper.circle.contains(npos, pos, dim);
            }
        }
    })
});