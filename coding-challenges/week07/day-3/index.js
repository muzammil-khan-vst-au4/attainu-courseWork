const express = require('express');
const app = express();
const PORT = 9090;
var usersArray = [{username: "mk", password: 123456}, {username: "pritam", password: "pritam"}];

app.use(express.json());
app.use(express.urlencoded());
app.get('/', function(req, res) {
    res.status(200).send("Hello World! This is the homepage.");
});

app.use('/login/:username/:password', function (req, res, next) {
  var user = req.params.username;
  var password = req.params.password;
  if(!user || !password){
      res.status(400).send("Invalid credentials");
  } else {
       usersArray.forEach(function(element){
      if(element.username == user && element.password == password) {
          res.status(200).send("Login successfull");
      }
  });
  }
  return next();
}/* , function (req, res, next) {
 
  next();
} */,function(req, res, next) {
    console.log("final function");
    console.log(req.body);
    return next();
})

app.use('/register/:username/:password/:confirmPassword', function(req,res,next) {
    var user = req.params.username;
    var password = req.params.password;
    var confirmPassword = req.params.confirmPassword;
    if(password !== confirmPassword) {
        res.status(400).status("password and confirm password are not the same")
    }else {
        usersArray.forEach(function(element){
            if(element.username == user && element.password == password) {
                res.send("User exists. Please login");
                return next();
            }
        });
        var newUser = {username: user, password:password}
        usersArray.push(newUser);
        res.status(200).send("New user registered successfully");
        }
    return next();    
},function(req, res, next) {
    console.log("final function");
    console.log(req.body);
    return next();
})
app.listen(PORT, function(){
    console.log("App has started and running on port", PORT);
});