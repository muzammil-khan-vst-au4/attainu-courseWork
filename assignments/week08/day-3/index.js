const express = require('express');
const app = express();
const PORT = 9090;

//middleware
app.use(express.json());

//import model
var calcRoute = require('./routes/calculate.js');

//routes
app.post('/add', calcRoute.add);
/* app.post('/sub', calcRoute.sub);
app.post('/mul', calcRoute.mul);
app.post('/div', calcRoute.div); */


app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
