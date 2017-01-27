var mongoose = require('mongoose');
var assert = require('assert');
var Dishes = require('./models/dishes-1');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind('connection error:'));
db.once('open', function(){
	console.log('connected to the mongo db server');

	var dish1 = new Dishes({
		name: 'Pizza',
		description: 'Italian dish'
	});

	dish1.save(function(err){
		if(err)
			throw err;
		else{
			console.log('Dish created.')
			Dishes.find({}, function(err, dishes){
				if(err)
					throw err;
				
				console.log(dishes);
				db.collection('dishes').drop(function(err, res){

					if(err)
						throw err;
					console.log('collection dropped')
					db.close();
				});
				
			});
		}
	});
})