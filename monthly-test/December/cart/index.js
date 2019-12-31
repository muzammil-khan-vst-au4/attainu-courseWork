const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./models/index.js');
//const controllers = require('./controllers/index.js');

app.use(express.static('public'));


const hbs = exphbs.create({
	extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');



app.get('/', function(req, res) {
    res.send("hello!");
});



/* app.listen(3000, function() {
    console.log("Started on port 3000");
}) */

db.connect()
	.then(function () {
		app.listen(PORT, function () {
			console.log("Application has started in environment " + env + " and running on port: ", PORT);
			//console.log(process.env);
		}).on('error', function (error) {
			console.log("Unable to start app. Error >>>>", error);
		});
	}).catch(function (error) {
		console.log("Failed to setup connecton with database.", error);
	});	