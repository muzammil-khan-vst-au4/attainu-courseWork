const Book = {};

Book.create = function(bookName, authorName, callback) {
	//console.log(bookName, authorName);
	if(!bookName || !authorName) {
		return callback("Error! Book name and author name is required");
	}
	console.log("Adding book with following details: ", bookName, authorName);
	return callback(null, "Success! Book has been stored");		
}

module.exports = Book;