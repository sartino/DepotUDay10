var http = require("http");
var bl = require("bl");
var results = [];
var count = 0;

function printResults () {
	for (var i = 0; i < 3; i++)
	console.log(results[i])
}
function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
			return console.error(err)
			results[index] = data.toString()
			count++
			if(count === 3)
			printResults()
		}))
	})
}
	for (var i = 0; i < 3; i++)
	httpGet(i);
/*   
    ---------requirements------------
	use http.get()
	provided 3 url's as the 1st 3 command-line args
	collect the complete content provided by ea of the url's
		and print to console. (just data-no length)-one line per url.
		must print out in the same order as they are provided.
	queue the results and keep track of how many have returned content.
		once i have them all, print the data.
		counting callbacks--'async' or 'after'.
		
	---------previous answer-----------
var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
			data = data.toString()
			console.log(data.length)
			console.log(data)
	}))	
})	  
-----Official answer-----
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)
*/