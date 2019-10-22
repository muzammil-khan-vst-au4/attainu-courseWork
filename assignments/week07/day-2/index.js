const express = require('express'); // function
const app = express();
const PORT = 9090;

app.get('/', function (req, res) {
	res.send('Hello World! <br/> To use this calculator modify the url accordingly <br/> http://localhost:9090/add/number1/number2 <br/>You can do add, sub, mul and div');
  })

app.get("/add/:number1/:number2",function(req, res) {
	var number1 = parseFloat(req.params.number1);
	var number2 = parseFloat(req.params.number2);
	console.log(number1, number2);
	var addition = (number1 + number2).toString();
	res.send("Sum of numbers is "+addition);
});

app.get("/sub/:number1/:number2",function(req, res) {
	var number1 = parseFloat(req.params.number1);
	var number2 = parseFloat(req.params.number2);
	console.log(number1, number2);
	var difference = (number1 - number2).toString();
	res.send("Differnce in numbers is "+difference);
});

app.get("/mul/:number1/:number2",function(req, res) {
	var number1 = parseFloat(req.params.number1);
	var number2 = parseFloat(req.params.number2);
	console.log(number1, number2);
	var multiplication = (number1 * number2).toString();
	res.send("Multiplication of numbers is "+multiplication);
});

app.get("/div/:number1/:number2",function(req, res) {
	var number1 = parseFloat(req.params.number1);
	var number2 = parseFloat(req.params.number2);
	console.log(number1, number2);
	var divide = (number1 / number2).toString();
	res.send("Division of numbers is "+divide);
});


//create server on port
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
})
