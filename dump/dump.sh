#!/bin/bash -e

echo "Fetching data from Wikipedia"
# get everything and generate data.json
node wiki.js ids
node wiki.js rev
node wiki.js update
node wiki.js parse
