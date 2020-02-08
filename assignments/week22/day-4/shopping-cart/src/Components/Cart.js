import React from 'react'

class Cart extends React.Component {
    render() {
        let items = this.props.cartItems
        let rows = items.map((row, index) => {
            return (
                <tr key= {index}>
                    <td>{index+1}</td>
                    <td>{row.itemName}</td>
                    <td>{row.cost}</td>
                    <td><button onClick={() =>{this.props.removeFromCart(index)}}>Remove</button></td>
                </tr>
            )
        })
        return (
            <div className="border border-primary m-5">Cart Component
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
            </div>
        )
    }
}

export default Cart