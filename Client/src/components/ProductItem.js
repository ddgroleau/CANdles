import React from 'react';
import '../assets/products.css';

function ProductItem(props) {
    return (
        <div className='product__li__wrapper'>
            <li className='product__li'>
                        <img src={props.imageUrl} alt="product" 
                        className='product__li__img' />
                    <div className="product__li__info">
                        <h6 className='producer__li__text'>{props.producer}</h6>
                        <h5 className='product__li__text'>"{props.product}"</h5>
                    </div>
            </li>
        </div>
    )
}

export default ProductItem;


