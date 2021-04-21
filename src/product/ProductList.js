import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';
import TegridyWeed from '../photos/TegridyWeed.jpg'
import Product from './Product.js';


class ProductList extends Component {
	constructor(){
		super()
		this.state = {
			products: [],
      pageination: '',
			filtered: [],
			search: ""
		}
		// this.handleChange = this.handleChange.bind(this)
	}

	 componentDidMount(race){
		 if(race === undefined){
			 this.getProducts()
		 }else{
			 this.getStrains(race)
		 }
	}

  getProducts = () => {
    axios.get('https://api.otreeba.com/v1/strains')
      .then((res) => {
        this.setState({products: res.data.data})
        this.setState({pageination: res.data.meta.pagination.links.next})
      })
      .catch(err => console.log(err))
  }

	render(){

    let mappedProducts = this.state.products.map((product) => (
      <Product
        key={product.ocpc}
        name={product.name}
        img={product.image}
      />
    ))
    
		return (
			<div>
				<h1 className="shhhh">Find Your Strain</h1>
        <div className="maincontain">
            <div className="productContainer">
              {
                mappedProducts
              }
            </div>
        </div>
			</div>
			
		)
	}	
}
	

export default ProductList