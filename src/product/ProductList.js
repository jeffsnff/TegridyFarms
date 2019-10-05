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
			filtered: [],
			search: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	 componentDidMount(){
		this.getProducsts()
	}
	
	getProducsts = () => {
		axios.get(`http://strainapi.evanbusse.com/${process.env.REACT_APP_KEY}/strains/search/all`)
			.then(response => this.setState({products: Object.keys(response.data).map((name) => {
				return {
					name:name,
					...response.data[name]
				}
			}),
			filtered: Object.keys(response.data).map((name) => {
				return {
					name:name,
					...response.data[name]
				}
			})
			}))
			.catch(error => console.log(error))
	}

	handleChange = (event) => {
		this.setState({
			search: event.target.value
		})
		let currentList = []
		let newList = []
		if(event.target.value !== ""){
			currentList = this.state.products
			newList = currentList.filter((item) => {
				const lc = item.name.toString().toLowerCase()
				const filter = event.target.value.toLowerCase()

				return lc.includes(filter)
				
			})
		}else {
			newList = this.props.items
		}
		this.setState({
			filtered: newList
		})
	}
	
	resetFilter = () => {
		this.setState(prevState => {
			return {filtered: prevState.products}
		})
	}

	render(){
		let mappedFilter
		if(this.state.filtered){
			mappedFilter = this.state.filtered.map(filter => 
				<Product 
					key={filter.id}
					id={filter.id}
					name={filter.name}
					img={TegridyWeed}
					array={this.state.filtered}
				/>)
		}else{
			this.resetFilter()
		} 

		return (
			<div>
				<form> 
					<input  type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search Products"></input>
				</form>
				<div className="productContainer">
				{mappedFilter}
			</div>
			</div>
			
		)
	}	
}
	

export default ProductList