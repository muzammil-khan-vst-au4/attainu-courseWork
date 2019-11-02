const express = require('express');
const app = express();
const PORT = 9090;
const path = require('path');
const multer = require('multer');
const UploadController = require('./routes/upload.js');
const Model = require('./models/Files.js');

//static files
app.use('/public', express.static(path.join(__dirname, 'public')));

//storing at location and renaming file
var fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        var mimetype = file.mimetype;
        var allowedTypes = [
            'image/jpg',
            'image/jpeg',
            'image/png',
            'application/pdf'
        ];
        if (allowedTypes.indexOf(mimetype) === -1) {
            return cb('Invalid image format');    
        }
        Model.storageArray.push({
        filePath: 'localhost:9090/public/'+ Date.now() + file.originalname,
        mimetype: file.mimetype}); 
        cb(null, './public');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({ storage : fileStorage });

//homepage route
app.get('/', function(req, res) {
    res.send("Hello! This is the homepage");
})


var fields = [
    { name : 'image', maxCount: 2},
    { name : 'pdf', maxCount: 2 }
]
//routes
app.post('/upload-files', upload.fields(fields), UploadController.uploadFiles);
app.get('/get-files', UploadController.getFiles);

//create server
app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
})    