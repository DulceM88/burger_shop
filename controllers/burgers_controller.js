var express = require("express");

var router = express.Router();

//Imports burger model to use its database functions
var burger = require("../models/burger.js");

//routes and logic for them

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data 
		};
		console.log(hbsObject);
		res.render("index",hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.create([
		"burger_name","eaten_yet"
		],[
		 req.body.burger_name, req.body.eaten_yet
		], function(){
			res.redirect("/");
		});
	});

// Export routes for server.js to use.
module.exports = router;