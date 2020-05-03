const BookController = {};
const Model = require('./../models/Book.js');

BookController.search =  function(req, res) {
    var search = req.query;
    var input = search.query;
    Model.search(input, function(error, searchResult) {
        if(error) {
			return response.status(500).json(
				{
					status: false,
					error
				}
			);
        }
        return res.render('home', {
            searchResult
        });
    })
}

module.exports = BookController;