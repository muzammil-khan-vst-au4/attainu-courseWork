const express = require('express');
const app = express();
const PORT = 9090;
var session = require('express-session');

app.use(express.json());
app.use(session({
	name: 'Somename',
	secret: 'adfasdfas',
	resave : true,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		maxAge: 1200000,
		path: '/',
		sameSite: true,
		secure: false
	}
}));
//import controller
var bookRoute = require('./routes/book.js');
var authRoute = require('./routes/auth.js');

app.use(authRoute.checkIfLoggedIn);

//routes
app.get('/', function(req, res) {
	res.send("Hello! This is the homepage.");
});
app.post('/book/create', bookRoute.create);
app.post('/login', authRoute.login);
app.post('/logout', authRoute.logout);

//creating server
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});