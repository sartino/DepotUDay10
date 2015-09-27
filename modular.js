var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})

/*
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

    <----offical answer---->
var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/