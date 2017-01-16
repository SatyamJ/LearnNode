var http = require('http');
var express = require('express');

var port = 3000;
var hostname = 'localhost';

var app = express();

app.use(function(req, res){
	console.log(req.headers);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<html><title>Hello World</title><body><h1>First express server</h1></body></html>');
});

var server = http.createServer(app);
server.listen(port, hostname, function(){
	console.log('Server running on http://'+hostname+':'+port);
});