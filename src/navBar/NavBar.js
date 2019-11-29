import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import logo from '../photos/swallow.jpg'

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            toggle: false,
            color: 'white'
        }
    }

    toggler = () => {
        this.setState({toggle: !this.state.toggle})
        
    }
    
    render(){
        return(
            <div className="headerContainer">
                <ul className="navigation-menu">
                    <div className='logo'>
                        <Link to="/"><img className='icon' src={logo} alt="logo" /></Link>
                    </div>
 
                    <div className="navigation">
                        <div className="strainsDiv">
                            {/* <Link className='strainsLink' to="/ProductList">Strains</Link> */}
                            {
                                this.state.toggle ?
                                    <div 
                                        className="strainsLink" 
                                        onClick={() => this.toggler()}
                                        style={{color: this.state.color}}
                                        >
                                        Strains</div>
                                :
                                    <div className="strainsLink" onClick={() => this.toggler()}>Strains</div>
                            }
                            <div className="strainsLink" onClick={() => this.toggler()}>Strains</div>
                            {
                                this.state.toggle ?
                                    <div className="strainModule">
                                        <Link className='allLink' to='/ProductList'>All Strains</Link>
                                        <Link className='indicaLink' to='/ProductList'>Indica</Link>
                                        <Link className='sativaLink' to='/ProductList'>Sativa</Link>
                                        <Link className='hybridLink' to='/ProductList'>Hybrid</Link>
                                    </div>
                                    :
                                    null
                            }
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
    
}

export default NavBar;