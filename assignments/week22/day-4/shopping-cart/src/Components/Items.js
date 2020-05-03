import React from 'react'

class Items extends React.Component {
    render() {    
        let items = this.props.getItems
        let rows = items.map((row, index) => {
            return (
                <tr key= {index}>
                    <td>{index+1}</td>
                    <td>{row.itemName}</td>
                    <td>{row.cost}</td>
                    <td><button onClick={() =>{this.props.addToCart(index)}}>Add to Cart</button></td>
                </tr>

            )
        })
        return (
            <div className="border border-primary m-5">Items Component
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
export default Items