create 2 files.
prints a list of files filtered by WindowTimersExtension
1st arg dir name
2nd arg ext filter
module- export 1 function with 3 args:
	dir name
	file ext string 
	callback function 
if an error, 1st arg will be null 
2nd will be the data 
data will be list of files as array 

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