#!/bin/bash -e

echo "Updating project files"
git pull
npm ci

echo "Fetching data from Wikipedia"
# get everything and generate data.json
node wiki-ids.js
node wiki-rev.js
node wiki-update.js
node wiki-parse.js -p

# pull again to avoid conflicts, then commit the new data
echo "Publishing data"
git pull
git add ../public/data.json ../public/smiles.txt ../public/idcode.txt
git commit -m "update data"
git push
