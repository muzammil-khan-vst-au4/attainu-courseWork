const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/cart'

function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
}

module.exports = {
    models : {},
    connect: connect
};