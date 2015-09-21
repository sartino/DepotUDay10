var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, 'utf8', function(err, data) {
	var total = data.split('\n');
	console.log(total.length-1);
});


/*f  official answer=

var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

 */