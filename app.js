//Readable streams

//  Creating a server
var http = require("http");
var fs = require("fs");

// Request is what the client sends to the server
// Response is what the server communicates back
var server = http.createServer(function(req, res) {
	console.log("request was made: " + req.url);
	res.writeHead(200, { "Content-Type": "application/json" });

	// Object which will be served
	var jsonObject = {
		name: "Bruce",
		surname: "Wayne",
		aEgo: "Batman",
		type: "Hero"
	};

	// need to pass a string or buffer in the end() method
	res.end(JSON.stringify(jsonObject));
});

// Specifying the port
server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");

// Serving JSON
