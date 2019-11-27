import React from 'react';
import './Home.css'
import Frame from '../photos/Frame.png'

import cannabis from '../photos/cannabis.jpg'

function Home(){

    return (
    <div className="main-containter">

        <div className="home">
            <h1 className="homeText">Tegridy Farms Strain Finder</h1>
            <div className="about">
                    We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we strive to bring Tegridy into every step of our pricess in order to give you the best experiencd possible.
            </div>
            <div className="button">
                View All Strains
            </div>
        </div>

        <div className="second-container">
            <div className="haha">
                <img src={Frame} alt="this" />
                 <div className="stuff">
                    <h3>Why Tegridy?</h3>
                    <p>
                    We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we strive to bring Tegridy into every step of our pricess in order to give you the best experiencd possible.
                    </p>
                    
                </div>
                <button className="rrrhhh" onClick={() => console.log("hello")}>
                    LEARN MORE
                </button>
            </div>
            
        </div>

    </div>
    )
}

export default Home
