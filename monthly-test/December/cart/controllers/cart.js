const Cart = require('./../models/Cart')
//const CartArray = []
class CartController {
    static addItem(req, res) {

        const newItem = {
            itemName: req.body.itemName,
            quantity: req.body.quantity,
            pricePerItem: req.body.rate,
            amount: req.body.quantity * req.body.rate
        }
        //CartArray.push(newItem)
        Cart.create({items: newItem}, function(err, response) {
            if(err) {
				console.log(err);
				return res.send(err)
			}
			return res.send("item added")
        }) 
    }
    static updateItem(req, res) {

    }
    
    static getItems(req, res) {

    }
    static deleteItem(req, res) {

    }
}

module.exports = CartController;