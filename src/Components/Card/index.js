import React from 'react';
import './index.css'
const Card = (props) => {
    return (
        <div className='card-wrapper'>
            <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/607678/1.jpg?7978" alt="pics"/>
            <div><h2>{props.product.productName}</h2></div>
            <div><h2>{props.product.price}</h2></div>
            <button>Add To Cart</button>
        </div>
    );
}

export default Card;
