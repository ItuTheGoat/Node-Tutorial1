// First we need to require express
var express = require("express");

// Setup the express app
var app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res) {
	res.send("Contact Page");
});

// Route parameters
app.get("/profile/:id", function(req, res) {
	res.send("You requested to see a profile with the ID of " + req.params.id);
});

// Then we need to listen for the port
app.listen(3000);

/* 
	HTTP METHODS
	- GET
	- POST
	- DELETE
	- PUT
*/
