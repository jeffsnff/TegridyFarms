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
            `Name: ${newMessage.name}
            Email: ${newMessage.email}
            Message: ${newMessage.message}
            ` //Can i give a thumbs up picture of randy marsh
        )
        
        this.setState({name: "", email: "", message:  "", display:"block"})
    }
    render(){
        return(
            <div className="entryForm">
                <h1>Contact US</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Full Name"></input>
                    <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Email Address"></input><br />
                    <input name="message" value={this.state.message} onChange={this.handleChange} className="letter" type="text" placeholder="Type Here"></input><br/>
                    <button>Send</button><br/>
                    <div>
                        <img value={this.state.display} onChange={this.handleChange} style={{display:this.state.display}}src={randyThanks} alt="Thanksssss"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact