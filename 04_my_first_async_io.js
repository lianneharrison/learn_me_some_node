var fs = require('fs');

var bufferString, bufferStringSplit;

fs.readFile(process.argv[2], function (err, data) {
  bufferString = data.toString();
  bufferStringSplit = bufferString.split('\n');

  console.log(bufferStringSplit.length - 1);

});
