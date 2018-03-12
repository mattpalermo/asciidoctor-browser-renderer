#!/bin/sh
# Fetch the contents of /src/vendor
# This method relies on npm install being run first.
mkdir -p src/vendor
cp node_modules/asciidoctor.js/dist/asciidoctor.js src/vendor/
cp node_modules/asciidoctor.js/dist/css/asciidoctor.css src/vendor/
