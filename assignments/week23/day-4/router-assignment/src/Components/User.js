import React from 'react'
import { Link, Route } from 'react-router-dom'

const User = () => {
    return (
        <div className="container">
        <h4>Users page</h4>
        <p>lorEx qui irure ad est cillum adipisicing deserunt. Tempor exercitation aliqua dolore occaecat consequat incididunt eiusmod ipsum do Lorem consequat ut. Cupidatat sit tempor eiusmod mollit aliquip qui consectetur fugiat dolor non proident magna occaecat. Occaecat eiusmod et eiusmod tempor cupidatat et duis Lorem. Incididunt anim eiusmod nisi ex nulla sint irure ipsum ea.em ipsum asgakshfas</p>
        
        <ul>
            <li><Link to="/users/rishab">rishab</Link></li>
            <li><Link to="/users/vishal">Vishal</Link></li>
            <li><Link to="/users/rakesh">Rakesh</Link></li>
            <li><Link to="/users/chintu">chintu</Link></li>
        </ul>
        <Route path="/users/rishab"><div>User rishab</div></Route>
        <Route path="/users/vishal"><div>User Vishal</div></Route>
        <Route path="/users/rakesh"><div>User Rakesh</div></Route>
        <Route path="/users/chintu"><div>User chintu</div></Route>
    </div>
    )
}

export default User
