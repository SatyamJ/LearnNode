var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/conFusion';
var crudOperations = require('./mongo_crudOperations');

mongoClient.connect(url, function(err, db){
	assert.equal(err, null);
	console.log(`Connected to database`);
	crudOperations.insert(db, 'dishes', {"name": "pizza", "description": "italian food"}, function(err, res){
		assert.equal(err, null);
		console.log(res);

		crudOperations.find(db, 'dishes', function(err, res){
			assert.equal(err, null);
			console.log(res);

			crudOperations.update(db, 'dishes', {"name": "pizza"}, {"description": "american"}, function(err, res){
				assert.equal(err, null);
				console.log(res.result.n);

				crudOperations.find(db, 'dishes', function(err, res){
					assert.equal(err, null);
					console.log(res);	

					crudOperations.remove(db, 'dishes', {"name": "pizza"}, function(err, res){
						assert.equal(err, null);
						console.log(res.result.n);

						db.dropCollection('dishes', function(err, res){
							assert.equal(err, null);
							console.log(res);
						});
					});
				});	
			});
		})
	});
});