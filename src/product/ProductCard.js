import React from 'react';
import { Link } from 'react-router-dom'
import tegridyImage from '../photos/TegridyWeed.jpg'
import './Product.css';

const Product = props => {

  let image = props.img
  const splitImage = image.split('/')
  const lastItemArray = splitImage[splitImage.length -1]

  if(lastItemArray === 'no_image.png'){
    image = tegridyImage
  }
        
  return (
    <Link to={{pathname:`/ProductDetail/${props.name}`, state: {id:props.info.ocpc, array:props.array, img:props.img}}}>
      <div className="product-card">
        <img src={image} alt={props.img} />
        <h2>{props.name}</h2>
      </div> 
    </Link>
  )
}
    
export default Product
