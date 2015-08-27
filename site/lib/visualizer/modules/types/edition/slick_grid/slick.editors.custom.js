

/***
 * Contains basic SlickGrid editors.
 * @module Editors
 * @namespace Slick
 */

define(['src/util/util', 'lodash', 'components/spectrum/spectrum', 'jquery', 'jquery-ui/datepicker'], function (Util, _) {
    Util.loadCss('./components/spectrum/spectrum.css');

    function setItemId(newItem, grid) {
        if (!newItem[grid.module.view.idPropertyName]) {
            Object.defineProperty(newItem, grid.module.view.idPropertyName, {
                value: 'id_' + grid.module.view.getNextIncrementalId(),
                enumerable: false,
                writable: false,
                configurable: false
            });
        }
    }

    (function ($) {
        // register namespace
        $.extend(true, window, {
            'Slick': {
                'CustomEditors': {
                    'TextValue': TextValueEditor,
                    'ColorValue': ColorEditor,
                    'Text': TextValueEditor,
                    'Date': DateEditor,
                    'DataStringEditor': DataStringEditor,
                    'DataNumberEditor': DataNumberEditor,
                    'DataBooleanEditor': DataBooleanEditor,
                    'LongText': LongTextEditor,
                    'SimpleLongText': SimpleLongTextEditor
                }
            }
        });


        function DateEditor(args) {
            this.args = args;
            var $input;
            var defaultValue;
            var calendarOpen = false;

            this.init = function () {
                $input = $('<INPUT type="text" class="editor-text" />');
                $input.appendTo(args.container);
                $input.focus().select();
                $input.datepicker({
                    showOn: 'button',
                    buttonImageOnly: true,
                    buttonImage: require.toUrl('components/slickgrid/images/calendar.gif'),
                    beforeShow: function () {
                        calendarOpen = true;
                    },
                    onClose: function () {
                        calendarOpen = false;
                    }
                });
                $input.width($input.width() - 18);
            };

            this.destroy = function () {
                $.datepicker.dpDiv.stop(true, true);
                $input.datepicker('hide');
                $input.datepicker('destroy');
                $input.remove();
            };

            this.show = function () {
                if (calendarOpen) {
                    $.datepicker.dpDiv.stop(true, true).show();
                }
            };

            this.hide = function () {
                if (calendarOpen) {
                    $.datepicker.dpDiv.stop(true, true).hide();
                }
            };

            this.position = function (position) {
                if (!calendarOpen) {
                    return;
                }
                $.datepicker.dpDiv
                    .css('top', position.top + 30)
                    .css('left', position.left);
            };

            this.focus = function () {
                $input.focus();
            };

            this.loadValue = function (item) {
                defaultValue = item.getChildSync(args.column.jpath);
                if (defaultValue) {
                    defaultValue = defaultValue.value || '01/01/2000';
                } else {
                    defaultValue = '01/01/2000';
                }
                $input.val(defaultValue);
                $input[0].defaultValue = defaultValue;
                $input.select();
            };

            this.serializeValue = function () {
                return $input.val();
            };

            this.applyValue = function (item, state) {
                defaultApplyValue.call(this, item, state, this.args.column.dataType);
            };

            this.isValueChanged = function () {
                return (!($input.val() == '' && defaultValue == null)) && ($input.val() != defaultValue);
            };

            this.validate = function () {
                return {
                    valid: true,
                    msg: null
                };
            };

            this.init();
        }

        function ColorEditor(args) {
            this.args = args;
            var $cont, $input, defaultValue;
            this.init = function () {
                var that = this;
                $cont = $('<div/>');
                $cont.append('<input type="text">');
                $input = $cont.find('input');
                $input.appendTo(args.container)
                    .bind('keydown.nav', function (e) {
                        if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                            e.stopImmediatePropagation();
                        }
                    })
                    .focus()
                    .select();
                $input.spectrum({
                    color: (args.item && args.item.getChildSync && args.item.getChildSync(args.column.jpath)) ? args.item.getChildSync(args.column.jpath).get() : undefined,
                    appendTo: 'body',
                    showInitial: true,
                    showInput: true,
                    clickoutFiresChange: false,
                    showAlpha: true,
                    showPalette: true,
                    showSelectionPalette: true,
                    palette: [[
                        'rgba(152,  0,  0, 1)',
                        'rgba(255,  0,  0, 1)',
                        'rgba(255,  153,  0, 1)',
                        'rgba(255,  255,  0, 1)',
                        'rgba(0,  255,  0, 1)',
                        'rgba(0,  255,  255, 1)',
                        'rgba(74,  134,  232, 1)',
                        'rgba(0,  0,  255, 1)',
                        'rgba(153,  0,  255, 1)',
                        'rgba(255,  0,  255, 1)'
                    ],
                        [
                            'rgba(230,  184,  175, 1)',
                            'rgba(244,  204,  204, 1)',
                            'rgba(252,  229,  205, 1)',
                            'rgba(255,  242,  204, 1)',
                            'rgba(217,  234,  211, 1)',
                            'rgba(208,  224,  227, 1)',
                            'rgba(201,  218,  248, 1)',
                            'rgba(207,  226,  243, 1)',
                            'rgba(217,  210,  233, 1)',
                            'rgba(234,  209,  220, 1)'
                        ],
                        [
                            'rgba(221,  126,  107, 1)',
                            'rgba(234,  153,  153, 1)',
                            'rgba(249,  203,  156, 1)',
                            'rgba(255,  229,  153, 1)',
                            'rgba(182,  215,  168, 1)',
                            'rgba(162,  196,  201, 1)',
                            'rgba(164,  194,  244, 1)',
                            'rgba(159,  197,  232, 1)',
                            'rgba(180,  167,  214, 1)',
                            'rgba(213,  166,  189, 1)'
                        ],
                        [
                            'rgba(204,  65,  37, 1)',
                            'rgba(224,  102,  102, 1)',
                            'rgba(246,  178,  107, 1)',
                            'rgba(255,  217,  102, 1)',
                            'rgba(147,  196,  125, 1)',
                            'rgba(118,  165,  175, 1)',
                            'rgba(109,  158,  235, 1)',
                            'rgba(111,  168,  220, 1)',
                            'rgba(142,  124,  195, 1)',
                            'rgba(194,  123,  160, 1)'
                        ],
                        [
                            'rgba(166,  28,  0, 1)',
                            'rgba(204,  0,  0, 1)',
                            'rgba(230,  145,  56, 1)',
                            'rgba(241,  194,  50, 1)',
                            'rgba(106,  168,  79, 1)',
                            'rgba(69,  129,  142, 1)',
                            'rgba(60,  120,  216, 1)',
                            'rgba(61,  133,  198, 1)',
                            'rgba(103,  78,  167, 1)',
                            'rgba(166,  77,  121, 1)'
                        ],
                        [
                            'rgba(133,  32,  12, 1)',
                            'rgba(153,  0,  0, 1)',
                            'rgba(180,  95,  6, 1)',
                            'rgba(191,  144,  0, 1)',
                            'rgba(56,  118,  29, 1)',
                            'rgba(19,  79,  92, 1)',
                            'rgba(17,  85,  204, 1)',
                            'rgba(11,  83,  148, 1)',
                            'rgba(53,  28,  117, 1)',
                            'rgba(116,  27,  71, 1)'
                        ],
                        [
                            'rgba(91,  15,  0, 1)',
                            'rgba(102,  0,  0, 1)',
                            'rgba(120,  63,  4, 1)',
                            'rgba(127,  96,  0, 1)',
                            'rgba(39,  78,  19, 1)',
                            'rgba(12,  52,  61, 1)',
                            'rgba(28,  69,  135, 1)',
                            'rgba(7,  55,  99, 1)',
                            'rgba(32,  18,  77, 1)',
                            'rgba(76,  17,  48, 1)'
                        ]],
                    preferredFormat: 'rgba',
                    change: function (color) {
                        that.color = color;
                        that.changed = true;
                        $input.spectrum('hide');
                        args.commitChanges('next');
                    },
                    move: function (color) {

                    },
                    show: function () {

                    },
                    hide: function () {
                        if (!that.changed) {
                            args.cancelChanges();
                        }
                    },
                    localStorageKey: 'visualizer-spectrum'
                });

                $input.next().first().click();
            };

            this.destroy = function () {
                $cont.remove();
            };

            this.focus = function () {
                $input.focus();
            };

            this.getValue = function () {
                $input.val();
            };

            this.setValue = function (val) {
                $input.val(val);
            };

            this.loadValue = function (item) {
                defaultValue = item.getChildSync(args.column.jpath);
                if (defaultValue) {
                    defaultValue = defaultValue.value || '#000000';
                } else {
                    defaultValue = '#000000';
                }
                $input.val(defaultValue);
                $input.spectrum('set', defaultValue);
                $input[0].defaultValue = defaultValue;
                $input.select();
            };

            this.serializeValue = function () {
                if (this.color) {
                    return this.color.toRgbString();
                }
                return $input.val();
            };


            this.applyValue = function (item, state) {
                defaultApplyValue.call(this, item, state, this.args.column.dataType);
            };

            this.isValueChanged = function () {
                return (!($input.val() == '' && defaultValue == null)) && ($input.val() != defaultValue);
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

        function TextValueEditor(args, options) {
            this.args = args;
            this.initOptions = options;
            this.init = defaultInit;
            this.destroy = defaultDestroy;
            this.focus = defaultFocus;
            this.getValue = defaultGetValue;
            this.setValue = defaultSetValue;
            this.loadValue = defaultLoadValue;
            this.serializeValue = defaultSerializeValue;
            this.isValueChanged = defaultIsValueChanged;
            this.validate = defaultValidate;

            this.applyValue = function (item, state) {
                defaultApplyValue.call(this, item, state, this.args.column.dataType);
            };

            this.init();
        }


        function DataStringEditor(args) {
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
        return (!(this.$input.val() == '' && this.defaultValue == null)) && (this.$input.val() != this.defaultValue);
    }

    function defaultApplyValue(item, state, type) {
        var isNew = _.isEmpty(item), newState;
        DataObject.check(item, true);
        if (type) {
            newState = {
                type: type,
                value: state
            };
        } else {
            newState = state;
        }


        if (isNew) {
            setItemId(item, this.args.grid);
            item.setChildSync(this.args.column.jpath, state);
            this.args.grid.module.view.slick.data.addItem(item);
            return newState;
        } else {
            this.args.grid.module.model.dataSetChildSync(item, this.args.column.jpath, newState);
        }
    }

    function defaultSerializeValue() {
        return this.$input.val();
    }

    function defaultLoadValue(item) {
        this.defaultValue = item.getChildSync(this.args.column.jpath);
        this.defaultValue = this.defaultValue ? this.defaultValue.get() || '' : '';
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
        var that = this;
        var $wrapper = this.args.container;
        this.initOptions = this.initOptions || {};
        if (this.initOptions.textarea) {
            $wrapper = $('<div>').appendTo(this.args.container);
            this.$input = $('<textarea  class="editor-text" rows="10" cols="60" style="z-index:10000; position: relative;"/>');
        } else {
            this.$input = $('<INPUT type="text" class="editor-text" />');
        }
        this.$input
            .appendTo(this.args.container)
            .bind('keydown.nav', function (e) {
                if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                    e.stopImmediatePropagation();
                }
            })
            .focus()
            .select()
            .focusout(function () {
                // Shouldn't do this if auto-edit
                if (!that.args.grid.module.view.slick.options.autoEdit)
                    that.args.commitChanges('next');
                else
                    that.args.commitChanges('none');
            });
    }

    function defaultDestroy() {
        this.$input.remove();
    }

    function defaultFocus() {
        this.$input.focus().select();
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
        this.$input = $('<input type="checkbox" value="true" class="editor-checkbox" hideFocus>');
        this.$input.appendTo(this.args.container);
        this.$input.focus();
        this.$input.change(function () {
            that.args.commitChanges('next');
        });
    }

    function booleanLoadValue(item) {
        this.defaultValue = item.getChildSync(this.args.column.jpath);
        if (this.defaultValue && this.defaultValue.get()) {
            this.$input.attr('checked', 'checked');
        } else {
            this.$input.removeAttr('checked');
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

    // ========== LONG TEXT ===================
    function longTextInit() {
        var that = this;
        this.$container = $('body');

        this.$wrapper = $('<DIV style="z-index:10000; position:absolute;background:white; padding:5px;border:3px solid gray; -moz-border-radius:10px; border-radius:10px;"/>')
            .appendTo(this.$container);

        this.$input = $('<textarea hidefocus rows=5 style="backround:white; width:250px; height:80px;border:0; outline:0">')
            .appendTo(this.$wrapper);

        $('<div style="text-align:right"><button>Save</button><button>Cancel</button></div>')
            .appendTo(this.$wrapper);

        this.$wrapper.find('button:first').bind('click', this.save);
        this.$wrapper.find('button:last').bind('click', this.cancel);
        this.$input.bind('keydown', function (e) {
            if (e.which == $.ui.keyCode.ENTER && e.ctrlKey) {
                that.save();
            } else if (e.which == $.ui.keyCode.ESCAPE) {
                e.preventDefault();
                that.cancel();
            } else if (e.which == $.ui.keyCode.TAB && e.shiftKey) {
                e.preventDefault();
                that.args.grid.navigatePrev();
            } else if (e.which == $.ui.keyCode.TAB) {
                e.preventDefault();
                that.args.grid.navigateNext();
            }
        });


        this.position(this.args.position);
        //this.$input.hide();
        this.$input
            .focus()
            .select()
            .focusout(function () {
                // Shouldn't do this if auto-edit
                if (!that.args.grid.module.view.slick.options.autoEdit)
                    that.args.commitChanges('next');
            });
    }

    function defaultSave() {
        this.args.commitChanges();
    }

    function defaultCancel() {
        this.$input.val(this.defaultValue);
        this.args.cancelChanges();
    }

    function detachedHide() {
        this.$wrapper.hide();
    }

    function detachedShow() {
        this.$wrapper.show();
    }

    function detachedPosition(position) {
        this.$wrapper
            .css('top', position.top - 5)
            .css('left', position.left - 5);
    }

    function detachedDestroy() {
        this.$wrapper.remove();
    }

    function longTextFocus() {
        this.$wrapper.show();
        this.position(this.args.position);
        this.$input.focus();
    }

    function LongTextEditor(args) {
        this.args = args;
        this.init = longTextInit;
        this.destroy = detachedDestroy;
        this.focus = longTextFocus;
        this.getValue = defaultGetValue;
        this.setValue = defaultSetValue;
        this.loadValue = defaultLoadValue;
        this.serializeValue = defaultSerializeValue;
        this.applyValue = function (item, state) {
            defaultApplyValue.call(this, item, state, this.args.column.dataType);
        };
        this.isValueChanged = defaultIsValueChanged;
        this.validate = defaultValidate;
        this.hide = detachedHide;
        this.show = detachedShow;
        this.position = detachedPosition;
        this.save = defaultSave.bind(this);
        this.cancel = defaultCancel.bind(this);
        this.init();
    }

    function SimpleLongTextEditor(args) {
        var that = this;
        this.args = args;
        this.initOptions = {
            textarea: true
        };
        this.init = defaultInit;
        this.destroy = defaultDestroy;
        this.focus = defaultFocus;
        this.getValue = defaultGetValue;
        this.setValue = defaultSetValue;
        this.loadValue = defaultLoadValue;
        this.serializeValue = defaultSerializeValue;
        this.isValueChanged = defaultIsValueChanged;
        this.validate = defaultValidate;

        this.applyValue = function (item, state) {
            defaultApplyValue.call(this, item, state, this.args.column.dataType);
        };

        this.init();
    }


});



