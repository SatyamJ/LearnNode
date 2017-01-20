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
		res.end('Getting the promotions');
	})
	.post(function(req, res, next){
		res.end('Replacing the existing promotions with new promotions with name: '+req.body.name+' and description: '+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting all promotions');
	});

router.route('/:promoId')
	.all(function(req, res, next){
		res.writeHead(200, {'Content-Type':'text/plain'})
		next();
	})
	.get(function(req, res, next){
		res.end('Getting promotion with id:'+req.params.promoId);
	})
	.put(function(req, res, next){
		res.end('Add a new promotion with following information: \n promotion ID:' +req.params.promoId+ '\n Name:'+req.body.name+ '\n Description:'+req.body.description);
	})
	.post(function(req, res, next){
		res.end('Updating promotion ID:'+req.params.promoId+' with new information \n Name:'+req.body.name+ '\n Description:'+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting promotionId'+req.params.promoId);
	});

exports.promotionRouter = router;
	