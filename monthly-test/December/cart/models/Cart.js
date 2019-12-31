const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [{
        itemName: String,
        quantity: Number,
        pricePerItem: Number,
        amount: Number 
    }],
    totalAmount: Number
}, {
    collection: 'Carts'
}); 

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;