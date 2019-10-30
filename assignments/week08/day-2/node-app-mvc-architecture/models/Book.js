const Book = {};
const moment = require('moment');

Book.create = function(bookName, authorName, callback) {
	// Validate the required data before proceeding with main operation
	if(!bookName) {
		return callback("Error! Book name is required");
	}

	if(!authorName) {
		return callback("Error! Author name is required");
	}

	console.log("Adding book with following details: ", bookName, authorName);

	// Spoofing the database call with a delay of 500 milliseconds
	setTimeout(function() {
		return callback(null, "Success! Book has been stored");		
	}, 500);
}

Book.update = function(bookName,authorName, callback) {
	if(!bookName || !authorName) {
		return callback("Error! Bookname and authorname are required");
	}

	console.log("Updating book with the following details: ",bookName, authorName)
	return callback(null, "Book updated successfully");
}

Book.get = function(bookName, authorName, callback) {
	if(!bookName || !authorName) {
		return callback("Error! Book name and author name are required");
	}

	console.log("Getting book with the following details: ", bookName, authorName);
	return callback(null, "Success! book retrieved");

}

Book.delete = function(bookName, authorName, callback) {
	if(!bookName || !authorName) {
		return callback("Error! Book name and author name are required");
	}

	console.log("Deleting book with the following details: ", bookName, authorName);
	return callback(null, "Success! book deleted");
	
}

module.exports = Book;