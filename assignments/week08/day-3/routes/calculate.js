const CalcController = {};
const Model = require('./../models/Calculate.js');

//methods of calc
//addition
CalcController.add = function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    Model.add(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({result});
    });
}

//subtraction
CalcController.sub = function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    Model.sub(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({result});
    });
}

//multiplication
CalcController.mul = function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    Model.mul(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({result});
    });
}

//division
CalcController.div = function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    Model.div(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({result});
    });
}

module.exports = CalcController;