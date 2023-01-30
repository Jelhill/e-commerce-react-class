import React from 'react';
import { useSelector } from 'react-redux';
import "./cart.css"
const Cart = () => {
    const productState = useSelector((state) => state.productReducer)
    const { cartItems } = productState
    return (
        <div className='cart-wrapper'>
          { !cartItems.length ? 
            <h1>Your cart is Empty</h1> 
            : 
            cartItems.map((item, i) => {
            return <div key={i} className='card-wrapper'>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/607678/1.jpg?7978" alt="pics"/>
                <div><h2>{item.productName}</h2></div>
                <div><h2>{item.price}</h2></div>
                {/* <button>Add To Cart</button> */}
            </div>

          })}
        </div>
    );
}

export default Cart;
