const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9090;
var MongoClient = require('mongodb').MongoClient;
const csv=require('csvtojson');
const csvFilePath='./data.csv';
var url = 'mongodb://localhost:27017';

app.use(express.json());
app.use(express.urlencoded())

// Configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});

// Register Handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
var db=null;
var collection=null;
MongoClient.connect(url, function(error, client) {
	if(error){
		throw error;
	}
	db = client.db('eagle-muzammil-khan');
	collection = db.collection('users');
	csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		insertdata(jsonObj);
	})
	console.log("Connection successfull");
});
function insertdata(data){
	collection.insertMany(data, function(error, response) {
		if(error){
			console.log("Failed to insert");
		}
		else {
			console.log("inserted");
		}
	})
}

app.get('/users', function(req, res) {
	collection.find().toArray(function(error, response) {
		if(error){
			return res.send({
				status: false,
				message: error
			});
		}
		return res.render('home',{
			response
		});
	});
})

app.post('/users', function(req, res) {
	var data = req.body;
	collection.insertOne(data, function(error, response){
		if(error){
			return res.send({
				status: false,
				message: error
			});
		}
		return res.send({
			status: true,
			message:"Successfully created user"
		});
	})
})

app.put('/users', function(req, res) {
	var identifier = req.body.identifier;
	var updateData = req.body.update;

	collection.update({
		name : identifier
	}, {
		"$set": updateData
	}, function(error, response) {
		if(error){
			return res.send({
				status: false,
				message: error
			});
		}
		return res.send({
			status: true,
			message:"Successfully updated user"
		});
	})
})

app.delete('/users', function(req, res) {
	var identifier = req.body.identifier;
	collection.deleteOne({ name : identifier }, function(err, result) {
		if(error){
			return res.send({
				status: false,
				message: error
			});
		}
		return res.send({
			status: true,
			message:"Successfully deleted user"
		});
	})
})

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
})
