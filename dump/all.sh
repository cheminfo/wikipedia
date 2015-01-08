#!/bin/bash -e

node wiki.js ids
node wiki.js rev
node wiki.js update
node wiki.js parse -p
