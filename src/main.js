const source = document.body.innerText;
const processor = Asciidoctor({runtime: {platform: 'browser'}});
const output = processor.convert(source, {header_footer: true});
const parser = new DOMParser();
const doc = parser.parseFromString(output, "text/html");
// Using outerHTML results in NoModificationAllowedError error
document.documentElement.innerHTML = doc.documentElement.innerHTML;
// <script> elements parsed with DOMParser and innerHTML aren't executed.
// Let's execute them with this simple method.
Array.from(document.getElementsByTagName('script')).forEach((script) => {
  // script.cloneNode(true) doesn't work. Copy them manually.
  const newScript = document.createElement('script');
  if (script.type) newScript.type = script.type;
  if (script.src) {
    newScript.src = script.src;
  } else {
    newScript.textContent = script.textContent;
  }
  script.parentNode.replaceChild(newScript, script);
});
