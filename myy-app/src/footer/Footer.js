import React from 'react';
import './Footer.css';
import twitter from '../photos/twitter.png'
import github from '../photos/github.png'
/* 
1. Add twitter icon to the Tegerdy Farms twitter pageBreakAfter
const towly = (arg) => console.log(`
Towly: ${arg}
"That's some good shit!"
`)towly(39457934895)
*/

const Footer = () => {
    
    return (
        <div className="footer">
            <a href="https://github.com/jeffsnff"><img src={github} alt="my github profile link"/></a>
            <p>1402 Tegridy Farms,<br/> Colorado Farm, CO</p>
            <a href="https://twitter.com/tegridy_farms?lang=en" rel="noopener noreferrer" target="_blank"><img src={twitter} alt="twitter link"/></a>
        </div>
    )
}

export default Footer;