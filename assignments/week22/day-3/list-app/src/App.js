import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.initialState = {
      name: '',
      email: '',
      city: ''
    }
    this.state = this.initialState
  }
  handleChange = event => {
    const {name, value} = event.target

    this.setState({
      [name] : value
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState({list :this.initialState});
    this.props.renderCityList(this.state)    
  }
  render() {
    const {name, email, city} = this.state
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-row">
          <div className="col-4">
            <input type="text" name="name" 
                    value={name} onChange={this.handleChange} className="form-control" placeholder="Name" />
          </div>
          <div className="col-3">
            <input type="text" name="email"  value={email} 
                    onChange={this.handleChange} className="form-control" placeholder="Email" />
          </div>
          <div className="col-3">
            <input type="text" name="city"  value={city} 
                    onChange={this.handleChange} className="form-control" placeholder="City" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

class NameList extends React.Component {
  render() {
    const {listdata} = this.props

    const rows = listdata.map((row,index) => {
      return (
        <tr key = {index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.city}</td>
          </tr>
      ) 
    })
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
class CityList extends React.Component{
  render() {
    const {cityData} = this.props
    const rows = cityData.map((row) => {
      return (
        <li>{row}</li>
      )}
    )
    return (
      <>
        <ul>
          {rows}
        </ul>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    list : [],
    cities : [],
  }
  renderCityList = (currentState) => {
    let {city} = currentState
    let newCities = this.state.cities.slice()
    if(newCities.indexOf(city) === -1) {
      newCities.push(city);
    }
    this.setState({cities: newCities})
  }
  handleSubmit = character => {
    this.setState({
      list: [...this.state.list, character]
    })
  }
  render() {
    const {list, cities} = this.state
    return (
      <div className="container mt-5">
        <Form handleSubmit = {this.handleSubmit} renderCityList={this.renderCityList}/>
        <div className="row">
          <div className="col-4">
            <NameList listdata={list}/>
          </div>
          <div className="col-4 m-5">
            <CityList cityData = {cities}/>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
