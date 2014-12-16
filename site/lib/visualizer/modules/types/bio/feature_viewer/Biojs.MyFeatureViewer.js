Biojs.MyFeatureViewer = Biojs.FeatureViewer.extend(
    /** @lends Biojs.DasProteinFeatureViewer */
    {
        /*
         * Private variables
         */
        _webservice:"http://wwwdev.ebi.ac.uk/uniprot/featureViewer/image",
        _dasReference:"http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/",
        /**
         * Default values for the options
         * @name Biojs.DasProteinFeatureViewer-constructor
         */
        constructor:function (options) {
            this.base(options);
            var self = this;
            //Biojs.console.enable();
            
            try {
              if (!Biojs.Utils.isEmpty(self.opt.json)) {
                self.paintFeatures(self.opt.json)
              }
            } catch (err) {
              Biojs.console.log(err);
              document.getElementById(self.opt.target).innerHTML = '';
              document.getElementById(self.opt.target).innerHTML = 'No image available. Did you provide a valid UniProt accession or identifier, and valid limits?';
            }
        },

        opt:{
            dasSources:"http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot",
            featureTypes:"",
            featureNames:"",
            imageWidth:700,
            imageStyle:"nonOverlapping",
            optionResponse:"raphael",
            hgrid:false,
            vgrid:false,
            allFeatures:true,
            allRectangles:false,
            allSameSize:false,
            proxyUrl: "../biojs/dependencies/proxy/proxy.php"
        },

        /**
         * Array containing the supported event names
         * @name Biojs.DasProteinFeatureViewer-eventTypes
         */
        eventTypes : [],

        /**
         * Opens a new window/tab in the browser with the graphical representation for all feature types.
         *
         * @example
         * myPainter.showGeneralLegend();
         *
         */
        showGeneralLegend: function() {
            var config = this.opt.json.configuration;
            var dataURL = this._webservice + "?";
            window.open(dataURL); //open generated image in new tab/window
        },

        /**
         * Opens a new window/tab in the browser with the graphical representation as a plain image.
         * Note: For IE it does not reflect the drags/drops on sites
         *
         * @example
         * myPainter.exportFeaturesToImage();
         *
         */
        exportFeaturesToImage: function() {
//        if (typeof FlashCanvas != "undefined") {
//            FlashCanvas.initElement(canvas);
//        }
            var config = this.opt.json.configuration;
            var dataURL = "";
            if (jQuery.browser.msie) { //canvas does not work (not even with IE 9)
                var arguments = "segment=" + this.opt.json.segment;
                if ((config.requestedStart != 0) && (config.requestedStop != 0)) {
                    arguments = arguments + ":" + config.requestedStart + "," + config.requestedStop;
                }
                arguments = arguments +
                    "&dasReference=" + config.dasReference +
                    "&dasSources=" + config.dasSources +
                    "&width=" + config.sizeX +
                    "&option=image" +
                    "&hgrid=" + config.horizontalGrid +
                    "&vgrid=" + config.verticalGrid +
                    "&style=" + config.style;
                dataURL = this._webservice + "?" + arguments;
                window.open(dataURL); //open generated image in new tab/window
            } else {
              var $holder = jQuery('#uniprotFeaturePainter-holder');
                var $svg = $holder.find('svg');
                var oldW = $svg.attr('width');
                var oldH = $svg.attr('height');
                $svg.attr('width', $svg.width()+'px');
                $svg.attr('height', $svg.height()+'px');
                svg = document.getElementById('uniprotFeaturePainter-holder').innerHTML;
                var canvas = document.createElement("canvas");
                canvg(canvas, svg);
                dataURL = canvas.toDataURL();
                $svg.attr('width', $svg.width()+'px');
                $svg.attr('height', oldH).attr('width', oldW);
                this.$imageExported = jQuery('<div id="uniprotFeaturePainter-imageExportedDiv"></div>')
                    .html('<img id="uniprotFeaturePainter-imageExported" alt="exported image" src="' + dataURL + '"/>')
                    .dialog({
                        autoOpen: true,
                        title: 'Exported image',
                        modal: true,
                        width: $svg.width()+20
                    });
            }
        },

        /**
         * Applies a style, either "centered", "nonOverlapping", or "rows".
         * @param show
         *
         * @example
         * myPainter.applyStyle("centered");
         */
        applyStyle: function(style) {
            if ((style != undefined) && ((style == "centered") || (style == "nonOverlapping") || (style = "rows"))) {
                var config = this.opt.json.configuration;
                this.customize(style, config.horizontalGrid, config.verticalGrid);
            }
        },

        /**
         * Shows/hide the horizontal guide lines.
         * @param show
         *
         * @example
         * myPainter.showHideHorizontalGrid(true);
         */
        showHideHorizontalGrid: function(show) {
            if ((show != undefined) && ((show == true) || (show == false))) {
                var config = this.opt.json.configuration;
                this.customize(config.style, show, config.verticalGrid);
            }
        },

        /**
         * Shows/hide the horizontal guide lines.
         * @param show
         *
         * @example
         * myPainter.showHideVerticalGrid(true);
         */
        showHideVerticalGrid: function(show) {
            if ((show != undefined) && ((show == true) || (show == false))) {
                var config = this.opt.json.configuration;
                this.customize(config.style, config.horizontalGrid, show);
            }
        }
    }
);