/*
Automatically update the indexCDN.html and mainCDN.js files
 */

import fs from 'fs';

import config from './config.json' assert { type: 'json' };

const main = fs.readFileSync(
  new URL('../site/src/main.js', import.meta.url),
  'utf-8',
);
let mainCDN = main.replace(
  "baseUrl: 'lib/visualizer'",
  `baseUrl: 'https://www.lactame.com/visualizer/${config.visualizer.version}'`,
);
fs.writeFileSync(new URL('../site/src/mainCDN.js', import.meta.url), mainCDN);

const index = fs.readFileSync(
  new URL('../site/index.html', import.meta.url),
  'utf-8',
);
const indexCDN = index.replace(
  '<script data-main="src/main" src="lib/visualizer/components/requirejs/require.js">',
  `<script data-main="src/mainCDN" src="https://www.lactame.com/visualizer/${config.visualizer.version}/components/requirejs/require.js">`,
);
fs.writeFileSync(new URL('../site/indexCDN.html', import.meta.url), indexCDN);
