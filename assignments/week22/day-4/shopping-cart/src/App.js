import React from 'react';
import Header from './Components/Header' 
import Items from './Components/Items'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
class App extends React.Component{
  state = {
    items: [
        {
            itemName: "Soap",
            cost : 15,
        },
        {
            itemName: "toothpaste",
            cost : 30
        }
    ],
    cart: []
  }
  addToCart = (index) => {
    let newItem = this.state.items[index]
    this.setState({cart:[...this.state.cart, newItem]})
    //console.log(this.state.cart)
  }
  removeFromCart = (index) => {
    let cart = this.state.cart
    let newCart = cart.filter((item, i) => {
      return index !== i 
    })
    this.setState({cart : newCart})
  }
  checkout() {
    //console.log("from checkout")
    this.setState({cart: []})
  }
  calculateTotal() {
    let {cart} = this.state
    if(cart) {
      let total = cart.reduce((acc, cv)=> {
       // console.log("acc"+acc+"  cv"+cv)
        return acc+cv.cost
      },0)
    return total
    }
  }
  render() {
    return (
    <div className="container border border-dark">
      <Header />
      <div className="row">
        <Items className="col" getItems={this.state.items} addToCart={(index) => {this.addToCart(index)}}/>
        <Cart className="col" cartItems={this.state.cart} removeFromCart={index =>{this.removeFromCart(index)}}/>
      </div>
      <div>Total : {this.calculateTotal()}</div>
        <Checkout checkout={() => {this.checkout()}}/>
    </div>
    );
  }
}

export default App;
