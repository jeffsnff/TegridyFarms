import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import logo from '../photos/swallow.jpg'

function NavBar(){
    return(
        <div className="headerContainer">
            <ul className="navigation-menu">
                <div className='logo'>
                    <Link to="/"><img className='icon' src={logo} /></Link>
                </div>
                

                <div className="navigation">
                    <div className="strainsDiv">
                        <Link className='strainsLink' to="/ProductList">Strains</Link>
                    </div>
                    <div className="aboutDiv">
                        <Link className='aboutLink' to="/About">About</Link>
                    </div>
                    <div className="contactDiv">
                        <Link className='contactLink' to="/Contact">Contact</Link>
                    </div>
                </div>
                
            </ul>  
        </div>
    )
}

export default NavBar;