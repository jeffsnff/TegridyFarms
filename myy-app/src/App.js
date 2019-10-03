import React from 'react';
import Home from './home/Home.js'
import NavBar from './navBar/NavBar.js'
import ProductList from './product/ProductList.js'
import About from './aboutus/About.js'
import Footer from './footer/Footer.js'
import Contact from './contact/Contact.js'
import { Switch, Route } from 'react-router-dom'
import ProductDetail from './product/ProductDetail.js';

function App() {
return (
	<div>
		<NavBar />
		<Switch>
			<Route exact path ="/" component={Home} />
			<Route path="/About" component={About} />
			<Route path="/ProductList" component={ProductList} />
			<Route path="/Contact" component={Contact} />
			<Route path='/ProductDetail' component={ProductDetail} />
		</Switch>
		<Footer />
	</div>
);
}

export default App;
