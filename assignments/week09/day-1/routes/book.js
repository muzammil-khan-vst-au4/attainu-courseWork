const BookController = {};
const Model = require('./../models/Book.js');

BookController.create = function(request, response) {
	var name = request.body.name;
	var author = request.body.author;
	Model.create(name, author, function(error, data) {
		if(error) {
			return response.status(500).json(
				{
					status: false,
					error
				}
			);
		}

		return response.status(200).json(
			{
				status: true,
				data
			}
		);
	});
}

module.exports = BookController;