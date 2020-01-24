// First we need to require express
var express = require("express");
var bodyParser = require("body-parser");

// Setup the express app
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
// Middleware to serve up static files
app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/contact", function(req, res) {
	console.log(req.query);
	res.render("contact", { qs: req.query });
});

// when we get the post request from contact. this middleware will parse it and store it in the request
app.post("/contact", urlencodedParser, function(req, res) {
	console.log(req.body);
	res.render("contact-success", { data: req.body });
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
