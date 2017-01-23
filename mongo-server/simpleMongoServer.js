var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/conFusion';

mongoClient.connect(url, function(err, db){
	assert.equal(err, null);
	console.log(`Connection to database established`);
	var dishCollection = db.collection('dishes');

	dishCollection.insertOne({'name': 'pizza', 'description': 'italian cusine'}, function(err, res){
		assert.equal(err, null);
		console.log(res.ops);
		dishCollection.find({}).toArray(function(err, dishArray){
			assert.equal(err, null);
			console.log(dishArray);
			db.dropCollection('dishes', function(err, result){
				assert.equal(err, null);
				console.log(result);
				db.close();
			});
		});
	});
});