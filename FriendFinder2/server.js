
// Dependencies.
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");


var app = express();

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Port number.
var PORT = 9001;

// Cause the server to listen
app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});

