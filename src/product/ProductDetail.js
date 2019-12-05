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
            console.log(item.id)
            if(id === item.id){
                console.log(item)
                return item
            }
            return null
        })
        console.log(foundItem.effects)
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

                    <div className="info">
                        <div>
                            <img src={img} alt={img} />
                            <h1>{foundItem.name}</h1>
                            <h3>{foundItem.race}</h3>
                            <h2>Description</h2> 
                            <p>{this.state.description}</p>
                        </div>
                        
                    </div>
                        
                    <div className="effects">
                        <h1>Effects</h1>
                        <div className="effectsDetails">
                            <div>
                                <h2>Negative</h2>
                                <p>{negativeBenefits}</p>
                            </div>
                            <div>
                                <h2>Medical</h2>
                                <p>{medicalBenefits}</p>
                            </div>
                            <div>
                                <h2>Positive</h2>
                                <p>{positiveBenefits}</p>
                            </div>
                            <div>
                                <h2>Flavors</h2>
                                <p>{flavors}</p>
                            </div>
                            
                            
                            
                            
                        </div>
                    </div>
        
            </div>
            
        )
    }
   
}

export default ProductDetail