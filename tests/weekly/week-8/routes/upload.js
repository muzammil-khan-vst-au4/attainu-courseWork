const UploadController = {};
const Model = require('./../models/Files.js');

UploadController.uploadFiles = function(req, res) {
    Model.push(function(error, result) {
       if(error) {
			return res.status(500).json({error});
		} 

        return res.status(200).json({num1,num2,result});



    )
    return res.json({
      status: true,
      message: "Upload Successful",
  })      
};

UploadController.getFiles = function(req, res) {
    return res.json({array: Model.storageArray})
    
}

module.exports = UploadController;