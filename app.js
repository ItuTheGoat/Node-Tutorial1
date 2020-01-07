//Readable streams

//  Creating a server
var http = require("http");
var fs = require("fs");

// Creates a readable stream for us
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// Taking what we're reading, and writing it into a text file.
// myReadStream.on("data", function(chunk) {
// 	console.log("new chunk received");
// 	myWriteStream.write(chunk);
// });

// Easier way of doing the part above
myReadStream.pipe(myWriteStream);

// from the create read stream, we listen for the data event and receive data in chunks
// myReadStream.on("data", function(chunk) {
// 	console.log("new chunk received");
// 	console.log(chunk);
// });

// // Request is what the client sends to the server
// // Response is what the server communicates back
// var server = http.createServer(function(req, res) {
// 	console.log("request was made: " + req.url);
// 	res.writeHead(200, { "Content-Type": "text/plain" });
// 	res.end("Hey ninjas");
// });

// // Specifying the port
// server.listen(3000, "127.0.0.1");
// console.log("Listening to port 3000");
