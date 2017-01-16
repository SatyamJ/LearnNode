var http = require('http');
var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){
	console.log(req.headers)
	res.writeHead(200, {content: 'text/html'});
	res.end('<html><head><title>simple server</title></head><body>this a simple http server</body></html>');
});

server.listen(port, hostname, function(){
	console.log('Server running on http://'+hostname+':'+port);
})
