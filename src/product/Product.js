import React from 'react';
import { Link } from 'react-router-dom'
import './Product.css';

const Product = props => {
  
        return (
            <div>
                <Link to={{pathname:`/ProductDetail/${props.name}`, state: {id:props.id, array:props.array, img:props.img}}}>
                <div className="product">
                    <h2>{props.name}</h2>
                    <h4>{props.id}</h4>
                    <img src={props.img} alt={props.img} />
                </div> 
                </Link>
            </div>
        )
}
    
export default Product