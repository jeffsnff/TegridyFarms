import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

import Button from '../button/Button.js'

import cannabis from '../photos/TegFarmsTegridy.jpg'
import farm from '../photos/TegFarmsFarm2.jpg'
function Home(){
    return (
    <div className="main-containter">

        <div className="home">
            <div className="overlay">
                <img className="farm" src={farm} alt="family fdarm" />
            </div>
            
            <h1 className="homeText">Tegridy Farms Strain Finder</h1>
            <div className="about">
                    We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we strive to bring Tegridy into every step of our pricess in order to give you the best experiencd possible.
            </div>
            {/* <Link className="button" to='/ProductList'>
                View All Strains
            </Link> */}
            <Button 
                text='View All Strains'
                destination='/ProductList'
                name='button'
            />

        </div>

        <div className="second-container">
            <div className="haha">
                 <img src={cannabis} alt="this" />
                <div className="stuff">
                    <h3>Why Tegridy?</h3>
                    <p>
                    We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we strive to bring Tegridy into every step of our pricess in order to give you the best experiencd possible.
                    </p>
                    
                </div> 
                {/* <Link className="rrrhhh" to="/About">
                    LEARN MORE
                </Link> */}
                <Button 
                    name='rrrhhh'
                    destination='/About'
                    text="LEARN MORE"
                />
            </div>
            
        </div>

    </div>
    )
}

export default Home
