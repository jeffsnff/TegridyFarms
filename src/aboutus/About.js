import React from 'react';
import './About.css';
import thing from '../photos/TegFarmsFarm.jpg'
function About(){
    return(
        <div className="aboutContainer">
            <div className="header">
                <div className="nestedHeader">
                    <h1 className="title">
                        About Tegridy Farms
                    </h1>
                    <img className="disthing" src={thing} alt="this is a big thing" />
                </div>
            </div>
            <div className="middleHeader">
                <div className="anotherDiv">
                    <div className="line"></div>
                    <div className="morestuff">
                    We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we string to bring Tegridy into every step of our process in order to give you the best experience possible.
                    </div>
                    <button className="learnMore">
                        Learn More
                    </button>
                </div>

            </div>
            <div className="bottomHeader">
                <div className="family">
                    <h4>The Family</h4>
                    <p>
                        We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we string to bring Tegridy into every step of our process in order to give you the best experience possible.
                    </p>
                </div>
                <div className="start">
                    <h4>How We Got Started</h4>
                    <p>
                        We want to help you find the perfect strain to fit your needs. At Tegridy Farms, we string to bring Tegridy into every step of our process in order to give you the best experience possible.
                    </p>
                </div>

            </div>
        </div>
        
    )
}
export default About