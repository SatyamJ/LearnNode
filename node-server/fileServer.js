var http = require('http');
var path = require('path');
var fs = require('fs');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){
	console.log(req.headers);

  	if(req.method == 'GET'){
  		var fileURL = req.url;
  		var filePath;

  		console.log('fileurl: '+fileURL);
  		if(fileURL == '/'){
  			console.log('index called');
  			fileURL = '/index.html';
  		}	
  		
  		filePath = path.resolve('./public'+fileURL);

  		var fileExtn = path.extname(filePath);

  		if(fileExtn == '.html'){
	  		fs.exists(filePath, function(exists){
	  			if(exists){
	  				res.writeHead(404, {'Content-Type': 'text/html'});
	  				fs.createReadStream(filePath).pipe(res);
	  			}else{
	  				res.writeHead(404, {'Content-Type': 'text/html'});
    				res.end('<h1>Error 404: http://localhost:3000'+req.url+' not found!</h1>');	
	  			}
	  		});
	  	}else{
	  		res.writeHead(404, {'Content-Type': 'text/html'});
    		res.end('<h1>Error 404: File with extension '+fileExtn+' not supported</h1>');	
	  	}	

  	}else{
    	res.writeHead(404, {'Content-Type': 'text/html'});
    	res.end('<h1>Error 404 '+req.method+' not supported</h1>');
  	}
});

server.listen(port, hostname, function(){
	console.log('Server running on http://'+hostname+':'+port);
});
