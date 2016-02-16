'use strict';

define(function () {
    return {

        typeName: 'MyOwnType',
        structure: {},
        renderer: {
            toscreen: function (def, value) {
                value = value.get();
                def.resolve(value + 'abc');
            }
        }
    };
});
