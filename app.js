// fs module
var fs = require("fs");

// Synchronous, which means it blocks all code that comes afterward.
// var readMe = fs.readFileSync("readMe.txt", "utf8");

// Asynchronous version
fs.readFile("readMe.txt", "utf8", function(err, data) {
	console.log(data);
	fs.writeFile("second.txt", data, () => {});
});

// Synchronous version
//fs.writeFileSync("writeMe.txt", readMe);

// Asynchronous version
//fs.writeFile('second.txt', "Yeah it worked")

console.log("Say nothing");
