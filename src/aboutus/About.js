import React from 'react';
import './About.css';
import thing from '../photos/TegFarmsStarted.jpeg'
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
                    {/* <button className="learnMore">
                        Learn More
                    </button> */}
                </div>

            </div>
            <div className="bottomHeader">
                <div className="family">
                    <h4>The Family</h4>
                    <p>
                    My wife and I decided to start a farm where people actually have some tegridy. So we sold our house, and moved to Colordo Farms, Colorado to get a fresh start for our family where we help people get the medical cannabis they deserve. 
                    </p>
                </div>
                <div className="start">
                    <h4>How We Got Started</h4>
                    <p>
                        We started by buying an old farm down a dirt road. We tilled the dirt and slowly fixed the house and barn up. As the cannabis started to grow, we decided to hire a developer to make a website so we could distribute Tegridy Weed information around the country. We will always have Tegridy when it comes to our cannabis.
                    </p>
                </div>

            </div>
        </div>
        
    )
}
export default About