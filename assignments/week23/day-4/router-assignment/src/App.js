import React from 'react';
import Navbar from './Components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Order from './Components/Order'
import Products from './Components/Products'
import Users from './Components/User'
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={Users}/>
      <Route path='/order' component={Order} />
      <Route path='/products' component={Products} />
    </div>
    </BrowserRouter> 
  );
}

export default App;
