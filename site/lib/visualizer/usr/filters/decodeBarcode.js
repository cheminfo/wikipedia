'use strict';

define(function () {
    var reg = new RegExp('^data:([^;]+);base64,(.+)$');

    return {
        filter: function (dataObject, resolve, reject) {
            var image = new Image();
            var $c = $('<canvas/>');
            var Canvas = $c[0];
            var ctx = Canvas.getContext('2d');
            Canvas.width = 640;
            Canvas.height = 480;
            var resultArray = [];
            image.onload = doDecode;

            image.src = dataObject.get();



            function doDecode() {
                var workerCount = 0;
                function receiveMessage(e) {
                    if (e.data.success === 'log') {
                        return;
                    }
                    if (e.data.finished) {
                        workerCount--;
                        if (workerCount) {
                            if (resultArray.length == 0) {
                                DecodeWorker.postMessage({ImageData: ctx.getImageData(0, 0, Canvas.width, Canvas.height).data, Width: Canvas.width, Height: Canvas.height, cmd: 'flip'});
                            } else {
                                workerCount--;
                            }
                        }
                    }
                    if (e.data.success) {
                        var tempArray = e.data.result;
                        for (var i = 0; i < tempArray.length; i++) {
                            if (resultArray.indexOf(tempArray[i]) == -1) {
                                resultArray.push(tempArray[i]);
                            }
                        }

                        var filteredResult = [];
                        for (var i = 0; i < resultArray.length; i++) {
                            var m = resultArray[i].match(/^([^:]*):(.*)$/);
                            if (m[1] && m[2]) {
                                filteredResult.push({
                                    encoding: m[1],
                                    encoded: m[2]
                                });
                            }
                        }
                        return resolve(filteredResult);
                    } else {
                        if (resultArray.length === 0 && workerCount === 0) {
                            return reject('Docuding failed');
                        }
                    }
                }
                var DecodeWorker = new Worker('lib/BarcodeReader/src/DecoderWorker.js');
                DecodeWorker.onmessage = receiveMessage;

                ctx.drawImage(image, 0, 0, Canvas.width, Canvas.height);
                resultArray = [];
                workerCount = 2;
                DecodeWorker.postMessage({ImageData: ctx.getImageData(0, 0, Canvas.width, Canvas.height).data, Width: Canvas.width, Height: Canvas.height, cmd: 'normal'});
            }

            // Expects a dataURL image
        }
    };

});
