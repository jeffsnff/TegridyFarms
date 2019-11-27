import React from 'react';
import './Footer.css';
import twitter from '../photos/icon_twitter.png'
import github from '../photos/github.png'

const Footer = () => {
    return (
        <div className="footer">

            <div className="information">
                <div>
                    <h6>Tegridy Farms</h6>
                    <p>1402 Tegridy Ln</p>
                    <p>Colorado Farms, CO</p>
                    <p className="name">Development By: <span>Jeffrey Seneff</span></p>
                    <p className="name">Design By: <span>Cody Porter</span></p>
                </div>
            </div>

            <div className="socialMedia">
                <a href="https://github.com/jeffsnff" target="_blank" rel="noopener noreferrer"><img className="socialLinks"src={github} alt="my github profile link"/></a>
                <a href="https://twitter.com/tegridy_farms?lang=en" rel="noopener noreferrer" target="_blank"><img className="socialLinks"src={twitter} alt="twitter link"/></a>
            </div>

        </div>
    )
}

export default Footer;