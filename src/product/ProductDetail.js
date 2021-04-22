import React, { Component } from 'react'
import axios from 'axios'
import picture from '../photos/TegridyWeed.jpg'

class ProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      info: {},
      genetics: '',
      lineage: [],
      breeder: '',
      image: '',
      qr: '',
      name: ''
    }
  }
  componentDidMount(){
    // calls description of singluar product based on id
    axios.get(`https://api.otreeba.com/v1/strains/${this.props.location.state.id}`)
      .then(res => {
        this.setState({info: res.data})
        this.setState({genetics: res.data.genetics.names})
        this.setState({lineage: Object.keys(res.data.lineage)})
        this.setState({name: res.data.name})
        this.setState({breeder: res.data.seedCompany.name})
        this.setState({image: res.data.image})
      })
      .catch(error => console.log(error))
  }
  
  render(){
    const mappedLineage = this.state.lineage.map((line )=> <li key={line.slice(0,2)}>{line}</li>)

    const thing = this.state.image.split('/')
    const lastItem = thing[thing.length -1]

    if(lastItem === 'no_image.png'){
      this.setState({image: `${picture}`})
    }

    return(
      <div className="details">
        <h1 className="productName">
          {this.state.name}
        </h1>
        <div className="lineageDiv">
          <ul className="lineageList">
            {mappedLineage}
          </ul>
        </div>
        <div>
          <img src={this.state.image} alt='Image' />
        </div> 
      </div>  
    )
  }
}

export default ProductDetail