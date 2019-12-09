import React, { Component } from 'react'
import './Contact.css'
import randyThanks from '../photos/randyThanks.png'

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            display: "none"
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const newMessage = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        alert(
            // `Name: ${newMessage.name}
            // Email: ${newMessage.email}
            // Message: ${newMessage.message}
            // ` //Can i give a thumbs up picture of randy marsh
            "Thank you for taking the time to contact me. However, this does not actually work at the moment. Please visit my Github profile, or visit my personal website at jeffreyseneff.com"
        )
        
        this.setState({name: "", email: "", message:  "", display:"block"})
    }
    render(){
        return(
            <div className="entryForm">
                <h1>Drop Us A Line</h1>
                <div className="twoLine"></div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Leave Your Message Below</h3>
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Full Name"></input><br/>
                    <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Email Address"></input><br />
                    <input name="message" value={this.state.message} onChange={this.handleChange} className="letter" type="text" placeholder="Type Here"></input><br/>
                    <button>Submit Message</button><br/>
                </form>
                <div className="thankPic">
                        <img value={this.state.display} onChange={this.handleChange} style={{display:this.state.display}}src={randyThanks} alt="Thanksssss"/>
                </div>
            </div>
        )
    }
}

export default Contact