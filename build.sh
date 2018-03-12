#!/bin/sh
# Package add-in into zip file
mkdir -p dist
rm -rf dist/asciidoctor-browser-renderer-${npm_package_version}
mkdir dist/asciidoctor-browser-renderer-${npm_package_version}
cp -r src/* dist/asciidoctor-browser-renderer-${npm_package_version}
cp -t dist/asciidoctor-browser-renderer-${npm_package_version} README.adoc LICENSE CHANGELOG.adoc
cd dist/asciidoctor-browser-renderer-${npm_package_version}
rm ../asciidoctor-browser-renderer-${npm_package_version}.zip
zip -r -FS ../asciidoctor-browser-renderer-${npm_package_version}.zip *
