var fs = require('fs');

fs.readdir(process.argv[2], function (err, data) {

  for (var i = 0; i < data.length; i++) {
    if (data[i].split(".")[1] === process.argv[3]){
      console.log(data[i]);
    };
  };

});
