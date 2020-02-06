var fs = require ('fs');
console.log("Begin reading File");

var data = fs.readFileSync ("input.txt");
console.log(data.toString());
console.log("Program Finished")