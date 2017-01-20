var express = require('express');
var bodyParser = require('body-parser');

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
		res.end('Getting the leaderships');
	})
	.post(function(req, res, next){
		res.end('Replacing the existing leaderships with new leaderships with name: '+req.body.name+' and description: '+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting all leaderships');
	});

router.route('/:leadershipId')
	.all(function(req, res, next){
		res.writeHead(200, {'Content-Type':'text/plain'})
		next();
	})
	.get(function(req, res, next){
		res.end('Getting leadership with id:'+req.params.leadershipId);
	})
	.put(function(req, res, next){
		res.end('Add a new leadership with following information: \n leadership ID:' +req.params.leadershipId+ '\n Name:'+req.body.name+ '\n Description:'+req.body.description);
	})
	.post(function(req, res, next){
		res.end('Updating leadership ID:'+req.params.leadershipId+' with new information \n Name:'+req.body.name+ '\n Description:'+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting leadership with Id'+req.params.leadershipId);
	});

exports.leadershipRouter = router;
	