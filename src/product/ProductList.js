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

	 componentDidMount(race){
		 if(race === undefined){
			 this.getProducts()
		 }else{
			 this.getStrains(race)
		 }
	}
	
	getProducts = () => {
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
	getStrains = (race) => {
		axios.get(`http://strainapi.evanbusse.com/${process.env.REACT_APP_KEY}/strains/search/race/${race}`)
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
					race={filter.race}
					id={filter.id}
					name={filter.name}
					img={TegridyWeed}
					array={this.state.filtered}
				/>)
				console.log(mappedFilter)
		}else{
			this.resetFilter()
		} 

		return (
			<div>
				<div className="empty">
					trying to push this down
				</div>
				<div>
					<div onClick={() => this.componentDidMount()}>All</div>
					<button onClick={() => this.componentDidMount('indica')}>Indica</button>
					<button onClick={() => this.componentDidMount('sativa')}>Sativa</button>
					<button onClick={() => this.componentDidMount('hybrid')}>Hybrid</button>
					<form> 
						<input className="search"  type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search Products"></input>
					</form>
				</div>
				<div className="productContainer">
					{mappedFilter}
				</div>
			</div>
			
		)
	}	
}
	

export default ProductList