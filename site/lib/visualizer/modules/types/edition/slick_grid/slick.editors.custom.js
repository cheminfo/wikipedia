/***
 * Contains basic SlickGrid editors.
 * @module Editors
 * @namespace Slick
 */

define(['src/util/util', 'lodash', 'components/spectrum/spectrum', 'jquery'], function(Util, _) {
    Util.loadCss("./components/spectrum/spectrum.css");

    function setItemId(newItem, grid) {
        if(!newItem[grid.module.view.idPropertyName]) {
            Object.defineProperty(newItem, grid.module.view.idPropertyName, {
                value: 'id_'+grid.module.view.getNextIncrementalId(),
                enumerable: false,
                writable: false,
                configurable: false
            });
        }
    }

    (function ($) {
        // register namespace
        $.extend(true, window, {
            "Slick": {
                "Editors": {
                    "TextValue": TextValueEditor,
                    "ColorValue": ColorEditor,
                    "Text": TextValueEditor,
                    "SpecialNativeObject": SpecialNativeObjectEditor,
                    "DataNumberEditor": DataNumberEditor,
                    "DataBooleanEditor": DataBooleanEditor
                }
            }
        });



        function ColorEditor(args) {
            this.args = args;
            var $cont, $input, defaultValue;
            this.init = function() {
                var that = this;
                $cont = $('<div/>');
                $cont.append('<input type="text">');
                $input = $cont.find('input');
                $input.appendTo(args.container)
                    .bind("keydown.nav", function (e) {
                        if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                            e.stopImmediatePropagation();
                        }
                    })
                    .focus()
                    .select();
                $input.spectrum({
                    color: $input.val(),
                    preferredFormat: 'hex',
                    change: function(color) {
                        that.changed = true;
                        $input.spectrum('hide');
                        args.commitChanges('next');
                    },
                    move: function(color) {

                    },
                    show: function() {

                    },
                    hide: function() {
                        console.log('hide');
                        if(!that.changed) {
                            args.cancelChanges();
                        }
                    },
                    localStorageKey: 'visualizer-spectrum',
                    showPalette: true,
                    showSelectionPalette: true,
                    palette: []
                });

                $input.next().first().click();
            };

            this.destroy = function() {
                $cont.remove();
            };

            this.focus = function() {
                $input.focus();
            };

            this.getValue = function() {
                $input.val();
            };

            this.setValue = function(val) {
                $input.val(val);
            };

            this.loadValue = function(item) {
                defaultValue = item.getChildSync(args.column.jpath);
                if(defaultValue) {
                    defaultValue = defaultValue.value || '#000000';
                }
                else {
                    defaultValue = '#000000';
                }
                $input.val(defaultValue);
                $input.spectrum('set', defaultValue);
                $input[0].defaultValue = defaultValue;
                $input.select();
            };

            this.serializeValue = function () {
                return $input.val();
            };


            this.applyValue = function (item, state) {
                var isNew = _.isEmpty(item);
                DataObject.check(item, true);
                var newState = {
                    type: 'color',
                    value: state
                };


                if(isNew) {
                    var newItem = {};
                    setItemId(newItem, this.args.grid);
                    //newItem[args.grid.module.view.idPropertyName] = 'id_'+args.grid.module.view.getNextIncrementalId();
                    newItem = DataObject.check(newItem, true);
                    newItem.setChildSync(args.column.jpath, newState);
                    args.grid.module.view.slick.data.addItem(newItem);
                    return newState;
                }
                else {
                    args.grid.module.model.dataSetChildSync(item, args.column.jpath, newState);
                }


            };

            this.isValueChanged = function () {
                return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
            };

            this.validate = function () {
                if (args.column.validator) {
                    var validationResults = args.column.validator($input.val());
                    if (!validationResults.valid) {
                        return validationResults;
                    }
                }

                return {
                    valid: true,
                    msg: null
                };
            };

            this.init();
        }

        function TextValueEditor(args) {
            this.args = args;
            this.init = defaultInit;
            this.destroy = defaultDestroy;
            this.focus = defaultFocus;
            this.getValue = defaultGetValue;
            this.setValue = defaultSetValue;
            this.loadValue = defaultLoadValue;
            this.serializeValue = defaultSerializeValue;
            this.isValueChanged = defaultIsValueChanged;
            this.validate = defaultValidate;

            this.applyValue = function(item, state) {
                var isNew = _.isEmpty(item);
                DataObject.check(item, true);
                var newState = {
                    type: this.args.column.dataType,
                    value: state
                };


                if(isNew) {
                    var newItem = {};
                    setItemId(newItem, this.args.grid);
                    //newItem[this.args.grid.module.view.idPropertyName] = 'id_'+this.args.grid.module.view.getNextIncrementalId();
                    newItem = DataObject.check(newItem, true);
                    newItem.setChildSync(this.args.column.jpath, newState);
                    this.args.grid.module.view.slick.data.addItem(newItem);
                    return newState;
                }
                else {
                    this.args.grid.module.model.dataSetChildSync(item, this.args.column.jpath, newState);
                }
            };

            this.init();
        }


        function SpecialNativeObjectEditor(args) {
            this.args = args;
            this.init = defaultInit;
            this.destroy = defaultDestroy;
            this.focus = defaultFocus;
            this.getValue = defaultGetValue;
            this.setValue = defaultSetValue;
            this.loadValue = defaultLoadValue;
            this.serializeValue = defaultSerializeValue;
            this.applyValue = defaultApplyValue;
            this.isValueChanged = defaultIsValueChanged;
            this.validate = defaultValidate;
            this.init();
        }

        function DataNumberEditor(args) {
            this.args = args;
            this.init = defaultInit;
            this.destroy = defaultDestroy;
            this.focus = defaultFocus;
            this.getValue = numberGetValue;
            this.setValue = defaultSetValue;
            this.loadValue = defaultLoadValue;
            this.serializeValue = defaultSerializeValue;
            this.applyValue = numberApplyValue;
            this.isValueChanged = defaultIsValueChanged;
            this.validate = defaultValidate;
            this.init();
        }

        function DataBooleanEditor(args) {
            this.args = args;
            this.init = booleanInit;
            this.destroy = defaultDestroy;
            this.focus = defaultFocus;
            this.getValue = numberGetValue;
            this.setValue = defaultSetValue;
            this.loadValue = booleanLoadValue;
            this.serializeValue = booleanSerializeValue;
            this.applyValue = booleanApplyValue;
            this.isValueChanged = booleanIsValueChanged;
            this.validate = defaultValidate;
            this.init();
        }
    })(jQuery);


    // ======== DEFAULT EDITOR FUNCTIONS ===============
    function defaultValidate() {
        if (this.args.column.validator) {
            var validationResults = this.args.column.validator(this.serializeValue());
            if (!validationResults.valid) {
                return validationResults;
            }
        }

        return {
            valid: true,
            msg: null
        };
    }

    function defaultIsValueChanged() {
        return (!(this.$input.val() == "" && this.defaultValue == null)) && (this.$input.val() != this.defaultValue);
    }

    function defaultApplyValue(item, state) {
        var isNew = _.isEmpty(item);
        DataObject.check(item, true);
        var newState = state;


        if(isNew) {
            var newItem = {};
            setItemId(newItem, this.args.grid);
            //newItem[this.args.grid.module.view.idPropertyName] = 'id_'+this.args.grid.module.view.getNextIncrementalId();
            newItem = DataObject.check(newItem, true);
            newItem.setChildSync(this.args.column.jpath, state);
            this.args.grid.module.view.slick.data.addItem(newItem);
            return newState;
        }
        else {
            this.args.grid.module.model.dataSetChildSync(item, this.args.column.jpath, newState);
        }
    }

    function defaultSerializeValue() {
        return this.$input.val();
    }

    function defaultLoadValue(item) {
        this.defaultValue = item.getChildSync(this.args.column.jpath);
        this.defaultValue = this.defaultValue ? this.defaultValue.get() || "" : "";
        this.$input.val(this.defaultValue);
        this.$input[0].defaultValue = this.defaultValue;
        this.$input.select();
    }

    function defaultSetValue(val) {
        this.$input.val(val);
    }

    function defaultGetValue() {
        return this.$input.val();
    }

    function defaultInit() {
        this.$input = $("<INPUT type=text class='editor-text' />")
            .appendTo(this.args.container)
            .bind("keydown.nav", function (e) {
                if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                    e.stopImmediatePropagation();
                }
            })
            .focus()
            .select();
    }

    function defaultDestroy() {
        this.$input.remove();
    }

    function defaultFocus() {
        this.$input.focus();
    }

    // =========== DATA NUMBER ===============
    function numberGetValue() {
        return +this.$input.val();
    }

    function numberApplyValue(item, state) {
        state = +state;
        return defaultApplyValue.call(this, item, _.isNaN(state) ? 'NaN' : state);
    }

    // =========== DATA BOOLEAN ==============
    function booleanInit() {
        var that = this;
        this.$input = $("<INPUT type=checkbox value='true' class='editor-checkbox' hideFocus>");
        this.$input.appendTo(this.args.container);
        this.$input.focus();
        this.$input.change(function(){
            that.args.commitChanges('next');
        });
    }

    function booleanLoadValue(item) {
        this.defaultValue = item.getChildSync(this.args.column.jpath);
        if (this.defaultValue && this.defaultValue.get()) {
            this.$input.attr("checked", "checked");
        } else {
            this.$input.removeAttr("checked");
        }
    }

    function booleanSerializeValue() {
        return !!this.$input[0].checked;
    }

    function booleanIsValueChanged() {
        return this.serializeValue !== this.defaultValue;
    }

    function booleanApplyValue(item, state) {
        state = !!state;
        defaultApplyValue.call(this, item, state);
    }
});



