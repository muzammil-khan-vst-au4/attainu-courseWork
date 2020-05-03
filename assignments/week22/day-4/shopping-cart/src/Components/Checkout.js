import React from 'react'
class CheckOut extends React.Component {
    render() {
        return <button className="btn btn-primary" onClick={this.props.checkout}>CheckOut</button>
    }
}

export default CheckOut