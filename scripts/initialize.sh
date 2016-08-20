#!/bin/sh

# Run this script after cloning project

# Create dist folder structure.
# Webpack doesn't save files properly if target folders don't exist.
rm -Rf dist
mkdir dist
mkdir dist/frontend
