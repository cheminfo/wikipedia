(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MFParser = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function atomSorter(a, b) {
  if (a === b) return 0;
  if (a === 'C') return -1;
  if (b === 'C') return 1;
  if (a === 'H') return -1;
  if (b === 'H') return 1;
  if (a < b) return -1;
  return 1;
}

module.exports = atomSorter;

},{}],2:[function(require,module,exports){
'use strict';

module.exports = {
  ELECTRON_MASS: 5.4857990907e-4,
};

},{}],3:[function(require,module,exports){
module.exports=[{"number":1,"isotopes":[{"nominal":1,"mass":1.00782503223,"abundance":0.999885},{"nominal":2,"mass":2.01410177812,"abundance":0.000115},{"nominal":3,"mass":3.0160492779},{"nominal":4,"mass":4.02643},{"nominal":5,"mass":5.035311},{"nominal":6,"mass":6.04496},{"nominal":7,"mass":7.0527}],"symbol":"H","mass":1.0079407540557772,"name":"Hydrogen","monoisotopicMass":1.00782503223},{"number":2,"isotopes":[{"nominal":3,"mass":3.0160293201,"abundance":0.00000134},{"nominal":4,"mass":4.00260325413,"abundance":0.99999866},{"nominal":5,"mass":5.012057},{"nominal":6,"mass":6.018885891},{"nominal":7,"mass":7.0279907},{"nominal":8,"mass":8.03393439},{"nominal":9,"mass":9.043946},{"nominal":10,"mass":10.05279}],"symbol":"He","mass":4.002601932120929,"name":"Helium","monoisotopicMass":4.00260325413},{"number":3,"isotopes":[{"nominal":3,"mass":3.0308},{"nominal":4,"mass":4.02719},{"nominal":5,"mass":5.012538},{"nominal":6,"mass":6.0151228874,"abundance":0.0759},{"nominal":7,"mass":7.0160034366,"abundance":0.9241},{"nominal":8,"mass":8.022486246},{"nominal":9,"mass":9.02679019},{"nominal":10,"mass":10.035483},{"nominal":11,"mass":11.04372358},{"nominal":12,"mass":12.052517},{"nominal":13,"mass":13.06263}],"symbol":"Li","mass":6.94003660291572,"name":"Lithium","monoisotopicMass":7.0160034366},{"number":4,"isotopes":[{"nominal":5,"mass":5.0399},{"nominal":6,"mass":6.0197264},{"nominal":7,"mass":7.016928717},{"nominal":8,"mass":8.005305102},{"nominal":9,"mass":9.012183065,"abundance":1},{"nominal":10,"mass":10.013534695},{"nominal":11,"mass":11.02166108},{"nominal":12,"mass":12.0269221},{"nominal":13,"mass":13.036135},{"nominal":14,"mass":14.04289},{"nominal":15,"mass":15.05342},{"nominal":16,"mass":16.06167}],"symbol":"Be","mass":9.012183065,"name":"Beryllium","monoisotopicMass":9.012183065},{"number":5,"isotopes":[{"nominal":6,"mass":6.0508},{"nominal":7,"mass":7.029712},{"nominal":8,"mass":8.0246073},{"nominal":9,"mass":9.01332965},{"nominal":10,"mass":10.01293695,"abundance":0.199},{"nominal":11,"mass":11.00930536,"abundance":0.801},{"nominal":12,"mass":12.0143527},{"nominal":13,"mass":13.0177802},{"nominal":14,"mass":14.025404},{"nominal":15,"mass":15.031088},{"nominal":16,"mass":16.039842},{"nominal":17,"mass":17.04699},{"nominal":18,"mass":18.05566},{"nominal":19,"mass":19.0631},{"nominal":20,"mass":20.07207},{"nominal":21,"mass":21.08129}],"symbol":"B","mass":10.811028046410001,"name":"Boron","monoisotopicMass":11.00930536},{"number":6,"isotopes":[{"nominal":8,"mass":8.037643},{"nominal":9,"mass":9.0310372},{"nominal":10,"mass":10.01685331},{"nominal":11,"mass":11.0114336},{"nominal":12,"mass":12,"abundance":0.9893},{"nominal":13,"mass":13.00335483507,"abundance":0.0107},{"nominal":14,"mass":14.0032419884},{"nominal":15,"mass":15.01059926},{"nominal":16,"mass":16.0147013},{"nominal":17,"mass":17.022577},{"nominal":18,"mass":18.026751},{"nominal":19,"mass":19.0348},{"nominal":20,"mass":20.04032},{"nominal":21,"mass":21.049},{"nominal":22,"mass":22.05753},{"nominal":23,"mass":23.0689}],"symbol":"C","mass":12.010735896735248,"name":"Carbon","monoisotopicMass":12},{"number":7,"isotopes":[{"nominal":10,"mass":10.04165},{"nominal":11,"mass":11.026091},{"nominal":12,"mass":12.0186132},{"nominal":13,"mass":13.00573861},{"nominal":14,"mass":14.00307400443,"abundance":0.99636},{"nominal":15,"mass":15.00010889888,"abundance":0.00364},{"nominal":16,"mass":16.0061019},{"nominal":17,"mass":17.008449},{"nominal":18,"mass":18.014078},{"nominal":19,"mass":19.017022},{"nominal":20,"mass":20.023366},{"nominal":21,"mass":21.02711},{"nominal":22,"mass":22.03439},{"nominal":23,"mass":23.04114},{"nominal":24,"mass":24.05039},{"nominal":25,"mass":25.0601}],"symbol":"N","mass":14.006703211445798,"name":"Nitrogen","monoisotopicMass":14.00307400443},{"number":8,"isotopes":[{"nominal":12,"mass":12.034262},{"nominal":13,"mass":13.024815},{"nominal":14,"mass":14.00859636},{"nominal":15,"mass":15.00306562},{"nominal":16,"mass":15.99491461957,"abundance":0.99757},{"nominal":17,"mass":16.9991317565,"abundance":0.00038},{"nominal":18,"mass":17.99915961286,"abundance":0.00205},{"nominal":19,"mass":19.003578},{"nominal":20,"mass":20.00407535},{"nominal":21,"mass":21.008655},{"nominal":22,"mass":22.009966},{"nominal":23,"mass":23.015696},{"nominal":24,"mass":24.01986},{"nominal":25,"mass":25.02936},{"nominal":26,"mass":26.03729},{"nominal":27,"mass":27.04772},{"nominal":28,"mass":28.05591}],"symbol":"O","mass":15.999404924318277,"name":"Oxygen","monoisotopicMass":15.99491461957},{"number":9,"isotopes":[{"nominal":14,"mass":14.034315},{"nominal":15,"mass":15.018043},{"nominal":16,"mass":16.0114657},{"nominal":17,"mass":17.00209524},{"nominal":18,"mass":18.00093733},{"nominal":19,"mass":18.99840316273,"abundance":1},{"nominal":20,"mass":19.999981252},{"nominal":21,"mass":20.9999489},{"nominal":22,"mass":22.002999},{"nominal":23,"mass":23.003557},{"nominal":24,"mass":24.008115},{"nominal":25,"mass":25.012199},{"nominal":26,"mass":26.020038},{"nominal":27,"mass":27.02644},{"nominal":28,"mass":28.03534},{"nominal":29,"mass":29.04254},{"nominal":30,"mass":30.05165},{"nominal":31,"mass":31.05971}],"symbol":"F","mass":18.99840316273,"name":"Fluorine","monoisotopicMass":18.99840316273},{"number":10,"isotopes":[{"nominal":16,"mass":16.02575},{"nominal":17,"mass":17.01771396},{"nominal":18,"mass":18.0057087},{"nominal":19,"mass":19.00188091},{"nominal":20,"mass":19.9924401762,"abundance":0.9048},{"nominal":21,"mass":20.993846685,"abundance":0.0027},{"nominal":22,"mass":21.991385114,"abundance":0.0925},{"nominal":23,"mass":22.99446691},{"nominal":24,"mass":23.99361065},{"nominal":25,"mass":24.997789},{"nominal":26,"mass":26.000515},{"nominal":27,"mass":27.007553},{"nominal":28,"mass":28.01212},{"nominal":29,"mass":29.01975},{"nominal":30,"mass":30.02473},{"nominal":31,"mass":31.0331},{"nominal":32,"mass":32.03972},{"nominal":33,"mass":33.04938},{"nominal":34,"mass":34.05673}],"symbol":"Ne","mass":20.18004638052026,"name":"Neon","monoisotopicMass":19.9924401762},{"number":11,"isotopes":[{"nominal":18,"mass":18.02688},{"nominal":19,"mass":19.01388},{"nominal":20,"mass":20.0073544},{"nominal":21,"mass":20.99765469},{"nominal":22,"mass":21.99443741},{"nominal":23,"mass":22.989769282,"abundance":1},{"nominal":24,"mass":23.99096295},{"nominal":25,"mass":24.989954},{"nominal":26,"mass":25.9926346},{"nominal":27,"mass":26.9940765},{"nominal":28,"mass":27.998939},{"nominal":29,"mass":29.0028771},{"nominal":30,"mass":30.0090979},{"nominal":31,"mass":31.013163},{"nominal":32,"mass":32.02019},{"nominal":33,"mass":33.02573},{"nominal":34,"mass":34.03359},{"nominal":35,"mass":35.04062},{"nominal":36,"mass":36.04929},{"nominal":37,"mass":37.05705}],"symbol":"Na","mass":22.989769282,"name":"Sodium","monoisotopicMass":22.989769282},{"number":12,"isotopes":[{"nominal":19,"mass":19.034169},{"nominal":20,"mass":20.01885},{"nominal":21,"mass":21.011716},{"nominal":22,"mass":21.99957065},{"nominal":23,"mass":22.99412421},{"nominal":24,"mass":23.985041697,"abundance":0.7899},{"nominal":25,"mass":24.985836976,"abundance":0.1},{"nominal":26,"mass":25.982592968,"abundance":0.1101},{"nominal":27,"mass":26.984340624},{"nominal":28,"mass":27.9838767},{"nominal":29,"mass":28.988617},{"nominal":30,"mass":29.9904629},{"nominal":31,"mass":30.996648},{"nominal":32,"mass":31.9991102},{"nominal":33,"mass":33.0053271},{"nominal":34,"mass":34.008935},{"nominal":35,"mass":35.01679},{"nominal":36,"mass":36.02188},{"nominal":37,"mass":37.03037},{"nominal":38,"mass":38.03658},{"nominal":39,"mass":39.04538},{"nominal":40,"mass":40.05218}],"symbol":"Mg","mass":24.3050516198371,"name":"Magnesium","monoisotopicMass":23.985041697},{"number":13,"isotopes":[{"nominal":21,"mass":21.02897},{"nominal":22,"mass":22.01954},{"nominal":23,"mass":23.00724435},{"nominal":24,"mass":23.9999489},{"nominal":25,"mass":24.9904281},{"nominal":26,"mass":25.986891904},{"nominal":27,"mass":26.98153853,"abundance":1},{"nominal":28,"mass":27.98191021},{"nominal":29,"mass":28.9804565},{"nominal":30,"mass":29.98296},{"nominal":31,"mass":30.983945},{"nominal":32,"mass":31.988085},{"nominal":33,"mass":32.990909},{"nominal":34,"mass":33.996705},{"nominal":35,"mass":34.999764},{"nominal":36,"mass":36.00639},{"nominal":37,"mass":37.01053},{"nominal":38,"mass":38.0174},{"nominal":39,"mass":39.02254},{"nominal":40,"mass":40.03003},{"nominal":41,"mass":41.03638},{"nominal":42,"mass":42.04384},{"nominal":43,"mass":43.05147}],"symbol":"Al","mass":26.98153853,"name":"Aluminium","monoisotopicMass":26.98153853},{"number":14,"isotopes":[{"nominal":22,"mass":22.03579},{"nominal":23,"mass":23.02544},{"nominal":24,"mass":24.011535},{"nominal":25,"mass":25.004109},{"nominal":26,"mass":25.99233384},{"nominal":27,"mass":26.98670481},{"nominal":28,"mass":27.97692653465,"abundance":0.92223},{"nominal":29,"mass":28.9764946649,"abundance":0.04685},{"nominal":30,"mass":29.973770136,"abundance":0.03092},{"nominal":31,"mass":30.975363194},{"nominal":32,"mass":31.97415154},{"nominal":33,"mass":32.97797696},{"nominal":34,"mass":33.978576},{"nominal":35,"mass":34.984583},{"nominal":36,"mass":35.986695},{"nominal":37,"mass":36.992921},{"nominal":38,"mass":37.995523},{"nominal":39,"mass":39.002491},{"nominal":40,"mass":40.00583},{"nominal":41,"mass":41.01301},{"nominal":42,"mass":42.01778},{"nominal":43,"mass":43.0248},{"nominal":44,"mass":44.03061},{"nominal":45,"mass":45.03995}],"symbol":"Si","mass":28.085498705705955,"name":"Silicon","monoisotopicMass":27.97692653465},{"number":15,"isotopes":[{"nominal":24,"mass":24.03577},{"nominal":25,"mass":25.02119},{"nominal":26,"mass":26.01178},{"nominal":27,"mass":26.999224},{"nominal":28,"mass":27.9923266},{"nominal":29,"mass":28.98180079},{"nominal":30,"mass":29.97831375},{"nominal":31,"mass":30.97376199842,"abundance":1},{"nominal":32,"mass":31.973907643},{"nominal":33,"mass":32.9717257},{"nominal":34,"mass":33.97364589},{"nominal":35,"mass":34.9733141},{"nominal":36,"mass":35.97826},{"nominal":37,"mass":36.979607},{"nominal":38,"mass":37.984252},{"nominal":39,"mass":38.986227},{"nominal":40,"mass":39.99133},{"nominal":41,"mass":40.994654},{"nominal":42,"mass":42.00108},{"nominal":43,"mass":43.00502},{"nominal":44,"mass":44.01121},{"nominal":45,"mass":45.01645},{"nominal":46,"mass":46.02446},{"nominal":47,"mass":47.03139}],"symbol":"P","mass":30.97376199842,"name":"Phosphorus","monoisotopicMass":30.97376199842},{"number":16,"isotopes":[{"nominal":26,"mass":26.02907},{"nominal":27,"mass":27.01828},{"nominal":28,"mass":28.00437},{"nominal":29,"mass":28.996611},{"nominal":30,"mass":29.98490703},{"nominal":31,"mass":30.97955701},{"nominal":32,"mass":31.9720711744,"abundance":0.9499},{"nominal":33,"mass":32.9714589098,"abundance":0.0075},{"nominal":34,"mass":33.967867004,"abundance":0.0425},{"nominal":35,"mass":34.96903231},{"nominal":36,"mass":35.96708071,"abundance":0.0001},{"nominal":37,"mass":36.97112551},{"nominal":38,"mass":37.9711633},{"nominal":39,"mass":38.975134},{"nominal":40,"mass":39.9754826},{"nominal":41,"mass":40.9795935},{"nominal":42,"mass":41.9810651},{"nominal":43,"mass":42.9869076},{"nominal":44,"mass":43.9901188},{"nominal":45,"mass":44.99572},{"nominal":46,"mass":46.00004},{"nominal":47,"mass":47.00795},{"nominal":48,"mass":48.0137},{"nominal":49,"mass":49.02276}],"symbol":"S","mass":32.06478740612706,"name":"Sulfur","monoisotopicMass":31.9720711744},{"number":17,"isotopes":[{"nominal":28,"mass":28.02954},{"nominal":29,"mass":29.01478},{"nominal":30,"mass":30.00477},{"nominal":31,"mass":30.992414},{"nominal":32,"mass":31.98568464},{"nominal":33,"mass":32.97745199},{"nominal":34,"mass":33.973762485},{"nominal":35,"mass":34.968852682,"abundance":0.7576},{"nominal":36,"mass":35.968306809},{"nominal":37,"mass":36.965902602,"abundance":0.2424},{"nominal":38,"mass":37.96801044},{"nominal":39,"mass":38.9680082},{"nominal":40,"mass":39.970415},{"nominal":41,"mass":40.970685},{"nominal":42,"mass":41.97325},{"nominal":43,"mass":42.97389},{"nominal":44,"mass":43.97787},{"nominal":45,"mass":44.98029},{"nominal":46,"mass":45.98517},{"nominal":47,"mass":46.98916},{"nominal":48,"mass":47.99564},{"nominal":49,"mass":49.00123},{"nominal":50,"mass":50.00905},{"nominal":51,"mass":51.01554}],"symbol":"Cl","mass":35.452937582608,"name":"Chlorine","monoisotopicMass":34.968852682},{"number":18,"isotopes":[{"nominal":30,"mass":30.02307},{"nominal":31,"mass":31.01212},{"nominal":32,"mass":31.9976378},{"nominal":33,"mass":32.98992555},{"nominal":34,"mass":33.98027009},{"nominal":35,"mass":34.97525759},{"nominal":36,"mass":35.967545105,"abundance":0.003336},{"nominal":37,"mass":36.96677633},{"nominal":38,"mass":37.96273211,"abundance":0.000629},{"nominal":39,"mass":38.964313},{"nominal":40,"mass":39.9623831237,"abundance":0.996035},{"nominal":41,"mass":40.96450057},{"nominal":42,"mass":41.9630457},{"nominal":43,"mass":42.9656361},{"nominal":44,"mass":43.9649238},{"nominal":45,"mass":44.96803973},{"nominal":46,"mass":45.968083},{"nominal":47,"mass":46.972935},{"nominal":48,"mass":47.97591},{"nominal":49,"mass":48.9819},{"nominal":50,"mass":49.98613},{"nominal":51,"mass":50.9937},{"nominal":52,"mass":51.99896},{"nominal":53,"mass":53.00729}],"symbol":"Ar","mass":39.947798563582005,"name":"Argon","monoisotopicMass":39.9623831237},{"number":19,"isotopes":[{"nominal":32,"mass":32.02265},{"nominal":33,"mass":33.00756},{"nominal":34,"mass":33.99869},{"nominal":35,"mass":34.98800541},{"nominal":36,"mass":35.98130201},{"nominal":37,"mass":36.97337589},{"nominal":38,"mass":37.96908112},{"nominal":39,"mass":38.9637064864,"abundance":0.932581},{"nominal":40,"mass":39.963998166,"abundance":0.000117},{"nominal":41,"mass":40.9618252579,"abundance":0.067302},{"nominal":42,"mass":41.96240231},{"nominal":43,"mass":42.9607347},{"nominal":44,"mass":43.96158699},{"nominal":45,"mass":44.96069149},{"nominal":46,"mass":45.96198159},{"nominal":47,"mass":46.9616616},{"nominal":48,"mass":47.96534119},{"nominal":49,"mass":48.96821075},{"nominal":50,"mass":49.97238},{"nominal":51,"mass":50.975828},{"nominal":52,"mass":51.98224},{"nominal":53,"mass":52.98746},{"nominal":54,"mass":53.99463},{"nominal":55,"mass":55.00076},{"nominal":56,"mass":56.00851}],"symbol":"K","mass":39.098300910086,"name":"Potassium","monoisotopicMass":38.9637064864},{"number":20,"isotopes":[{"nominal":34,"mass":34.01487},{"nominal":35,"mass":35.00514},{"nominal":36,"mass":35.993074},{"nominal":37,"mass":36.98589785},{"nominal":38,"mass":37.97631922},{"nominal":39,"mass":38.97071081},{"nominal":40,"mass":39.962590863,"abundance":0.96941},{"nominal":41,"mass":40.96227792},{"nominal":42,"mass":41.95861783,"abundance":0.00647},{"nominal":43,"mass":42.95876644,"abundance":0.00135},{"nominal":44,"mass":43.95548156,"abundance":0.02086},{"nominal":45,"mass":44.95618635},{"nominal":46,"mass":45.953689,"abundance":0.00004},{"nominal":47,"mass":46.9545424},{"nominal":48,"mass":47.95252276,"abundance":0.00187},{"nominal":49,"mass":48.95566274},{"nominal":50,"mass":49.9574992},{"nominal":51,"mass":50.960989},{"nominal":52,"mass":51.963217},{"nominal":53,"mass":52.96945},{"nominal":54,"mass":53.9734},{"nominal":55,"mass":54.9803},{"nominal":56,"mass":55.98508},{"nominal":57,"mass":56.99262},{"nominal":58,"mass":57.99794}],"symbol":"Ca","mass":40.078022511017735,"name":"Calcium","monoisotopicMass":39.962590863},{"number":21,"isotopes":[{"nominal":36,"mass":36.01648},{"nominal":37,"mass":37.00374},{"nominal":38,"mass":37.99512},{"nominal":39,"mass":38.984785},{"nominal":40,"mass":39.9779673},{"nominal":41,"mass":40.969251105},{"nominal":42,"mass":41.96551653},{"nominal":43,"mass":42.9611505},{"nominal":44,"mass":43.9594029},{"nominal":45,"mass":44.95590828,"abundance":1},{"nominal":46,"mass":45.95516826},{"nominal":47,"mass":46.9524037},{"nominal":48,"mass":47.9522236},{"nominal":49,"mass":48.9500146},{"nominal":50,"mass":49.952176},{"nominal":51,"mass":50.953592},{"nominal":52,"mass":51.95688},{"nominal":53,"mass":52.95909},{"nominal":54,"mass":53.96393},{"nominal":55,"mass":54.96782},{"nominal":56,"mass":55.97345},{"nominal":57,"mass":56.97777},{"nominal":58,"mass":57.98403},{"nominal":59,"mass":58.98894},{"nominal":60,"mass":59.99565},{"nominal":61,"mass":61.001}],"symbol":"Sc","mass":44.95590828,"name":"Scandium","monoisotopicMass":44.95590828},{"number":22,"isotopes":[{"nominal":38,"mass":38.01145},{"nominal":39,"mass":39.00236},{"nominal":40,"mass":39.9905},{"nominal":41,"mass":40.983148},{"nominal":42,"mass":41.97304903},{"nominal":43,"mass":42.9685225},{"nominal":44,"mass":43.95968995},{"nominal":45,"mass":44.95812198},{"nominal":46,"mass":45.95262772,"abundance":0.0825},{"nominal":47,"mass":46.95175879,"abundance":0.0744},{"nominal":48,"mass":47.94794198,"abundance":0.7372},{"nominal":49,"mass":48.94786568,"abundance":0.0541},{"nominal":50,"mass":49.94478689,"abundance":0.0518},{"nominal":51,"mass":50.94661065},{"nominal":52,"mass":51.946893},{"nominal":53,"mass":52.94973},{"nominal":54,"mass":53.95105},{"nominal":55,"mass":54.95527},{"nominal":56,"mass":55.95791},{"nominal":57,"mass":56.96364},{"nominal":58,"mass":57.9666},{"nominal":59,"mass":58.97247},{"nominal":60,"mass":59.97603},{"nominal":61,"mass":60.98245},{"nominal":62,"mass":61.98651},{"nominal":63,"mass":62.99375}],"symbol":"Ti","mass":47.866744962721995,"name":"Titanium","monoisotopicMass":47.94794198},{"number":23,"isotopes":[{"nominal":40,"mass":40.01276},{"nominal":41,"mass":41.00021},{"nominal":42,"mass":41.99182},{"nominal":43,"mass":42.980766},{"nominal":44,"mass":43.97411},{"nominal":45,"mass":44.9657748},{"nominal":46,"mass":45.96019878},{"nominal":47,"mass":46.95490491},{"nominal":48,"mass":47.9522522},{"nominal":49,"mass":48.9485118},{"nominal":50,"mass":49.94715601,"abundance":0.0025},{"nominal":51,"mass":50.94395704,"abundance":0.9975},{"nominal":52,"mass":51.94477301},{"nominal":53,"mass":52.9443367},{"nominal":54,"mass":53.946439},{"nominal":55,"mass":54.94724},{"nominal":56,"mass":55.95048},{"nominal":57,"mass":56.95252},{"nominal":58,"mass":57.95672},{"nominal":59,"mass":58.95939},{"nominal":60,"mass":59.96431},{"nominal":61,"mass":60.96725},{"nominal":62,"mass":61.97265},{"nominal":63,"mass":62.97639},{"nominal":64,"mass":63.98264},{"nominal":65,"mass":64.9875},{"nominal":66,"mass":65.99398}],"symbol":"V","mass":50.941465037425004,"name":"Vanadium","monoisotopicMass":50.94395704},{"number":24,"isotopes":[{"nominal":42,"mass":42.0067},{"nominal":43,"mass":42.99753},{"nominal":44,"mass":43.98536},{"nominal":45,"mass":44.97905},{"nominal":46,"mass":45.968359},{"nominal":47,"mass":46.9628974},{"nominal":48,"mass":47.9540291},{"nominal":49,"mass":48.9513333},{"nominal":50,"mass":49.94604183,"abundance":0.04345},{"nominal":51,"mass":50.94476502},{"nominal":52,"mass":51.94050623,"abundance":0.83789},{"nominal":53,"mass":52.94064815,"abundance":0.09501},{"nominal":54,"mass":53.93887916,"abundance":0.02365},{"nominal":55,"mass":54.94083843},{"nominal":56,"mass":55.9406531},{"nominal":57,"mass":56.943613},{"nominal":58,"mass":57.94435},{"nominal":59,"mass":58.94859},{"nominal":60,"mass":59.95008},{"nominal":61,"mass":60.95442},{"nominal":62,"mass":61.9561},{"nominal":63,"mass":62.96165},{"nominal":64,"mass":63.96408},{"nominal":65,"mass":64.96996},{"nominal":66,"mass":65.97366},{"nominal":67,"mass":66.98016},{"nominal":68,"mass":67.98403}],"symbol":"Cr","mass":51.9961317554337,"name":"Chromium","monoisotopicMass":51.94050623},{"number":25,"isotopes":[{"nominal":44,"mass":44.00715},{"nominal":45,"mass":44.99449},{"nominal":46,"mass":45.98609},{"nominal":47,"mass":46.975775},{"nominal":48,"mass":47.96852},{"nominal":49,"mass":48.959595},{"nominal":50,"mass":49.95423778},{"nominal":51,"mass":50.94820847},{"nominal":52,"mass":51.9455639},{"nominal":53,"mass":52.94128889},{"nominal":54,"mass":53.9403576},{"nominal":55,"mass":54.93804391,"abundance":1},{"nominal":56,"mass":55.93890369},{"nominal":57,"mass":56.9382861},{"nominal":58,"mass":57.9400666},{"nominal":59,"mass":58.9403911},{"nominal":60,"mass":59.9431366},{"nominal":61,"mass":60.9444525},{"nominal":62,"mass":61.94795},{"nominal":63,"mass":62.9496647},{"nominal":64,"mass":63.9538494},{"nominal":65,"mass":64.9560198},{"nominal":66,"mass":65.960547},{"nominal":67,"mass":66.96424},{"nominal":68,"mass":67.96962},{"nominal":69,"mass":68.97366},{"nominal":70,"mass":69.97937},{"nominal":71,"mass":70.98368}],"symbol":"Mn","mass":54.93804391,"name":"Manganese","monoisotopicMass":54.93804391},{"number":26,"isotopes":[{"nominal":45,"mass":45.01442},{"nominal":46,"mass":46.00063},{"nominal":47,"mass":46.99185},{"nominal":48,"mass":47.98023},{"nominal":49,"mass":48.973429},{"nominal":50,"mass":49.962975},{"nominal":51,"mass":50.956841},{"nominal":52,"mass":51.9481131},{"nominal":53,"mass":52.9453064},{"nominal":54,"mass":53.93960899,"abundance":0.05845},{"nominal":55,"mass":54.93829199},{"nominal":56,"mass":55.93493633,"abundance":0.91754},{"nominal":57,"mass":56.93539284,"abundance":0.02119},{"nominal":58,"mass":57.93327443,"abundance":0.00282},{"nominal":59,"mass":58.93487434},{"nominal":60,"mass":59.9340711},{"nominal":61,"mass":60.9367462},{"nominal":62,"mass":61.9367918},{"nominal":63,"mass":62.9402727},{"nominal":64,"mass":63.9409878},{"nominal":65,"mass":64.9450115},{"nominal":66,"mass":65.94625},{"nominal":67,"mass":66.95054},{"nominal":68,"mass":67.95295},{"nominal":69,"mass":68.95807},{"nominal":70,"mass":69.96102},{"nominal":71,"mass":70.96672},{"nominal":72,"mass":71.96983},{"nominal":73,"mass":72.97572},{"nominal":74,"mass":73.97935}],"symbol":"Fe","mass":55.845144433865904,"name":"Iron","monoisotopicMass":55.93493633},{"number":27,"isotopes":[{"nominal":47,"mass":47.01057},{"nominal":48,"mass":48.00093},{"nominal":49,"mass":48.98891},{"nominal":50,"mass":49.98091},{"nominal":51,"mass":50.970647},{"nominal":52,"mass":51.96351},{"nominal":53,"mass":52.9542041},{"nominal":54,"mass":53.94845987},{"nominal":55,"mass":54.9419972},{"nominal":56,"mass":55.9398388},{"nominal":57,"mass":56.93629057},{"nominal":58,"mass":57.9357521},{"nominal":59,"mass":58.93319429,"abundance":1},{"nominal":60,"mass":59.9338163},{"nominal":61,"mass":60.93247662},{"nominal":62,"mass":61.934059},{"nominal":63,"mass":62.9336},{"nominal":64,"mass":63.935811},{"nominal":65,"mass":64.9364621},{"nominal":66,"mass":65.939443},{"nominal":67,"mass":66.9406096},{"nominal":68,"mass":67.94426},{"nominal":69,"mass":68.94614},{"nominal":70,"mass":69.94963},{"nominal":71,"mass":70.95237},{"nominal":72,"mass":71.95729},{"nominal":73,"mass":72.96039},{"nominal":74,"mass":73.96515},{"nominal":75,"mass":74.96876},{"nominal":76,"mass":75.97413}],"symbol":"Co","mass":58.93319429,"name":"Cobalt","monoisotopicMass":58.93319429},{"number":28,"isotopes":[{"nominal":48,"mass":48.01769},{"nominal":49,"mass":49.0077},{"nominal":50,"mass":49.99474},{"nominal":51,"mass":50.98611},{"nominal":52,"mass":51.9748},{"nominal":53,"mass":52.96819},{"nominal":54,"mass":53.957892},{"nominal":55,"mass":54.95133063},{"nominal":56,"mass":55.94212855},{"nominal":57,"mass":56.93979218},{"nominal":58,"mass":57.93534241,"abundance":0.68077},{"nominal":59,"mass":58.9343462},{"nominal":60,"mass":59.93078588,"abundance":0.26223},{"nominal":61,"mass":60.93105557,"abundance":0.011399},{"nominal":62,"mass":61.92834537,"abundance":0.036346},{"nominal":63,"mass":62.92966963},{"nominal":64,"mass":63.92796682,"abundance":0.009255},{"nominal":65,"mass":64.93008517},{"nominal":66,"mass":65.9291393},{"nominal":67,"mass":66.9315694},{"nominal":68,"mass":67.9318688},{"nominal":69,"mass":68.9356103},{"nominal":70,"mass":69.9364313},{"nominal":71,"mass":70.940519},{"nominal":72,"mass":71.9417859},{"nominal":73,"mass":72.9462067},{"nominal":74,"mass":73.94798},{"nominal":75,"mass":74.9525},{"nominal":76,"mass":75.95533},{"nominal":77,"mass":76.96055},{"nominal":78,"mass":77.96336},{"nominal":79,"mass":78.97025}],"symbol":"Ni","mass":58.69334710994765,"name":"Nickel","monoisotopicMass":57.93534241},{"number":29,"isotopes":[{"nominal":52,"mass":51.99671},{"nominal":53,"mass":52.98459},{"nominal":54,"mass":53.97666},{"nominal":55,"mass":54.96604},{"nominal":56,"mass":55.95895},{"nominal":57,"mass":56.9492125},{"nominal":58,"mass":57.94453305},{"nominal":59,"mass":58.93949748},{"nominal":60,"mass":59.9373645},{"nominal":61,"mass":60.9334576},{"nominal":62,"mass":61.93259541},{"nominal":63,"mass":62.92959772,"abundance":0.6915},{"nominal":64,"mass":63.92976434},{"nominal":65,"mass":64.9277897,"abundance":0.3085},{"nominal":66,"mass":65.92886903},{"nominal":67,"mass":66.9277303},{"nominal":68,"mass":67.9296109},{"nominal":69,"mass":68.9294293},{"nominal":70,"mass":69.9323921},{"nominal":71,"mass":70.9326768},{"nominal":72,"mass":71.9358203},{"nominal":73,"mass":72.9366744},{"nominal":74,"mass":73.9398749},{"nominal":75,"mass":74.9415226},{"nominal":76,"mass":75.945275},{"nominal":77,"mass":76.94792},{"nominal":78,"mass":77.95223},{"nominal":79,"mass":78.95502},{"nominal":80,"mass":79.96089},{"nominal":81,"mass":80.96587},{"nominal":82,"mass":81.97244}],"symbol":"Cu","mass":63.54603994583,"name":"Copper","monoisotopicMass":62.92959772},{"number":30,"isotopes":[{"nominal":54,"mass":53.99204},{"nominal":55,"mass":54.98398},{"nominal":56,"mass":55.97254},{"nominal":57,"mass":56.96506},{"nominal":58,"mass":57.954591},{"nominal":59,"mass":58.94931266},{"nominal":60,"mass":59.9418421},{"nominal":61,"mass":60.939507},{"nominal":62,"mass":61.93433397},{"nominal":63,"mass":62.9332115},{"nominal":64,"mass":63.92914201,"abundance":0.4917},{"nominal":65,"mass":64.92924077},{"nominal":66,"mass":65.92603381,"abundance":0.2773},{"nominal":67,"mass":66.92712775,"abundance":0.0404},{"nominal":68,"mass":67.92484455,"abundance":0.1845},{"nominal":69,"mass":68.9265507},{"nominal":70,"mass":69.9253192,"abundance":0.0061},{"nominal":71,"mass":70.9277196},{"nominal":72,"mass":71.9268428},{"nominal":73,"mass":72.9295826},{"nominal":74,"mass":73.9294073},{"nominal":75,"mass":74.9328402},{"nominal":76,"mass":75.933115},{"nominal":77,"mass":76.9368872},{"nominal":78,"mass":77.9382892},{"nominal":79,"mass":78.9426381},{"nominal":80,"mass":79.9445529},{"nominal":81,"mass":80.9504026},{"nominal":82,"mass":81.95426},{"nominal":83,"mass":82.96056},{"nominal":84,"mass":83.96521},{"nominal":85,"mass":84.97226}],"symbol":"Zn","mass":65.37778252952499,"name":"Zinc","monoisotopicMass":63.92914201},{"number":31,"isotopes":[{"nominal":56,"mass":55.99536},{"nominal":57,"mass":56.9832},{"nominal":58,"mass":57.97478},{"nominal":59,"mass":58.96353},{"nominal":60,"mass":59.95729},{"nominal":61,"mass":60.949399},{"nominal":62,"mass":61.94419025},{"nominal":63,"mass":62.9392942},{"nominal":64,"mass":63.9368404},{"nominal":65,"mass":64.93273459},{"nominal":66,"mass":65.9315894},{"nominal":67,"mass":66.9282025},{"nominal":68,"mass":67.9279805},{"nominal":69,"mass":68.9255735,"abundance":0.60108},{"nominal":70,"mass":69.9260219},{"nominal":71,"mass":70.92470258,"abundance":0.39892},{"nominal":72,"mass":71.92636747},{"nominal":73,"mass":72.9251747},{"nominal":74,"mass":73.9269457},{"nominal":75,"mass":74.9265002},{"nominal":76,"mass":75.9288276},{"nominal":77,"mass":76.9291543},{"nominal":78,"mass":77.9316088},{"nominal":79,"mass":78.9328523},{"nominal":80,"mass":79.9364208},{"nominal":81,"mass":80.9381338},{"nominal":82,"mass":81.9431765},{"nominal":83,"mass":82.9471203},{"nominal":84,"mass":83.95246},{"nominal":85,"mass":84.95699},{"nominal":86,"mass":85.96301},{"nominal":87,"mass":86.96824}],"symbol":"Ga","mass":69.7230660725936,"name":"Gallium","monoisotopicMass":68.9255735},{"number":32,"isotopes":[{"nominal":58,"mass":57.99172},{"nominal":59,"mass":58.98249},{"nominal":60,"mass":59.97036},{"nominal":61,"mass":60.96379},{"nominal":62,"mass":61.95502},{"nominal":63,"mass":62.949628},{"nominal":64,"mass":63.9416899},{"nominal":65,"mass":64.9393681},{"nominal":66,"mass":65.9338621},{"nominal":67,"mass":66.9327339},{"nominal":68,"mass":67.9280953},{"nominal":69,"mass":68.9279645},{"nominal":70,"mass":69.92424875,"abundance":0.2057},{"nominal":71,"mass":70.92495233},{"nominal":72,"mass":71.922075826,"abundance":0.2745},{"nominal":73,"mass":72.923458956,"abundance":0.0775},{"nominal":74,"mass":73.921177761,"abundance":0.365},{"nominal":75,"mass":74.92285837},{"nominal":76,"mass":75.921402726,"abundance":0.0773},{"nominal":77,"mass":76.923549843},{"nominal":78,"mass":77.9228529},{"nominal":79,"mass":78.92536},{"nominal":80,"mass":79.9253508},{"nominal":81,"mass":80.9288329},{"nominal":82,"mass":81.929774},{"nominal":83,"mass":82.9345391},{"nominal":84,"mass":83.9375751},{"nominal":85,"mass":84.9429697},{"nominal":86,"mass":85.94658},{"nominal":87,"mass":86.95268},{"nominal":88,"mass":87.95691},{"nominal":89,"mass":88.96379},{"nominal":90,"mass":89.96863}],"symbol":"Ge","mass":72.6275501646868,"name":"Germanium","monoisotopicMass":73.921177761},{"number":33,"isotopes":[{"nominal":60,"mass":59.99388},{"nominal":61,"mass":60.98112},{"nominal":62,"mass":61.97361},{"nominal":63,"mass":62.9639},{"nominal":64,"mass":63.95743},{"nominal":65,"mass":64.949611},{"nominal":66,"mass":65.9441488},{"nominal":67,"mass":66.93925111},{"nominal":68,"mass":67.9367741},{"nominal":69,"mass":68.932246},{"nominal":70,"mass":69.930926},{"nominal":71,"mass":70.9271138},{"nominal":72,"mass":71.9267523},{"nominal":73,"mass":72.9238291},{"nominal":74,"mass":73.9239286},{"nominal":75,"mass":74.92159457,"abundance":1},{"nominal":76,"mass":75.92239202},{"nominal":77,"mass":76.9206476},{"nominal":78,"mass":77.921828},{"nominal":79,"mass":78.9209484},{"nominal":80,"mass":79.9224746},{"nominal":81,"mass":80.9221323},{"nominal":82,"mass":81.9247412},{"nominal":83,"mass":82.9252069},{"nominal":84,"mass":83.9293033},{"nominal":85,"mass":84.9321637},{"nominal":86,"mass":85.9367015},{"nominal":87,"mass":86.9402917},{"nominal":88,"mass":87.94555},{"nominal":89,"mass":88.94976},{"nominal":90,"mass":89.95563},{"nominal":91,"mass":90.96039},{"nominal":92,"mass":91.96674}],"symbol":"As","mass":74.92159457,"name":"Arsenic","monoisotopicMass":74.92159457},{"number":34,"isotopes":[{"nominal":64,"mass":63.97109},{"nominal":65,"mass":64.9644},{"nominal":66,"mass":65.95559},{"nominal":67,"mass":66.949994},{"nominal":68,"mass":67.94182524},{"nominal":69,"mass":68.9394148},{"nominal":70,"mass":69.9335155},{"nominal":71,"mass":70.9322094},{"nominal":72,"mass":71.9271405},{"nominal":73,"mass":72.9267549},{"nominal":74,"mass":73.922475934,"abundance":0.0089},{"nominal":75,"mass":74.92252287},{"nominal":76,"mass":75.919213704,"abundance":0.0937},{"nominal":77,"mass":76.919914154,"abundance":0.0763},{"nominal":78,"mass":77.91730928,"abundance":0.2377},{"nominal":79,"mass":78.91849929},{"nominal":80,"mass":79.9165218,"abundance":0.4961},{"nominal":81,"mass":80.917993},{"nominal":82,"mass":81.9166995,"abundance":0.0873},{"nominal":83,"mass":82.9191186},{"nominal":84,"mass":83.9184668},{"nominal":85,"mass":84.9222608},{"nominal":86,"mass":85.9243117},{"nominal":87,"mass":86.9286886},{"nominal":88,"mass":87.9314175},{"nominal":89,"mass":88.9366691},{"nominal":90,"mass":89.9401},{"nominal":91,"mass":90.94596},{"nominal":92,"mass":91.94984},{"nominal":93,"mass":92.95629},{"nominal":94,"mass":93.96049},{"nominal":95,"mass":94.9673}],"symbol":"Se","mass":78.95938855701361,"name":"Selenium","monoisotopicMass":79.9165218},{"number":35,"isotopes":[{"nominal":67,"mass":66.96465},{"nominal":68,"mass":67.95873},{"nominal":69,"mass":68.950497},{"nominal":70,"mass":69.944792},{"nominal":71,"mass":70.9393422},{"nominal":72,"mass":71.9365886},{"nominal":73,"mass":72.9316715},{"nominal":74,"mass":73.9299102},{"nominal":75,"mass":74.9258105},{"nominal":76,"mass":75.924542},{"nominal":77,"mass":76.9213792},{"nominal":78,"mass":77.9211459},{"nominal":79,"mass":78.9183376,"abundance":0.5069},{"nominal":80,"mass":79.9185298},{"nominal":81,"mass":80.9162897,"abundance":0.4931},{"nominal":82,"mass":81.9168032},{"nominal":83,"mass":82.9151756},{"nominal":84,"mass":83.916496},{"nominal":85,"mass":84.9156458},{"nominal":86,"mass":85.9188054},{"nominal":87,"mass":86.920674},{"nominal":88,"mass":87.9240833},{"nominal":89,"mass":88.9267046},{"nominal":90,"mass":89.9312928},{"nominal":91,"mass":90.9343986},{"nominal":92,"mass":91.9396316},{"nominal":93,"mass":92.94313},{"nominal":94,"mass":93.9489},{"nominal":95,"mass":94.95301},{"nominal":96,"mass":95.95903},{"nominal":97,"mass":96.96344},{"nominal":98,"mass":97.96946}],"symbol":"Br","mass":79.90352778050999,"name":"Bromine","monoisotopicMass":78.9183376},{"number":36,"isotopes":[{"nominal":69,"mass":68.96518},{"nominal":70,"mass":69.95604},{"nominal":71,"mass":70.95027},{"nominal":72,"mass":71.9420924},{"nominal":73,"mass":72.9392892},{"nominal":74,"mass":73.933084},{"nominal":75,"mass":74.9309457},{"nominal":76,"mass":75.9259103},{"nominal":77,"mass":76.92467},{"nominal":78,"mass":77.92036494,"abundance":0.00355},{"nominal":79,"mass":78.9200829},{"nominal":80,"mass":79.91637808,"abundance":0.02286},{"nominal":81,"mass":80.9165912},{"nominal":82,"mass":81.91348273,"abundance":0.11593},{"nominal":83,"mass":82.91412716,"abundance":0.115},{"nominal":84,"mass":83.9114977282,"abundance":0.56987},{"nominal":85,"mass":84.9125273},{"nominal":86,"mass":85.9106106269,"abundance":0.17279},{"nominal":87,"mass":86.91335476},{"nominal":88,"mass":87.9144479},{"nominal":89,"mass":88.9178355},{"nominal":90,"mass":89.9195279},{"nominal":91,"mass":90.9238063},{"nominal":92,"mass":91.9261731},{"nominal":93,"mass":92.9311472},{"nominal":94,"mass":93.93414},{"nominal":95,"mass":94.939711},{"nominal":96,"mass":95.943017},{"nominal":97,"mass":96.94909},{"nominal":98,"mass":97.95243},{"nominal":99,"mass":98.95839},{"nominal":100,"mass":99.96237},{"nominal":101,"mass":100.96873}],"symbol":"Kr","mass":83.7979999953261,"name":"Krypton","monoisotopicMass":83.9114977282},{"number":37,"isotopes":[{"nominal":71,"mass":70.96532},{"nominal":72,"mass":71.95908},{"nominal":73,"mass":72.95053},{"nominal":74,"mass":73.9442659},{"nominal":75,"mass":74.9385732},{"nominal":76,"mass":75.935073},{"nominal":77,"mass":76.9304016},{"nominal":78,"mass":77.9281419},{"nominal":79,"mass":78.9239899},{"nominal":80,"mass":79.9225164},{"nominal":81,"mass":80.9189939},{"nominal":82,"mass":81.918209},{"nominal":83,"mass":82.9151142},{"nominal":84,"mass":83.9143752},{"nominal":85,"mass":84.9117897379,"abundance":0.7217},{"nominal":86,"mass":85.91116743},{"nominal":87,"mass":86.909180531,"abundance":0.2783},{"nominal":88,"mass":87.91131559},{"nominal":89,"mass":88.9122783},{"nominal":90,"mass":89.9147985},{"nominal":91,"mass":90.9165372},{"nominal":92,"mass":91.9197284},{"nominal":93,"mass":92.9220393},{"nominal":94,"mass":93.9263948},{"nominal":95,"mass":94.92926},{"nominal":96,"mass":95.9341334},{"nominal":97,"mass":96.9371771},{"nominal":98,"mass":97.9416869},{"nominal":99,"mass":98.94503},{"nominal":100,"mass":99.95003},{"nominal":101,"mass":100.95404},{"nominal":102,"mass":101.95952},{"nominal":103,"mass":102.96392}],"symbol":"Rb","mass":85.46766359561973,"name":"Rubidium","monoisotopicMass":84.9117897379},{"number":38,"isotopes":[{"nominal":73,"mass":72.9657},{"nominal":74,"mass":73.95617},{"nominal":75,"mass":74.94995},{"nominal":76,"mass":75.941763},{"nominal":77,"mass":76.9379455},{"nominal":78,"mass":77.93218},{"nominal":79,"mass":78.9297077},{"nominal":80,"mass":79.9245175},{"nominal":81,"mass":80.9232114},{"nominal":82,"mass":81.9183999},{"nominal":83,"mass":82.9175544},{"nominal":84,"mass":83.9134191,"abundance":0.0056},{"nominal":85,"mass":84.912932},{"nominal":86,"mass":85.9092606,"abundance":0.0986},{"nominal":87,"mass":86.9088775,"abundance":0.07},{"nominal":88,"mass":87.9056125,"abundance":0.8258},{"nominal":89,"mass":88.9074511},{"nominal":90,"mass":89.90773},{"nominal":91,"mass":90.9101954},{"nominal":92,"mass":91.9110382},{"nominal":93,"mass":92.9140242},{"nominal":94,"mass":93.9153556},{"nominal":95,"mass":94.9193529},{"nominal":96,"mass":95.9217066},{"nominal":97,"mass":96.926374},{"nominal":98,"mass":97.9286888},{"nominal":99,"mass":98.9328907},{"nominal":100,"mass":99.93577},{"nominal":101,"mass":100.940352},{"nominal":102,"mass":101.943791},{"nominal":103,"mass":102.94909},{"nominal":104,"mass":103.95265},{"nominal":105,"mass":104.95855},{"nominal":106,"mass":105.96265},{"nominal":107,"mass":106.96897}],"symbol":"Sr","mass":87.61664446962,"name":"Strontium","monoisotopicMass":87.9056125},{"number":39,"isotopes":[{"nominal":76,"mass":75.95856},{"nominal":77,"mass":76.949781},{"nominal":78,"mass":77.94361},{"nominal":79,"mass":78.93735},{"nominal":80,"mass":79.9343561},{"nominal":81,"mass":80.9294556},{"nominal":82,"mass":81.9269314},{"nominal":83,"mass":82.922485},{"nominal":84,"mass":83.9206721},{"nominal":85,"mass":84.916433},{"nominal":86,"mass":85.914886},{"nominal":87,"mass":86.9108761},{"nominal":88,"mass":87.9095016},{"nominal":89,"mass":88.9058403,"abundance":1},{"nominal":90,"mass":89.9071439},{"nominal":91,"mass":90.9072974},{"nominal":92,"mass":91.9089451},{"nominal":93,"mass":92.909578},{"nominal":94,"mass":93.9115906},{"nominal":95,"mass":94.9128161},{"nominal":96,"mass":95.9158968},{"nominal":97,"mass":96.9182741},{"nominal":98,"mass":97.9223821},{"nominal":99,"mass":98.924148},{"nominal":100,"mass":99.927715},{"nominal":101,"mass":100.9301477},{"nominal":102,"mass":101.9343277},{"nominal":103,"mass":102.937243},{"nominal":104,"mass":103.94196},{"nominal":105,"mass":104.94544},{"nominal":106,"mass":105.95056},{"nominal":107,"mass":106.95452},{"nominal":108,"mass":107.95996},{"nominal":109,"mass":108.96436}],"symbol":"Y","mass":88.9058403,"name":"Yttrium","monoisotopicMass":88.9058403},{"number":40,"isotopes":[{"nominal":78,"mass":77.95566},{"nominal":79,"mass":78.94948},{"nominal":80,"mass":79.9404},{"nominal":81,"mass":80.93731},{"nominal":82,"mass":81.93135},{"nominal":83,"mass":82.9292421},{"nominal":84,"mass":83.9233269},{"nominal":85,"mass":84.9214444},{"nominal":86,"mass":85.9162972},{"nominal":87,"mass":86.914818},{"nominal":88,"mass":87.9102213},{"nominal":89,"mass":88.9088814},{"nominal":90,"mass":89.9046977,"abundance":0.5145},{"nominal":91,"mass":90.9056396,"abundance":0.1122},{"nominal":92,"mass":91.9050347,"abundance":0.1715},{"nominal":93,"mass":92.9064699},{"nominal":94,"mass":93.9063108,"abundance":0.1738},{"nominal":95,"mass":94.9080385},{"nominal":96,"mass":95.9082714,"abundance":0.028},{"nominal":97,"mass":96.9109512},{"nominal":98,"mass":97.9127289},{"nominal":99,"mass":98.916667},{"nominal":100,"mass":99.9180006},{"nominal":101,"mass":100.921448},{"nominal":102,"mass":101.9231409},{"nominal":103,"mass":102.927191},{"nominal":104,"mass":103.929436},{"nominal":105,"mass":104.934008},{"nominal":106,"mass":105.93676},{"nominal":107,"mass":106.94174},{"nominal":108,"mass":107.94487},{"nominal":109,"mass":108.95041},{"nominal":110,"mass":109.95396},{"nominal":111,"mass":110.95968},{"nominal":112,"mass":111.9637}],"symbol":"Zr","mass":91.22364159706,"name":"Zirconium","monoisotopicMass":89.9046977},{"number":41,"isotopes":[{"nominal":81,"mass":80.9496},{"nominal":82,"mass":81.94396},{"nominal":83,"mass":82.93729},{"nominal":84,"mass":83.93449},{"nominal":85,"mass":84.9288458},{"nominal":86,"mass":85.9257828},{"nominal":87,"mass":86.9206937},{"nominal":88,"mass":87.918222},{"nominal":89,"mass":88.913445},{"nominal":90,"mass":89.9112584},{"nominal":91,"mass":90.9069897},{"nominal":92,"mass":91.9071881},{"nominal":93,"mass":92.906373,"abundance":1},{"nominal":94,"mass":93.9072788},{"nominal":95,"mass":94.9068324},{"nominal":96,"mass":95.9080973},{"nominal":97,"mass":96.9080959},{"nominal":98,"mass":97.9103265},{"nominal":99,"mass":98.911613},{"nominal":100,"mass":99.9143276},{"nominal":101,"mass":100.9153103},{"nominal":102,"mass":101.9180772},{"nominal":103,"mass":102.9194572},{"nominal":104,"mass":103.9228925},{"nominal":105,"mass":104.9249465},{"nominal":106,"mass":105.9289317},{"nominal":107,"mass":106.9315937},{"nominal":108,"mass":107.9360748},{"nominal":109,"mass":108.93922},{"nominal":110,"mass":109.94403},{"nominal":111,"mass":110.94753},{"nominal":112,"mass":111.95247},{"nominal":113,"mass":112.95651},{"nominal":114,"mass":113.96201},{"nominal":115,"mass":114.96634}],"symbol":"Nb","mass":92.906373,"name":"Niobium","monoisotopicMass":92.906373},{"number":42,"isotopes":[{"nominal":83,"mass":82.94988},{"nominal":84,"mass":83.94149},{"nominal":85,"mass":84.938261},{"nominal":86,"mass":85.9311748},{"nominal":87,"mass":86.9281962},{"nominal":88,"mass":87.9219678},{"nominal":89,"mass":88.9194682},{"nominal":90,"mass":89.9139309},{"nominal":91,"mass":90.9117453},{"nominal":92,"mass":91.90680796,"abundance":0.1453},{"nominal":93,"mass":92.90680958},{"nominal":94,"mass":93.9050849,"abundance":0.0915},{"nominal":95,"mass":94.90583877,"abundance":0.1584},{"nominal":96,"mass":95.90467612,"abundance":0.1667},{"nominal":97,"mass":96.90601812,"abundance":0.096},{"nominal":98,"mass":97.90540482,"abundance":0.2439},{"nominal":99,"mass":98.90770851},{"nominal":100,"mass":99.9074718,"abundance":0.0982},{"nominal":101,"mass":100.9103414},{"nominal":102,"mass":101.9102834},{"nominal":103,"mass":102.913079},{"nominal":104,"mass":103.9137344},{"nominal":105,"mass":104.916969},{"nominal":106,"mass":105.918259},{"nominal":107,"mass":106.922106},{"nominal":108,"mass":107.924033},{"nominal":109,"mass":108.928424},{"nominal":110,"mass":109.930704},{"nominal":111,"mass":110.935654},{"nominal":112,"mass":111.93831},{"nominal":113,"mass":112.94335},{"nominal":114,"mass":113.94653},{"nominal":115,"mass":114.95196},{"nominal":116,"mass":115.95545},{"nominal":117,"mass":116.96117}],"symbol":"Mo","mass":95.959788541188,"name":"Molybdenum","monoisotopicMass":97.90540482},{"number":43,"isotopes":[{"nominal":85,"mass":84.95058},{"nominal":86,"mass":85.94493},{"nominal":87,"mass":86.9380672},{"nominal":88,"mass":87.93378},{"nominal":89,"mass":88.9276487},{"nominal":90,"mass":89.9240739},{"nominal":91,"mass":90.9184254},{"nominal":92,"mass":91.9152698},{"nominal":93,"mass":92.910246},{"nominal":94,"mass":93.9096536},{"nominal":95,"mass":94.9076536},{"nominal":96,"mass":95.907868},{"nominal":97,"mass":96.9063667},{"nominal":98,"mass":97.9072124},{"nominal":99,"mass":98.9062508},{"nominal":100,"mass":99.9076539},{"nominal":101,"mass":100.907309},{"nominal":102,"mass":101.9092097},{"nominal":103,"mass":102.909176},{"nominal":104,"mass":103.911425},{"nominal":105,"mass":104.911655},{"nominal":106,"mass":105.914358},{"nominal":107,"mass":106.9154606},{"nominal":108,"mass":107.9184957},{"nominal":109,"mass":108.920256},{"nominal":110,"mass":109.923744},{"nominal":111,"mass":110.925901},{"nominal":112,"mass":111.9299458},{"nominal":113,"mass":112.932569},{"nominal":114,"mass":113.93691},{"nominal":115,"mass":114.93998},{"nominal":116,"mass":115.94476},{"nominal":117,"mass":116.94806},{"nominal":118,"mass":117.95299},{"nominal":119,"mass":118.95666},{"nominal":120,"mass":119.96187}],"symbol":"Tc","mass":null,"name":"Technetium"},{"number":44,"isotopes":[{"nominal":87,"mass":86.95069},{"nominal":88,"mass":87.9416},{"nominal":89,"mass":88.93762},{"nominal":90,"mass":89.9303444},{"nominal":91,"mass":90.9267419},{"nominal":92,"mass":91.9202344},{"nominal":93,"mass":92.9171044},{"nominal":94,"mass":93.9113429},{"nominal":95,"mass":94.910406},{"nominal":96,"mass":95.90759025,"abundance":0.0554},{"nominal":97,"mass":96.9075471},{"nominal":98,"mass":97.9052868,"abundance":0.0187},{"nominal":99,"mass":98.9059341,"abundance":0.1276},{"nominal":100,"mass":99.9042143,"abundance":0.126},{"nominal":101,"mass":100.9055769,"abundance":0.1706},{"nominal":102,"mass":101.9043441,"abundance":0.3155},{"nominal":103,"mass":102.9063186},{"nominal":104,"mass":103.9054275,"abundance":0.1862},{"nominal":105,"mass":104.9077476},{"nominal":106,"mass":105.9073291},{"nominal":107,"mass":106.909972},{"nominal":108,"mass":107.910188},{"nominal":109,"mass":108.913326},{"nominal":110,"mass":109.9140407},{"nominal":111,"mass":110.91757},{"nominal":112,"mass":111.918809},{"nominal":113,"mass":112.922844},{"nominal":114,"mass":113.9246136},{"nominal":115,"mass":114.92882},{"nominal":116,"mass":115.9312192},{"nominal":117,"mass":116.9361},{"nominal":118,"mass":117.93853},{"nominal":119,"mass":118.94357},{"nominal":120,"mass":119.94631},{"nominal":121,"mass":120.95164},{"nominal":122,"mass":121.95447},{"nominal":123,"mass":122.95989},{"nominal":124,"mass":123.96305}],"symbol":"Ru","mass":101.06494013916,"name":"Ruthenium","monoisotopicMass":101.9043441},{"number":45,"isotopes":[{"nominal":89,"mass":88.95058},{"nominal":90,"mass":89.94422},{"nominal":91,"mass":90.93688},{"nominal":92,"mass":91.9323677},{"nominal":93,"mass":92.9259128},{"nominal":94,"mass":93.9217305},{"nominal":95,"mass":94.9158979},{"nominal":96,"mass":95.914453},{"nominal":97,"mass":96.911329},{"nominal":98,"mass":97.910708},{"nominal":99,"mass":98.9081282},{"nominal":100,"mass":99.908117},{"nominal":101,"mass":100.9061606},{"nominal":102,"mass":101.9068374},{"nominal":103,"mass":102.905498,"abundance":1},{"nominal":104,"mass":103.9066492},{"nominal":105,"mass":104.9056885},{"nominal":106,"mass":105.9072868},{"nominal":107,"mass":106.906748},{"nominal":108,"mass":107.908714},{"nominal":109,"mass":108.9087488},{"nominal":110,"mass":109.911079},{"nominal":111,"mass":110.9116423},{"nominal":112,"mass":111.914403},{"nominal":113,"mass":112.9154393},{"nominal":114,"mass":113.918718},{"nominal":115,"mass":114.9203116},{"nominal":116,"mass":115.924059},{"nominal":117,"mass":116.9260354},{"nominal":118,"mass":117.93034},{"nominal":119,"mass":118.932557},{"nominal":120,"mass":119.93686},{"nominal":121,"mass":120.93942},{"nominal":122,"mass":121.94399},{"nominal":123,"mass":122.94685},{"nominal":124,"mass":123.95151},{"nominal":125,"mass":124.95469},{"nominal":126,"mass":125.95946}],"symbol":"Rh","mass":102.905498,"name":"Rhodium","monoisotopicMass":102.905498},{"number":46,"isotopes":[{"nominal":91,"mass":90.95032},{"nominal":92,"mass":91.94088},{"nominal":93,"mass":92.93651},{"nominal":94,"mass":93.9290376},{"nominal":95,"mass":94.9248898},{"nominal":96,"mass":95.9182151},{"nominal":97,"mass":96.916472},{"nominal":98,"mass":97.9126983},{"nominal":99,"mass":98.9117748},{"nominal":100,"mass":99.908505},{"nominal":101,"mass":100.9082864},{"nominal":102,"mass":101.9056022,"abundance":0.0102},{"nominal":103,"mass":102.9060809},{"nominal":104,"mass":103.9040305,"abundance":0.1114},{"nominal":105,"mass":104.9050796,"abundance":0.2233},{"nominal":106,"mass":105.9034804,"abundance":0.2733},{"nominal":107,"mass":106.9051282},{"nominal":108,"mass":107.9038916,"abundance":0.2646},{"nominal":109,"mass":108.9059504},{"nominal":110,"mass":109.9051722,"abundance":0.1172},{"nominal":111,"mass":110.90768968},{"nominal":112,"mass":111.9073297},{"nominal":113,"mass":112.910261},{"nominal":114,"mass":113.9103686},{"nominal":115,"mass":114.913659},{"nominal":116,"mass":115.914297},{"nominal":117,"mass":116.9179547},{"nominal":118,"mass":117.9190667},{"nominal":119,"mass":118.9233402},{"nominal":120,"mass":119.9245511},{"nominal":121,"mass":120.9289503},{"nominal":122,"mass":121.930632},{"nominal":123,"mass":122.93514},{"nominal":124,"mass":123.93714},{"nominal":125,"mass":124.94179},{"nominal":126,"mass":125.94416},{"nominal":127,"mass":126.94907},{"nominal":128,"mass":127.95183}],"symbol":"Pd","mass":106.41532750734,"name":"Palladium","monoisotopicMass":105.9034804},{"number":47,"isotopes":[{"nominal":93,"mass":92.95033},{"nominal":94,"mass":93.94373},{"nominal":95,"mass":94.93602},{"nominal":96,"mass":95.930744},{"nominal":97,"mass":96.92397},{"nominal":98,"mass":97.92156},{"nominal":99,"mass":98.9176458},{"nominal":100,"mass":99.9161154},{"nominal":101,"mass":100.912684},{"nominal":102,"mass":101.9117047},{"nominal":103,"mass":102.9089631},{"nominal":104,"mass":103.9086239},{"nominal":105,"mass":104.9065256},{"nominal":106,"mass":105.9066636},{"nominal":107,"mass":106.9050916,"abundance":0.51839},{"nominal":108,"mass":107.9059503},{"nominal":109,"mass":108.9047553,"abundance":0.48161},{"nominal":110,"mass":109.9061102},{"nominal":111,"mass":110.9052959},{"nominal":112,"mass":111.9070486},{"nominal":113,"mass":112.906573},{"nominal":114,"mass":113.908823},{"nominal":115,"mass":114.908767},{"nominal":116,"mass":115.9113868},{"nominal":117,"mass":116.911774},{"nominal":118,"mass":117.9145955},{"nominal":119,"mass":118.91557},{"nominal":120,"mass":119.9187848},{"nominal":121,"mass":120.920125},{"nominal":122,"mass":121.923664},{"nominal":123,"mass":122.925337},{"nominal":124,"mass":123.92893},{"nominal":125,"mass":124.93105},{"nominal":126,"mass":125.93475},{"nominal":127,"mass":126.93711},{"nominal":128,"mass":127.94106},{"nominal":129,"mass":128.94395},{"nominal":130,"mass":129.9507}],"symbol":"Ag","mass":107.868149634557,"name":"Silver","monoisotopicMass":106.9050916},{"number":48,"isotopes":[{"nominal":95,"mass":94.94994},{"nominal":96,"mass":95.94034},{"nominal":97,"mass":96.9351},{"nominal":98,"mass":97.927389},{"nominal":99,"mass":98.9249258},{"nominal":100,"mass":99.9203488},{"nominal":101,"mass":100.9185862},{"nominal":102,"mass":101.914482},{"nominal":103,"mass":102.9134165},{"nominal":104,"mass":103.9098564},{"nominal":105,"mass":104.9094639},{"nominal":106,"mass":105.9064599,"abundance":0.0125},{"nominal":107,"mass":106.9066121},{"nominal":108,"mass":107.9041834,"abundance":0.0089},{"nominal":109,"mass":108.9049867},{"nominal":110,"mass":109.90300661,"abundance":0.1249},{"nominal":111,"mass":110.90418287,"abundance":0.128},{"nominal":112,"mass":111.90276287,"abundance":0.2413},{"nominal":113,"mass":112.90440813,"abundance":0.1222},{"nominal":114,"mass":113.90336509,"abundance":0.2873},{"nominal":115,"mass":114.90543751},{"nominal":116,"mass":115.90476315,"abundance":0.0749},{"nominal":117,"mass":116.907226},{"nominal":118,"mass":117.906922},{"nominal":119,"mass":118.909847},{"nominal":120,"mass":119.9098681},{"nominal":121,"mass":120.9129637},{"nominal":122,"mass":121.9134591},{"nominal":123,"mass":122.9168925},{"nominal":124,"mass":123.9176574},{"nominal":125,"mass":124.9212576},{"nominal":126,"mass":125.9224291},{"nominal":127,"mass":126.926472},{"nominal":128,"mass":127.9278129},{"nominal":129,"mass":128.93182},{"nominal":130,"mass":129.93394},{"nominal":131,"mass":130.9406},{"nominal":132,"mass":131.94604},{"nominal":133,"mass":132.95285}],"symbol":"Cd","mass":112.411557818268,"name":"Cadmium","monoisotopicMass":113.90336509},{"number":49,"isotopes":[{"nominal":97,"mass":96.94934},{"nominal":98,"mass":97.94214},{"nominal":99,"mass":98.93411},{"nominal":100,"mass":99.93096},{"nominal":101,"mass":100.92634},{"nominal":102,"mass":101.9241071},{"nominal":103,"mass":102.9198819},{"nominal":104,"mass":103.9182145},{"nominal":105,"mass":104.914502},{"nominal":106,"mass":105.913464},{"nominal":107,"mass":106.91029},{"nominal":108,"mass":107.9096935},{"nominal":109,"mass":108.9071514},{"nominal":110,"mass":109.90717},{"nominal":111,"mass":110.9051085},{"nominal":112,"mass":111.9055377},{"nominal":113,"mass":112.90406184,"abundance":0.0429},{"nominal":114,"mass":113.90491791},{"nominal":115,"mass":114.903878776,"abundance":0.9571},{"nominal":116,"mass":115.90525999},{"nominal":117,"mass":116.9045157},{"nominal":118,"mass":117.9063566},{"nominal":119,"mass":118.9058507},{"nominal":120,"mass":119.907967},{"nominal":121,"mass":120.907851},{"nominal":122,"mass":121.910281},{"nominal":123,"mass":122.910434},{"nominal":124,"mass":123.913182},{"nominal":125,"mass":124.913605},{"nominal":126,"mass":125.916507},{"nominal":127,"mass":126.917446},{"nominal":128,"mass":127.9204},{"nominal":129,"mass":128.9218053},{"nominal":130,"mass":129.924977},{"nominal":131,"mass":130.9269715},{"nominal":132,"mass":131.933001},{"nominal":133,"mass":132.93831},{"nominal":134,"mass":133.94454},{"nominal":135,"mass":134.95005}],"symbol":"In","mass":114.81808662944559,"name":"Indium","monoisotopicMass":114.903878776},{"number":50,"isotopes":[{"nominal":99,"mass":98.94853},{"nominal":100,"mass":99.9385},{"nominal":101,"mass":100.93526},{"nominal":102,"mass":101.93029},{"nominal":103,"mass":102.928105},{"nominal":104,"mass":103.9231052},{"nominal":105,"mass":104.9212684},{"nominal":106,"mass":105.9169574},{"nominal":107,"mass":106.9157137},{"nominal":108,"mass":107.9118943},{"nominal":109,"mass":108.9112921},{"nominal":110,"mass":109.907845},{"nominal":111,"mass":110.9077401},{"nominal":112,"mass":111.90482387,"abundance":0.0097},{"nominal":113,"mass":112.9051757},{"nominal":114,"mass":113.9027827,"abundance":0.0066},{"nominal":115,"mass":114.903344699,"abundance":0.0034},{"nominal":116,"mass":115.9017428,"abundance":0.1454},{"nominal":117,"mass":116.90295398,"abundance":0.0768},{"nominal":118,"mass":117.90160657,"abundance":0.2422},{"nominal":119,"mass":118.90331117,"abundance":0.0859},{"nominal":120,"mass":119.90220163,"abundance":0.3258},{"nominal":121,"mass":120.9042426},{"nominal":122,"mass":121.9034438,"abundance":0.0463},{"nominal":123,"mass":122.9057252},{"nominal":124,"mass":123.9052766,"abundance":0.0579},{"nominal":125,"mass":124.9077864},{"nominal":126,"mass":125.907659},{"nominal":127,"mass":126.91039},{"nominal":128,"mass":127.910507},{"nominal":129,"mass":128.913465},{"nominal":130,"mass":129.9139738},{"nominal":131,"mass":130.917045},{"nominal":132,"mass":131.9178267},{"nominal":133,"mass":132.9239134},{"nominal":134,"mass":133.9286821},{"nominal":135,"mass":134.9349086},{"nominal":136,"mass":135.93999},{"nominal":137,"mass":136.94655},{"nominal":138,"mass":137.95184}],"symbol":"Sn","mass":118.71011259301059,"name":"Tin","monoisotopicMass":119.90220163},{"number":51,"isotopes":[{"nominal":103,"mass":102.93969},{"nominal":104,"mass":103.93648},{"nominal":105,"mass":104.931276},{"nominal":106,"mass":105.928638},{"nominal":107,"mass":106.9241506},{"nominal":108,"mass":107.9222267},{"nominal":109,"mass":108.9181411},{"nominal":110,"mass":109.9168543},{"nominal":111,"mass":110.9132182},{"nominal":112,"mass":111.9124},{"nominal":113,"mass":112.909375},{"nominal":114,"mass":113.90929},{"nominal":115,"mass":114.906598},{"nominal":116,"mass":115.9067931},{"nominal":117,"mass":116.9048415},{"nominal":118,"mass":117.9055321},{"nominal":119,"mass":118.9039455},{"nominal":120,"mass":119.9050794},{"nominal":121,"mass":120.903812,"abundance":0.5721},{"nominal":122,"mass":121.9051699},{"nominal":123,"mass":122.9042132,"abundance":0.4279},{"nominal":124,"mass":123.905935},{"nominal":125,"mass":124.905253},{"nominal":126,"mass":125.907253},{"nominal":127,"mass":126.9069243},{"nominal":128,"mass":127.909146},{"nominal":129,"mass":128.909147},{"nominal":130,"mass":129.911662},{"nominal":131,"mass":130.9119888},{"nominal":132,"mass":131.9145077},{"nominal":133,"mass":132.9152732},{"nominal":134,"mass":133.9205357},{"nominal":135,"mass":134.9251851},{"nominal":136,"mass":135.9307459},{"nominal":137,"mass":136.93555},{"nominal":138,"mass":137.94145},{"nominal":139,"mass":138.94655},{"nominal":140,"mass":139.95283}],"symbol":"Sb","mass":121.75978367348,"name":"Antimony","monoisotopicMass":120.903812},{"number":52,"isotopes":[{"nominal":105,"mass":104.9433},{"nominal":106,"mass":105.9375},{"nominal":107,"mass":106.935012},{"nominal":108,"mass":107.9293805},{"nominal":109,"mass":108.9273045},{"nominal":110,"mass":109.9224581},{"nominal":111,"mass":110.9210006},{"nominal":112,"mass":111.9167279},{"nominal":113,"mass":112.915891},{"nominal":114,"mass":113.912089},{"nominal":115,"mass":114.911902},{"nominal":116,"mass":115.90846},{"nominal":117,"mass":116.908646},{"nominal":118,"mass":117.905854},{"nominal":119,"mass":118.9064071},{"nominal":120,"mass":119.9040593,"abundance":0.0009},{"nominal":121,"mass":120.904944},{"nominal":122,"mass":121.9030435,"abundance":0.0255},{"nominal":123,"mass":122.9042698,"abundance":0.0089},{"nominal":124,"mass":123.9028171,"abundance":0.0474},{"nominal":125,"mass":124.9044299,"abundance":0.0707},{"nominal":126,"mass":125.9033109,"abundance":0.1884},{"nominal":127,"mass":126.9052257},{"nominal":128,"mass":127.90446128,"abundance":0.3174},{"nominal":129,"mass":128.90659646},{"nominal":130,"mass":129.906222748,"abundance":0.3408},{"nominal":131,"mass":130.908522213},{"nominal":132,"mass":131.9085467},{"nominal":133,"mass":132.9109688},{"nominal":134,"mass":133.911394},{"nominal":135,"mass":134.9165557},{"nominal":136,"mass":135.9201006},{"nominal":137,"mass":136.9255989},{"nominal":138,"mass":137.9294722},{"nominal":139,"mass":138.9353672},{"nominal":140,"mass":139.939499},{"nominal":141,"mass":140.9458},{"nominal":142,"mass":141.95022},{"nominal":143,"mass":142.95676}],"symbol":"Te","mass":127.6031264846604,"name":"Tellurium","monoisotopicMass":129.906222748},{"number":53,"isotopes":[{"nominal":107,"mass":106.94678},{"nominal":108,"mass":107.94348},{"nominal":109,"mass":108.9380853},{"nominal":110,"mass":109.935089},{"nominal":111,"mass":110.9302692},{"nominal":112,"mass":111.928005},{"nominal":113,"mass":112.9236501},{"nominal":114,"mass":113.92185},{"nominal":115,"mass":114.918048},{"nominal":116,"mass":115.91681},{"nominal":117,"mass":116.913648},{"nominal":118,"mass":117.913074},{"nominal":119,"mass":118.910074},{"nominal":120,"mass":119.910087},{"nominal":121,"mass":120.9074051},{"nominal":122,"mass":121.9075888},{"nominal":123,"mass":122.9055885},{"nominal":124,"mass":123.906209},{"nominal":125,"mass":124.9046294},{"nominal":126,"mass":125.9056233},{"nominal":127,"mass":126.9044719,"abundance":1},{"nominal":128,"mass":127.9058086},{"nominal":129,"mass":128.9049837},{"nominal":130,"mass":129.9066702},{"nominal":131,"mass":130.9061263},{"nominal":132,"mass":131.9079935},{"nominal":133,"mass":132.907797},{"nominal":134,"mass":133.9097588},{"nominal":135,"mass":134.9100488},{"nominal":136,"mass":135.914604},{"nominal":137,"mass":136.9180282},{"nominal":138,"mass":137.9227264},{"nominal":139,"mass":138.926506},{"nominal":140,"mass":139.93173},{"nominal":141,"mass":140.93569},{"nominal":142,"mass":141.9412},{"nominal":143,"mass":142.94565},{"nominal":144,"mass":143.95139},{"nominal":145,"mass":144.95605}],"symbol":"I","mass":126.9044719,"name":"Iodine","monoisotopicMass":126.9044719},{"number":54,"isotopes":[{"nominal":109,"mass":108.95043},{"nominal":110,"mass":109.94426},{"nominal":111,"mass":110.941607},{"nominal":112,"mass":111.935559},{"nominal":113,"mass":112.9332217},{"nominal":114,"mass":113.92798},{"nominal":115,"mass":114.926294},{"nominal":116,"mass":115.921581},{"nominal":117,"mass":116.920359},{"nominal":118,"mass":117.916179},{"nominal":119,"mass":118.915411},{"nominal":120,"mass":119.911784},{"nominal":121,"mass":120.911453},{"nominal":122,"mass":121.908368},{"nominal":123,"mass":122.908482},{"nominal":124,"mass":123.905892,"abundance":0.000952},{"nominal":125,"mass":124.9063944},{"nominal":126,"mass":125.9042983,"abundance":0.00089},{"nominal":127,"mass":126.9051829},{"nominal":128,"mass":127.903531,"abundance":0.019102},{"nominal":129,"mass":128.9047808611,"abundance":0.264006},{"nominal":130,"mass":129.903509349,"abundance":0.04071},{"nominal":131,"mass":130.90508406,"abundance":0.212324},{"nominal":132,"mass":131.9041550856,"abundance":0.269086},{"nominal":133,"mass":132.9059108},{"nominal":134,"mass":133.90539466,"abundance":0.104357},{"nominal":135,"mass":134.9072278},{"nominal":136,"mass":135.907214484,"abundance":0.088573},{"nominal":137,"mass":136.91155778},{"nominal":138,"mass":137.9141463},{"nominal":139,"mass":138.9187922},{"nominal":140,"mass":139.9216458},{"nominal":141,"mass":140.9267872},{"nominal":142,"mass":141.9299731},{"nominal":143,"mass":142.9353696},{"nominal":144,"mass":143.9389451},{"nominal":145,"mass":144.94472},{"nominal":146,"mass":145.948518},{"nominal":147,"mass":146.95426},{"nominal":148,"mass":147.95813}],"symbol":"Xe","mass":131.29276144779053,"name":"Xenon","monoisotopicMass":131.9041550856},{"number":55,"isotopes":[{"nominal":112,"mass":111.950309},{"nominal":113,"mass":112.9444291},{"nominal":114,"mass":113.941296},{"nominal":115,"mass":114.93591},{"nominal":116,"mass":115.93337},{"nominal":117,"mass":116.928617},{"nominal":118,"mass":117.92656},{"nominal":119,"mass":118.922377},{"nominal":120,"mass":119.920677},{"nominal":121,"mass":120.917227},{"nominal":122,"mass":121.916108},{"nominal":123,"mass":122.912996},{"nominal":124,"mass":123.9122578},{"nominal":125,"mass":124.909728},{"nominal":126,"mass":125.909446},{"nominal":127,"mass":126.9074174},{"nominal":128,"mass":127.9077487},{"nominal":129,"mass":128.9060657},{"nominal":130,"mass":129.9067093},{"nominal":131,"mass":130.9054649},{"nominal":132,"mass":131.9064339},{"nominal":133,"mass":132.905451961,"abundance":1},{"nominal":134,"mass":133.906718503},{"nominal":135,"mass":134.905977},{"nominal":136,"mass":135.9073114},{"nominal":137,"mass":136.90708923},{"nominal":138,"mass":137.9110171},{"nominal":139,"mass":138.9133638},{"nominal":140,"mass":139.9172831},{"nominal":141,"mass":140.9200455},{"nominal":142,"mass":141.924296},{"nominal":143,"mass":142.927349},{"nominal":144,"mass":143.932076},{"nominal":145,"mass":144.935527},{"nominal":146,"mass":145.940344},{"nominal":147,"mass":146.944156},{"nominal":148,"mass":147.94923},{"nominal":149,"mass":148.95302},{"nominal":150,"mass":149.95833},{"nominal":151,"mass":150.96258}],"symbol":"Cs","mass":132.905451961,"name":"Caesium","monoisotopicMass":132.905451961},{"number":56,"isotopes":[{"nominal":114,"mass":113.95066},{"nominal":115,"mass":114.94737},{"nominal":116,"mass":115.94128},{"nominal":117,"mass":116.93814},{"nominal":118,"mass":117.93306},{"nominal":119,"mass":118.93066},{"nominal":120,"mass":119.92605},{"nominal":121,"mass":120.92405},{"nominal":122,"mass":121.919904},{"nominal":123,"mass":122.918781},{"nominal":124,"mass":123.915094},{"nominal":125,"mass":124.914472},{"nominal":126,"mass":125.91125},{"nominal":127,"mass":126.911091},{"nominal":128,"mass":127.908342},{"nominal":129,"mass":128.908681},{"nominal":130,"mass":129.9063207,"abundance":0.00106},{"nominal":131,"mass":130.906941},{"nominal":132,"mass":131.9050611,"abundance":0.00101},{"nominal":133,"mass":132.9060074},{"nominal":134,"mass":133.90450818,"abundance":0.02417},{"nominal":135,"mass":134.90568838,"abundance":0.06592},{"nominal":136,"mass":135.90457573,"abundance":0.07854},{"nominal":137,"mass":136.90582714,"abundance":0.11232},{"nominal":138,"mass":137.905247,"abundance":0.71698},{"nominal":139,"mass":138.9088411},{"nominal":140,"mass":139.9106057},{"nominal":141,"mass":140.9144033},{"nominal":142,"mass":141.9164324},{"nominal":143,"mass":142.9206253},{"nominal":144,"mass":143.9229549},{"nominal":145,"mass":144.9275184},{"nominal":146,"mass":145.930284},{"nominal":147,"mass":146.935304},{"nominal":148,"mass":147.938171},{"nominal":149,"mass":148.94308},{"nominal":150,"mass":149.94605},{"nominal":151,"mass":150.95127},{"nominal":152,"mass":151.95481},{"nominal":153,"mass":152.96036}],"symbol":"Ba","mass":137.3268916286322,"name":"Barium","monoisotopicMass":137.905247},{"number":57,"isotopes":[{"nominal":116,"mass":115.9563},{"nominal":117,"mass":116.94999},{"nominal":118,"mass":117.94673},{"nominal":119,"mass":118.94099},{"nominal":120,"mass":119.93807},{"nominal":121,"mass":120.93315},{"nominal":122,"mass":121.93071},{"nominal":123,"mass":122.9263},{"nominal":124,"mass":123.924574},{"nominal":125,"mass":124.920816},{"nominal":126,"mass":125.919513},{"nominal":127,"mass":126.916375},{"nominal":128,"mass":127.915592},{"nominal":129,"mass":128.912694},{"nominal":130,"mass":129.912369},{"nominal":131,"mass":130.91007},{"nominal":132,"mass":131.910119},{"nominal":133,"mass":132.908218},{"nominal":134,"mass":133.908514},{"nominal":135,"mass":134.906984},{"nominal":136,"mass":135.907635},{"nominal":137,"mass":136.9064504},{"nominal":138,"mass":137.9071149,"abundance":0.0008881},{"nominal":139,"mass":138.9063563,"abundance":0.9991119},{"nominal":140,"mass":139.9094806},{"nominal":141,"mass":140.910966},{"nominal":142,"mass":141.9140909},{"nominal":143,"mass":142.9160795},{"nominal":144,"mass":143.919646},{"nominal":145,"mass":144.921808},{"nominal":146,"mass":145.925875},{"nominal":147,"mass":146.928418},{"nominal":148,"mass":147.932679},{"nominal":149,"mass":148.93535},{"nominal":150,"mass":149.93947},{"nominal":151,"mass":150.94232},{"nominal":152,"mass":151.94682},{"nominal":153,"mass":152.95036},{"nominal":154,"mass":153.95517},{"nominal":155,"mass":154.95901}],"symbol":"La","mass":138.90546887371266,"name":"Lanthanum","monoisotopicMass":138.9063563},{"number":58,"isotopes":[{"nominal":119,"mass":118.95271},{"nominal":120,"mass":119.94654},{"nominal":121,"mass":120.94335},{"nominal":122,"mass":121.93787},{"nominal":123,"mass":122.93528},{"nominal":124,"mass":123.93031},{"nominal":125,"mass":124.92844},{"nominal":126,"mass":125.923971},{"nominal":127,"mass":126.922727},{"nominal":128,"mass":127.918911},{"nominal":129,"mass":128.918102},{"nominal":130,"mass":129.914736},{"nominal":131,"mass":130.914429},{"nominal":132,"mass":131.911464},{"nominal":133,"mass":132.91152},{"nominal":134,"mass":133.908928},{"nominal":135,"mass":134.909161},{"nominal":136,"mass":135.90712921,"abundance":0.00185},{"nominal":137,"mass":136.90776236},{"nominal":138,"mass":137.905991,"abundance":0.00251},{"nominal":139,"mass":138.9066551},{"nominal":140,"mass":139.9054431,"abundance":0.8845},{"nominal":141,"mass":140.9082807},{"nominal":142,"mass":141.9092504,"abundance":0.11114},{"nominal":143,"mass":142.9123921},{"nominal":144,"mass":143.9136529},{"nominal":145,"mass":144.917265},{"nominal":146,"mass":145.918802},{"nominal":147,"mass":146.9226899},{"nominal":148,"mass":147.924424},{"nominal":149,"mass":148.928427},{"nominal":150,"mass":149.930384},{"nominal":151,"mass":150.934272},{"nominal":152,"mass":151.9366},{"nominal":153,"mass":152.94093},{"nominal":154,"mass":153.9438},{"nominal":155,"mass":154.94855},{"nominal":156,"mass":155.95183},{"nominal":157,"mass":156.95705}],"symbol":"Ce","mass":140.1157307378545,"name":"Cerium","monoisotopicMass":139.9054431},{"number":59,"isotopes":[{"nominal":121,"mass":120.95532},{"nominal":122,"mass":121.95175},{"nominal":123,"mass":122.94596},{"nominal":124,"mass":123.94294},{"nominal":125,"mass":124.9377},{"nominal":126,"mass":125.93524},{"nominal":127,"mass":126.93071},{"nominal":128,"mass":127.928791},{"nominal":129,"mass":128.925095},{"nominal":130,"mass":129.92359},{"nominal":131,"mass":130.920235},{"nominal":132,"mass":131.919255},{"nominal":133,"mass":132.916331},{"nominal":134,"mass":133.915697},{"nominal":135,"mass":134.913112},{"nominal":136,"mass":135.912677},{"nominal":137,"mass":136.9106792},{"nominal":138,"mass":137.910754},{"nominal":139,"mass":138.9089408},{"nominal":140,"mass":139.9090803},{"nominal":141,"mass":140.9076576,"abundance":1},{"nominal":142,"mass":141.9100496},{"nominal":143,"mass":142.9108228},{"nominal":144,"mass":143.9133109},{"nominal":145,"mass":144.9145182},{"nominal":146,"mass":145.91768},{"nominal":147,"mass":146.919008},{"nominal":148,"mass":147.92213},{"nominal":149,"mass":148.923736},{"nominal":150,"mass":149.9266765},{"nominal":151,"mass":150.928309},{"nominal":152,"mass":151.931553},{"nominal":153,"mass":152.933904},{"nominal":154,"mass":153.93753},{"nominal":155,"mass":154.940509},{"nominal":156,"mass":155.94464},{"nominal":157,"mass":156.94789},{"nominal":158,"mass":157.95241},{"nominal":159,"mass":158.95589}],"symbol":"Pr","mass":140.9076576,"name":"Praseodymium","monoisotopicMass":140.9076576},{"number":60,"isotopes":[{"nominal":124,"mass":123.9522},{"nominal":125,"mass":124.9489},{"nominal":126,"mass":125.94311},{"nominal":127,"mass":126.94038},{"nominal":128,"mass":127.93525},{"nominal":129,"mass":128.9331},{"nominal":130,"mass":129.928506},{"nominal":131,"mass":130.927248},{"nominal":132,"mass":131.923321},{"nominal":133,"mass":132.922348},{"nominal":134,"mass":133.91879},{"nominal":135,"mass":134.918181},{"nominal":136,"mass":135.914976},{"nominal":137,"mass":136.914562},{"nominal":138,"mass":137.91195},{"nominal":139,"mass":138.911954},{"nominal":140,"mass":139.90955},{"nominal":141,"mass":140.9096147},{"nominal":142,"mass":141.907729,"abundance":0.27152},{"nominal":143,"mass":142.90982,"abundance":0.12174},{"nominal":144,"mass":143.910093,"abundance":0.23798},{"nominal":145,"mass":144.9125793,"abundance":0.08293},{"nominal":146,"mass":145.9131226,"abundance":0.17189},{"nominal":147,"mass":146.9161061},{"nominal":148,"mass":147.9168993,"abundance":0.05756},{"nominal":149,"mass":148.9201548},{"nominal":150,"mass":149.9209022,"abundance":0.05638},{"nominal":151,"mass":150.9238403},{"nominal":152,"mass":151.924692},{"nominal":153,"mass":152.927718},{"nominal":154,"mass":153.92948},{"nominal":155,"mass":154.9331357},{"nominal":156,"mass":155.93508},{"nominal":157,"mass":156.939386},{"nominal":158,"mass":157.94197},{"nominal":159,"mass":158.94653},{"nominal":160,"mass":159.9494},{"nominal":161,"mass":160.95428}],"symbol":"Nd","mass":144.241596031827,"name":"Neodymium","monoisotopicMass":141.907729},{"number":61,"isotopes":[{"nominal":126,"mass":125.95792},{"nominal":127,"mass":126.95192},{"nominal":128,"mass":127.9487},{"nominal":129,"mass":128.94323},{"nominal":130,"mass":129.94053},{"nominal":131,"mass":130.93567},{"nominal":132,"mass":131.93384},{"nominal":133,"mass":132.929782},{"nominal":134,"mass":133.928353},{"nominal":135,"mass":134.924823},{"nominal":136,"mass":135.923585},{"nominal":137,"mass":136.92048},{"nominal":138,"mass":137.919548},{"nominal":139,"mass":138.9168},{"nominal":140,"mass":139.91604},{"nominal":141,"mass":140.913555},{"nominal":142,"mass":141.91289},{"nominal":143,"mass":142.9109383},{"nominal":144,"mass":143.9125964},{"nominal":145,"mass":144.9127559},{"nominal":146,"mass":145.9147024},{"nominal":147,"mass":146.915145},{"nominal":148,"mass":147.9174819},{"nominal":149,"mass":148.9183423},{"nominal":150,"mass":149.920991},{"nominal":151,"mass":150.9212175},{"nominal":152,"mass":151.923506},{"nominal":153,"mass":152.9241567},{"nominal":154,"mass":153.926472},{"nominal":155,"mass":154.928137},{"nominal":156,"mass":155.9311175},{"nominal":157,"mass":156.9331214},{"nominal":158,"mass":157.936565},{"nominal":159,"mass":158.939287},{"nominal":160,"mass":159.9431},{"nominal":161,"mass":160.94607},{"nominal":162,"mass":161.95022},{"nominal":163,"mass":162.95357}],"symbol":"Pm","mass":null,"name":"Promethium"},{"number":62,"isotopes":[{"nominal":128,"mass":127.95842},{"nominal":129,"mass":128.95476},{"nominal":130,"mass":129.949},{"nominal":131,"mass":130.94618},{"nominal":132,"mass":131.94087},{"nominal":133,"mass":132.93856},{"nominal":134,"mass":133.93411},{"nominal":135,"mass":134.93252},{"nominal":136,"mass":135.928276},{"nominal":137,"mass":136.926971},{"nominal":138,"mass":137.923244},{"nominal":139,"mass":138.922297},{"nominal":140,"mass":139.918995},{"nominal":141,"mass":140.9184816},{"nominal":142,"mass":141.9152044},{"nominal":143,"mass":142.9146353},{"nominal":144,"mass":143.9120065,"abundance":0.0307},{"nominal":145,"mass":144.9134173},{"nominal":146,"mass":145.913047},{"nominal":147,"mass":146.9149044,"abundance":0.1499},{"nominal":148,"mass":147.9148292,"abundance":0.1124},{"nominal":149,"mass":148.9171921,"abundance":0.1382},{"nominal":150,"mass":149.9172829,"abundance":0.0738},{"nominal":151,"mass":150.9199398},{"nominal":152,"mass":151.9197397,"abundance":0.2675},{"nominal":153,"mass":152.9221047},{"nominal":154,"mass":153.9222169,"abundance":0.2275},{"nominal":155,"mass":154.9246477},{"nominal":156,"mass":155.925536},{"nominal":157,"mass":156.9284187},{"nominal":158,"mass":157.929951},{"nominal":159,"mass":158.9332172},{"nominal":160,"mass":159.9353353},{"nominal":161,"mass":160.9391602},{"nominal":162,"mass":161.94146},{"nominal":163,"mass":162.94555},{"nominal":164,"mass":163.94836},{"nominal":165,"mass":164.95297}],"symbol":"Sm","mass":150.36635571193,"name":"Samarium","monoisotopicMass":151.9197397},{"number":63,"isotopes":[{"nominal":130,"mass":129.96369},{"nominal":131,"mass":130.95784},{"nominal":132,"mass":131.95467},{"nominal":133,"mass":132.94929},{"nominal":134,"mass":133.9464},{"nominal":135,"mass":134.94187},{"nominal":136,"mass":135.93962},{"nominal":137,"mass":136.93546},{"nominal":138,"mass":137.933709},{"nominal":139,"mass":138.929792},{"nominal":140,"mass":139.928088},{"nominal":141,"mass":140.924932},{"nominal":142,"mass":141.923442},{"nominal":143,"mass":142.920299},{"nominal":144,"mass":143.91882},{"nominal":145,"mass":144.9162726},{"nominal":146,"mass":145.917211},{"nominal":147,"mass":146.9167527},{"nominal":148,"mass":147.918089},{"nominal":149,"mass":148.9179378},{"nominal":150,"mass":149.9197077},{"nominal":151,"mass":150.9198578,"abundance":0.4781},{"nominal":152,"mass":151.9217522},{"nominal":153,"mass":152.921238,"abundance":0.5219},{"nominal":154,"mass":153.922987},{"nominal":155,"mass":154.9229011},{"nominal":156,"mass":155.9247605},{"nominal":157,"mass":156.9254334},{"nominal":158,"mass":157.927799},{"nominal":159,"mass":158.9291001},{"nominal":160,"mass":159.931851},{"nominal":161,"mass":160.933664},{"nominal":162,"mass":161.936989},{"nominal":163,"mass":162.939196},{"nominal":164,"mass":163.94274},{"nominal":165,"mass":164.94559},{"nominal":166,"mass":165.94962},{"nominal":167,"mass":166.95289}],"symbol":"Eu","mass":151.96437812637998,"name":"Europium","monoisotopicMass":152.921238},{"number":64,"isotopes":[{"nominal":133,"mass":132.96133},{"nominal":134,"mass":133.95566},{"nominal":135,"mass":134.95245},{"nominal":136,"mass":135.9473},{"nominal":137,"mass":136.94502},{"nominal":138,"mass":137.94025},{"nominal":139,"mass":138.93813},{"nominal":140,"mass":139.933674},{"nominal":141,"mass":140.932126},{"nominal":142,"mass":141.928116},{"nominal":143,"mass":142.92675},{"nominal":144,"mass":143.922963},{"nominal":145,"mass":144.921713},{"nominal":146,"mass":145.9183188},{"nominal":147,"mass":146.9191014},{"nominal":148,"mass":147.9181215},{"nominal":149,"mass":148.9193481},{"nominal":150,"mass":149.9186644},{"nominal":151,"mass":150.920356},{"nominal":152,"mass":151.9197995,"abundance":0.002},{"nominal":153,"mass":152.921758},{"nominal":154,"mass":153.9208741,"abundance":0.0218},{"nominal":155,"mass":154.9226305,"abundance":0.148},{"nominal":156,"mass":155.9221312,"abundance":0.2047},{"nominal":157,"mass":156.9239686,"abundance":0.1565},{"nominal":158,"mass":157.9241123,"abundance":0.2484},{"nominal":159,"mass":158.926397},{"nominal":160,"mass":159.9270624,"abundance":0.2186},{"nominal":161,"mass":160.9296775},{"nominal":162,"mass":161.930993},{"nominal":163,"mass":162.9341769},{"nominal":164,"mass":163.93583},{"nominal":165,"mass":164.93936},{"nominal":166,"mass":165.94146},{"nominal":167,"mass":166.94545},{"nominal":168,"mass":167.94808},{"nominal":169,"mass":168.9526}],"symbol":"Gd","mass":157.25213064687998,"name":"Gadolinium","monoisotopicMass":157.9241123},{"number":65,"isotopes":[{"nominal":135,"mass":134.96476},{"nominal":136,"mass":135.96129},{"nominal":137,"mass":136.95602},{"nominal":138,"mass":137.95312},{"nominal":139,"mass":138.94833},{"nominal":140,"mass":139.94581},{"nominal":141,"mass":140.94145},{"nominal":142,"mass":141.93928},{"nominal":143,"mass":142.935137},{"nominal":144,"mass":143.933045},{"nominal":145,"mass":144.92882},{"nominal":146,"mass":145.927253},{"nominal":147,"mass":146.9240548},{"nominal":148,"mass":147.924282},{"nominal":149,"mass":148.9232535},{"nominal":150,"mass":149.9236649},{"nominal":151,"mass":150.9231096},{"nominal":152,"mass":151.924083},{"nominal":153,"mass":152.9234424},{"nominal":154,"mass":153.924685},{"nominal":155,"mass":154.923511},{"nominal":156,"mass":155.9247552},{"nominal":157,"mass":156.924033},{"nominal":158,"mass":157.9254209},{"nominal":159,"mass":158.9253547,"abundance":1},{"nominal":160,"mass":159.9271756},{"nominal":161,"mass":160.9275778},{"nominal":162,"mass":161.929495},{"nominal":163,"mass":162.9306547},{"nominal":164,"mass":163.93336},{"nominal":165,"mass":164.93498},{"nominal":166,"mass":165.93786},{"nominal":167,"mass":166.93996},{"nominal":168,"mass":167.9434},{"nominal":169,"mass":168.94597},{"nominal":170,"mass":169.94984},{"nominal":171,"mass":170.95273}],"symbol":"Tb","mass":158.9253547,"name":"Terbium","monoisotopicMass":158.9253547},{"number":66,"isotopes":[{"nominal":138,"mass":137.9625},{"nominal":139,"mass":138.95959},{"nominal":140,"mass":139.95402},{"nominal":141,"mass":140.95128},{"nominal":142,"mass":141.94619},{"nominal":143,"mass":142.943994},{"nominal":144,"mass":143.9392695},{"nominal":145,"mass":144.937474},{"nominal":146,"mass":145.9328445},{"nominal":147,"mass":146.9310827},{"nominal":148,"mass":147.927157},{"nominal":149,"mass":148.927322},{"nominal":150,"mass":149.9255933},{"nominal":151,"mass":150.9261916},{"nominal":152,"mass":151.9247253},{"nominal":153,"mass":152.9257724},{"nominal":154,"mass":153.9244293},{"nominal":155,"mass":154.925759},{"nominal":156,"mass":155.9242847,"abundance":0.00056},{"nominal":157,"mass":156.9254707},{"nominal":158,"mass":157.9244159,"abundance":0.00095},{"nominal":159,"mass":158.925747},{"nominal":160,"mass":159.9252046,"abundance":0.02329},{"nominal":161,"mass":160.9269405,"abundance":0.18889},{"nominal":162,"mass":161.9268056,"abundance":0.25475},{"nominal":163,"mass":162.9287383,"abundance":0.24896},{"nominal":164,"mass":163.9291819,"abundance":0.2826},{"nominal":165,"mass":164.9317105},{"nominal":166,"mass":165.9328139},{"nominal":167,"mass":166.935661},{"nominal":168,"mass":167.93713},{"nominal":169,"mass":168.94031},{"nominal":170,"mass":169.94239},{"nominal":171,"mass":170.94612},{"nominal":172,"mass":171.94846},{"nominal":173,"mass":172.95283}],"symbol":"Dy","mass":162.499472819424,"name":"Dysprosium","monoisotopicMass":163.9291819},{"number":67,"isotopes":[{"nominal":140,"mass":139.96859},{"nominal":141,"mass":140.96311},{"nominal":142,"mass":141.96001},{"nominal":143,"mass":142.95486},{"nominal":144,"mass":143.9521097},{"nominal":145,"mass":144.9472674},{"nominal":146,"mass":145.9449935},{"nominal":147,"mass":146.9401423},{"nominal":148,"mass":147.937744},{"nominal":149,"mass":148.933803},{"nominal":150,"mass":149.933498},{"nominal":151,"mass":150.9316983},{"nominal":152,"mass":151.931724},{"nominal":153,"mass":152.9302064},{"nominal":154,"mass":153.9306068},{"nominal":155,"mass":154.929104},{"nominal":156,"mass":155.929706},{"nominal":157,"mass":156.928254},{"nominal":158,"mass":157.928946},{"nominal":159,"mass":158.9277197},{"nominal":160,"mass":159.928737},{"nominal":161,"mass":160.9278615},{"nominal":162,"mass":161.9291023},{"nominal":163,"mass":162.928741},{"nominal":164,"mass":163.9302403},{"nominal":165,"mass":164.9303288,"abundance":1},{"nominal":166,"mass":165.9322909},{"nominal":167,"mass":166.9331385},{"nominal":168,"mass":167.935522},{"nominal":169,"mass":168.936878},{"nominal":170,"mass":169.939625},{"nominal":171,"mass":170.94147},{"nominal":172,"mass":171.94473},{"nominal":173,"mass":172.94702},{"nominal":174,"mass":173.95095},{"nominal":175,"mass":174.95362}],"symbol":"Ho","mass":164.9303288,"name":"Holmium","monoisotopicMass":164.9303288},{"number":68,"isotopes":[{"nominal":142,"mass":141.9701},{"nominal":143,"mass":142.96662},{"nominal":144,"mass":143.9607},{"nominal":145,"mass":144.95805},{"nominal":146,"mass":145.9524184},{"nominal":147,"mass":146.949964},{"nominal":148,"mass":147.944735},{"nominal":149,"mass":148.942306},{"nominal":150,"mass":149.937916},{"nominal":151,"mass":150.937449},{"nominal":152,"mass":151.935057},{"nominal":153,"mass":152.93508},{"nominal":154,"mass":153.9327908},{"nominal":155,"mass":154.9332159},{"nominal":156,"mass":155.931067},{"nominal":157,"mass":156.931949},{"nominal":158,"mass":157.929893},{"nominal":159,"mass":158.9306918},{"nominal":160,"mass":159.929077},{"nominal":161,"mass":160.9300046},{"nominal":162,"mass":161.9287884,"abundance":0.00139},{"nominal":163,"mass":162.9300408},{"nominal":164,"mass":163.9292088,"abundance":0.01601},{"nominal":165,"mass":164.9307345},{"nominal":166,"mass":165.9302995,"abundance":0.33503},{"nominal":167,"mass":166.9320546,"abundance":0.22869},{"nominal":168,"mass":167.9323767,"abundance":0.26978},{"nominal":169,"mass":168.9345968},{"nominal":170,"mass":169.9354702,"abundance":0.1491},{"nominal":171,"mass":170.9380357},{"nominal":172,"mass":171.9393619},{"nominal":173,"mass":172.9424},{"nominal":174,"mass":173.94423},{"nominal":175,"mass":174.94777},{"nominal":176,"mass":175.94994},{"nominal":177,"mass":176.95399}],"symbol":"Er","mass":167.259082649669,"name":"Erbium","monoisotopicMass":165.9302995},{"number":69,"isotopes":[{"nominal":144,"mass":143.97628},{"nominal":145,"mass":144.97039},{"nominal":146,"mass":145.96684},{"nominal":147,"mass":146.9613799},{"nominal":148,"mass":147.958384},{"nominal":149,"mass":148.95289},{"nominal":150,"mass":149.95009},{"nominal":151,"mass":150.945488},{"nominal":152,"mass":151.944422},{"nominal":153,"mass":152.94204},{"nominal":154,"mass":153.94157},{"nominal":155,"mass":154.93921},{"nominal":156,"mass":155.938992},{"nominal":157,"mass":156.936944},{"nominal":158,"mass":157.93698},{"nominal":159,"mass":158.934975},{"nominal":160,"mass":159.935263},{"nominal":161,"mass":160.933549},{"nominal":162,"mass":161.934002},{"nominal":163,"mass":162.9326592},{"nominal":164,"mass":163.933544},{"nominal":165,"mass":164.9324431},{"nominal":166,"mass":165.933561},{"nominal":167,"mass":166.9328562},{"nominal":168,"mass":167.9341774},{"nominal":169,"mass":168.9342179,"abundance":1},{"nominal":170,"mass":169.935806},{"nominal":171,"mass":170.9364339},{"nominal":172,"mass":171.9384055},{"nominal":173,"mass":172.9396084},{"nominal":174,"mass":173.942173},{"nominal":175,"mass":174.943841},{"nominal":176,"mass":175.947},{"nominal":177,"mass":176.94904},{"nominal":178,"mass":177.95264},{"nominal":179,"mass":178.95534}],"symbol":"Tm","mass":168.9342179,"name":"Thulium","monoisotopicMass":168.9342179},{"number":70,"isotopes":[{"nominal":148,"mass":147.96758},{"nominal":149,"mass":148.96436},{"nominal":150,"mass":149.95852},{"nominal":151,"mass":150.9554},{"nominal":152,"mass":151.95027},{"nominal":153,"mass":152.94932},{"nominal":154,"mass":153.946396},{"nominal":155,"mass":154.945783},{"nominal":156,"mass":155.942825},{"nominal":157,"mass":156.942645},{"nominal":158,"mass":157.9398705},{"nominal":159,"mass":158.940055},{"nominal":160,"mass":159.937557},{"nominal":161,"mass":160.937907},{"nominal":162,"mass":161.935774},{"nominal":163,"mass":162.93634},{"nominal":164,"mass":163.934495},{"nominal":165,"mass":164.93527},{"nominal":166,"mass":165.9338747},{"nominal":167,"mass":166.934953},{"nominal":168,"mass":167.9338896,"abundance":0.00123},{"nominal":169,"mass":168.9351825},{"nominal":170,"mass":169.9347664,"abundance":0.02982},{"nominal":171,"mass":170.9363302,"abundance":0.1409},{"nominal":172,"mass":171.9363859,"abundance":0.2168},{"nominal":173,"mass":172.9382151,"abundance":0.16103},{"nominal":174,"mass":173.9388664,"abundance":0.32026},{"nominal":175,"mass":174.9412808},{"nominal":176,"mass":175.9425764,"abundance":0.12996},{"nominal":177,"mass":176.9452656},{"nominal":178,"mass":177.946651},{"nominal":179,"mass":178.95004},{"nominal":180,"mass":179.95212},{"nominal":181,"mass":180.95589}],"symbol":"Yb","mass":173.05415016631702,"name":"Ytterbium","monoisotopicMass":173.9388664},{"number":71,"isotopes":[{"nominal":150,"mass":149.97355},{"nominal":151,"mass":150.96768},{"nominal":152,"mass":151.96412},{"nominal":153,"mass":152.95875},{"nominal":154,"mass":153.95736},{"nominal":155,"mass":154.954321},{"nominal":156,"mass":155.953033},{"nominal":157,"mass":156.950127},{"nominal":158,"mass":157.949316},{"nominal":159,"mass":158.946636},{"nominal":160,"mass":159.946033},{"nominal":161,"mass":160.943572},{"nominal":162,"mass":161.943283},{"nominal":163,"mass":162.941179},{"nominal":164,"mass":163.941339},{"nominal":165,"mass":164.939407},{"nominal":166,"mass":165.939859},{"nominal":167,"mass":166.93827},{"nominal":168,"mass":167.938736},{"nominal":169,"mass":168.9376441},{"nominal":170,"mass":169.938478},{"nominal":171,"mass":170.937917},{"nominal":172,"mass":171.9390891},{"nominal":173,"mass":172.938934},{"nominal":174,"mass":173.9403409},{"nominal":175,"mass":174.9407752,"abundance":0.97401},{"nominal":176,"mass":175.9426897,"abundance":0.02599},{"nominal":177,"mass":176.9437615},{"nominal":178,"mass":177.945958},{"nominal":179,"mass":178.9473309},{"nominal":180,"mass":179.949888},{"nominal":181,"mass":180.95191},{"nominal":182,"mass":181.95504},{"nominal":183,"mass":182.957363},{"nominal":184,"mass":183.96091},{"nominal":185,"mass":184.96362}],"symbol":"Lu","mass":174.96681495785498,"name":"Lutetium","monoisotopicMass":174.9407752},{"number":72,"isotopes":[{"nominal":153,"mass":152.97069},{"nominal":154,"mass":153.96486},{"nominal":155,"mass":154.96311},{"nominal":156,"mass":155.95935},{"nominal":157,"mass":156.95824},{"nominal":158,"mass":157.954801},{"nominal":159,"mass":158.953996},{"nominal":160,"mass":159.950691},{"nominal":161,"mass":160.950278},{"nominal":162,"mass":161.9472148},{"nominal":163,"mass":162.947113},{"nominal":164,"mass":163.944371},{"nominal":165,"mass":164.944567},{"nominal":166,"mass":165.94218},{"nominal":167,"mass":166.9426},{"nominal":168,"mass":167.940568},{"nominal":169,"mass":168.941259},{"nominal":170,"mass":169.939609},{"nominal":171,"mass":170.940492},{"nominal":172,"mass":171.93945},{"nominal":173,"mass":172.940513},{"nominal":174,"mass":173.9400461,"abundance":0.0016},{"nominal":175,"mass":174.9415092},{"nominal":176,"mass":175.9414076,"abundance":0.0526},{"nominal":177,"mass":176.9432277,"abundance":0.186},{"nominal":178,"mass":177.9437058,"abundance":0.2728},{"nominal":179,"mass":178.9458232,"abundance":0.1362},{"nominal":180,"mass":179.946557,"abundance":0.3508},{"nominal":181,"mass":180.9491083},{"nominal":182,"mass":181.9505612},{"nominal":183,"mass":182.95353},{"nominal":184,"mass":183.955446},{"nominal":185,"mass":184.958862},{"nominal":186,"mass":185.960897},{"nominal":187,"mass":186.96477},{"nominal":188,"mass":187.96685},{"nominal":189,"mass":188.97084}],"symbol":"Hf","mass":178.4849787234,"name":"Hafnium","monoisotopicMass":179.946557},{"number":73,"isotopes":[{"nominal":155,"mass":154.97424},{"nominal":156,"mass":155.97203},{"nominal":157,"mass":156.96818},{"nominal":158,"mass":157.96654},{"nominal":159,"mass":158.963023},{"nominal":160,"mass":159.961488},{"nominal":161,"mass":160.958452},{"nominal":162,"mass":161.957294},{"nominal":163,"mass":162.954337},{"nominal":164,"mass":163.953534},{"nominal":165,"mass":164.950781},{"nominal":166,"mass":165.950512},{"nominal":167,"mass":166.948093},{"nominal":168,"mass":167.948047},{"nominal":169,"mass":168.946011},{"nominal":170,"mass":169.946175},{"nominal":171,"mass":170.944476},{"nominal":172,"mass":171.944895},{"nominal":173,"mass":172.94375},{"nominal":174,"mass":173.944454},{"nominal":175,"mass":174.943737},{"nominal":176,"mass":175.944857},{"nominal":177,"mass":176.9444795},{"nominal":178,"mass":177.945678},{"nominal":179,"mass":178.9459366},{"nominal":180,"mass":179.9474648,"abundance":0.0001201},{"nominal":181,"mass":180.9479958,"abundance":0.9998799},{"nominal":182,"mass":181.9501519},{"nominal":183,"mass":182.9513726},{"nominal":184,"mass":183.954008},{"nominal":185,"mass":184.955559},{"nominal":186,"mass":185.958551},{"nominal":187,"mass":186.960386},{"nominal":188,"mass":187.963916},{"nominal":189,"mass":188.96583},{"nominal":190,"mass":189.96939},{"nominal":191,"mass":190.97156},{"nominal":192,"mass":191.97514}],"symbol":"Ta","mass":180.9478756362269,"name":"Tantalum","monoisotopicMass":180.9479958},{"number":74,"isotopes":[{"nominal":157,"mass":156.97884},{"nominal":158,"mass":157.97456},{"nominal":159,"mass":158.97264},{"nominal":160,"mass":159.96846},{"nominal":161,"mass":160.9672},{"nominal":162,"mass":161.963499},{"nominal":163,"mass":162.962524},{"nominal":164,"mass":163.958961},{"nominal":165,"mass":164.958281},{"nominal":166,"mass":165.955031},{"nominal":167,"mass":166.954805},{"nominal":168,"mass":167.951806},{"nominal":169,"mass":168.951779},{"nominal":170,"mass":169.949232},{"nominal":171,"mass":170.949451},{"nominal":172,"mass":171.947292},{"nominal":173,"mass":172.947689},{"nominal":174,"mass":173.946079},{"nominal":175,"mass":174.946717},{"nominal":176,"mass":175.945634},{"nominal":177,"mass":176.946643},{"nominal":178,"mass":177.945883},{"nominal":179,"mass":178.947077},{"nominal":180,"mass":179.9467108,"abundance":0.0012},{"nominal":181,"mass":180.9481978},{"nominal":182,"mass":181.94820394,"abundance":0.265},{"nominal":183,"mass":182.95022275,"abundance":0.1431},{"nominal":184,"mass":183.95093092,"abundance":0.3064},{"nominal":185,"mass":184.95341897},{"nominal":186,"mass":185.9543628,"abundance":0.2843},{"nominal":187,"mass":186.9571588},{"nominal":188,"mass":187.9584862},{"nominal":189,"mass":188.961763},{"nominal":190,"mass":189.963091},{"nominal":191,"mass":190.966531},{"nominal":192,"mass":191.96817},{"nominal":193,"mass":192.97178},{"nominal":194,"mass":193.97367}],"symbol":"W","mass":183.841777550513,"name":"Tungsten","monoisotopicMass":183.95093092},{"number":75,"isotopes":[{"nominal":159,"mass":158.98418},{"nominal":160,"mass":159.98182},{"nominal":161,"mass":160.97757},{"nominal":162,"mass":161.97584},{"nominal":163,"mass":162.97208},{"nominal":164,"mass":163.970453},{"nominal":165,"mass":164.967103},{"nominal":166,"mass":165.965761},{"nominal":167,"mass":166.962595},{"nominal":168,"mass":167.961573},{"nominal":169,"mass":168.958766},{"nominal":170,"mass":169.95822},{"nominal":171,"mass":170.955716},{"nominal":172,"mass":171.95542},{"nominal":173,"mass":172.953243},{"nominal":174,"mass":173.953115},{"nominal":175,"mass":174.951381},{"nominal":176,"mass":175.951623},{"nominal":177,"mass":176.950328},{"nominal":178,"mass":177.950989},{"nominal":179,"mass":178.949989},{"nominal":180,"mass":179.950792},{"nominal":181,"mass":180.950058},{"nominal":182,"mass":181.95121},{"nominal":183,"mass":182.9508196},{"nominal":184,"mass":183.9525228},{"nominal":185,"mass":184.9529545,"abundance":0.374},{"nominal":186,"mass":185.9549856},{"nominal":187,"mass":186.9557501,"abundance":0.626},{"nominal":188,"mass":187.9581115},{"nominal":189,"mass":188.959226},{"nominal":190,"mass":189.961744},{"nominal":191,"mass":190.963122},{"nominal":192,"mass":191.966088},{"nominal":193,"mass":192.967541},{"nominal":194,"mass":193.97076},{"nominal":195,"mass":194.97254},{"nominal":196,"mass":195.9758},{"nominal":197,"mass":196.97799},{"nominal":198,"mass":197.9816}],"symbol":"Re","mass":186.20670454560002,"name":"Rhenium","monoisotopicMass":186.9557501},{"number":76,"isotopes":[{"nominal":161,"mass":160.98903},{"nominal":162,"mass":161.98443},{"nominal":163,"mass":162.98241},{"nominal":164,"mass":163.97802},{"nominal":165,"mass":164.9766},{"nominal":166,"mass":165.972692},{"nominal":167,"mass":166.971549},{"nominal":168,"mass":167.967808},{"nominal":169,"mass":168.967018},{"nominal":170,"mass":169.963578},{"nominal":171,"mass":170.963174},{"nominal":172,"mass":171.960017},{"nominal":173,"mass":172.959808},{"nominal":174,"mass":173.957064},{"nominal":175,"mass":174.956945},{"nominal":176,"mass":175.954806},{"nominal":177,"mass":176.954966},{"nominal":178,"mass":177.953254},{"nominal":179,"mass":178.953817},{"nominal":180,"mass":179.952375},{"nominal":181,"mass":180.953247},{"nominal":182,"mass":181.95211},{"nominal":183,"mass":182.953125},{"nominal":184,"mass":183.9524885,"abundance":0.0002},{"nominal":185,"mass":184.9540417},{"nominal":186,"mass":185.953835,"abundance":0.0159},{"nominal":187,"mass":186.9557474,"abundance":0.0196},{"nominal":188,"mass":187.9558352,"abundance":0.1324},{"nominal":189,"mass":188.9581442,"abundance":0.1615},{"nominal":190,"mass":189.9584437,"abundance":0.2626},{"nominal":191,"mass":190.9609264},{"nominal":192,"mass":191.961477,"abundance":0.4078},{"nominal":193,"mass":192.9641479},{"nominal":194,"mass":193.9651772},{"nominal":195,"mass":194.968318},{"nominal":196,"mass":195.969641},{"nominal":197,"mass":196.97283},{"nominal":198,"mass":197.97441},{"nominal":199,"mass":198.97801},{"nominal":200,"mass":199.97984},{"nominal":201,"mass":200.98364},{"nominal":202,"mass":201.98595}],"symbol":"Os","mass":190.22485962823998,"name":"Osmium","monoisotopicMass":191.961477},{"number":77,"isotopes":[{"nominal":164,"mass":163.99191},{"nominal":165,"mass":164.9875},{"nominal":166,"mass":165.98566},{"nominal":167,"mass":166.981666},{"nominal":168,"mass":167.979907},{"nominal":169,"mass":168.976298},{"nominal":170,"mass":169.974922},{"nominal":171,"mass":170.97164},{"nominal":172,"mass":171.970607},{"nominal":173,"mass":172.967506},{"nominal":174,"mass":173.966861},{"nominal":175,"mass":174.96415},{"nominal":176,"mass":175.96365},{"nominal":177,"mass":176.961301},{"nominal":178,"mass":177.961082},{"nominal":179,"mass":178.95912},{"nominal":180,"mass":179.959229},{"nominal":181,"mass":180.957625},{"nominal":182,"mass":181.958076},{"nominal":183,"mass":182.95684},{"nominal":184,"mass":183.957476},{"nominal":185,"mass":184.956698},{"nominal":186,"mass":185.957944},{"nominal":187,"mass":186.957542},{"nominal":188,"mass":187.958828},{"nominal":189,"mass":188.958715},{"nominal":190,"mass":189.9605412},{"nominal":191,"mass":190.9605893,"abundance":0.373},{"nominal":192,"mass":191.9626002},{"nominal":193,"mass":192.9629216,"abundance":0.627},{"nominal":194,"mass":193.9650735},{"nominal":195,"mass":194.9659747},{"nominal":196,"mass":195.968397},{"nominal":197,"mass":196.969655},{"nominal":198,"mass":197.97228},{"nominal":199,"mass":198.973805},{"nominal":200,"mass":199.9768},{"nominal":201,"mass":200.97864},{"nominal":202,"mass":201.98199},{"nominal":203,"mass":202.98423},{"nominal":204,"mass":203.9896}],"symbol":"Ir","mass":192.2160516521,"name":"Iridium","monoisotopicMass":192.9629216},{"number":78,"isotopes":[{"nominal":166,"mass":165.99486},{"nominal":167,"mass":166.99269},{"nominal":168,"mass":167.98813},{"nominal":169,"mass":168.98657},{"nominal":170,"mass":169.982496},{"nominal":171,"mass":170.981245},{"nominal":172,"mass":171.977351},{"nominal":173,"mass":172.976443},{"nominal":174,"mass":173.97282},{"nominal":175,"mass":174.97241},{"nominal":176,"mass":175.968938},{"nominal":177,"mass":176.96847},{"nominal":178,"mass":177.96565},{"nominal":179,"mass":178.965359},{"nominal":180,"mass":179.963032},{"nominal":181,"mass":180.963098},{"nominal":182,"mass":181.961172},{"nominal":183,"mass":182.961597},{"nominal":184,"mass":183.959915},{"nominal":185,"mass":184.960614},{"nominal":186,"mass":185.959351},{"nominal":187,"mass":186.960617},{"nominal":188,"mass":187.9593889},{"nominal":189,"mass":188.960831},{"nominal":190,"mass":189.9599297,"abundance":0.00012},{"nominal":191,"mass":190.9616729},{"nominal":192,"mass":191.9610387,"abundance":0.00782},{"nominal":193,"mass":192.9629824},{"nominal":194,"mass":193.9626809,"abundance":0.3286},{"nominal":195,"mass":194.9647917,"abundance":0.3378},{"nominal":196,"mass":195.96495209,"abundance":0.2521},{"nominal":197,"mass":196.96734069},{"nominal":198,"mass":197.9678949,"abundance":0.07356},{"nominal":199,"mass":198.9705952},{"nominal":200,"mass":199.971443},{"nominal":201,"mass":200.974513},{"nominal":202,"mass":201.975639},{"nominal":203,"mass":202.97893},{"nominal":204,"mass":203.98076},{"nominal":205,"mass":204.98608},{"nominal":206,"mass":205.98966}],"symbol":"Pt","mass":195.084456864931,"name":"Platinum","monoisotopicMass":194.9647917},{"number":79,"isotopes":[{"nominal":169,"mass":168.99808},{"nominal":170,"mass":169.99597},{"nominal":171,"mass":170.991876},{"nominal":172,"mass":171.989942},{"nominal":173,"mass":172.986241},{"nominal":174,"mass":173.984717},{"nominal":175,"mass":174.981304},{"nominal":176,"mass":175.98025},{"nominal":177,"mass":176.97687},{"nominal":178,"mass":177.976032},{"nominal":179,"mass":178.973174},{"nominal":180,"mass":179.972523},{"nominal":181,"mass":180.970079},{"nominal":182,"mass":181.969618},{"nominal":183,"mass":182.967591},{"nominal":184,"mass":183.967452},{"nominal":185,"mass":184.96579},{"nominal":186,"mass":185.965953},{"nominal":187,"mass":186.964543},{"nominal":188,"mass":187.965349},{"nominal":189,"mass":188.963948},{"nominal":190,"mass":189.964698},{"nominal":191,"mass":190.963702},{"nominal":192,"mass":191.964814},{"nominal":193,"mass":192.9641373},{"nominal":194,"mass":193.9654178},{"nominal":195,"mass":194.9650352},{"nominal":196,"mass":195.9665699},{"nominal":197,"mass":196.96656879,"abundance":1},{"nominal":198,"mass":197.96824242},{"nominal":199,"mass":198.96876528},{"nominal":200,"mass":199.970756},{"nominal":201,"mass":200.9716575},{"nominal":202,"mass":201.973856},{"nominal":203,"mass":202.9751544},{"nominal":204,"mass":203.97783},{"nominal":205,"mass":204.97985},{"nominal":206,"mass":205.98474},{"nominal":207,"mass":206.9884},{"nominal":208,"mass":207.99345},{"nominal":209,"mass":208.99735},{"nominal":210,"mass":210.0025}],"symbol":"Au","mass":196.96656879,"name":"Gold","monoisotopicMass":196.96656879},{"number":80,"isotopes":[{"nominal":171,"mass":171.00353},{"nominal":172,"mass":171.99881},{"nominal":173,"mass":172.99709},{"nominal":174,"mass":173.992865},{"nominal":175,"mass":174.991441},{"nominal":176,"mass":175.987361},{"nominal":177,"mass":176.986277},{"nominal":178,"mass":177.982484},{"nominal":179,"mass":178.981831},{"nominal":180,"mass":179.97826},{"nominal":181,"mass":180.977819},{"nominal":182,"mass":181.974689},{"nominal":183,"mass":182.9744448},{"nominal":184,"mass":183.971714},{"nominal":185,"mass":184.971899},{"nominal":186,"mass":185.969362},{"nominal":187,"mass":186.969814},{"nominal":188,"mass":187.967567},{"nominal":189,"mass":188.968195},{"nominal":190,"mass":189.966323},{"nominal":191,"mass":190.967157},{"nominal":192,"mass":191.965635},{"nominal":193,"mass":192.966653},{"nominal":194,"mass":193.9654491},{"nominal":195,"mass":194.966721},{"nominal":196,"mass":195.9658326,"abundance":0.0015},{"nominal":197,"mass":196.9672128},{"nominal":198,"mass":197.9667686,"abundance":0.0997},{"nominal":199,"mass":198.96828064,"abundance":0.1687},{"nominal":200,"mass":199.96832659,"abundance":0.231},{"nominal":201,"mass":200.97030284,"abundance":0.1318},{"nominal":202,"mass":201.9706434,"abundance":0.2986},{"nominal":203,"mass":202.9728728},{"nominal":204,"mass":203.97349398,"abundance":0.0687},{"nominal":205,"mass":204.9760734},{"nominal":206,"mass":205.977514},{"nominal":207,"mass":206.9823},{"nominal":208,"mass":207.985759},{"nominal":209,"mass":208.99072},{"nominal":210,"mass":209.99424},{"nominal":211,"mass":210.99933},{"nominal":212,"mass":212.00296},{"nominal":213,"mass":213.00823},{"nominal":214,"mass":214.012},{"nominal":215,"mass":215.0174},{"nominal":216,"mass":216.02132}],"symbol":"Hg","mass":200.59916703455602,"name":"Mercury","monoisotopicMass":201.9706434},{"number":81,"isotopes":[{"nominal":176,"mass":176.000624},{"nominal":177,"mass":176.996431},{"nominal":178,"mass":177.99485},{"nominal":179,"mass":178.991111},{"nominal":180,"mass":179.990057},{"nominal":181,"mass":180.98626},{"nominal":182,"mass":181.985713},{"nominal":183,"mass":182.982193},{"nominal":184,"mass":183.981886},{"nominal":185,"mass":184.978789},{"nominal":186,"mass":185.978651},{"nominal":187,"mass":186.9759063},{"nominal":188,"mass":187.976021},{"nominal":189,"mass":188.973588},{"nominal":190,"mass":189.973828},{"nominal":191,"mass":190.9717842},{"nominal":192,"mass":191.972225},{"nominal":193,"mass":192.970502},{"nominal":194,"mass":193.971081},{"nominal":195,"mass":194.969774},{"nominal":196,"mass":195.970481},{"nominal":197,"mass":196.969576},{"nominal":198,"mass":197.970483},{"nominal":199,"mass":198.969877},{"nominal":200,"mass":199.9709633},{"nominal":201,"mass":200.970822},{"nominal":202,"mass":201.972102},{"nominal":203,"mass":202.9723446,"abundance":0.2952},{"nominal":204,"mass":203.9738639},{"nominal":205,"mass":204.9744278,"abundance":0.7048},{"nominal":206,"mass":205.9761106},{"nominal":207,"mass":206.9774197},{"nominal":208,"mass":207.982019},{"nominal":209,"mass":208.9853594},{"nominal":210,"mass":209.990074},{"nominal":211,"mass":210.993475},{"nominal":212,"mass":211.99834},{"nominal":213,"mass":213.001915},{"nominal":214,"mass":214.00694},{"nominal":215,"mass":215.01064},{"nominal":216,"mass":216.0158},{"nominal":217,"mass":217.01966},{"nominal":218,"mass":218.02479}],"symbol":"Tl","mass":204.38341283936,"name":"Thallium","monoisotopicMass":204.9744278},{"number":82,"isotopes":[{"nominal":178,"mass":178.003831},{"nominal":179,"mass":179.002201},{"nominal":180,"mass":179.997928},{"nominal":181,"mass":180.996653},{"nominal":182,"mass":181.992672},{"nominal":183,"mass":182.991872},{"nominal":184,"mass":183.988136},{"nominal":185,"mass":184.98761},{"nominal":186,"mass":185.984238},{"nominal":187,"mass":186.9839109},{"nominal":188,"mass":187.980875},{"nominal":189,"mass":188.980807},{"nominal":190,"mass":189.978082},{"nominal":191,"mass":190.978276},{"nominal":192,"mass":191.975775},{"nominal":193,"mass":192.976173},{"nominal":194,"mass":193.974012},{"nominal":195,"mass":194.974543},{"nominal":196,"mass":195.972774},{"nominal":197,"mass":196.9734312},{"nominal":198,"mass":197.972034},{"nominal":199,"mass":198.972913},{"nominal":200,"mass":199.971819},{"nominal":201,"mass":200.972883},{"nominal":202,"mass":201.972152},{"nominal":203,"mass":202.9733911},{"nominal":204,"mass":203.973044,"abundance":0.014},{"nominal":205,"mass":204.9744822},{"nominal":206,"mass":205.9744657,"abundance":0.241},{"nominal":207,"mass":206.9758973,"abundance":0.221},{"nominal":208,"mass":207.9766525,"abundance":0.524},{"nominal":209,"mass":208.9810905},{"nominal":210,"mass":209.9841889},{"nominal":211,"mass":210.9887371},{"nominal":212,"mass":211.9918977},{"nominal":213,"mass":212.9965629},{"nominal":214,"mass":213.9998059},{"nominal":215,"mass":215.00474},{"nominal":216,"mass":216.00803},{"nominal":217,"mass":217.01314},{"nominal":218,"mass":218.01659},{"nominal":219,"mass":219.02177},{"nominal":220,"mass":220.02541}],"symbol":"Pb","mass":207.216908063,"name":"Lead","monoisotopicMass":207.9766525},{"number":83,"isotopes":[{"nominal":184,"mass":184.001275},{"nominal":185,"mass":184.9976},{"nominal":186,"mass":185.996644},{"nominal":187,"mass":186.993147},{"nominal":188,"mass":187.992287},{"nominal":189,"mass":188.989195},{"nominal":190,"mass":189.988622},{"nominal":191,"mass":190.9857866},{"nominal":192,"mass":191.985469},{"nominal":193,"mass":192.98296},{"nominal":194,"mass":193.982785},{"nominal":195,"mass":194.9806488},{"nominal":196,"mass":195.980667},{"nominal":197,"mass":196.9788651},{"nominal":198,"mass":197.979206},{"nominal":199,"mass":198.977673},{"nominal":200,"mass":199.978131},{"nominal":201,"mass":200.97701},{"nominal":202,"mass":201.977734},{"nominal":203,"mass":202.976893},{"nominal":204,"mass":203.9778361},{"nominal":205,"mass":204.9773867},{"nominal":206,"mass":205.9784993},{"nominal":207,"mass":206.978471},{"nominal":208,"mass":207.9797425},{"nominal":209,"mass":208.9803991,"abundance":1},{"nominal":210,"mass":209.9841207},{"nominal":211,"mass":210.9872697},{"nominal":212,"mass":211.991286},{"nominal":213,"mass":212.9943851},{"nominal":214,"mass":213.998712},{"nominal":215,"mass":215.00177},{"nominal":216,"mass":216.006306},{"nominal":217,"mass":217.009372},{"nominal":218,"mass":218.014188},{"nominal":219,"mass":219.01748},{"nominal":220,"mass":220.02235},{"nominal":221,"mass":221.02587},{"nominal":222,"mass":222.03078},{"nominal":223,"mass":223.0345},{"nominal":224,"mass":224.03947}],"symbol":"Bi","mass":208.9803991,"name":"Bismuth","monoisotopicMass":208.9803991},{"number":84,"isotopes":[{"nominal":186,"mass":186.004393},{"nominal":187,"mass":187.003041},{"nominal":188,"mass":187.999416},{"nominal":189,"mass":188.998473},{"nominal":190,"mass":189.995101},{"nominal":191,"mass":190.9945585},{"nominal":192,"mass":191.991336},{"nominal":193,"mass":192.991026},{"nominal":194,"mass":193.988186},{"nominal":195,"mass":194.988126},{"nominal":196,"mass":195.985526},{"nominal":197,"mass":196.98566},{"nominal":198,"mass":197.983389},{"nominal":199,"mass":198.983667},{"nominal":200,"mass":199.981799},{"nominal":201,"mass":200.9822598},{"nominal":202,"mass":201.980758},{"nominal":203,"mass":202.9814161},{"nominal":204,"mass":203.98031},{"nominal":205,"mass":204.981203},{"nominal":206,"mass":205.980474},{"nominal":207,"mass":206.9815938},{"nominal":208,"mass":207.9812461},{"nominal":209,"mass":208.9824308},{"nominal":210,"mass":209.9828741},{"nominal":211,"mass":210.9866536},{"nominal":212,"mass":211.9888684},{"nominal":213,"mass":212.9928576},{"nominal":214,"mass":213.9952017},{"nominal":215,"mass":214.9994201},{"nominal":216,"mass":216.0019152},{"nominal":217,"mass":217.0063182},{"nominal":218,"mass":218.0089735},{"nominal":219,"mass":219.013614},{"nominal":220,"mass":220.016386},{"nominal":221,"mass":221.021228},{"nominal":222,"mass":222.02414},{"nominal":223,"mass":223.02907},{"nominal":224,"mass":224.03211},{"nominal":225,"mass":225.03707},{"nominal":226,"mass":226.04031},{"nominal":227,"mass":227.04539}],"symbol":"Po","mass":null,"name":"Polonium"},{"number":85,"isotopes":[{"nominal":191,"mass":191.004148},{"nominal":192,"mass":192.003152},{"nominal":193,"mass":192.999927},{"nominal":194,"mass":193.999236},{"nominal":195,"mass":194.9962685},{"nominal":196,"mass":195.9958},{"nominal":197,"mass":196.993189},{"nominal":198,"mass":197.992784},{"nominal":199,"mass":198.9905277},{"nominal":200,"mass":199.990351},{"nominal":201,"mass":200.9884171},{"nominal":202,"mass":201.98863},{"nominal":203,"mass":202.986943},{"nominal":204,"mass":203.987251},{"nominal":205,"mass":204.986076},{"nominal":206,"mass":205.986657},{"nominal":207,"mass":206.9858},{"nominal":208,"mass":207.9866133},{"nominal":209,"mass":208.9861702},{"nominal":210,"mass":209.9871479},{"nominal":211,"mass":210.9874966},{"nominal":212,"mass":211.9907377},{"nominal":213,"mass":212.992937},{"nominal":214,"mass":213.9963721},{"nominal":215,"mass":214.9986528},{"nominal":216,"mass":216.0024236},{"nominal":217,"mass":217.0047192},{"nominal":218,"mass":218.008695},{"nominal":219,"mass":219.0111618},{"nominal":220,"mass":220.015433},{"nominal":221,"mass":221.018017},{"nominal":222,"mass":222.022494},{"nominal":223,"mass":223.025151},{"nominal":224,"mass":224.029749},{"nominal":225,"mass":225.03263},{"nominal":226,"mass":226.03716},{"nominal":227,"mass":227.04024},{"nominal":228,"mass":228.04475},{"nominal":229,"mass":229.04812}],"symbol":"At","mass":null,"name":"Astatine"},{"number":86,"isotopes":[{"nominal":193,"mass":193.009708},{"nominal":194,"mass":194.006144},{"nominal":195,"mass":195.005422},{"nominal":196,"mass":196.002116},{"nominal":197,"mass":197.001585},{"nominal":198,"mass":197.998679},{"nominal":199,"mass":198.99839},{"nominal":200,"mass":199.99569},{"nominal":201,"mass":200.995628},{"nominal":202,"mass":201.993264},{"nominal":203,"mass":202.993388},{"nominal":204,"mass":203.99143},{"nominal":205,"mass":204.991719},{"nominal":206,"mass":205.990214},{"nominal":207,"mass":206.9907303},{"nominal":208,"mass":207.989635},{"nominal":209,"mass":208.990415},{"nominal":210,"mass":209.9896891},{"nominal":211,"mass":210.9906011},{"nominal":212,"mass":211.9907039},{"nominal":213,"mass":212.9938831},{"nominal":214,"mass":213.995363},{"nominal":215,"mass":214.9987459},{"nominal":216,"mass":216.0002719},{"nominal":217,"mass":217.003928},{"nominal":218,"mass":218.0056016},{"nominal":219,"mass":219.0094804},{"nominal":220,"mass":220.0113941},{"nominal":221,"mass":221.0155371},{"nominal":222,"mass":222.0175782},{"nominal":223,"mass":223.0218893},{"nominal":224,"mass":224.024096},{"nominal":225,"mass":225.028486},{"nominal":226,"mass":226.030861},{"nominal":227,"mass":227.035304},{"nominal":228,"mass":228.037835},{"nominal":229,"mass":229.042257},{"nominal":230,"mass":230.04514},{"nominal":231,"mass":231.04987}],"symbol":"Rn","mass":null,"name":"Radon"},{"number":87,"isotopes":[{"nominal":199,"mass":199.007259},{"nominal":200,"mass":200.006586},{"nominal":201,"mass":201.003867},{"nominal":202,"mass":202.00332},{"nominal":203,"mass":203.0009407},{"nominal":204,"mass":204.000652},{"nominal":205,"mass":204.9985939},{"nominal":206,"mass":205.998666},{"nominal":207,"mass":206.996946},{"nominal":208,"mass":207.997138},{"nominal":209,"mass":208.995955},{"nominal":210,"mass":209.996422},{"nominal":211,"mass":210.995556},{"nominal":212,"mass":211.9962257},{"nominal":213,"mass":212.996186},{"nominal":214,"mass":213.9989713},{"nominal":215,"mass":215.0003418},{"nominal":216,"mass":216.0031899},{"nominal":217,"mass":217.0046323},{"nominal":218,"mass":218.0075787},{"nominal":219,"mass":219.0092524},{"nominal":220,"mass":220.0123277},{"nominal":221,"mass":221.0142552},{"nominal":222,"mass":222.017552},{"nominal":223,"mass":223.019736},{"nominal":224,"mass":224.023398},{"nominal":225,"mass":225.025573},{"nominal":226,"mass":226.029566},{"nominal":227,"mass":227.031869},{"nominal":228,"mass":228.035823},{"nominal":229,"mass":229.038298},{"nominal":230,"mass":230.042416},{"nominal":231,"mass":231.045158},{"nominal":232,"mass":232.04937},{"nominal":233,"mass":233.05264}],"symbol":"Fr","mass":null,"name":"Francium"},{"number":88,"isotopes":[{"nominal":201,"mass":201.01271},{"nominal":202,"mass":202.00976},{"nominal":203,"mass":203.009304},{"nominal":204,"mass":204.006492},{"nominal":205,"mass":205.006268},{"nominal":206,"mass":206.003828},{"nominal":207,"mass":207.003799},{"nominal":208,"mass":208.001841},{"nominal":209,"mass":209.00199},{"nominal":210,"mass":210.000494},{"nominal":211,"mass":211.0008932},{"nominal":212,"mass":211.999787},{"nominal":213,"mass":213.000384},{"nominal":214,"mass":214.0000997},{"nominal":215,"mass":215.0027204},{"nominal":216,"mass":216.0035334},{"nominal":217,"mass":217.0063207},{"nominal":218,"mass":218.007141},{"nominal":219,"mass":219.0100855},{"nominal":220,"mass":220.0110259},{"nominal":221,"mass":221.0139177},{"nominal":222,"mass":222.0153748},{"nominal":223,"mass":223.0185023},{"nominal":224,"mass":224.020212},{"nominal":225,"mass":225.0236119},{"nominal":226,"mass":226.0254103},{"nominal":227,"mass":227.0291783},{"nominal":228,"mass":228.0310707},{"nominal":229,"mass":229.034942},{"nominal":230,"mass":230.037055},{"nominal":231,"mass":231.041027},{"nominal":232,"mass":232.0434753},{"nominal":233,"mass":233.047582},{"nominal":234,"mass":234.050342},{"nominal":235,"mass":235.05497}],"symbol":"Ra","mass":null,"name":"Radium"},{"number":89,"isotopes":[{"nominal":206,"mass":206.014452},{"nominal":207,"mass":207.011966},{"nominal":208,"mass":208.01155},{"nominal":209,"mass":209.009495},{"nominal":210,"mass":210.009436},{"nominal":211,"mass":211.007732},{"nominal":212,"mass":212.007813},{"nominal":213,"mass":213.006609},{"nominal":214,"mass":214.006918},{"nominal":215,"mass":215.006475},{"nominal":216,"mass":216.008743},{"nominal":217,"mass":217.009344},{"nominal":218,"mass":218.011642},{"nominal":219,"mass":219.012421},{"nominal":220,"mass":220.0147549},{"nominal":221,"mass":221.015592},{"nominal":222,"mass":222.0178442},{"nominal":223,"mass":223.0191377},{"nominal":224,"mass":224.0217232},{"nominal":225,"mass":225.02323},{"nominal":226,"mass":226.0260984},{"nominal":227,"mass":227.0277523},{"nominal":228,"mass":228.0310215},{"nominal":229,"mass":229.032956},{"nominal":230,"mass":230.036327},{"nominal":231,"mass":231.038393},{"nominal":232,"mass":232.042034},{"nominal":233,"mass":233.044346},{"nominal":234,"mass":234.048139},{"nominal":235,"mass":235.05084},{"nominal":236,"mass":236.054988},{"nominal":237,"mass":237.05827}],"symbol":"Ac","mass":null,"name":"Actinium"},{"number":90,"isotopes":[{"nominal":208,"mass":208.0179},{"nominal":209,"mass":209.017753},{"nominal":210,"mass":210.015094},{"nominal":211,"mass":211.014929},{"nominal":212,"mass":212.012988},{"nominal":213,"mass":213.013009},{"nominal":214,"mass":214.0115},{"nominal":215,"mass":215.0117248},{"nominal":216,"mass":216.011056},{"nominal":217,"mass":217.013117},{"nominal":218,"mass":218.013276},{"nominal":219,"mass":219.015537},{"nominal":220,"mass":220.015748},{"nominal":221,"mass":221.018184},{"nominal":222,"mass":222.018469},{"nominal":223,"mass":223.0208119},{"nominal":224,"mass":224.021464},{"nominal":225,"mass":225.0239514},{"nominal":226,"mass":226.0249034},{"nominal":227,"mass":227.0277042},{"nominal":228,"mass":228.0287413},{"nominal":229,"mass":229.0317627},{"nominal":230,"mass":230.0331341},{"nominal":231,"mass":231.0363046},{"nominal":232,"mass":232.0380558,"abundance":1},{"nominal":233,"mass":233.0415823},{"nominal":234,"mass":234.0436014},{"nominal":235,"mass":235.047255},{"nominal":236,"mass":236.049657},{"nominal":237,"mass":237.053629},{"nominal":238,"mass":238.0565},{"nominal":239,"mass":239.06077}],"symbol":"Th","mass":232.0380558,"name":"Thorium","monoisotopicMass":232.0380558},{"number":91,"isotopes":[{"nominal":212,"mass":212.023203},{"nominal":213,"mass":213.021109},{"nominal":214,"mass":214.020918},{"nominal":215,"mass":215.019183},{"nominal":216,"mass":216.019109},{"nominal":217,"mass":217.018325},{"nominal":218,"mass":218.020059},{"nominal":219,"mass":219.019904},{"nominal":220,"mass":220.021705},{"nominal":221,"mass":221.021875},{"nominal":222,"mass":222.023784},{"nominal":223,"mass":223.023963},{"nominal":224,"mass":224.0256176},{"nominal":225,"mass":225.026131},{"nominal":226,"mass":226.027948},{"nominal":227,"mass":227.0288054},{"nominal":228,"mass":228.0310517},{"nominal":229,"mass":229.0320972},{"nominal":230,"mass":230.034541},{"nominal":231,"mass":231.0358842,"abundance":1},{"nominal":232,"mass":232.0385917},{"nominal":233,"mass":233.0402472},{"nominal":234,"mass":234.0433072},{"nominal":235,"mass":235.045399},{"nominal":236,"mass":236.048668},{"nominal":237,"mass":237.051023},{"nominal":238,"mass":238.054637},{"nominal":239,"mass":239.05726},{"nominal":240,"mass":240.06098},{"nominal":241,"mass":241.06408}],"symbol":"Pa","mass":231.0358842,"name":"Protactinium","monoisotopicMass":231.0358842},{"number":92,"isotopes":[{"nominal":217,"mass":217.02466},{"nominal":218,"mass":218.023523},{"nominal":219,"mass":219.024999},{"nominal":220,"mass":220.02462},{"nominal":221,"mass":221.02628},{"nominal":222,"mass":222.026},{"nominal":223,"mass":223.027739},{"nominal":224,"mass":224.027605},{"nominal":225,"mass":225.029391},{"nominal":226,"mass":226.029339},{"nominal":227,"mass":227.031157},{"nominal":228,"mass":228.031371},{"nominal":229,"mass":229.0335063},{"nominal":230,"mass":230.0339401},{"nominal":231,"mass":231.0362939},{"nominal":232,"mass":232.0371563},{"nominal":233,"mass":233.0396355},{"nominal":234,"mass":234.0409523,"abundance":0.000054},{"nominal":235,"mass":235.0439301,"abundance":0.007204},{"nominal":236,"mass":236.0455682},{"nominal":237,"mass":237.0487304},{"nominal":238,"mass":238.0507884,"abundance":0.992742},{"nominal":239,"mass":239.0542935},{"nominal":240,"mass":240.0565934},{"nominal":241,"mass":241.06033},{"nominal":242,"mass":242.06293},{"nominal":243,"mass":243.06699}],"symbol":"U","mass":238.0289104616574,"name":"Uranium","monoisotopicMass":238.0507884},{"number":93,"isotopes":[{"nominal":219,"mass":219.03143},{"nominal":220,"mass":220.03254},{"nominal":221,"mass":221.03204},{"nominal":222,"mass":222.0333},{"nominal":223,"mass":223.03285},{"nominal":224,"mass":224.03422},{"nominal":225,"mass":225.033911},{"nominal":226,"mass":226.035188},{"nominal":227,"mass":227.034957},{"nominal":228,"mass":228.036067},{"nominal":229,"mass":229.036264},{"nominal":230,"mass":230.037828},{"nominal":231,"mass":231.038245},{"nominal":232,"mass":232.04011},{"nominal":233,"mass":233.040741},{"nominal":234,"mass":234.0428953},{"nominal":235,"mass":235.0440635},{"nominal":236,"mass":236.04657},{"nominal":237,"mass":237.0481736},{"nominal":238,"mass":238.0509466},{"nominal":239,"mass":239.0529392},{"nominal":240,"mass":240.056165},{"nominal":241,"mass":241.058253},{"nominal":242,"mass":242.06164},{"nominal":243,"mass":243.06428},{"nominal":244,"mass":244.06785},{"nominal":245,"mass":245.0708}],"symbol":"Np","mass":null,"name":"Neptunium"},{"number":94,"isotopes":[{"nominal":228,"mass":228.038732},{"nominal":229,"mass":229.040144},{"nominal":230,"mass":230.03965},{"nominal":231,"mass":231.041102},{"nominal":232,"mass":232.041185},{"nominal":233,"mass":233.042998},{"nominal":234,"mass":234.0433174},{"nominal":235,"mass":235.045286},{"nominal":236,"mass":236.0460581},{"nominal":237,"mass":237.0484098},{"nominal":238,"mass":238.0495601},{"nominal":239,"mass":239.0521636},{"nominal":240,"mass":240.0538138},{"nominal":241,"mass":241.0568517},{"nominal":242,"mass":242.0587428},{"nominal":243,"mass":243.0620036},{"nominal":244,"mass":244.0642053},{"nominal":245,"mass":245.067826},{"nominal":246,"mass":246.070205},{"nominal":247,"mass":247.07419}],"symbol":"Pu","mass":null,"name":"Plutonium"},{"number":95,"isotopes":[{"nominal":230,"mass":230.04609},{"nominal":231,"mass":231.04556},{"nominal":232,"mass":232.04645},{"nominal":233,"mass":233.04644},{"nominal":234,"mass":234.04773},{"nominal":235,"mass":235.047908},{"nominal":236,"mass":236.04943},{"nominal":237,"mass":237.049996},{"nominal":238,"mass":238.051985},{"nominal":239,"mass":239.0530247},{"nominal":240,"mass":240.0553},{"nominal":241,"mass":241.0568293},{"nominal":242,"mass":242.0595494},{"nominal":243,"mass":243.0613813},{"nominal":244,"mass":244.0642851},{"nominal":245,"mass":245.0664548},{"nominal":246,"mass":246.069775},{"nominal":247,"mass":247.07209},{"nominal":248,"mass":248.07575},{"nominal":249,"mass":249.07848}],"symbol":"Am","name":"Americium","mass":null},{"number":96,"isotopes":[{"nominal":232,"mass":232.04982},{"nominal":233,"mass":233.05077},{"nominal":234,"mass":234.05016},{"nominal":235,"mass":235.05154},{"nominal":236,"mass":236.051374},{"nominal":237,"mass":237.052869},{"nominal":238,"mass":238.053081},{"nominal":239,"mass":239.05491},{"nominal":240,"mass":240.0555297},{"nominal":241,"mass":241.0576532},{"nominal":242,"mass":242.058836},{"nominal":243,"mass":243.0613893},{"nominal":244,"mass":244.0627528},{"nominal":245,"mass":245.0654915},{"nominal":246,"mass":246.0672238},{"nominal":247,"mass":247.0703541},{"nominal":248,"mass":248.0723499},{"nominal":249,"mass":249.0759548},{"nominal":250,"mass":250.078358},{"nominal":251,"mass":251.082286},{"nominal":252,"mass":252.08487}],"symbol":"Cm","name":"Curium","mass":null},{"number":97,"isotopes":[{"nominal":234,"mass":234.05727},{"nominal":235,"mass":235.05658},{"nominal":236,"mass":236.05748},{"nominal":237,"mass":237.0571},{"nominal":238,"mass":238.0582},{"nominal":239,"mass":239.05824},{"nominal":240,"mass":240.05976},{"nominal":241,"mass":241.06016},{"nominal":242,"mass":242.06198},{"nominal":243,"mass":243.0630078},{"nominal":244,"mass":244.065181},{"nominal":245,"mass":245.0663618},{"nominal":246,"mass":246.068673},{"nominal":247,"mass":247.0703073},{"nominal":248,"mass":248.073088},{"nominal":249,"mass":249.0749877},{"nominal":250,"mass":250.0783167},{"nominal":251,"mass":251.080762},{"nominal":252,"mass":252.08431},{"nominal":253,"mass":253.08688},{"nominal":254,"mass":254.0906}],"symbol":"Bk","name":"Berkelium","mass":null},{"number":98,"isotopes":[{"nominal":237,"mass":237.062198},{"nominal":238,"mass":238.06149},{"nominal":239,"mass":239.06253},{"nominal":240,"mass":240.062256},{"nominal":241,"mass":241.06369},{"nominal":242,"mass":242.063754},{"nominal":243,"mass":243.06548},{"nominal":244,"mass":244.0660008},{"nominal":245,"mass":245.0680487},{"nominal":246,"mass":246.0688055},{"nominal":247,"mass":247.070965},{"nominal":248,"mass":248.0721851},{"nominal":249,"mass":249.0748539},{"nominal":250,"mass":250.0764062},{"nominal":251,"mass":251.0795886},{"nominal":252,"mass":252.0816272},{"nominal":253,"mass":253.0851345},{"nominal":254,"mass":254.087324},{"nominal":255,"mass":255.09105},{"nominal":256,"mass":256.09344}],"symbol":"Cf","name":"Californium","mass":null},{"number":99,"isotopes":[{"nominal":239,"mass":239.06823},{"nominal":240,"mass":240.06892},{"nominal":241,"mass":241.06856},{"nominal":242,"mass":242.06957},{"nominal":243,"mass":243.06951},{"nominal":244,"mass":244.07088},{"nominal":245,"mass":245.07125},{"nominal":246,"mass":246.0729},{"nominal":247,"mass":247.073622},{"nominal":248,"mass":248.075471},{"nominal":249,"mass":249.076411},{"nominal":250,"mass":250.07861},{"nominal":251,"mass":251.0799936},{"nominal":252,"mass":252.08298},{"nominal":253,"mass":253.0848257},{"nominal":254,"mass":254.0880222},{"nominal":255,"mass":255.090275},{"nominal":256,"mass":256.0936},{"nominal":257,"mass":257.09598},{"nominal":258,"mass":258.09952}],"symbol":"Es","name":"Einsteinium","mass":null},{"number":100,"isotopes":[{"nominal":241,"mass":241.07421},{"nominal":242,"mass":242.07343},{"nominal":243,"mass":243.07446},{"nominal":244,"mass":244.07404},{"nominal":245,"mass":245.07535},{"nominal":246,"mass":246.07535},{"nominal":247,"mass":247.07694},{"nominal":248,"mass":248.0771865},{"nominal":249,"mass":249.0789275},{"nominal":250,"mass":250.079521},{"nominal":251,"mass":251.08154},{"nominal":252,"mass":252.0824671},{"nominal":253,"mass":253.0851846},{"nominal":254,"mass":254.0868544},{"nominal":255,"mass":255.089964},{"nominal":256,"mass":256.0917745},{"nominal":257,"mass":257.0951061},{"nominal":258,"mass":258.09708},{"nominal":259,"mass":259.1006},{"nominal":260,"mass":260.10281}],"symbol":"Fm","name":"Fermium","mass":null},{"number":101,"isotopes":[{"nominal":245,"mass":245.08081},{"nominal":246,"mass":246.08171},{"nominal":247,"mass":247.08152},{"nominal":248,"mass":248.08282},{"nominal":249,"mass":249.08291},{"nominal":250,"mass":250.08441},{"nominal":251,"mass":251.084774},{"nominal":252,"mass":252.08643},{"nominal":253,"mass":253.087144},{"nominal":254,"mass":254.08959},{"nominal":255,"mass":255.0910841},{"nominal":256,"mass":256.09389},{"nominal":257,"mass":257.0955424},{"nominal":258,"mass":258.0984315},{"nominal":259,"mass":259.10051},{"nominal":260,"mass":260.10365},{"nominal":261,"mass":261.10583},{"nominal":262,"mass":262.1091}],"symbol":"Md","name":"Mendelevium","mass":null},{"number":102,"isotopes":[{"nominal":248,"mass":248.08655},{"nominal":249,"mass":249.0878},{"nominal":250,"mass":250.08756},{"nominal":251,"mass":251.08894},{"nominal":252,"mass":252.088967},{"nominal":253,"mass":253.0905641},{"nominal":254,"mass":254.090956},{"nominal":255,"mass":255.093191},{"nominal":256,"mass":256.0942829},{"nominal":257,"mass":257.0968878},{"nominal":258,"mass":258.09821},{"nominal":259,"mass":259.10103},{"nominal":260,"mass":260.10264},{"nominal":261,"mass":261.1057},{"nominal":262,"mass":262.10746},{"nominal":263,"mass":263.11071},{"nominal":264,"mass":264.11273}],"symbol":"No","name":"Nobelium","mass":null},{"number":103,"isotopes":[{"nominal":251,"mass":251.09418},{"nominal":252,"mass":252.09526},{"nominal":253,"mass":253.09509},{"nominal":254,"mass":254.09648},{"nominal":255,"mass":255.096562},{"nominal":256,"mass":256.098494},{"nominal":257,"mass":257.099418},{"nominal":258,"mass":258.10176},{"nominal":259,"mass":259.102902},{"nominal":260,"mass":260.1055},{"nominal":261,"mass":261.10688},{"nominal":262,"mass":262.10961},{"nominal":263,"mass":263.11136},{"nominal":264,"mass":264.1142},{"nominal":265,"mass":265.11619},{"nominal":266,"mass":266.11983}],"symbol":"Lr","name":"Lawrencium","mass":null},{"number":104,"isotopes":[{"nominal":253,"mass":253.10044},{"nominal":254,"mass":254.10005},{"nominal":255,"mass":255.10127},{"nominal":256,"mass":256.101152},{"nominal":257,"mass":257.102918},{"nominal":258,"mass":258.103428},{"nominal":259,"mass":259.105596},{"nominal":260,"mass":260.10644},{"nominal":261,"mass":261.108773},{"nominal":262,"mass":262.10992},{"nominal":263,"mass":263.11249},{"nominal":264,"mass":264.11388},{"nominal":265,"mass":265.11668},{"nominal":266,"mass":266.11817},{"nominal":267,"mass":267.12179},{"nominal":268,"mass":268.12397}],"symbol":"Rf","name":"Rutherfordium","mass":null},{"number":105,"isotopes":[{"nominal":255,"mass":255.10707},{"nominal":256,"mass":256.10789},{"nominal":257,"mass":257.10758},{"nominal":258,"mass":258.10928},{"nominal":259,"mass":259.109492},{"nominal":260,"mass":260.1113},{"nominal":261,"mass":261.11192},{"nominal":262,"mass":262.11407},{"nominal":263,"mass":263.11499},{"nominal":264,"mass":264.11741},{"nominal":265,"mass":265.11861},{"nominal":266,"mass":266.12103},{"nominal":267,"mass":267.12247},{"nominal":268,"mass":268.12567},{"nominal":269,"mass":269.12791},{"nominal":270,"mass":270.13136}],"symbol":"Db","name":"Dubnium","mass":null},{"number":106,"isotopes":[{"nominal":258,"mass":258.11298},{"nominal":259,"mass":259.1144},{"nominal":260,"mass":260.114384},{"nominal":261,"mass":261.115949},{"nominal":262,"mass":262.116337},{"nominal":263,"mass":263.11829},{"nominal":264,"mass":264.11893},{"nominal":265,"mass":265.12109},{"nominal":266,"mass":266.12198},{"nominal":267,"mass":267.12436},{"nominal":268,"mass":268.12539},{"nominal":269,"mass":269.12863},{"nominal":270,"mass":270.13043},{"nominal":271,"mass":271.13393},{"nominal":272,"mass":272.13589},{"nominal":273,"mass":273.13958}],"symbol":"Sg","name":"Seaborgium","mass":null},{"number":107,"isotopes":[{"nominal":260,"mass":260.12166},{"nominal":261,"mass":261.12145},{"nominal":262,"mass":262.12297},{"nominal":263,"mass":263.12292},{"nominal":264,"mass":264.12459},{"nominal":265,"mass":265.12491},{"nominal":266,"mass":266.12679},{"nominal":267,"mass":267.1275},{"nominal":268,"mass":268.12969},{"nominal":269,"mass":269.13042},{"nominal":270,"mass":270.13336},{"nominal":271,"mass":271.13526},{"nominal":272,"mass":272.13826},{"nominal":273,"mass":273.14024},{"nominal":274,"mass":274.14355},{"nominal":275,"mass":275.14567}],"symbol":"Bh","name":"Bohrium","mass":null},{"number":108,"isotopes":[{"nominal":263,"mass":263.12852},{"nominal":264,"mass":264.128357},{"nominal":265,"mass":265.129793},{"nominal":266,"mass":266.130046},{"nominal":267,"mass":267.13167},{"nominal":268,"mass":268.13186},{"nominal":269,"mass":269.13375},{"nominal":270,"mass":270.13429},{"nominal":271,"mass":271.13717},{"nominal":272,"mass":272.1385},{"nominal":273,"mass":273.14168},{"nominal":274,"mass":274.1433},{"nominal":275,"mass":275.14667},{"nominal":276,"mass":276.14846},{"nominal":277,"mass":277.1519}],"symbol":"Hs","name":"Hassium","mass":null},{"number":109,"isotopes":[{"nominal":265,"mass":265.136},{"nominal":266,"mass":266.13737},{"nominal":267,"mass":267.13719},{"nominal":268,"mass":268.13865},{"nominal":269,"mass":269.13882},{"nominal":270,"mass":270.14033},{"nominal":271,"mass":271.14074},{"nominal":272,"mass":272.14341},{"nominal":273,"mass":273.1444},{"nominal":274,"mass":274.14724},{"nominal":275,"mass":275.14882},{"nominal":276,"mass":276.15159},{"nominal":277,"mass":277.15327},{"nominal":278,"mass":278.15631},{"nominal":279,"mass":279.15808}],"symbol":"Mt","name":"Meitnerium","mass":null},{"number":110,"isotopes":[{"nominal":267,"mass":267.14377},{"nominal":268,"mass":268.14348},{"nominal":269,"mass":269.144752},{"nominal":270,"mass":270.144584},{"nominal":271,"mass":271.14595},{"nominal":272,"mass":272.14602},{"nominal":273,"mass":273.14856},{"nominal":274,"mass":274.14941},{"nominal":275,"mass":275.15203},{"nominal":276,"mass":276.15303},{"nominal":277,"mass":277.15591},{"nominal":278,"mass":278.15704},{"nominal":279,"mass":279.1601},{"nominal":280,"mass":280.16131},{"nominal":281,"mass":281.16451}],"symbol":"Ds","name":"Darmstadtium","mass":null},{"number":111,"isotopes":[{"nominal":272,"mass":272.15327},{"nominal":273,"mass":273.15313},{"nominal":274,"mass":274.15525},{"nominal":275,"mass":275.15594},{"nominal":276,"mass":276.15833},{"nominal":277,"mass":277.15907},{"nominal":278,"mass":278.16149},{"nominal":279,"mass":279.16272},{"nominal":280,"mass":280.16514},{"nominal":281,"mass":281.16636},{"nominal":282,"mass":282.16912},{"nominal":283,"mass":283.17054}],"symbol":"Rg","name":"Roentgenium","mass":null},{"number":112,"isotopes":[{"nominal":276,"mass":276.16141},{"nominal":277,"mass":277.16364},{"nominal":278,"mass":278.16416},{"nominal":279,"mass":279.16654},{"nominal":280,"mass":280.16715},{"nominal":281,"mass":281.16975},{"nominal":282,"mass":282.1705},{"nominal":283,"mass":283.17327},{"nominal":284,"mass":284.17416},{"nominal":285,"mass":285.17712}],"symbol":"Cn","name":"Copernicium","mass":null},{"number":113,"isotopes":[{"nominal":278,"mass":278.17058},{"nominal":279,"mass":279.17095},{"nominal":280,"mass":280.17293},{"nominal":281,"mass":281.17348},{"nominal":282,"mass":282.17567},{"nominal":283,"mass":283.17657},{"nominal":284,"mass":284.17873},{"nominal":285,"mass":285.17973},{"nominal":286,"mass":286.18221},{"nominal":287,"mass":287.18339}],"symbol":"Nh","name":"Nihonium","mass":null},{"number":114,"isotopes":[{"nominal":285,"mass":285.18364},{"nominal":286,"mass":286.18423},{"nominal":287,"mass":287.18678},{"nominal":288,"mass":288.18757},{"nominal":289,"mass":289.19042}],"symbol":"Fl","name":"Flerovium","mass":null},{"number":115,"isotopes":[{"nominal":287,"mass":287.1907},{"nominal":288,"mass":288.19274},{"nominal":289,"mass":289.19363},{"nominal":290,"mass":290.19598},{"nominal":291,"mass":291.19707}],"symbol":"Mc","name":"Moscovium","mass":null},{"number":116,"isotopes":[{"nominal":289,"mass":289.19816},{"nominal":290,"mass":290.19864},{"nominal":291,"mass":291.20108},{"nominal":292,"mass":292.20174},{"nominal":293,"mass":293.20449}],"symbol":"Lv","name":"Livermorium","mass":null},{"number":117,"isotopes":[{"nominal":291,"mass":291.20553},{"nominal":292,"mass":292.20746},{"nominal":293,"mass":293.20824},{"nominal":294,"mass":294.21046}],"symbol":"Ts","name":"Teennessine","mass":null},{"number":118,"isotopes":[{"nominal":293,"mass":293.21356},{"nominal":294,"mass":294.21392},{"nominal":295,"mass":295.21624}],"symbol":"Og","name":"Oganesson","mass":null}]
},{}],4:[function(require,module,exports){
'use strict';

const elements = require('./elements.json');

const data = elements.map((element) => ({
  number: element.number,
  symbol: element.symbol,
  mass: element.mass,
  name: element.name,
  monoisotopicMass: element.monoisotopicMass,
}));

module.exports = data;

},{"./elements.json":3}],5:[function(require,module,exports){
'use strict';

module.exports = require('./elements.json');

},{"./elements.json":3}],6:[function(require,module,exports){
'use strict';

const elements = require('./elements.json');

let elementsAndIsotopesObject = {};
elements.forEach((element) => {
  elementsAndIsotopesObject[element.symbol] = element;
});

module.exports = elementsAndIsotopesObject;

},{"./elements.json":3}],7:[function(require,module,exports){
'use strict';

const elements = JSON.parse(JSON.stringify(require('./elements.json')));

elements.forEach((element) => {
  element.isotopes = element.isotopes.filter((i) => i.abundance > 0);
});

module.exports = elements;

},{"./elements.json":3}],8:[function(require,module,exports){
'use strict';

const elementsAndStableIsotopes = require('./elementsAndStableIsotopes.js');

let elementsAndStableIsotopesObject = {};
elementsAndStableIsotopes.forEach((element) => {
  elementsAndStableIsotopesObject[element.symbol] = element;
});

module.exports = elementsAndStableIsotopesObject;

},{"./elementsAndStableIsotopes.js":7}],9:[function(require,module,exports){
'use strict';

const elements = require('./elements.js');

let elementsObject = {};
elements.forEach((element) => {
  elementsObject[element.symbol] = element;
});

module.exports = elementsObject;

},{"./elements.js":4}],10:[function(require,module,exports){
'use strict';

const { ELECTRON_MASS } = require('./constants');
const elements = require('./elements.js');
const elementsAndIsotopes = require('./elementsAndIsotopes.js');
const elementsAndIsotopesObject = require('./elementsAndIsotopesObject.js');
const elementsAndStableIsotopes = require('./elementsAndStableIsotopes.js');
const elementsAndStableIsotopesObject = require('./elementsAndStableIsotopesObject.js');
const elementsObject = require('./elementsObject.js');

module.exports = {
  elements,
  elementsObject,
  elementsAndIsotopes,
  elementsAndIsotopesObject,
  elementsAndStableIsotopes,
  elementsAndStableIsotopesObject,
  ELECTRON_MASS,
};

},{"./constants":2,"./elements.js":4,"./elementsAndIsotopes.js":5,"./elementsAndIsotopesObject.js":6,"./elementsAndStableIsotopes.js":7,"./elementsAndStableIsotopesObject.js":8,"./elementsObject.js":9}],11:[function(require,module,exports){
'use strict';

module.exports = {
  O: 0,
  N: 1,
  H: -1,
  Na: -1,
  K: -1,
  Li: -1,
  Ca: -2,
  C: 2,
  F: -1,
  Si: 4,
  Cl: -1,
  Br: -1,
  I: -1,
  S: 0,
  P: 1,
};

},{}],12:[function(require,module,exports){
'use strict';
module.exports = {
  Abu: {
    name: '2-Aminobutyric acid diradical',
    mf: 'C4H7NO',
    kind: '',
    ocl: { value: 'dazHPBPOEgEInVZjcH@', coordinates: '!Bb@I~@Ha}_c~H@m]}bGt' },
    mass: 85.10463700109551,
    monoisotopicMass: 85.05276384961,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Acet: {
    name: 'Acetyl',
    mf: 'C2H3O',
    kind: '',
    ocl: { value: 'gCaHDEeIi`@', coordinates: '!BbOq~@Ha}' },
    mass: 43.04469897995611,
    monoisotopicMass: 43.01838971626,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 2 },
      { symbol: 'H', number: 3 },
      { symbol: 'O', number: 1 },
    ],
  },
  Acm: {
    name: 'Acetamidomethyl',
    mf: 'C3H6NO',
    kind: '',
    ocl: { value: 'gGYHDPliJuS@@', coordinates: '!BbOrH_Xc|_`BH_P' },
    mass: 72.08596035030448,
    monoisotopicMass: 72.04493881738,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Adao: {
    name: 'Adamantyloxy',
    mf: 'C10H15O',
    kind: '',
    ocl: {
      value: 'dc\\H`HAYRVeV^dUGZjjjj@@',
      coordinates: '!B]BOXN`EP}CdB\\tbZ@Ijh~hRELdOBBp',
    },
    mass: 151.2258752025074,
    monoisotopicMass: 151.11229010302,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 15 },
      { symbol: 'O', number: 1 },
    ],
  },
  Aib: {
    name: 'alpha-Aminoisobutyric acid diradical',
    mf: 'C4H7NO',
    kind: '',
    ocl: { value: 'dazHPBPOGgEInfZj@@', coordinates: '!Bb@I~@Ha}b@K|uwwWbGt' },
    mass: 85.10463700109551,
    monoisotopicMass: 85.05276384961,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Ala: {
    name: 'Alanine diradical',
    mf: 'C3H5NO',
    kind: 'aa',
    oneLetter: 'A',
    alternativeOneLetter: 'α',
    ocl: { value: 'gNyDBaxmqR[fZjZ@', coordinates: '!Bb@I~@Hb}b@I~Oxa}' },
    mass: 71.07801959624871,
    monoisotopicMass: 71.03711378515,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Arg: {
    name: 'Arginine diradical',
    mf: 'C6H12N4O',
    kind: 'aa',
    oneLetter: 'R',
    alternativeOneLetter: 'ρ',
    ocl: {
      value: 'dkLhPBgSPOEgEInWUijjihr@@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHHa}b@I~@Ha}',
    },
    mass: 156.18592219918227,
    monoisotopicMass: 156.10111102405,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 4 },
      { symbol: 'O', number: 1 },
    ],
  },
  Argp: {
    name: 'Arginine triradical',
    mf: 'C6H11N4O',
    kind: '',
    ocl: {
      value: 'dglhpHpil@gWDEI[UYZfjji`T@',
      coordinates: '!BbGvHGx@bGvH@ha}bOrH_Wxb@KW_Wx@bGt',
    },
    mass: 155.1779814451265,
    monoisotopicMass: 155.09328599182,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 4 },
      { symbol: 'O', number: 1 },
    ],
  },
  Asn: {
    name: 'Asparagine diradical',
    mf: 'C4H6N2O2',
    kind: 'aa',
    oneLetter: 'N',
    alternativeOneLetter: 'η',
    ocl: {
      value: 'deeDPBeACqYqR[ezZjZL`@',
      coordinates: '!BbGu~Ox`B_`BH_X`Bb@I~@Ha}',
    },
    mass: 114.10280438280381,
    monoisotopicMass: 114.04292744137999,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 2 },
    ],
  },
  Asnp: {
    name: 'Asparagine triradical',
    mf: 'C4H5N2O2',
    kind: '',
    ocl: {
      value: 'dmUDpH[E@IEqgqRVvVijjXi@@',
      coordinates: '!Bb@JH_Wxb@JH_Wxb@KW_Wx@bGt',
    },
    mass: 113.09486362874803,
    monoisotopicMass: 113.03510240915,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 2 },
    ],
  },
  Asp: {
    name: 'Aspartic acid diradical',
    mf: 'C4H5NO3',
    kind: 'aa',
    oneLetter: 'D',
    alternativeOneLetter: 'δ',
    ocl: {
      value: 'defLPBPYCqYqR[ezZjZL`@',
      coordinates: '!BbGu~Ox`B_`BH_X`Bb@I~@Ha}',
    },
    mass: 115.08756534162052,
    monoisotopicMass: 115.02694302429,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Aspp: {
    name: 'Aspartic acid triradical',
    mf: 'C4H4NO3',
    kind: '',
    ocl: {
      value: 'dmVLpFcE@IEqgqRVvVijjXi@@',
      coordinates: '!Bb@JH_Wxb@JH_Wxb@KW_Wx@bGt',
    },
    mass: 114.07962458756472,
    monoisotopicMass: 114.01911799206,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 4 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Asu: {
    name: 'alpha-Aminosuberic acid diradical',
    mf: 'C8H13NO3',
    kind: '',
    ocl: {
      value: 'dgnLPBP{CqYqR[euVfjjihr@@',
      coordinates: '!BbGu~Ox`B_`BH_Xc|bOrH_X`BbGvHGx@bGt',
    },
    mass: 171.19403496100773,
    monoisotopicMass: 171.08954328213002,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Asup: {
    name: 'alpha-Aminosuberic acid triradical',
    mf: 'C8H12NO3',
    kind: '',
    ocl: {
      value: 'do^LpEcG@IMqoqRVuUejZjjibT@',
      coordinates: '!BbOrH_Wxb@JH_Xc|bGvHHa}_c~H@m]}_`BH_P',
    },
    mass: 170.18609420695194,
    monoisotopicMass: 170.0817182499,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Boc: {
    name: 't-Butoxycarbonyl',
    mf: 'C5H9O2',
    kind: '',
    ocl: { value: 'daxD`DpEeImjZj@@', coordinates: '!B|Ou~_A||Ow}mC}_O@' },
    mass: 101.12395611881479,
    monoisotopicMass: 101.06025452921,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'O', number: 2 },
    ],
  },
  Bom: {
    name: 'Benzyloxymethyl',
    mf: 'C8H9O',
    kind: '',
    ocl: {
      value: 'deTH`DAYRUYTYj`@@@',
      coordinates: '!B|Gsp__A||Owp_Gy|Gwp_Wy',
    },
    mass: 121.15675888470227,
    monoisotopicMass: 121.06533990964,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 9 },
      { symbol: 'O', number: 1 },
    ],
  },
  Brz: {
    name: '2-Bromobenzyloxycarbonyl',
    mf: 'C8H6BrO2',
    kind: '',
    ocl: {
      value: 'dcLDPDpEd\\QImYgWYjB@@@',
      coordinates: '!Bb@I~@Hb}b@JH_X`B_c}~@Hb}bGu~Op',
    },
    mass: 214.03586932736317,
    monoisotopicMass: 212.95511703252,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 6 },
      { symbol: 'Br', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Bu: {
    name: 'Butyl',
    mf: 'C4H9',
    kind: '',
    ocl: { value: 'gJPH@liJuP@', coordinates: '!B@Fp@XpAl@FL' },
    mass: 57.114410373442986,
    monoisotopicMass: 57.07042529007,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 9 },
    ],
  },
  Bum: {
    name: 't-Butoxymethyl',
    mf: 'C5H11O',
    kind: '',
    ocl: { value: 'gNqHDEeIVjj`@', coordinates: '!B@FL@[@AcXs|@Xvp@' },
    mass: 87.14043270260808,
    monoisotopicMass: 87.08098997409999,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 11 },
      { symbol: 'O', number: 1 },
    ],
  },
  Bz: {
    name: 'Benzoyl',
    mf: 'C7H5O',
    kind: '',
    ocl: {
      value: 'didH`DAYR[e^FX@@@@',
      coordinates: '!BbOq~@Ha}b@I~Oxa}bGu~Op',
    },
    mass: 105.1142599717439,
    monoisotopicMass: 105.03403978072,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 5 },
      { symbol: 'O', number: 1 },
    ],
  },
  Bzl: {
    name: 'Benzyl',
    mf: 'C7H7',
    kind: '',
    ocl: { value: 'daD@`@VTeeVz`@@@', coordinates: '!B|Gsp_A|_gp_A}_g|' },
    mass: 91.13073655553718,
    monoisotopicMass: 91.05477522561,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 7 },
    ],
  },
  Bn: {
    name: 'Benzyl',
    mf: 'C7H7',
    kind: '',
    ocl: { value: 'daD@`@VTeeVz`@@@', coordinates: '!B|Gsp_A|_gp_A}_g|' },
    mass: 91.13073655553718,
    monoisotopicMass: 91.05477522561,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 7 },
    ],
  },
  Bzlo: {
    name: 'Benzyloxy',
    mf: 'C7H7O',
    kind: '',
    ocl: {
      value: 'didH`HAYRUe^Fh@@@@',
      coordinates: '!B|Gwp_OC}|Gq~_A}|Gu~_p',
    },
    mass: 107.13014147985547,
    monoisotopicMass: 107.04968984518,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 7 },
      { symbol: 'O', number: 1 },
    ],
  },
  Cha: {
    name: 'beta-Cyclohexylalanine diradical',
    mf: 'C9H15NO',
    kind: '',
    ocl: {
      value: 'dknHPBPOEgEInWe]NZjjjcH@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvH@gxbGvH_Wx',
    },
    mass: 153.22184251721796,
    monoisotopicMass: 153.11536410745,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Chxo: {
    name: 'Cyclohexyloxy',
    mf: 'C6H11O',
    kind: '',
    ocl: { value: 'daDH`HAYRVU[jjj@@', coordinates: '!B|Gsp_A|_gp_A}_g|' },
    mass: 99.15116859934332,
    monoisotopicMass: 99.08098997409999,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'O', number: 1 },
    ],
  },
  Cit: {
    name: 'Citrulline diradical',
    mf: 'C6H11N3O2',
    kind: '',
    ocl: {
      value: 'dkODPBdttOEgEInWUijjihr@@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHHa}b@I~@Ha}',
    },
    mass: 157.170683157999,
    monoisotopicMass: 157.08512660696,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 2 },
    ],
  },
  Citp: {
    name: 'Citrulline triradical',
    mf: 'C6H10N3O2',
    kind: '',
    ocl: {
      value: 'dgoDpHJ\\l@gWDEI[UYZfjji`T@',
      coordinates: '!BbGvHGx@bGvH@ha}bOrH_Wxb@KW_Wx@bGt',
    },
    mass: 156.16274240394318,
    monoisotopicMass: 156.07730157473,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 10 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 2 },
    ],
  },
  Clz: {
    name: '2-Chlorobenzyloxycarbonyl',
    mf: 'C8H6ClO2',
    kind: '',
    ocl: {
      value: 'dcLDPDpEdXaImYgWYjB@@@',
      coordinates: '!Bb@I~@Hb}b@JH_X`B_c}~@Hb}bGu~Op',
    },
    mass: 169.58527912946118,
    monoisotopicMass: 169.00563211451998,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 6 },
      { symbol: 'Cl', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Cp: {
    name: 'Cyclopentadienyl',
    mf: 'C5H5',
    kind: '',
    ocl: { value: 'gFpH@liLimRp@', coordinates: '!B\\OtPThyEGl@fP' },
    mass: 65.09338325395512,
    monoisotopicMass: 65.03912516115,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 5 },
    ],
  },
  Cys: {
    name: 'Cysteine diradical',
    mf: 'C3H5NOS',
    kind: 'aa',
    oneLetter: 'C',
    alternativeOneLetter: 'ς',
    ocl: {
      value: 'dazHpBPOEgG`aInVZjcH@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGt',
    },
    mass: 103.14280700237578,
    monoisotopicMass: 103.00918495955,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Cysp: {
    name: 'Cysteine triradical',
    mf: 'C3H4NOS',
    kind: '',
    ocl: {
      value: 'diFHHBD@f@agGoEIVVjjfLP@',
      coordinates: '!BbGvHHa}_c~HM]}_`BH_P',
    },
    mass: 102.13486624831998,
    monoisotopicMass: 102.00135992732,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 4 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  D: {
    name: 'Deuterium',
    mf: '[2H]',
    kind: '',
    ocl: { value: 'eFAAYhBLCEH@', coordinates: '!B@FL' },
    mass: 2.01410177812,
    monoisotopicMass: 2.01410177812,
    unsaturation: -1,
    elements: [{ symbol: 'H', number: 1, isotope: 2 }],
  },
  Dde: {
    name: 'Dde',
    mf: 'C10H13O2',
    kind: '',
    ocl: {
      value: 'dklD`FDEgHhihicIVZfZj@@',
      coordinates: '!Bb@I~@Ha}upJH@m]}_`BH_Wx@b@I}bOrH',
    },
    mass: 165.20939861871415,
    monoisotopicMass: 165.09155465812998,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'O', number: 2 },
    ],
  },
  Dnp: {
    name: '2,4-Dinitrophenyl',
    mf: 'C6H3N2O4',
    kind: '',
    ocl: {
      value: 'dkmB`bWatpVRd^VS{HhheEUFfBAbX@@',
      coordinates: '!B_c~H_]]}b@I~Owx_`BH_]]}_c~H_]]}',
    },
    mass: 167.09926376274353,
    monoisotopicMass: 167.00928158383,
    unsaturation: 11,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 3 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 4 },
    ],
  },
  Et: {
    name: 'Ethyl',
    mf: 'C2H5',
    kind: '',
    ocl: { value: 'eMBAYRZ@', coordinates: '!B@Fp@Xp' },
    mass: 29.061175563749384,
    monoisotopicMass: 29.03912516115,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 2 },
      { symbol: 'H', number: 5 },
    ],
  },
  Fmoc: {
    name: 'Fluorenylmethoxycarbonyl',
    mf: 'C15H11O2',
    kind: '',
    ocl: {
      value: 'fde@b@DX@liMkLrjxeVCzLuT@@@P@@@',
      coordinates: '!BbOq~@Ha}bOrH_]ARcm}Tv~i`pAeKv|@fpB[j[~iozfAKvp',
    },
    mass: 223.24719659427882,
    monoisotopicMass: 223.07590459367,
    unsaturation: 19,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 11 },
      { symbol: 'O', number: 2 },
    ],
  },
  For: {
    name: 'Formyl',
    mf: 'CHO',
    kind: '',
    ocl: { value: 'eMJDVTfP@', coordinates: '!B@Fp@Xp' },
    mass: 29.018081575109303,
    monoisotopicMass: 29.0027396518,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 1 },
      { symbol: 'H', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Gln: {
    name: 'Glutamine diradical',
    mf: 'C5H8N2O2',
    kind: 'aa',
    oneLetter: 'Q',
    alternativeOneLetter: 'ξ',
    ocl: {
      value: 'dmUDPBUICqYqR[evfjihr@@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHGx@bGt',
    },
    mass: 128.12942178765059,
    monoisotopicMass: 128.05857750584,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 8 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 2 },
    ],
  },
  Glnp: {
    name: 'Glutamine triradical',
    mf: 'C5H7N2O2',
    kind: '',
    ocl: {
      value: 'dcuDpH{MAYeqWqRVuejZjiad@',
      coordinates: '!BbGvHGx@bGvH@ha}_c~HM]}_`BH_P',
    },
    mass: 127.12148103359483,
    monoisotopicMass: 127.05075247361,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 2 },
    ],
  },
  Glp: {
    name: 'Pyroglutamine',
    mf: 'C5H5NO2',
    kind: '',
    ocl: {
      value: 'deVDPBRP|V\\TfygxYjjZL`@',
      coordinates: '!Bb@I~@Ha}tEJNwr[@UMo@FXBN',
    },
    mass: 111.09889631403748,
    monoisotopicMass: 111.03202840472,
    unsaturation: 6,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Glu: {
    name: 'Glutamic acid diradical',
    mf: 'C5H7NO3',
    kind: 'aa',
    oneLetter: 'E',
    alternativeOneLetter: 'ε',
    ocl: {
      value: 'dmVLPBRUCqYqR[evfjihr@@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHGx@bGt',
    },
    mass: 129.11418274646732,
    monoisotopicMass: 129.04259308875,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Glup: {
    name: 'Glutamic acid triradical',
    mf: 'C5H6NO3',
    kind: '',
    ocl: {
      value: 'dcvLpNcM@IeqWqRVuejZjiad@',
      coordinates: '!BbGvHGx@bGvH@ha}_c~HM]}_`BH_P',
    },
    mass: 128.10624199241153,
    monoisotopicMass: 128.03476805652002,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Gly: {
    name: 'Glycine diradical',
    mf: 'C2H3NO',
    kind: 'aa',
    oneLetter: 'G',
    alternativeOneLetter: 'γ',
    ocl: { value: 'gGYDBaxuqR[Yj@@', coordinates: '!BbOq~@Ha}bOrH_P' },
    mass: 57.051402191401905,
    monoisotopicMass: 57.021463720689994,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 2 },
      { symbol: 'H', number: 3 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Hci: {
    name: 'Homocitrulline diradical',
    mf: 'C7H13N3O2',
    kind: '',
    ocl: {
      value: 'dgoDPBVtLOEgEInWUZZjjfcH@',
      coordinates: '!BbGu~Ox`B_`BH_Xc|bOrH_X`BbGvHGx@bGt',
    },
    mass: 171.19730056284578,
    monoisotopicMass: 171.10077667142,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 2 },
    ],
  },
  Hcip: {
    name: 'Homocitrulline triradical',
    mf: 'C7H12N3O2',
    kind: '',
    ocl: {
      value: 'do_DpHI\\\\EdwFEI[UVVijjjfIP@',
      coordinates: '!BbOrH_Wxb@JH_Xc|bGvHHa}_c~H@m]}_`BH_P',
    },
    mass: 170.18935980879002,
    monoisotopicMass: 170.09295163918998,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 2 },
    ],
  },
  His: {
    name: 'Histidine diradical',
    mf: 'C6H7N3O',
    kind: 'aa',
    oneLetter: 'H',
    alternativeOneLetter: 'ζ',
    ocl: {
      value: 'dcOHPBGTCqYqR[eyUvZjejL`@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGwPTh{_UMo@FP',
    },
    mass: 137.13951521745759,
    monoisotopicMass: 137.05891185847,
    unsaturation: 8,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 1 },
    ],
  },
  Hisp: {
    name: 'Histidine triradical',
    mf: 'C6H6N3O',
    kind: '',
    ocl: {
      value: 'dkoHpHHSAYUqwqRY]YXjjVjihy@@',
      coordinates: '!BTmA}bL@fUHRN`H`BbGu~Ox`Buwu~@Ha}',
    },
    mass: 136.13157446340182,
    monoisotopicMass: 136.05108682624,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 1 },
    ],
  },
  Hser: {
    name: 'Homoserine diradical',
    mf: 'C4H7NO2',
    kind: '',
    ocl: {
      value: 'diFDPBPP|V\\Tfy^Zjhr@@',
      coordinates: '!BbGu~Ox`B_`BH_X`Bb@JH_P',
    },
    mass: 101.10404192541378,
    monoisotopicMass: 101.04767846918,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Hserp: {
    name: 'Homoserine triradical',
    mf: 'C4H6NO2',
    kind: '',
    ocl: {
      value: 'defDpJbPV^\\Q|TeVVjji`d@',
      coordinates: '!Bb@JH_X`BbGu~Oxc|uwu~@Ha}',
    },
    mass: 100.09610117135801,
    monoisotopicMass: 100.03985343695001,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Hyp: {
    name: 'Hydroxyproline diradical',
    mf: 'C5H7NO2',
    kind: '',
    ocl: {
      value: 'deVDPBRP|V\\\\bfbbOCMUUIdE@@',
      coordinates: '!Bb@I~@Ha}tEJNwr[@UMo@FUJO',
    },
    mass: 113.11477782214904,
    monoisotopicMass: 113.04767846918,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Hypp: {
    name: 'Hydroxyproline triradical',
    mf: 'C5H6NO2',
    kind: '',
    ocl: {
      value: 'dmvDpJaPB^\\Y|TeeWjZjjidRL`@',
      coordinates: '!BBOpH_UARcc}TNtBY@HyRSpCQDr\\',
    },
    mass: 112.10683706809326,
    monoisotopicMass: 112.03985343695001,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Ile: {
    name: 'Isoleucine diradical',
    mf: 'C6H11NO',
    kind: 'aa',
    oneLetter: 'I',
    alternativeOneLetter: 'ι',
    ocl: {
      value: 'defHPBPOEgEInVyjjdrT`@',
      coordinates: '!BbGu~Oxc|_`BH_Xc|b@I~Oxa}',
    },
    mass: 113.15787181078912,
    monoisotopicMass: 113.08406397853,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Ivdde: {
    name: '1-[4,4-dimethyl-2,6-dioxocyclohexylidene)-3-methylbutyl',
    mf: 'C13H19O2',
    kind: '',
    ocl: {
      value: 'f`a@b@NR@lyEEDhhigEVfjYjj`@@',
      coordinates: '!BbOq~@Ha}urHGxuwu~@Ha}_`CW_Xa}bOq}b@JH',
    },
    mass: 207.28925083325453,
    monoisotopicMass: 207.13850485151,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 19 },
      { symbol: 'O', number: 2 },
    ],
  },
  Leu: {
    name: 'Leucine diradical',
    mf: 'C6H11NO',
    kind: 'aa',
    oneLetter: 'L',
    alternativeOneLetter: 'λ',
    ocl: {
      value: 'defHPBPOEgEInWijjhr@@',
      coordinates: '!BbGu~Ox`B_`BH_X`Bb@I~@Ha}',
    },
    mass: 113.15787181078912,
    monoisotopicMass: 113.08406397853,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Lys: {
    name: 'Lysine diradical',
    mf: 'C6H12N2O',
    kind: 'aa',
    oneLetter: 'K',
    alternativeOneLetter: 'κ',
    ocl: {
      value: 'dmUHPBU@|V\\Tfy]YjjjL`@',
      coordinates: '!BbGu~Ox`B_`BHoX`Bb@JH_X`BbKt',
    },
    mass: 128.17251577629068,
    monoisotopicMass: 128.09496301519,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 1 },
    ],
  },
  Lysp: {
    name: 'Lysine triradical',
    mf: 'C6H11N2O',
    kind: '',
    ocl: {
      value: 'dcuHpH{PVY\\U|TeUYZjjjXY@@',
      coordinates: '!Bb@JH_X`BbGvH@ha}_c~H@m]}_`BH_P',
    },
    mass: 127.16457502223491,
    monoisotopicMass: 127.08713798295999,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 1 },
    ],
  },
  Mbh: {
    name: "4,4'-Dimethoxybenzhydryl",
    mf: 'C15H15O2',
    kind: '',
    ocl: {
      value: 'fdy@b@G^@liLsJkzlcZmT@@@UP@@@',
      coordinates: '!BbGvHGx_`BH_Xa}uwvHHc|_c}~Oxa}uwvHGxbGwW_P',
    },
    mass: 227.27895961050194,
    monoisotopicMass: 227.10720472258998,
    unsaturation: 15,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 15 },
      { symbol: 'O', number: 2 },
    ],
  },
  Me: {
    name: 'Methyl',
    mf: 'CH3',
    kind: '',
    ocl: { value: 'eFBAYc@@', coordinates: '!B@FL' },
    mass: 15.03455815890258,
    monoisotopicMass: 15.02347509669,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 1 },
      { symbol: 'H', number: 3 },
    ],
  },
  Mebzl: {
    name: '4-Methylbenzyl',
    mf: 'C8H9',
    kind: '',
    ocl: {
      value: 'did@`@VTee]nh@H@@',
      coordinates: '!B|Gsp__A|_gp_C}_gp_P',
    },
    mass: 105.15735396038399,
    monoisotopicMass: 105.07042529007,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 9 },
    ],
  },
  Meobzl: {
    name: '4-Methoxybenzyl',
    mf: 'C8H9O',
    kind: '',
    ocl: {
      value: 'deTH`AAYRVUunh@J@@',
      coordinates: '!B|Gsp__A|_gp_A}_gp_Wy',
    },
    mass: 121.15675888470227,
    monoisotopicMass: 121.06533990964,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 9 },
      { symbol: 'O', number: 1 },
    ],
  },
  Met: {
    name: 'Methionine diradical',
    mf: 'C5H9NOS',
    kind: 'aa',
    oneLetter: 'M',
    alternativeOneLetter: 'μ',
    ocl: {
      value: 'defHpBPOEgDPaInWYjjhr@@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHHa}',
    },
    mass: 131.19604181206938,
    monoisotopicMass: 131.04048508847,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mmt: {
    name: '4-Methoxytrityl',
    mf: 'C20H17O',
    kind: '',
    ocl: {
      value: 'ffcAB@B`V\\bdTTTRRRVvIhnRGMT@@@@AP@@@',
      coordinates:
        '!BbKvHM^}_c}~@Hb}dXWHb}j|nHHc|AqOWoWxJV^Ho]\\BuwvHHb}',
    },
    mass: 273.3491156779715,
    monoisotopicMass: 273.12794016748,
    unsaturation: 23,
    elements: [
      { symbol: 'C', number: 20 },
      { symbol: 'H', number: 17 },
      { symbol: 'O', number: 1 },
    ],
  },
  Mtc: {
    name: '2,2,5,7,8-pentamethylchroman-6-sulphonyl',
    mf: 'C14H19O3S',
    kind: '',
    ocl: {
      value: 'fleAa@DX\\AY`DYEHXhhilmiKW`rpDQUUD@@',
      coordinates: '!BbGtBbGwWbGvHGxbGu~@Ha}uwu~Ox`B_c~H_Xa}b@H@_osW',
    },
    mass: 267.36417906043516,
    monoisotopicMass: 267.10549064548,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 14 },
      { symbol: 'H', number: 19 },
      { symbol: 'O', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mtr: {
    name: '4-Methoxy-2,3,6-trimethylbenzenesulphonyl',
    mf: 'C10H13O3S',
    kind: '',
    ocl: {
      value: 'do|LPDrpVXBLbdLTTTngYXBHj@@',
      coordinates: '!BbOq}b@KWb@I~@Ha}bOsWHc|_c~H_Wx@b@JH_P',
    },
    mass: 213.27359094915948,
    monoisotopicMass: 213.05854045209998,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'O', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mts: {
    name: 'Mesitylene-2-sulphonyl',
    mf: 'C9H11O2S',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 183.24756861999438,
    monoisotopicMass: 183.04797576807,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'O', number: 2 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mtt: {
    name: '4-Methyltrityl',
    mf: 'C20H17',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 257.3497107536532,
    monoisotopicMass: 257.13302554791,
    unsaturation: 23,
    elements: [
      { symbol: 'C', number: 20 },
      { symbol: 'H', number: 17 },
    ],
  },
  Nle: {
    name: 'Norleucine diradical',
    mf: 'C6H11NO',
    kind: '',
    ocl: {
      value: 'defHPBPOEgEInWYjjhr@@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHHa}',
    },
    mass: 113.15787181078912,
    monoisotopicMass: 113.08406397853,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Npys: {
    name: '3-Nitro-2-pyridinesulphenyl',
    mf: 'C5H3N2O2S',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 155.1545054234988,
    monoisotopicMass: 154.99152351908998,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 3 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 2 },
      { symbol: 'S', number: 1 },
    ],
  },
  Nva: {
    name: 'Norvaline diradical',
    mf: 'C5H9NO',
    kind: '',
    ocl: {
      value: 'diFHPBPOEgEInWfjjL`@',
      coordinates: '!BbGu~Ox`B_`BH_X`Bb@JH_P',
    },
    mass: 99.13125440594231,
    monoisotopicMass: 99.06841391407,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Odmab: {
    name: 'Odmab',
    mf: 'C20H26NO3',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 328.4260955245558,
    monoisotopicMass: 328.19126870111995,
    unsaturation: 15,
    elements: [
      { symbol: 'C', number: 20 },
      { symbol: 'H', number: 26 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 3 },
    ],
  },
  Orn: {
    name: 'Ornithine diradical',
    mf: 'C5H10N2O',
    kind: '',
    ocl: {
      value: 'deeHPBe@|V\\Tfy]fjjcH@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvHHa}',
    },
    mass: 114.14589837144388,
    monoisotopicMass: 114.07931295072999,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 10 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 1 },
    ],
  },
  Ornp: {
    name: 'Ornithine triradical',
    mf: 'C5H9N2O',
    kind: '',
    ocl: {
      value: 'dmUHpHYPBQ\\Y|TeUejjjfJP@',
      coordinates: '!BbGvHHa}b@JH_Wxb@KW_Wx@bGt',
    },
    mass: 113.13795761738811,
    monoisotopicMass: 113.0714879185,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 1 },
    ],
  },
  Pbf: {
    name: '2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl',
    mf: 'C13H17O3S',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 253.33756165558833,
    monoisotopicMass: 253.08984058101998,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 17 },
      { symbol: 'O', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Pen: {
    name: 'Penicillamine diradical',
    mf: 'C5H9NOS',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 131.19604181206938,
    monoisotopicMass: 131.04048508847,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Penp: {
    name: 'Penicillamine triradical',
    mf: 'C5H8NOS',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 130.1881010580136,
    monoisotopicMass: 130.03266005624,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 8 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Ph: {
    name: 'Phenyl',
    mf: 'C6H5',
    kind: '',
    ocl: { value: 'gOpH@liLkW@@@@', coordinates: '!B|Owp_Gy|OwpWy' },
    mass: 77.10411915069038,
    monoisotopicMass: 77.03912516115,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 5 },
    ],
  },
  Phe: {
    name: 'Phenylalanine diradical',
    mf: 'C9H9NO',
    kind: 'aa',
    oneLetter: 'F',
    alternativeOneLetter: 'φ',
    ocl: {
      value: 'dknHPBPOEgEInWe]NZj@@cH@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGvH@gxbGvH_Wx',
    },
    mass: 147.1741979928833,
    monoisotopicMass: 147.06841391407002,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Phepcl: {
    name: '4-Chlorophenylalanine diradical',
    mf: 'C9H8ClNO',
    kind: '',
    ocl: {
      value: 'dg^HpBPOEgFxaInWe_Sfj`@bL`@',
      coordinates: '!BbOq~@Ha}_c~H@m]}bGvH@gxbGvH_WxbGt',
    },
    mass: 181.6191948214355,
    monoisotopicMass: 181.02944156384,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 8 },
      { symbol: 'Cl', number: 1 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Phg: {
    name: 'Phenylglycine',
    mf: 'C8H7NO',
    kind: '',
    ocl: {
      value: 'dcNHPBPOEgEInVuWYj`@Hr@@',
      coordinates: '!BbOq~@Ha}b@I~Oxa}bGwW_Wx_cW_P',
    },
    mass: 133.1475805880365,
    monoisotopicMass: 133.05276384961002,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Pmc: {
    name: '2,2,5,7,8-Pentamethylchroman-6-sulphonyl',
    mf: 'C14H19O3S',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 267.36417906043516,
    monoisotopicMass: 267.10549064548,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 14 },
      { symbol: 'H', number: 19 },
      { symbol: 'O', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Pro: {
    name: 'Proline diradical',
    mf: 'C5H7NO',
    kind: 'aa',
    oneLetter: 'P',
    alternativeOneLetter: 'π',
    ocl: {
      value: 'difHPBPOEgEInYxYjjhr@@',
      coordinates: '!Bb@I~@Ha}tEJNwr[@UMo@FP',
    },
    mass: 97.11537289783075,
    monoisotopicMass: 97.05276384961,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Pyr: {
    name: 'Pyroglutamine',
    mf: 'C5H5NO2',
    kind: '',
    ocl: {
      value: 'deVDPBRP|V\\TfygxYjjZL`@',
      coordinates: '!Bb@I~@Ha}tEJNwr[@UMo@FXBN',
    },
    mass: 111.09889631403748,
    monoisotopicMass: 111.03202840472,
    unsaturation: 6,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Sar: {
    name: 'Sarcosine diradical',
    mf: 'C3H5NO',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 71.07801959624871,
    monoisotopicMass: 71.03711378515,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Ser: {
    name: 'Serine diradical',
    mf: 'C3H5NO2',
    kind: 'aa',
    oneLetter: 'S',
    alternativeOneLetter: 'σ',
    ocl: {
      value: 'dazDPBS`|V\\TfyYjjL`@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}bGt',
    },
    mass: 87.07742452056698,
    monoisotopicMass: 87.03202840472,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Serp: {
    name: 'Serine triradical',
    mf: 'C3H4NO2',
    kind: '',
    ocl: {
      value: 'diFDpB`PBV\\^|TeYZjjXq@@',
      coordinates: '!BbGvHHa}_c~HM]}_`BH_P',
    },
    mass: 86.06948376651121,
    monoisotopicMass: 86.02420337249,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 4 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Sta: {
    name: 'Statine diradical',
    mf: 'C8H15NO2',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 157.210511544801,
    monoisotopicMass: 157.11027872702002,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Stap: {
    name: 'Statine triradical',
    mf: 'C8H14NO2',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 156.2025707907452,
    monoisotopicMass: 156.10245369479,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Tacm: {
    name: 'Trimethylacetamidomethyl',
    mf: 'C6H12NO',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 114.16581256484488,
    monoisotopicMass: 114.09188901076,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Tbdms: {
    name: 't-Butyldimethylsilyl',
    mf: 'C6H15Si',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 115.2690253969541,
    monoisotopicMass: 115.09430201810001,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 6 },
      { symbol: 'H', number: 15 },
      { symbol: 'Si', number: 1 },
    ],
  },
  Tbu: {
    name: 't-Butyl',
    mf: 'C4H9',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 57.114410373442986,
    monoisotopicMass: 57.07042529007,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 9 },
    ],
  },
  Tbuo: {
    name: 't-Butoxy',
    mf: 'C4H9O',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 73.11381529776126,
    monoisotopicMass: 73.06533990964,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 9 },
      { symbol: 'O', number: 1 },
    ],
  },
  Tbuthio: {
    name: 't-Butylthio',
    mf: 'C4H9S',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 89.17919777957005,
    monoisotopicMass: 89.04249646446999,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 9 },
      { symbol: 'S', number: 1 },
    ],
  },
  Tfa: {
    name: 'Trifluoroacetyl',
    mf: 'C2F3O',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 97.01608620597878,
    monoisotopicMass: 96.99012410776,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 2 },
      { symbol: 'F', number: 3 },
      { symbol: 'O', number: 1 },
    ],
  },
  Thr: {
    name: 'Threonine diradical',
    mf: 'C4H7NO2',
    kind: 'aa',
    oneLetter: 'T',
    alternativeOneLetter: 'τ',
    ocl: { value: 'd@', coordinates: '' },
    mass: 101.10404192541378,
    monoisotopicMass: 101.04767846918,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 7 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Thrp: {
    name: 'Threonine triradical',
    mf: 'C4H6NO2',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 100.09610117135801,
    monoisotopicMass: 100.03985343695001,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 4 },
      { symbol: 'H', number: 6 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Tfsi: {
    name: '(Bis)(trifluoromethanesulfonyl)imide',
    mf: 'C2F6NO4S2',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 280.1457884908235,
    monoisotopicMass: 279.91729380789,
    unsaturation: -1,
    elements: [
      { symbol: 'C', number: 2 },
      { symbol: 'F', number: 6 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 4 },
      { symbol: 'S', number: 2 },
    ],
  },
  Tips: {
    name: 'Triisopropylsilyl',
    mf: 'C9H21Si',
    kind: '',
    ocl: {
      value: 'dmT@P@VX\\DffYjjjh@@',
      coordinates: '!B_a@gHb\\]FBIuWxP^zi~KwxPFAt',
    },
    mass: 157.34887761149452,
    monoisotopicMass: 157.14125221148,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 21 },
      { symbol: 'Si', number: 1 },
    ],
  },
  Tms: {
    name: 'Trimethylsilyl',
    mf: 'C3H9Si',
    kind: '',
    ocl: { value: 'gJPD@lqpRZj`@', coordinates: '!BbOq~@GxbGt' },
    mass: 73.1891731824137,
    monoisotopicMass: 73.04735182472,
    unsaturation: 1,
    elements: [
      { symbol: 'C', number: 3 },
      { symbol: 'H', number: 9 },
      { symbol: 'Si', number: 1 },
    ],
  },
  Tos: {
    name: 'Tosyl',
    mf: 'C7H7O2S',
    kind: '',
    ocl: {
      value: 'dmtDPDpEf@cHiCDeafV@B@@',
      coordinates: '!B|Ou||Ovw|Gwp_Gy|GwpWy|Gt',
    },
    mass: 155.1943338103008,
    monoisotopicMass: 155.01667563914998,
    unsaturation: 7,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 7 },
      { symbol: 'O', number: 2 },
      { symbol: 'S', number: 1 },
    ],
  },
  Trp: {
    name: 'Tryptophan diradical',
    mf: 'C11H10N2O',
    kind: 'aa',
    oneLetter: 'W',
    alternativeOneLetter: 'ω',
    ocl: {
      value: 'f`qQA@BFPCqXxiMr|rnhsoSUTa@QCD@@',
      coordinates: '!BbOq~@Ha}_c~H@m]}bGwPTh{_UMojXL@YpB[@Ini`',
    },
    mass: 186.21031375185538,
    monoisotopicMass: 186.07931295073,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 10 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 1 },
    ],
  },
  Trpp: {
    name: 'Tryptophan triradical',
    mf: 'C11H9N2O',
    kind: '',
    ocl: {
      value: 'fhiQC@HFB@I\\x~|TfYU_ebLDjhDHjibFd@',
      coordinates: '!BTmA}bL@fUHR_Ihz@iVBeXHc|grZH_WxbOsW_Wx@bGt',
    },
    mass: 185.20237299779959,
    monoisotopicMass: 185.07148791850003,
    unsaturation: 15,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 1 },
    ],
  },
  Trt: {
    name: 'Trityl',
    mf: 'C19H15',
    kind: '',
    ocl: {
      value: 'fbm@B@@KJSSLrjkyhnRGMT@@@@@@@@',
      coordinates: '!BrHI~PGy_rMvW@l`BQCvWw\\bBAg}~PGy@]i}~W|c]cNwH`i_]_e|',
    },
    mass: 243.32309334880637,
    monoisotopicMass: 243.11737548345,
    unsaturation: 23,
    elements: [
      { symbol: 'C', number: 19 },
      { symbol: 'H', number: 15 },
    ],
  },
  Tyr: {
    name: 'Tyrosine diradical',
    mf: 'C9H9NO2',
    kind: 'aa',
    oneLetter: 'Y',
    alternativeOneLetter: 'ψ',
    ocl: {
      value: 'dg^DPBRp|V\\Tfy^U}NZj@BHr@@',
      coordinates: '!BbOq~@Ha}_c~H@m]}bGvH@gxbGvH_WxbGt',
    },
    mass: 163.1736029172016,
    monoisotopicMass: 163.06332853364,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Tyrp: {
    name: 'Tyrosine triradical',
    mf: 'C9H8NO2',
    kind: '',
    ocl: {
      value: 'do~DpEapBS\\[|Tee]YYnh@JjdbT@',
      coordinates: '!B_`BHGx@bGvH@h`BbKvH@ha}_c~H@m]}_`BHoP',
    },
    mass: 162.16566216314578,
    monoisotopicMass: 162.05550350141,
    unsaturation: 11,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 8 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Val: {
    name: 'Valine',
    mf: 'C5H9NO',
    kind: 'aa',
    oneLetter: 'V',
    alternativeOneLetter: 'ν',
    ocl: {
      value: 'diFHPBPOEgEInVfjjL`@',
      coordinates: '!Bb@I~@Ha}_c~H@m]}_`BH_P',
    },
    mass: 99.13125440594231,
    monoisotopicMass: 99.06841391407,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 1 },
    ],
  },
  Valoh: {
    name: 'beta-Hydroxyvaline diradical',
    mf: 'C5H9NO2',
    kind: '',
    ocl: {
      value: 'defDPBS`|V\\TfyZfjjcH@',
      coordinates: '!Bb@I~@Ha}b@I~Oxa}Owy~OpA~',
    },
    mass: 115.13065933026058,
    monoisotopicMass: 115.06332853364,
    unsaturation: 2,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Valohp: {
    name: 'beta-Hydroxyvaline triradical',
    mf: 'C5H8NO2',
    kind: '',
    ocl: {
      value: 'dmVDpFaPBQ\\Y|\\bTbaTjjjXq@@',
      coordinates: '!BbGvHHa}_Xc|bGxb@KW_Wx@bGt',
    },
    mass: 114.1227185762048,
    monoisotopicMass: 114.05550350141002,
    unsaturation: 3,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 8 },
      { symbol: 'N', number: 1 },
      { symbol: 'O', number: 2 },
    ],
  },
  Xan: {
    name: 'Xanthyl',
    mf: 'C13H9O',
    kind: '',
    ocl: { value: 'd@', coordinates: '' },
    mass: 181.21043836837848,
    monoisotopicMass: 181.06533990964002,
    unsaturation: 17,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 9 },
      { symbol: 'O', number: 1 },
    ],
  },
  Z: {
    name: 'Benzyloxycarbonyl',
    mf: 'C8H7O2',
    kind: '',
    ocl: {
      value: 'dmtD`DpEeImYVUfh@@@@',
      coordinates: '!Bb@I~@Ha}b@JH_Xc|_c~H_Xa}_c|',
    },
    mass: 135.14028230090898,
    monoisotopicMass: 135.04460446475,
    unsaturation: 9,
    elements: [
      { symbol: 'C', number: 8 },
      { symbol: 'H', number: 7 },
      { symbol: 'O', number: 2 },
    ],
  },
  Damp: {
    name: 'Desoxyadenosine monophosphate diradical',
    mf: 'C10H12N5O5P',
    kind: 'DNAp',
    oneLetter: 'A',
    alternativeOneLetter: 'α',
    ocl: {
      value: 'fnsiS@IASUlJB]xGbkplxyDhhldhiEEUeSdTekUUUULBATXPlKd@@',
      coordinates:
        '!Bqc}{JxyO|XoSWC}W]poGQ\\Ou}]rmx\\Ou}]{qpza|qb}MJwlk^sFO|X',
    },
    mass: 313.2069506932622,
    monoisotopicMass: 313.05760550518,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 5 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dcmp: {
    name: 'Desoxycytidine monophosphate diradical',
    mf: 'C9H12N3O6P',
    kind: 'DNAp',
    oneLetter: 'C',
    alternativeOneLetter: 'ς',
    ocl: {
      value: 'fjmps@IQKB`g^BCqUxV\\\\bTTVRTTbb^iqNZjjjifVkBEa\\`@',
      coordinates: '!Bqc}{JxyO|XoSWA}_W]poGQ\\GuMKuMh\\Gu}]{qpSF]tWQTvatP',
    },
    mass: 289.18221329795364,
    monoisotopicMass: 289.04637211589,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dgmp: {
    name: 'Desoxyguanosine monophosphate diradical',
    mf: 'C10H12N5O6P',
    kind: 'DNAp',
    oneLetter: 'G',
    alternativeOneLetter: 'γ',
    ocl: {
      value: 'fakhs@IASUlJB]{hOEWaYqrIQQYIQRJJkQTyEIZuUUUSRtsUaBpnP@',
      coordinates:
        '!Bqc}{JxyO|XoSWA}W]poGQ\\Gu}]rmx\\Ou}]{qpza|qb}MJwlk^sFza|q`',
    },
    mass: 329.20635561758047,
    monoisotopicMass: 329.05252012475,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dtmp: {
    name: 'Desoxythymidine monophosphate diradical',
    mf: 'C10H13N2O7P',
    kind: 'DNAp',
    oneLetter: 'T',
    alternativeOneLetter: 'τ',
    ocl: {
      value: 'ff}Qs@IQaPSoAjCqUxV\\\\bTTVRTTbbZUNIsUUUULsSVDKBy@@',
      coordinates:
        '!Bqc}{JxyO|XoSWC}_W]poGQ\\GuMKuMh\\Gu}]{qpSF]tWQTvaSZGQ',
    },
    mass: 304.1935916616171,
    monoisotopicMass: 304.04603776326,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dump: {
    name: 'Desoxyuridine monophosphate diradical',
    mf: 'C9H11N2O7P',
    kind: 'DNAp',
    oneLetter: 'U',
    alternativeOneLetter: 'υ',
    ocl: {
      value: 'fjmQs@IQaPSoAJCqUxV\\\\bTTVRTTbb^iqNZjjjifYkBEa\\`@',
      coordinates: '!Bqc}{JxyO|XoSWA}_W]poGQ\\GuMKuMh\\Gu}]{qpSF]tWQTvatP',
    },
    mass: 290.1669742567703,
    monoisotopicMass: 290.0303876988,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Drmp: {
    name: 'Desoxyribose monophosphate diradical',
    mf: 'C5H7O5P',
    kind: 'DNAp',
    ocl: { value: 'd@', coordinates: '' },
    mass: 178.08005138207807,
    monoisotopicMass: 178.00311032188,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 7 },
      { symbol: 'O', number: 5 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dadp: {
    name: 'Desoxyadenosine diphosphate diradical',
    mf: 'C10H13N5O8P2',
    kind: 'DNApp',
    oneLetter: 'A',
    ocl: {
      value: 'fmwhH`IASM\\JBl{wQ`|U^F_AkbdlsjsSOoRtyEMYuUUUM@pSEQaBpnP@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGu}utnDM^HGwWzf~_Ih}M_`AKvto[_`@_`A~grZ_I`',
    },
    mass: 393.1868682186928,
    monoisotopicMass: 393.02393639454,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 2 },
    ],
  },
  Dcdp: {
    name: 'Desoxycytidine diphosphate diradical',
    mf: 'C9H13N3O9P2',
    kind: 'DNApp',
    oneLetter: 'C',
    ocl: {
      value: 'fikqH`IQGB`kN|EoP^JoCOaUqrIQQYIQRJKGRJgDejjjjZYfZkBEa\\`@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGuMcqLX@m^H@gwWKB__t]Q_`@SFGx@Owx@_mQ',
    },
    mass: 369.16213082338425,
    monoisotopicMass: 369.01270300525005,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 2 },
    ],
  },
  Dgdp: {
    name: 'Desoxyguanosine diphosphate diradical',
    mf: 'C10H13N5O9P2',
    kind: 'DNApp',
    oneLetter: 'G',
    ocl: {
      value: 'fcoiH`IASM\\JBl{wQ{Axj|L~CWEIYgUff_^fZ\\bflzjjjfiZifZlHVEr@@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGu}utnD@m^H@gwWzf~_Ih}M_`AKvto[_`@_`A~gr[j[y|f',
    },
    mass: 409.186273143011,
    monoisotopicMass: 409.01885101411,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 2 },
    ],
  },
  Dtdp: {
    name: 'Desoxythymidine diphosphate diradical',
    mf: 'C10H14N2O10P2',
    kind: 'DNApp',
    oneLetter: 'T',
    ocl: {
      value: 'fe{Ph`IQaPUg^Ct\\p^JoCO`uqrIQQYIQRJKEJQTxdmUUUSSMTsVDKBy@@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^HMQbGuMcqLX@m^H@gwWKB__t]Q_`@SFALX_`@_`A~w}D',
    },
    mass: 384.1735091870477,
    monoisotopicMass: 384.01236865262,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 2 },
    ],
  },
  Dudp: {
    name: 'Desoxyuridine diphosphate diradical',
    mf: 'C9H12N2O10P2',
    kind: 'DNApp',
    oneLetter: 'U',
    ocl: {
      value: 'fikPh`IQaPUg^Bwhp^JoCOaUqrIQQYIQRJKGRJgDejjjjZYjYkBEa\\`@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGuMcqLX@m^H@gwWKB__t]Q_`@SFGx@Owx@_mQ',
    },
    mass: 370.1468917822009,
    monoisotopicMass: 369.99671858816,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 2 },
    ],
  },
  Datp: {
    name: 'Desoxyadenosine triphosphate diradical',
    mf: 'C10H14N5O11P3',
    kind: 'DNAppp',
    oneLetter: 'A',
    ocl: {
      value:
        'eohZMJ@I@diehJAKGOFnakg`OESpr|Mo@yqrIQQYIQRJKYZQKVRcbIJjZjjjihFAhjZcAAXKb@@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGu}utnDM^H@gwWzf~_Ih}M_`AKvto[@hcW@`A~grZ_Igx@_`@@_c}~',
    },
    mass: 473.16678574412344,
    monoisotopicMass: 472.9902672839,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 3 },
    ],
  },
  Dctp: {
    name: 'Desoxycytidine triphosphate diradical',
    mf: 'C9H14N3O12P3',
    kind: 'DNAppp',
    oneLetter: 'C',
    ocl: {
      value:
        'fkopZ`IQGB`kN|Fk^{NCqUxY|I~BwGHeEEdeEHhl]HlYJ\\RVjjjiifVjfkBEa\\`@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGuMcqLX@m^H@gwWKB__t]Q_`@SFOrHupH@_mQ_`A~@@A~Owx',
    },
    mass: 449.14204834881485,
    monoisotopicMass: 448.97903389461004,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 12 },
      { symbol: 'P', number: 3 },
    ],
  },
  Dgtp: {
    name: 'Desoxyguanosine triphosphate diradical',
    mf: 'C10H14N5O12P3',
    kind: 'DNAppp',
    oneLetter: 'G',
    ocl: {
      value:
        'e`TZCJ@I@diehJAKGOFnamgo`OESpr|CoByqrIQQYIQRJKYZQQYrT\\QIUSUUUUMRuMLtuVBBpWD@@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGu}utnD@m^H@gwWzf~_Ih}M_`AKvto[@hcW@`A~gr[j[y|f_`A~@@A~Owx',
    },
    mass: 489.16619066844174,
    monoisotopicMass: 488.98518190347005,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 12 },
      { symbol: 'P', number: 3 },
    ],
  },
  Dttp: {
    name: 'Desoxythymidine triphosphate diradical',
    mf: 'C10H15N2O13P3',
    kind: 'DNAppp',
    oneLetter: 'T',
    ocl: {
      value:
        'fgQZ`IQaPUg^BwhygnCqUxY|E~FwGHeEEdeEHhlTiDSISbRuUUUMLuMMMVDKBy@@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGuMcqLX@m^H@gwWKB__t]Q_`@SFALXHcW@`A~w}E~@Gx@@Gx_`',
    },
    mass: 464.15342671247834,
    monoisotopicMass: 463.97869954198,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 13 },
      { symbol: 'P', number: 3 },
    ],
  },
  Dutp: {
    name: 'Desoxyuridine triphosphate diradical',
    mf: 'C9H13N2O13P3',
    kind: 'DNAppp',
    oneLetter: 'U',
    ocl: {
      value:
        'fkoQZ`IQaPUg^CUoQ{NCqUxY|I~BwGHeEEdeEHhl]HlYJ\\RVjjjiiffffkBEa\\`@',
      coordinates:
        '!BIi[Rx{_grZOSXa}_]^H@mQbGuMcqLX@m^H@gwWKB__t]Q_`@SFOrHupH@_mQ_`A~@@A~Owx',
    },
    mass: 450.1268093076315,
    monoisotopicMass: 449.96304947752,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 13 },
      { symbol: 'P', number: 3 },
    ],
  },
  Dade: {
    name: 'Desoxyadenosine diradical',
    mf: 'C10H11N5O2',
    kind: 'DNA',
    oneLetter: 'A',
    ocl: {
      value: 'fluha@IF]ELJ@|QNJRsN|rntyYpXuUUTBATXPlKd@@',
      coordinates: '!B\\KqpQARcg|T^|X@@Id`zeHo@Ie}]vaLcg|T^qAMDDvN_xy',
    },
    mass: 233.22703316783156,
    monoisotopicMass: 233.09127461582,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 2 },
    ],
  },
  Dcyt: {
    name: 'Desoxycytidine diradical',
    mf: 'C9H11N3O3',
    kind: 'DNA',
    oneLetter: 'C',
    ocl: {
      value: 'fhiqa@IVCBa`^HgEIYg^Y~gG^jjjiejpaXWH@',
      coordinates: '!BBOpH_UARcc}TN|Y@PIe`zeIO@MDSIrpXTd}RSqLgTd|',
    },
    mass: 209.202295772523,
    monoisotopicMass: 209.08004122653,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 3 },
    ],
  },
  Dgua: {
    name: 'Desoxyguanosine diradical',
    mf: 'C10H11N5O3',
    kind: 'DNA',
    oneLetter: 'G',
    ocl: {
      value: 'fbmia@IF]ELJYAxb\\Tef]ye^Z\\lxLZjjjeZfkBEa\\`@',
      coordinates: '!B\\KqpQARcg|T^|X@@Id`zeHo@Ie}]vaLcg|T^qAMDDvN_vaLcg|',
    },
    mass: 249.22643809214986,
    monoisotopicMass: 249.08618923539,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 3 },
    ],
  },
  Dthy: {
    name: 'Desoxythymidine diradical',
    mf: 'C10H12N2O4',
    kind: 'DNA',
    oneLetter: 'T',
    ocl: {
      value: 'fdyPQ@IVaPtP^HgEIYg^YuiqwjjjjYikBEa\\`@',
      coordinates: '!BBOpH_UARcc}TN|Y@PIe`zeIO@MDSIrpXTd}RSqLgDr]RSp',
    },
    mass: 224.2136741361865,
    monoisotopicMass: 224.07970687390002,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 4 },
    ],
  },
  Dura: {
    name: 'Desoxyuridine diradical',
    mf: 'C9H10N2O4',
    kind: 'DNA',
    oneLetter: 'U',
    ocl: {
      value: 'fhiPQ@IVaPpP^HgEIYg^Y~gG^jjjifZpaXWH@',
      coordinates: '!BBOpH_UARcc}TN|Y@PIe`zeIO@MDSIrpXTd}RSqLgTd|',
    },
    mass: 210.1870567313397,
    monoisotopicMass: 210.06405680944,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 10 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 4 },
    ],
  },
  Amp: {
    name: 'Adenosine monophosphate diradical',
    mf: 'C10H12N5O6P',
    kind: 'RNAp',
    oneLetter: 'A',
    alternativeOneLetter: 'α',
    ocl: {
      value: 'fakhs@INBwlJ\\TgHOFwaEqrIQQSYQJIRIMLyxMVuUUUPLpEPQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@@',
    },
    mass: 329.20635561758047,
    monoisotopicMass: 329.05252012475,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cmp: {
    name: 'Cytidine monophosphate diradical',
    mf: 'C9H12N3O7P',
    kind: 'RNAp',
    oneLetter: 'C',
    alternativeOneLetter: 'ς',
    ocl: {
      value: 'ff}qs@I^kBgENSdGc[pbxyDhhilheDiLv\\BVjjjjYfZbHfHQL`@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 305.1816182222719,
    monoisotopicMass: 305.04128673546,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Gmp: {
    name: 'Guanosine monophosphate diradical',
    mf: 'C10H12N5O7P',
    kind: 'RNAp',
    oneLetter: 'G',
    alternativeOneLetter: 'γ',
    ocl: {
      value: 'fi{is@INBwlJ\\TgHp^MoBKcdRbbfrbTRdR\\SN^CUmUUUUKMSMQDSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtP@gD}D@',
    },
    mass: 345.20576054189877,
    monoisotopicMass: 345.04743474432,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tmp: {
    name: 'Thymidine monophosphate diradical',
    mf: 'C10H13N2O8P',
    kind: 'RNAp',
    oneLetter: 'T',
    alternativeOneLetter: 'τ',
    ocl: {
      value: 'fncPK@I^aSbgIrtGc[pbxyDhhilheDiLjs`RuUUUSLuMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 320.1929965859354,
    monoisotopicMass: 320.04095238282997,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ump: {
    name: 'Uridine monophosphate diradical',
    mf: 'C9H11N2O8P',
    kind: 'RNAp',
    oneLetter: 'U',
    alternativeOneLetter: 'υ',
    ocl: {
      value: 'ff}PK@I^aSbgIsTGc[pbxyDhhilheDiLv\\BVjjjjYffbHfHQL`@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 306.1663791810886,
    monoisotopicMass: 306.02530231837,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Rmp: {
    name: 'Ribose monophosphate diradical',
    mf: 'C5H7O6P',
    kind: 'RNAp',
    ocl: { value: 'd@', coordinates: '' },
    mass: 194.07945630639637,
    monoisotopicMass: 193.99802494145,
    unsaturation: 4,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 7 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Adp: {
    name: 'Adenosine diphosphate diradical',
    mf: 'C10H13N5O9P2',
    kind: 'RNApp',
    oneLetter: 'A',
    ocl: {
      value:
        'fcoiH`INCt\\J\\UENU{Axv|F~DwGHeEEMeDheHd\\eHsg`u{UUUU@mAEMPQDqBId@@',
      coordinates:
        '!BvuPfpDnDtEK_t_rHtXBH_TwPbOr_IorHbGtgD}F@RxPBuxc|_]^OTh}R_`CQ`MF@_`@_`A~',
    },
    mass: 409.186273143011,
    monoisotopicMass: 409.01885101411,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 2 },
    ],
  },
  Cdp: {
    name: 'Cytidine diphosphate diradical',
    mf: 'C9H13N3O10P2',
    kind: 'RNApp',
    oneLetter: 'C',
    ocl: {
      value: 'fe{ph`I^[BgENbgHy`|[^E_CkcdRbbfrbTRdqrdYpIZjjjieijZbHfHQL`@',
      coordinates:
        '!BvuPfpDnDtEK_t_rHtXBH_TwPb@K_cbpXbKtSItwPS]@Bux`Bo]\\lFGx@S]A~@C}~@Gx',
    },
    mass: 385.1615357477025,
    monoisotopicMass: 385.00761762482,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 2 },
    ],
  },
  Gdp: {
    name: 'Guanosine diphosphate diradical',
    mf: 'C10H13N5O10P2',
    kind: 'RNApp',
    oneLetter: 'G',
    ocl: {
      value:
        'fkhh`INCt\\J\\UENY{NCqmxM|EnNQJJJ[JIQJQHzIRLyxM^uUUUTkUSLuQDSDHfP@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_I`JHbGtgD}F@RxPBux`B_]^OTh}R_`CQ`B\\StXA~@C}~@Gx',
    },
    mass: 425.1856780673293,
    monoisotopicMass: 425.01376563368,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 2 },
    ],
  },
  Tdp: {
    name: 'Thymidine diphosphate diradical',
    mf: 'C10H14N2O11P2',
    kind: 'RNApp',
    oneLetter: 'T',
    ocl: {
      value: 'fmgQh`I^aSbgQSglu`|[^C_@[bdls^rruo}LxDmUUUTruTsTQDqBId@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPbOs_cbpXbGtSItwPS]@Bux`B_]\\lFBpX_`AMtGx@Owx@_`',
    },
    mass: 400.172914111366,
    monoisotopicMass: 400.00728327219,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 2 },
    ],
  },
  Udp: {
    name: 'Uridine diphosphate diradical',
    mf: 'C9H12N2O11P2',
    kind: 'RNApp',
    oneLetter: 'U',
    ocl: {
      value: 'fe{Qh`I^aSbgQSehy`|[^E_CkcdRbbfrbTRdqrdYpIZjjjiejfZbHfHQL`@',
      coordinates:
        '!BvuPfpDnDtEK_t_rHtXBH_TwPb@K_cbpXbKtSItwPS]@Bux`Bo]\\lFGx@S]A~@C}~@Gx',
    },
    mass: 386.14629670651925,
    monoisotopicMass: 385.99163320773005,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 2 },
    ],
  },
  Atp: {
    name: 'Adenosine triphosphate diradical',
    mf: 'C10H14N5O12P3',
    kind: 'RNAppp',
    oneLetter: 'A',
    ocl: {
      value:
        'e`TZCJ@IG@nahJNEHdliemgo`OFspZ|CoByqrIQQSYQJIRIGIRWRL\\^AU]UUUUPKPQMTuABDpaBX`@',
      coordinates:
        '!BvuPfpDnDtEK_t_rHtXBH_TwPbOr_IorHbGtgD}F@RxS|uxc|_]^OTh}R_`CQ`MF@@hcW@A~_`A~@@A~Owx',
    },
    mass: 489.16619066844174,
    monoisotopicMass: 488.98518190347005,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 12 },
      { symbol: 'P', number: 3 },
    ],
  },
  Ctp: {
    name: 'Cytidine triphosphate diradical',
    mf: 'C9H14N3O13P3',
    kind: 'RNAppp',
    oneLetter: 'C',
    ocl: {
      value:
        'fgqZ`I^[BgENbgOQsO\\Gc[pkxK|MnNQJJJ[JIQJSGJPzQg@ejjjjfVffjZbHfHQL`@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@K_cbpXbGtSItwPS]C|ux`B_]\\lFGx@S]@BbM\\B@Gy~@Gx@@Gx_`',
    },
    mass: 465.1414532731331,
    monoisotopicMass: 464.97394851418,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 13 },
      { symbol: 'P', number: 3 },
    ],
  },
  Gtp: {
    name: 'Guanosine triphosphate diradical',
    mf: 'C10H14N5O13P3',
    kind: 'RNAppp',
    oneLetter: 'G',
    ocl: {
      value:
        'eh\\ZKJ@IG@nahJNEHdliemco`POFspZ|KoAyqrIQQSYQJIRIGQJQzQccpJkjjjjjeZjYZijbDIaBDq@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_I`JHbGtgD}F@RxPBux`B_]^OTh}R_`CQ`B\\StX@BbM_|@Gy~@Gx@@Gx_`',
    },
    mass: 505.16559559276,
    monoisotopicMass: 504.98009652304,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 13 },
      { symbol: 'P', number: 3 },
    ],
  },
  Ttp: {
    name: 'Thymidine triphosphate diradical',
    mf: 'C10H15N2O14P3',
    kind: 'RNAppp',
    oneLetter: 'T',
    ocl: {
      value:
        'eo`TGJ@IOHJNEGHdlnaiekg`OFspZ|Mo@yqrIQQSYQJIRY[ZPzQc`HjjjjjYZjVjZbDIaBDq@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@K_cbpXbGtSItwPS]@Bux`B_]\\lFBpX_`AMt@JHupH@_gx@_`@@_c}~',
    },
    mass: 480.15283163679663,
    monoisotopicMass: 479.97361416155,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 14 },
      { symbol: 'P', number: 3 },
    ],
  },
  Utp: {
    name: 'Uridine triphosphate diradical',
    mf: 'C9H13N2O14P3',
    kind: 'RNAppp',
    oneLetter: 'U',
    ocl: {
      value:
        'fgPz`I^aSbgQSeoQsO\\Gc[pkxK|MnNQJJJ[JIQJSGJPzQg@ejjjjfVjVjZbHfHQL`@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@K_cbpXbGtSItwPS]C|ux`B_]\\lFGx@S]@BbM\\B@Gy~@Gx@@Gx_`',
    },
    mass: 466.12621423194986,
    monoisotopicMass: 465.95796409709004,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 14 },
      { symbol: 'P', number: 3 },
    ],
  },
  Ade: {
    name: 'Adenosine diradical',
    mf: 'C10H11N5O3',
    kind: 'RNA',
    oneLetter: 'A',
    ocl: {
      value: 'fbmia@IV|gLJ\\Axj\\Tef[vyWV\\]zJZjjj`PJ`bIbDSH@',
      coordinates: '!BBOpH_UARccFPEP{PId{RpBN[~i|BEP{iVA@fUARU@QTADBYPId',
    },
    mass: 249.22643809214986,
    monoisotopicMass: 249.08618923539,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 3 },
    ],
  },
  Cyt: {
    name: 'Cytidine diradical',
    mf: 'C9H11N3O4',
    kind: 'RNA',
    oneLetter: 'C',
    ocl: {
      value: 'fdypQ@INcBgK@|UNJRsM{\\~sg`uUUULmQDSDHfP@',
      coordinates: '!BBOpH_UARccFPEP{PId{RpBN[~iRTBpgDq`@c`BNKB\\@c`',
    },
    mass: 225.20170069684127,
    monoisotopicMass: 225.0749558461,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 4 },
    ],
  },
  Gua: {
    name: 'Guanosine diradical',
    mf: 'C10H11N5O4',
    kind: 'RNA',
    oneLetter: 'G',
    ocl: {
      value: 'fj}hQ@IV|gLJ\\JCqTxiKLwmroKNN}EMUUUTkTuDQLPbY@@',
      coordinates: '!BBOpH_UARccFPEP{PId{RpBN[~k|BEP{iVA@fUARU@QTADBYiVA@fP',
    },
    mass: 265.22584301646816,
    monoisotopicMass: 265.08110385496,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 4 },
    ],
  },
  Thy: {
    name: 'Thymidine diradical',
    mf: 'C10H12N2O5',
    kind: 'RNA',
    oneLetter: 'T',
    ocl: {
      value: 'fleQQ@INaSed`|UNJRsM{\\zlyxMUUUSMMDQLPbY@@',
      coordinates: '!BBOpH_UARccFPEP{PId{RpBN[~iRTBpgDq`@c`BNKB\\lIpBN',
    },
    mass: 240.21307906050478,
    monoisotopicMass: 240.07462149347,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 5 },
    ],
  },
  Ura: {
    name: 'Uridine diradical',
    mf: 'C9H10N2O5',
    kind: 'RNA',
    oneLetter: 'U',
    ocl: {
      value: 'fdyQQ@INaSeh`|UNJRsM{\\~sg`uUUULsQDSDHfP@',
      coordinates: '!BBOpH_UARccFPEP{PId{RpBN[~iRTBpgDq`@c`BNKB\\@c`',
    },
    mass: 226.18646165565798,
    monoisotopicMass: 226.05897142901,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 10 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 5 },
    ],
  },
  Dam: {
    name: '1,2′-O-dimethyladenosine monophosphate diradical 01A',
    mf: 'C12H16N5O6P',
    kind: 'NucleotideP',
    oneLetter: 'œ',
    ocl: {
      value: 'feghs@E^ct\\J\\udhOEw`eqrIQQQKZIQJQIiLxFK^uUUUUKLtuQDSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@MD@SuH',
    },
    mass: 357.2595904272741,
    monoisotopicMass: 357.08382025367,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dgm: {
    name: '1,2′-O-dimethylguanosine monophosphate diradical 01G',
    mf: 'C12H16N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'ε',
    ocl: {
      value: 'fmwis@E^ct\\J\\udlp^KoAKcdRbbbVtRbTbSbSNAbwmUUUURsMSUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@B\\StPAOT`',
    },
    mass: 373.2589953515923,
    monoisotopicMass: 373.07873487324,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dim: {
    name: '1,2′-O-dimethylinosine monophosphate diradical 019A',
    mf: 'C12O7N4H15P',
    kind: 'NucleotideP',
    oneLetter: 'ξ',
    ocl: {
      value: 'fegIs@E^cvENZrTXOEw`eqrIQQQKZIQJQIiLxFK^uUUUUKLtuQDSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@MD@SuH',
    },
    mass: 358.2443513860907,
    monoisotopicMass: 358.06783583658,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 4 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tia: {
    name:
      '2- methylthiomethylenethio-N6-isopentenyl-adenosine monophosphate diradical',
    mf: 'C17H24N5O6PS2',
    kind: 'NucleotideP',
    oneLetter: '£',
    ocl: {
      value:
        'eh\\ZFJ@IG@nahJNEDl`OFspb\\V`cXHrIQQSYQJIRINIYIKQccpJkjjjjjAfBJjfjBDIaBDq@@',
      coordinates:
        '!BpBYTvxBNFY|bEJObGvOS\\@Yt]~DUEJOctu~@Ha}`HzOSTwPTh~H@hc|_`BH_Xa}b@JH@gx@bGvH@h`B_`BH_P',
    },
    mass: 489.50637075565066,
    monoisotopicMass: 489.09056286031,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 17 },
      { symbol: 'H', number: 24 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 2 },
    ],
  },
  Mhc: {
    name: '2′‐O‐Methyl-5-hydroxymethylcytidine monophosphate diradical',
    mf: 'C11H16N3O8P',
    kind: 'NucleotideP',
    oneLetter: '¡',
    ocl: {
      value: 'fikpK@EA{BgM^rTXOEw`eqrIQQQKZIQJSJigHujjjjifYjkBHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@HoTuOSU@HC~NKA`HoQLgSUAMT@a}oS_|BBpXKAaMT@CQ',
    },
    mass: 349.2342579562838,
    monoisotopicMass: 349.06750148395,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Odg: {
    name: 'N2,2′-O-dimethylguanosine monophosphate diradical 02G',
    mf: 'C12H16N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'γ',
    ocl: {
      value: 'fmwis@E^ct\\J\\udlp^KoAKcdRbbbVtRbTbSbsNAbwmUUUURsMSUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@B\\StPAOT`',
    },
    mass: 373.2589953515923,
    monoisotopicMass: 373.07873487324,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ntg: {
    name: 'N2,N2,2′-O-trimethylguanosine monophosphate diradical 022G',
    mf: 'C13H18N5O7P',
    kind: 'NucleotideP',
    oneLetter: '|',
    ocl: {
      value: 'fcois@E^ct\\J\\udlp^KoAKcdRbbbVtRbTbSbTYpLVcjjjjjVYjZjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuHgD}D@tPBNOt}R',
    },
    mass: 387.2856127564392,
    monoisotopicMass: 387.0943849377,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Otg: {
    name: 'N2,7,2′-O-trimethylguanosine monophosphate diradical 027G',
    mf: 'C13H20N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'æ',
    ocl: {
      value:
        'fcoisBE^bN\\J\\udjp^KoAKcFU}dRbbbVtRbTbRlQYpLVcjjjjjVYjjjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKFPMD@IqOQ@D}R',
    },
    mass: 389.30149426455074,
    monoisotopicMass: 389.11003500216,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Rya: {
    name: '2′-O-ribosyladenosine monophosphate diradical 00A',
    mf: 'C15H20N5O9P',
    kind: 'NucleotideP',
    oneLetter: '^',
    ocl: {
      value:
        'e`\\ZIL@DaegobFAIO@hlm`OGSp\\\\\\bbbfrRbdTT\\rbRQUCDQTrusuUUUUMUU@pET@@@',
      coordinates:
        '!BIlAKaMARw}DBbMF@bGuMtHc|KAbH_ZU`@GzH_WwW@h`XKFjKB_jXB\\SiVA`zmG_Irp_hQKctvOSR\\lIrp',
    },
    mass: 445.3217759066577,
    monoisotopicMass: 445.09986424130005,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ryg: {
    name: '2′-O-ribosylguanosine monophosphate diradical 00G',
    mf: 'C15H20N5O10P',
    kind: 'NucleotideP',
    oneLetter: 'ℑ',
    ocl: {
      value:
        'ehRZEL@DaegobFAIO@hlm`POGSp\\\\\\bbbfrRbdTT\\rbRQbhXbJfVn^jjjjijjjVZfj@@@',
      coordinates:
        '!BIlAKaMARw}DBbMF@bGuMtH`BKAbH_ZU`@GzH_WwW@h`XKFjKB_jXB\\SiVA`zmG_Irp_hQKctvOSR\\lt]|gK@',
    },
    mass: 461.321180830976,
    monoisotopicMass: 461.09477886087,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tmu: {
    name: '2-thio-2′-O-methyluridine monophosphate diradical 02U',
    mf: 'C10H13N2O7PS',
    kind: 'NucleotideP',
    oneLetter: '∏',
    ocl: {
      value: 'fncQp`EAaSfleZCq]x^BDnNQJJJI[QJIRYlyFmUUUULsSQDSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@',
    },
    mass: 336.25837906774416,
    monoisotopicMass: 336.01810893766003,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Dmut: {
    name: '3,2′-O-dimethyluridine monophosphate diradical 03U',
    mf: 'C11H15N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'σ',
    ocl: {
      value: 'fasPK@EAaSfoYKtGb{pRxyDhhhemDheIhv\\cVjjjjfYjZHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXOxyMT@',
    },
    mass: 334.2196139907822,
    monoisotopicMass: 334.05660244729,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Amc: {
    name: 'N4-acetyl-2′-O-methylcytidine monophosphate diradical 042C',
    mf: 'C12H16N3O8P',
    kind: 'NucleotideP',
    oneLetter: 'ℵ',
    ocl: {
      value: 'fe{pK@EA[BgM^rTXOEw`eqrIQQQKZIQJSMJLyFmUUUULsMMQDSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@caLgSU@',
    },
    mass: 361.244993853019,
    monoisotopicMass: 361.06750148395,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tmc: {
    name: 'N4,N4,2′-O-trimethylcytidine monophosphate diradical 044C',
    mf: 'C12H18N3O7P',
    kind: 'NucleotideP',
    oneLetter: 'β',
    ocl: {
      value: 'fikqs@EA[BgM^rTGb{pRxyDhhhemDheIfhsdZuUUUTsLuTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@cbpX',
    },
    mass: 347.2614704368123,
    monoisotopicMass: 347.08823692884005,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dcy: {
    name: 'N4,2′-O-dimethylcytidine monophosphate diradical 04C',
    mf: 'C11H16N3O7P',
    kind: 'NucleotideP',
    oneLetter: 'λ',
    ocl: {
      value: 'fasqs@EA[BgM^rTGb{pRxyDhhhemDheIff\\cVjjjjfYfjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@lF@',
    },
    mass: 333.23485303196554,
    monoisotopicMass: 333.07258686438,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Muo: {
    name:
      '2′-O-methyluridine 5-oxyacetic acid methyl ester monophosphate diradical 0503U',
    mf: 'C13H17N2O11P',
    kind: 'NucleotideP',
    oneLetter: 'Ͽ',
    ocl: {
      value: 'fkoQk@EAaSfoYJwj}`|W^BWGHeEEDmheDiLjlif\\cVjjjjfYjZZhbIbDSH@',
      coordinates:
        '!BKAb@tURD@m\\YpMAMpBYMcvjbOplIwx@bGuMc}\\Bb@JH@dvOcuKPSXa}bGvHH`BbGu~Oxc|bGt',
    },
    mass: 408.25518206531905,
    monoisotopicMass: 408.05699637046,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 17 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Xmu: {
    name:
      '5-carboxymethylaminomethyl-2′-O-methyluridine monophosphate diradical 051U',
    mf: 'C13H18N3O10P',
    kind: 'NucleotideP',
    oneLetter: ')',
    ocl: {
      value: 'fkopk@EAGBgM^rWns`|W^BWGHeEEDmheDiLjleF\\cVjjjjfYjZfhbIbDSH@',
      coordinates:
        '!BKAb@tURD@m\\YpMAMpBYMcvjb@HlIwx@bGuMc}\\Bb@JH@dvOcuKPSXa}bGvH@h`BbGvH@gx@bKt',
    },
    mass: 407.2704211065024,
    monoisotopicMass: 407.07298078755,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mmu: {
    name:
      '5-methoxycarbonylmethyl-2′-O-methyluridine monophosphate diradical 0521U',
    mf: 'C13H17N2O10P',
    kind: 'NucleotideP',
    oneLetter: '∩',
    ocl: {
      value: 'fcwPk@EAaSfoYKvZp^KoAKcdRbbbVtRbTfUVfYrMZjjjjYfifjHbXaDr@@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lI}mK_`B@cm\\Bb@HlI}]}_`A~@BpgIqLXKH`Bb@I~@Ha}_c~HHa}',
    },
    mass: 392.2557771410008,
    monoisotopicMass: 392.06208175089,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 17 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cue: {
    name:
      '5-(carboxyhydroxymethyl)-2′-O-methyluridine methyl ester monophosphate diradical 0522U',
    mf: 'C13H17N2O11P',
    kind: 'NucleotideP',
    oneLetter: '∩',
    ocl: {
      value: 'fkoQk@EAaSfoYKtZ}`|W^BWGHeEEDmheDiLjhYf\\cVjjjjfYjZZhbIbDSH@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lI}mK_`B@cm\\Bb@HlI}]}_`A~@BpgIqLXKH`Bb@I~@Gx@bGu~Oxc|bGt',
    },
    mass: 408.25518206531905,
    monoisotopicMass: 408.05699637046,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 17 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cyu: {
    name: '5-carbamoylmethyl-2′-O-methyluridine monophosphate diradical 053U',
    mf: 'C12H16N3O9P',
    kind: 'NucleotideP',
    oneLetter: '~',
    ocl: {
      value: 'fmgqK@EAWBgM^rWlp^KoAKcdRbbbVtRbTfUVcNQkUUUUSLuLuDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXKAaMTDuPOxxlF@',
    },
    mass: 377.24439877733727,
    monoisotopicMass: 377.06241610352,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ipu: {
    name:
      '5-(isopentenylaminomethyl)-2′-O-methyluridine monophosphate diradical 0583U',
    mf: 'C16H24N3O8P',
    kind: 'NucleotideP',
    oneLetter: '¼',
    ocl: {
      value: 'fgpK@EAGBgM^rWhOEw`eqrIQQQKZIQJSJkIJLyFmUUUULsTuMTQDqBId@@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lI}mK_`B@cm\\Bb@HlI}]}_`A~@BpgIqLXKH`Bb@I~@Ha}b@JH_Xc|_`BH_P',
    },
    mass: 417.35146347240624,
    monoisotopicMass: 417.13010174179004,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 16 },
      { symbol: 'H', number: 24 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mcy: {
    name:
      '5,2′-O-dimethylcytidine monophosphate diradical monophosphate diradical 05C',
    mf: 'C11H16N3O7P',
    kind: 'NucleotideP',
    oneLetter: 'τ',
    ocl: {
      value: 'fasqs@EA{BgM^rTGb{pRxyDhhhemDheIeV\\cVjjjjfYfjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXKAaMT@',
    },
    mass: 333.23485303196554,
    monoisotopicMass: 333.07258686438,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dmuf: {
    name: '5,2′-O-dimethyluridine monophosphate diradical 05U',
    mf: 'C11H15N2O8P',
    kind: 'NucleotideP',
    oneLetter: '\\',
    ocl: {
      value: 'fasPK@EAaSfoYKtGb{pRxyDhhhemDheIeV\\cVjjjjfYjZHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXKAaMT@',
    },
    mass: 334.2196139907822,
    monoisotopicMass: 334.05660244729,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tma: {
    name: 'N6,N6,2′-O-trimethyladenosine monophosphate diradical 066A',
    mf: 'C13H18N5O6P',
    kind: 'NucleotideP',
    oneLetter: 'η',
    ocl: {
      value: 'fmwhs@E^ct\\J\\udhOEw`eqrIQQQKZIQJQIkQg@q[vjjjj`Y`JjBHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@MD@SuHXK@',
    },
    mass: 371.2862078321209,
    monoisotopicMass: 371.09947031813005,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Nda: {
    name: 'N6,2′-O-dimethyladenosine monophosphate diradical 06A',
    mf: 'C12H16N5O6P',
    kind: 'NucleotideP',
    oneLetter: 'χ',
    ocl: {
      value: 'feghs@E^ct\\J\\udhOEw`eqrIQQQKZIQJQIkLxFK^uUUUTCLAUADSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@MD@FBp',
    },
    mass: 357.2595904272741,
    monoisotopicMass: 357.08382025367,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Fmc: {
    name: '5-formyl-2′-O-methylcytidine monophosphate diradical 071C',
    mf: 'C10H12N3O8P',
    kind: 'NucleotideP',
    oneLetter: '°',
    ocl: {
      value: 'faspK@I^[BgENSghOFwaEqrIQQSYQJIRYULxDmUUUTsLttQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 333.1917590433254,
    monoisotopicMass: 333.03620135502996,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Omi: {
    name: '2′-O-methylinosine monophosphate diradical 09A',
    mf: 'C11H13N4O7P',
    kind: 'NucleotideP',
    oneLetter: '≤',
    ocl: {
      value: 'fi{Is@E^cvENZrTXOEw`eqrIQQQKZIQJQIig@q[vjjjjiYffhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@MD@',
    },
    mass: 344.21773398124395,
    monoisotopicMass: 344.05218577211997,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 4 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Opu: {
    name: '2′-O-methylpseudouridine monophosphate diradical 09U',
    mf: 'C10H13N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'Z',
    ocl: {
      value: 'fncPK@@qaSfoYJtGb{pRxyDhhhemDheIfsdZuUUULuMMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@',
    },
    mass: 320.1929965859354,
    monoisotopicMass: 320.04095238282997,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Oma: {
    name: '2′-O-methyladenosine monophosphate diradical 0A',
    mf: 'C11H14N5O6P',
    kind: 'NucleotideP',
    oneLetter: ':',
    ocl: {
      value: 'fi{hs@E^ct\\J\\udhOEw`eqrIQQQKZIQJQIig@q[vjjjj`Y`J`bIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@MD@',
    },
    mass: 343.2329730224273,
    monoisotopicMass: 343.06817018921,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Omc: {
    name: '2′-O-methylcytidine monophosphate diradical 0C',
    mf: 'C10H14N3O7P',
    kind: 'NucleotideP',
    oneLetter: 'B',
    ocl: {
      value: 'fncqs@EA[BgM^rTGb{pRxyDhhhemDheIfsdZuUUUTsLuDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@',
    },
    mass: 319.2082356271187,
    monoisotopicMass: 319.05693679992004,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Omg: {
    name: '2′-O-methylguanosine monophosphate diradical 0G',
    mf: 'C11H14N5O7P',
    kind: 'NucleotideP',
    oneLetter: '#',
    ocl: {
      value: 'fegis@E^ct\\J\\udlp^KoAKcdRbbbVtRbTbSbYpLV}jjjjjVYjZbHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@HoTuOSU@HEF@`H_R\\StPAKA@a}_S_|BD}RSuKQ@B\\StP@',
    },
    mass: 359.23237794674554,
    monoisotopicMass: 359.06308480878,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Omu: {
    name: '2′-O-methyluridinemonophosphate diradical 0U',
    mf: 'C10H13N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'J',
    ocl: {
      value: 'fncPK@EAaSfoYJtGb{pRxyDhhhemDheIfsdZuUUUTsMMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuOSU@HC~NKA`H_QLgSUAMT@a}_S_|BBpXSU@',
    },
    mass: 320.1929965859354,
    monoisotopicMass: 320.04095238282997,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cdg: {
    name: '7-cyano-7-deazaguanosine monophosphate diradical 100G',
    mf: 'C12H12N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'φ',
    ocl: {
      value: 'fmwis@INzM\\J\\TgLp^MoBKcdRbbfrbTRdRUbSN^CWmUUUUKLuSuDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RqdCQ@B\\StPCFP@',
    },
    mass: 369.22723233536925,
    monoisotopicMass: 369.04743474432,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Azg: {
    name: '7-aminomethyl-7-deazaguanosine monophosphate diradical 101G',
    mf: 'C12H16N5O7P',
    kind: 'NucleotideP',
    oneLetter: '∉',
    ocl: {
      value: 'fmwis@INzM\\J\\TgLp^MoBKcdRbbfrbTRdRUbSN^CWmUUUUKLuSUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RqdCQ@B\\StPA`z`',
    },
    mass: 373.2589953515923,
    monoisotopicMass: 373.07873487324,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Eqo: {
    name: 'epoxyqueuosine monophosphate diradical 102G',
    mf: 'C17H22N5O10P',
    kind: 'NucleotideP',
    oneLetter: 'ς',
    ocl: {
      value:
        'el^ZEL@IGNaehJNEDlig`TPOFspb\\\\bTTTvTRbTbRlRjbbfXx|Bjz~aAajjjjiYfjZjjjjHPfDHSD@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RqdCQ@B\\StP@{ULY@TEIKA@a}tPA}BOpHAEP',
    },
    mass: 487.3585341325581,
    monoisotopicMass: 487.11042892533,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 17 },
      { symbol: 'H', number: 22 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Aes: {
    name: 'archaeosine monophosphate diradical 103G',
    mf: 'C12H15N6O7P',
    kind: 'NucleotideP',
    oneLetter: '(',
    ocl: {
      value: 'fcoYs@INzM^xTxiNY`|[^DWGHeEEMeDheHdkDhsg`u{UUUURsMTmTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RqdCQ@B\\StP@{UFCj',
    },
    mass: 386.2577578089824,
    monoisotopicMass: 386.07398384544,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Goq: {
    name: 'galactosyl-queuosine monophosphate diradical 104G',
    mf: 'C23H32N5O14P',
    kind: 'NucleotideP',
    oneLetter: '9',
    ocl: {
      value:
        'ekXzGL@IGNaehJNEDliod\\VU]SPOFspb\\\\bTTTvTRbTbRlRjbTrTrbfRXx|Bjz^AyEjjjjiYfjZijjjjjjbDIaBDq@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_IorHbGtgD}F@RxRH_WwW@hbOTh}RIlCQ`B\\StXC[UB[@RxSPT`JHbGwQ`H`BaEQ~@Ha}bOq~Ox`BbGu~@Ha}bOrH@`',
    },
    mass: 633.4999767508004,
    monoisotopicMass: 633.16833772591,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 23 },
      { symbol: 'H', number: 32 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 14 },
      { symbol: 'P', number: 1 },
    ],
  },
  Gaq: {
    name: 'glutamyl-queuosine monophosphate diradical105G',
    mf: 'C22H29N6O12P',
    kind: 'NucleotideP',
    oneLetter: '⊄',
    ocl: {
      value:
        'emWVCL@IGNaejXJNEDlioh\\YUPOFspb\\\\bTTTvTRbTbRlRjbTJTtrTXx|Bjz^AjjjjiYfjZijfjfjbDIaBDq@@',
      coordinates:
        '!BTmB@c`JHUMmMtL@YtEHYgxQTaDoQ`L@YFY|gKMARH`Ygy|fpAfN`Hz@`H{PTb\\ltEIRtHBNHaTv|@YFYPTha}b@I~@Ha}_c~H@ha}bOq~@Ha}',
    },
    mass: 600.473311954707,
    monoisotopicMass: 600.15810739451,
    unsaturation: 22,
    elements: [
      { symbol: 'C', number: 22 },
      { symbol: 'H', number: 29 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 12 },
      { symbol: 'P', number: 1 },
    ],
  },
  Moq: {
    name: 'mannosyl-queuosine monophosphate diradical 106G',
    mf: 'C23H32N5O14P',
    kind: 'NucleotideP',
    oneLetter: '8',
    ocl: {
      value:
        'ekXzGL@IGNaehJNEDliod\\VU]SPOFspb\\\\bTTTvTRbTbRlRjbTrTrbfRXx|Bjz^AyEjjjjiYfjZijjjjjjbDIaBDq@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_IorHbGtgD}F@RxRH_WwW@hbOTh}RIlCQ`B\\StXC[UB[@RxSPT`JHbGwQ`H`BaEQ~@Ha}bOq~Ox`BbGu~@Ha}bOrH@`',
    },
    mass: 633.4999767508004,
    monoisotopicMass: 633.16833772591,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 23 },
      { symbol: 'H', number: 32 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 14 },
      { symbol: 'P', number: 1 },
    ],
  },
  Qus: {
    name: 'queuosine monophosphate diradical 10G',
    mf: 'C17H22N5O9P',
    kind: 'NucleotideP',
    oneLetter: 'Q',
    ocl: {
      value:
        'edZZIL@IGNaehJNEDliohPOFspb\\\\bTTTvTRbTbRlRjbTKGG`UWSpMUUUUKLuSUMUTPaLHPfH@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPHoWtw@aOTd}RqdCQ@B\\StP@{ULY@RpQPTopHBGwQ@@QT',
    },
    mass: 471.35912920823984,
    monoisotopicMass: 471.11551430576,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 17 },
      { symbol: 'H', number: 22 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cpo: {
    name:
      '1-methyl-3-(3-amino-3-carboxypropyl)pseudouridine monophosphate diradical 1309U',
    mf: 'C14H20N3O10P',
    kind: 'NucleotideP',
    oneLetter: 'α',
    ocl: {
      value: 'fgpk@OAWBgENSgi{`|[^DWGHeEEMeDheIhjbihs`RuUUTsTuSUMQDSDHfP@',
      coordinates:
        '!BTh|SI~ioOwy`iR\\SiV|SFGxw}FH_]]}DqbH@gx_c|SFA`lIqOW_Xa}uwu~Ox`BbGu~Ox`B_`BH_P',
    },
    mass: 421.2970385113492,
    monoisotopicMass: 421.08863085201,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 14 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mls: {
    name: '1-methylinosine monophosphate diradical 19A',
    mf: 'C11H13N4O7P',
    kind: 'NucleotideP',
    oneLetter: 'O',
    ocl: {
      value: 'fi{Is@INBvENJSghOFwaEqrIQQSYQJIRIMIgOAjvjjjjefZZhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@D}R',
    },
    mass: 344.21773398124395,
    monoisotopicMass: 344.05218577211997,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 4 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mpu: {
    name: '1-methylpseudouridine monophosphate diradical 19U',
    mf: 'C10H13N2O8P',
    kind: 'NucleotideP',
    oneLetter: ']',
    ocl: {
      value: 'fncPK@OAaSbgIrtGc[pbxyDhhilheDiLjs`RuUUTsTuMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 320.1929965859354,
    monoisotopicMass: 320.04095238282997,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mad: {
    name: '1-methyladenosine monophosphate diradical 1A',
    mf: 'C11H14N5O6P',
    kind: 'NucleotideP',
    oneLetter: '"',
    ocl: {
      value: 'fi{hs@INBwlJ\\TgHOFwaEqrIQQSYQJIRIMIgOAjvjjjjefZZhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@D}R',
    },
    mass: 343.2329730224273,
    monoisotopicMass: 343.06817018921,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mgs: {
    name: '1-methylguanosine monophosphate diradical 1G',
    mf: 'C11H14N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'K',
    ocl: {
      value: 'fegis@INBwlJ\\TgHp^MoBKcdRbbfrbTRdR\\RYspZmjjjjiYfijbHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtP@gD}D@SuH',
    },
    mass: 359.23237794674554,
    monoisotopicMass: 359.06308480878,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Msu: {
    name: '5-aminomethyl-2-selenouridine monophosphate diradical 20510U',
    mf: 'C10H14N3O7PSe',
    kind: 'NucleotideP',
    oneLetter: 'π',
    ocl: {
      value: 'fasqp`I^{BgEIrtGc[p\\bQ\\\\bTTTvTRbTfUSNAKUUUULsTuDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 398.1676241841323,
    monoisotopicMass: 398.97345859992004,
    unsaturation: null,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'Se', number: 1 },
    ],
  },
  Mse: {
    name: '5-methylaminomethyl-2-selenouridine monophosphate diradical 20511U',
    mf: 'C11H16N3O7PSe',
    kind: 'NucleotideP',
    oneLetter: '≅',
    ocl: {
      value: 'fikqp`I^{BgEIrtGc[p\\bQ\\\\bTTTvTRbTfUVYpIZjjjifZfjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTBpX',
    },
    mass: 412.19424158897914,
    monoisotopicMass: 412.98910866438,
    unsaturation: null,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'Se', number: 1 },
    ],
  },
  Cse: {
    name:
      '5-carboxymethylaminomethyl-2-selenouridine monophosphate diradical 2051U',
    mf: 'C12H16N3O9PSe',
    kind: 'NucleotideP',
    oneLetter: '⊥',
    ocl: {
      value: 'fcwqH`I^{BgEIru^p^MoArIEqrIQQSYQJIRYUYJLxDmUUUTsMSTuDQLPbY@@',
      coordinates:
        '!BKAb@tURDM\\YpMAMpBYMcx`BKB]~@Ha}SXW@h`Bb@IMcx}RtDvH_Xa}b@JH@ha}b@I~@Ha}',
    },
    mass: 456.20378733435086,
    monoisotopicMass: 456.97893790352,
    unsaturation: null,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
      { symbol: 'Se', number: 1 },
    ],
  },
  Agm: {
    name: 'agmatidine monophosphate diradical 20C',
    mf: 'C14H26N7O6P',
    kind: 'NucleotideP',
    oneLetter: '¿',
    ocl: {
      value: 'fgxs@I^BuY{piqR\\`|[^DWGHeEEMeDeEHmUddhsgbuUUUSTuUUMIDSDHfP@',
      coordinates:
        '!BDqc_tTnD_]\\fpH}MgrYRc}_|Dr_W_Wx@ThWM_|bOqRc}ARctu~@Gx@urH@gx@b@I~@H`BbGu~@@',
    },
    mass: 419.373876184194,
    monoisotopicMass: 419.16821858483,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 14 },
      { symbol: 'H', number: 26 },
      { symbol: 'N', number: 7 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Sou: {
    name: '2-selenouridine monophosphate diradical 20U',
    mf: 'C9H11N2O7PSe',
    kind: 'NucleotideP',
    oneLetter: 'ω',
    ocl: {
      value: 'ff}Qp`I^aSbdyjCqmxNQHnNQJJJ[JIQJSMg@ejjjjfYihbIbDSH@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 369.1263628137839,
    monoisotopicMass: 369.9469094988,
    unsaturation: null,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'Se', number: 1 },
    ],
  },
  Agu: {
    name: '5-aminomethyl-2-geranylthiouridine monophosphate diradical 21510U',
    mf: 'C20H30N3O7PS',
    kind: 'NucleotideP',
    oneLetter: 'Δ',
    ocl: {
      value:
        'ed\\\\NB@IOIhJNEDla`OFsp\\BHgGHeEEMeDheHdjdcEdhqpEUUUUURsUSMTuQBDpaBXdDt@',
      coordinates:
        '!BDr__cdo[_X`fgx}RgqeRtM]}Dqa~O}\\BTmBH_]]}uwuRtMAMcuI~O}\\BupJH_]]}_`A~Oxa}uwu~Oxa}_cW_Xa}',
    },
    mass: 487.5074340654907,
    monoisotopicMass: 487.15420849000003,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 20 },
      { symbol: 'H', number: 30 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mgu: {
    name:
      '5-methylaminomethyl-2-geranylthiouridine monophosphate diradical 21511U',
    mf: 'C21H32N3O7PS',
    kind: 'NucleotideP',
    oneLetter: 'h',
    ocl: {
      value:
        'elR\\NB@IOIhJNEDla`OFsp\\BHgGHeEEMeDheHdjdlileFN@jjjjjjVZjYjijbDIaBDqHIh',
      coordinates:
        '!BTv^cbn{__@fw|}RwqeRdK]}Tva~_{_|TiCp_[]}mwuRdIAMsuI~_{]|mwsp_[]}mwu~_{_||Gvw_Wy|Gu~_{]}|Gt',
    },
    mass: 501.5340514703375,
    monoisotopicMass: 501.16985855446006,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 21 },
      { symbol: 'H', number: 32 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Cgu: {
    name:
      '5-carboxymethylaminomethyl-2-geranylthiouridine monophosphate diradical 2151U',
    mf: 'C22H32N3O9PS',
    kind: 'NucleotideP',
    oneLetter: 'f',
    ocl: {
      value:
        'ef^\\IB@IOIhJNEDla`XPOFsp\\BHgGHeEEMeDheHdjdlhehbhqpEUUUUURsUSMUMMTPaLHPfIAM@',
      coordinates:
        '!BTv^cbn{_@fw|}RwqeRdK]}Tva~_{]|TiCp[_}muRdIAMsuI~_{]|mwsp_[]}mwu~_{]||Gvw_[_}_g}~_{]||Ou~_{]}|Gt',
    },
    mass: 545.5435972157093,
    monoisotopicMass: 545.1596877935999,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 22 },
      { symbol: 'H', number: 32 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mha: {
    name:
      '2-methylthio-N6-(cis-hydroxyisopentenyl) adenosine monophosphate diradical 2160A',
    mf: 'C16H22N5O7PS',
    kind: 'NucleotideP',
    oneLetter: '≠',
    ocl: {
      value:
        'e`TZNB@IG@nahJNEDlo`OFspb\\V`cHeEEMeDheHdxeleDqqxEUuUUUU@sAETuTDHSBDIbP[P',
      coordinates:
        '!BzfC@IeKPaDn}bHCQb@KQwuRDFALYpHCQt]WHc|TmCQw}~N`ME~@Gx@upJH@h`B_`BH_X`BbGvHGxbGt',
    },
    mass: 459.41437086899504,
    monoisotopicMass: 459.09775624102,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 16 },
      { symbol: 'H', number: 22 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mpa: {
    name: '2-methylthio-N6-isopentenyladenosine monophosphate diradical 2161A',
    mf: 'C16H22N5O6PS',
    kind: 'NucleotideP',
    oneLetter: '*',
    ocl: {
      value:
        'eohZFB@IG@nahJNEDl`OFspb\\V`cHeEEMeDheHdxeleFNO@jnjjjjhFXHjfjBDIaBDq@@',
      coordinates:
        '!BpBYTvxBNFY|bEJObGvOS\\@Yt]~DUEJOctu~@Ha}`HzOSTwPTh~H@h`B_`BH_Xa}bOrH@ha}b@I~@Ha}',
    },
    mass: 443.4149659446768,
    monoisotopicMass: 443.10284162145,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 16 },
      { symbol: 'H', number: 22 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mca: {
    name:
      '2-methylthio-N6-threonylcarbamoyladenosine monophosphate diradical 2162A',
    mf: 'C16H21N6O10PS',
    kind: 'NucleotideP',
    oneLetter: '[',
    ocl: {
      value:
        'ebVVEB@IG@nachJNEDlm`XTPOFspb\\V`cHeEEMeDheHdxemLhhhqqxEUuUUUU@sAESUMUABDpaBX`@',
      coordinates:
        '!BzfC@IeKPaDn}bHCQb@KQwuRDFALYpHCQt]W@h`BTmCQw}~N`ME~@Gx@upJH@h`B_`BH_Wxb@JH_WxbOrHo]^}_`BH_P',
    },
    mass: 520.4113480993399,
    monoisotopicMass: 520.07774907193,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 16 },
      { symbol: 'H', number: 21 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mva: {
    name:
      '2-methylthio-N6-hydroxynorvalylcarbamoyladenosine monophosphate diradical 2163A',
    mf: 'C17H23N6O10PS',
    kind: 'NucleotideP',
    oneLetter: '≈',
    ocl: {
      value:
        'ej^VEB@IG@nachJNEDlm`XTPOFspb\\V`cHeEEMeDheHdxemLhhiVNO@jnjjjjhFXHjZijjBDIaBDq@@',
      coordinates:
        '!BpBYTvxBNFY|BbEJObGvOS\\@Yt]~DUEJOctu~@Ha}`HzOSTwPTh~H@h`B_`BH_Xa}bOrH@gx@bGvHGx@bGwW@h`B_c~H@ha}',
    },
    mass: 534.4379655041866,
    monoisotopicMass: 534.09339913639,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 17 },
      { symbol: 'H', number: 23 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mya: {
    name:
      '2-methylthio cyclic N6-threonylcarbamoyladenosine monophosphate diradical 2164A',
    mf: 'C17H20N5O9PS',
    kind: 'NucleotideP',
    oneLetter: 'ÿ',
    ocl: {
      value:
        'elVZIB@IG@nkhJNEDlcghPOFspb\\V`cHeEEMeDheHdxeihiUFNO@jnkojjjjhFXHjfZjbHPfDHSD@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_IorHbGtgD}F@RxRH_WwW@hbOTh}RIqOQ`MF@cuKW@hQTcttfpL@YS]@BbGvH@Gx',
    },
    mass: 501.4080351062552,
    monoisotopicMass: 501.07193541570007,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 17 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Hta: {
    name: 'hydroxy-N6-threonylcarbamoyladenosine monophosphate diradical 2165A',
    mf: 'C15H19N6O11P',
    kind: 'NucleotideP',
    oneLetter: '«',
    ocl: {
      value:
        'elZVML@IG@fnehJNEDligo`TPOFspb\\\\bTTTvTRbTbSVTrbbeXx|BjZjjjj`Y`JZijjBDIaBDq@@',
      coordinates:
        '!BpBYTvxBNFY|bEJObGvOS\\@Yt]~DUEJOctu~@Ha}`HzOSTwPTh~HH`BbGvH_Xc|_`BH_Xc|_`BH_]_|bOq~Oxc|bGt',
    },
    mass: 490.31934821268436,
    monoisotopicMass: 490.08494245264,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 19 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Lyd: {
    name: '2-lysidine monophosphate diradical 21C',
    mf: 'C15H24N5O8P',
    kind: 'NucleotideP',
    oneLetter: '}',
    ocl: {
      value:
        'eo`ZAL@IGOFmhJNEDlkg`OFspb\\\\bTTTvTRbTbSVRTtXxBJjjjjfYjZjfhaBXPaLP@',
      coordinates:
        '!BTh|SI~ioOwy`iR\\SiV|SFGxw}FH_]]}Dqa~Oxc|_c|SFA`lIqOW_Xa}_c~HHa}bOrH_WxbOq~@Ha}',
    },
    mass: 433.3541339985626,
    monoisotopicMass: 433.13624975064994,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 24 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Gtu: {
    name: '2-geranylthiouridine monophosphate diradical 21U',
    mf: 'C19H27N2O7PS',
    kind: 'NucleotideP',
    oneLetter: 'Γ',
    ocl: {
      value:
        'e`XTNB@IOHJNEDln`OFsp\\BHgGHeEEMeDheHdtmEdhqpEUUUUURsUKUMTPaLHPfIAu@',
      coordinates:
        '!BTv^cbn{__@fw|}RwqeRdK]}Tva~_{_|TiCp_[]}mwuRdIAMsuI~_{]||Gvw_Wy|Gvw_Wy|Gu~_{]}|Gt',
    },
    mass: 458.46617269514235,
    monoisotopicMass: 458.12765938888003,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 19 },
      { symbol: 'H', number: 27 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Tyg: {
    name:
      'N2,N2,7-trimethylguanosine cap monophosphate diradical (cap TMG) 2279553N',
    mf: 'C13H20N5O10P2',
    kind: 'NucleotideP',
    oneLetter: '¶',
    ocl: {
      value:
        'e`TZEBHIG@aihJNEHdleck`OFspz|MgDJTef[vVVe_gifNO@jijjjjjUijifjhaBXPaLP@',
      coordinates:
        '!BvuPfpDnDtEK_t_rHtXBH_TwPbOr_I`JHbGtgD}F@RxS|uxc|_]^OTh}RIlA~@B\\StXCQ`Gx@Owx@_h{_cuH',
    },
    mass: 468.2734710359255,
    monoisotopicMass: 468.06854085929,
    unsaturation: 13,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 2 },
    ],
  },
  Tmg: {
    name: 'N2,N2,7-trimethylguanosine monophosphate diradical 227G',
    mf: 'C13H20N5O7P',
    kind: 'NucleotideP',
    oneLetter: '∠',
    ocl: {
      value:
        'fcoisBINCt\\J\\TgLp^MoBKbFY}dRbbfrbTRdRUbtYspZcjjjjiYfjjjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}Rqd@gD}D@tPBNOt}R',
    },
    mass: 389.30149426455074,
    monoisotopicMass: 389.11003500216,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dgu: {
    name: 'N2,N2-dimethylguanosine monophosphate diradical 22G',
    mf: 'C12H16N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'R',
    ocl: {
      value: 'fmwis@INBwlJ\\TgHp^MoBKcdRbbfrbTRdR\\RcN^CWmUUUUKLuMUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RIqOQ@MD@cc}OT`',
    },
    mass: 373.2589953515923,
    monoisotopicMass: 373.07873487324,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Atu: {
    name: '5-aminomethyl-2-thiouridine monophosphate diradical 2510U',
    mf: 'C10H14N3O7PS',
    kind: 'NucleotideP',
    oneLetter: '∫',
    ocl: {
      value: 'fasqp`I^{BgEIrtGc[p\\DQ\\\\bTTTvTRbTfUSNAKUUUULsTuDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 351.27302303324575,
    monoisotopicMass: 351.02900797432005,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mou: {
    name: '5-methylaminomethyl-2-thiouridine monophosphate diradical 2511U',
    mf: 'C11H16N3O7PS',
    kind: 'NucleotideP',
    oneLetter: 'S',
    ocl: {
      value: 'fikqp`I^{BgEIrtGc[p\\DQ\\\\bTTTvTRbTfUVYpIZjjjifZfjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTBpX',
    },
    mass: 365.2996404380926,
    monoisotopicMass: 365.04465803878,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Ctu: {
    name:
      '5-carboxymethylaminomethyl-2-thiouridine monophosphate diradical 251U',
    mf: 'C12H16N3O9PS',
    kind: 'NucleotideP',
    oneLetter: '$',
    ocl: {
      value: 'fcwqH`I^{BgEIru^p^MoApQEqrIQQSYQJIRYUYJLxDmUUUTsMSTuDQLPbY@@',
      coordinates:
        '!BKAb@tURDM\\YpMAMpBYMcx`BKB]~@Ha}SXW@h`Bb@IMcx}RtDvH_Xa}b@JH@ha}b@I~@Ha}',
    },
    mass: 409.3091861834643,
    monoisotopicMass: 409.03448727792,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Myu: {
    name: '5-methoxycarbonylmethyl-2-thiouridine monophosphate diradical 2521U',
    mf: 'C12H15N2O9PS',
    kind: 'NucleotideP',
    oneLetter: '3',
    ocl: {
      value: 'fmgQH`I^aSbdyZNXOFw`xHbxyDhhilheDiLjmLs`RuUUUSLuLuQDSDHfP@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lIwx@`H{WHc|KB_W_Wx@_`@lIr\\SFBrH@h`B_`BH_WxbOrH_P',
    },
    mass: 394.2945422179627,
    monoisotopicMass: 394.02358824126003,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Cou: {
    name: '5-carbamoylmethyl-2-thiouridine monophosphate diradical 253U',
    mf: 'C11H14N3O8PS',
    kind: 'NucleotideP',
    oneLetter: 'l',
    ocl: {
      value: 'fe{pH`I^gBgEIrtXOFw`xHbxyDhhilheDiLjmF\\BVjjjjYfifhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTC~NKA`',
    },
    mass: 379.2831638542993,
    monoisotopicMass: 379.02392259389,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Cau: {
    name: '5-carboxymethyl-2-thiouridine monophosphate diradical 2540U',
    mf: 'C11H13N2O9PS',
    kind: 'NucleotideP',
    oneLetter: '℘',
    ocl: {
      value: 'fe{QH`I^aSbdyZNXOFw`xHbxyDhhilheDiLjmF\\BVjjjjYfifhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTC~NKA`',
    },
    mass: 380.26792481311594,
    monoisotopicMass: 380.00793817680005,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Tau: {
    name: '5-taurinomethyl-2-thiouridine monophosphate diradical 254U',
    mf: 'C12H18N3O10PS2',
    kind: 'NucleotideP',
    oneLetter: '∃',
    ocl: {
      value:
        'fgpj`I^{BgEIrwY{`|[^C`bKblHrIQQSYQJIRYUYIRLxDmUUUTsMSUKTQDqBId@@',
      coordinates:
        '!BKAb@tURD@m\\YpMAMpBYMcx`BKB]~@Ha}SXW@h`Bb@IMcx}RtDvH_Xa}b@JH@ha}b@JH__rH_]^H_P',
    },
    mass: 459.3892600220213,
    monoisotopicMass: 459.01712313635005,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 2 },
    ],
  },
  Itu: {
    name:
      '5-(isopentenylaminomethyl)-2-thiouridine monophosphate diradical 2583U',
    mf: 'C15H22N3O7PS',
    kind: 'NucleotideP',
    oneLetter: '½',
    ocl: {
      value: 'fkoqp`I^{BgEIrtGc[p\\DQ\\\\bTTTvTRbTfUVRTYpIZjjjifZfijbHfHQL`@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lIwx@`H{W@h`BKB_W_Wx@_`@lIr\\SFBrH@h`B_`BH_Xc|bGvH@gx@bGt',
    },
    mass: 419.3902285493682,
    monoisotopicMass: 419.09160823216,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 22 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Mth: {
    name: '5-methyl-2-thiouridine monophosphate diradical 25U',
    mf: 'C10H13N2O7PS',
    kind: 'NucleotideP',
    oneLetter: 'F',
    ocl: {
      value: 'fncQp`I^aSbdyZCqmxNBHnNQJJJ[JIQJSJlxDmUUUTsMSQDSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 336.25837906774416,
    monoisotopicMass: 336.01810893766003,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Dmg: {
    name: 'N2,7-dimethylguanosine monophosphate diradical 27G',
    mf: 'C12H18N5O7P',
    kind: 'NucleotideP',
    oneLetter: '∨',
    ocl: {
      value: 'fmwisBINCt\\J\\TgLp^MoBKbFY}dRbbfrbTRdRUbKN^CWmUUUUKLuUUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RqdCQ@B\\StPAOT`',
    },
    mass: 375.27487685970397,
    monoisotopicMass: 375.0943849377,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dma: {
    name: '2,8-dimethyladenosine monophosphate diradical 28A',
    mf: 'C12H16N5O6P',
    kind: 'NucleotideP',
    oneLetter: '±',
    ocl: {
      value: 'feghs@INCv\\J\\UdhOFw`eqrIQQSYQJJJQKqLyxK^uUUUPMLAUADSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpP@c`a}_S_|BD}RSuKQ@B\\StP@',
    },
    mass: 357.2595904272741,
    monoisotopicMass: 357.08382025367,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mas: {
    name: '2-methyladenosine monophosphate diradical 2A',
    mf: 'C11H14N5O6P',
    kind: 'NucleotideP',
    oneLetter: '/',
    ocl: {
      value: 'fi{hs@INBt\\J\\TgHOFwaEqrIQQSYQJIRINIgOAjvjjjjAf@j`bIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtP@gD}D@',
    },
    mass: 343.2329730224273,
    monoisotopicMass: 343.06817018921,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tcy: {
    name: '2-thiocytidine monophosphate diradical 2C',
    mf: 'C9H12N3O6PS',
    kind: 'NucleotideP',
    oneLetter: '%',
    ocl: {
      value: 'ff}pp`I^kBgEIrCqmxNBHnNQJJJ[JIQJSMg@ejjjjfYfhbIbDSH@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 321.2470007040807,
    monoisotopicMass: 321.01844329029,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Nmg: {
    name: 'N2-methylguanosine monophosphate diradical 2G',
    mf: 'C11H14N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'L',
    ocl: {
      value: 'fegis@INBwlJ\\TgHp^MoBKcdRbbfrbTRdR\\VYspZmjjjjiYfijbHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtP@gD}D@SuH',
    },
    mass: 359.23237794674554,
    monoisotopicMass: 359.06308480878,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Thu: {
    name: '2-thiouridine monophosphate diradical 2U',
    mf: 'C9H11N2O7PS',
    kind: 'NucleotideP',
    oneLetter: '2',
    ocl: {
      value: 'ff}Qp`I^aSbdyjCqmxNBHnNQJJJ[JIQJSMg@ejjjjfYihbIbDSH@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 322.2317616628973,
    monoisotopicMass: 322.0024588732,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Ahu: {
    name:
      '3-(3-amino-3-carboxypropyl)-5,6-dihydrouridine monophosphate diradical 308U',
    mf: 'C13H20N3O10P',
    kind: 'NucleotideP',
    oneLetter: 'Ð',
    ocl: {
      value: 'fkopk@I^gBgENSens`|[^DWGHeEEMeDheIhueMF\\BVjjjjZfijfhbIbDSH@',
      coordinates:
        '!BTh|SI~ioOwy`iR\\SiV|SFGxw}FH_]]}DqbH@gx_c|SFA`lIqOW_Xa}_c~HHa}_c~H@gx@bGt',
    },
    mass: 409.28630261461393,
    monoisotopicMass: 409.08863085201,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  App: {
    name:
      '3-(3-amino-3-carboxypropyl)pseudouridine monophosphate diradical 309U',
    mf: 'C13H18N3O10P',
    kind: 'NucleotideP',
    oneLetter: 'Þ',
    ocl: {
      value: 'fkopk@OAgBgENSens`|[^DWGHeEEMeDheIhueMF\\BVjjjfZfijfhbIbDSH@',
      coordinates:
        '!BTh|SI~ioOwy`iR\\SiV|SFGxw}FH_]]}DqbH@gx_c|SFA`lIqOW_Xa}_c~HHa}_c~H@gx@bGt',
    },
    mass: 407.2704211065024,
    monoisotopicMass: 407.07298078755,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Apu: {
    name: '3-(3-amino-3-carboxypropyl)uridine monophosphate diradical 30U',
    mf: 'C13H18N3O10P',
    kind: 'NucleotideP',
    oneLetter: 'X',
    ocl: {
      value: 'fkopk@I^gBgENSens`|[^DWGHeEEMeDheIhueMF\\BVjjjjYfijfhbIbDSH@',
      coordinates:
        '!BTh|SI~ioOwy`iR\\SiV|SFGxw}FH_]]}DqbH@gx_c|SFA`lIqOW_Xa}_c~HHa}_c~H@gx@bGt',
    },
    mass: 407.2704211065024,
    monoisotopicMass: 407.07298078755,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mws: {
    name: 'methylwyosine monophosphate diradical 342G',
    mf: 'C15H18N5O7P',
    kind: 'NucleotideP',
    oneLetter: '∑',
    ocl: {
      value:
        'eghZNL@IG@nahJNEDli`OFspb\\\\bTTTvTRbTbb\\rVSGG`SPrvuUUUUKMTsUUIBDpaBX`@',
      coordinates:
        '!B_`CW@mF@ctvDUI|fRxPYgtwP[zV_IorHFY|gD}F@RxPYg|@YgrZOTh{_cuJOS]F@tXAKaI|fw}EMt@',
    },
    mass: 411.3070845499097,
    monoisotopicMass: 411.0943849377,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Uhw: {
    name: 'undermodified hydroxywybutosine monophosphate diradical 3470G',
    mf: 'C18H23N6O10P',
    kind: 'NucleotideP',
    oneLetter: 'š',
    ocl: {
      value:
        'ejQVEL@IG@nahXJNEDliolRPOFspb\\\\bTTTvTRbTbb\\rVVTttXx|BZFVvjjjjiYjfZjjfjRDIaBDq@@',
      coordinates:
        '!BKB^@ceS[H`Yg}ARpAeMtHa}KAcPTh{_S]CjXES[pAeMtH}MtEK@IdnDpBXBbES[UMo@F]ARaERH_X`B_`BH_WxbOq~@Ha}',
    },
    mass: 514.3839139947949,
    monoisotopicMass: 514.12132796199,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 18 },
      { symbol: 'H', number: 23 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Acw: {
    name: '7-aminocarboxypropylwyosine monophosphate diradical 347G',
    mf: 'C18H23N6O9P',
    kind: 'NucleotideP',
    oneLetter: 'Ω',
    ocl: {
      value:
        'eb^VIL@IG@na`XJNEDlid\\POFspb\\\\bTTTvTRbTbb\\rVRrfcGG`SPrvuUUUUKMTsUUSUIBDpaBX`@',
      coordinates:
        '!BDr]RcwwWpAg_tUS[cm~DUAf_XJUTvx}MaEP@_gwWcm~DUDnDUMo|urH@m_@FWwW_]^NwuS[bGtYgx`BbGu~Ox`B_`BH_P',
    },
    mass: 498.38450907047655,
    monoisotopicMass: 498.12641334242,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 18 },
      { symbol: 'H', number: 23 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hwy: {
    name:
      'methylated undermodified hydroxywybutosine monophosphate diradical 3480G',
    mf: 'C19H25N6O10P',
    kind: 'NucleotideP',
    oneLetter: 'y',
    ocl: {
      value:
        'efYVEL@IG@nahXJNEDliolRPOFspb\\\\bTTTvTRbTbb\\rVVTttsGG`SPrvuUUUUKMTsUUTuTdHSBDIb@@',
      coordinates:
        '!B`HyRtL@f_XbDRxz@UHS_chc|S]BN`MAMwxyKaL@fUHS_cmG_chCjXI|YzfA}bL@fpBYTaHz@F\\BH@gx@upJH@ha}_`CWHc|_`@',
    },
    mass: 528.4105313996416,
    monoisotopicMass: 528.1369780264499,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 19 },
      { symbol: 'H', number: 25 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hwb: {
    name: 'hydroxywybutosine monophosphate diradical 34830G',
    mf: 'C21H27N6O12P',
    kind: 'NucleotideP',
    oneLetter: '⊆',
    ocl: {
      value:
        'ee[VCL@IG@nahXJNEDliobZV^POFspb\\\\bTTTvTRbTbb\\rVVTtRbfsGG`SPrvuUUUUKMTsUUULuUIBDpaBX`@',
      coordinates:
        '!BKB^@ceS[@h`Yg}ARpAeMtHa}KAcPTh{_S]CjXES[pAeMtH}MtEK@IdnDpBXBbES[UMo@F]ARaERH_X`B_`BH_X`B_c~H_]]}bGu~Ox`B_c~H_P',
    },
    mass: 586.4466945498602,
    monoisotopicMass: 586.14245733005,
    unsaturation: 22,
    elements: [
      { symbol: 'C', number: 21 },
      { symbol: 'H', number: 27 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 12 },
      { symbol: 'P', number: 1 },
    ],
  },
  Pwb: {
    name: 'peroxywybutosine monophosphate diradical 34832G',
    mf: 'C21H27N6O13P',
    kind: 'NucleotideP',
    oneLetter: 'W',
    ocl: {
      value:
        'emWVKL@IG@nadXJNEDliohZV^QPOFspb\\\\bTTTvTRbTbb\\rVVTRfTTvXx|BZFVvjjjjiYjfZjjjYjjRDIaBDq@@',
      coordinates:
        '!BKB^@ceS[@h`Yg}ARpAeMtHa}KAcPTh{_S]CjXES[pAeMtH}MtEK@IdnDpB[|bES[UMo@F]ARaERH_X`B_`BH_X`Bb@I~Oxa}uwvH_Wxb@I~Oxa}',
    },
    mass: 602.4460994741785,
    monoisotopicMass: 602.1373719496199,
    unsaturation: 22,
    elements: [
      { symbol: 'C', number: 21 },
      { symbol: 'H', number: 27 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 13 },
      { symbol: 'P', number: 1 },
    ],
  },
  Wyb: {
    name: 'wybutosine monophosphate diradical 3483G',
    mf: 'C21H27N6O11P',
    kind: 'NucleotideP',
    oneLetter: 'Y',
    ocl: {
      value:
        'eiSVML@IG@na`XJNEDlilRZVPOFspb\\\\bTTTvTRbTbb\\rVVRbTTvXx|BZFVvjjjjiYjfZjjfZjdaBXPaLP@',
      coordinates:
        '!BsJ\\@ciP{@`YWuARPAeMT@a}sNaPThxSUCjhIP{PAeMTD}MTEI@IllDPB[|BIP{eCm@FUARAIPH_Pc|BGtHGzBGtw_Pa}_k|HGzBGt',
    },
    mass: 570.4472896255419,
    monoisotopicMass: 570.14754271048,
    unsaturation: 22,
    elements: [
      { symbol: 'C', number: 21 },
      { symbol: 'H', number: 27 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Awo: {
    name:
      '7-aminocarboxypropylwyosine methyl ester monophosphate diradical 348G',
    mf: 'C19H25N6O9P',
    kind: 'NucleotideP',
    oneLetter: '⇑',
    ocl: {
      value:
        'ejQVIL@IG@na`XJNEDlid\\POFspb\\\\bTTTvTRbTbb\\rVVRffXx|BZFVvjjjjiYjfZjjZjRDIaBDq@@',
      coordinates:
        '!B`HyRtL@f_XbDRxz@UHS_ch`BS]BN`MAMwxyKaL@fUHS_cmG_chCjXI|YzfA}bL@fpBYTaHz@F\\BHHa}bOq~@Ha}_c~H@ha}',
    },
    mass: 512.4111264753234,
    monoisotopicMass: 512.14206340688,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 19 },
      { symbol: 'H', number: 25 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Wyo: {
    name: 'wyosine monophosphate diradical 34G',
    mf: 'C14H16N5O7P',
    kind: 'NucleotideP',
    oneLetter: '€',
    ocl: {
      value:
        'ek`ZNL@IG@nahJNEDli`OFspb\\\\bTTTvTRbTbb\\rVXx|BZFVvjjjjiYjfZjdaBXPaLP@',
      coordinates:
        '!B_`CWMF@ctvDUI|fRxPYgtwP[zV_IorHFY|gD}F@RxPYg|@YgrZOTh{_cuJOS]F@tXAKaI|fw}D',
    },
    mass: 397.2804671450629,
    monoisotopicMass: 397.07873487324,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 14 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Pdu: {
    name: '3-methylpseudouridine monophosphate diradical 39U',
    mf: 'C10H13N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'κ',
    ocl: {
      value: 'fncPK@OAaSbgIrtGc[pbxyDhhilheDiMFs`RuUUTsTuMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@HoWtw@`lFC~NSU@',
    },
    mass: 320.1929965859354,
    monoisotopicMass: 320.04095238282997,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mri: {
    name: '3-methyluridine monophosphate diradical 3U',
    mf: 'C10H13N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'δ',
    ocl: {
      value: 'fncPK@I^aSbgIrtGc[pbxyDhhilheDiMFs`RuUUUSLuMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@HoWtw@`lFC~NSU@',
    },
    mass: 320.1929965859354,
    monoisotopicMass: 320.04095238282997,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Acc: {
    name: 'N4-acetylcytidine monophosphate diradical 42C',
    mf: 'C11H14N3O8P',
    kind: 'NucleotideP',
    oneLetter: 'M',
    ocl: {
      value: 'fikpK@I^kBgENSghOFwaEqrIQQSYQJIRYiQg@ejjjjfYffhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuPOxxSItuP',
    },
    mass: 347.21837644817225,
    monoisotopicMass: 347.05185141949,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Iws: {
    name: 'isowyosine monophosphate diradical 42G',
    mf: 'C14H16N5O7P',
    kind: 'NucleotideP',
    oneLetter: '⊇',
    ocl: {
      value:
        'ek`ZNL@IG@fnhJNEDla`OFspb\\\\bTTTvTRbTbSbRrXx|BjzfVjjjjiYjYjjdaBXPaLP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RStwQ@MD@RpQ_qcQSU@',
    },
    mass: 397.2804671450629,
    monoisotopicMass: 397.07873487324,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 14 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dmc: {
    name: 'N4,N4-dimethylcytidine monophosphate diradical 44C',
    mf: 'C11H16N3O7P',
    kind: 'NucleotideP',
    oneLetter: 'μ',
    ocl: {
      value: 'fasqs@I^kBgENSdGc[pbxyDhhilheDiLuF\\BVjjjjYfZjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBGpcbpXBGtSItuPSU@H_Wtw@`lFDuPOxxlF@',
    },
    mass: 333.23485303196554,
    monoisotopicMass: 333.07258686438,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Adw: {
    name: '7-aminocarboxypropyl-demethylwyosine monophosphate diradical 47G',
    mf: 'C17H21N6O9P',
    kind: 'NucleotideP',
    oneLetter: '¥',
    ocl: {
      value:
        'elVVIL@IG@fnohJNEDlahTPOFspb\\\\bTTTvTRbTbSbRrrTtXx|BjzfVjjjjiYjYjjijdaBXPaLP@',
      coordinates:
        '!B`MERc|@Y_]^DUH{_UMo_tXa}SXPTh{_w}GjXES[pAg_t]F@cm@Il@f@haTvuS[pAgPThQTbGvH@ha}_c~HGx@bGt',
    },
    mass: 484.3578916656298,
    monoisotopicMass: 484.1107632779601,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 17 },
      { symbol: 'H', number: 21 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ncd: {
    name: 'N4-methylcytidine monophosphate diradical 4C',
    mf: 'C10H14N3O7P',
    kind: 'NucleotideP',
    oneLetter: 'ν',
    ocl: {
      value: 'fncqs@I^kBgENSdGc[pbxyDhhilheDiLts`RuUUUSLsUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuPKA`',
    },
    mass: 319.2082356271187,
    monoisotopicMass: 319.05693679992004,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dmw: {
    name: '4-demethylwyosine monophosphate diradical 4G',
    mf: 'C13H14N5O7P',
    kind: 'NucleotideP',
    oneLetter: '†',
    ocl: {
      value: 'fcis@INBwlJ\\TgHp^MoBKcdRbbfrbTRdR\\RVYspZ}fnjjjjefifjiHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RStwQ@MD@RpQ_qcQ',
    },
    mass: 383.253849740216,
    monoisotopicMass: 383.06308480878,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mtu: {
    name: '5-methoxyuridine monophosphate diradical 501U',
    mf: 'C10H13N2O9P',
    kind: 'NucleotideP',
    oneLetter: '5',
    ocl: {
      value: 'fasQK@I^aSbgIsUhOFwaEqrIQQSYQJIRYULxDmUUUTsMSTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 336.19240151025366,
    monoisotopicMass: 336.03586700240004,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Uoa: {
    name: 'uridine 5-oxyacetic acid monophosphate diradical 502U',
    mf: 'C11H13N2O11P',
    kind: 'NucleotideP',
    oneLetter: 'V',
    ocl: {
      value: 'fmgQk@I^aSbgIsUlu`|[^DWGHeEEMeDheIeUeF\\BVjjjjYfiijHbXaDr@@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lIwx@`H{WHc|KB_W_Wx@_`@lIr\\SFBrHHc|_`BH_Xc|_`BH_P',
    },
    mass: 380.2019472556255,
    monoisotopicMass: 380.02569624154,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ume: {
    name: 'uridine 5-oxyacetic acid methyl ester monophosphate diradical 503U',
    mf: 'C12H15N2O11P',
    kind: 'NucleotideP',
    oneLetter: 'υ',
    ocl: {
      value: 'fcwQk@I^aSbgIsUlu`|[^DWGHeEEMeDheIeUeLs`RuUUUSLuMMTQDqBId@@',
      coordinates:
        '!BKAb@tURDM\\YpMAMpBYMcxc|KB]~@Ha}SXWHc|bOqMcx}RtDvH_Xa}bOrH@ha}_c~HHa}',
    },
    mass: 394.2285646604723,
    monoisotopicMass: 394.041346306,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hxc: {
    name: '5-hydroxycytidine monophosphate diradical 50C',
    mf: 'C9H12N3O8P',
    kind: 'NucleotideP',
    oneLetter: 'Ç',
    ocl: {
      value: 'fncpK@I^[BgENSfhOFwaEqrIQQSYQJIRYUg@ejjjjfYfjHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 321.1810231465902,
    monoisotopicMass: 321.03620135502996,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hxu: {
    name: '5-hydroxyuridine monophosphate diradical 50U',
    mf: 'C9H11N2O9P',
    kind: 'NucleotideP',
    oneLetter: '∝',
    ocl: {
      value: 'fncQK@I^aSbgIsUhOFwaEqrIQQSYQJIRYUg@ejjjjfYjZHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 322.1657841054069,
    monoisotopicMass: 322.02021693794,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Amu: {
    name: '5-aminomethyluridine monophosphate diradical 510U',
    mf: 'C10H14N3O8P',
    kind: 'NucleotideP',
    oneLetter: '∪',
    ocl: {
      value: 'faspK@I^{BgENSehOFwaEqrIQQSYQJIRYULxDmUUUTsMSTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 335.207640551437,
    monoisotopicMass: 335.05185141949,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mau: {
    name: '5-methylaminomethyluridine monophosphate diradical 511U',
    mf: 'C11H16N3O8P',
    kind: 'NucleotideP',
    oneLetter: '{',
    ocl: {
      value: 'fikpK@I^{BgENSehOFwaEqrIQQSYQJIRYUYg@ejjjjfYjZhbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTBpX',
    },
    mass: 349.2342579562838,
    monoisotopicMass: 349.06750148395,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hmc: {
    name: '5-hydroxymethylcytidine monophosphate diradical 51C',
    mf: 'C10H14N3O8P',
    kind: 'NucleotideP',
    oneLetter: '∅',
    ocl: {
      value: 'faspK@I^[BgENSghOFwaEqrIQQSYQJIRYULxDmUUUTsLuTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 335.207640551437,
    monoisotopicMass: 335.05185141949,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cur: {
    name: '5-carboxymethylaminomethyluridine monophosphate diradical 51U',
    mf: 'C12H16N3O10P',
    kind: 'NucleotideP',
    oneLetter: '!',
    ocl: {
      value: 'fcwpk@I^{BgENSej}`|[^DWGHeEEMeDheIeUdhs`RuUUUSLuMSTQDqBId@@',
      coordinates:
        '!BKAb@tURDM\\YpMAMpBYMcx`BKB]~@Ha}SXW@h`Bb@IMcx}RtDvH_Xa}b@JH@ha}b@I~@Ha}',
    },
    mass: 393.24380370165557,
    monoisotopicMass: 393.05733072309,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Chr: {
    name: '5-carboxyhydroxymethyluridine monophosphate diradical 520U',
    mf: 'C11H13N2O11P',
    kind: 'NucleotideP',
    oneLetter: '≥',
    ocl: {
      value: 'fmgQk@I^aSbgIrwlu`|[^DWGHeEEMeDheIeUCF\\BVjjjjYfiijHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tTuPOxxlF@',
    },
    mass: 380.2019472556255,
    monoisotopicMass: 380.02569624154,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mcu: {
    name: '5-methoxycarbonylmethyluridine monophosphate diradical 521U',
    mf: 'C12H15N2O10P',
    kind: 'NucleotideP',
    oneLetter: '1',
    ocl: {
      value: 'fmgPk@I^aSbgIrt\\p^MoBKcdRbbfrbTRdrjtsNAKUUUULsTsUDQLPbY@@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lIwx@`H{WHc|KB_W_Wx@_`@lIr\\SFBrH@h`B_`BH_WxbOrH_P',
    },
    mass: 378.229159736154,
    monoisotopicMass: 378.04643168643,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hme: {
    name:
      '5-(carboxyhydroxymethyl)uridine methyl ester monophosphate diradical 522U',
    mf: 'C12H15N2O11P',
    kind: 'NucleotideP',
    oneLetter: ',',
    ocl: {
      value: 'fcwQk@I^aSbgIrwlu`|[^DWGHeEEMeDheIeUCLs`RuUUUSLuMMTQDqBId@@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lIwx@`H{WHc|KB_W_Wx@_`@lIr\\SFBrHHc|_`A~@Ha}_c~H@ha}',
    },
    mass: 394.2285646604723,
    monoisotopicMass: 394.041346306,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cxu: {
    name: '5-carboxymethyluridine monophosphate diradical 52U',
    mf: 'C11H13N2O10P',
    kind: 'NucleotideP',
    oneLetter: '◊',
    ocl: {
      value: 'fe{Pk@I^aSbgIrt\\p^MoBKcdRbbfrbTRdrjtYpIZjjjifZfZbHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTC~NKA`',
    },
    mass: 364.2025423313072,
    monoisotopicMass: 364.03078162197,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hmu: {
    name: '5-carbamoylhydroxymethyluridine monophosphate diradical 531U',
    mf: 'C11H14N3O10P',
    kind: 'NucleotideP',
    oneLetter: 'r',
    ocl: {
      value: 'fmgpk@I^WBgENSeoY`|[^DWGHeEEMeDheIeUCF\\BVjjjjYfiijHbXaDr@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tTuPOxxlF@',
    },
    mass: 379.21718629680873,
    monoisotopicMass: 379.04168065863,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ymu: {
    name: '5-carbamoylmethyluridine monophosphate diradical 53U',
    mf: 'C11H14N3O9P',
    kind: 'NucleotideP',
    oneLetter: '&',
    ocl: {
      value: 'fe{qK@I^gBgENSehp^MoBKcdRbbfrbTRdrjtYpIZjjjifZfZbHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSUAMTC~NKA`',
    },
    mass: 363.2177813724905,
    monoisotopicMass: 363.04676603906006,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ttu: {
    name: '5-taurinomethyluridine monophosphate diradical 54U',
    mf: 'C12H18N3O11PS',
    kind: 'NucleotideP',
    oneLetter: 'Ê',
    ocl: {
      value: 'fgqh`I^{BgENSenswAxv|HnJpcHeEEMeDheIeUdeHs`RuUUUSLuMTmQDSDHfP@',
      coordinates:
        '!BKAb@tURD@m\\YpMAMpBYMcx`BKB]~@Ha}SXW@h`Bb@IMcx}RtDvH_Xa}b@JH@ha}b@JH__rH_]^H_P',
    },
    mass: 443.32387754021244,
    monoisotopicMass: 443.03996658152005,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Cmu: {
    name: '5-cyanomethyluridine monophosphate diradical 55U',
    mf: 'C11H12N3O8P',
    kind: 'NucleotideP',
    oneLetter: 'Ѷ',
    ocl: {
      value: 'fikpK@I^GBgENSehOFwaEqrIQQSYQJIRYUYg@ejjjjfYj[hbIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tPCQ',
    },
    mass: 345.20249494006066,
    monoisotopicMass: 345.03620135502996,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Pyu: {
    name: '5-(isopentenylaminomethyl)uridine monophosphate diradical 583U',
    mf: 'C15H22N3O8P',
    kind: 'NucleotideP',
    oneLetter: '¾',
    ocl: {
      value: 'fkopK@I^{BgENSehOFwaEqrIQQSYQJIRYUYIQg@ejjjjfYjZfjHbXaDr@@',
      coordinates:
        '!BS]@lFJU`@Gyoza`lzf@lIwx@`H{W@h`BKB_W_Wx@_`@lIr\\SFBrH@h`B_`BH_Xc|bGvH@gx@bGt',
    },
    mass: 403.32484606755946,
    monoisotopicMass: 403.11445167733,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 22 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mdu: {
    name: '5-methyldihydrouridine monophosphate diradical 58U',
    mf: 'C10H15N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'ρ',
    ocl: {
      value: 'fncPK@I^aSbgIrtGc[pbxyDhhilheDiLjs`RuUUUSTuMDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 322.20887809404695,
    monoisotopicMass: 322.05660244729,
    unsaturation: 8,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mcd: {
    name: '5-methylcytidine monophosphate diradical 5C',
    mf: 'C10H14N3O7P',
    kind: 'NucleotideP',
    oneLetter: '?',
    ocl: {
      value: 'fncqs@I^[BgENSdGc[pbxyDhhilheDiLjs`RuUUUSLsUDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@',
    },
    mass: 319.2082356271187,
    monoisotopicMass: 319.05693679992004,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hia: {
    name: 'N6-(cis-hydroxyisopentenyl)adenosine monophosphate diradical 60A',
    mf: 'C15H20N5O7P',
    kind: 'NucleotideP',
    oneLetter: '`',
    ocl: {
      value:
        'eg`ZNL@IG@fnhJNEDlk`OFspb\\\\bTTTvTRbTbSVRTSGG`USUUUUTCLATuTDHSBDIbPSH',
      coordinates:
        '!BzfC@IeKPaDn}bHCQb@KQwuRDFALYpHCQt]W@h`BTmCQw}~N`ME~@Gx@b@JH@ha}bOrH_Wxb@JH_P',
    },
    mass: 413.3229660580212,
    monoisotopicMass: 413.11003500216003,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 20 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mta: {
    name: '2-methylthio-N6-methyladenosine monophosphate diradical 621A',
    mf: 'C12H16N5O6PS',
    kind: 'NucleotideP',
    oneLetter: '∞',
    ocl: {
      value: 'fmwhp`CQstZLDxipEfGa[qZDYEIlheDdhXdmDmKR\\u{MUUUU@aEUAFPTdmH@',
      coordinates:
        '!BBGw|B@a}_S\\H@a}TEJNOuP{Ntm@fPBN[~iRSpHUCneXDBYTEITAEPDiVA@fTBYU@Sj[p',
    },
    mass: 389.3243778334011,
    monoisotopicMass: 389.05589142807,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Tca: {
    name: 'N6-threonylcarbamoyladenosine monophosphate diradical 62A',
    mf: 'C15H19N6O10P',
    kind: 'NucleotideP',
    oneLetter: '6',
    ocl: {
      value:
        'edRVEL@IG@fnehJNEDligo`POFspb\\\\bTTTvTRbTbSVTrbbcGG`USUUUUTCLASUMUABDpaBX`@',
      coordinates:
        '!BzfC@IeKPaDn}bHCQbOsQwuRDFALYpHCQt]W@h`BTmCQw}~N`ME~@Gx@b@JH@ha}_c~H@ha}_c~H@ha}uwu~@Ha}',
    },
    mass: 474.31994328836606,
    monoisotopicMass: 474.09002783307,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 19 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hva: {
    name: 'N6-hydroxynorvalylcarbamoyladenosine monophosphate diradical 63A',
    mf: 'C16H21N6O10P',
    kind: 'NucleotideP',
    oneLetter: '√',
    ocl: {
      value:
        'elZVIB@IG@fnehJNDligo`POEQql|HgGHeEEMeDheHdueLhhiVNO@jfjjjjhFXBfjZj`aBXPaLP@',
      coordinates:
        '!BpBYTvxBNFY|bEJObGvOS\\@Yt]~DUEJOctu~@Ha}`HzOSTwPTh~HH`BbGvH_Xc|_`BH_Xc|_`BH_]_|bOq~Oxc|bGt',
    },
    mass: 488.34656069321284,
    monoisotopicMass: 488.10567789753003,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 16 },
      { symbol: 'H', number: 21 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Aya: {
    name: 'N6-acetyladenosine monophosphate diradical 64A',
    mf: 'C12H14N5O7P',
    kind: 'NucleotideP',
    oneLetter: '⇓',
    ocl: {
      value: 'fmwis@INBwlJ\\TgLp^MoBKcdRbbfrbTRdRZrcN^CUmUUUTCLASTDQLPbY@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@D}RIqOQ@@',
    },
    mass: 371.2431138434808,
    monoisotopicMass: 371.06308480878,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Gca: {
    name: 'N6-glycinylcarbamoyladenosine monophosphate diradical 65A',
    mf: 'C13H15N6O9P',
    kind: 'NucleotideP',
    oneLetter: '≡',
    ocl: {
      value:
        'eohVIL@IG@fnehJNEDlikg`OFspb\\\\bTTTvTRbTbSVTrTXx|BjZjjjj`Y`JZfhHPfDHSD@@',
      coordinates:
        '!BzfC@IeKPaDn}bHCQb@KQwuRDFALYpHCQt]W@h`BTmCQw}~N`ME~@Gx@bOrHHa}_c~H@ha}bOq~@Ha}',
    },
    mass: 430.2673035543541,
    monoisotopicMass: 430.06381308458,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 13 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tya: {
    name: 'N6-methyl-N6-threonylcarbamoyladenosinemonophosphate diradical 662A',
    mf: 'C16H21N6O10P',
    kind: 'NucleotideP',
    oneLetter: 'E',
    ocl: {
      value:
        'elZVEL@IG@fnmhJNEDleo`XPOFspb\\\\bTTTvTRbTbSVbaTTTXx|BjZjjjj`Y`JfjZjBDIaBDq@@',
      coordinates:
        '!BzfC@IeKPaDn}bHCQb@KQwuRDFALYpHCQt]W@h`BTmCQw}~N`ME~@Gx@bOrHHa}_`A~Ox`BbGu~Ox`BbGwW_Wx@bGt',
    },
    mass: 488.34656069321284,
    monoisotopicMass: 488.10567789753003,
    unsaturation: 18,
    elements: [
      { symbol: 'C', number: 16 },
      { symbol: 'H', number: 21 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 1 },
    ],
  },
  Nna: {
    name: 'N6,N6-dimethyladenosine monophosphate diradical 66A',
    mf: 'C12H16N5O6P',
    kind: 'NucleotideP',
    oneLetter: 'ζ',
    ocl: {
      value: 'feghs@INBwlJ\\TgHOFwaEqrIQQSYQJIRIMZLyxMVuUUUPLpEUADSDHfP@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@D}RFBp',
    },
    mass: 357.2595904272741,
    monoisotopicMass: 357.08382025367,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Fya: {
    name: 'N6-formyladenosine monophosphate diradical 67A',
    mf: 'C11H12N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'Ϩ',
    ocl: {
      value: 'fegis@INBwlJ\\TgLp^MoBKcdRbbfrbTRdRZrYspZmjjjj`Y`JZBHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@D}RtP@',
    },
    mass: 357.216496438634,
    monoisotopicMass: 357.04743474432,
    unsaturation: 16,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Hma: {
    name: 'N6-hydroxymethyladenosine monophosphate diradical 68A',
    mf: 'C11H14N5O7P',
    kind: 'NucleotideP',
    oneLetter: 'Ϫ',
    ocl: {
      value: 'fegis@INBwlJ\\TgLp^MoBKcdRbbfrbTRdRZrYspZmjjjj`Y`JjBHfHQL`@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@D}RtP@',
    },
    mass: 359.23237794674554,
    monoisotopicMass: 359.06308480878,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Cca: {
    name: 'cyclic N6-threonylcarbamoyladenosine monophosphate diradical 69A',
    mf: 'C15H17N6O9P',
    kind: 'NucleotideP',
    oneLetter: 'e',
    ocl: {
      value:
        'ehRVIL@IG@fnehJNEDliko`OFspb\\\\bTTTvTRbTbSVTRRtXx|BjZvNjjjj`Y`IjfjbHPfDHSD`z`',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_IorHbGtgD}F@RxRH_WwW@hbOTh}RtXCQ`A`l_`A`iVCjKAcjX@A~@h`Bup',
    },
    mass: 456.30465685593623,
    monoisotopicMass: 456.07946314904,
    unsaturation: 20,
    elements: [
      { symbol: 'C', number: 15 },
      { symbol: 'H', number: 17 },
      { symbol: 'N', number: 6 },
      { symbol: 'O', number: 9 },
      { symbol: 'P', number: 1 },
    ],
  },
  Fcy: {
    name: '5-formylcytidine monophosphate diradical71C',
    mf: 'C10H12N3O8P',
    kind: 'NucleotideP',
    oneLetter: '>',
    ocl: {
      value: 'faspK@I^[BgENSghOFwaEqrIQQSYQJIRYULxDmUUUTsLttQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFBpXSU@@tP',
    },
    mass: 333.1917590433254,
    monoisotopicMass: 333.03620135502996,
    unsaturation: 12,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 12 },
      { symbol: 'N', number: 3 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Tur: {
    name: '4-thiouridine monophosphate diradical 74U',
    mf: 'C9H11N2O7PS',
    kind: 'NucleotideP',
    oneLetter: '4',
    ocl: {
      value: 'ff}Qp`I^aSbgIrCqmxQ\\ZaFQJJJ[JIQJSMg@ejjjjfYihbIbDSH@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 322.2317616628973,
    monoisotopicMass: 322.0024588732,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
      { symbol: 'S', number: 1 },
    ],
  },
  Meg: {
    name: '7-methylguanosine monophosphate diradical 7G',
    mf: 'C11H15N5O7P',
    kind: 'NucleotideP',
    oneLetter: '7',
    ocl: {
      value: 'fegisDINCt\\J\\TgLp^MoBKbF\\bTTTvTRbTbRlSN^CWmUUUUKLuSTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RqdCQ@B\\StP@',
    },
    mass: 360.2403187008013,
    monoisotopicMass: 360.07090984101,
    unsaturation: 13,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mea: {
    name: '8-methyladenosine monophosphate diradical 8A',
    mf: 'C11H14N5O6P',
    kind: 'NucleotideP',
    oneLetter: 'â',
    ocl: {
      value: 'fi{hs@INCt\\J\\UdhOFw`eqrIQQSYQJJJQKigOA[vjjjjAi`J`bIbDSH@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpP@c`a}_S_|BD}RSuKQ@MD@',
    },
    mass: 343.2329730224273,
    monoisotopicMass: 343.06817018921,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 14 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 6 },
      { symbol: 'P', number: 1 },
    ],
  },
  Dhu: {
    name: 'dihydrouridine monophosphate diradical 8U',
    mf: 'C9H13N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'D',
    ocl: {
      value: 'ff}PK@I^aSbgIsTGc[pbxyDhhilheDiLv\\BVjjjjZffbHfHQL`@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 308.1822606892002,
    monoisotopicMass: 308.04095238282997,
    unsaturation: 8,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Ins: {
    name: 'inosine monophosphate diradical 9A',
    mf: 'C10H11N4O7P',
    kind: 'NucleotideP',
    oneLetter: 'I',
    ocl: {
      value: 'fakIs@INBvENJSghOFwaEqrIQQSYQJIRIMLyxMVuUUUTlsSTQDqBId@@',
      coordinates:
        '!BNuSFPDlDTEHt_pHtP@H_TuPBOq_qopHBGtgD}D@RpPH_Wtw@aOTd}RtPCQ@@',
    },
    mass: 330.1911165763972,
    monoisotopicMass: 330.03653570766,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 4 },
      { symbol: 'O', number: 7 },
      { symbol: 'P', number: 1 },
    ],
  },
  Pis: {
    name: 'pseudouridine monophosphate diradical 9U',
    mf: 'C9H11N2O8P',
    kind: 'NucleotideP',
    oneLetter: 'P',
    ocl: {
      value: 'ff}PK@OAaSbgIsTGc[pbxyDhhilheDiLv\\BVjjjfZffbHfHQL`@',
      coordinates: '!BNuSFPDlDTEHt_pHtP@H_TuPBOpcbpXBGtSItuPSU@H_Wtw@`lFDuP',
    },
    mass: 306.1663791810886,
    monoisotopicMass: 306.02530231837,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 9 },
      { symbol: 'H', number: 11 },
      { symbol: 'N', number: 2 },
      { symbol: 'O', number: 8 },
      { symbol: 'P', number: 1 },
    ],
  },
  Pqb: {
    name: 'preQ0base 100G diradical (base)',
    mf: 'C7H5N5O',
    kind: 'Nucleotide',
    oneLetter: 'ψ',
    ocl: {
      value: 'dk^h@DxYLLbbTTRekiujYj^`@',
      coordinates: '!B|Gwp_Gy|Gwp_[lk_gp_Ag_wrYRs}|f',
    },
    mass: 175.1477760289729,
    monoisotopicMass: 175.04940980287,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 5 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 1 },
    ],
  },
  Pqg: {
    name: 'preQ1base 101G diradical (base)',
    mf: 'C7H9N5O',
    kind: 'Nucleotide',
    oneLetter: '∇',
    ocl: {
      value: 'dk^h@DxYLLbbTTRckiUjYij`@',
      coordinates: '!BWyfe[tlDWye_fXx@RpRe[wtHSuHH@a}',
    },
    mass: 179.179539045196,
    monoisotopicMass: 179.08070993179,
    unsaturation: 10,
    elements: [
      { symbol: 'C', number: 7 },
      { symbol: 'H', number: 9 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 1 },
    ],
  },
  Qba: {
    name: 'Qbase 10G diradical (base)',
    mf: 'C12H15N5O3',
    kind: 'Nucleotide',
    oneLetter: '∴',
    ocl: {
      value: 'fbmi`@D\\EHpHyrJIQQJMJIPtyIPTmSMMUMUP@@',
      coordinates: '!BRpQ_f^i`RpQKAEARzfA_f_pHtP@H_Pc|BGuPThxUCl{RtBYTd|',
    },
    mass: 277.27967290184347,
    monoisotopicMass: 277.11748936431,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 15 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 3 },
    ],
  },
  Dgc: {
    name: 'N2,7-dimethylguanosine cap (cap DMG) diradical 279553N',
    mf: 'C12H18N5O11P2',
    kind: 'Nucleotide',
    oneLetter: '®',
    ocl: {
      value:
        'e`TZMBHIG@aihJNEHdlemck`OFspz|OgDJ\\bTTTvTRbTbRvbtfKGG`UPuUUUUJtuTmUTPaLHPfH@@',
      coordinates:
        '!BvuPfpDnDtEK_t_rHtXBH_TwPbOr_IorHbGtgD}F@RxS|uxc|_]^OTh}RIlBH_]F@IqOQ`@A~_c|bH}RbGt',
    },
    mass: 470.24625855539705,
    monoisotopicMass: 470.04780541440005,
    unsaturation: 13,
    elements: [
      { symbol: 'C', number: 12 },
      { symbol: 'H', number: 18 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 2 },
    ],
  },
  Dpa: {
    name: '5′-(3′-dephosphoacetyl-CoA) diradical 4155N',
    mf: 'C23H35N7O16P3S',
    kind: 'Nucleotide',
    oneLetter: '♣',
    ocl: {
      value:
        'elz~@jDCHlemnSTLBAEKBjfckgbV]XpEfCpB|IoCtHZy{lbdvbbfrbTRdRNRdnTbefRTrRTdTRrFVfjjjj`V`bZjjfjZjZ`bbLSaRP@',
      coordinates:
        '!BvtmKaMmKUMlfgto[tDw_cosWt]~H@dvObGv_F_sWbOpgKMG_R}m}bHa}HbOSX}M_cQw}G_OwzH_[wW_c~H_Wx@G{|bM]}bGvHGxbGu~Oxa}bOq~Oxa}_c~H_WxuwvH_P',
    },
    mass: 790.5483266874629,
    monoisotopicMass: 790.1073852418399,
    unsaturation: 21,
    elements: [
      { symbol: 'C', number: 23 },
      { symbol: 'H', number: 35 },
      { symbol: 'N', number: 7 },
      { symbol: 'O', number: 16 },
      { symbol: 'P', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Dpm: {
    name: '5′-(3′-dephosphomalonyl-CoA) diradical 4255N',
    mf: 'C24H35N7O18P3S',
    kind: 'Nucleotide',
    oneLetter: '♥',
    ocl: {
      value:
        'efq~DjDCHlemnSTLBAEKBjfckgbV]XrzpEfCpB|IoCtHZy{lbdvbbfrbTRdRNRdnTbefRTrRTrdbbVPrtuUUUTBtDSUUTuSUSSTDTQb\\JR@@',
      coordinates:
        '!BIlB_Ib[@pAe`zni`FALSF@A~FBq~OrpXbGveX@A~_c~OTa`lzf@_ha}_]_Q`MF@bOpXKA`loXbH__rHb@JHoX`B@m]}uwx@bGu~Ox`BbKvH@ha}_c~H@hb}b@JH_Xc|_`BH_X`B_`BHoP',
    },
    mass: 834.5578724328346,
    monoisotopicMass: 834.0972144809799,
    unsaturation: 23,
    elements: [
      { symbol: 'C', number: 24 },
      { symbol: 'H', number: 35 },
      { symbol: 'N', number: 7 },
      { symbol: 'O', number: 18 },
      { symbol: 'P', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Dsc: {
    name: '5′-(3′-dephosphosuccinyl-CoA) radical 4355N',
    mf: 'C25H37N7O18P3S',
    kind: 'Nucleotide',
    oneLetter: '♦',
    ocl: {
      value:
        'eny~DjDCHlemnSTLBAEKBjfckgbV]XzvpOFCpB|IoCtHZy{lbdvbbfrbTRdRNRdnTbefRTrRTrTdTRrFVfjjjj`V`bZjjfjZjZfhHhcDxTd@@',
      coordinates:
        '!B[~kjXFjiV[Ry|fcm}MtGwWctvH_]Q_c}KaGwWbGvN`H}MgrX@_gx@h`gKB\\lbGvOSX}M@m^H@gwWbGvH@ha}_Xc|bGxb@I~@Ha}b@JH_X`B_`BH_X`BbGvH@ha}_c~H@ha}b@I~@Ha}',
    },
    mass: 848.5844898376815,
    monoisotopicMass: 848.11286454544,
    unsaturation: 23,
    elements: [
      { symbol: 'C', number: 25 },
      { symbol: 'H', number: 37 },
      { symbol: 'N', number: 7 },
      { symbol: 'O', number: 18 },
      { symbol: 'P', number: 3 },
      { symbol: 'S', number: 1 },
    ],
  },
  Dpc: {
    name: '5′-(3′-dephospho-CoA) radical 455N',
    mf: 'C21H32N7O13P2S',
    kind: 'Nucleotide',
    oneLetter: '♠',
    ocl: {
      value:
        'ek_^KBDIG@nabYXJNEHdliemh\\QPEfspZ|CPcKmnrIQQSYQJIRIGIRWJQRsIJYIccpJkjjjjjAZBIjjjZijjBDIaBDq@@',
      coordinates:
        '!B[zW[UI|YchAMc{vHcuJH@m~NbGuKvwvHb@JNwx}Rgqe}bHa}@h`gDr\\Sb@JOTh}R@m]~@@A~b@I~@H`B_X`_hb}_`CW@h`B_`BH@gx@upJH@gx@b@I~@@',
    },
    mass: 684.5310558604504,
    monoisotopicMass: 684.1254042880199,
    unsaturation: 19,
    elements: [
      { symbol: 'C', number: 21 },
      { symbol: 'H', number: 32 },
      { symbol: 'N', number: 7 },
      { symbol: 'O', number: 13 },
      { symbol: 'P', number: 2 },
      { symbol: 'S', number: 1 },
    ],
  },
  Dpe: {
    name: '5′-diphosphate end 552N',
    mf: 'O3P',
    kind: 'Nucleotide',
    oneLetter: 'ϒ',
    ocl: { value: 'gJQdebGF^Dx|duK@@', coordinates: '!BbOq~@GxbGt' },
    mass: 78.97197677137483,
    monoisotopicMass: 78.95850585713,
    unsaturation: 1,
    elements: [
      { symbol: 'O', number: 3 },
      { symbol: 'P', number: 1 },
    ],
  },
  Mgc: {
    name: '7-methylguanosine cap (cap 0) diradical 79553N',
    mf: 'C11H16N5O11P2',
    kind: 'Nucleotide',
    oneLetter: '©',
    ocl: {
      value:
        'eohZMBHIG@aihJNEHdlemck`OFspz|GgDJ\\bTTTvTRbTbRvbtcXx|BjFjjjjiVfjejjHPfDHSD@@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_I`JHbGtgD}F@RxPBux`B_]^OTh}RIlBH_]F@IqOQ`@A~_c|BbHa}',
    },
    mass: 456.2196411505502,
    monoisotopicMass: 456.03215534994,
    unsaturation: 13,
    elements: [
      { symbol: 'C', number: 11 },
      { symbol: 'H', number: 16 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 11 },
      { symbol: 'P', number: 2 },
    ],
  },
  Gyy: {
    name: 'guanylylated 5′ end (cap G) diradical 9553N',
    mf: 'C10H13N5O10P2',
    kind: 'Nucleotide',
    oneLetter: 'ϑ',
    ocl: {
      value:
        'fkhh`INCt\\J\\UENY{NCqmxM|EnNQJJJ[JIQJQHzIRLyxM^uUUUTkSULuQDSDHfP@',
      coordinates:
        '!BvuPfpDnDtEK_tPJHtXBH_TwPb@J_I`JHbGtgD}F@RxPBux`B_]^OTh}R_`CQ`B\\StXA~@C}~@Gx',
    },
    mass: 425.1856780673293,
    monoisotopicMass: 425.01376563368,
    unsaturation: 14,
    elements: [
      { symbol: 'C', number: 10 },
      { symbol: 'H', number: 13 },
      { symbol: 'N', number: 5 },
      { symbol: 'O', number: 10 },
      { symbol: 'P', number: 2 },
    ],
  },
  Furp: {
    name: 'furan phosphate radical',
    mf: 'C5H6O4P',
    kind: 'RNAp',
    oneLetter: '⬠',
    ocl: {
      value: 'dmtBPDpnAYcpRZ}eeYjii@@',
      coordinates: '!B]w|Mw\\B_S]wW\\BtP@oKS~frpP',
    },
    mass: 161.072705703704,
    monoisotopicMass: 161.00037067008,
    unsaturation: 5,
    elements: [
      { symbol: 'C', number: 5 },
      { symbol: 'H', number: 6 },
      { symbol: 'O', number: 4 },
      { symbol: 'P', number: 1 },
    ],
  },
};

},{}],13:[function(require,module,exports){
'use strict';

/**
 * Defines static variables corresponding to the various formatting possibilities
 */

module.exports = {
  SUBSCRIPT: 'subscript',
  SUPERSCRIPT: 'superscript',
  SUPERIMPOSE: 'superimpose',
  TEXT: 'text',
};

},{}],14:[function(require,module,exports){
'use strict';
/**
 * Define static variable corresponding to the various Kinds of a molecular formula part.
 */

module.exports = {
  BEGIN: 'begin',
  ATOM: 'atom',
  MULTIPLIER_RANGE: 'multiplierRange',
  ISOTOPE: 'isotope',
  ISOTOPE_RATIO: 'isotopeRatio',
  CHARGE: 'charge',
  SALT: 'salt',
  OPENING_PARENTHESIS: 'openingParenthesis',
  CLOSING_PARENTHESIS: 'closingParenthesis',
  PRE_MULTIPLIER: 'preMultiplier',
  MULTIPLIER: 'multiplier',
  TEXT: 'text',
  COMMENT: 'comment',
};

},{}],15:[function(require,module,exports){
'use strict';

const ensureCase = require('./ensureCase');
const parse = require('./parse');
const getEA = require('./util/getEA');
const getInfo = require('./util/getInfo');
const getIsotopesInfo = require('./util/getIsotopesInfo');
const partsToDisplay = require('./util/partsToDisplay');
const partsToMF = require('./util/partsToMF');
const toDisplay = require('./util/toDisplay');
const toHtml = require('./util/toHtml');
const toParts = require('./util/toParts');

class MF {
  constructor(mf, options = {}) {
    if (options.ensureCase) {
      mf = ensureCase(mf);
    }
    this.parsed = parse(mf);
    this.cache = {};
  }

  toDisplay() {
    if (!this.cache.displayed) this.cache.displayed = toDisplay(this.parsed);
    return this.cache.displayed;
  }

  toHtml() {
    if (!this.cache.html) {
      this.toDisplay();
      this.cache.html = toHtml(this.cache.displayed);
    }
    return this.cache.html;
  }

  toParts(options) {
    if (!this.cache.parts) {
      this.cache.parts = toParts(this.parsed, options);
    }
    return this.cache.parts;
  }

  /**
   * Returns an object with the global MF, global charge, monoisotopic mass and mass
   * as well as the same informations for all the parts
   * @param {object} [options={}] options
   */
  getInfo(options = {}) {
    if (!this.cache.info) {
      this.toParts();
      this.cache.info = getInfo(this.cache.parts, options);
    }
    return this.cache.info;
  }

  /**
   * Returns an object with the elemental analysis
   */
  getEA(options = {}) {
    if (!this.cache.ea) {
      this.toParts();
      this.cache.ea = getEA(this.cache.parts, options);
    }
    return this.cache.ea;
  }

  /**
   * Returns an array with each atom and isotopic composition
   */
  getIsotopesInfo(options = {}) {
    if (!this.cache.isotopesInfo) {
      this.toParts();
      this.cache.isotopesInfo = getIsotopesInfo(this.cache.parts, options);
    }
    return this.cache.isotopesInfo;
  }

  /**
   * Get a canonized MF
   */
  toMF() {
    if (!this.cache.mf) {
      this.toParts();
      this.cache.mf = partsToMF(this.cache.parts);
    }
    return this.cache.mf;
  }

  /**
   * Get a canonized MF
   */
  toNeutralMF() {
    if (!this.cache.neutralMF) {
      this.toParts();
      this.cache.neutralMF = partsToMF(this.cache.parts, { neutral: true });
    }
    return this.cache.neutralMF;
  }

  canonize() {
    this.toParts();
    this.cache.displayed = partsToDisplay(this.cache.parts);
    this.cache.html = undefined;
  }
}

module.exports = MF;

},{"./ensureCase":17,"./parse":19,"./util/getEA":21,"./util/getInfo":22,"./util/getIsotopesInfo":24,"./util/partsToDisplay":29,"./util/partsToMF":30,"./util/toDisplay":31,"./util/toHtml":32,"./util/toParts":33}],16:[function(require,module,exports){
'use strict';

module.exports = {
  SUPERIMPOSE:
    'flex-direction: column;display: inline-flex;justify-content: center;text-align: left;vertical-align: middle;',
  SUPERIMPOSE_SUP_SUB: 'line-height: 1; font-size: 70%',
};

},{}],17:[function(require,module,exports){
'use strict';

const elements = Object.keys(
  require('chemical-elements/src/elementsAndStableIsotopesObject.js'),
).sort((a, b) => b.length - a.length);

/**
 * Ensure that the mf has been entered with capital letters and not only lowercase
 * If there is only lowercase we try to capitalize the mf
 * @param {string} mf
 */

function capitalize(mf) {
  for (let i = 0; i < mf.length; i++) {
    if (mf.charCodeAt(i) > 64 && mf.charCodeAt(i) < 91) {
      return mf;
    }
  }
  let parts = mf.replace(/([a-z]*)([^a-z]*)/g, '$1 $2 ').split(/ +/);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].match(/^[a-z]$/)) {
      parts[i] = parts[i].toUpperCase();
    } else if (parts[i].match(/^[a-z]+$/)) {
      let newPart = '';
      for (let j = 0; j < parts[i].length; j++) {
        let two = parts[i].substr(j, 2);
        let one = parts[i].charAt(j).toUpperCase();
        if (
          ['c', 'h', 'o', 'n'].includes(two.charAt(0)) &&
          ['h', 'o', 'n'].includes(two.charAt(1))
        ) {
          newPart += two.toUpperCase();
          j++;
        } else {
          two = two.charAt(0).toUpperCase() + two.charAt(1);
          if (elements.includes(two)) {
            newPart += two;
            j++;
          } else {
            if (elements.includes(one)) {
              newPart += one;
            } else {
              return mf;
            }
          }
        }
      }
      parts[i] = newPart;
    }
  }
  return parts.join('');
}

module.exports = capitalize;

},{"chemical-elements/src/elementsAndStableIsotopesObject.js":8}],18:[function(require,module,exports){
'use strict';

const parse = require('./parse');
const toDisplay = require('./util/toDisplay');
const toHtml = require('./util/toHtml');

/**
 * Parse a molecular formula and converts it to an HTML code
 * @param {String} mf String containing the molecular formula
 */
function parseToHtml(mf) {
  let parsed = parse(mf);
  let display = toDisplay(parsed);
  return toHtml(display);
}

module.exports = {
  Kind: require('./Kind'),
  Format: require('./Format'),
  Style: require('./Style'),
  parse: require('./parse'),
  ensureCase: require('./ensureCase'),
  toDisplay,
  toHtml,
  parseToHtml,
  MF: require('./MF'),
};

},{"./Format":13,"./Kind":14,"./MF":15,"./Style":16,"./ensureCase":17,"./parse":19,"./util/toDisplay":31,"./util/toHtml":32}],19:[function(require,module,exports){
'use strict';

const Kind = require('./Kind');
const parseCharge = require('./util/parseCharge');

/**
 * Parse a mf to an array of kind / value
 * @param {String} mf
 */

module.exports = function parse(mf) {
  return new MFParser().parse(mf);
};

class MFParser {
  parse(mf = '') {
    this.mf = mf;
    this.i = 0;
    this.result = [];

    let lastKind = Kind.BEGIN;
    while (this.i < mf.length) {
      if (
        this.result.length > 0 &&
        this.result[this.result.length - 1].kind !== Kind.TEXT
      ) {
        lastKind = this.result[this.result.length - 1].kind;
      }
      let char = mf.charAt(this.i);
      let ascii = mf.charCodeAt(this.i);
      let nextAscii = 0;
      if (this.i + 1 < mf.length) nextAscii = mf.charCodeAt(this.i + 1);

      if (
        (ascii > 47 && ascii < 58) ||
        (char === '-' && nextAscii > 47 && nextAscii < 58)
      ) {
        // a number
        let value = this.getNumber(ascii);
        if (
          lastKind === Kind.SALT ||
          lastKind === Kind.BEGIN ||
          lastKind === Kind.OPENING_PARENTHESIS
        ) {
          if (value.to) {
            throw new MFError(
              this.mf,
              this.i,
              'Premultiplier may not contain a -',
            );
          }
          this.result.push({ kind: Kind.PRE_MULTIPLIER, value: value.from });
        } else {
          if (value.to) {
            this.result.push({
              kind: Kind.MULTIPLIER_RANGE,
              value: {
                from: Math.min(value.from, value.to),
                to: Math.max(value.from, value.to),
              },
            });
          } else {
            this.result.push({ kind: Kind.MULTIPLIER, value: value.from });
          }
        }

        continue;
      } else if (char === '.') {
        // a point
        this.result.push({ kind: Kind.SALT, value: char });
        // it is not in a number otherwise it would have been taken before
        // it must be in a salt
      } else if (ascii > 64 && ascii < 91) {
        // an uppercase = new atom
        let value = this.getAtom(ascii);
        this.result.push({ kind: Kind.ATOM, value });
        continue;
      } else if (ascii > 96 && ascii < 123) {
        // a lowercase
        throw new MFError(
          this.mf,
          this.i,
          'found a lowercase not following an uppercase',
        );
      } else if (char === '(') {
        let charge = this.getParenthesisCharge(ascii);
        if (charge) {
          this.result.push({ kind: Kind.CHARGE, value: charge });
        } else {
          this.result.push({ kind: Kind.OPENING_PARENTHESIS, value: '(' });
        }
      } else if (char === ')') {
        this.result.push({ kind: Kind.CLOSING_PARENTHESIS, value: ')' });
      } else if (char === '[') {
        // defines an isotope
        let isotope = this.getIsotope(ascii);
        this.result.push({ kind: Kind.ISOTOPE, value: isotope });
      } else if (char === ']') {
        throw new MFError(
          this.mf,
          this.i,
          'should never meet an closing bracket not in isotopes',
        );
      } else if (char === '{') {
        // can define an exotic isotopic ratio or mixtures of groups
        let isotopeRatio = this.getCurlyBracketIsotopeRatio(ascii);
        if (lastKind === Kind.ATOM) {
          let lastResult = this.result[this.result.length - 1];
          lastResult.kind = Kind.ISOTOPE_RATIO;
          lastResult.value = {
            atom: lastResult.value,
            ratio: isotopeRatio,
          };
        } else {
          throw new MFError(
            this.mf,
            this.i,
            'isotopic composition has to follow an atom',
          );
        }
      } else if (char === '}') {
        throw new MFError(
          this.mf,
          this.i,
          'found a unexpected closing curly bracket',
        );
      } else if (char === '+') {
        // charge not in parenthesis
        let charge = this.getNonParenthesisCharge(ascii);
        this.result.push({ kind: Kind.CHARGE, value: charge });
      } else if (char === '-') {
        // charge not in parenthesis
        let charge = this.getNonParenthesisCharge(ascii);
        this.result.push({ kind: Kind.CHARGE, value: charge });
      } else if (char === '$') {
        // it is a comment after
        this.result.push({
          kind: Kind.COMMENT,
          value: this.mf.substring(this.i + 1),
        });
        break;
      } else {
        this.result.push({ kind: Kind.TEXT, value: char });
      }
      this.i++;
    }

    this.checkParenthesis();
    return this.result;
  }

  checkParenthesis() {
    let counter = 0;
    for (let line of this.result) {
      if (line.kind === Kind.OPENING_PARENTHESIS) counter++;
      if (line.kind === Kind.CLOSING_PARENTHESIS) counter--;
    }
    if (counter !== 0) {
      throw new MFError(
        this.mf,
        this.i,
        'number of opening and closing parenthesis not equal',
      );
    }
  }

  getNumber(ascii) {
    let number = '';
    let previous;
    do {
      previous = ascii;
      number += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while ((ascii > 47 && ascii < 58) || ascii === 46 || ascii === 45); // number, . or -
    // we need to deal with the case there is a from / to
    if (previous === 46) this.i--;
    let indexOfDash = number.indexOf('-', 1);

    if (indexOfDash > -1) {
      return {
        from: Number(number.substr(0, indexOfDash)),
        to: Number(number.substr(indexOfDash + 1)),
      };
    }
    return { from: Number(number) };
  }

  getAtom(ascii) {
    let atom = '';
    do {
      atom += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii > 96 && ascii < 123);
    return atom;
  }

  getIsotope(ascii) {
    // [13C]
    let substring = '';
    do {
      substring += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii !== 93 && this.i <= this.mf.length);

    let atom = substring.replace(/[^a-zA-Z]/g, '');
    let isotope = Number(substring.replace(/[^0-9]/g, ''));
    return { atom, isotope };
  }

  getCurlyBracketIsotopeRatio(ascii) {
    let substring = '';
    let first = true;
    do {
      if (!first) {
        substring += String.fromCharCode(ascii);
      } else {
        first = false;
      }
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii !== 125 && this.i <= this.mf.length); // closing curly bracket
    if (substring.match(/^[0-9,]+$/)) {
      return substring.split(',').map((a) => Number(a));
    }
    throw new MFError(
      this.mf,
      this.i,
      'Curly brackets should contain only number and comma',
    );
  }

  getParenthesisCharge(ascii) {
    let substring = '';
    let begin = this.i;
    do {
      substring += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii !== 41 && this.i <= this.mf.length); // closing parenthesis
    if (substring.match(/^\([0-9+-]+$/)) {
      return parseCharge(substring.substring(1));
    } else {
      this.i = begin;
      return undefined;
    }
  }

  getNonParenthesisCharge(ascii) {
    let substring = '';
    do {
      substring += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii === 43 || ascii === 45 || (ascii > 47 && ascii < 58));
    this.i--;
    return parseCharge(substring);
  }
}
class MFError extends SyntaxError {
  constructor(mf, i, message) {
    let text = `${message}\n\n${mf}\n${' '.repeat(i)}^`;
    super(text);
  }
}

},{"./Kind":14,"./util/parseCharge":26}],20:[function(require,module,exports){
'use strict';

module.exports = function formatCharge(charge) {
  if (charge === 1) return '+';
  if (charge > 1) return `+${charge}`;
  if (charge < 0) return String(charge);
  return '';
};

},{}],21:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements').elementsObject;
const groups = require('chemical-groups/src/groupsObject.js');

const Kind = require('../Kind');

const getIsotopeRatioInfo = require('./getIsotopeRatioInfo');
const isotopes = require('./getIsotopesObject');

/**
 *
 * @param {*} parts
 * @param {*} [options={}]
 */
module.exports = function getEA(parts) {
  let results = {};
  for (let part of parts) {
    for (let line of part) {
      switch (line.kind) {
        case Kind.ISOTOPE: {
          let isotope = isotopes[line.value.isotope + line.value.atom];
          if (!isotope) {
            throw new Error(
              `Unknown isotope: ${line.value.isotope}${line.value.atom}`,
            );
          }
          addMass(results, line.value.atom, isotope.mass * line.multiplier);
          break;
        }

        case Kind.ISOTOPE_RATIO: {
          let isotopeRatioInfo = getIsotopeRatioInfo(line.value);
          addMass(
            results,
            line.value.atom,
            isotopeRatioInfo.mass * line.multiplier,
          );
          break;
        }

        case Kind.ATOM: {
          let element = elements[line.value];
          if (!element) {
            element = groups[line.value];
            if (!element) throw Error(`Unknown element: ${line.value}`);
            // need to explode group ????
          }
          addMass(results, line.value, element.mass * line.multiplier);
          break;
        }

        case Kind.CHARGE:
          break;
        default:
          throw new Error('partToMF unhandled Kind: ', line.kind);
      }
    }
  }

  let eas = [];
  let sum = 0;
  for (let key in results) {
    sum += results[key];
    eas.push({
      element: key,
      mass: results[key],
    });
  }

  eas.forEach((ea) => {
    ea.ratio = ea.mass / sum;
  });
  return eas;
};

function addMass(results, atom, mass) {
  if (!results[atom]) results[atom] = 0;
  results[atom] += mass;
}

},{"../Kind":14,"./getIsotopeRatioInfo":23,"./getIsotopesObject":25,"chemical-elements":10,"chemical-groups/src/groupsObject.js":12}],22:[function(require,module,exports){
'use strict';

const { ELECTRON_MASS } = require('chemical-elements/src/constants');
const elements = require('chemical-elements/src/elementsAndIsotopesObject.js');
const unsaturations = require('chemical-elements/src/unsaturationsObject.js');
const groups = require('chemical-groups/src/groupsObject.js');

const Kind = require('../Kind');

const getIsotopeRatioInfo = require('./getIsotopeRatioInfo');
const isotopes = require('./getIsotopesObject');
const partToAtoms = require('./partToAtoms');
const partToMF = require('./partToMF');

/**
 *
 * @param {*} parts
 * @param {*} [options={}]
 */
module.exports = function getInfo(parts, options = {}) {
  let { customUnsaturations = {} } = options;
  if (parts.length === 0) return {};
  if (parts.length === 1) {
    return getProcessedPart(parts[0], customUnsaturations);
  }

  let result = { parts: [] };
  for (let part of parts) {
    result.parts.push(getProcessedPart(part, customUnsaturations));
  }

  result.monoisotopicMass = 0;
  result.mass = 0;
  result.charge = 0;
  result.mf = result.parts.map((a) => a.mf).join('.');
  result.parts.forEach((a) => {
    result.mass += a.mass;
    result.monoisotopicMass += a.monoisotopicMass;
    result.charge += a.charge;
  });
  return result;
};

function getProcessedPart(part, customUnsaturations) {
  let currentPart = {
    mass: 0,
    monoisotopicMass: 0,
    charge: 0,
    mf: '',
    atoms: partToAtoms(part),
  };
  let unsaturation = 0;
  let validUnsaturation = true;
  currentPart.mf = partToMF(part);

  for (let line of part) {
    let currentElement = '';
    switch (line.kind) {
      case Kind.ATOM: {
        currentElement = line.value;
        let element = elements[line.value];

        // todo should we have a kind GROUP ?
        if (!element) {
          element = groups[line.value];
          if (!element) throw Error(`Unknown element: ${line.value}`);
          if (!customUnsaturations[line.value]) {
            customUnsaturations[line.value] = element.unsaturation;
          }
        }
        if (!element) throw new Error(`Unknown element: ${line.value}`);
        currentPart.monoisotopicMass +=
          element.monoisotopicMass * line.multiplier;
        currentPart.mass += element.mass * line.multiplier;
        break;
      }
      case Kind.ISOTOPE: {
        currentElement = line.value.atom;
        let isotope = isotopes[line.value.isotope + line.value.atom];
        if (!isotope) {
          throw new Error(
            `Unknown isotope: ${line.value.isotope}${line.value.atom}`,
          );
        }
        currentPart.monoisotopicMass += isotope.mass * line.multiplier;
        currentPart.mass += isotope.mass * line.multiplier;
        break;
      }
      case Kind.ISOTOPE_RATIO: {
        currentElement = line.value.atom;
        let isotopeRatioInfo = getIsotopeRatioInfo(line.value);
        currentPart.monoisotopicMass +=
          isotopeRatioInfo.monoisotopicMass * line.multiplier;
        currentPart.mass += isotopeRatioInfo.mass * line.multiplier;
        break;
      }
      case Kind.CHARGE:
        currentPart.charge = line.value;
        if (validUnsaturation) {
          unsaturation -= line.value;
        }
        break;
      default:
        throw new Error('Unimplemented Kind in getInfo', line.kind);
    }
    if (currentElement) {
      if (customUnsaturations[currentElement] !== undefined) {
        unsaturation += customUnsaturations[currentElement] * line.multiplier;
      } else if (unsaturations[currentElement] !== undefined) {
        unsaturation += unsaturations[currentElement] * line.multiplier;
      } else {
        validUnsaturation = false;
      }
    }
  }

  // need to calculate the observedMonoisotopicMass
  if (currentPart.charge) {
    currentPart.observedMonoisotopicMass =
      (currentPart.monoisotopicMass - currentPart.charge * ELECTRON_MASS) /
      Math.abs(currentPart.charge);
  }
  if (validUnsaturation) {
    currentPart.unsaturation = unsaturation / 2 + 1;
  }
  return currentPart;
}

},{"../Kind":14,"./getIsotopeRatioInfo":23,"./getIsotopesObject":25,"./partToAtoms":27,"./partToMF":28,"chemical-elements/src/constants":2,"chemical-elements/src/elementsAndIsotopesObject.js":6,"chemical-elements/src/unsaturationsObject.js":11,"chemical-groups/src/groupsObject.js":12}],23:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements').elementsAndStableIsotopesObject;

function getIsotopeRatioInfo(value) {
  let result = { mass: 0, monoisotopicMass: 0 };
  let element = elements[value.atom];
  if (!element) throw new Error(`Element not found: ${value.atom}`);
  let isotopesArray = element.isotopes;
  let ratios = normalize(value.ratio);
  let max = Math.max(...ratios);
  if (ratios.length > isotopesArray.length) {
    throw new Error(
      `the number of specified ratios is bigger that the number of stable isotopes: ${value.atom}`,
    );
  }
  for (let i = 0; i < ratios.length; i++) {
    result.mass += ratios[i] * isotopesArray[i].mass;
    if (max === ratios[i] && result.monoisotopicMass === 0) {
      result.monoisotopicMass = isotopesArray[i].mass;
    }
  }
  return result;
}

function normalize(array) {
  let sum = array.reduce((prev, current) => prev + current, 0);
  return array.map((a) => a / sum);
}

module.exports = getIsotopeRatioInfo;

},{"chemical-elements":10}],24:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndStableIsotopesObject.js');

const Kind = require('../Kind');

const isotopes = require('./getIsotopesObject');

/**
 *
 * @param {*} parts
 * @param {*} options
 */
module.exports = function getIsotopesInfo(parts) {
  if (parts.length === 0) return [];
  if (parts.length > 1) {
    throw new Error('getIsotopesInfo can not be applied on multipart MF');
  }

  return getProcessedPart(parts[0]);
};

function getProcessedPart(part) {
  let result = {
    charge: 0,
    isotopes: [],
  };
  for (let line of part) {
    switch (line.kind) {
      case Kind.ISOTOPE: {
        let isotope = isotopes[line.value.isotope + line.value.atom];
        if (!isotope) {
          throw Error('unknown isotope:', line.value.atom, line.value.isotope);
        }
        result.isotopes.push({
          atom: `[${line.value.isotope}${line.value.atom}]`,
          number: line.multiplier,
          distribution: [{ x: isotope.mass, y: 1 }],
        });
        break;
      }
      case Kind.ISOTOPE_RATIO:
        {
          let element = elements[line.value.atom];
          if (!element) throw new Error('unknown element:', line.value);

          let distribution = getDistribution(
            element.isotopes,
            line.value.ratio,
          );
          result.isotopes.push({
            atom: `${line.value.atom}{${line.value.ratio.join(',')}}`,
            number: line.multiplier,
            distribution,
          });
        }
        break;
      case Kind.ATOM: {
        let element = elements[line.value];
        if (!element) throw new Error('unknown element:', line.value);
        result.isotopes.push({
          atom: line.value,
          number: line.multiplier,
          distribution: element.isotopes.map((e) => ({
            x: e.mass,
            y: e.abundance,
          })),
        });
        break;
      }
      case Kind.CHARGE:
        result.charge += line.value;
        break;
      default:
        throw new Error('partToMF unhandled Kind: ', line.kind);
    }
  }
  return result;
}

function getDistribution(isotopesArray, ratio) {
  let ratios = normalize(ratio);
  let result = [];
  if (ratios.length > isotopesArray.length) {
    throw new Error(
      `the number of specified ratios is bigger that the number of stable isotopes: ${isotopes}`,
    );
  }
  for (let i = 0; i < ratios.length; i++) {
    result.push({
      x: isotopesArray[i].mass,
      y: ratios[i],
    });
  }
  return result;
}

function normalize(array) {
  let sum = array.reduce((prev, current) => prev + current, 0);
  return array.map((a) => a / sum);
}

},{"../Kind":14,"./getIsotopesObject":25,"chemical-elements/src/elementsAndStableIsotopesObject.js":8}],25:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndIsotopesObject.js');

const isotopes = {};
Object.keys(elements).forEach((key) => {
  let e = elements[key];
  e.isotopes.forEach((i) => {
    isotopes[i.nominal + key] = {
      abundance: i.abundance,
      mass: i.mass,
    };
  });
});

module.exports = isotopes;

},{"chemical-elements/src/elementsAndIsotopesObject.js":6}],26:[function(require,module,exports){
'use strict';

/**
 * Parse a string to extract the charge
 * The charge may be in the form --, +++, +3, -2, 4+, 2-
 * @param {*} charge
 */

module.exports = function parseCharge(charge) {
  charge = charge.replace(/[()]/g, '');
  let chargeNumber = 0;
  if (charge.match(/^[+-]+$/)) {
    for (let i = 0; i < charge.length; i++) {
      if (charge.charAt(i) === '+') chargeNumber++;
      else chargeNumber--;
    }
  } else if (charge.match(/^[0-9]+[+-]$/)) {
    chargeNumber = Number(
      charge.charAt(charge.length - 1) + charge.substring(0, charge.length - 1),
    );
  } else {
    chargeNumber = Number(charge);
  }
  return chargeNumber;
};

},{}],27:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');

/**
 * Convert a MF part to an array of atoms
 * This procedure will suppress the isotopes !
 * This is mainly used to make queries
 */

module.exports = function partToAtoms(part) {
  let atoms = {};
  for (let line of part) {
    switch (line.kind) {
      case Kind.ISOTOPE:
        if (!atoms[line.value.atom]) atoms[line.value.atom] = 0;
        atoms[line.value.atom] += line.multiplier;
        break;
      case Kind.ISOTOPE_RATIO:
        if (!atoms[line.value.atom]) atoms[line.value.atom] = 0;
        atoms[line.value.atom] += line.multiplier;
        break;
      case Kind.ATOM:
        if (!atoms[line.value]) atoms[line.value] = 0;
        atoms[line.value] += line.multiplier;
        break;
      case Kind.CHARGE:
        break;
      default:
        throw new Error('partToMF unhandled Kind: ', line.kind);
    }
  }
  return atoms;
};

},{"../Kind":14}],28:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');

module.exports = function partToMF(part, options = {}) {
  let mf = [];
  for (let line of part) {
    switch (line.kind) {
      case Kind.ISOTOPE:
        if (line.multiplier !== 0) {
          mf.push(
            `[${line.value.isotope}${line.value.atom}]${
              line.multiplier !== 1 ? line.multiplier : ''
            }`,
          );
        }
        break;
      case Kind.ISOTOPE_RATIO:
        if (line.multiplier !== 0) {
          mf.push(
            `${line.value.atom}{${line.value.ratio.join(',')}}${
              line.multiplier !== 1 ? line.multiplier : ''
            }`,
          );
        }
        break;
      case Kind.ATOM:
        if (line.multiplier !== 0) {
          mf.push(line.value + (line.multiplier !== 1 ? line.multiplier : ''));
        }
        break;
      case Kind.CHARGE:
        if (line.value === 0 || options.neutral) break;
        mf.push(`(${line.value > 0 ? `+${line.value}` : line.value})`);
        break;
      default:
    }
  }
  return mf.join('');
};

},{"../Kind":14}],29:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');

const toDisplay = require('./toDisplay');
/**
 * Converts an array of mf elements to an array of formatting information
 * @param {Array<Object>} result of the parse method
 */

module.exports = function partsToDisplay(parts) {
  let lines = [];
  for (let part of parts) {
    if (lines.length > 0) lines.push({ kind: Kind.SALT, value: '•' });
    for (let partLine of part) {
      lines.push(partLine);
      if (partLine.multiplier) {
        lines.push({
          kind: Kind.MULTIPLIER,
          value: partLine.multiplier,
        });
      }
    }
  }

  return toDisplay(lines);
};

},{"../Kind":14,"./toDisplay":31}],30:[function(require,module,exports){
'use strict';

const partToMF = require('./partToMF');

module.exports = function partsToMF(parts, options) {
  let mf = [];
  for (let part of parts) {
    mf.push(partToMF(part, options));
  }
  return mf.join(' . ');
};

},{"./partToMF":28}],31:[function(require,module,exports){
'use strict';

const Format = require('../Format');
const Kind = require('../Kind');

const formatCharge = require('./formatCharge');

/**
 * Converts an array of mf elements to an array of formatting information
 * @param {Array<Object>} result of the parse method
 */

module.exports = function convertForDisplay(lines) {
  let results = [];
  let result = {};
  for (let line of lines) {
    switch (line.kind) {
      case Kind.MULTIPLIER:
        if (line.value !== 1) {
          result = {
            kind: Format.SUBSCRIPT,
            value: String(line.value),
          };
          results.push(result);
        }
        break;
      case Kind.MULTIPLIER_RANGE:
        result = {
          kind: Format.SUBSCRIPT,
          value: `${String(line.value.from)}-${line.value.to}`,
        };
        results.push(result);
        break;
      case Kind.CHARGE:
        if (result.kind === Format.SUBSCRIPT) {
          result.kind = Format.SUPERIMPOSE;
          result.over = formatCharge(line.value);
          result.under = result.value;
          result.value = undefined;
        } else {
          result = {
            kind: Format.SUPERSCRIPT,
            value: formatCharge(line.value),
          };
          results.push(result);
        }

        break;

      case Kind.ISOTOPE:
        result = {
          kind: Format.SUPERSCRIPT,
          value: line.value.isotope,
        };
        results.push(result);
        result = {
          kind: Format.TEXT,
          value: line.value.atom,
        };
        results.push(result);
        break;

      case Kind.ISOTOPE_RATIO:
        if (result.kind === Format.TEXT) {
          result.value += line.value.atom;
        } else {
          result = {
            kind: Format.TEXT,
            value: line.value.atom,
          };
          results.push(result);
        }
        result = {
          kind: Format.SUPERSCRIPT,
          value: `{${line.value.ratio.join(',')}}`,
        };
        results.push(result);
        break;
      case Kind.SALT:
        if (result.kind === Format.TEXT) {
          result.value += ' • ';
        } else {
          result = {
            kind: Format.TEXT,
            value: ' • ',
          };
          results.push(result);
        }
        break;
      default:
        if (result.kind === Format.TEXT) {
          result.value += line.value;
        } else {
          result = {
            kind: Format.TEXT,
            value: line.value,
          };
          results.push(result);
        }
    }
  }
  return results;
};

},{"../Format":13,"../Kind":14,"./formatCharge":20}],32:[function(require,module,exports){
'use strict';

const Format = require('../Format');
const Style = require('../Style');

module.exports = function getHtml(lines) {
  let html = [];
  for (let line of lines) {
    switch (line.kind) {
      case Format.SUBSCRIPT:
        html.push(`<sub>${line.value}</sub>`);
        break;
      case Format.SUPERSCRIPT:
        html.push(`<sup>${line.value}</sup>`);
        break;
      case Format.SUPERIMPOSE:
        html.push(`<span style="${Style.SUPERIMPOSE}">`);
        html.push(
          `<sup style="${Style.SUPERIMPOSE_SUP_SUB}">${line.over}</sup>`,
        );
        html.push(
          `<sub style="${Style.SUPERIMPOSE_SUP_SUB}">${line.under}</sub>`,
        );
        html.push('</span>');
        break;
      default:
        html.push(line.value);
    }
  }
  return html.join('');
};

},{"../Format":13,"../Style":16}],33:[function(require,module,exports){
'use strict';

const atomSorter = require('atom-sorter');
const groups = require('chemical-groups/src/groupsObject.js');

const Kind = require('../Kind');

/**
 *
 * @param {*} lines
 * @param {object} [options={}]
 * @param {boolean} [options.expand=true] - Should we expand the groups
 */

module.exports = function toParts(lines, options = {}) {
  const { expand: shouldExpandGroups = true } = options;
  let parts = [];
  let currentPart = createNewPart();
  let previousKind = Kind.BEGIN;
  parts.push(currentPart);
  for (let line of lines) {
    switch (line.kind) {
      case Kind.ATOM:
      case Kind.ISOTOPE_RATIO:
      case Kind.ISOTOPE:
      case Kind.CHARGE:
        currentPart.lines.push(Object.assign({}, line, { multiplier: 1 }));
        break;
      case Kind.OPENING_PARENTHESIS:
        openingParenthesis(currentPart);
        break;
      case Kind.CLOSING_PARENTHESIS:
        closingParenthesis(currentPart);
        break;
      case Kind.PRE_MULTIPLIER:
        preMultiplier(currentPart, line);
        break;
      case Kind.MULTIPLIER:
        postMultiplier(currentPart, line.value, previousKind);
        break;
      case Kind.SALT:
        globalPartMultiplier(currentPart);
        currentPart = createNewPart();
        parts.push(currentPart);
        break;
      case Kind.COMMENT: // we ignore comments to create the parts and canonized MF
        break;
      case Kind.TEXT:
        break;
      default:
        throw new Error(`Can not process mf having: ${line.kind}`);
    }
    previousKind = line.kind;
  }
  globalPartMultiplier(currentPart);
  if (shouldExpandGroups) expandGroups(parts);
  return combineAtomsIsotopesCharges(parts);
};

function createNewPart() {
  let currentMultiplier = { value: 1, fromIndex: 0 };
  return { lines: [], multipliers: [currentMultiplier], currentMultiplier };
}

function openingParenthesis(currentPart) {
  currentPart.currentMultiplier = {
    value: 1,
    fromIndex: currentPart.lines.length,
  };
  currentPart.multipliers.push(currentPart.currentMultiplier);
}

function closingParenthesis(currentPart) {
  currentPart.currentMultiplier = currentPart.multipliers.pop();
  if (currentPart.currentMultiplier !== 1) {
    for (
      let i = currentPart.currentMultiplier.fromIndex;
      i < currentPart.lines.length;
      i++
    ) {
      currentPart.lines[i].multiplier *= currentPart.currentMultiplier.value;
    }
  }
}

function preMultiplier(currentPart, line) {
  currentPart.currentMultiplier.value *= line.value;
}

function globalPartMultiplier(currentPart) {
  for (
    let i = currentPart.multipliers[0].fromIndex;
    i < currentPart.lines.length;
    i++
  ) {
    currentPart.lines[i].multiplier *= currentPart.multipliers[0].value;
  }
}

function postMultiplier(currentPart, value, previousKind) {
  if (previousKind === Kind.CLOSING_PARENTHESIS) {
    // need to apply to everything till the previous parenthesis
    for (
      let i = currentPart.currentMultiplier.fromIndex;
      i < currentPart.lines.length;
      i++
    ) {
      currentPart.lines[i].multiplier *= value;
    }
  } else {
    // just applies to the previous element
    currentPart.lines[currentPart.lines.length - 1].multiplier *= value;
  }
}

function expandGroups(parts) {
  for (let part of parts) {
    let expanded = false;
    for (let i = 0; i < part.lines.length; i++) {
      let line = part.lines[i];
      if (line.kind === Kind.ATOM) {
        let group = groups[line.value];

        if (group) {
          expanded = true;
          for (let element of group.elements) {
            if (element.isotope) {
              part.lines.push({
                kind: 'isotope',
                value: { atom: element.symbol, isotope: element.isotope },
                multiplier: line.multiplier * element.number,
              });
            } else {
              part.lines.push({
                kind: 'atom',
                value: element.symbol,
                multiplier: line.multiplier * element.number,
              });
            }
          }
          part.lines[i] = undefined;
        }
      }
    }
    if (expanded) part.lines = part.lines.filter((a) => a);
  }
}

function combineAtomsIsotopesCharges(parts) {
  let results = [];
  for (let part of parts) {
    let result = [];
    results.push(result);
    calculateAndSortKeys(part);

    let currentKey = '';
    for (let key of part.keys) {
      if (key.key === Kind.CHARGE) {
        if (currentKey !== key.key) {
          result.push({
            kind: Kind.CHARGE,
            value: key.value.value * key.value.multiplier,
          });
        } else {
          result[result.length - 1].value +=
            key.value.value * key.value.multiplier;
        }
      } else {
        if (currentKey !== key.key) {
          result.push(key.value);
        } else {
          result[result.length - 1].multiplier += key.value.multiplier;
        }
      }
      currentKey = key.key;
    }

    result.sort((a, b) => {
      if (a.kind === Kind.CHARGE) return 1;
      if (b.kind === Kind.CHARGE) return -1;

      let atomA = a.kind === Kind.ATOM ? a.value : a.value.atom;
      let atomB = b.kind === Kind.ATOM ? b.value : b.value.atom;
      if (atomA !== atomB) return atomSorter(atomA, atomB);
      // same atome but some isotopes ...
      if (a.kind === Kind.ATOM) return -1;
      if (b.kind === Kind.ATOM) return 1;
      if (a.kind === Kind.ISOTOPE) return -1;
      if (b.kind === Kind.ISOTOPE) return 1;
      if (a.kind === Kind.ISOTOPE_RATIO) return -1;
      if (b.kind === Kind.ISOTOPE_RATIO) return 1;
      return 0;
    });
  }
  return results;
}

function calculateAndSortKeys(part) {
  part.keys = [];
  for (let line of part.lines) {
    part.keys.push({ key: getKey(line), value: line });
  }
  part.keys.sort((a, b) => stringComparator(a.key, b.key));
}

function getKey(line) {
  let key = [line.kind];

  switch (line.kind) {
    case Kind.CHARGE:
      break;
    default:
      if (typeof line.value === 'string') {
        key.push(line.value);
      } else {
        for (let prop of Object.keys(line.value).sort()) {
          key.push(line.value[prop]);
        }
      }
  }
  return key.join('-');
}

function stringComparator(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

},{"../Kind":14,"atom-sorter":1,"chemical-groups/src/groupsObject.js":12}]},{},[18])(18)
});
