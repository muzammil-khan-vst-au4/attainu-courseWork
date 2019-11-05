const AuthController = {};
const Model = require('./../models/Auth.js');

AuthController.login = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    Model.login(username, password, function(error, data, userCredentials) {
        if(error) {
			return res.status(500).json(
				{
					status: false,
					error
				}
			);
        }
        req.session.user = userCredentials;
		return res.status(200).json(
			{
				status: true,
				data
			}
		);
    });
}

AuthController.logout = function(req, res) {
    var session = req.session;
    session.destroy();
    res.clearCookie('Somename');
    return res.send({
        status: true,
        message: "Logged out"
    });
};

AuthController.checkIfLoggedIn = function(req, res, next) {
    var url = req.originalUrl;
    var userSession = req.session.user;
    
    Model.checkIfLoggedIn(url, userSession, function(error, data) {
        if(error) {
            return res.json({
                status: false,
                message: error
            })
        }
        return next();
    });
}; 

module.exports = AuthController;