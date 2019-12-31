const Cart = require('./../models/Cart')
//const CartArray = []
class CartController {
    /* calculateTotaAmount(items) {
        let totalAmount =items.reduce(function(total, amount){
            return total + amount
          });
        console.log(totalAmount);

    }  */
    static addItem(req, res) {
        let cartId = req.body.cartId
        console.log(cartId)
        const newItem = {
            itemName: req.body.itemName,
            quantity: req.body.quantity,
            pricePerItem: req.body.rate,
            amount: req.body.quantity * req.body.rate
        }
        console.log(newItem)
        //CartArray.push(newItem)
        Cart.find({}, function(err,  result) {
            if(!result) {
                Cart.create({items: newItem}, function(err, response) {
                    if(err) {
                        console.log(err);
                        return res.send(err)
                    }
                    return res.send("item added")
                })
            } else {
                Cart.findByIdAndUpdate({_id: cartId}, { $push: {items: newItem}}, function(err, response) {
                    if(err) {
                        return res.send(err)
                    }else {
                        return res.redirect("/cart/retrieve");
                    }
                })
            }
        })
         
    }
    static updateItem(req, res) {

    }
    
    static getCart(req, res) {
        Cart.find({}, function(err,  result) {
            if(err){
                return res.send(err)
            } else {
                console.log(result[0].items)
                let items = result[0].items
                let total = 0;
                items.forEach(element => {
                    total = total + element.amount
                    //console.log(total);
                   // return total;
                });
                console.log(total);
            
                let cartId = "5e0b1bb68e47130cf0f35d2b"
                res.render('home', {
                    data: result[0].items,
                    total,
                    cartId: cartId
                })
            }
        })

    }
    static deleteItem(req, res) {

    }
}

module.exports = CartController;