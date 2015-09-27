var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding("utf8")
    response.on("data", console.log)
    response.on("error", console.error)
});

//      perform a http get request to a url provided to you
//      as the first command line argument.
//      write the string contents of 'each' 'data' event from
//      the response to a new line on the console.
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