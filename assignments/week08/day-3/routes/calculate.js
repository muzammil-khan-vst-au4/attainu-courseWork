const CalcController = {};
const Model = require('./../models/Calculate.js');

//methods of calc

CalcController.add = function(req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    Model.add(num1, num2, function(error, data) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).send({data});
    });
}


module.exports = CalcController;