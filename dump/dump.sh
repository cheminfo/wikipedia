#!/bin/bash -e

echo "Fetching data from Wikipedia"
# get everything and generate data.json
node wiki-ids.js
node wiki-rev.js
node wiki-update.js
node wiki-parse.js
