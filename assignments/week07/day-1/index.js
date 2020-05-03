const express = require('express');
const chalk = require("chalk");

const app = express();
const PORT = 9090;

app.get('/', (req, res) => res.send('Hello World! This is the homepage'));
app.get('/contact-us', (req, res) => res.send('This is the Contact-us Page'));

app.listen(PORT, function(res ,req) {
    
    console.log("server running");
    console.log("Server started in port " +chalk.yellow(PORT));
});