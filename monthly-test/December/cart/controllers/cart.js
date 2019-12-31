const Cart = require('./../models/Cart')
//const CartArray = []
class CartController {
    static addItem(req, res) {
        let cartId = req.body.cartId
        console.log(cartId)
        const newItem = {
            itemName: req.body.itemName,
            quantity: req.body.quantity,
            pricePerItem: req.body.rate,
            amount: req.body.quantity * req.body.rate
        }
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
        //let cartId = "5e0b1bb68e47130cf0f35d2b"
        let itemId = req.body.itemId;
        console.log(itemId);
        
        let itemName= req.body.itemName;
        let quantity= req.body.quantity;
        let pricePerItem= req.body.rate;
        let amount= req.body.quantity * req.body.rate;

        Cart.findByIdAndUpdate({_id : itemId }, { "$set": { "itemName": itemName, "quantity":quantity, "pricePerItem":pricePerItem, "amount":amount}}, { safe: true, multi:true }, function(err, obj){
            if(err){
                console.log(err)
            }else {
                console.log(obj)
            }
        })
        return res.redirect("/cart/retrieve");
    }
    
    static getCart(req, res) {
        Cart.find({}, function(err,  result) {
            if(err){
                return res.send(err)
            } else {
                //console.log(result[0].items)
                let items = result[0].items
                let total = 0;
                items.forEach(element => {
                    total = total + element.amount
                    //console.log(total);
                   // return total;
                });
                //console.log(total);
            
                let cartId = "5e0b1bb68e47130cf0f35d2b"
                res.render('home', {
                    data: result[0].items,
                    total,
                    cartId: cartId
                })
            }
        })

    }
    static removeItem(req, res) {
        let itemId = req.body.itemId;
        console.log(itemId);
        let cartId = "5e0b1bb68e47130cf0f35d2b"
        Cart.update({ _id: cartId }, { "$pull": { "items": { "_id": itemId } }}, { safe: true, multi:true }, function(err, obj){
            if(err){
                console.log(err)
            }else {
                console.log(obj)
            }

        })
        return res.redirect("/cart/retrieve");

    }
}

module.exports = CartController;