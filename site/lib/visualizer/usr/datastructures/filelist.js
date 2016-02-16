'use strict';

define(
    [
        'src/data/structures',
        'src/util/typerenderer',

        // Add you own types here
        './example'

    ],
    function (Structures, Renderer) {
        for (var i = 2, l = arguments.length; i < l; i++) {
            Structures[arguments[i].typeName] = arguments[i].structure;
            Renderer.addType([arguments[i].typeName], arguments[i].renderer);
        }
    }
);
