// First we need to require express
var express = require("express");

// Setup the express app
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render(__dirname + "/index");
});

app.get("/contact", function(req, res) {
	res.render(__dirname + "contact");
});

// Render a view
app.get("/profile/:name", function(req, res) {
	var data = {
		cars: 24,
		race: "dairy",
		hobbies: ["swerving", "earning", "curling", "whirling"]
	};
	res.render("profile", { person: req.params.name, data: data });
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
