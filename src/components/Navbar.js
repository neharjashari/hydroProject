import React from 'react'
import { Link } from 'gatsby'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/blog/'>Blog</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li style={{float:'right'}}>
                    <Link to='/'>Sign Out</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
