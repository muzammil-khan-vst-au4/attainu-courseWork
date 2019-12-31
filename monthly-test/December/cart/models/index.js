const mongoose = require('mongoose');
const Cart =  require('./Cart');
const dbURL = 'mongodb://localhost:27017/cart'

function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
}

module.exports = {
    models : {
        Cart: Cart
    },
    connect: connect
};