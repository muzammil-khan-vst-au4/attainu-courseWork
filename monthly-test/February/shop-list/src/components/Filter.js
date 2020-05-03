import React, { Component } from 'react'
import {connect} from 'react-redux'

class Filter extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            area : "",
            category: "",
            status : "ALL"
        }
        this.state = this.initialState
    }
    
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        if(name === "area") {
            this.props.areaFilter(value)
        }
        if(name === "category") {
            this.props.categoryFilter(value)
        }
        if(name === "status") {
            this.props.statusFilter(value)
        }
    }

    render() {
        const {area,category, status} = this.state
        return (    
            <div>
                Filter by: 
                <label htmlFor="area" className="form-group mb-2">Area</label>
                <select
                    name="area"
                    id="area"
                    value= {area}
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
                <label htmlFor="status" >Status</label>
                <select
                    name="status"
                    value={status}
                    onChange={this.handleChange}>
                        <option value="ALL">ALL</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
            </div>
        )
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        areaFilter : (areaName) => {dispatch({type: "AREA_FILTER", areaName:areaName})},
        categoryFilter : (categoryName) => {dispatch({type: "CATEGORY_FILTER", categoryName:categoryName})},
        statusFilter : (status) => {dispatch({type: "STATUS_FILTER", status:status})} 
    }
}

export default connect(null, MapDispatchToProps)(Filter)