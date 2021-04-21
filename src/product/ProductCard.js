import React from 'react';
import { Link } from 'react-router-dom'
import './Product.css';

const Product = props => {
        
        return (
          <div key={props.key} className="product">
            <img src={props.img} alt={props.img} />
            <h2>{props.name}</h2>
          </div> 
        )
}
    
export default Product



{/* <div>
                <Link to={{pathname:`/ProductDetail/${props.name}`, state: {id:props.id, array:props.array, img:props.img}}}>
                <div className="product">
                    <img src={props.img} alt={props.img} />
                    <h2>{props.name}</h2>
                    <div>
                        <h4>{props.race.toUpperCase()}</h4>
                    </div>
                </div> 
                </Link>
            </div> */}