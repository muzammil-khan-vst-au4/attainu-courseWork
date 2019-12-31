const Cart = require('./../models/index').Cart
//const CartArray = []
class Cart {
    static addItem(itemName, quantity, pricePerItem) {
        const newItem = {
            itemName: itemName,
            quantity: quantity,
            pricePerItem: pricePerItem,
            amount: quantity*pricePerItem
        }
        //CartArray.push(newItem)
        Cart.create({items: newItem}, function(err, res) {
            if(error) {
				console.log(err);
				return res.send(err)
			}
			return res.send("item added")
        }) 
    }
}

module.exports = Cart;