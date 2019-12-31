const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    item: [{
        itemName: String,
        quantity: Number,
        pricePerItem: Number, 
    }],
    totalAmount: Number
}, {
    collection: 'Carts'
}); 

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;