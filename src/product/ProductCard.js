import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import './Product.css';

const Product = props => {

  // const url = axios.get()
    // console.log(props.info.ocpc)
        
        return (
          // <Link to={{pathname:`/ProductDetail/${props.name}`}}>
          //   <div key={props.key} className="product">
          //     <img src={props.img} alt={props.img} />
          //     <h2>{props.name}</h2>
          //   </div> 
          // </Link>

          <Link to={{pathname:`/ProductDetail/${props.name}`, state: {id:props.info.ocpc, array:props.array, img:props.img}}}>
                <div className="product">
                    <img src={props.img} alt={props.img} />
                    <h2>{props.name}</h2>
                </div> 
                </Link>
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