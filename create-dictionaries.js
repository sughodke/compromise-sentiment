const fs = require('fs')
const efrt = require('efrt')

function writeDictionary(filename, sourceData) {
  const str = efrt.pack(sourceData);
  fs.writeFile(`./dictionary/${filename}`, str, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(`Wrote ${str.length} characters to ${filename}`);
  });
}

writeDictionary('afinn-165.txt', require('afinn-165'));
writeDictionary('pattern.txt', require('./raw/pattern.polarity.json'));

