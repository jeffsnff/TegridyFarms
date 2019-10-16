import React from 'react';
import './About.css';
import TegFarmsFamily from '../photos/TegFarmsFamily.jpg'
import TegFarmsTegridy from '../photos/TegFarmsTegridy.jpg'
import TegFarmsStarted from '../photos/TegFarmsStarted.jpeg'

function About(){
    return(
        <div className="aboutContainer">
            <h1>About Tegridy Farms</h1><br/>
            <div  className="howStarted">
                <h2>How we got started</h2>
                <img src={TegFarmsStarted} alt="We Started!"/>
                <div>
                    My wife and I decided to start a farm where people actually have some tegridy. So we sold our house, and moved to Colordo Farms, Colorado to get a fresh start for our family.
                </div>
                {/* <div>With all the school shootings, priest having sex with little boys, and kids sending nude pictures to each other. My wife and I decided to start a farm where people actually have some tegridy. So we sold our house, and moved to Colordo Farms, Colorado to get a fresh start for our family.</div> */}
            </div>
            <div  className="family">
                <h2>The Family</h2>
                <img src={TegFarmsFamily} alt="The Family"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div  className="tegridy">
                <h2>Our Tegridy</h2>
                <img src={TegFarmsTegridy} alt="Tegeridy"/>
                <div><b>In a world where people have lost their Tegridy, we promise to always keep ours.</b><br/>We work hard to produce our marijuana with tegridy. Our marijuana is growen from the finest seeds and we never use pesticides, keeping it 100% organic. We are state certified, making sure that we never release anything that is subpar. We will never sell out to vaping pens since we have <b>Tegridy</b>.</div>
            </div>
            <div className="video">
                <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/nQqBOz8bkBE"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>

        </div>
        
    )
}
export default About