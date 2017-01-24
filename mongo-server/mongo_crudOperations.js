
var assert = require('assert');

exports.insert = function(db, collectionName, document, callback){
	var collection = db.collection(collectionName);
	collection.insert(document, function(err, res){
		assert.equal(err, null);
		console.log('Inserted record: '+document+'in collection: '+collectionName);
		callback(null, res);
	});
};

exports.find = function(db, collectionName, callback){
	var collection = db.collection(collectionName);
	collection.find({}).toArray(function(err, res){
		assert.equal(err, null);
		console.log('search successful');
		callback(null, res);
	});
};

exports.update = function(db, collectionName, query, update, callback){
	var collection = db.collection(collectionName);
	collection.updateOne(query, {$set: update}, function(err, res){
		assert.equal(err, null);
		console.log('record updated ')
		callback(err, res);
	});
};

exports.remove = function(db, collectionName, document, callback){
	var collection = db.collection(collectionName);
	collection.deleteOne(document, function(err, res){
		assert.equal(err, null);
		console.log('document deleted');
		callback(null, res);
	})
}