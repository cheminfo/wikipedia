#!/usr/bin/env node

import fs from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

import tar from 'tar';
import undici from 'undici';

import config from './config.json' assert { type: 'json' };

const tmpDir = new URL('../tmp/', import.meta.url);
mkdir(tmpDir);

const libDir = new URL('../site/lib/', import.meta.url);
mkdir(libDir);

const lastVisuFile = new URL('visualizer/last.json', tmpDir);
let lastVisu;

await updateVisualizer(config.visualizer);

async function updateVisualizer(visualizer) {
  console.log('updating the visualizer');

  if (process.platform === 'win32') {
    console.log('This script is not compatible with Windows platform');
    process.exitCode = 1;
    return;
  }

  if (!visualizer.version) {
    throw new Error('No visualizer version defined in config.json');
  }

  const visualizerTmp = new URL('visualizer/', tmpDir);
  mkdir(visualizerTmp);

  if (fs.existsSync(lastVisuFile)) {
    lastVisu = JSON.parse(fs.readFileSync(lastVisuFile));
  } else {
    lastVisu = {};
  }

  if (lastVisu.version !== visualizer.version) {
    lastVisu = {
      version: visualizer.version,
    }; // Need to redo everything if the version changes
  }

  saveLastVisu();

  if (lastVisu.finish) {
    console.log('visualizer already up-to-date');
  } else if (lastVisu.components) {
    await moveVisualizer(lastVisu.components);
  } else if (lastVisu.tar) {
    await removeVisualizerComponents(lastVisu.tar, visualizer);
  } else {
    const visualizerTmpExtract = new URL('extract/', visualizerTmp);
    rmrf(visualizerTmpExtract);
    mkdir(visualizerTmpExtract);
    console.log('downloading visualizer tarball from lactame');
    let tarballUrl = `https://www.lactame.com/visualizer/${visualizer.version}.tar.gz`;
    const { statusCode, body } = await undici.request(tarballUrl);
    if (statusCode !== 200) {
      throw new Error(
        `Could not get the visualizer from lactame.com: ${statusCode}`,
      );
    }
    const dest = fileURLToPath(visualizerTmpExtract);
    const stream = tar.x({
      cwd: dest,
    });
    await pipeline(body, stream);
    lastVisu.tar = visualizerTmpExtract;
    saveLastVisu();
    await removeVisualizerComponents(visualizerTmpExtract, visualizer);
  }
}

async function removeVisualizerComponents(dir, options) {
  console.log('Removing unneeded components');
  if (options.del) {
    for (const path of options.del) {
      rmrf(new URL(path, dir));
    }
  }

  lastVisu.components = dir;
  saveLastVisu();

  moveVisualizer(dir);
}

async function moveVisualizer(dir) {
  console.log('Moving visualizer to lib');
  const visualizerLib = new URL('visualizer', libDir);
  rmrf(visualizerLib);
  fs.renameSync(new URL('../extract', dir), visualizerLib);

  lastVisu.finish = true;
  saveLastVisu();

  console.log('visualizer up-to-date');
}

function mkdir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function rmrf(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

function saveLastVisu() {
  fs.writeFileSync(lastVisuFile, JSON.stringify(lastVisu));
}
