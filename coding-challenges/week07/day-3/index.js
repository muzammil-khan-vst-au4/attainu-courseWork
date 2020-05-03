const express = require('express');
const app = express();
const PORT = 9090;
var usersArray = [{username: "mk", password: 123456}, {username: "pritam", password: "pritam"}];

app.use(express.json());
app.use(express.urlencoded());
app.get('/', function(req, res) {
    res.status(200).send("Hello World! This is the homepage.");
});

app.use('/login', function (req, res, next) {
    var user = req.body.username;
    var password = req.body.password;
    if(!user || !password){
        res.status(400).send("Invalid credentials");
    }
    return next();      
})

app.use('/register', function(req,res,next) {
    var user = req.body.username;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    console.log(user,password,confirmPassword);
    if(!confirmPassword || !password || !user) {
        res.status(404).send("Invalid credentials");
    }
    if(password != confirmPassword) {
        res.status("password and confirm password are not the same")
    }else {
        usersArray.forEach(function(element){
            if(element.username == user && element.password == password) {
                res.send("User exists. Please login");
                return next();
            }
        });
        
        }
    return next();    
});


app.post('/login', function(req, res) {
    usersArray.forEach(function(element){
        if(element.username == req.body.username && element.password == req.body.password) {
        res.status(200).send("Login successfull");
        }else {
        res.send("Invlid username or password");
        }
    
    })
})
app.post('/register', function(req, res) {
    var newUser = {username: req.body.username, password: req.body.password}
    usersArray.push(newUser);
    res.send("New user registered successfully");
})
app.listen(PORT, function(){
    console.log("App has started and running on port", PORT);
});