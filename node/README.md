# Website update scripts

## Update the visualizer

To update the visualizer, select a stable commit (preferably a release commit) and note its full SHA and release version number.  
[Example](https://github.com/NPellet/visualizer/commit/bd61e57c90c5ce26afbc24d34da864d014ef3820): SHA is `bd61e57c90c5ce26afbc24d34da864d014ef3820` and version is `v2.12.1`.  
Update `config.json` with these values and then run `node index.js`. It will create a tmp directory, download the visualizer and build it, then the build will be put in `site/lib/visualizer`.

## Update the CDN files

Whenever the CDN version of the visualizer changes or a modification is made to `index.html` or `src/main.js`, run the command `node cdn.js` to update the CDN-specific files.
