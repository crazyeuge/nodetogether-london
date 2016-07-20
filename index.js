//index.js
//We're going to make a route
//Write a rule to say hello
//When I hit /hello

var express = require('express');
var app = express();

//app.<action>(<route>,<callback>); /call is a function of (req.res)
app.get('/hello',function(request, response){
	console.log("request to /hello")
	response.send("hello!");
});

module.exports = app;