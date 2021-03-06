const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9090;
var bookObj = require("./Book.json");	
const bookRoute = require('./routes/book.js');

app.use(express.json());
app.use(express.urlencoded())

// Configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});

// Register Handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


app.get('/search', function (req, res){
    res.render('home', {
		bookObj
	});
 });

//var searchResult = [];
app.get('/search/*', bookRoute.search);

app.get('/', function(req,res) {
	var input = req.body.search
	console.log(input);
	
	res.render('home', {
		bookObj
	});
})

// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});