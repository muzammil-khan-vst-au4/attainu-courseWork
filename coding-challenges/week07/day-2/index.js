const express = require('express');
const app = express();
const PORT = 9090;

var nameArray = ["Ananya", "Anamika", "Nisha", "Nishant", "Nishank", "Ansal", "Gopi", "Arkesh" ,"Muzammil", "John", "Andy",
                  "Cris", "Cristiano", "Marcel", "Marcelo", "James"];
app.get('/', function(req, res) {
    res.send('Hello! This is the homepage.');
});

app.get('/find', function(req, res){
    var searchResult = [];
    console.log("Query parameters >>>", req.query);
    var findName = req.query.name;
    if(!findName){
        res.send("Invalid query");
    }
    else {
    nameArray.forEach(function(element) {
        if(element.substring(0,findName.length) === findName) {
            searchResult.push(element);
        }
    });
    console.log(searchResult);
    res.send(searchResult);
    }
});


app.listen(PORT, function(){
    console.log("App has started and running on port", PORT);
});