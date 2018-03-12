# Asciidoctor browser renderer

Read asciidoc documents in a web browser using asciidoctor

## Getting started

1. Install the web extension in your browser
2. Open or navigate to any asciidoc document in your browser. The following file extensions and similar ones will be rendered:
  * `.ad`
  * `.adoc`
  * `.asc`
  * `.asciidoc`

## Asciidoctor

Extended Asciidoctor syntax is supported since Asciidoctor.js is used to render the documents.
Asciidoctor.js version 1.5.6-preview.5 is used with the default settings and style.

Asciidoctor binaries downloaded from: https://cdnjs.com/libraries/asciidoctor.js/1.5.6-preview.5

## In comparison to "Asciidoctor.js Live Preview"

Asciidoctor.js Live Preview by Guillaume Grossetie found at https://github.com/asciidoctor/asciidoctor-browser-extension is a full featured Asciidoctor browser extension solution with awesome options like live reload and custom styles. However it currently has some problems related to the way that it processes and renders the asciidoc document. In comparison, this extension only does one thing: Upon loading an asciidoc document, output the full HTML output of Asciidoctor to the browser. This seems to work well and avoids some of the current problems in Asciidoctor.js Live Preview.

At the moment this extension is essentially 10 lines of code and so it doesn't have any option to customize output. It just uses the default output from Asciidoctor. This works for now for what I need which is to quickly read my asciidoc notes on any computer or phone (through Firefox Android).
