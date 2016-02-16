#!/usr/bin/env node

var fs = require('fs'),
    join = require('path').join,
    tarball = require('tarball-extract'),
    child_process = require('child_process'),
    del = require('del');

var config = require('./config.json');

var tmpDir = join(__dirname, '../tmp');
var libDir = join(__dirname, '../site/lib');
mkdir(tmpDir);
mkdir(libDir);

var lastVisuFile = join(tmpDir, 'visualizer/last.json');
var lastVisu;

updateVisualizer(config.visualizer);

function updateVisualizer(visualizer) {

    console.log('updating the visualizer');
    
    if (process.platform === 'win32') {
        console.log('This script is not compatible with Windows platform');
        return;
    }

    if (!visualizer.version) {
        throw 'No visualizer version defined in config.json';
    }

    var dir = join(tmpDir, 'visualizer');
    mkdir(dir);

    if(fs.existsSync(lastVisuFile)) {
        lastVisu = JSON.parse(fs.readFileSync(lastVisuFile));
    } else {
        lastVisu = {};
    }

    if (lastVisu.version !== visualizer.version) {
        lastVisu = {
            version: visualizer.version
        }; // Need to redo everything if the version changes
    }

    saveLastVisu();

    if(lastVisu.finish) {
        console.log('visualizer already up-to-date');
    } else if (lastVisu.components) {
        moveVisualizer(lastVisu.components, visualizer)
    } else if (lastVisu.build) {
        removeVisualizerComponents(lastVisu.build, visualizer);
    } else if (lastVisu.tar) {
        buildVisualizer(lastVisu.tar, visualizer);
    } else {
        del.sync('visualizer*', {cwd: dir});
        console.log('downloading visualizer tarball from github');
        var tarballUrl = 'https://codeload.github.com/NPellet/visualizer/tar.gz/'+ visualizer.version;
        tarball.extractTarballDownload(tarballUrl , join(dir, 'visualizer.tar.gz'), join(dir, 'visualizer'), {}, function(err, result) {

            if (err) {
                throw 'Could not get and extract the visualizer from Github';
            }

            var tar = join(dir, 'visualizer/visualizer-'+visualizer.version);
            lastVisu.tar = tar;

            saveLastVisu();

            buildVisualizer(tar, visualizer);

        });
    }

}

function buildVisualizer(dir, options) {
    var execOptions = {
        cwd: dir
    };
    console.log('installing npm dependencies');
    child_process.exec('npm install', execOptions, function (err) {
        if (err) {
            console.log(err);
            throw 'Could not install required npm dependencies';
        }
        console.log('building the visualizer');
        child_process.exec('./node_modules/.bin/grunt build --clean-images', execOptions, function (err) {
            if(err) {
                throw 'Could not build the visualizer';
            }

            var buildDir = join(dir, 'build');
            lastVisu.build = buildDir;

            saveLastVisu();

            removeVisualizerComponents(buildDir, options);
        });
    })
}

function removeVisualizerComponents(dir, options) {
    console.log('Removing unneeded components');
    if (options.del) {
        del.sync(options.del, {
            cwd: dir,
            root: dir
        });
    }

    lastVisu.components = dir;
    saveLastVisu();

    moveVisualizer(dir, options);
}

function moveVisualizer(dir, options) {
    console.log('Moving visualizer to lib');
    del.sync('visualizer', {cwd: libDir});
    fs.renameSync(dir, join(libDir, 'visualizer'));

    lastVisu.finish = true;
    saveLastVisu();

    console.log('visualizer up-to-date');
}

function mkdir(dir) {
    try {
        fs.mkdirSync(dir);
    } catch(e) {
        return false;
    }
    return true;
}

function saveLastVisu() {
    fs.writeFileSync(lastVisuFile, JSON.stringify(lastVisu));
}
