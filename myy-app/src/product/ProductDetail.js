import React, { Component } from 'react'
import axios from 'axios'

class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: ""
        }
    }
    componentDidMount(){
        // calls description of singluar product based on id
        axios.get(`http://strainapi.evanbusse.com/${process.env.REACT_APP_KEY}/strains/data/desc/${this.props.location.state.id}`).then(response => this.setState({description: response.data.desc}))
        .catch(error => console.log(error))
    }
    render(){
        console.log(this.state.description)
        const {id, array, img} = this.props.location.state
        
        const foundItem = array.find(item => {
            if(id === item.id){
                return item
            }
            return null
        })
        const medicalBenefits = foundItem.effects.medical.map((benefit, i) => {
            return <li key={i}>{benefit}</li>
        })
        const positiveBenefits = foundItem.effects.positive.map((pbenefits, i) => {
            return <li key={i}>{pbenefits}</li>
        })
        const negativeBenefits = foundItem.effects.negative.map((benefits, i) => {
            return <li key={i}>{benefits}</li>
        })
        const flavors = foundItem.flavors.map((flavor, i) => {
            return <li key={i}>{flavor}</li>
        })
        return(
                <div className="details">
                    <h1>{foundItem.name}</h1>
                    <h3>{foundItem.race}</h3>
                    <ol>Negative Effects{negativeBenefits}</ol>
                    <ol>Medical Benefits{medicalBenefits}</ol>
                    <ol>Positive Benefits{positiveBenefits}</ol>
                    <ol>Flavors{flavors}</ol><br/>
                    <p>Description : {this.state.description}</p>
                    <img src={img} alt={img} />
            </div>
            
        )
    }
   
}

export default ProductDetail