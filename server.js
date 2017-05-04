// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");



// Create an instance of the express app.
var app = express();

// Specify the port.
var port = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");