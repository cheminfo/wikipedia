# Data update scripts

This directory contains the scripts needed to dump and parse the data from Wikipedia.

The dump process is divided in 4 steps that are all accessible from the main `wiki.js` file.

## `node wiki.js ids`

Get the list of ids of all pages that contain a Chembox or Infobox_drug (Drugbox) template.  
The list is written to `ids.json`.

## `node wiki.js rev`

Get latest revision number of each page found in `ids.json`.  
The list is written to `rev.json`. If for some reason, the revision information of page could not be fetched, the page will be listed in `rev-missing.json`.

## `node wiki.js update`

Get the content of the new pages and update pages if the revision has changed.  
The pages are stored in the `pages` directory and the current versions in `update.json`. This allows for incremental updates.

## `node wiki.js parse`

Parse all pages to extract the SMILES and generate `data.json`, `smiles.txt` and `idcode.txt`.
This command can be run with arguments :

- `-l, --limit <n>` Limit the parsing to the `n` first pages. Useful for debugging.
- `-p, --publish` publish the data files the the `site` directory.
