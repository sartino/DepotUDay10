2 files

/*
var fs = require('fs')
var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err, list) {
	for(var i=0; i < list.length; i++) {
		if(list[i].match('.md'))
		console.log(list[i]);
	}
})    <----offical answer---->
var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/