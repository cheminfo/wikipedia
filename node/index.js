#!/usr/bin/env node

if (process.platform === 'win32') {
    console.log('This script is not compatible with Windows platform');
    process.exit(1);
}

var fs = require('fs'),
    join = require('path').join,
    request = require('superagent'),
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

updateActelion(config.actelion);

updateVisualizer(config.visualizer);

function updateActelion(actelion) {

    console.log('updating actelion library');

    if (!actelion.version) {
        throw 'No actelion version defined in config.json';
    }

    var dir = join(tmpDir, 'actelion');
    mkdir(dir);

    var tmpActFile = join(dir, 'actelion.js');

    if (compareLast(actelion.version, dir)) {
        console.log('actelion library already up-to-date');
    } else {
        request.get('http://www.lactame.com/lib/actelion/' + actelion.version + '/actelion.js').buffer().end(function (err, res) {

            console.log('downloading actelion library from lactame.com');

            if(res.status !== 200) {
                throw 'actelion version ' + actelion.version + ' not found on remote server';
            } else {
                fs.writeFileSync(tmpActFile, res.text);
                fs.writeFileSync(join(dir, 'last.txt'), actelion.version);
                copyActelion(tmpActFile);
            }

        });
    }

}

function copyActelion (dir) {
    console.log('copying actelion library');
    var actLibDir = join(libDir, 'actelion');
    mkdir(actLibDir);
    fs.writeFileSync(join(actLibDir, 'actelion.js'), fs.readFileSync(dir));
    console.log('actelion library up-to-date');
}

function updateVisualizer(visualizer) {

    console.log('updating the visualizer');

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
            throw 'Could not install required npm dependencies';
        }
        child_process.exec('./node_modules/.bin/grunt build --clean-images', execOptions, function (err) {
            console.log('building the visualizer');
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
    fs.writeFileSync(join(tmpDir, 'visualizer/last.txt'), options.version);

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

function compareLast(versionC, folder) {
    var last = join(folder, 'last.txt');
    var version;
    if(fs.existsSync(last)) {
        version = fs.readFileSync(last,'utf-8');
    }
    return version ? version === versionC : false;
}

function saveLastVisu() {
    fs.writeFileSync(lastVisuFile, JSON.stringify(lastVisu));
}
