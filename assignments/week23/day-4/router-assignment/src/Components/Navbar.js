import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">Navbar</Link>
                <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/order'>Orders</Link></li>
                </ul>
            </div>
        </nav> 
    )
}

export default Navbar