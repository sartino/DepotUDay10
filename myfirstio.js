var fs = require('fs');
filename = fs.readFileSync(process.argv[2]);
result = filename.toString();
console.log(result.split('\n').length -1);