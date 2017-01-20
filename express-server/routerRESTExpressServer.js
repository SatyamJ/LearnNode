var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leadershipRouter = require('./leadershipRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter.dishRouter);
app.use('/promotions', promoRouter.promotionRouter);
app.use('/leaderships', leadershipRouter.leadershipRouter);

app.use(express.static(__dirname+'/public'));
app.listen(port, hostname, function(){
	console.log(`Server running on http://${hostname}:${port}`);
});

