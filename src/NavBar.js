import React from 'react'
import {Link } from  'react-router-dom'

const NavBar=()=>{
    return (
        <div>
            <ul>
                <li><Link to = "/first">first Option</Link></li>
                <li><Link to = "/second">second Option</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
