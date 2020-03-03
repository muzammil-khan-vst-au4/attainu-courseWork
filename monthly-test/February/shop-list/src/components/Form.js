import React, {Component} from 'react'
import {connect} from 'react-redux'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name : "",
            category: "",
            area: "",
            opening: "",
            closing: ""
        }
        this.state = this.initialState
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state)
        this.props.submit(this.state)
        this.setState(this.initialState);   //setting the state to initial state to reset input in form
    }
    render() {
        const {name, category, area, opening, closing} = this.state
        return (
            <form onSubmit={this.onFormSubmit} className="form-row">
                <label htmlFor="name" className="form-group">Shop Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} className="form-group mb-2" />
                <label htmlFor="area" className="form-group mb-2">Area</label>
                <select
                    name="area"
                    id="area"
                    value={area}
                    onChange={this.handleChange} >
                        <option value="Jayanagar">Jayanagar</option>
                        <option value="Basavanagudi">Basavanagudi</option>
                        <option value="JP Nagar">JP Nagar</option>
                        <option value="Padmanabhanagar">Padmanabhanagar</option>
                        <option value="Banashankari">Banashankari</option>
                        <option value="Uttarahalli">Uttarahalli</option>
                        <option value="Kumaraswamy">Kumaraswamy</option>
                        <option value="Girinagar">Girinagar</option>
                </select>
                <label htmlFor="category" className="form-group mb-2">Category</label>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={this.handleChange} >
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Flower">Flower</option>
                        <option value="Newsagent">Newsagent</option>
                        <option value="Furniture">Furniture</option>
                </select>
                <label htmlFor="opening" className="form-group mb-2">Opening Date</label>
                <input
                    type="date"
                    name="opening"
                    id="opening"
                    value={opening}
                    onChange={this.handleChange} />
                <label htmlFor="closing" className="form-group mb-2">Closing Date</label>
                <input
                    type="date"
                    name="closing"
                    id="closing"
                    value={closing}
                    onChange={this.handleChange} />            
                <button className="btn btn-primary">Submit</button>   
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit : (shop) => {dispatch({type: "ADD_SHOP", shop:shop})}
    }
}

export default connect(null, mapDispatchToProps)(Form)