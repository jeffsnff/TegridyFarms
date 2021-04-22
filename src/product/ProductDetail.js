import React, { Component } from 'react'
import axios from 'axios'

class ProductDetail extends Component {
  constructor(props){
      super(props)
      this.state = {
          info: {},
          genetics: {}
      }
  }
  componentDidMount(){
      // calls description of singluar product based on id
      axios.get(`https://api.otreeba.com/v1/strains/${this.props.location.state.id}`)
        .then(res => this.setState({info: res.data}))
        .catch(error => console.log(error))
  }
  
 
  
  render(){
    // this.setState({genetics: this.state.info.genetics})
    const { image, name, qr } = this.state.info
    console.log(this.state.info)
    return(
      <div className="details">
        HELLO
      </div>  
    )
  }
}

export default ProductDetail