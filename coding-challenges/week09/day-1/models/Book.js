var bookObj = require("./../Book.json");

const Book = {};

Book.search = function(input, callback) {
    var searchResult = [];
    for(var i in bookObj){
		var inputCapitalise = input.charAt(0).toUpperCase() + input.slice(1);
		if(inputCapitalise == bookObj[i].language){
			searchResult.push(bookObj[i]);
		}
    }
    return callback(null, searchResult);
}
module.exports = Book;