var express = require('express');//a package in node module 
var server = express();//function called express

// Use www as the "root" directory for all requests.
// if no path is given, it will look for index.html in that directoy.
server.use(express.static('www'));//tell our server where to find our static file 

// Start the server listening on a port
server.listen(3000, function(){
	console.log ("server listening on port " + 3000);
});


























