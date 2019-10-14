import React from 'react';
import ProductList from "../product/ProductList.js";
import About from "../aboutus/About.js"
import './Home.css'

function Home(){

    return (
    <div className="main-containter">
        <div className="home">
            <h1 className="homeText">Tegridy Farms</h1>
        </div>
        <ProductList />
        <About />
    </div>
    )
}

export default Home
