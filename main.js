const source = document.body.innerText;
const processor = Asciidoctor({runtime: {platform: 'browser'}});
const output = processor.convert(source, {header_footer: true});
console.log(output);
const parser = new DOMParser();
const doc = parser.parseFromString(output, "text/html");
document.body = doc.body;
document.head.innerHTML = doc.head.innerHTML;
