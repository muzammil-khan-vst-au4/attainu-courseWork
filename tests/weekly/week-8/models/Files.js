var Model = {};
Model.storageArray = [];

Model.push = function(callback) {
    this.storageArray.push({
        filePath:req.url,
        mimeType: file.mimeType
    });
    return callback("")

}        

module.exports = Model;