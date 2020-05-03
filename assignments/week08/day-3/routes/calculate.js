const CalcController = {};
const Model = require('./../models/Calculate.js');

//methods of calc
//addition
CalcController.add = function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    Model.add(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({num1,num2,result});
    });
}

//subtraction
CalcController.sub = function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    Model.sub(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({num1,num2,result});
    });
}

//multiplication
CalcController.mul = function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    Model.mul(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({num1,num2,result});
    });
}

//division
CalcController.div = function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    Model.div(num1, num2, function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({num1,num2,result});
    });
}

module.exports = CalcController;