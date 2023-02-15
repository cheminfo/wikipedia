(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.RxnRenderer = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function parse(rxn) {
    if (typeof rxn !== 'string') {
        throw new TypeError('Parameter "rxn" must be a string');
    }
    // we will find the delimiter in order to be much faster and not use regular expression
    var header = rxn.substr(0, 1000);
    var crlf = '\n';
    if (header.indexOf('\r\n') > -1) {
        crlf = '\r\n';
    } else if (header.indexOf('\r') > -1) {
        crlf = '\r';
    }

    var rxnParts = rxn.split(crlf + '$MOL' + crlf);

    var reagents=[];
    var products=[];

    var result={};
    result.reagents=reagents;
    result.products=products;


    // the first part is expected to contain the number of reagents and products

    // First part should start with $RXN
    // and the fifth line should contain the number of reagents and products
    if (rxnParts.length===0) throw new Error('file looks empty');

    var header=rxnParts[0];
    if (header.indexOf("$RXN")!=0) throw new Error('file does not start with $RXN');

    var lines=header.split(crlf);
    if (lines.length<5) throw new Error('incorrect number of lines in header');

    var numberReagents=lines[4].substring(0,3) >> 0;
    var numberProducts=lines[4].substring(3,6) >> 0;

    // hack for JSME
    var thirdNumber=lines[4].substring(6,9) >> 0; // for jsme

    if (thirdNumber && rxnParts[1]) {
        let lines=rxnParts[1].split(crlf);
        if (lines[0]) {
            numberReagents=lines[0].trim().replace(/>[^>]*$/,'').split(/[.>]/).length;
         }
    }

    if (numberReagents+numberProducts!=rxnParts.length-1) throw new Error('not the correct number of molecules');

    for (var i=1; i<rxnParts.length; i++) {
        if (i<=numberReagents) {
            reagents.push(rxnParts[i]);
        } else {
            products.push(rxnParts[i]);
        }
    }
    return result;

}

module.exports = parse;

},{}],2:[function(require,module,exports){
'use strict';

var parse = require('rxn-parser');

class RxnRenderer {
  constructor(OCL, options = {}) {
    this.OCL = OCL;
    this.maxWidth = options.maxWidth || 400;
    this.maxHeight = options.maxHeight || 300;
    this.escaped = options.escaped;
  }

  renderRXNCode(rxnCode) {
    if (!this.OCL.ReactionEncoder) {
      throw new Error(
        'You need at least OCL version 8.1, OCL.ReactionEncoder is not available',
      );
    }
    const reaction = this.OCL.ReactionEncoder.decode(rxnCode);
    try {
      const reactants = [];
      for (let i = 0; i < reaction.getReactants(); i++) {
        reactants.push(reaction.getReactant(i));
      }
      let result = this.getStructuresFromMolecules(reactants);
      if (reaction.getReactants() > 0 || reaction.getProducts() > 0) {
        result += this.getArrow();
      }
      const products = [];
      for (let i = 0; i < reaction.getProducts(); i++) {
        products.push(reaction.getProduct(i));
      }
      result += this.getStructuresFromMolecules(products);
      return `<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">${result}</div>`;
    } catch (e) {
      return `<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">${e}</div>`;
    }
  }

  renderRXN(rxn) {
    try {
      let parsed = parse(rxn);
      let result = this.getStructuresFromMolfile(parsed.reagents);
      if (parsed.reagents.length > 0 || parsed.products.length > 0) {
        result += this.getArrow();
      }
      result += this.getStructuresFromMolfile(parsed.products);
      return `<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">${result}</div>`;
    } catch (e) {
      return `<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">${e}</div>`;
    }
  }
  render(object = {}) {
    let result = '';
    let parsed;
    if (object.rxn) {
      parsed = parse(object.rxn);
      result += this.getStructuresFromMolfile(parsed.reagents);
    }

    let hover = [];
    let under = [];
    if (object.catalyst) hover.push(this.getEscaped(object.catalyst));
    if (object.reagent) hover.push(this.getEscaped(object.reagent));

    if (object.solvent) hover.push(this.getEscaped(object.solvent));
    if (object.temperature) under.push(this.getEscaped(object.temperature));
    if (object.conditions) under.push(this.getEscaped(object.conditions));
    if (object.yield) under.push(this.getEscaped(object.yield));

    result += this.getArrow(hover.join(', '), under.join(', '));

    if (object.rxn) {
      result += this.getStructuresFromMolfile(parsed.products);
    }

    return `<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">${result}</div>`;
  }

  getArrow(hover = '', under = '') {
    return `<div style="font-family: arial, sans-serif; font-size: 10px">
    <div style="text-align: center; margin: 5px">${hover}</div>
    <div>
      <div
        style="top: 50%; position: relative; border-top: 2px solid black; width: 100%; min-width: 70px"
      >
        <div
          style="position: absolute; right: -2px; top: -6px; border-top: 5px solid transparent; border-left: 10px solid black;border-bottom: 5px solid transparent;"
        ></div>
      </div>
    </div>
    <div style="text-align: center; margin: 5px">
      ${under}
    </div>
  </div>`;
  }

  getEscaped(value) {
    if (this.escaped) return subscript(value);
    return subscript(safeTagsReplace(value));
  }

  getStructuresFromMolecules(molecules) {
    if (!molecules || molecules.length === 0) return '';
    const results = [];
    for (let molecule of molecules) {
      results.push(`<div>${this.getSVG(molecule)}</div>`);
    }
    return results.join('<div>+</div>');
  }

  getStructuresFromMolfile(structures) {
    if (!structures || structures.length === 0) return '';
    const results = [];
    for (let structure of structures) {
      let molecule = this.OCL.Molecule.fromMolfile(structure);
      results.push(`<div>${this.getSVG(molecule)}</div>`);
    }
    return results.join('<div>+</div>');
  }

  getSVG(molecule) {
    return molecule.toSVG(this.maxWidth, this.maxHeight, undefined, {
      autoCrop: true,
      autoCropMargin: 25,
      suppressChiralText: true,
      suppressCIPParity: true,
      suppressESR: true,
      noStereoProblem: true,
      showMapping: true,
    });
  }
}

function subscript(string) {
  return string.replace(/([a-zA-Z])([0-9]+)/g, '$1<sub>$2</sub>');
}

let tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

function safeTagsReplace(str) {
  return str.replace(/[&<>]/g, (tag) => tagsToReplace[tag] || tag);
}

exports.RxnRenderer = RxnRenderer;

},{"rxn-parser":1}]},{},[2])(2)
});
