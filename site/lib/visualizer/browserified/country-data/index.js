(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CountryData = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ = require('underscore');
var regions = require('./regions.js');
var continents = {};

continents.asia = {
  name: 'Asia',
  regions: ['centralAsia', 'southernAsia', 'southeastAsia', 'eastAsia', 'westernAsia'],
  countries: _.flatten([
    regions.centralAsia.countries,
    regions.southernAsia.countries,
    regions.southeastAsia.countries,
    regions.eastAsia.countries,
    regions.westernAsia.countries
  ])
  .sort()
};

continents.africa = {
  name: 'Africa',
  regions: ['centralAfrica', 'northAfrica', 'southernAfrica', 'eastAfrica', 'westAfrica'],
  countries: _.flatten([
      regions.centralAfrica.countries,
      regions.northAfrica.countries,
      regions.southernAfrica.countries,
      regions.eastAfrica.countries,
      regions.westAfrica.countries
  ])
  .sort()
};

continents.northAmerica = {
  name: 'North America',
  regions: ['centralAmerica', 'northernAmerica', 'caribbean'],
  countries: _.flatten([
    regions.centralAmerica.countries,
    regions.northernAmerica.countries,
    regions.caribbean.countries
  ])
  .sort()
};

continents.southAmerica = {
  name: 'South America',
  regions: ['southAmerica'],
  countries: _.flatten([
    regions.southAmerica.countries
  ])
  .sort()
}

continents.antartica = {
  name: 'Antartica',
  regions: ['antartica'],
  countries: _.flatten([
    regions.antartica.countries
  ])
  .sort()
}

continents.europe = {
  name: 'Europe',
  regions: ['northernEurope', 'southernEurope', 'easternEurope', 'westernEurope'],
  countries: _.flatten([
    regions.northernEurope.countries,
    regions.southernEurope.countries,
    regions.easternEurope.countries,
    regions.westernEurope.countries
  ])
  .sort()
}

continents.oceania = {
  name: 'Oceania',
  regions: ['australia', 'melanesia', 'micronesia', 'polynesia'],
  countries: _.flatten([
    regions.australia.countries,
    regions.melanesia.countries,
    regions.micronesia.countries,
    regions.polynesia.countries
  ])
  .sort()
};

module.exports = continents;

},{"./regions.js":5,"underscore":10}],2:[function(require,module,exports){
module.exports=[
  {
    "alpha2": "AC",
    "alpha3": "",
    "countryCallingCodes": [
      "+247"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "SHP",
    "languages": [
      "eng"
    ],
    "name": "Ascension Island",
    "status": "reserved"
  },
  {
    "alpha2": "AD",
    "alpha3": "AND",
    "countryCallingCodes": [
      "+376"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "AND",
    "languages": [
      "cat"
    ],
    "name": "Andorra",
    "status": "assigned"
  },
  {
    "alpha2": "AE",
    "alpha3": "ARE",
    "countryCallingCodes": [
      "+971"
    ],
    "currencies": [
      "AED"
    ],
    "ioc": "UAE",
    "languages": [
      "ara"
    ],
    "name": "United Arab Emirates",
    "status": "assigned"
  },
  {
    "alpha2": "AF",
    "alpha3": "AFG",
    "countryCallingCodes": [
      "+93"
    ],
    "currencies": [
      "AFN"
    ],
    "ioc": "AFG",
    "languages": [
      "pus"
    ],
    "name": "Afghanistan",
    "status": "assigned"
  },
  {
    "alpha2": "AG",
    "alpha3": "ATG",
    "countryCallingCodes": [
      "+1 268"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "ANT",
    "languages": [
      "eng"
    ],
    "name": "Antigua And Barbuda",
    "status": "assigned"
  },
  {
    "alpha2": "AI",
    "alpha3": "AIA",
    "countryCallingCodes": [
      "+1 264"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Anguilla",
    "status": "assigned"
  },
  {
    "alpha2": "AL",
    "alpha3": "ALB",
    "countryCallingCodes": [
      "+355"
    ],
    "currencies": [
      "ALL"
    ],
    "ioc": "ALB",
    "languages": [
      "sqi"
    ],
    "name": "Albania",
    "status": "assigned"
  },
  {
    "alpha2": "AM",
    "alpha3": "ARM",
    "countryCallingCodes": [
      "+374"
    ],
    "currencies": [
      "AMD"
    ],
    "ioc": "ARM",
    "languages": [
      "hye",
      "rus"
    ],
    "name": "Armenia",
    "status": "assigned"
  },
  {
    "alpha2": "AO",
    "alpha3": "AGO",
    "countryCallingCodes": [
      "+244"
    ],
    "currencies": [
      "AOA"
    ],
    "ioc": "ANG",
    "languages": [
      "por"
    ],
    "name": "Angola",
    "status": "assigned"
  },
  {
    "alpha2": "AQ",
    "alpha3": "ATA",
    "countryCallingCodes": [
      "+672"
    ],
    "currencies": [],
    "ioc": "",
    "languages": [],
    "name": "Antarctica",
    "status": "assigned"
  },
  {
    "alpha2": "AR",
    "alpha3": "ARG",
    "countryCallingCodes": [
      "+54"
    ],
    "currencies": [
      "ARS"
    ],
    "ioc": "ARG",
    "languages": [
      "spa"
    ],
    "name": "Argentina",
    "status": "assigned"
  },
  {
    "alpha2": "AS",
    "alpha3": "ASM",
    "countryCallingCodes": [
      "+1 684"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "ASA",
    "languages": [
      "eng",
      "smo"
    ],
    "name": "American Samoa",
    "status": "assigned"
  },
  {
    "alpha2": "AT",
    "alpha3": "AUT",
    "countryCallingCodes": [
      "+43"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "AUT",
    "languages": [
      "deu"
    ],
    "name": "Austria",
    "status": "assigned"
  },
  {
    "alpha2": "AU",
    "alpha3": "AUS",
    "countryCallingCodes": [
      "+61"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "AUS",
    "languages": [
      "eng"
    ],
    "name": "Australia",
    "status": "assigned"
  },
  {
    "alpha2": "AW",
    "alpha3": "ABW",
    "countryCallingCodes": [
      "+297"
    ],
    "currencies": [
      "AWG"
    ],
    "ioc": "ARU",
    "languages": [
      "nld"
    ],
    "name": "Aruba",
    "status": "assigned"
  },
  {
    "alpha2": "AX",
    "alpha3": "ALA",
    "countryCallingCodes": [
      "+358"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "swe"
    ],
    "name": "Åland Islands",
    "status": "assigned"
  },
  {
    "alpha2": "AZ",
    "alpha3": "AZE",
    "countryCallingCodes": [
      "+994"
    ],
    "currencies": [
      "AZN"
    ],
    "ioc": "AZE",
    "languages": [
      "aze"
    ],
    "name": "Azerbaijan",
    "status": "assigned"
  },
  {
    "alpha2": "BA",
    "alpha3": "BIH",
    "countryCallingCodes": [
      "+387"
    ],
    "currencies": [
      "BAM"
    ],
    "ioc": "BIH",
    "languages": [
      "bos",
      "cre",
      "srp"
    ],
    "name": "Bosnia & Herzegovina",
    "status": "assigned"
  },
  {
    "alpha2": "BB",
    "alpha3": "BRB",
    "countryCallingCodes": [
      "+1 246"
    ],
    "currencies": [
      "BBD"
    ],
    "ioc": "BAR",
    "languages": [
      "eng"
    ],
    "name": "Barbados",
    "status": "assigned"
  },
  {
    "alpha2": "BD",
    "alpha3": "BGD",
    "countryCallingCodes": [
      "+880"
    ],
    "currencies": [
      "BDT"
    ],
    "ioc": "BAN",
    "languages": [
      "ben"
    ],
    "name": "Bangladesh",
    "status": "assigned"
  },
  {
    "alpha2": "BE",
    "alpha3": "BEL",
    "countryCallingCodes": [
      "+32"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "BEL",
    "languages": [
      "nld",
      "fra",
      "deu"
    ],
    "name": "Belgium",
    "status": "assigned"
  },
  {
    "alpha2": "BF",
    "alpha3": "BFA",
    "countryCallingCodes": [
      "+226"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "BUR",
    "languages": [
      "fra"
    ],
    "name": "Burkina Faso",
    "status": "assigned"
  },
  {
    "alpha2": "BG",
    "alpha3": "BGR",
    "countryCallingCodes": [
      "+359"
    ],
    "currencies": [
      "BGN"
    ],
    "ioc": "BUL",
    "languages": [
      "bul"
    ],
    "name": "Bulgaria",
    "status": "assigned"
  },
  {
    "alpha2": "BH",
    "alpha3": "BHR",
    "countryCallingCodes": [
      "+973"
    ],
    "currencies": [
      "BHD"
    ],
    "ioc": "BRN",
    "languages": [
      "ara"
    ],
    "name": "Bahrain",
    "status": "assigned"
  },
  {
    "alpha2": "BI",
    "alpha3": "BDI",
    "countryCallingCodes": [
      "+257"
    ],
    "currencies": [
      "BIF"
    ],
    "ioc": "BDI",
    "languages": [
      "fra"
    ],
    "name": "Burundi",
    "status": "assigned"
  },
  {
    "alpha2": "BJ",
    "alpha3": "BEN",
    "countryCallingCodes": [
      "+229"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "BEN",
    "languages": [
      "fra"
    ],
    "name": "Benin",
    "status": "assigned"
  },
  {
    "alpha2": "BL",
    "alpha3": "BLM",
    "countryCallingCodes": [
      "+590"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "Saint Barthélemy",
    "status": "assigned"
  },
  {
    "alpha2": "BM",
    "alpha3": "BMU",
    "countryCallingCodes": [
      "+1 441"
    ],
    "currencies": [
      "BMD"
    ],
    "ioc": "BER",
    "languages": [
      "eng"
    ],
    "name": "Bermuda",
    "status": "assigned"
  },
  {
    "alpha2": "BN",
    "alpha3": "BRN",
    "countryCallingCodes": [
      "+673"
    ],
    "currencies": [
      "BND"
    ],
    "ioc": "BRU",
    "languages": [
      "msa",
      "eng"
    ],
    "name": "Brunei Darussalam",
    "status": "assigned"
  },
  {
    "alpha2": "BO",
    "alpha3": "BOL",
    "countryCallingCodes": [
      "+591"
    ],
    "currencies": [
      "BOB",
      "BOV"
    ],
    "ioc": "BOL",
    "languages": [
      "spa",
      "aym",
      "que"
    ],
    "name": "Bolivia, Plurinational State Of",
    "status": "assigned"
  },
  {
    "alpha2": "BQ",
    "alpha3": "BES",
    "countryCallingCodes": [
      "+599"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [
      "nld"
    ],
    "name": "Bonaire, Saint Eustatius And Saba",
    "status": "assigned"
  },
  {
    "alpha2": "BR",
    "alpha3": "BRA",
    "countryCallingCodes": [
      "+55"
    ],
    "currencies": [
      "BRL"
    ],
    "ioc": "BRA",
    "languages": [
      "por"
    ],
    "name": "Brazil",
    "status": "assigned"
  },
  {
    "alpha2": "BS",
    "alpha3": "BHS",
    "countryCallingCodes": [
      "+1 242"
    ],
    "currencies": [
      "BSD"
    ],
    "ioc": "BAH",
    "languages": [
      "eng"
    ],
    "name": "Bahamas",
    "status": "assigned"
  },
  {
    "alpha2": "BT",
    "alpha3": "BTN",
    "countryCallingCodes": [
      "+975"
    ],
    "currencies": [
      "INR",
      "BTN"
    ],
    "ioc": "BHU",
    "languages": [
      "dzo"
    ],
    "name": "Bhutan",
    "status": "assigned"
  },
  {
    "alpha2": "BV",
    "alpha3": "BVT",
    "countryCallingCodes": [],
    "currencies": [
      "NOK"
    ],
    "ioc": "",
    "languages": [],
    "name": "Bouvet Island",
    "status": "assigned"
  },
  {
    "alpha2": "BW",
    "alpha3": "BWA",
    "countryCallingCodes": [
      "+267"
    ],
    "currencies": [
      "BWP"
    ],
    "ioc": "BOT",
    "languages": [
      "eng",
      "tsn"
    ],
    "name": "Botswana",
    "status": "assigned"
  },
  {
    "alpha2": "BY",
    "alpha3": "BLR",
    "countryCallingCodes": [
      "+375"
    ],
    "currencies": [
      "BYR"
    ],
    "ioc": "BLR",
    "languages": [
      "bel",
      "rus"
    ],
    "name": "Belarus",
    "status": "assigned"
  },
  {
    "alpha2": "BZ",
    "alpha3": "BLZ",
    "countryCallingCodes": [
      "+501"
    ],
    "currencies": [
      "BZD"
    ],
    "ioc": "BIZ",
    "languages": [
      "eng"
    ],
    "name": "Belize",
    "status": "assigned"
  },
  {
    "alpha2": "CA",
    "alpha3": "CAN",
    "countryCallingCodes": [
      "+1"
    ],
    "currencies": [
      "CAD"
    ],
    "ioc": "CAN",
    "languages": [
      "eng",
      "fra"
    ],
    "name": "Canada",
    "status": "assigned"
  },
  {
    "alpha2": "CC",
    "alpha3": "CCK",
    "countryCallingCodes": [
      "+61"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Cocos (Keeling) Islands",
    "status": "assigned"
  },
  {
    "alpha2": "CD",
    "alpha3": "COD",
    "countryCallingCodes": [
      "+243"
    ],
    "currencies": [
      "CDF"
    ],
    "ioc": "COD",
    "languages": [
      "fra",
      "lin",
      "kon",
      "swa"
    ],
    "name": "Democratic Republic Of Congo",
    "status": "assigned"
  },
  {
    "alpha2": "CF",
    "alpha3": "CAF",
    "countryCallingCodes": [
      "+236"
    ],
    "currencies": [
      "XAF"
    ],
    "ioc": "CAF",
    "languages": [
      "fra",
      "sag"
    ],
    "name": "Central African Republic",
    "status": "assigned"
  },
  {
    "alpha2": "CG",
    "alpha3": "COG",
    "countryCallingCodes": [
      "+242"
    ],
    "currencies": [
      "XAF"
    ],
    "ioc": "CGO",
    "languages": [
      "fra",
      "lin"
    ],
    "name": "Republic Of Congo",
    "status": "assigned"
  },
  {
    "alpha2": "CH",
    "alpha3": "CHE",
    "countryCallingCodes": [
      "+41"
    ],
    "currencies": [
      "CHF",
      "CHE",
      "CHW"
    ],
    "ioc": "SUI",
    "languages": [
      "deu",
      "fra",
      "ita",
      "roh"
    ],
    "name": "Switzerland",
    "status": "assigned"
  },
  {
    "alpha2": "CI",
    "alpha3": "CIV",
    "countryCallingCodes": [
      "+225"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "CIV",
    "languages": [
      "fra"
    ],
    "name": "Cote d'Ivoire",
    "status": "assigned"
  },
  {
    "alpha2": "CK",
    "alpha3": "COK",
    "countryCallingCodes": [
      "+682"
    ],
    "currencies": [
      "NZD"
    ],
    "ioc": "COK",
    "languages": [
      "eng",
      "mri"
    ],
    "name": "Cook Islands",
    "status": "assigned"
  },
  {
    "alpha2": "CL",
    "alpha3": "CHL",
    "countryCallingCodes": [
      "+56"
    ],
    "currencies": [
      "CLP",
      "CLF"
    ],
    "ioc": "CHI",
    "languages": [
      "spa"
    ],
    "name": "Chile",
    "status": "assigned"
  },
  {
    "alpha2": "CM",
    "alpha3": "CMR",
    "countryCallingCodes": [
      "+237"
    ],
    "currencies": [
      "XAF"
    ],
    "ioc": "CMR",
    "languages": [
      "eng",
      "fra"
    ],
    "name": "Cameroon",
    "status": "assigned"
  },
  {
    "alpha2": "CN",
    "alpha3": "CHN",
    "countryCallingCodes": [
      "+86"
    ],
    "currencies": [
      "CNY"
    ],
    "ioc": "CHN",
    "languages": [
      "zho"
    ],
    "name": "China",
    "status": "assigned"
  },
  {
    "alpha2": "CO",
    "alpha3": "COL",
    "countryCallingCodes": [
      "+57"
    ],
    "currencies": [
      "COP",
      "COU"
    ],
    "ioc": "COL",
    "languages": [
      "spa"
    ],
    "name": "Colombia",
    "status": "assigned"
  },
  {
    "alpha2": "CP",
    "alpha3": "",
    "countryCallingCodes": [],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [],
    "name": "Clipperton Island",
    "status": "reserved"
  },
  {
    "alpha2": "CR",
    "alpha3": "CRI",
    "countryCallingCodes": [
      "+506"
    ],
    "currencies": [
      "CRC"
    ],
    "ioc": "CRC",
    "languages": [
      "spa"
    ],
    "name": "Costa Rica",
    "status": "assigned"
  },
  {
    "alpha2": "CU",
    "alpha3": "CUB",
    "countryCallingCodes": [
      "+53"
    ],
    "currencies": [
      "CUP",
      "CUC"
    ],
    "ioc": "CUB",
    "languages": [
      "spa"
    ],
    "name": "Cuba",
    "status": "assigned"
  },
  {
    "alpha2": "CV",
    "alpha3": "CPV",
    "countryCallingCodes": [
      "+238"
    ],
    "currencies": [
      "CVE"
    ],
    "ioc": "CPV",
    "languages": [
      "por"
    ],
    "name": "Cabo Verde",
    "status": "assigned"
  },
  {
    "alpha2": "CW",
    "alpha3": "CUW",
    "countryCallingCodes": [
      "+599"
    ],
    "currencies": [
      "ANG"
    ],
    "ioc": "",
    "languages": [
      "nld"
    ],
    "name": "Curacao",
    "status": "assigned"
  },
  {
    "alpha2": "CX",
    "alpha3": "CXR",
    "countryCallingCodes": [
      "+61"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Christmas Island",
    "status": "assigned"
  },
  {
    "alpha2": "CY",
    "alpha3": "CYP",
    "countryCallingCodes": [
      "+357"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "CYP",
    "languages": [
      "ell",
      "tur"
    ],
    "name": "Cyprus",
    "status": "assigned"
  },
  {
    "alpha2": "CZ",
    "alpha3": "CZE",
    "countryCallingCodes": [
      "+420"
    ],
    "currencies": [
      "CZK"
    ],
    "ioc": "CZE",
    "languages": [
      "ces"
    ],
    "name": "Czech Republic",
    "status": "assigned"
  },
  {
    "alpha2": "DE",
    "alpha3": "DEU",
    "countryCallingCodes": [
      "+49"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "GER",
    "languages": [
      "deu"
    ],
    "name": "Germany",
    "status": "assigned"
  },
  {
    "alpha2": "DG",
    "alpha3": "",
    "countryCallingCodes": [],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [],
    "name": "Diego Garcia",
    "status": "reserved"
  },
  {
    "alpha2": "DJ",
    "alpha3": "DJI",
    "countryCallingCodes": [
      "+253"
    ],
    "currencies": [
      "DJF"
    ],
    "ioc": "DJI",
    "languages": [
      "ara",
      "fra"
    ],
    "name": "Djibouti",
    "status": "assigned"
  },
  {
    "alpha2": "DK",
    "alpha3": "DNK",
    "countryCallingCodes": [
      "+45"
    ],
    "currencies": [
      "DKK"
    ],
    "ioc": "DEN",
    "languages": [
      "dan"
    ],
    "name": "Denmark",
    "status": "assigned"
  },
  {
    "alpha2": "DM",
    "alpha3": "DMA",
    "countryCallingCodes": [
      "+1 767"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "DMA",
    "languages": [
      "eng"
    ],
    "name": "Dominica",
    "status": "assigned"
  },
  {
    "alpha2": "DO",
    "alpha3": "DOM",
    "countryCallingCodes": [
      "+1 809",
      "+1 829",
      "+1 849"
    ],
    "currencies": [
      "DOP"
    ],
    "ioc": "DOM",
    "languages": [
      "spa"
    ],
    "name": "Dominican Republic",
    "status": "assigned"
  },
  {
    "alpha2": "DZ",
    "alpha3": "DZA",
    "countryCallingCodes": [
      "+213"
    ],
    "currencies": [
      "DZD"
    ],
    "ioc": "ALG",
    "languages": [
      "ara"
    ],
    "name": "Algeria",
    "status": "assigned"
  },
  {
    "alpha2": "EA",
    "alpha3": "",
    "countryCallingCodes": [],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [],
    "name": "Ceuta, Mulilla",
    "status": "reserved"
  },
  {
    "alpha2": "EC",
    "alpha3": "ECU",
    "countryCallingCodes": [
      "+593"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "ECU",
    "languages": [
      "spa",
      "que"
    ],
    "name": "Ecuador",
    "status": "assigned"
  },
  {
    "alpha2": "EE",
    "alpha3": "EST",
    "countryCallingCodes": [
      "+372"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "EST",
    "languages": [
      "est"
    ],
    "name": "Estonia",
    "status": "assigned"
  },
  {
    "alpha2": "EG",
    "alpha3": "EGY",
    "countryCallingCodes": [
      "+20"
    ],
    "currencies": [
      "EGP"
    ],
    "ioc": "EGY",
    "languages": [
      "ara"
    ],
    "name": "Egypt",
    "status": "assigned"
  },
  {
    "alpha2": "EH",
    "alpha3": "ESH",
    "countryCallingCodes": [
      "+212"
    ],
    "currencies": [
      "MAD"
    ],
    "ioc": "",
    "languages": [],
    "name": "Western Sahara",
    "status": "assigned"
  },
  {
    "alpha2": "ER",
    "alpha3": "ERI",
    "countryCallingCodes": [
      "+291"
    ],
    "currencies": [
      "ERN"
    ],
    "ioc": "ERI",
    "languages": [
      "eng",
      "ara",
      "tir"
    ],
    "name": "Eritrea",
    "status": "assigned"
  },
  {
    "alpha2": "ES",
    "alpha3": "ESP",
    "countryCallingCodes": [
      "+34"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "ESP",
    "languages": [
      "spa"
    ],
    "name": "Spain",
    "status": "assigned"
  },
  {
    "alpha2": "ET",
    "alpha3": "ETH",
    "countryCallingCodes": [
      "+251"
    ],
    "currencies": [
      "ETB"
    ],
    "ioc": "ETH",
    "languages": [
      "amh"
    ],
    "name": "Ethiopia",
    "status": "assigned"
  },
  {
    "alpha2": "EU",
    "alpha3": "",
    "countryCallingCodes": [
      "+388"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [],
    "name": "European Union",
    "status": "reserved"
  },
  {
    "alpha2": "FI",
    "alpha3": "FIN",
    "countryCallingCodes": [
      "+358"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "FIN",
    "languages": [
      "fin",
      "swe"
    ],
    "name": "Finland",
    "status": "assigned"
  },
  {
    "alpha2": "FJ",
    "alpha3": "FJI",
    "countryCallingCodes": [
      "+679"
    ],
    "currencies": [
      "FJD"
    ],
    "ioc": "FIJ",
    "languages": [
      "eng",
      "fij"
    ],
    "name": "Fiji",
    "status": "assigned"
  },
  {
    "alpha2": "FK",
    "alpha3": "FLK",
    "countryCallingCodes": [
      "+500"
    ],
    "currencies": [
      "FKP"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Falkland Islands",
    "status": "assigned"
  },
  {
    "alpha2": "FM",
    "alpha3": "FSM",
    "countryCallingCodes": [
      "+691"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Micronesia, Federated States Of",
    "status": "assigned"
  },
  {
    "alpha2": "FO",
    "alpha3": "FRO",
    "countryCallingCodes": [
      "+298"
    ],
    "currencies": [
      "DKK"
    ],
    "ioc": "FAI",
    "languages": [
      "fao",
      "dan"
    ],
    "name": "Faroe Islands",
    "status": "assigned"
  },
  {
    "alpha2": "FR",
    "alpha3": "FRA",
    "countryCallingCodes": [
      "+33"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "FRA",
    "languages": [
      "fra"
    ],
    "name": "France",
    "status": "assigned"
  },
  {
    "alpha2": "FX",
    "alpha3": "",
    "countryCallingCodes": [
      "+241"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "France, Metropolitan",
    "status": "reserved"
  },
  {
    "alpha2": "GA",
    "alpha3": "GAB",
    "countryCallingCodes": [
      "+241"
    ],
    "currencies": [
      "XAF"
    ],
    "ioc": "GAB",
    "languages": [
      "fra"
    ],
    "name": "Gabon",
    "status": "assigned"
  },
  {
    "alpha2": "GB",
    "alpha3": "GBR",
    "countryCallingCodes": [
      "+44"
    ],
    "currencies": [
      "GBP"
    ],
    "ioc": "GBR",
    "languages": [
      "eng",
      "cor",
      "gle",
      "gla",
      "cym"
    ],
    "name": "United Kingdom",
    "status": "assigned"
  },
  {
    "alpha2": "GD",
    "alpha3": "GRD",
    "countryCallingCodes": [
      "+473"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "GRN",
    "languages": [
      "eng"
    ],
    "name": "Grenada",
    "status": "assigned"
  },
  {
    "alpha2": "GE",
    "alpha3": "GEO",
    "countryCallingCodes": [
      "+995"
    ],
    "currencies": [
      "GEL"
    ],
    "ioc": "GEO",
    "languages": [
      "kat"
    ],
    "name": "Georgia",
    "status": "assigned"
  },
  {
    "alpha2": "GF",
    "alpha3": "GUF",
    "countryCallingCodes": [
      "+594"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "French Guiana",
    "status": "assigned"
  },
  {
    "alpha2": "GG",
    "alpha3": "GGY",
    "countryCallingCodes": [
      "+44"
    ],
    "currencies": [
      "GBP"
    ],
    "ioc": "GCI",
    "languages": [
      "fra"
    ],
    "name": "Guernsey",
    "status": "assigned"
  },
  {
    "alpha2": "GH",
    "alpha3": "GHA",
    "countryCallingCodes": [
      "+233"
    ],
    "currencies": [
      "GHS"
    ],
    "ioc": "GHA",
    "languages": [
      "eng"
    ],
    "name": "Ghana",
    "status": "assigned"
  },
  {
    "alpha2": "GI",
    "alpha3": "GIB",
    "countryCallingCodes": [
      "+350"
    ],
    "currencies": [
      "GIP"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Gibraltar",
    "status": "assigned"
  },
  {
    "alpha2": "GL",
    "alpha3": "GRL",
    "countryCallingCodes": [
      "+299"
    ],
    "currencies": [
      "DKK"
    ],
    "ioc": "",
    "languages": [
      "kal"
    ],
    "name": "Greenland",
    "status": "assigned"
  },
  {
    "alpha2": "GM",
    "alpha3": "GMB",
    "countryCallingCodes": [
      "+220"
    ],
    "currencies": [
      "GMD"
    ],
    "ioc": "GAM",
    "languages": [
      "eng"
    ],
    "name": "Gambia",
    "status": "assigned"
  },
  {
    "alpha2": "GN",
    "alpha3": "GIN",
    "countryCallingCodes": [
      "+224"
    ],
    "currencies": [
      "GNF"
    ],
    "ioc": "GUI",
    "languages": [
      "fra"
    ],
    "name": "Guinea",
    "status": "assigned"
  },
  {
    "alpha2": "GP",
    "alpha3": "GLP",
    "countryCallingCodes": [
      "+590"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "Guadeloupe",
    "status": "assigned"
  },
  {
    "alpha2": "GQ",
    "alpha3": "GNQ",
    "countryCallingCodes": [
      "+240"
    ],
    "currencies": [
      "XAF"
    ],
    "ioc": "GEQ",
    "languages": [
      "spa",
      "fra",
      "por"
    ],
    "name": "Equatorial Guinea",
    "status": "assigned"
  },
  {
    "alpha2": "GR",
    "alpha3": "GRC",
    "countryCallingCodes": [
      "+30"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "GRE",
    "languages": [
      "ell"
    ],
    "name": "Greece",
    "status": "assigned"
  },
  {
    "alpha2": "GS",
    "alpha3": "SGS",
    "countryCallingCodes": [],
    "currencies": [
      "GBP"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "South Georgia And The South Sandwich Islands",
    "status": "assigned"
  },
  {
    "alpha2": "GT",
    "alpha3": "GTM",
    "countryCallingCodes": [
      "+502"
    ],
    "currencies": [
      "GTQ"
    ],
    "ioc": "GUA",
    "languages": [
      "spa"
    ],
    "name": "Guatemala",
    "status": "assigned"
  },
  {
    "alpha2": "GU",
    "alpha3": "GUM",
    "countryCallingCodes": [
      "+1 671"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "GUM",
    "languages": [
      "eng"
    ],
    "name": "Guam",
    "status": "assigned"
  },
  {
    "alpha2": "GW",
    "alpha3": "GNB",
    "countryCallingCodes": [
      "+245"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "GBS",
    "languages": [
      "por"
    ],
    "name": "Guinea-bissau",
    "status": "assigned"
  },
  {
    "alpha2": "GY",
    "alpha3": "GUY",
    "countryCallingCodes": [
      "+592"
    ],
    "currencies": [
      "GYD"
    ],
    "ioc": "GUY",
    "languages": [
      "eng"
    ],
    "name": "Guyana",
    "status": "assigned"
  },
  {
    "alpha2": "HK",
    "alpha3": "HKG",
    "countryCallingCodes": [
      "+852"
    ],
    "currencies": [
      "HKD"
    ],
    "ioc": "HKG",
    "languages": [
      "zho",
      "eng"
    ],
    "name": "Hong Kong",
    "status": "assigned"
  },
  {
    "alpha2": "HM",
    "alpha3": "HMD",
    "countryCallingCodes": [],
    "currencies": [
      "AUD"
    ],
    "ioc": "",
    "languages": [],
    "name": "Heard Island And McDonald Islands",
    "status": "assigned"
  },
  {
    "alpha2": "HN",
    "alpha3": "HND",
    "countryCallingCodes": [
      "+504"
    ],
    "currencies": [
      "HNL"
    ],
    "ioc": "HON",
    "languages": [
      "spa"
    ],
    "name": "Honduras",
    "status": "assigned"
  },
  {
    "alpha2": "HR",
    "alpha3": "HRV",
    "countryCallingCodes": [
      "+385"
    ],
    "currencies": [
      "HRK"
    ],
    "ioc": "CRO",
    "languages": [
      "hrv"
    ],
    "name": "Croatia",
    "status": "assigned"
  },
  {
    "alpha2": "HT",
    "alpha3": "HTI",
    "countryCallingCodes": [
      "+509"
    ],
    "currencies": [
      "HTG",
      "USD"
    ],
    "ioc": "HAI",
    "languages": [
      "fra",
      "hat"
    ],
    "name": "Haiti",
    "status": "assigned"
  },
  {
    "alpha2": "HU",
    "alpha3": "HUN",
    "countryCallingCodes": [
      "+36"
    ],
    "currencies": [
      "HUF"
    ],
    "ioc": "HUN",
    "languages": [
      "hun"
    ],
    "name": "Hungary",
    "status": "assigned"
  },
  {
    "alpha2": "IC",
    "alpha3": "",
    "countryCallingCodes": [],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [],
    "name": "Canary Islands",
    "status": "reserved"
  },
  {
    "alpha2": "ID",
    "alpha3": "IDN",
    "countryCallingCodes": [
      "+62"
    ],
    "currencies": [
      "IDR"
    ],
    "ioc": "INA",
    "languages": [
      "ind"
    ],
    "name": "Indonesia",
    "status": "assigned"
  },
  {
    "alpha2": "IE",
    "alpha3": "IRL",
    "countryCallingCodes": [
      "+353"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "IRL",
    "languages": [
      "eng",
      "gle"
    ],
    "name": "Ireland",
    "status": "assigned"
  },
  {
    "alpha2": "IL",
    "alpha3": "ISR",
    "countryCallingCodes": [
      "+972"
    ],
    "currencies": [
      "ILS"
    ],
    "ioc": "ISR",
    "languages": [
      "heb",
      "ara",
      "eng"
    ],
    "name": "Israel",
    "status": "assigned"
  },
  {
    "alpha2": "IM",
    "alpha3": "IMN",
    "countryCallingCodes": [
      "+44"
    ],
    "currencies": [
      "GBP"
    ],
    "ioc": "",
    "languages": [
      "eng",
      "glv"
    ],
    "name": "Isle Of Man",
    "status": "assigned"
  },
  {
    "alpha2": "IN",
    "alpha3": "IND",
    "countryCallingCodes": [
      "+91"
    ],
    "currencies": [
      "INR"
    ],
    "ioc": "IND",
    "languages": [
      "eng",
      "hin"
    ],
    "name": "India",
    "status": "assigned"
  },
  {
    "alpha2": "IO",
    "alpha3": "IOT",
    "countryCallingCodes": [
      "+246"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "British Indian Ocean Territory",
    "status": "assigned"
  },
  {
    "alpha2": "IQ",
    "alpha3": "IRQ",
    "countryCallingCodes": [
      "+964"
    ],
    "currencies": [
      "IQD"
    ],
    "ioc": "IRQ",
    "languages": [
      "ara",
      "kur"
    ],
    "name": "Iraq",
    "status": "assigned"
  },
  {
    "alpha2": "IR",
    "alpha3": "IRN",
    "countryCallingCodes": [
      "+98"
    ],
    "currencies": [
      "IRR"
    ],
    "ioc": "IRI",
    "languages": [
      "fas"
    ],
    "name": "Iran, Islamic Republic Of",
    "status": "assigned"
  },
  {
    "alpha2": "IS",
    "alpha3": "ISL",
    "countryCallingCodes": [
      "+354"
    ],
    "currencies": [
      "ISK"
    ],
    "ioc": "ISL",
    "languages": [
      "isl"
    ],
    "name": "Iceland",
    "status": "assigned"
  },
  {
    "alpha2": "IT",
    "alpha3": "ITA",
    "countryCallingCodes": [
      "+39"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "ITA",
    "languages": [
      "ita"
    ],
    "name": "Italy",
    "status": "assigned"
  },
  {
    "alpha2": "JE",
    "alpha3": "JEY",
    "countryCallingCodes": [
      "+44"
    ],
    "currencies": [
      "GBP"
    ],
    "ioc": "JCI",
    "languages": [
      "eng",
      "fra"
    ],
    "name": "Jersey",
    "status": "assigned"
  },
  {
    "alpha2": "JM",
    "alpha3": "JAM",
    "countryCallingCodes": [
      "+1 876"
    ],
    "currencies": [
      "JMD"
    ],
    "ioc": "JAM",
    "languages": [
      "eng"
    ],
    "name": "Jamaica",
    "status": "assigned"
  },
  {
    "alpha2": "JO",
    "alpha3": "JOR",
    "countryCallingCodes": [
      "+962"
    ],
    "currencies": [
      "JOD"
    ],
    "ioc": "JOR",
    "languages": [
      "ara"
    ],
    "name": "Jordan",
    "status": "assigned"
  },
  {
    "alpha2": "JP",
    "alpha3": "JPN",
    "countryCallingCodes": [
      "+81"
    ],
    "currencies": [
      "JPY"
    ],
    "ioc": "JPN",
    "languages": [
      "jpn"
    ],
    "name": "Japan",
    "status": "assigned"
  },
  {
    "alpha2": "KE",
    "alpha3": "KEN",
    "countryCallingCodes": [
      "+254"
    ],
    "currencies": [
      "KES"
    ],
    "ioc": "KEN",
    "languages": [
      "eng",
      "swa"
    ],
    "name": "Kenya",
    "status": "assigned"
  },
  {
    "alpha2": "KG",
    "alpha3": "KGZ",
    "countryCallingCodes": [
      "+996"
    ],
    "currencies": [
      "KGS"
    ],
    "ioc": "KGZ",
    "languages": [
      "rus"
    ],
    "name": "Kyrgyzstan",
    "status": "assigned"
  },
  {
    "alpha2": "KH",
    "alpha3": "KHM",
    "countryCallingCodes": [
      "+855"
    ],
    "currencies": [
      "KHR"
    ],
    "ioc": "CAM",
    "languages": [
      "khm"
    ],
    "name": "Cambodia",
    "status": "assigned"
  },
  {
    "alpha2": "KI",
    "alpha3": "KIR",
    "countryCallingCodes": [
      "+686"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "KIR",
    "languages": [
      "eng"
    ],
    "name": "Kiribati",
    "status": "assigned"
  },
  {
    "alpha2": "KM",
    "alpha3": "COM",
    "countryCallingCodes": [
      "+269"
    ],
    "currencies": [
      "KMF"
    ],
    "ioc": "COM",
    "languages": [
      "ara",
      "fra"
    ],
    "name": "Comoros",
    "status": "assigned"
  },
  {
    "alpha2": "KN",
    "alpha3": "KNA",
    "countryCallingCodes": [
      "+1 869"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "SKN",
    "languages": [
      "eng"
    ],
    "name": "Saint Kitts And Nevis",
    "status": "assigned"
  },
  {
    "alpha2": "KP",
    "alpha3": "PRK",
    "countryCallingCodes": [
      "+850"
    ],
    "currencies": [
      "KPW"
    ],
    "ioc": "PRK",
    "languages": [
      "kor"
    ],
    "name": "Korea, Democratic People's Republic Of",
    "status": "assigned"
  },
  {
    "alpha2": "KR",
    "alpha3": "KOR",
    "countryCallingCodes": [
      "+82"
    ],
    "currencies": [
      "KRW"
    ],
    "ioc": "KOR",
    "languages": [
      "kor"
    ],
    "name": "Korea, Republic Of",
    "status": "assigned"
  },
  {
    "alpha2": "KW",
    "alpha3": "KWT",
    "countryCallingCodes": [
      "+965"
    ],
    "currencies": [
      "KWD"
    ],
    "ioc": "KUW",
    "languages": [
      "ara"
    ],
    "name": "Kuwait",
    "status": "assigned"
  },
  {
    "alpha2": "KY",
    "alpha3": "CYM",
    "countryCallingCodes": [
      "+1 345"
    ],
    "currencies": [
      "KYD"
    ],
    "ioc": "CAY",
    "languages": [
      "eng"
    ],
    "name": "Cayman Islands",
    "status": "assigned"
  },
  {
    "alpha2": "KZ",
    "alpha3": "KAZ",
    "countryCallingCodes": [
      "+7",
      "+7 6",
      "+7 7"
    ],
    "currencies": [
      "KZT"
    ],
    "ioc": "KAZ",
    "languages": [
      "kaz",
      "rus"
    ],
    "name": "Kazakhstan",
    "status": "assigned"
  },
  {
    "alpha2": "LA",
    "alpha3": "LAO",
    "countryCallingCodes": [
      "+856"
    ],
    "currencies": [
      "LAK"
    ],
    "ioc": "LAO",
    "languages": [
      "lao"
    ],
    "name": "Lao People's Democratic Republic",
    "status": "assigned"
  },
  {
    "alpha2": "LB",
    "alpha3": "LBN",
    "countryCallingCodes": [
      "+961"
    ],
    "currencies": [
      "LBP"
    ],
    "ioc": "LIB",
    "languages": [
      "ara",
      "hye"
    ],
    "name": "Lebanon",
    "status": "assigned"
  },
  {
    "alpha2": "LC",
    "alpha3": "LCA",
    "countryCallingCodes": [
      "+1 758"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "LCA",
    "languages": [
      "eng"
    ],
    "name": "Saint Lucia",
    "status": "assigned"
  },
  {
    "alpha2": "LI",
    "alpha3": "LIE",
    "countryCallingCodes": [
      "+423"
    ],
    "currencies": [
      "CHF"
    ],
    "ioc": "LIE",
    "languages": [
      "deu"
    ],
    "name": "Liechtenstein",
    "status": "assigned"
  },
  {
    "alpha2": "LK",
    "alpha3": "LKA",
    "countryCallingCodes": [
      "+94"
    ],
    "currencies": [
      "LKR"
    ],
    "ioc": "SRI",
    "languages": [
      "sin",
      "tam"
    ],
    "name": "Sri Lanka",
    "status": "assigned"
  },
  {
    "alpha2": "LR",
    "alpha3": "LBR",
    "countryCallingCodes": [
      "+231"
    ],
    "currencies": [
      "LRD"
    ],
    "ioc": "LBR",
    "languages": [
      "eng"
    ],
    "name": "Liberia",
    "status": "assigned"
  },
  {
    "alpha2": "LS",
    "alpha3": "LSO",
    "countryCallingCodes": [
      "+266"
    ],
    "currencies": [
      "LSL",
      "ZAR"
    ],
    "ioc": "LES",
    "languages": [
      "eng",
      "sot"
    ],
    "name": "Lesotho",
    "status": "assigned"
  },
  {
    "alpha2": "LT",
    "alpha3": "LTU",
    "countryCallingCodes": [
      "+370"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "LTU",
    "languages": [
      "lit"
    ],
    "name": "Lithuania",
    "status": "assigned"
  },
  {
    "alpha2": "LU",
    "alpha3": "LUX",
    "countryCallingCodes": [
      "+352"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "LUX",
    "languages": [
      "fra",
      "deu",
      "ltz"
    ],
    "name": "Luxembourg",
    "status": "assigned"
  },
  {
    "alpha2": "LV",
    "alpha3": "LVA",
    "countryCallingCodes": [
      "+371"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "LAT",
    "languages": [
      "lav"
    ],
    "name": "Latvia",
    "status": "assigned"
  },
  {
    "alpha2": "LY",
    "alpha3": "LBY",
    "countryCallingCodes": [
      "+218"
    ],
    "currencies": [
      "LYD"
    ],
    "ioc": "LBA",
    "languages": [
      "ara"
    ],
    "name": "Libya",
    "status": "assigned"
  },
  {
    "alpha2": "MA",
    "alpha3": "MAR",
    "countryCallingCodes": [
      "+212"
    ],
    "currencies": [
      "MAD"
    ],
    "ioc": "MAR",
    "languages": [
      "ara"
    ],
    "name": "Morocco",
    "status": "assigned"
  },
  {
    "alpha2": "MC",
    "alpha3": "MCO",
    "countryCallingCodes": [
      "+377"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "MON",
    "languages": [
      "fra"
    ],
    "name": "Monaco",
    "status": "assigned"
  },
  {
    "alpha2": "MD",
    "alpha3": "MDA",
    "countryCallingCodes": [
      "+373"
    ],
    "currencies": [
      "MDL"
    ],
    "ioc": "MDA",
    "languages": [
      "ron"
    ],
    "name": "Moldova",
    "status": "assigned"
  },
  {
    "alpha2": "ME",
    "alpha3": "MNE",
    "countryCallingCodes": [
      "+382"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "MNE",
    "languages": [
      "mot"
    ],
    "name": "Montenegro",
    "status": "assigned"
  },
  {
    "alpha2": "MF",
    "alpha3": "MAF",
    "countryCallingCodes": [
      "+590"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "Saint Martin",
    "status": "assigned"
  },
  {
    "alpha2": "MG",
    "alpha3": "MDG",
    "countryCallingCodes": [
      "+261"
    ],
    "currencies": [
      "MGA"
    ],
    "ioc": "MAD",
    "languages": [
      "fra",
      "mlg"
    ],
    "name": "Madagascar",
    "status": "assigned"
  },
  {
    "alpha2": "MH",
    "alpha3": "MHL",
    "countryCallingCodes": [
      "+692"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "MHL",
    "languages": [
      "eng",
      "mah"
    ],
    "name": "Marshall Islands",
    "status": "assigned"
  },
  {
    "alpha2": "MK",
    "alpha3": "MKD",
    "countryCallingCodes": [
      "+389"
    ],
    "currencies": [
      "MKD"
    ],
    "ioc": "MKD",
    "languages": [
      "mkd"
    ],
    "name": "Macedonia, The Former Yugoslav Republic Of",
    "status": "assigned"
  },
  {
    "alpha2": "ML",
    "alpha3": "MLI",
    "countryCallingCodes": [
      "+223"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "MLI",
    "languages": [
      "fra"
    ],
    "name": "Mali",
    "status": "assigned"
  },
  {
    "alpha2": "MM",
    "alpha3": "MMR",
    "countryCallingCodes": [
      "+95"
    ],
    "currencies": [
      "MMK"
    ],
    "ioc": "MYA",
    "languages": [
      "mya"
    ],
    "name": "Myanmar",
    "status": "assigned"
  },
  {
    "alpha2": "MN",
    "alpha3": "MNG",
    "countryCallingCodes": [
      "+976"
    ],
    "currencies": [
      "MNT"
    ],
    "ioc": "MGL",
    "languages": [
      "mon"
    ],
    "name": "Mongolia",
    "status": "assigned"
  },
  {
    "alpha2": "MO",
    "alpha3": "MAC",
    "countryCallingCodes": [
      "+853"
    ],
    "currencies": [
      "MOP"
    ],
    "ioc": "MAC",
    "languages": [
      "zho",
      "por"
    ],
    "name": "Macao",
    "status": "assigned"
  },
  {
    "alpha2": "MP",
    "alpha3": "MNP",
    "countryCallingCodes": [
      "+1 670"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Northern Mariana Islands",
    "status": "assigned"
  },
  {
    "alpha2": "MQ",
    "alpha3": "MTQ",
    "countryCallingCodes": [
      "+596"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [],
    "name": "Martinique",
    "status": "assigned"
  },
  {
    "alpha2": "MR",
    "alpha3": "MRT",
    "countryCallingCodes": [
      "+222"
    ],
    "currencies": [
      "MRO"
    ],
    "ioc": "MTN",
    "languages": [
      "ara",
      "fra"
    ],
    "name": "Mauritania",
    "status": "assigned"
  },
  {
    "alpha2": "MS",
    "alpha3": "MSR",
    "countryCallingCodes": [
      "+1 664"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "",
    "languages": [],
    "name": "Montserrat",
    "status": "assigned"
  },
  {
    "alpha2": "MT",
    "alpha3": "MLT",
    "countryCallingCodes": [
      "+356"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "MLT",
    "languages": [
      "mlt",
      "eng"
    ],
    "name": "Malta",
    "status": "assigned"
  },
  {
    "alpha2": "MU",
    "alpha3": "MUS",
    "countryCallingCodes": [
      "+230"
    ],
    "currencies": [
      "MUR"
    ],
    "ioc": "MRI",
    "languages": [
      "eng",
      "fra"
    ],
    "name": "Mauritius",
    "status": "assigned"
  },
  {
    "alpha2": "MV",
    "alpha3": "MDV",
    "countryCallingCodes": [
      "+960"
    ],
    "currencies": [
      "MVR"
    ],
    "ioc": "MDV",
    "languages": [
      "div"
    ],
    "name": "Maldives",
    "status": "assigned"
  },
  {
    "alpha2": "MW",
    "alpha3": "MWI",
    "countryCallingCodes": [
      "+265"
    ],
    "currencies": [
      "MWK"
    ],
    "ioc": "MAW",
    "languages": [
      "eng",
      "nya"
    ],
    "name": "Malawi",
    "status": "assigned"
  },
  {
    "alpha2": "MX",
    "alpha3": "MEX",
    "countryCallingCodes": [
      "+52"
    ],
    "currencies": [
      "MXN",
      "MXV"
    ],
    "ioc": "MEX",
    "languages": [
      "spa"
    ],
    "name": "Mexico",
    "status": "assigned"
  },
  {
    "alpha2": "MY",
    "alpha3": "MYS",
    "countryCallingCodes": [
      "+60"
    ],
    "currencies": [
      "MYR"
    ],
    "ioc": "MAS",
    "languages": [
      "msa",
      "eng"
    ],
    "name": "Malaysia",
    "status": "assigned"
  },
  {
    "alpha2": "MZ",
    "alpha3": "MOZ",
    "countryCallingCodes": [
      "+258"
    ],
    "currencies": [
      "MZN"
    ],
    "ioc": "MOZ",
    "languages": [
      "por"
    ],
    "name": "Mozambique",
    "status": "assigned"
  },
  {
    "alpha2": "NA",
    "alpha3": "NAM",
    "countryCallingCodes": [
      "+264"
    ],
    "currencies": [
      "NAD",
      "ZAR"
    ],
    "ioc": "NAM",
    "languages": [
      "eng"
    ],
    "name": "Namibia",
    "status": "assigned"
  },
  {
    "alpha2": "NC",
    "alpha3": "NCL",
    "countryCallingCodes": [
      "+687"
    ],
    "currencies": [
      "XPF"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "New Caledonia",
    "status": "assigned"
  },
  {
    "alpha2": "NE",
    "alpha3": "NER",
    "countryCallingCodes": [
      "+227"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "NIG",
    "languages": [
      "fra"
    ],
    "name": "Niger",
    "status": "assigned"
  },
  {
    "alpha2": "NF",
    "alpha3": "NFK",
    "countryCallingCodes": [
      "+672"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Norfolk Island",
    "status": "assigned"
  },
  {
    "alpha2": "NG",
    "alpha3": "NGA",
    "countryCallingCodes": [
      "+234"
    ],
    "currencies": [
      "NGN"
    ],
    "ioc": "NGR",
    "languages": [
      "eng"
    ],
    "name": "Nigeria",
    "status": "assigned"
  },
  {
    "alpha2": "NI",
    "alpha3": "NIC",
    "countryCallingCodes": [
      "+505"
    ],
    "currencies": [
      "NIO"
    ],
    "ioc": "NCA",
    "languages": [
      "spa"
    ],
    "name": "Nicaragua",
    "status": "assigned"
  },
  {
    "alpha2": "NL",
    "alpha3": "NLD",
    "countryCallingCodes": [
      "+31"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "NED",
    "languages": [
      "nld"
    ],
    "name": "Netherlands",
    "status": "assigned"
  },
  {
    "alpha2": "NO",
    "alpha3": "NOR",
    "countryCallingCodes": [
      "+47"
    ],
    "currencies": [
      "NOK"
    ],
    "ioc": "NOR",
    "languages": [
      "nor"
    ],
    "name": "Norway",
    "status": "assigned"
  },
  {
    "alpha2": "NP",
    "alpha3": "NPL",
    "countryCallingCodes": [
      "+977"
    ],
    "currencies": [
      "NPR"
    ],
    "ioc": "NEP",
    "languages": [
      "nep"
    ],
    "name": "Nepal",
    "status": "assigned"
  },
  {
    "alpha2": "NR",
    "alpha3": "NRU",
    "countryCallingCodes": [
      "+674"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "NRU",
    "languages": [
      "eng",
      "nau"
    ],
    "name": "Nauru",
    "status": "assigned"
  },
  {
    "alpha2": "NU",
    "alpha3": "NIU",
    "countryCallingCodes": [
      "+683"
    ],
    "currencies": [
      "NZD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Niue",
    "status": "assigned"
  },
  {
    "alpha2": "NZ",
    "alpha3": "NZL",
    "countryCallingCodes": [
      "+64"
    ],
    "currencies": [
      "NZD"
    ],
    "ioc": "NZL",
    "languages": [
      "eng"
    ],
    "name": "New Zealand",
    "status": "assigned"
  },
  {
    "alpha2": "OM",
    "alpha3": "OMN",
    "countryCallingCodes": [
      "+968"
    ],
    "currencies": [
      "OMR"
    ],
    "ioc": "OMA",
    "languages": [
      "ara"
    ],
    "name": "Oman",
    "status": "assigned"
  },
  {
    "alpha2": "PA",
    "alpha3": "PAN",
    "countryCallingCodes": [
      "+507"
    ],
    "currencies": [
      "PAB",
      "USD"
    ],
    "ioc": "PAN",
    "languages": [
      "spa"
    ],
    "name": "Panama",
    "status": "assigned"
  },
  {
    "alpha2": "PE",
    "alpha3": "PER",
    "countryCallingCodes": [
      "+51"
    ],
    "currencies": [
      "PEN"
    ],
    "ioc": "PER",
    "languages": [
      "spa",
      "aym",
      "que"
    ],
    "name": "Peru",
    "status": "assigned"
  },
  {
    "alpha2": "PF",
    "alpha3": "PYF",
    "countryCallingCodes": [
      "+689"
    ],
    "currencies": [
      "XPF"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "French Polynesia",
    "status": "assigned"
  },
  {
    "alpha2": "PG",
    "alpha3": "PNG",
    "countryCallingCodes": [
      "+675"
    ],
    "currencies": [
      "PGK"
    ],
    "ioc": "PNG",
    "languages": [
      "eng"
    ],
    "name": "Papua New Guinea",
    "status": "assigned"
  },
  {
    "alpha2": "PH",
    "alpha3": "PHL",
    "countryCallingCodes": [
      "+63"
    ],
    "currencies": [
      "PHP"
    ],
    "ioc": "PHI",
    "languages": [
      "eng"
    ],
    "name": "Philippines",
    "status": "assigned"
  },
  {
    "alpha2": "PK",
    "alpha3": "PAK",
    "countryCallingCodes": [
      "+92"
    ],
    "currencies": [
      "PKR"
    ],
    "ioc": "PAK",
    "languages": [
      "urd",
      "eng"
    ],
    "name": "Pakistan",
    "status": "assigned"
  },
  {
    "alpha2": "PL",
    "alpha3": "POL",
    "countryCallingCodes": [
      "+48"
    ],
    "currencies": [
      "PLN"
    ],
    "ioc": "POL",
    "languages": [
      "pol"
    ],
    "name": "Poland",
    "status": "assigned"
  },
  {
    "alpha2": "PM",
    "alpha3": "SPM",
    "countryCallingCodes": [
      "+508"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Saint Pierre And Miquelon",
    "status": "assigned"
  },
  {
    "alpha2": "PN",
    "alpha3": "PCN",
    "countryCallingCodes": [
      "+872"
    ],
    "currencies": [
      "NZD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Pitcairn",
    "status": "assigned"
  },
  {
    "alpha2": "PR",
    "alpha3": "PRI",
    "countryCallingCodes": [
      "+1 787",
      "+1 939"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "PUR",
    "languages": [
      "spa",
      "eng"
    ],
    "name": "Puerto Rico",
    "status": "assigned"
  },
  {
    "alpha2": "PS",
    "alpha3": "PSE",
    "countryCallingCodes": [
      "+970"
    ],
    "currencies": [
      "JOD",
      "EGP",
      "ILS"
    ],
    "ioc": "PLE",
    "languages": [
      "ara"
    ],
    "name": "Palestinian Territory, Occupied",
    "status": "assigned"
  },
  {
    "alpha2": "PT",
    "alpha3": "PRT",
    "countryCallingCodes": [
      "+351"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "POR",
    "languages": [
      "por"
    ],
    "name": "Portugal",
    "status": "assigned"
  },
  {
    "alpha2": "PW",
    "alpha3": "PLW",
    "countryCallingCodes": [
      "+680"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "PLW",
    "languages": [
      "eng"
    ],
    "name": "Palau",
    "status": "assigned"
  },
  {
    "alpha2": "PY",
    "alpha3": "PRY",
    "countryCallingCodes": [
      "+595"
    ],
    "currencies": [
      "PYG"
    ],
    "ioc": "PAR",
    "languages": [
      "spa"
    ],
    "name": "Paraguay",
    "status": "assigned"
  },
  {
    "alpha2": "QA",
    "alpha3": "QAT",
    "countryCallingCodes": [
      "+974"
    ],
    "currencies": [
      "QAR"
    ],
    "ioc": "QAT",
    "languages": [
      "ara"
    ],
    "name": "Qatar",
    "status": "assigned"
  },
  {
    "alpha2": "RE",
    "alpha3": "REU",
    "countryCallingCodes": [
      "+262"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "Reunion",
    "status": "assigned"
  },
  {
    "alpha2": "RO",
    "alpha3": "ROU",
    "countryCallingCodes": [
      "+40"
    ],
    "currencies": [
      "RON"
    ],
    "ioc": "ROU",
    "languages": [
      "ron"
    ],
    "name": "Romania",
    "status": "assigned"
  },
  {
    "alpha2": "RS",
    "alpha3": "SRB",
    "countryCallingCodes": [
      "+381"
    ],
    "currencies": [
      "RSD"
    ],
    "ioc": "SRB",
    "languages": [
      "srp"
    ],
    "name": "Serbia",
    "status": "assigned"
  },
  {
    "alpha2": "RU",
    "alpha3": "RUS",
    "countryCallingCodes": [
      "+7",
      "+7 3",
      "+7 4",
      "+7 8"
    ],
    "currencies": [
      "RUB"
    ],
    "ioc": "RUS",
    "languages": [
      "rus"
    ],
    "name": "Russian Federation",
    "status": "assigned"
  },
  {
    "alpha2": "RW",
    "alpha3": "RWA",
    "countryCallingCodes": [
      "+250"
    ],
    "currencies": [
      "RWF"
    ],
    "ioc": "RWA",
    "languages": [
      "eng",
      "fra",
      "kin"
    ],
    "name": "Rwanda",
    "status": "assigned"
  },
  {
    "alpha2": "SA",
    "alpha3": "SAU",
    "countryCallingCodes": [
      "+966"
    ],
    "currencies": [
      "SAR"
    ],
    "ioc": "KSA",
    "languages": [
      "ara"
    ],
    "name": "Saudi Arabia",
    "status": "assigned"
  },
  {
    "alpha2": "SB",
    "alpha3": "SLB",
    "countryCallingCodes": [
      "+677"
    ],
    "currencies": [
      "SBD"
    ],
    "ioc": "SOL",
    "languages": [
      "eng"
    ],
    "name": "Solomon Islands",
    "status": "assigned"
  },
  {
    "alpha2": "SC",
    "alpha3": "SYC",
    "countryCallingCodes": [
      "+248"
    ],
    "currencies": [
      "SCR"
    ],
    "ioc": "SEY",
    "languages": [
      "eng",
      "fra"
    ],
    "name": "Seychelles",
    "status": "assigned"
  },
  {
    "alpha2": "SD",
    "alpha3": "SDN",
    "countryCallingCodes": [
      "+249"
    ],
    "currencies": [
      "SDG"
    ],
    "ioc": "SUD",
    "languages": [
      "ara",
      "eng"
    ],
    "name": "Sudan",
    "status": "assigned"
  },
  {
    "alpha2": "SE",
    "alpha3": "SWE",
    "countryCallingCodes": [
      "+46"
    ],
    "currencies": [
      "SEK"
    ],
    "ioc": "SWE",
    "languages": [
      "swe"
    ],
    "name": "Sweden",
    "status": "assigned"
  },
  {
    "alpha2": "SG",
    "alpha3": "SGP",
    "countryCallingCodes": [
      "+65"
    ],
    "currencies": [
      "SGD"
    ],
    "ioc": "SIN",
    "languages": [
      "eng",
      "zho",
      "msa",
      "tam"
    ],
    "name": "Singapore",
    "status": "assigned"
  },
  {
    "alpha2": "SH",
    "alpha3": "SHN",
    "countryCallingCodes": [
      "+290"
    ],
    "currencies": [
      "SHP"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Saint Helena, Ascension And Tristan Da Cunha",
    "status": "assigned"
  },
  {
    "alpha2": "SI",
    "alpha3": "SVN",
    "countryCallingCodes": [
      "+386"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "SLO",
    "languages": [
      "slv"
    ],
    "name": "Slovenia",
    "status": "assigned"
  },
  {
    "alpha2": "SJ",
    "alpha3": "SJM",
    "countryCallingCodes": [
      "+47"
    ],
    "currencies": [
      "NOK"
    ],
    "ioc": "",
    "languages": [],
    "name": "Svalbard And Jan Mayen",
    "status": "assigned"
  },
  {
    "alpha2": "SK",
    "alpha3": "SVK",
    "countryCallingCodes": [
      "+421"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "SVK",
    "languages": [
      "slk"
    ],
    "name": "Slovakia",
    "status": "assigned"
  },
  {
    "alpha2": "SL",
    "alpha3": "SLE",
    "countryCallingCodes": [
      "+232"
    ],
    "currencies": [
      "SLL"
    ],
    "ioc": "SLE",
    "languages": [
      "eng"
    ],
    "name": "Sierra Leone",
    "status": "assigned"
  },
  {
    "alpha2": "SM",
    "alpha3": "SMR",
    "countryCallingCodes": [
      "+378"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "SMR",
    "languages": [
      "ita"
    ],
    "name": "San Marino",
    "status": "assigned"
  },
  {
    "alpha2": "SN",
    "alpha3": "SEN",
    "countryCallingCodes": [
      "+221"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "SEN",
    "languages": [
      "fra"
    ],
    "name": "Senegal",
    "status": "assigned"
  },
  {
    "alpha2": "SO",
    "alpha3": "SOM",
    "countryCallingCodes": [
      "+252"
    ],
    "currencies": [
      "SOS"
    ],
    "ioc": "SOM",
    "languages": [
      "som"
    ],
    "name": "Somalia",
    "status": "assigned"
  },
  {
    "alpha2": "SR",
    "alpha3": "SUR",
    "countryCallingCodes": [
      "+597"
    ],
    "currencies": [
      "SRD"
    ],
    "ioc": "SUR",
    "languages": [
      "nld"
    ],
    "name": "Suriname",
    "status": "assigned"
  },
  {
    "alpha2": "SS",
    "alpha3": "SSD",
    "countryCallingCodes": [
      "+211"
    ],
    "currencies": [
      "SSP"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "South Sudan",
    "status": "assigned"
  },
  {
    "alpha2": "ST",
    "alpha3": "STP",
    "countryCallingCodes": [
      "+239"
    ],
    "currencies": [
      "STD"
    ],
    "ioc": "STP",
    "languages": [
      "por"
    ],
    "name": "São Tomé and Príncipe",
    "status": "assigned"
  },
  {
    "alpha2": "SU",
    "alpha3": "",
    "countryCallingCodes": [],
    "currencies": [
      "RUB"
    ],
    "ioc": "",
    "languages": [
      "rus"
    ],
    "name": "USSR",
    "status": "reserved"
  },
  {
    "alpha2": "SV",
    "alpha3": "SLV",
    "countryCallingCodes": [
      "+503"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "ESA",
    "languages": [
      "spa"
    ],
    "name": "El Salvador",
    "status": "assigned"
  },
  {
    "alpha2": "SX",
    "alpha3": "SXM",
    "countryCallingCodes": [
      "+1 721"
    ],
    "currencies": [
      "ANG"
    ],
    "ioc": "",
    "languages": [
      "nld"
    ],
    "name": "Sint Maarten",
    "status": "assigned"
  },
  {
    "alpha2": "SY",
    "alpha3": "SYR",
    "countryCallingCodes": [
      "+963"
    ],
    "currencies": [
      "SYP"
    ],
    "ioc": "SYR",
    "languages": [
      "ara"
    ],
    "name": "Syrian Arab Republic",
    "status": "assigned"
  },
  {
    "alpha2": "SZ",
    "alpha3": "SWZ",
    "countryCallingCodes": [
      "+268"
    ],
    "currencies": [
      "SZL"
    ],
    "ioc": "SWZ",
    "languages": [
      "eng",
      "ssw"
    ],
    "name": "Swaziland",
    "status": "assigned"
  },
  {
    "alpha2": "TA",
    "alpha3": "",
    "countryCallingCodes": [
      "+290"
    ],
    "currencies": [
      "GBP"
    ],
    "ioc": "",
    "languages": [],
    "name": "Tristan de Cunha",
    "status": "reserved"
  },
  {
    "alpha2": "TC",
    "alpha3": "TCA",
    "countryCallingCodes": [
      "+1 649"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Turks And Caicos Islands",
    "status": "assigned"
  },
  {
    "alpha2": "TD",
    "alpha3": "TCD",
    "countryCallingCodes": [
      "+235"
    ],
    "currencies": [
      "XAF"
    ],
    "ioc": "CHA",
    "languages": [
      "ara",
      "fra"
    ],
    "name": "Chad",
    "status": "assigned"
  },
  {
    "alpha2": "TF",
    "alpha3": "ATF",
    "countryCallingCodes": [],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "French Southern Territories",
    "status": "assigned"
  },
  {
    "alpha2": "TG",
    "alpha3": "TGO",
    "countryCallingCodes": [
      "+228"
    ],
    "currencies": [
      "XOF"
    ],
    "ioc": "TOG",
    "languages": [
      "fra"
    ],
    "name": "Togo",
    "status": "assigned"
  },
  {
    "alpha2": "TH",
    "alpha3": "THA",
    "countryCallingCodes": [
      "+66"
    ],
    "currencies": [
      "THB"
    ],
    "ioc": "THA",
    "languages": [
      "tha"
    ],
    "name": "Thailand",
    "status": "assigned"
  },
  {
    "alpha2": "TJ",
    "alpha3": "TJK",
    "countryCallingCodes": [
      "+992"
    ],
    "currencies": [
      "TJS"
    ],
    "ioc": "TJK",
    "languages": [
      "tgk",
      "rus"
    ],
    "name": "Tajikistan",
    "status": "assigned"
  },
  {
    "alpha2": "TK",
    "alpha3": "TKL",
    "countryCallingCodes": [
      "+690"
    ],
    "currencies": [
      "NZD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "Tokelau",
    "status": "assigned"
  },
  {
    "alpha2": "TL",
    "alpha3": "TLS",
    "countryCallingCodes": [
      "+670"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "TLS",
    "languages": [
      "por"
    ],
    "name": "Timor-Leste, Democratic Republic of",
    "status": "assigned"
  },
  {
    "alpha2": "TM",
    "alpha3": "TKM",
    "countryCallingCodes": [
      "+993"
    ],
    "currencies": [
      "TMT"
    ],
    "ioc": "TKM",
    "languages": [
      "tuk",
      "rus"
    ],
    "name": "Turkmenistan",
    "status": "assigned"
  },
  {
    "alpha2": "TN",
    "alpha3": "TUN",
    "countryCallingCodes": [
      "+216"
    ],
    "currencies": [
      "TND"
    ],
    "ioc": "TUN",
    "languages": [
      "ara"
    ],
    "name": "Tunisia",
    "status": "assigned"
  },
  {
    "alpha2": "TO",
    "alpha3": "TON",
    "countryCallingCodes": [
      "+676"
    ],
    "currencies": [
      "TOP"
    ],
    "ioc": "TGA",
    "languages": [
      "eng"
    ],
    "name": "Tonga",
    "status": "assigned"
  },
  {
    "alpha2": "TR",
    "alpha3": "TUR",
    "countryCallingCodes": [
      "+90"
    ],
    "currencies": [
      "TRY"
    ],
    "ioc": "TUR",
    "languages": [
      "tur"
    ],
    "name": "Turkey",
    "status": "assigned"
  },
  {
    "alpha2": "TT",
    "alpha3": "TTO",
    "countryCallingCodes": [
      "+1 868"
    ],
    "currencies": [
      "TTD"
    ],
    "ioc": "TRI",
    "languages": [
      "eng"
    ],
    "name": "Trinidad And Tobago",
    "status": "assigned"
  },
  {
    "alpha2": "TV",
    "alpha3": "TUV",
    "countryCallingCodes": [
      "+688"
    ],
    "currencies": [
      "AUD"
    ],
    "ioc": "TUV",
    "languages": [
      "eng"
    ],
    "name": "Tuvalu",
    "status": "assigned"
  },
  {
    "alpha2": "TW",
    "alpha3": "TWN",
    "countryCallingCodes": [
      "+886"
    ],
    "currencies": [
      "TWD"
    ],
    "ioc": "TPE",
    "languages": [
      "zho"
    ],
    "name": "Taiwan",
    "status": "assigned"
  },
  {
    "alpha2": "TZ",
    "alpha3": "TZA",
    "countryCallingCodes": [
      "+255"
    ],
    "currencies": [
      "TZS"
    ],
    "ioc": "TAN",
    "languages": [
      "swa",
      "eng"
    ],
    "name": "Tanzania, United Republic Of",
    "status": "assigned"
  },
  {
    "alpha2": "UA",
    "alpha3": "UKR",
    "countryCallingCodes": [
      "+380"
    ],
    "currencies": [
      "UAH"
    ],
    "ioc": "UKR",
    "languages": [
      "ukr",
      "rus"
    ],
    "name": "Ukraine",
    "status": "assigned"
  },
  {
    "alpha2": "UG",
    "alpha3": "UGA",
    "countryCallingCodes": [
      "+256"
    ],
    "currencies": [
      "UGX"
    ],
    "ioc": "UGA",
    "languages": [
      "eng",
      "swa"
    ],
    "name": "Uganda",
    "status": "assigned"
  },
  {
    "alpha2": "UK",
    "alpha3": "",
    "countryCallingCodes": [],
    "currencies": [
      "GBP"
    ],
    "ioc": "",
    "languages": [
      "eng",
      "cor",
      "gle",
      "gla",
      "cym"
    ],
    "name": "United Kingdom",
    "status": "reserved"
  },
  {
    "alpha2": "UM",
    "alpha3": "UMI",
    "countryCallingCodes": [
      "+1"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "",
    "languages": [
      "eng"
    ],
    "name": "United States Minor Outlying Islands",
    "status": "assigned"
  },
  {
    "alpha2": "US",
    "alpha3": "USA",
    "countryCallingCodes": [
      "+1"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "USA",
    "languages": [
      "eng"
    ],
    "name": "United States",
    "status": "assigned"
  },
  {
    "alpha2": "UY",
    "alpha3": "URY",
    "countryCallingCodes": [
      "+598"
    ],
    "currencies": [
      "UYU",
      "UYI"
    ],
    "ioc": "URU",
    "languages": [
      "spa"
    ],
    "name": "Uruguay",
    "status": "assigned"
  },
  {
    "alpha2": "UZ",
    "alpha3": "UZB",
    "countryCallingCodes": [
      "+998"
    ],
    "currencies": [
      "UZS"
    ],
    "ioc": "UZB",
    "languages": [
      "uzb",
      "rus"
    ],
    "name": "Uzbekistan",
    "status": "assigned"
  },
  {
    "alpha2": "VA",
    "alpha3": "VAT",
    "countryCallingCodes": [
      "+379",
      "+39"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "ita"
    ],
    "name": "Vatican City State",
    "status": "assigned"
  },
  {
    "alpha2": "VC",
    "alpha3": "VCT",
    "countryCallingCodes": [
      "+1 784"
    ],
    "currencies": [
      "XCD"
    ],
    "ioc": "VIN",
    "languages": [
      "eng"
    ],
    "name": "Saint Vincent And The Grenadines",
    "status": "assigned"
  },
  {
    "alpha2": "VE",
    "alpha3": "VEN",
    "countryCallingCodes": [
      "+58"
    ],
    "currencies": [
      "VEF"
    ],
    "ioc": "VEN",
    "languages": [
      "spa"
    ],
    "name": "Venezuela, Bolivarian Republic Of",
    "status": "assigned"
  },
  {
    "alpha2": "VG",
    "alpha3": "VGB",
    "countryCallingCodes": [
      "+1 284"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "ISV",
    "languages": [
      "eng"
    ],
    "name": "Virgin Islands (British)",
    "status": "assigned"
  },
  {
    "alpha2": "VI",
    "alpha3": "VIR",
    "countryCallingCodes": [
      "+1 340"
    ],
    "currencies": [
      "USD"
    ],
    "ioc": "ISV",
    "languages": [
      "eng"
    ],
    "name": "Virgin Islands (US)",
    "status": "assigned"
  },
  {
    "alpha2": "VN",
    "alpha3": "VNM",
    "countryCallingCodes": [
      "+84"
    ],
    "currencies": [
      "VND"
    ],
    "ioc": "VIE",
    "languages": [
      "vie"
    ],
    "name": "Viet Nam",
    "status": "assigned"
  },
  {
    "alpha2": "VU",
    "alpha3": "VUT",
    "countryCallingCodes": [
      "+678"
    ],
    "currencies": [
      "VUV"
    ],
    "ioc": "VAN",
    "languages": [
      "bis",
      "eng",
      "fra"
    ],
    "name": "Vanuatu",
    "status": "assigned"
  },
  {
    "alpha2": "WF",
    "alpha3": "WLF",
    "countryCallingCodes": [
      "+681"
    ],
    "currencies": [
      "XPF"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "Wallis And Futuna",
    "status": "assigned"
  },
  {
    "alpha2": "WS",
    "alpha3": "WSM",
    "countryCallingCodes": [
      "+685"
    ],
    "currencies": [
      "WST"
    ],
    "ioc": "SAM",
    "languages": [
      "eng",
      "smo"
    ],
    "name": "Samoa",
    "status": "assigned"
  },
  {
    "alpha2": "XK",
    "alpha3": "",
    "countryCallingCodes": [
      "+383"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "sqi",
      "srp",
      "bos",
      "tur",
      "rom"
    ],
    "name": "Kosovo",
    "status": "user assigned"
  },
  {
    "alpha2": "YE",
    "alpha3": "YEM",
    "countryCallingCodes": [
      "+967"
    ],
    "currencies": [
      "YER"
    ],
    "ioc": "YEM",
    "languages": [
      "ara"
    ],
    "name": "Yemen",
    "status": "assigned"
  },
  {
    "alpha2": "YT",
    "alpha3": "MYT",
    "countryCallingCodes": [
      "+262"
    ],
    "currencies": [
      "EUR"
    ],
    "ioc": "",
    "languages": [
      "fra"
    ],
    "name": "Mayotte",
    "status": "assigned"
  },
  {
    "alpha2": "ZA",
    "alpha3": "ZAF",
    "countryCallingCodes": [
      "+27"
    ],
    "currencies": [
      "ZAR"
    ],
    "ioc": "RSA",
    "languages": [
      "afr",
      "eng",
      "nbl",
      "som",
      "tso",
      "ven",
      "xho",
      "zul"
    ],
    "name": "South Africa",
    "status": "assigned"
  },
  {
    "alpha2": "ZM",
    "alpha3": "ZMB",
    "countryCallingCodes": [
      "+260"
    ],
    "currencies": [
      "ZMW"
    ],
    "ioc": "ZAM",
    "languages": [
      "eng"
    ],
    "name": "Zambia",
    "status": "assigned"
  },
  {
    "alpha2": "ZW",
    "alpha3": "ZWE",
    "countryCallingCodes": [
      "+263"
    ],
    "currencies": [
      "USD",
      "ZAR",
      "BWP",
      "GBP",
      "EUR"
    ],
    "ioc": "ZIM",
    "languages": [
      "eng",
      "sna",
      "nde"
    ],
    "name": "Zimbabwe",
    "status": "assigned"
  }
]

},{}],3:[function(require,module,exports){
module.exports=[
  {
    "code": "AED",
    "decimals": 2,
    "name": "United Arab Emirates dirham",
    "number": "784"
  },
  {
    "code": "AFN",
    "decimals": 2,
    "name": "Afghan afghani",
    "number": "971"
  },
  {
    "code": "ALL",
    "decimals": 2,
    "name": "Albanian lek",
    "number": "8"
  },
  {
    "code": "AMD",
    "decimals": 2,
    "name": "Armenian dram",
    "number": "51"
  },
  {
    "code": "ANG",
    "decimals": 2,
    "name": "Netherlands Antillean guilder",
    "number": "532"
  },
  {
    "code": "AOA",
    "decimals": 2,
    "name": "Angolan kwanza",
    "number": "973"
  },
  {
    "code": "ARS",
    "decimals": 2,
    "name": "Argentine peso",
    "number": "32"
  },
  {
    "code": "AUD",
    "decimals": 2,
    "name": "Australian dollar",
    "number": "36"
  },
  {
    "code": "AWG",
    "decimals": 2,
    "name": "Aruban florin",
    "number": "533"
  },
  {
    "code": "AZN",
    "decimals": 2,
    "name": "Azerbaijani manat",
    "number": "944"
  },
  {
    "code": "BAM",
    "decimals": 2,
    "name": "Bosnia and Herzegovina convertible mark",
    "number": "977"
  },
  {
    "code": "BBD",
    "decimals": 2,
    "name": "Barbados dollar",
    "number": "52"
  },
  {
    "code": "BDT",
    "decimals": 2,
    "name": "Bangladeshi taka",
    "number": "50"
  },
  {
    "code": "BGN",
    "decimals": 2,
    "name": "Bulgarian lev",
    "number": "975"
  },
  {
    "code": "BHD",
    "decimals": 3,
    "name": "Bahraini dinar",
    "number": "48"
  },
  {
    "code": "BIF",
    "decimals": 0,
    "name": "Burundian franc",
    "number": "108"
  },
  {
    "code": "BMD",
    "decimals": 2,
    "name": "Bermudian dollar (customarily known as Bermuda dollar)",
    "number": "60"
  },
  {
    "code": "BND",
    "decimals": 2,
    "name": "Brunei dollar",
    "number": "96"
  },
  {
    "code": "BOB",
    "decimals": 2,
    "name": "Boliviano",
    "number": "68"
  },
  {
    "code": "BOV",
    "decimals": 2,
    "name": "Bolivian Mvdol (funds code)",
    "number": "984"
  },
  {
    "code": "BRL",
    "decimals": 2,
    "name": "Brazilian real",
    "number": "986"
  },
  {
    "code": "BSD",
    "decimals": 2,
    "name": "Bahamian dollar",
    "number": "44"
  },
  {
    "code": "BTN",
    "decimals": 2,
    "name": "Bhutanese ngultrum",
    "number": "64"
  },
  {
    "code": "BWP",
    "decimals": 2,
    "name": "Botswana pula",
    "number": "72"
  },
  {
    "code": "BYR",
    "decimals": 0,
    "name": "Belarusian ruble",
    "number": "974"
  },
  {
    "code": "BZD",
    "decimals": 2,
    "name": "Belize dollar",
    "number": "84"
  },
  {
    "code": "CAD",
    "decimals": 2,
    "name": "Canadian dollar",
    "number": "124"
  },
  {
    "code": "CDF",
    "decimals": 2,
    "name": "Congolese franc",
    "number": "976"
  },
  {
    "code": "CHE",
    "decimals": 2,
    "name": "WIR Euro (complementary currency)",
    "number": "947"
  },
  {
    "code": "CHF",
    "decimals": 2,
    "name": "Swiss franc",
    "number": "756"
  },
  {
    "code": "CHW",
    "decimals": 2,
    "name": "WIR Franc (complementary currency)",
    "number": "948"
  },
  {
    "code": "CLF",
    "decimals": 0,
    "name": "Unidad de Fomento (funds code)",
    "number": "990"
  },
  {
    "code": "CLP",
    "decimals": 0,
    "name": "Chilean peso",
    "number": "152"
  },
  {
    "code": "CNY",
    "decimals": 2,
    "name": "Chinese yuan",
    "number": "156"
  },
  {
    "code": "COP",
    "decimals": 2,
    "name": "Colombian peso",
    "number": "170"
  },
  {
    "code": "COU",
    "decimals": 2,
    "name": "Unidad de Valor Real",
    "number": "970"
  },
  {
    "code": "CRC",
    "decimals": 2,
    "name": "Costa Rican colon",
    "number": "188"
  },
  {
    "code": "CUC",
    "decimals": 2,
    "name": "Cuban convertible peso",
    "number": "931"
  },
  {
    "code": "CUP",
    "decimals": 2,
    "name": "Cuban peso",
    "number": "192"
  },
  {
    "code": "CVE",
    "decimals": 0,
    "name": "Cape Verde escudo",
    "number": "132"
  },
  {
    "code": "CZK",
    "decimals": 2,
    "name": "Czech koruna",
    "number": "203"
  },
  {
    "code": "DJF",
    "decimals": 0,
    "name": "Djiboutian franc",
    "number": "262"
  },
  {
    "code": "DKK",
    "decimals": 2,
    "name": "Danish krone",
    "number": "208"
  },
  {
    "code": "DOP",
    "decimals": 2,
    "name": "Dominican peso",
    "number": "214"
  },
  {
    "code": "DZD",
    "decimals": 2,
    "name": "Algerian dinar",
    "number": "12"
  },
  {
    "code": "EGP",
    "decimals": 2,
    "name": "Egyptian pound",
    "number": "818"
  },
  {
    "code": "ERN",
    "decimals": 2,
    "name": "Eritrean nakfa",
    "number": "232"
  },
  {
    "code": "ETB",
    "decimals": 2,
    "name": "Ethiopian birr",
    "number": "230"
  },
  {
    "code": "EUR",
    "decimals": 2,
    "name": "Euro",
    "number": "978"
  },
  {
    "code": "FJD",
    "decimals": 2,
    "name": "Fiji dollar",
    "number": "242"
  },
  {
    "code": "FKP",
    "decimals": 2,
    "name": "Falkland Islands pound",
    "number": "238"
  },
  {
    "code": "GBP",
    "decimals": 2,
    "name": "Pound sterling",
    "number": "826"
  },
  {
    "code": "GEL",
    "decimals": 2,
    "name": "Georgian lari",
    "number": "981"
  },
  {
    "code": "GHS",
    "decimals": 2,
    "name": "Ghanaian cedi",
    "number": "936"
  },
  {
    "code": "GIP",
    "decimals": 2,
    "name": "Gibraltar pound",
    "number": "292"
  },
  {
    "code": "GMD",
    "decimals": 2,
    "name": "Gambian dalasi",
    "number": "270"
  },
  {
    "code": "GNF",
    "decimals": 0,
    "name": "Guinean franc",
    "number": "324"
  },
  {
    "code": "GTQ",
    "decimals": 2,
    "name": "Guatemalan quetzal",
    "number": "320"
  },
  {
    "code": "GYD",
    "decimals": 2,
    "name": "Guyanese dollar",
    "number": "328"
  },
  {
    "code": "HKD",
    "decimals": 2,
    "name": "Hong Kong dollar",
    "number": "344"
  },
  {
    "code": "HNL",
    "decimals": 2,
    "name": "Honduran lempira",
    "number": "340"
  },
  {
    "code": "HRK",
    "decimals": 2,
    "name": "Croatian kuna",
    "number": "191"
  },
  {
    "code": "HTG",
    "decimals": 2,
    "name": "Haitian gourde",
    "number": "332"
  },
  {
    "code": "HUF",
    "decimals": 2,
    "name": "Hungarian forint",
    "number": "348"
  },
  {
    "code": "IDR",
    "decimals": 2,
    "name": "Indonesian rupiah",
    "number": "360"
  },
  {
    "code": "ILS",
    "decimals": 2,
    "name": "Israeli new shekel",
    "number": "376"
  },
  {
    "code": "INR",
    "decimals": 2,
    "name": "Indian rupee",
    "number": "356"
  },
  {
    "code": "IQD",
    "decimals": 3,
    "name": "Iraqi dinar",
    "number": "368"
  },
  {
    "code": "IRR",
    "decimals": 0,
    "name": "Iranian rial",
    "number": "364"
  },
  {
    "code": "ISK",
    "decimals": 0,
    "name": "Icelandic króna",
    "number": "352"
  },
  {
    "code": "JMD",
    "decimals": 2,
    "name": "Jamaican dollar",
    "number": "388"
  },
  {
    "code": "JOD",
    "decimals": 3,
    "name": "Jordanian dinar",
    "number": "400"
  },
  {
    "code": "JPY",
    "decimals": 0,
    "name": "Japanese yen",
    "number": "392"
  },
  {
    "code": "KES",
    "decimals": 2,
    "name": "Kenyan shilling",
    "number": "404"
  },
  {
    "code": "KGS",
    "decimals": 2,
    "name": "Kyrgyzstani som",
    "number": "417"
  },
  {
    "code": "KHR",
    "decimals": 2,
    "name": "Cambodian riel",
    "number": "116"
  },
  {
    "code": "KMF",
    "decimals": 0,
    "name": "Comoro franc",
    "number": "174"
  },
  {
    "code": "KPW",
    "decimals": 0,
    "name": "North Korean won",
    "number": "408"
  },
  {
    "code": "KRW",
    "decimals": 0,
    "name": "South Korean won",
    "number": "410"
  },
  {
    "code": "KWD",
    "decimals": 3,
    "name": "Kuwaiti dinar",
    "number": "414"
  },
  {
    "code": "KYD",
    "decimals": 2,
    "name": "Cayman Islands dollar",
    "number": "136"
  },
  {
    "code": "KZT",
    "decimals": 2,
    "name": "Kazakhstani tenge",
    "number": "398"
  },
  {
    "code": "LAK",
    "decimals": 0,
    "name": "Lao kip",
    "number": "418"
  },
  {
    "code": "LBP",
    "decimals": 0,
    "name": "Lebanese pound",
    "number": "422"
  },
  {
    "code": "LKR",
    "decimals": 2,
    "name": "Sri Lankan rupee",
    "number": "144"
  },
  {
    "code": "LRD",
    "decimals": 2,
    "name": "Liberian dollar",
    "number": "430"
  },
  {
    "code": "LSL",
    "decimals": 2,
    "name": "Lesotho loti",
    "number": "426"
  },
  {
    "code": "LTL",
    "decimals": 2,
    "name": "Lithuanian litas",
    "number": "440"
  },
  {
    "code": "LVL",
    "decimals": 2,
    "name": "Latvian lats",
    "number": "428"
  },
  {
    "code": "LYD",
    "decimals": 3,
    "name": "Libyan dinar",
    "number": "434"
  },
  {
    "code": "MAD",
    "decimals": 2,
    "name": "Moroccan dirham",
    "number": "504"
  },
  {
    "code": "MDL",
    "decimals": 2,
    "name": "Moldovan leu",
    "number": "498"
  },
  {
    "code": "MGA",
    "decimals": 0,
    "name": "Malagasy ariary",
    "number": "969"
  },
  {
    "code": "MKD",
    "decimals": 0,
    "name": "Macedonian denar",
    "number": "807"
  },
  {
    "code": "MMK",
    "decimals": 0,
    "name": "Myanma kyat",
    "number": "104"
  },
  {
    "code": "MNT",
    "decimals": 2,
    "name": "Mongolian tugrik",
    "number": "496"
  },
  {
    "code": "MOP",
    "decimals": 2,
    "name": "Macanese pataca",
    "number": "446"
  },
  {
    "code": "MRO",
    "decimals": 0,
    "name": "Mauritanian ouguiya",
    "number": "478"
  },
  {
    "code": "MUR",
    "decimals": 2,
    "name": "Mauritian rupee",
    "number": "480"
  },
  {
    "code": "MVR",
    "decimals": 2,
    "name": "Maldivian rufiyaa",
    "number": "462"
  },
  {
    "code": "MWK",
    "decimals": 2,
    "name": "Malawian kwacha",
    "number": "454"
  },
  {
    "code": "MXN",
    "decimals": 2,
    "name": "Mexican peso",
    "number": "484"
  },
  {
    "code": "MXV",
    "decimals": 2,
    "name": "Mexican Unidad de Inversion (UDI) (funds code)",
    "number": "979"
  },
  {
    "code": "MYR",
    "decimals": 2,
    "name": "Malaysian ringgit",
    "number": "458"
  },
  {
    "code": "MZN",
    "decimals": 2,
    "name": "Mozambican metical",
    "number": "943"
  },
  {
    "code": "NAD",
    "decimals": 2,
    "name": "Namibian dollar",
    "number": "516"
  },
  {
    "code": "NGN",
    "decimals": 2,
    "name": "Nigerian naira",
    "number": "566"
  },
  {
    "code": "NIO",
    "decimals": 2,
    "name": "Nicaraguan córdoba",
    "number": "558"
  },
  {
    "code": "NOK",
    "decimals": 2,
    "name": "Norwegian krone",
    "number": "578"
  },
  {
    "code": "NPR",
    "decimals": 2,
    "name": "Nepalese rupee",
    "number": "524"
  },
  {
    "code": "NZD",
    "decimals": 2,
    "name": "New Zealand dollar",
    "number": "554"
  },
  {
    "code": "OMR",
    "decimals": 3,
    "name": "Omani rial",
    "number": "512"
  },
  {
    "code": "PAB",
    "decimals": 2,
    "name": "Panamanian balboa",
    "number": "590"
  },
  {
    "code": "PEN",
    "decimals": 2,
    "name": "Peruvian nuevo sol",
    "number": "604"
  },
  {
    "code": "PGK",
    "decimals": 2,
    "name": "Papua New Guinean kina",
    "number": "598"
  },
  {
    "code": "PHP",
    "decimals": 2,
    "name": "Philippine peso",
    "number": "608"
  },
  {
    "code": "PKR",
    "decimals": 2,
    "name": "Pakistani rupee",
    "number": "586"
  },
  {
    "code": "PLN",
    "decimals": 2,
    "name": "Polish złoty",
    "number": "985"
  },
  {
    "code": "PYG",
    "decimals": 0,
    "name": "Paraguayan guaraní",
    "number": "600"
  },
  {
    "code": "QAR",
    "decimals": 2,
    "name": "Qatari riyal",
    "number": "634"
  },
  {
    "code": "RON",
    "decimals": 2,
    "name": "Romanian new leu",
    "number": "946"
  },
  {
    "code": "RSD",
    "decimals": 2,
    "name": "Serbian dinar",
    "number": "941"
  },
  {
    "code": "RUB",
    "decimals": 2,
    "name": "Russian rouble",
    "number": "643"
  },
  {
    "code": "RWF",
    "decimals": 0,
    "name": "Rwandan franc",
    "number": "646"
  },
  {
    "code": "SAR",
    "decimals": 2,
    "name": "Saudi riyal",
    "number": "682"
  },
  {
    "code": "SBD",
    "decimals": 2,
    "name": "Solomon Islands dollar",
    "number": "90"
  },
  {
    "code": "SCR",
    "decimals": 2,
    "name": "Seychelles rupee",
    "number": "690"
  },
  {
    "code": "SDG",
    "decimals": 2,
    "name": "Sudanese pound",
    "number": "938"
  },
  {
    "code": "SEK",
    "decimals": 2,
    "name": "Swedish krona/kronor",
    "number": "752"
  },
  {
    "code": "SGD",
    "decimals": 2,
    "name": "Singapore dollar",
    "number": "702"
  },
  {
    "code": "SHP",
    "decimals": 2,
    "name": "Saint Helena pound",
    "number": "654"
  },
  {
    "code": "SLL",
    "decimals": 0,
    "name": "Sierra Leonean leone",
    "number": "694"
  },
  {
    "code": "SOS",
    "decimals": 2,
    "name": "Somali shilling",
    "number": "706"
  },
  {
    "code": "SRD",
    "decimals": 2,
    "name": "Surinamese dollar",
    "number": "968"
  },
  {
    "code": "SSP",
    "decimals": 2,
    "name": "South Sudanese pound",
    "number": "728"
  },
  {
    "code": "STD",
    "decimals": 0,
    "name": "São Tomé and Príncipe dobra",
    "number": "678"
  },
  {
    "code": "SYP",
    "decimals": 2,
    "name": "Syrian pound",
    "number": "760"
  },
  {
    "code": "SZL",
    "decimals": 2,
    "name": "Swazi lilangeni",
    "number": "748"
  },
  {
    "code": "THB",
    "decimals": 2,
    "name": "Thai baht",
    "number": "764"
  },
  {
    "code": "TJS",
    "decimals": 2,
    "name": "Tajikistani somoni",
    "number": "972"
  },
  {
    "code": "TMT",
    "decimals": 2,
    "name": "Turkmenistani manat",
    "number": "934"
  },
  {
    "code": "TND",
    "decimals": 3,
    "name": "Tunisian dinar",
    "number": "788"
  },
  {
    "code": "TOP",
    "decimals": 2,
    "name": "Tongan paʻanga",
    "number": "776"
  },
  {
    "code": "TRY",
    "decimals": 2,
    "name": "Turkish lira",
    "number": "949"
  },
  {
    "code": "TTD",
    "decimals": 2,
    "name": "Trinidad and Tobago dollar",
    "number": "780"
  },
  {
    "code": "TWD",
    "decimals": 2,
    "name": "New Taiwan dollar",
    "number": "901"
  },
  {
    "code": "TZS",
    "decimals": 2,
    "name": "Tanzanian shilling",
    "number": "834"
  },
  {
    "code": "UAH",
    "decimals": 2,
    "name": "Ukrainian hryvnia",
    "number": "980"
  },
  {
    "code": "UGX",
    "decimals": 2,
    "name": "Ugandan shilling",
    "number": "800"
  },
  {
    "code": "USD",
    "decimals": 2,
    "name": "United States dollar",
    "number": "840"
  },
  {
    "code": "USN",
    "decimals": 2,
    "name": "United States dollar (next day) (funds code)",
    "number": "997"
  },
  {
    "code": "USS",
    "decimals": 2,
    "name": "United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)",
    "number": "998"
  },
  {
    "code": "UYI",
    "decimals": 0,
    "name": "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
    "number": "940"
  },
  {
    "code": "UYU",
    "decimals": 2,
    "name": "Uruguayan peso",
    "number": "858"
  },
  {
    "code": "UZS",
    "decimals": 2,
    "name": "Uzbekistan som",
    "number": "860"
  },
  {
    "code": "VEF",
    "decimals": 2,
    "name": "Venezuelan bolívar fuerte",
    "number": "937"
  },
  {
    "code": "VND",
    "decimals": 0,
    "name": "Vietnamese dong",
    "number": "704"
  },
  {
    "code": "VUV",
    "decimals": 0,
    "name": "Vanuatu vatu",
    "number": "548"
  },
  {
    "code": "WST",
    "decimals": 2,
    "name": "Samoan tala",
    "number": "882"
  },
  {
    "code": "XAF",
    "decimals": 0,
    "name": "CFA franc BEAC",
    "number": "950"
  },
  {
    "code": "XAG",
    "decimals": null,
    "name": "Silver (one troy ounce)",
    "number": "961"
  },
  {
    "code": "XAU",
    "decimals": null,
    "name": "Gold (one troy ounce)",
    "number": "959"
  },
  {
    "code": "XBA",
    "decimals": null,
    "name": "European Composite Unit (EURCO) (bond market unit)",
    "number": "955"
  },
  {
    "code": "XBB",
    "decimals": null,
    "name": "European Monetary Unit (E.M.U.-6) (bond market unit)",
    "number": "956"
  },
  {
    "code": "XBC",
    "decimals": null,
    "name": "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
    "number": "957"
  },
  {
    "code": "XBD",
    "decimals": null,
    "name": "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
    "number": "958"
  },
  {
    "code": "XCD",
    "decimals": 2,
    "name": "East Caribbean dollar",
    "number": "951"
  },
  {
    "code": "XDR",
    "decimals": null,
    "name": "Special drawing rights",
    "number": "960"
  },
  {
    "code": "XFU",
    "decimals": null,
    "name": "UIC franc (special settlement currency)",
    "number": "Nil"
  },
  {
    "code": "XOF",
    "decimals": 0,
    "name": "CFA franc BCEAO",
    "number": "952"
  },
  {
    "code": "XPD",
    "decimals": null,
    "name": "Palladium (one troy ounce)",
    "number": "964"
  },
  {
    "code": "XPF",
    "decimals": 0,
    "name": "CFP franc",
    "number": "953"
  },
  {
    "code": "XPT",
    "decimals": null,
    "name": "Platinum (one troy ounce)",
    "number": "962"
  },
  {
    "code": "XTS",
    "decimals": null,
    "name": "Code reserved for testing purposes",
    "number": "963"
  },
  {
    "code": "XXX",
    "decimals": null,
    "name": "No currency",
    "number": "999"
  },
  {
    "code": "YER",
    "decimals": 2,
    "name": "Yemeni rial",
    "number": "886"
  },
  {
    "code": "ZAR",
    "decimals": 2,
    "name": "South African rand",
    "number": "710"
  },
  {
    "code": "ZMW",
    "decimals": 2,
    "name": "Zambian kwacha",
    "number": "967"
  }
]

},{}],4:[function(require,module,exports){
module.exports=[
  {
    "alpha2": "aa",
    "alpha3": "aar",
    "bibliographic": "",
    "name": "Afar"
  },
  {
    "alpha2": "ab",
    "alpha3": "abk",
    "bibliographic": "",
    "name": "Abkhazian"
  },
  {
    "alpha2": "",
    "alpha3": "ace",
    "bibliographic": "",
    "name": "Achinese"
  },
  {
    "alpha2": "",
    "alpha3": "ach",
    "bibliographic": "",
    "name": "Acoli"
  },
  {
    "alpha2": "",
    "alpha3": "ada",
    "bibliographic": "",
    "name": "Adangme"
  },
  {
    "alpha2": "",
    "alpha3": "ady",
    "bibliographic": "",
    "name": "Adygei"
  },
  {
    "alpha2": "",
    "alpha3": "ady",
    "bibliographic": "",
    "name": "Adyghe"
  },
  {
    "alpha2": "",
    "alpha3": "afa",
    "bibliographic": "",
    "name": "Afro-Asiatic languages"
  },
  {
    "alpha2": "",
    "alpha3": "afh",
    "bibliographic": "",
    "name": "Afrihili"
  },
  {
    "alpha2": "af",
    "alpha3": "afr",
    "bibliographic": "",
    "name": "Afrikaans"
  },
  {
    "alpha2": "",
    "alpha3": "ain",
    "bibliographic": "",
    "name": "Ainu"
  },
  {
    "alpha2": "ak",
    "alpha3": "aka",
    "bibliographic": "",
    "name": "Akan"
  },
  {
    "alpha2": "",
    "alpha3": "akk",
    "bibliographic": "",
    "name": "Akkadian"
  },
  {
    "alpha2": "",
    "alpha3": "ale",
    "bibliographic": "",
    "name": "Aleut"
  },
  {
    "alpha2": "",
    "alpha3": "alg",
    "bibliographic": "",
    "name": "Algonquian languages"
  },
  {
    "alpha2": "",
    "alpha3": "alt",
    "bibliographic": "",
    "name": "Southern Altai"
  },
  {
    "alpha2": "am",
    "alpha3": "amh",
    "bibliographic": "",
    "name": "Amharic"
  },
  {
    "alpha2": "",
    "alpha3": "ang",
    "bibliographic": "",
    "name": "English, Old (ca.450-1100)"
  },
  {
    "alpha2": "",
    "alpha3": "anp",
    "bibliographic": "",
    "name": "Angika"
  },
  {
    "alpha2": "",
    "alpha3": "apa",
    "bibliographic": "",
    "name": "Apache languages"
  },
  {
    "alpha2": "ar",
    "alpha3": "ara",
    "bibliographic": "",
    "name": "Arabic"
  },
  {
    "alpha2": "",
    "alpha3": "arc",
    "bibliographic": "",
    "name": "Imperial Aramaic (700-300 BCE)"
  },
  {
    "alpha2": "",
    "alpha3": "arc",
    "bibliographic": "",
    "name": "Official Aramaic (700-300 BCE)"
  },
  {
    "alpha2": "an",
    "alpha3": "arg",
    "bibliographic": "",
    "name": "Aragonese"
  },
  {
    "alpha2": "",
    "alpha3": "arn",
    "bibliographic": "",
    "name": "Mapuche"
  },
  {
    "alpha2": "",
    "alpha3": "arn",
    "bibliographic": "",
    "name": "Mapudungun"
  },
  {
    "alpha2": "",
    "alpha3": "arp",
    "bibliographic": "",
    "name": "Arapaho"
  },
  {
    "alpha2": "",
    "alpha3": "art",
    "bibliographic": "",
    "name": "Artificial languages"
  },
  {
    "alpha2": "",
    "alpha3": "arw",
    "bibliographic": "",
    "name": "Arawak"
  },
  {
    "alpha2": "as",
    "alpha3": "asm",
    "bibliographic": "",
    "name": "Assamese"
  },
  {
    "alpha2": "",
    "alpha3": "ast",
    "bibliographic": "",
    "name": "Asturian"
  },
  {
    "alpha2": "",
    "alpha3": "ast",
    "bibliographic": "",
    "name": "Asturleonese"
  },
  {
    "alpha2": "",
    "alpha3": "ast",
    "bibliographic": "",
    "name": "Bable"
  },
  {
    "alpha2": "",
    "alpha3": "ast",
    "bibliographic": "",
    "name": "Leonese"
  },
  {
    "alpha2": "",
    "alpha3": "ath",
    "bibliographic": "",
    "name": "Athapascan languages"
  },
  {
    "alpha2": "",
    "alpha3": "aus",
    "bibliographic": "",
    "name": "Australian languages"
  },
  {
    "alpha2": "av",
    "alpha3": "ava",
    "bibliographic": "",
    "name": "Avaric"
  },
  {
    "alpha2": "ae",
    "alpha3": "ave",
    "bibliographic": "",
    "name": "Avestan"
  },
  {
    "alpha2": "",
    "alpha3": "awa",
    "bibliographic": "",
    "name": "Awadhi"
  },
  {
    "alpha2": "ay",
    "alpha3": "aym",
    "bibliographic": "",
    "name": "Aymara"
  },
  {
    "alpha2": "az",
    "alpha3": "aze",
    "bibliographic": "",
    "name": "Azerbaijani"
  },
  {
    "alpha2": "",
    "alpha3": "bad",
    "bibliographic": "",
    "name": "Banda languages"
  },
  {
    "alpha2": "",
    "alpha3": "bai",
    "bibliographic": "",
    "name": "Bamileke languages"
  },
  {
    "alpha2": "ba",
    "alpha3": "bak",
    "bibliographic": "",
    "name": "Bashkir"
  },
  {
    "alpha2": "",
    "alpha3": "bal",
    "bibliographic": "",
    "name": "Baluchi"
  },
  {
    "alpha2": "bm",
    "alpha3": "bam",
    "bibliographic": "",
    "name": "Bambara"
  },
  {
    "alpha2": "",
    "alpha3": "ban",
    "bibliographic": "",
    "name": "Balinese"
  },
  {
    "alpha2": "",
    "alpha3": "bas",
    "bibliographic": "",
    "name": "Basa"
  },
  {
    "alpha2": "",
    "alpha3": "bat",
    "bibliographic": "",
    "name": "Baltic languages"
  },
  {
    "alpha2": "",
    "alpha3": "bej",
    "bibliographic": "",
    "name": "Bedawiyet"
  },
  {
    "alpha2": "",
    "alpha3": "bej",
    "bibliographic": "",
    "name": "Beja"
  },
  {
    "alpha2": "be",
    "alpha3": "bel",
    "bibliographic": "",
    "name": "Belarusian"
  },
  {
    "alpha2": "",
    "alpha3": "bem",
    "bibliographic": "",
    "name": "Bemba"
  },
  {
    "alpha2": "bn",
    "alpha3": "ben",
    "bibliographic": "",
    "name": "Bengali"
  },
  {
    "alpha2": "",
    "alpha3": "ber",
    "bibliographic": "",
    "name": "Berber languages"
  },
  {
    "alpha2": "",
    "alpha3": "bho",
    "bibliographic": "",
    "name": "Bhojpuri"
  },
  {
    "alpha2": "bh",
    "alpha3": "bih",
    "bibliographic": "",
    "name": "Bihari languages"
  },
  {
    "alpha2": "",
    "alpha3": "bik",
    "bibliographic": "",
    "name": "Bikol"
  },
  {
    "alpha2": "",
    "alpha3": "bin",
    "bibliographic": "",
    "name": "Bini"
  },
  {
    "alpha2": "",
    "alpha3": "bin",
    "bibliographic": "",
    "name": "Edo"
  },
  {
    "alpha2": "bi",
    "alpha3": "bis",
    "bibliographic": "",
    "name": "Bislama"
  },
  {
    "alpha2": "",
    "alpha3": "bla",
    "bibliographic": "",
    "name": "Siksika"
  },
  {
    "alpha2": "",
    "alpha3": "bnt",
    "bibliographic": "",
    "name": "Bantu languages"
  },
  {
    "alpha2": "bo",
    "alpha3": "bod",
    "bibliographic": "tib",
    "name": "Tibetan"
  },
  {
    "alpha2": "bs",
    "alpha3": "bos",
    "bibliographic": "",
    "name": "Bosnian"
  },
  {
    "alpha2": "",
    "alpha3": "bra",
    "bibliographic": "",
    "name": "Braj"
  },
  {
    "alpha2": "br",
    "alpha3": "bre",
    "bibliographic": "",
    "name": "Breton"
  },
  {
    "alpha2": "",
    "alpha3": "btk",
    "bibliographic": "",
    "name": "Batak languages"
  },
  {
    "alpha2": "",
    "alpha3": "bua",
    "bibliographic": "",
    "name": "Buriat"
  },
  {
    "alpha2": "",
    "alpha3": "bug",
    "bibliographic": "",
    "name": "Buginese"
  },
  {
    "alpha2": "bg",
    "alpha3": "bul",
    "bibliographic": "",
    "name": "Bulgarian"
  },
  {
    "alpha2": "",
    "alpha3": "byn",
    "bibliographic": "",
    "name": "Bilin"
  },
  {
    "alpha2": "",
    "alpha3": "byn",
    "bibliographic": "",
    "name": "Blin"
  },
  {
    "alpha2": "",
    "alpha3": "cad",
    "bibliographic": "",
    "name": "Caddo"
  },
  {
    "alpha2": "",
    "alpha3": "cai",
    "bibliographic": "",
    "name": "Central American Indian languages"
  },
  {
    "alpha2": "",
    "alpha3": "car",
    "bibliographic": "",
    "name": "Galibi Carib"
  },
  {
    "alpha2": "ca",
    "alpha3": "cat",
    "bibliographic": "",
    "name": "Catalan"
  },
  {
    "alpha2": "ca",
    "alpha3": "cat",
    "bibliographic": "",
    "name": "Valencian"
  },
  {
    "alpha2": "",
    "alpha3": "cau",
    "bibliographic": "",
    "name": "Caucasian languages"
  },
  {
    "alpha2": "",
    "alpha3": "ceb",
    "bibliographic": "",
    "name": "Cebuano"
  },
  {
    "alpha2": "",
    "alpha3": "cel",
    "bibliographic": "",
    "name": "Celtic languages"
  },
  {
    "alpha2": "cs",
    "alpha3": "ces",
    "bibliographic": "cze",
    "name": "Czech"
  },
  {
    "alpha2": "ch",
    "alpha3": "cha",
    "bibliographic": "",
    "name": "Chamorro"
  },
  {
    "alpha2": "",
    "alpha3": "chb",
    "bibliographic": "",
    "name": "Chibcha"
  },
  {
    "alpha2": "ce",
    "alpha3": "che",
    "bibliographic": "",
    "name": "Chechen"
  },
  {
    "alpha2": "",
    "alpha3": "chg",
    "bibliographic": "",
    "name": "Chagatai"
  },
  {
    "alpha2": "",
    "alpha3": "chk",
    "bibliographic": "",
    "name": "Chuukese"
  },
  {
    "alpha2": "",
    "alpha3": "chm",
    "bibliographic": "",
    "name": "Mari"
  },
  {
    "alpha2": "",
    "alpha3": "chn",
    "bibliographic": "",
    "name": "Chinook jargon"
  },
  {
    "alpha2": "",
    "alpha3": "cho",
    "bibliographic": "",
    "name": "Choctaw"
  },
  {
    "alpha2": "",
    "alpha3": "chp",
    "bibliographic": "",
    "name": "Chipewyan"
  },
  {
    "alpha2": "",
    "alpha3": "chp",
    "bibliographic": "",
    "name": "Dene Suline"
  },
  {
    "alpha2": "",
    "alpha3": "chr",
    "bibliographic": "",
    "name": "Cherokee"
  },
  {
    "alpha2": "cu",
    "alpha3": "chu",
    "bibliographic": "",
    "name": "Church Slavic"
  },
  {
    "alpha2": "cu",
    "alpha3": "chu",
    "bibliographic": "",
    "name": "Church Slavonic"
  },
  {
    "alpha2": "cu",
    "alpha3": "chu",
    "bibliographic": "",
    "name": "Old Bulgarian"
  },
  {
    "alpha2": "cu",
    "alpha3": "chu",
    "bibliographic": "",
    "name": "Old Church Slavonic"
  },
  {
    "alpha2": "cu",
    "alpha3": "chu",
    "bibliographic": "",
    "name": "Old Slavonic"
  },
  {
    "alpha2": "cv",
    "alpha3": "chv",
    "bibliographic": "",
    "name": "Chuvash"
  },
  {
    "alpha2": "",
    "alpha3": "chy",
    "bibliographic": "",
    "name": "Cheyenne"
  },
  {
    "alpha2": "",
    "alpha3": "cmc",
    "bibliographic": "",
    "name": "Chamic languages"
  },
  {
    "alpha2": "",
    "alpha3": "cop",
    "bibliographic": "",
    "name": "Coptic"
  },
  {
    "alpha2": "kw",
    "alpha3": "cor",
    "bibliographic": "",
    "name": "Cornish"
  },
  {
    "alpha2": "co",
    "alpha3": "cos",
    "bibliographic": "",
    "name": "Corsican"
  },
  {
    "alpha2": "",
    "alpha3": "cpe",
    "bibliographic": "",
    "name": "Creoles and pidgins, English based"
  },
  {
    "alpha2": "",
    "alpha3": "cpf",
    "bibliographic": "",
    "name": "Creoles and pidgins, French-based"
  },
  {
    "alpha2": "",
    "alpha3": "cpp",
    "bibliographic": "",
    "name": "Creoles and pidgins, Portuguese-based"
  },
  {
    "alpha2": "cr",
    "alpha3": "cre",
    "bibliographic": "",
    "name": "Cree"
  },
  {
    "alpha2": "",
    "alpha3": "crh",
    "bibliographic": "",
    "name": "Crimean Tatar"
  },
  {
    "alpha2": "",
    "alpha3": "crh",
    "bibliographic": "",
    "name": "Crimean Turkish"
  },
  {
    "alpha2": "",
    "alpha3": "crp",
    "bibliographic": "",
    "name": "Creoles and pidgins"
  },
  {
    "alpha2": "",
    "alpha3": "csb",
    "bibliographic": "",
    "name": "Kashubian"
  },
  {
    "alpha2": "",
    "alpha3": "cus",
    "bibliographic": "",
    "name": "Cushitic languages"
  },
  {
    "alpha2": "cy",
    "alpha3": "cym",
    "bibliographic": "wel",
    "name": "Welsh"
  },
  {
    "alpha2": "",
    "alpha3": "dak",
    "bibliographic": "",
    "name": "Dakota"
  },
  {
    "alpha2": "da",
    "alpha3": "dan",
    "bibliographic": "",
    "name": "Danish"
  },
  {
    "alpha2": "",
    "alpha3": "dar",
    "bibliographic": "",
    "name": "Dargwa"
  },
  {
    "alpha2": "",
    "alpha3": "day",
    "bibliographic": "",
    "name": "Land Dayak languages"
  },
  {
    "alpha2": "",
    "alpha3": "del",
    "bibliographic": "",
    "name": "Delaware"
  },
  {
    "alpha2": "",
    "alpha3": "den",
    "bibliographic": "",
    "name": "Slave (Athapascan)"
  },
  {
    "alpha2": "de",
    "alpha3": "deu",
    "bibliographic": "ger",
    "name": "German"
  },
  {
    "alpha2": "",
    "alpha3": "dgr",
    "bibliographic": "",
    "name": "Dogrib"
  },
  {
    "alpha2": "",
    "alpha3": "din",
    "bibliographic": "",
    "name": "Dinka"
  },
  {
    "alpha2": "dv",
    "alpha3": "div",
    "bibliographic": "",
    "name": "Dhivehi"
  },
  {
    "alpha2": "dv",
    "alpha3": "div",
    "bibliographic": "",
    "name": "Divehi"
  },
  {
    "alpha2": "dv",
    "alpha3": "div",
    "bibliographic": "",
    "name": "Maldivian"
  },
  {
    "alpha2": "",
    "alpha3": "doi",
    "bibliographic": "",
    "name": "Dogri"
  },
  {
    "alpha2": "",
    "alpha3": "dra",
    "bibliographic": "",
    "name": "Dravidian languages"
  },
  {
    "alpha2": "",
    "alpha3": "dsb",
    "bibliographic": "",
    "name": "Lower Sorbian"
  },
  {
    "alpha2": "",
    "alpha3": "dua",
    "bibliographic": "",
    "name": "Duala"
  },
  {
    "alpha2": "",
    "alpha3": "dum",
    "bibliographic": "",
    "name": "Dutch, Middle (ca.1050-1350)"
  },
  {
    "alpha2": "",
    "alpha3": "dyu",
    "bibliographic": "",
    "name": "Dyula"
  },
  {
    "alpha2": "dz",
    "alpha3": "dzo",
    "bibliographic": "",
    "name": "Dzongkha"
  },
  {
    "alpha2": "",
    "alpha3": "efi",
    "bibliographic": "",
    "name": "Efik"
  },
  {
    "alpha2": "",
    "alpha3": "egy",
    "bibliographic": "",
    "name": "Egyptian (Ancient)"
  },
  {
    "alpha2": "",
    "alpha3": "eka",
    "bibliographic": "",
    "name": "Ekajuk"
  },
  {
    "alpha2": "el",
    "alpha3": "ell",
    "bibliographic": "gre",
    "name": "Greek, Modern (1453-)"
  },
  {
    "alpha2": "",
    "alpha3": "elx",
    "bibliographic": "",
    "name": "Elamite"
  },
  {
    "alpha2": "en",
    "alpha3": "eng",
    "bibliographic": "",
    "name": "English"
  },
  {
    "alpha2": "",
    "alpha3": "enm",
    "bibliographic": "",
    "name": "English, Middle (1100-1500)"
  },
  {
    "alpha2": "eo",
    "alpha3": "epo",
    "bibliographic": "",
    "name": "Esperanto"
  },
  {
    "alpha2": "et",
    "alpha3": "est",
    "bibliographic": "",
    "name": "Estonian"
  },
  {
    "alpha2": "eu",
    "alpha3": "eus",
    "bibliographic": "baq",
    "name": "Basque"
  },
  {
    "alpha2": "ee",
    "alpha3": "ewe",
    "bibliographic": "",
    "name": "Ewe"
  },
  {
    "alpha2": "",
    "alpha3": "ewo",
    "bibliographic": "",
    "name": "Ewondo"
  },
  {
    "alpha2": "",
    "alpha3": "fan",
    "bibliographic": "",
    "name": "Fang"
  },
  {
    "alpha2": "fo",
    "alpha3": "fao",
    "bibliographic": "",
    "name": "Faroese"
  },
  {
    "alpha2": "fa",
    "alpha3": "fas",
    "bibliographic": "per",
    "name": "Persian"
  },
  {
    "alpha2": "",
    "alpha3": "fat",
    "bibliographic": "",
    "name": "Fanti"
  },
  {
    "alpha2": "fj",
    "alpha3": "fij",
    "bibliographic": "",
    "name": "Fijian"
  },
  {
    "alpha2": "",
    "alpha3": "fil",
    "bibliographic": "",
    "name": "Filipino"
  },
  {
    "alpha2": "",
    "alpha3": "fil",
    "bibliographic": "",
    "name": "Pilipino"
  },
  {
    "alpha2": "fi",
    "alpha3": "fin",
    "bibliographic": "",
    "name": "Finnish"
  },
  {
    "alpha2": "",
    "alpha3": "fiu",
    "bibliographic": "",
    "name": "Finno-Ugrian languages"
  },
  {
    "alpha2": "",
    "alpha3": "fon",
    "bibliographic": "",
    "name": "Fon"
  },
  {
    "alpha2": "fr",
    "alpha3": "fra",
    "bibliographic": "fre",
    "name": "French"
  },
  {
    "alpha2": "",
    "alpha3": "frm",
    "bibliographic": "",
    "name": "French, Middle (ca.1400-1600)"
  },
  {
    "alpha2": "",
    "alpha3": "fro",
    "bibliographic": "",
    "name": "French, Old (842-ca.1400)"
  },
  {
    "alpha2": "",
    "alpha3": "frr",
    "bibliographic": "",
    "name": "Northern Frisian"
  },
  {
    "alpha2": "",
    "alpha3": "frs",
    "bibliographic": "",
    "name": "Eastern Frisian"
  },
  {
    "alpha2": "fy",
    "alpha3": "fry",
    "bibliographic": "",
    "name": "Western Frisian"
  },
  {
    "alpha2": "ff",
    "alpha3": "ful",
    "bibliographic": "",
    "name": "Fulah"
  },
  {
    "alpha2": "",
    "alpha3": "fur",
    "bibliographic": "",
    "name": "Friulian"
  },
  {
    "alpha2": "",
    "alpha3": "gaa",
    "bibliographic": "",
    "name": "Ga"
  },
  {
    "alpha2": "",
    "alpha3": "gay",
    "bibliographic": "",
    "name": "Gayo"
  },
  {
    "alpha2": "",
    "alpha3": "gba",
    "bibliographic": "",
    "name": "Gbaya"
  },
  {
    "alpha2": "",
    "alpha3": "gem",
    "bibliographic": "",
    "name": "Germanic languages"
  },
  {
    "alpha2": "",
    "alpha3": "gez",
    "bibliographic": "",
    "name": "Geez"
  },
  {
    "alpha2": "",
    "alpha3": "gil",
    "bibliographic": "",
    "name": "Gilbertese"
  },
  {
    "alpha2": "gd",
    "alpha3": "gla",
    "bibliographic": "",
    "name": "Gaelic"
  },
  {
    "alpha2": "gd",
    "alpha3": "gla",
    "bibliographic": "",
    "name": "Scottish Gaelic"
  },
  {
    "alpha2": "ga",
    "alpha3": "gle",
    "bibliographic": "",
    "name": "Irish"
  },
  {
    "alpha2": "gl",
    "alpha3": "glg",
    "bibliographic": "",
    "name": "Galician"
  },
  {
    "alpha2": "gv",
    "alpha3": "glv",
    "bibliographic": "",
    "name": "Manx"
  },
  {
    "alpha2": "",
    "alpha3": "gmh",
    "bibliographic": "",
    "name": "German, Middle High (ca.1050-1500)"
  },
  {
    "alpha2": "",
    "alpha3": "goh",
    "bibliographic": "",
    "name": "German, Old High (ca.750-1050)"
  },
  {
    "alpha2": "",
    "alpha3": "gon",
    "bibliographic": "",
    "name": "Gondi"
  },
  {
    "alpha2": "",
    "alpha3": "gor",
    "bibliographic": "",
    "name": "Gorontalo"
  },
  {
    "alpha2": "",
    "alpha3": "got",
    "bibliographic": "",
    "name": "Gothic"
  },
  {
    "alpha2": "",
    "alpha3": "grb",
    "bibliographic": "",
    "name": "Grebo"
  },
  {
    "alpha2": "",
    "alpha3": "grc",
    "bibliographic": "",
    "name": "Greek, Ancient (to 1453)"
  },
  {
    "alpha2": "gn",
    "alpha3": "grn",
    "bibliographic": "",
    "name": "Guarani"
  },
  {
    "alpha2": "",
    "alpha3": "gsw",
    "bibliographic": "",
    "name": "Alemannic"
  },
  {
    "alpha2": "",
    "alpha3": "gsw",
    "bibliographic": "",
    "name": "Alsatian"
  },
  {
    "alpha2": "",
    "alpha3": "gsw",
    "bibliographic": "",
    "name": "Swiss German"
  },
  {
    "alpha2": "gu",
    "alpha3": "guj",
    "bibliographic": "",
    "name": "Gujarati"
  },
  {
    "alpha2": "",
    "alpha3": "gwi",
    "bibliographic": "",
    "name": "Gwich'in"
  },
  {
    "alpha2": "",
    "alpha3": "hai",
    "bibliographic": "",
    "name": "Haida"
  },
  {
    "alpha2": "ht",
    "alpha3": "hat",
    "bibliographic": "",
    "name": "Haitian"
  },
  {
    "alpha2": "ht",
    "alpha3": "hat",
    "bibliographic": "",
    "name": "Haitian Creole"
  },
  {
    "alpha2": "ha",
    "alpha3": "hau",
    "bibliographic": "",
    "name": "Hausa"
  },
  {
    "alpha2": "",
    "alpha3": "haw",
    "bibliographic": "",
    "name": "Hawaiian"
  },
  {
    "alpha2": "he",
    "alpha3": "heb",
    "bibliographic": "",
    "name": "Hebrew"
  },
  {
    "alpha2": "hz",
    "alpha3": "her",
    "bibliographic": "",
    "name": "Herero"
  },
  {
    "alpha2": "",
    "alpha3": "hil",
    "bibliographic": "",
    "name": "Hiligaynon"
  },
  {
    "alpha2": "",
    "alpha3": "him",
    "bibliographic": "",
    "name": "Himachali languages"
  },
  {
    "alpha2": "",
    "alpha3": "him",
    "bibliographic": "",
    "name": "Western Pahari languages"
  },
  {
    "alpha2": "hi",
    "alpha3": "hin",
    "bibliographic": "",
    "name": "Hindi"
  },
  {
    "alpha2": "",
    "alpha3": "hit",
    "bibliographic": "",
    "name": "Hittite"
  },
  {
    "alpha2": "",
    "alpha3": "hmn",
    "bibliographic": "",
    "name": "Hmong"
  },
  {
    "alpha2": "",
    "alpha3": "hmn",
    "bibliographic": "",
    "name": "Mong"
  },
  {
    "alpha2": "ho",
    "alpha3": "hmo",
    "bibliographic": "",
    "name": "Hiri Motu"
  },
  {
    "alpha2": "hr",
    "alpha3": "hrv",
    "bibliographic": "",
    "name": "Croatian"
  },
  {
    "alpha2": "",
    "alpha3": "hsb",
    "bibliographic": "",
    "name": "Upper Sorbian"
  },
  {
    "alpha2": "hu",
    "alpha3": "hun",
    "bibliographic": "",
    "name": "Hungarian"
  },
  {
    "alpha2": "",
    "alpha3": "hup",
    "bibliographic": "",
    "name": "Hupa"
  },
  {
    "alpha2": "hy",
    "alpha3": "hye",
    "bibliographic": "arm",
    "name": "Armenian"
  },
  {
    "alpha2": "",
    "alpha3": "iba",
    "bibliographic": "",
    "name": "Iban"
  },
  {
    "alpha2": "ig",
    "alpha3": "ibo",
    "bibliographic": "",
    "name": "Igbo"
  },
  {
    "alpha2": "io",
    "alpha3": "ido",
    "bibliographic": "",
    "name": "Ido"
  },
  {
    "alpha2": "ii",
    "alpha3": "iii",
    "bibliographic": "",
    "name": "Nuosu"
  },
  {
    "alpha2": "ii",
    "alpha3": "iii",
    "bibliographic": "",
    "name": "Sichuan Yi"
  },
  {
    "alpha2": "",
    "alpha3": "ijo",
    "bibliographic": "",
    "name": "Ijo languages"
  },
  {
    "alpha2": "iu",
    "alpha3": "iku",
    "bibliographic": "",
    "name": "Inuktitut"
  },
  {
    "alpha2": "ie",
    "alpha3": "ile",
    "bibliographic": "",
    "name": "Interlingue"
  },
  {
    "alpha2": "ie",
    "alpha3": "ile",
    "bibliographic": "",
    "name": "Occidental"
  },
  {
    "alpha2": "",
    "alpha3": "ilo",
    "bibliographic": "",
    "name": "Iloko"
  },
  {
    "alpha2": "ia",
    "alpha3": "ina",
    "bibliographic": "",
    "name": "Interlingua (International Auxiliary Language Association)"
  },
  {
    "alpha2": "",
    "alpha3": "inc",
    "bibliographic": "",
    "name": "Indic languages"
  },
  {
    "alpha2": "id",
    "alpha3": "ind",
    "bibliographic": "",
    "name": "Indonesian"
  },
  {
    "alpha2": "",
    "alpha3": "ine",
    "bibliographic": "",
    "name": "Indo-European languages"
  },
  {
    "alpha2": "",
    "alpha3": "inh",
    "bibliographic": "",
    "name": "Ingush"
  },
  {
    "alpha2": "ik",
    "alpha3": "ipk",
    "bibliographic": "",
    "name": "Inupiaq"
  },
  {
    "alpha2": "",
    "alpha3": "ira",
    "bibliographic": "",
    "name": "Iranian languages"
  },
  {
    "alpha2": "",
    "alpha3": "iro",
    "bibliographic": "",
    "name": "Iroquoian languages"
  },
  {
    "alpha2": "is",
    "alpha3": "isl",
    "bibliographic": "ice",
    "name": "Icelandic"
  },
  {
    "alpha2": "it",
    "alpha3": "ita",
    "bibliographic": "",
    "name": "Italian"
  },
  {
    "alpha2": "jv",
    "alpha3": "jav",
    "bibliographic": "",
    "name": "Javanese"
  },
  {
    "alpha2": "",
    "alpha3": "jbo",
    "bibliographic": "",
    "name": "Lojban"
  },
  {
    "alpha2": "ja",
    "alpha3": "jpn",
    "bibliographic": "",
    "name": "Japanese"
  },
  {
    "alpha2": "",
    "alpha3": "jpr",
    "bibliographic": "",
    "name": "Judeo-Persian"
  },
  {
    "alpha2": "",
    "alpha3": "jrb",
    "bibliographic": "",
    "name": "Judeo-Arabic"
  },
  {
    "alpha2": "",
    "alpha3": "kaa",
    "bibliographic": "",
    "name": "Kara-Kalpak"
  },
  {
    "alpha2": "",
    "alpha3": "kab",
    "bibliographic": "",
    "name": "Kabyle"
  },
  {
    "alpha2": "",
    "alpha3": "kac",
    "bibliographic": "",
    "name": "Jingpho"
  },
  {
    "alpha2": "",
    "alpha3": "kac",
    "bibliographic": "",
    "name": "Kachin"
  },
  {
    "alpha2": "kl",
    "alpha3": "kal",
    "bibliographic": "",
    "name": "Greenlandic"
  },
  {
    "alpha2": "kl",
    "alpha3": "kal",
    "bibliographic": "",
    "name": "Kalaallisut"
  },
  {
    "alpha2": "",
    "alpha3": "kam",
    "bibliographic": "",
    "name": "Kamba"
  },
  {
    "alpha2": "kn",
    "alpha3": "kan",
    "bibliographic": "",
    "name": "Kannada"
  },
  {
    "alpha2": "",
    "alpha3": "kar",
    "bibliographic": "",
    "name": "Karen languages"
  },
  {
    "alpha2": "ks",
    "alpha3": "kas",
    "bibliographic": "",
    "name": "Kashmiri"
  },
  {
    "alpha2": "ka",
    "alpha3": "kat",
    "bibliographic": "geo",
    "name": "Georgian"
  },
  {
    "alpha2": "kr",
    "alpha3": "kau",
    "bibliographic": "",
    "name": "Kanuri"
  },
  {
    "alpha2": "",
    "alpha3": "kaw",
    "bibliographic": "",
    "name": "Kawi"
  },
  {
    "alpha2": "kk",
    "alpha3": "kaz",
    "bibliographic": "",
    "name": "Kazakh"
  },
  {
    "alpha2": "",
    "alpha3": "kbd",
    "bibliographic": "",
    "name": "Kabardian"
  },
  {
    "alpha2": "",
    "alpha3": "kha",
    "bibliographic": "",
    "name": "Khasi"
  },
  {
    "alpha2": "",
    "alpha3": "khi",
    "bibliographic": "",
    "name": "Khoisan languages"
  },
  {
    "alpha2": "km",
    "alpha3": "khm",
    "bibliographic": "",
    "name": "Central Khmer"
  },
  {
    "alpha2": "",
    "alpha3": "kho",
    "bibliographic": "",
    "name": "Khotanese"
  },
  {
    "alpha2": "",
    "alpha3": "kho",
    "bibliographic": "",
    "name": "Sakan"
  },
  {
    "alpha2": "ki",
    "alpha3": "kik",
    "bibliographic": "",
    "name": "Gikuyu"
  },
  {
    "alpha2": "ki",
    "alpha3": "kik",
    "bibliographic": "",
    "name": "Kikuyu"
  },
  {
    "alpha2": "rw",
    "alpha3": "kin",
    "bibliographic": "",
    "name": "Kinyarwanda"
  },
  {
    "alpha2": "ky",
    "alpha3": "kir",
    "bibliographic": "",
    "name": "Kirghiz"
  },
  {
    "alpha2": "ky",
    "alpha3": "kir",
    "bibliographic": "",
    "name": "Kyrgyz"
  },
  {
    "alpha2": "",
    "alpha3": "kmb",
    "bibliographic": "",
    "name": "Kimbundu"
  },
  {
    "alpha2": "",
    "alpha3": "kok",
    "bibliographic": "",
    "name": "Konkani"
  },
  {
    "alpha2": "kv",
    "alpha3": "kom",
    "bibliographic": "",
    "name": "Komi"
  },
  {
    "alpha2": "kg",
    "alpha3": "kon",
    "bibliographic": "",
    "name": "Kongo"
  },
  {
    "alpha2": "ko",
    "alpha3": "kor",
    "bibliographic": "",
    "name": "Korean"
  },
  {
    "alpha2": "",
    "alpha3": "kos",
    "bibliographic": "",
    "name": "Kosraean"
  },
  {
    "alpha2": "",
    "alpha3": "kpe",
    "bibliographic": "",
    "name": "Kpelle"
  },
  {
    "alpha2": "",
    "alpha3": "krc",
    "bibliographic": "",
    "name": "Karachay-Balkar"
  },
  {
    "alpha2": "",
    "alpha3": "krl",
    "bibliographic": "",
    "name": "Karelian"
  },
  {
    "alpha2": "",
    "alpha3": "kro",
    "bibliographic": "",
    "name": "Kru languages"
  },
  {
    "alpha2": "",
    "alpha3": "kru",
    "bibliographic": "",
    "name": "Kurukh"
  },
  {
    "alpha2": "kj",
    "alpha3": "kua",
    "bibliographic": "",
    "name": "Kuanyama"
  },
  {
    "alpha2": "kj",
    "alpha3": "kua",
    "bibliographic": "",
    "name": "Kwanyama"
  },
  {
    "alpha2": "",
    "alpha3": "kum",
    "bibliographic": "",
    "name": "Kumyk"
  },
  {
    "alpha2": "ku",
    "alpha3": "kur",
    "bibliographic": "",
    "name": "Kurdish"
  },
  {
    "alpha2": "",
    "alpha3": "kut",
    "bibliographic": "",
    "name": "Kutenai"
  },
  {
    "alpha2": "",
    "alpha3": "lad",
    "bibliographic": "",
    "name": "Ladino"
  },
  {
    "alpha2": "",
    "alpha3": "lah",
    "bibliographic": "",
    "name": "Lahnda"
  },
  {
    "alpha2": "",
    "alpha3": "lam",
    "bibliographic": "",
    "name": "Lamba"
  },
  {
    "alpha2": "lo",
    "alpha3": "lao",
    "bibliographic": "",
    "name": "Lao"
  },
  {
    "alpha2": "la",
    "alpha3": "lat",
    "bibliographic": "",
    "name": "Latin"
  },
  {
    "alpha2": "lv",
    "alpha3": "lav",
    "bibliographic": "",
    "name": "Latvian"
  },
  {
    "alpha2": "",
    "alpha3": "lez",
    "bibliographic": "",
    "name": "Lezghian"
  },
  {
    "alpha2": "li",
    "alpha3": "lim",
    "bibliographic": "",
    "name": "Limburgan"
  },
  {
    "alpha2": "li",
    "alpha3": "lim",
    "bibliographic": "",
    "name": "Limburger"
  },
  {
    "alpha2": "li",
    "alpha3": "lim",
    "bibliographic": "",
    "name": "Limburgish"
  },
  {
    "alpha2": "ln",
    "alpha3": "lin",
    "bibliographic": "",
    "name": "Lingala"
  },
  {
    "alpha2": "lt",
    "alpha3": "lit",
    "bibliographic": "",
    "name": "Lithuanian"
  },
  {
    "alpha2": "",
    "alpha3": "lol",
    "bibliographic": "",
    "name": "Mongo"
  },
  {
    "alpha2": "",
    "alpha3": "loz",
    "bibliographic": "",
    "name": "Lozi"
  },
  {
    "alpha2": "lb",
    "alpha3": "ltz",
    "bibliographic": "",
    "name": "Letzeburgesch"
  },
  {
    "alpha2": "lb",
    "alpha3": "ltz",
    "bibliographic": "",
    "name": "Luxembourgish"
  },
  {
    "alpha2": "",
    "alpha3": "lua",
    "bibliographic": "",
    "name": "Luba-Lulua"
  },
  {
    "alpha2": "lu",
    "alpha3": "lub",
    "bibliographic": "",
    "name": "Luba-Katanga"
  },
  {
    "alpha2": "lg",
    "alpha3": "lug",
    "bibliographic": "",
    "name": "Ganda"
  },
  {
    "alpha2": "",
    "alpha3": "lui",
    "bibliographic": "",
    "name": "Luiseno"
  },
  {
    "alpha2": "",
    "alpha3": "lun",
    "bibliographic": "",
    "name": "Lunda"
  },
  {
    "alpha2": "",
    "alpha3": "luo",
    "bibliographic": "",
    "name": "Luo (Kenya and Tanzania)"
  },
  {
    "alpha2": "",
    "alpha3": "lus",
    "bibliographic": "",
    "name": "Lushai"
  },
  {
    "alpha2": "",
    "alpha3": "mad",
    "bibliographic": "",
    "name": "Madurese"
  },
  {
    "alpha2": "",
    "alpha3": "mag",
    "bibliographic": "",
    "name": "Magahi"
  },
  {
    "alpha2": "mh",
    "alpha3": "mah",
    "bibliographic": "",
    "name": "Marshallese"
  },
  {
    "alpha2": "",
    "alpha3": "mai",
    "bibliographic": "",
    "name": "Maithili"
  },
  {
    "alpha2": "",
    "alpha3": "mak",
    "bibliographic": "",
    "name": "Makasar"
  },
  {
    "alpha2": "ml",
    "alpha3": "mal",
    "bibliographic": "",
    "name": "Malayalam"
  },
  {
    "alpha2": "",
    "alpha3": "man",
    "bibliographic": "",
    "name": "Mandingo"
  },
  {
    "alpha2": "",
    "alpha3": "map",
    "bibliographic": "",
    "name": "Austronesian languages"
  },
  {
    "alpha2": "mr",
    "alpha3": "mar",
    "bibliographic": "",
    "name": "Marathi"
  },
  {
    "alpha2": "",
    "alpha3": "mas",
    "bibliographic": "",
    "name": "Masai"
  },
  {
    "alpha2": "",
    "alpha3": "mdf",
    "bibliographic": "",
    "name": "Moksha"
  },
  {
    "alpha2": "",
    "alpha3": "mdr",
    "bibliographic": "",
    "name": "Mandar"
  },
  {
    "alpha2": "",
    "alpha3": "men",
    "bibliographic": "",
    "name": "Mende"
  },
  {
    "alpha2": "",
    "alpha3": "mga",
    "bibliographic": "",
    "name": "Irish, Middle (900-1200)"
  },
  {
    "alpha2": "",
    "alpha3": "mic",
    "bibliographic": "",
    "name": "Mi'kmaq"
  },
  {
    "alpha2": "",
    "alpha3": "mic",
    "bibliographic": "",
    "name": "Micmac"
  },
  {
    "alpha2": "",
    "alpha3": "min",
    "bibliographic": "",
    "name": "Minangkabau"
  },
  {
    "alpha2": "",
    "alpha3": "mis",
    "bibliographic": "",
    "name": "Uncoded languages"
  },
  {
    "alpha2": "mk",
    "alpha3": "mkd",
    "bibliographic": "mac",
    "name": "Macedonian"
  },
  {
    "alpha2": "",
    "alpha3": "mkh",
    "bibliographic": "",
    "name": "Mon-Khmer languages"
  },
  {
    "alpha2": "mg",
    "alpha3": "mlg",
    "bibliographic": "",
    "name": "Malagasy"
  },
  {
    "alpha2": "mt",
    "alpha3": "mlt",
    "bibliographic": "",
    "name": "Maltese"
  },
  {
    "alpha2": "",
    "alpha3": "mnc",
    "bibliographic": "",
    "name": "Manchu"
  },
  {
    "alpha2": "",
    "alpha3": "mni",
    "bibliographic": "",
    "name": "Manipuri"
  },
  {
    "alpha2": "",
    "alpha3": "mno",
    "bibliographic": "",
    "name": "Manobo languages"
  },
  {
    "alpha2": "",
    "alpha3": "moh",
    "bibliographic": "",
    "name": "Mohawk"
  },
  {
    "alpha2": "mn",
    "alpha3": "mon",
    "bibliographic": "",
    "name": "Mongolian"
  },
  {
    "alpha2": "",
    "alpha3": "mos",
    "bibliographic": "",
    "name": "Mossi"
  },
  {
    "alpha2": "",
    "alpha3": "mot",
    "bibliographic": "",
    "name": "Montenegrin"
  },
  {
    "alpha2": "mi",
    "alpha3": "mri",
    "bibliographic": "mao",
    "name": "Maori"
  },
  {
    "alpha2": "ms",
    "alpha3": "msa",
    "bibliographic": "may",
    "name": "Malay"
  },
  {
    "alpha2": "",
    "alpha3": "mul",
    "bibliographic": "",
    "name": "Multiple languages"
  },
  {
    "alpha2": "",
    "alpha3": "mun",
    "bibliographic": "",
    "name": "Munda languages"
  },
  {
    "alpha2": "",
    "alpha3": "mus",
    "bibliographic": "",
    "name": "Creek"
  },
  {
    "alpha2": "",
    "alpha3": "mwl",
    "bibliographic": "",
    "name": "Mirandese"
  },
  {
    "alpha2": "",
    "alpha3": "mwr",
    "bibliographic": "",
    "name": "Marwari"
  },
  {
    "alpha2": "my",
    "alpha3": "mya",
    "bibliographic": "bur",
    "name": "Burmese"
  },
  {
    "alpha2": "",
    "alpha3": "myn",
    "bibliographic": "",
    "name": "Mayan languages"
  },
  {
    "alpha2": "",
    "alpha3": "myv",
    "bibliographic": "",
    "name": "Erzya"
  },
  {
    "alpha2": "",
    "alpha3": "nah",
    "bibliographic": "",
    "name": "Nahuatl languages"
  },
  {
    "alpha2": "",
    "alpha3": "nai",
    "bibliographic": "",
    "name": "North American Indian languages"
  },
  {
    "alpha2": "",
    "alpha3": "nap",
    "bibliographic": "",
    "name": "Neapolitan"
  },
  {
    "alpha2": "na",
    "alpha3": "nau",
    "bibliographic": "",
    "name": "Nauru"
  },
  {
    "alpha2": "nv",
    "alpha3": "nav",
    "bibliographic": "",
    "name": "Navaho"
  },
  {
    "alpha2": "nv",
    "alpha3": "nav",
    "bibliographic": "",
    "name": "Navajo"
  },
  {
    "alpha2": "nr",
    "alpha3": "nbl",
    "bibliographic": "",
    "name": "Ndebele, South"
  },
  {
    "alpha2": "nr",
    "alpha3": "nbl",
    "bibliographic": "",
    "name": "South Ndebele"
  },
  {
    "alpha2": "nd",
    "alpha3": "nde",
    "bibliographic": "",
    "name": "Ndebele, North"
  },
  {
    "alpha2": "nd",
    "alpha3": "nde",
    "bibliographic": "",
    "name": "North Ndebele"
  },
  {
    "alpha2": "ng",
    "alpha3": "ndo",
    "bibliographic": "",
    "name": "Ndonga"
  },
  {
    "alpha2": "",
    "alpha3": "nds",
    "bibliographic": "",
    "name": "German, Low"
  },
  {
    "alpha2": "",
    "alpha3": "nds",
    "bibliographic": "",
    "name": "Low German"
  },
  {
    "alpha2": "",
    "alpha3": "nds",
    "bibliographic": "",
    "name": "Low Saxon"
  },
  {
    "alpha2": "",
    "alpha3": "nds",
    "bibliographic": "",
    "name": "Saxon, Low"
  },
  {
    "alpha2": "ne",
    "alpha3": "nep",
    "bibliographic": "",
    "name": "Nepali"
  },
  {
    "alpha2": "",
    "alpha3": "new",
    "bibliographic": "",
    "name": "Nepal Bhasa"
  },
  {
    "alpha2": "",
    "alpha3": "new",
    "bibliographic": "",
    "name": "Newari"
  },
  {
    "alpha2": "",
    "alpha3": "nia",
    "bibliographic": "",
    "name": "Nias"
  },
  {
    "alpha2": "",
    "alpha3": "nic",
    "bibliographic": "",
    "name": "Niger-Kordofanian languages"
  },
  {
    "alpha2": "",
    "alpha3": "niu",
    "bibliographic": "",
    "name": "Niuean"
  },
  {
    "alpha2": "nl",
    "alpha3": "nld",
    "bibliographic": "dut",
    "name": "Dutch"
  },
  {
    "alpha2": "nl",
    "alpha3": "nld",
    "bibliographic": "dut",
    "name": "Flemish"
  },
  {
    "alpha2": "nn",
    "alpha3": "nno",
    "bibliographic": "",
    "name": "Norwegian Nynorsk"
  },
  {
    "alpha2": "nn",
    "alpha3": "nno",
    "bibliographic": "",
    "name": "Nynorsk, Norwegian"
  },
  {
    "alpha2": "nb",
    "alpha3": "nob",
    "bibliographic": "",
    "name": "Bokmål, Norwegian"
  },
  {
    "alpha2": "nb",
    "alpha3": "nob",
    "bibliographic": "",
    "name": "Norwegian Bokmål"
  },
  {
    "alpha2": "",
    "alpha3": "nog",
    "bibliographic": "",
    "name": "Nogai"
  },
  {
    "alpha2": "",
    "alpha3": "non",
    "bibliographic": "",
    "name": "Norse, Old"
  },
  {
    "alpha2": "no",
    "alpha3": "nor",
    "bibliographic": "",
    "name": "Norwegian"
  },
  {
    "alpha2": "",
    "alpha3": "nqo",
    "bibliographic": "",
    "name": "N'Ko"
  },
  {
    "alpha2": "",
    "alpha3": "nso",
    "bibliographic": "",
    "name": "Northern Sotho"
  },
  {
    "alpha2": "",
    "alpha3": "nso",
    "bibliographic": "",
    "name": "Pedi"
  },
  {
    "alpha2": "",
    "alpha3": "nso",
    "bibliographic": "",
    "name": "Sepedi"
  },
  {
    "alpha2": "",
    "alpha3": "nso",
    "bibliographic": "",
    "name": "Sotho, Northern"
  },
  {
    "alpha2": "",
    "alpha3": "nub",
    "bibliographic": "",
    "name": "Nubian languages"
  },
  {
    "alpha2": "",
    "alpha3": "nwc",
    "bibliographic": "",
    "name": "Classical Nepal Bhasa"
  },
  {
    "alpha2": "",
    "alpha3": "nwc",
    "bibliographic": "",
    "name": "Classical Newari"
  },
  {
    "alpha2": "",
    "alpha3": "nwc",
    "bibliographic": "",
    "name": "Old Newari"
  },
  {
    "alpha2": "ny",
    "alpha3": "nya",
    "bibliographic": "",
    "name": "Chewa"
  },
  {
    "alpha2": "ny",
    "alpha3": "nya",
    "bibliographic": "",
    "name": "Chichewa"
  },
  {
    "alpha2": "ny",
    "alpha3": "nya",
    "bibliographic": "",
    "name": "Nyanja"
  },
  {
    "alpha2": "",
    "alpha3": "nym",
    "bibliographic": "",
    "name": "Nyamwezi"
  },
  {
    "alpha2": "",
    "alpha3": "nyn",
    "bibliographic": "",
    "name": "Nyankole"
  },
  {
    "alpha2": "",
    "alpha3": "nyo",
    "bibliographic": "",
    "name": "Nyoro"
  },
  {
    "alpha2": "",
    "alpha3": "nzi",
    "bibliographic": "",
    "name": "Nzima"
  },
  {
    "alpha2": "oc",
    "alpha3": "oci",
    "bibliographic": "",
    "name": "Occitan (post 1500)"
  },
  {
    "alpha2": "oj",
    "alpha3": "oji",
    "bibliographic": "",
    "name": "Ojibwa"
  },
  {
    "alpha2": "or",
    "alpha3": "ori",
    "bibliographic": "",
    "name": "Oriya"
  },
  {
    "alpha2": "om",
    "alpha3": "orm",
    "bibliographic": "",
    "name": "Oromo"
  },
  {
    "alpha2": "",
    "alpha3": "osa",
    "bibliographic": "",
    "name": "Osage"
  },
  {
    "alpha2": "os",
    "alpha3": "oss",
    "bibliographic": "",
    "name": "Ossetian"
  },
  {
    "alpha2": "os",
    "alpha3": "oss",
    "bibliographic": "",
    "name": "Ossetic"
  },
  {
    "alpha2": "",
    "alpha3": "ota",
    "bibliographic": "",
    "name": "Turkish, Ottoman (1500-1928)"
  },
  {
    "alpha2": "",
    "alpha3": "oto",
    "bibliographic": "",
    "name": "Otomian languages"
  },
  {
    "alpha2": "",
    "alpha3": "paa",
    "bibliographic": "",
    "name": "Papuan languages"
  },
  {
    "alpha2": "",
    "alpha3": "pag",
    "bibliographic": "",
    "name": "Pangasinan"
  },
  {
    "alpha2": "",
    "alpha3": "pal",
    "bibliographic": "",
    "name": "Pahlavi"
  },
  {
    "alpha2": "",
    "alpha3": "pam",
    "bibliographic": "",
    "name": "Kapampangan"
  },
  {
    "alpha2": "",
    "alpha3": "pam",
    "bibliographic": "",
    "name": "Pampanga"
  },
  {
    "alpha2": "pa",
    "alpha3": "pan",
    "bibliographic": "",
    "name": "Panjabi"
  },
  {
    "alpha2": "pa",
    "alpha3": "pan",
    "bibliographic": "",
    "name": "Punjabi"
  },
  {
    "alpha2": "",
    "alpha3": "pap",
    "bibliographic": "",
    "name": "Papiamento"
  },
  {
    "alpha2": "",
    "alpha3": "pau",
    "bibliographic": "",
    "name": "Palauan"
  },
  {
    "alpha2": "",
    "alpha3": "peo",
    "bibliographic": "",
    "name": "Persian, Old (ca.600-400 B.C.)"
  },
  {
    "alpha2": "",
    "alpha3": "phi",
    "bibliographic": "",
    "name": "Philippine languages"
  },
  {
    "alpha2": "",
    "alpha3": "phn",
    "bibliographic": "",
    "name": "Phoenician"
  },
  {
    "alpha2": "pi",
    "alpha3": "pli",
    "bibliographic": "",
    "name": "Pali"
  },
  {
    "alpha2": "pl",
    "alpha3": "pol",
    "bibliographic": "",
    "name": "Polish"
  },
  {
    "alpha2": "",
    "alpha3": "pon",
    "bibliographic": "",
    "name": "Pohnpeian"
  },
  {
    "alpha2": "pt",
    "alpha3": "por",
    "bibliographic": "",
    "name": "Portuguese"
  },
  {
    "alpha2": "",
    "alpha3": "pra",
    "bibliographic": "",
    "name": "Prakrit languages"
  },
  {
    "alpha2": "",
    "alpha3": "pro",
    "bibliographic": "",
    "name": "Occitan, Old (to 1500)"
  },
  {
    "alpha2": "",
    "alpha3": "pro",
    "bibliographic": "",
    "name": "Provençal, Old (to 1500)"
  },
  {
    "alpha2": "ps",
    "alpha3": "pus",
    "bibliographic": "",
    "name": "Pashto"
  },
  {
    "alpha2": "ps",
    "alpha3": "pus",
    "bibliographic": "",
    "name": "Pushto"
  },
  {
    "alpha2": "qu",
    "alpha3": "que",
    "bibliographic": "",
    "name": "Quechua"
  },
  {
    "alpha2": "",
    "alpha3": "raj",
    "bibliographic": "",
    "name": "Rajasthani"
  },
  {
    "alpha2": "",
    "alpha3": "rap",
    "bibliographic": "",
    "name": "Rapanui"
  },
  {
    "alpha2": "",
    "alpha3": "rar",
    "bibliographic": "",
    "name": "Cook Islands Maori"
  },
  {
    "alpha2": "",
    "alpha3": "rar",
    "bibliographic": "",
    "name": "Rarotongan"
  },
  {
    "alpha2": "",
    "alpha3": "roa",
    "bibliographic": "",
    "name": "Romance languages"
  },
  {
    "alpha2": "rm",
    "alpha3": "roh",
    "bibliographic": "",
    "name": "Romansh"
  },
  {
    "alpha2": "",
    "alpha3": "rom",
    "bibliographic": "",
    "name": "Romany"
  },
  {
    "alpha2": "ro",
    "alpha3": "ron",
    "bibliographic": "rum",
    "name": "Moldavian"
  },
  {
    "alpha2": "ro",
    "alpha3": "ron",
    "bibliographic": "rum",
    "name": "Romanian"
  },
  {
    "alpha2": "rn",
    "alpha3": "run",
    "bibliographic": "",
    "name": "Rundi"
  },
  {
    "alpha2": "",
    "alpha3": "rup",
    "bibliographic": "",
    "name": "Aromanian"
  },
  {
    "alpha2": "",
    "alpha3": "rup",
    "bibliographic": "",
    "name": "Arumanian"
  },
  {
    "alpha2": "",
    "alpha3": "rup",
    "bibliographic": "",
    "name": "Macedo-Romanian"
  },
  {
    "alpha2": "ru",
    "alpha3": "rus",
    "bibliographic": "",
    "name": "Russian"
  },
  {
    "alpha2": "",
    "alpha3": "sad",
    "bibliographic": "",
    "name": "Sandawe"
  },
  {
    "alpha2": "sg",
    "alpha3": "sag",
    "bibliographic": "",
    "name": "Sango"
  },
  {
    "alpha2": "",
    "alpha3": "sah",
    "bibliographic": "",
    "name": "Yakut"
  },
  {
    "alpha2": "",
    "alpha3": "sai",
    "bibliographic": "",
    "name": "South American Indian languages"
  },
  {
    "alpha2": "",
    "alpha3": "sal",
    "bibliographic": "",
    "name": "Salishan languages"
  },
  {
    "alpha2": "",
    "alpha3": "sam",
    "bibliographic": "",
    "name": "Samaritan Aramaic"
  },
  {
    "alpha2": "sa",
    "alpha3": "san",
    "bibliographic": "",
    "name": "Sanskrit"
  },
  {
    "alpha2": "",
    "alpha3": "sas",
    "bibliographic": "",
    "name": "Sasak"
  },
  {
    "alpha2": "",
    "alpha3": "sat",
    "bibliographic": "",
    "name": "Santali"
  },
  {
    "alpha2": "",
    "alpha3": "scn",
    "bibliographic": "",
    "name": "Sicilian"
  },
  {
    "alpha2": "",
    "alpha3": "sco",
    "bibliographic": "",
    "name": "Scots"
  },
  {
    "alpha2": "",
    "alpha3": "sel",
    "bibliographic": "",
    "name": "Selkup"
  },
  {
    "alpha2": "",
    "alpha3": "sem",
    "bibliographic": "",
    "name": "Semitic languages"
  },
  {
    "alpha2": "",
    "alpha3": "sga",
    "bibliographic": "",
    "name": "Irish, Old (to 900)"
  },
  {
    "alpha2": "",
    "alpha3": "sgn",
    "bibliographic": "",
    "name": "Sign Languages"
  },
  {
    "alpha2": "",
    "alpha3": "shn",
    "bibliographic": "",
    "name": "Shan"
  },
  {
    "alpha2": "",
    "alpha3": "sid",
    "bibliographic": "",
    "name": "Sidamo"
  },
  {
    "alpha2": "si",
    "alpha3": "sin",
    "bibliographic": "",
    "name": "Sinhala"
  },
  {
    "alpha2": "si",
    "alpha3": "sin",
    "bibliographic": "",
    "name": "Sinhalese"
  },
  {
    "alpha2": "",
    "alpha3": "sio",
    "bibliographic": "",
    "name": "Siouan languages"
  },
  {
    "alpha2": "",
    "alpha3": "sit",
    "bibliographic": "",
    "name": "Sino-Tibetan languages"
  },
  {
    "alpha2": "",
    "alpha3": "sla",
    "bibliographic": "",
    "name": "Slavic languages"
  },
  {
    "alpha2": "sk",
    "alpha3": "slk",
    "bibliographic": "slo",
    "name": "Slovak"
  },
  {
    "alpha2": "sl",
    "alpha3": "slv",
    "bibliographic": "",
    "name": "Slovenian"
  },
  {
    "alpha2": "",
    "alpha3": "sma",
    "bibliographic": "",
    "name": "Southern Sami"
  },
  {
    "alpha2": "se",
    "alpha3": "sme",
    "bibliographic": "",
    "name": "Northern Sami"
  },
  {
    "alpha2": "",
    "alpha3": "smi",
    "bibliographic": "",
    "name": "Sami languages"
  },
  {
    "alpha2": "",
    "alpha3": "smj",
    "bibliographic": "",
    "name": "Lule Sami"
  },
  {
    "alpha2": "",
    "alpha3": "smn",
    "bibliographic": "",
    "name": "Inari Sami"
  },
  {
    "alpha2": "sm",
    "alpha3": "smo",
    "bibliographic": "",
    "name": "Samoan"
  },
  {
    "alpha2": "",
    "alpha3": "sms",
    "bibliographic": "",
    "name": "Skolt Sami"
  },
  {
    "alpha2": "sn",
    "alpha3": "sna",
    "bibliographic": "",
    "name": "Shona"
  },
  {
    "alpha2": "sd",
    "alpha3": "snd",
    "bibliographic": "",
    "name": "Sindhi"
  },
  {
    "alpha2": "",
    "alpha3": "snk",
    "bibliographic": "",
    "name": "Soninke"
  },
  {
    "alpha2": "",
    "alpha3": "sog",
    "bibliographic": "",
    "name": "Sogdian"
  },
  {
    "alpha2": "so",
    "alpha3": "som",
    "bibliographic": "",
    "name": "Somali"
  },
  {
    "alpha2": "",
    "alpha3": "son",
    "bibliographic": "",
    "name": "Songhai languages"
  },
  {
    "alpha2": "st",
    "alpha3": "sot",
    "bibliographic": "",
    "name": "Sotho, Southern"
  },
  {
    "alpha2": "es",
    "alpha3": "spa",
    "bibliographic": "",
    "name": "Castilian"
  },
  {
    "alpha2": "es",
    "alpha3": "spa",
    "bibliographic": "",
    "name": "Spanish"
  },
  {
    "alpha2": "sq",
    "alpha3": "sqi",
    "bibliographic": "alb",
    "name": "Albanian"
  },
  {
    "alpha2": "sc",
    "alpha3": "srd",
    "bibliographic": "",
    "name": "Sardinian"
  },
  {
    "alpha2": "",
    "alpha3": "srn",
    "bibliographic": "",
    "name": "Sranan Tongo"
  },
  {
    "alpha2": "sr",
    "alpha3": "srp",
    "bibliographic": "",
    "name": "Serbian"
  },
  {
    "alpha2": "",
    "alpha3": "srr",
    "bibliographic": "",
    "name": "Serer"
  },
  {
    "alpha2": "",
    "alpha3": "ssa",
    "bibliographic": "",
    "name": "Nilo-Saharan languages"
  },
  {
    "alpha2": "ss",
    "alpha3": "ssw",
    "bibliographic": "",
    "name": "Swati"
  },
  {
    "alpha2": "",
    "alpha3": "suk",
    "bibliographic": "",
    "name": "Sukuma"
  },
  {
    "alpha2": "su",
    "alpha3": "sun",
    "bibliographic": "",
    "name": "Sundanese"
  },
  {
    "alpha2": "",
    "alpha3": "sus",
    "bibliographic": "",
    "name": "Susu"
  },
  {
    "alpha2": "",
    "alpha3": "sux",
    "bibliographic": "",
    "name": "Sumerian"
  },
  {
    "alpha2": "sw",
    "alpha3": "swa",
    "bibliographic": "",
    "name": "Swahili"
  },
  {
    "alpha2": "sv",
    "alpha3": "swe",
    "bibliographic": "",
    "name": "Swedish"
  },
  {
    "alpha2": "",
    "alpha3": "syc",
    "bibliographic": "",
    "name": "Classical Syriac"
  },
  {
    "alpha2": "",
    "alpha3": "syr",
    "bibliographic": "",
    "name": "Syriac"
  },
  {
    "alpha2": "ty",
    "alpha3": "tah",
    "bibliographic": "",
    "name": "Tahitian"
  },
  {
    "alpha2": "",
    "alpha3": "tai",
    "bibliographic": "",
    "name": "Tai languages"
  },
  {
    "alpha2": "ta",
    "alpha3": "tam",
    "bibliographic": "",
    "name": "Tamil"
  },
  {
    "alpha2": "tt",
    "alpha3": "tat",
    "bibliographic": "",
    "name": "Tatar"
  },
  {
    "alpha2": "te",
    "alpha3": "tel",
    "bibliographic": "",
    "name": "Telugu"
  },
  {
    "alpha2": "",
    "alpha3": "tem",
    "bibliographic": "",
    "name": "Timne"
  },
  {
    "alpha2": "",
    "alpha3": "ter",
    "bibliographic": "",
    "name": "Tereno"
  },
  {
    "alpha2": "",
    "alpha3": "tet",
    "bibliographic": "",
    "name": "Tetum"
  },
  {
    "alpha2": "tg",
    "alpha3": "tgk",
    "bibliographic": "",
    "name": "Tajik"
  },
  {
    "alpha2": "tl",
    "alpha3": "tgl",
    "bibliographic": "",
    "name": "Tagalog"
  },
  {
    "alpha2": "th",
    "alpha3": "tha",
    "bibliographic": "",
    "name": "Thai"
  },
  {
    "alpha2": "",
    "alpha3": "tig",
    "bibliographic": "",
    "name": "Tigre"
  },
  {
    "alpha2": "ti",
    "alpha3": "tir",
    "bibliographic": "",
    "name": "Tigrinya"
  },
  {
    "alpha2": "",
    "alpha3": "tiv",
    "bibliographic": "",
    "name": "Tiv"
  },
  {
    "alpha2": "",
    "alpha3": "tkl",
    "bibliographic": "",
    "name": "Tokelau"
  },
  {
    "alpha2": "",
    "alpha3": "tlh",
    "bibliographic": "",
    "name": "Klingon"
  },
  {
    "alpha2": "",
    "alpha3": "tlh",
    "bibliographic": "",
    "name": "tlhIngan-Hol"
  },
  {
    "alpha2": "",
    "alpha3": "tli",
    "bibliographic": "",
    "name": "Tlingit"
  },
  {
    "alpha2": "",
    "alpha3": "tmh",
    "bibliographic": "",
    "name": "Tamashek"
  },
  {
    "alpha2": "",
    "alpha3": "tog",
    "bibliographic": "",
    "name": "Tonga (Nyasa)"
  },
  {
    "alpha2": "to",
    "alpha3": "ton",
    "bibliographic": "",
    "name": "Tonga (Tonga Islands)"
  },
  {
    "alpha2": "",
    "alpha3": "tpi",
    "bibliographic": "",
    "name": "Tok Pisin"
  },
  {
    "alpha2": "",
    "alpha3": "tsi",
    "bibliographic": "",
    "name": "Tsimshian"
  },
  {
    "alpha2": "tn",
    "alpha3": "tsn",
    "bibliographic": "",
    "name": "Tswana"
  },
  {
    "alpha2": "ts",
    "alpha3": "tso",
    "bibliographic": "",
    "name": "Tsonga"
  },
  {
    "alpha2": "tk",
    "alpha3": "tuk",
    "bibliographic": "",
    "name": "Turkmen"
  },
  {
    "alpha2": "",
    "alpha3": "tum",
    "bibliographic": "",
    "name": "Tumbuka"
  },
  {
    "alpha2": "",
    "alpha3": "tup",
    "bibliographic": "",
    "name": "Tupi languages"
  },
  {
    "alpha2": "tr",
    "alpha3": "tur",
    "bibliographic": "",
    "name": "Turkish"
  },
  {
    "alpha2": "",
    "alpha3": "tut",
    "bibliographic": "",
    "name": "Altaic languages"
  },
  {
    "alpha2": "",
    "alpha3": "tvl",
    "bibliographic": "",
    "name": "Tuvalu"
  },
  {
    "alpha2": "tw",
    "alpha3": "twi",
    "bibliographic": "",
    "name": "Twi"
  },
  {
    "alpha2": "",
    "alpha3": "tyv",
    "bibliographic": "",
    "name": "Tuvinian"
  },
  {
    "alpha2": "",
    "alpha3": "udm",
    "bibliographic": "",
    "name": "Udmurt"
  },
  {
    "alpha2": "",
    "alpha3": "uga",
    "bibliographic": "",
    "name": "Ugaritic"
  },
  {
    "alpha2": "ug",
    "alpha3": "uig",
    "bibliographic": "",
    "name": "Uighur"
  },
  {
    "alpha2": "ug",
    "alpha3": "uig",
    "bibliographic": "",
    "name": "Uyghur"
  },
  {
    "alpha2": "uk",
    "alpha3": "ukr",
    "bibliographic": "",
    "name": "Ukrainian"
  },
  {
    "alpha2": "",
    "alpha3": "umb",
    "bibliographic": "",
    "name": "Umbundu"
  },
  {
    "alpha2": "",
    "alpha3": "und",
    "bibliographic": "",
    "name": "Undetermined"
  },
  {
    "alpha2": "ur",
    "alpha3": "urd",
    "bibliographic": "",
    "name": "Urdu"
  },
  {
    "alpha2": "uz",
    "alpha3": "uzb",
    "bibliographic": "",
    "name": "Uzbek"
  },
  {
    "alpha2": "",
    "alpha3": "vai",
    "bibliographic": "",
    "name": "Vai"
  },
  {
    "alpha2": "ve",
    "alpha3": "ven",
    "bibliographic": "",
    "name": "Venda"
  },
  {
    "alpha2": "vi",
    "alpha3": "vie",
    "bibliographic": "",
    "name": "Vietnamese"
  },
  {
    "alpha2": "vo",
    "alpha3": "vol",
    "bibliographic": "",
    "name": "Volapük"
  },
  {
    "alpha2": "",
    "alpha3": "vot",
    "bibliographic": "",
    "name": "Votic"
  },
  {
    "alpha2": "",
    "alpha3": "wak",
    "bibliographic": "",
    "name": "Wakashan languages"
  },
  {
    "alpha2": "",
    "alpha3": "wal",
    "bibliographic": "",
    "name": "Wolaitta"
  },
  {
    "alpha2": "",
    "alpha3": "wal",
    "bibliographic": "",
    "name": "Wolaytta"
  },
  {
    "alpha2": "",
    "alpha3": "war",
    "bibliographic": "",
    "name": "Waray"
  },
  {
    "alpha2": "",
    "alpha3": "was",
    "bibliographic": "",
    "name": "Washo"
  },
  {
    "alpha2": "",
    "alpha3": "wen",
    "bibliographic": "",
    "name": "Sorbian languages"
  },
  {
    "alpha2": "wa",
    "alpha3": "wln",
    "bibliographic": "",
    "name": "Walloon"
  },
  {
    "alpha2": "wo",
    "alpha3": "wol",
    "bibliographic": "",
    "name": "Wolof"
  },
  {
    "alpha2": "",
    "alpha3": "xal",
    "bibliographic": "",
    "name": "Kalmyk"
  },
  {
    "alpha2": "",
    "alpha3": "xal",
    "bibliographic": "",
    "name": "Oirat"
  },
  {
    "alpha2": "xh",
    "alpha3": "xho",
    "bibliographic": "",
    "name": "Xhosa"
  },
  {
    "alpha2": "",
    "alpha3": "yao",
    "bibliographic": "",
    "name": "Yao"
  },
  {
    "alpha2": "",
    "alpha3": "yap",
    "bibliographic": "",
    "name": "Yapese"
  },
  {
    "alpha2": "yi",
    "alpha3": "yid",
    "bibliographic": "",
    "name": "Yiddish"
  },
  {
    "alpha2": "yo",
    "alpha3": "yor",
    "bibliographic": "",
    "name": "Yoruba"
  },
  {
    "alpha2": "",
    "alpha3": "ypk",
    "bibliographic": "",
    "name": "Yupik languages"
  },
  {
    "alpha2": "",
    "alpha3": "zap",
    "bibliographic": "",
    "name": "Zapotec"
  },
  {
    "alpha2": "",
    "alpha3": "zbl",
    "bibliographic": "",
    "name": "Bliss"
  },
  {
    "alpha2": "",
    "alpha3": "zbl",
    "bibliographic": "",
    "name": "Blissymbolics"
  },
  {
    "alpha2": "",
    "alpha3": "zbl",
    "bibliographic": "",
    "name": "Blissymbols"
  },
  {
    "alpha2": "",
    "alpha3": "zen",
    "bibliographic": "",
    "name": "Zenaga"
  },
  {
    "alpha2": "",
    "alpha3": "zgh",
    "bibliographic": "",
    "name": "Standard Moroccan Tamazight"
  },
  {
    "alpha2": "za",
    "alpha3": "zha",
    "bibliographic": "",
    "name": "Chuang"
  },
  {
    "alpha2": "za",
    "alpha3": "zha",
    "bibliographic": "",
    "name": "Zhuang"
  },
  {
    "alpha2": "zh",
    "alpha3": "zho",
    "bibliographic": "chi",
    "name": "Chinese"
  },
  {
    "alpha2": "",
    "alpha3": "znd",
    "bibliographic": "",
    "name": "Zande languages"
  },
  {
    "alpha2": "zu",
    "alpha3": "zul",
    "bibliographic": "",
    "name": "Zulu"
  },
  {
    "alpha2": "",
    "alpha3": "zun",
    "bibliographic": "",
    "name": "Zuni"
  },
  {
    "alpha2": "",
    "alpha3": "zxx",
    "bibliographic": "",
    "name": "No linguistic content"
  },
  {
    "alpha2": "",
    "alpha3": "zxx",
    "bibliographic": "",
    "name": "Not applicable"
  },
  {
    "alpha2": "",
    "alpha3": "zza",
    "bibliographic": "",
    "name": "Dimili"
  },
  {
    "alpha2": "",
    "alpha3": "zza",
    "bibliographic": "",
    "name": "Dimli"
  },
  {
    "alpha2": "",
    "alpha3": "zza",
    "bibliographic": "",
    "name": "Kirdki"
  },
  {
    "alpha2": "",
    "alpha3": "zza",
    "bibliographic": "",
    "name": "Kirmanjki"
  },
  {
    "alpha2": "",
    "alpha3": "zza",
    "bibliographic": "",
    "name": "Zaza"
  },
  {
    "alpha2": "",
    "alpha3": "zza",
    "bibliographic": "",
    "name": "Zazaki"
  }
]

},{}],5:[function(require,module,exports){
'use strict';

var regions = {};

regions.centralAsia = {
  name: 'Central Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Asia
    'KZ', // Kazakhstan
    'KG', // Kyrgyzstan
    'TJ', // Tajikistan
    'TM', // Turkmenistan
    'UZ', // Uzbekistan
  ]
}

regions.southernAsia = {
  name: 'Southern Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/South_Asia
    'AF', // Afghanistan
    'BD', // Bangladesh
    'BT', // Bhutan
    'IO', // British Indian Ocean Territory
    'IN', // India
    'IR', // Iran
    'MV', // Maldives
    'NP', // Nepal
    'PK', // Pakistan
    'LK', // Sri Lanka
  ]
}

regions.southeastAsia = {
  name: 'Southeast Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southeast_Asia
    'BN', // Brunei
    'KH', // Cambodia
    'CX', // Christmas Island
    'CC', // Cocos (Keeling) Islands
    'TL', // East Timor
    'ID', // Indonesia
    'LA', // Laos
    'MY', // Malaysia
    'MM', // Myanmar (Burma)
    'PH', // Philippines
    'SG', // Singapore
    'TH', // Thailand
    'VN', // Vietnam
  ]
}

regions.eastAsia = {
  name: 'East Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/East_Asia
    'CN', // China
    'HK', // Hong Kong
    'JP', // Japan
    'KP', // North Korea
    'KR', // South Korea
    'MO', // Macao
    'MN', // Mongolia
    'TW', // Taiwan
  ]
}

regions.westernAsia = {
  name: 'Western Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Western_Asia
    'AM', // Armenia
    'AZ', // Azerbaijan
    'BH', // Bahrain
    'IQ', // Iraq
    'IL', // Israel
    'JO', // Jordan
    'KW', // Kuwait
    'LB', // Lebanon
    'OM', // Oman
    'PS', // Palestinian territories
    'QA', // Qatar
    'SA', // Saudi Arabia
    'SY', // Syria
    'TR', // Turkey
    'AE', // United Arab Emirates
    'YE', // Yemen
  ]
}

regions.centralAfrica = {
  name: 'Central Aftrica',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Africa
    'AO', // Angola
    'CM', // Cameroon
    'CF', // Central African Republic
    'TD', // Chad
    'CG', // Republic of the Congo
    'CD', // Democratic Republic of the Congo
    'GQ', // Equatorial Guinea
    'GA', // Gabon
    'ST', // São Tomé and Príncipe
  ]
};

regions.northAfrica = {
  name: 'North Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/North_Africa
    'DZ', // Algeria
    'EG', // Egypt
    'LY', // Libya
    'MA', // Morocco
    'SD', // Sudan
    'TN', // Tunisia
    'EH', // Western Sahara
  ]
};

regions.southernAfrica = {
  name: 'Southern Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Africa
    'BW', // Botswana
    'LS', // Lesotho
    'NA', // Namibia
    'ZA', // South Africa
    'SZ', // Swaziland
  ]
};

regions.eastAfrica = {
  name: 'East Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/East_Africa
    'BI', // Burundi
    'KM', // Comoros
    'DJ', // Djibouti
    'ER', // Eritrea
    'ET', // Ethiopia
    'KE', // Kenya
    'MG', // Madagascar
    'MW', // Malawi
    'MU', // Mauritius
    'YT', // Mayotte (France)
    'MZ', // Mozambique
    'RE', // Réunion (France)
    'RW', // Rwanda
    'SC', // Seychelles
    'SO', // Somalia
    'SS', // South Sudan
    'TZ', // Tanzania
    'UG', // Uganda
    'ZM', // Zambia
    'ZW', // Zimbabwe
  ]
};

regions.westAfrica = {
  name: 'West Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/West_Africa
    'BJ', // Benin
    'BF', // Burkina Faso
    'CV', // Cabo Verde
    'CI', // Côte d'Ivoire
    'GM', // Gambia
    'GH', // Ghana
    'GN', // Guinea
    'GW', // Guinea-Bissau
    'LR', // Liberia
    'ML', // Mali
    'MR', // Mauritania
    'NE', // Niger
    'NG', // Nigeria
    'SH', // Saint Helena, Ascension and Tristan da Cunha (United Kingdom)
    'SN', // Senegal
    'SL', // Sierra Leone
    'TG', // Togo
  ]
};

regions.centralAmerica = {
  name: 'Central America',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_America
    'BZ', // Belize
    'CR', // Costa Rica
    'SV', // El Salvador
    'GT', // Guatemala
    'HN', // Honduras
    'NI', // Nicaragua
    'PA', // Panama
  ]
}

regions.northernAmerica = {
  name: 'Northern America',
  countries: [
    // source is http://en.wikipedia.org/wiki/Northern_America
    'BM', // Bermuda
    'CA', // Canada
    'GL', // Greenland
    'MX', // Mexico
    'PM', // Saint Pierre and Miquelon
    'US', // United States
  ]
}

regions.caribbean = {
  name: 'Caribbean',
  countries: [
    // source is http://en.wikipedia.org/wiki/Caribbean
    'AI', // Anguilla
    'AG', // Antigua and Barbuda
    'AW', // Aruba
    'BS', // Bahamas
    'BB', // Barbados
    'BQ', // Bonaire, Sint Eustatius & Saba
    'VG', // British Virgin Islands
    'KY', // Cayman Islands
    'CU', // Cuba
    'CW', // Curaçao
    'DM', // Dominica
    'DO', // Dominican Republic
    'GD', // Grenada
    'GP', // Guadeloupe
    'HT', // Haiti
    'JM', // Jamaica
    'MQ', // Martinique
    'MS', // Montserrat
    'PR', // Puerto Rico
    'BL', // Saint Barthélemy
    'KN', // St. Kitts & Nevis
    'LC', // Saint Lucia
    'MF', // Saint Martin
    'VC', // Saint Vincent and the Grenadines
    'SX', // Sint Maarten
    'TT', // Trinidad and Tobago
    'TC', // Turks & Caicos
    'VI', // United States Virgin Islands
  ]
}

regions.southAmerica = {
  name: 'South America',
  countries: [
    // source is http://en.wikipedia.org/wiki/South_America
    'AR', // Argentina
    'BO', // Bolivia
    'BR', // Brazil
    'CL', // Chile
    'CO', // Colombia
    'EC', // Ecuador
    'FK', // Falkland Islands
    'GF', // French Guiana
    'GY', // Guyana
    'PY', // Paraguay
    'PE', // Peru
    'SR', // Suriname
    'UY', // Uruguay
    'VE', // Venezuela
  ]
}

regions.antartica = {
  name: 'Antartica',
  countries: [
    // source is http://en.wikipedia.org/wiki/Antarctica
    'AQ', // Antarctica
    'BV', // Bouvet Island
    'TF', // French Southern Territories
    'HM', // Heard Island and McDonald Islands
    'GS', // South Georgia and the South Sandwich Islands
  ]
}

regions.northernEurope = {
  name: 'Northern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Northern_Europe
    'AX', // Åland
    'DK', // Denmark
    'EE', // Estonia
    'FO', // Faroe Islands
    'FI', // Finland
    'GG', // Guernsey
    'IS', // Iceland
    'IE', // Republic of Ireland
    'JE', // Jersey (UK)
    'IM', // Isle of Man
    'LV', // Latvia
    'LT', // Lithuania
    'NO', // Norway
    'SJ', // Svalbard and Jan Mayen
    'SE', // Sweden
    'GB', // United Kingdom
  ]
}

regions.southernEurope = {
  name: 'Southern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Europe
    'AL', // Albania
    'AD', // Andorra
    'BA', // Bosnia and Herzegovina
    'HR', // Croatia
    'CY', // Cyprus
    'GI', // Gibraltar
    'GR', // Greece
    'IT', // Italy
    'MK', // Republic of Macedonia
    'VA', // Vatican City
    'MT', // Malta
    'ME', // Montenegro
    'PT', // Portugal
    'SM', // San Marino
    'RS', // Serbia
    'SI', // Slovenia
    'ES', // Spain
  ]
}

regions.easternEurope = {
  name: 'Eastern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Eastern_Europe
    'BY', // Belarus
    'BG', // Bulgaria
    'CZ', // Czech Republic
    'GE', // Georgia
    'HU', // Hungary
    'MD', // Moldova
    'PL', // Poland
    'RO', // Romania
    'RU', // Russia
    'SK', // Slovakia
    'UA', // Ukraine
  ]
}

regions.westernEurope = {
  name: 'Western Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Western_Europe
    'AT', // Austria
    'BE', // Belgium
    'FR', // France
    'DE', // Germany
    'LI', // Liechtenstein
    'LU', // Luxembourg
    'MC', // Monaco
    'NL', // Netherlands
    'CH', // Switzerland
  ],
};
 
regions.australia = {
  name: 'Australia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AU', // Australia
    'NF', // Norfolk Island
    'NZ', // New Zealand
  ]
};

regions.melanesia = {
  name: 'Melanesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'FJ', // Fiji
    'NC', //  New Caledonia
    'PG', // Papua New Guinea
    'SB', // Solomon Islands
    'VU', // Vanuatu
  ]
};    

regions.micronesia = {
  name: 'Micronesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'GU', // Guam
    'KI', // Kiribati
    'MH', // Marshall Islands
    'FM', // Micronesia, Fed. Sts.
    'NR', // Nauru
    'MP', // Northern Mariana Islands
    'PW', // Palau
    'UM', // United States Minor Outlying Islands
  ]
};    

regions.polynesia = {
  name: 'Polynesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AS', // American Samoa
    'CK', // Cook Islands
    'PF', // French Polynesia
    'NU', // Niue
    'PN', // Pitcairn Islands
    'WS', // Samoa
    'TK', // Tokelau
    'TO', // Tonga
    'TV', // Tuvalu
    'WF', // Wallis and Futuna
  ]
};

module.exports = regions;

},{}],6:[function(require,module,exports){
'use strict';

var _ = require('underscore');
var continents = require('./data/continents');
var regions = require('./data/regions');
var countriesAll = require('./data/countries.json');
var currenciesAll = require('./data/currencies.json');
var languagesAll = require('./data/languages.json');
var lookup = require('./lookup');

var getSymbol = require('currency-symbol-map')

exports.continents = continents;
exports.regions = regions;

exports.countries = {
  all: countriesAll,
};

_.each(countriesAll, function (country) {
  exports.countries[country.alpha2] = country;
  exports.countries[country.alpha3] = country;
});

exports.currencies = {
  all: currenciesAll,
};

_.each(currenciesAll, function (currency) {
  //If the symbol isn't available, default to the currency code
  var symbol = getSymbol(currency.code);
  if (symbol == '?') {
    symbol = currency.code;
  }

  currency.symbol = symbol;
  exports.currencies[currency.code] = currency;
});

exports.languages = {
  all: languagesAll,
};

// Note that for the languages there are several entries with the same alpha3 -
// eg Dutch and Flemish. Not sure how to best deal with that - here whichever
// comes last wins.
_.each(languagesAll, function (language) {
  exports.languages[language.alpha2] = language;
  exports.languages[language.bibliographic] = language;
  exports.languages[language.alpha3] = language;
});

exports.lookup = lookup({
    countries: countriesAll,
    currencies: currenciesAll,
    languages: languagesAll
});

var callingCountries = {all: []};

var callingCodesAll = _.reduce(countriesAll, function (codes, country) {
  if (country.countryCallingCodes && country.countryCallingCodes.length) {
    callingCountries.all.push(country);

    callingCountries[country.alpha2] = country;
    callingCountries[country.alpha3] = country;

    _.each(country.countryCallingCodes, function (code) {
      if (codes.indexOf(code) == -1) {
        codes.push(code);
      }
    });
  }
  return codes;
}, []);

delete callingCountries['']; // remove empty alpha3s
exports.callingCountries = callingCountries;

callingCodesAll.sort(function (a, b) {
  var parse = function (str) { return parseInt(str) };
  var splitA = _.map(a.split(' '), parse);
  var splitB = _.map(b.split(' '), parse);

  if (splitA[0] < splitB[0]) {
    return -1;
  } else if (splitA[0] > splitB[0]) {
    return 1;
  } else {
    // Same - check split[1]
    if (splitA[1] === undefined && splitB[1] !== undefined) {
      return -1;
    } else if (splitA[1] !== undefined && splitB[1] === undefined) {
      return 1;
    } else if (splitA[1] < splitB[1]) {
      return -1;
    } else if (splitA[1] > splitB[1]) {
      return 1;
    } else {
      return 0;
    }
  }
});

exports.callingCodes = {
  all: callingCodesAll
};

},{"./data/continents":1,"./data/countries.json":2,"./data/currencies.json":3,"./data/languages.json":4,"./data/regions":5,"./lookup":7,"currency-symbol-map":8,"underscore":10}],7:[function(require,module,exports){
var _ = require('underscore');

module.exports = init;

function init(o) {
  return {
    countries: search.bind(null, o.countries),
    currencies: search.bind(null, o.currencies),
    languages: search.bind(null, o.languages)
  };
}

function search(data, query) {
  var q = _.pairs(query);

  return data.filter(function(d) {
    return q.filter(function(v) {
      var prop = d[v[0]];

      if(_.isArray(prop)) return prop.indexOf(v[1]) >= 0;

      return prop == v[1];
    }).length == q.length;
  });
}
},{"underscore":10}],8:[function(require,module,exports){
module.exports = mapSymbol

var map = require('./map')

function mapSymbol(currencyCode) {
  if (map.hasOwnProperty(currencyCode)) {
    return map[currencyCode]
  } else {
    return '?'
  }
}
},{"./map":9}],9:[function(require,module,exports){
module.exports =
{ "ALL": "L"
, "AFN": "؋"
, "ARS": "$"
, "AWG": "ƒ"
, "AUD": "$"
, "AZN": "₼"
, "BSD": "$"
, "BBD": "$"
, "BYR": "p."
, "BZD": "BZ$"
, "BMD": "$"
, "BOB": "Bs."
, "BAM": "KM"
, "BWP": "P"
, "BGN": "лв"
, "BRL": "R$"
, "BND": "$"
, "KHR": "៛"
, "CAD": "$"
, "KYD": "$"
, "CLP": "$"
, "CNY": "¥"
, "COP": "$"
, "CRC": "₡"
, "HRK": "kn"
, "CUP": "₱"
, "CZK": "Kč"
, "DKK": "kr"
, "DOP": "RD$"
, "XCD": "$"
, "EGP": "£"
, "SVC": "$"
, "EEK": "kr"
, "EUR": "€"
, "FKP": "£"
, "FJD": "$"
, "GHC": "¢"
, "GIP": "£"
, "GTQ": "Q"
, "GGP": "£"
, "GYD": "$"
, "HNL": "L"
, "HKD": "$"
, "HUF": "Ft"
, "ISK": "kr"
, "INR": "₹"
, "IDR": "Rp"
, "IRR": "﷼"
, "IMP": "£"
, "ILS": "₪"
, "JMD": "J$"
, "JPY": "¥"
, "JEP": "£"
, "KES": "KSh"
, "KZT": "лв"
, "KPW": "₩"
, "KRW": "₩"
, "KGS": "лв"
, "LAK": "₭"
, "LVL": "Ls"
, "LBP": "£"
, "LRD": "$"
, "LTL": "Lt"
, "MKD": "ден"
, "MYR": "RM"
, "MUR": "₨"
, "MXN": "$"
, "MNT": "₮"
, "MZN": "MT"
, "NAD": "$"
, "NPR": "₨"
, "ANG": "ƒ"
, "NZD": "$"
, "NIO": "C$"
, "NGN": "₦"
, "NOK": "kr"
, "OMR": "﷼"
, "PKR": "₨"
, "PAB": "B/."
, "PYG": "Gs"
, "PEN": "S/."
, "PHP": "₱"
, "PLN": "zł"
, "QAR": "﷼"
, "RON": "lei"
, "RUB": "₽"
, "SHP": "£"
, "SAR": "﷼"
, "RSD": "Дин."
, "SCR": "₨"
, "SGD": "$"
, "SBD": "$"
, "SOS": "S"
, "ZAR": "R"
, "LKR": "₨"
, "SEK": "kr"
, "CHF": "CHF"
, "SRD": "$"
, "SYP": "£"
, "TZS": "TSh"
, "TWD": "NT$"
, "THB": "฿"
, "TTD": "TT$"
, "TRY": ""
, "TRL": "₤"
, "TVD": "$"
, "UGX": "USh"
, "UAH": "₴"
, "GBP": "£"
, "USD": "$"
, "UYU": "$U"
, "UZS": "лв"
, "VEF": "Bs"
, "VND": "₫"
, "YER": "﷼"
, "ZWD": "Z$"
}

},{}],10:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}]},{},[6])(6)
});