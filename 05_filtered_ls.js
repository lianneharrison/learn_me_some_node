var fs = require('fs');

fs.readdir(process.argv[2], function (err, files) {
  console.log(files);
});
