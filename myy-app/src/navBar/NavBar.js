import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return(
        <ul className="navBar">
            <Link to="/">Home</Link>
            <Link to="/ProductList">Product</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
        </ul>
    )
}

export default NavBar;