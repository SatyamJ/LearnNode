var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.all('/dishes', function(req, res, next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	next();
});

app.get('/dishes', function(req, res, next){
	res.end('Sending all dishes to you');
});

app.post('/dishes', function(req, res, next){
	res.end('Replacing the existing dishes with new dishes with name: '+ req.body.name+' and description: '+req.body.description);
});

app.delete('/dishes', function(req, res, next){
	res.end('Deleting all dishes');
});

app.all('/dishes/:dishId', function(req, res, next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	next();
});

app.get('/dishes/:dishId', function(req, res, next){
	res.end('Getting dish with id:'+req.params.dishId);
});

app.put('/dishes/:dishId', function(req, res, next){
	res.end('Add a new dish with following information: \n Dish ID:' +req.params.dishId+ '\n Name:'+req.body.name+ '\n Description:'+req.body.description);
});

app.post('/dishes/:dishId', function(req, res, next){
	res.end('Updating dish ID:' +req.params.dishId+ 'with new information \n Name:'+req.body.name+ '\n Description:'+req.body.description);
});

app.delete('/dishes/:dishId', function(req, res, next){
	res.end('Deleting dishId'+req.params.dishId);
});

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
	console.log(`Server running on http://${hostname}:${port}`);
});