import React from 'react';
import Card from '../Card';
import { products } from '../../data';
import './Cards.css'
const Cards = () => {
    return (
        <div className='cards-wrapper'>
            { products.map((product) => <Card product={product}/> )}
        </div>
    );
}

export default Cards;
