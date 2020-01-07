var fs = require("fs");

// deletes file or dir
// fs.unlink("writeMe.txt", () => {});

// Synchronous way of creating a directory
// fs.mkdirSync("stuff");

//Asynchronous way of creating a dir
// fs.mkdir("stuff", () => {
// 	fs.readFile("readMe.txt", "utf8", function(err, data) {
// 		fs.writeFile("./stuff/writeMe.txt", data, () => {});
// 	});
// });

// Synchronous way or removing directory
// fs.rmdirSync("Stuff");

// Async way
fs.unlink("./stuff/writeMe.txt", () => {
	fs.rmdir("stuff", () => {});
});
