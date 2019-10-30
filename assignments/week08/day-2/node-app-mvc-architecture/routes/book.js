const BookController = {};
const Model = require('./../models/Book.js');
const moment = require('moment');

BookController.create = function(request, response) {
	var name = request.body.name;
	var author = request.body.author;
	var timeStamp = moment().format();

	Model.create(name, author, function(error, data) {
		if(error) {
			return response.status(500).send({error,timeStamp});
		}

		return response.status(200).send({data,timeStamp});
	});
}

BookController.update = function(request, response) {
	var name = request.body.name;
	var author = request.body.author;
	var timeStamp = moment().format();

	Model.update(name, author, function(error, data) {
		if(error) {
			return response.status(500).send({error,timeStamp});
		}

		return response.status(200).send({data,timeStamp});
	})
}

BookController.get = function(request, response) {
	var name = request.query.name;
	var author = request.query.author;
	var timeStamp = moment().format();

	Model.get(name, author, function(error, data) {
		if(error) {
			return response.status(500).send({error,timeStamp});
		}

		return response.status(200).send({
			data,
			message: "book with details has been retrieved" + name +author,
			timeStamp
			 });
	})
}

BookController.delete = function(request, response) {
	var name = request.body.name;
	var author = request.body.author;
	var timeStamp = moment().format();

	Model.delete(name, author, function(error, data) {
		if(error) {
			return response.status(500).send({error,timeStamp});
		}

		return response.status(200).send({data,timeStamp});
	})
}

module.exports = BookController;