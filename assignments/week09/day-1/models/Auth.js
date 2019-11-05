const Auth = {};
var users = [
    {
        username : "abc",
        password : 123456
    }
];
Auth.login = function(username, password, callback) {
    var user = null;
    users.forEach(function(value, index) {
        if(value.username === username) {
            if(value.password === password){
                user = value;
            }
        }
    });
    if(!user){
        return callback("Invalid username or password");
    }
    //req.session.user = user;
    return callback(null, "login successful", user);
};

/* Auth.logout = function(username, password, callback) {

}; */

Auth.checkIfLoggedIn = function(url, userSession, callback) {
    if(url === '/login') {
        return callback(null, "Next");
    }
    if(typeof userSession === "undefined") {
        return callback("Unauthorised Request");
    }
    return callback(null, "Next");
};

module.exports = Auth;