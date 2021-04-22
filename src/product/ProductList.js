import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';
import TegridyWeed from '../photos/TegridyWeed.jpg'
import ProductCard from './ProductCard.js';


class ProductList extends Component {
	constructor(){
		super()
		this.state = {
			products: [],
      nextPageination: '',
      prevPageination: '',
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
        this.setState({nextPageination: res.data.meta.pagination.links.next})
      })
      .catch(err => console.log(err))
  }

  getNextPage = () => {
    axios.get(this.state.nextPageination)
      .then((res) => {
        this.setState({products: res.data.data})
        this.setState({nextPageination: res.data.meta.pagination.links.next})
        this.setState({prevPageination: res.data.meta.pagination.links.previous})
      })
  }
  getPrevPage = () => {
    axios.get(this.state.prevPageination)
      .then((res) => {
        this.setState({products: res.data.data})
        this.setState({nextPageination: res.data.meta.pagination.links.next})
        this.setState({prevPageination: res.data.meta.pagination.links.previous})
      })
  }

	render(){
    console.log(this.state.nextPageination)
    let mappedProducts = this.state.products.map((product) => (
      <ProductCard
        key={product.ocpc}
        name={product.name}
        img={product.image}
        info={product}
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
            <button onClick={() => this.getPrevPage()}>Back</button>
            <button onClick={() => this.getNextPage()}>Next</button>
        </div>
			</div>
			
		)
	}	
}
	

export default ProductList