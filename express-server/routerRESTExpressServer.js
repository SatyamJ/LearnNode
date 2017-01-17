var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

var router = express.Router();
router.use(bodyParser.json());

router.route('/')
	.put(function(req, res, next){
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.end('Cannot Put. Bad Request');
	})
	.all(function(req, res, next){
		res.writeHead(200, {"Content-Type":"text/plain"});
		next();
	})
	.get(function(req, res, next){
		res.end('Getting the dishes');
	})
	.post(function(req, res, next){
		res.end('Replacing the existing dishes with new dishes with name: '+req.body.name+' and description: '+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting all dishes');
	});

router.route('/:dishId')
	.all(function(req, res, next){
		res.writeHead(200, {'Content-Type':'text/plain'})
		next();
	})
	.get(function(req, res, next){
		res.end('Getting dish with id:'+req.params.dishId);
	})
	.put(function(req, res, next){
		res.end('Add a new dish with following information: \n Dish ID:' +req.params.dishId+ '\n Name:'+req.body.name+ '\n Description:'+req.body.description);
	})
	.post(function(req, res, next){
		res.end('Updating dish ID:'+req.params.dishId+' with new information \n Name:'+req.body.name+ '\n Description:'+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting dishId'+req.params.dishId);
	});

app.use('/dishes', router);

app.use(express.static(__dirname+'/public'));
app.listen(port, hostname, function(){
	console.log(`Server running on http://${hostname}:${port}`);
});

