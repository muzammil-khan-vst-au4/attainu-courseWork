const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./models/index.js');
const cartControllers = require('./controllers/cart.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


const hbs = exphbs.create({
	extname: '.hbs',
	helpers: {
        inc: function (value, options) {
			return parseInt(value) + 1;
		},
    }
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');



app.get('/', function(req, res) {
	res.redirect('/cart/retrieve');
});
app.post('/cart/add', cartControllers.addItem);
app.delete('/cart/remove/:itemId',cartControllers.removeItem)
app.post('/cart/update/:itemId', cartControllers.updateItem)
app.get('/cart/retrieve', cartControllers.getCart) 



/* app.listen(3000, function() {
    console.log("Started on port 3000");
}) */
const PORT = 3000;
db.connect()
	.then(function () {
		app.listen(PORT, function () {
			console.log("Application has started and running on port: ", PORT);
			//console.log(process.env);
		}).on('error', function (error) {
			console.log("Unable to start app. Error >>>>", error);
		});
	}).catch(function (error) {
		console.log("Failed to setup connecton with database.", error);
	});	