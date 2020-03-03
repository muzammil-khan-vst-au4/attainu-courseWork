import React, { Component } from 'react'
import {connect} from 'react-redux'
class List extends Component {
    render() {
        const {filteredList} = this.props
        //console.log(filteredList)
        let list = filteredList.length && (filteredList.map((shop,i) => {
            console.log(shop.isOpen)
            return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{shop.name}</td>
                    <td>{shop.category}</td>
                    <td>{shop.area}</td>
                    {(shop.isOpen === true) ? <td>Open</td> : <td>Closed</td> }
                </tr>
            )    
        })) 
        return filteredList.length ? (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Shop Name</th>
                            <th>Category</th>
                            <th>Area</th>
                            <th>Open/Close</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        ) : (<div className="container text-center"><br /> <h5>No Shops Added yet</h5> </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        shopList : state.list,
        filteredList: state.filteredList
    }
}

export default connect(mapStateToProps)(List)