const UploadController = {};
const Model = require('./../models/Files.js');

UploadController.uploadFiles = function(req, res) {
  //  console.log(req.files, req.body);
    console.log(req.files);
    return res.json({
      status: true,
      message: "Upload Successful",
  })      
};

UploadController.getFiles = function(req, res) {
    return res.json({array: Model.storageArray})
    
};

module.exports = UploadController;