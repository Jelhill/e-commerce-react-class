import React from 'react';
import './index.css'
import { useDispatch } from 'react-redux';
import { setCartItem } from '../../Redux/reducers/productReducer';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const dispatch = useDispatch();

    const handleSelectedItem = (product) => {
        dispatch(setCartItem(product))
    }

    return (
        <div className='card-wrapper'>
            <Link to={`product/${props.product.id}`}>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/607678/1.jpg?7978" alt="pics"/>
                <div><h2>{props.product.productName}</h2></div>
                <div><h2>{props.product.price}</h2></div>
            </Link>
                <button onClick={() => handleSelectedItem(props.product)}>Add To Cart</button>
            </div>
        
    );
}

export default Card;
