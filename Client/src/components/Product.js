import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import '../assets/products.css';
import ProductAPI from './ProductAPI';

function Product() {
    const [products, setProducts] = useState([{
        imageUrl: "",
        producer: "",
        product: ""
    }]);
    useEffect(() => {
        ProductAPI.getProducts().then(res => setProducts(res))
    }, []); 
        return (
            <div className='product'>
                <h1>Our Complete Collection of CANdles</h1>
                <div className='product__container'>
                    <div className='product__wrapper'>
                        <ul className='product__ul'>
                        {products.map((products, id) => 
                            <ProductItem           
                            imageUrl={products.imageUrl}
                            producer={products.producer}
                            product={products.product}
                            key={id}
                            />
                        )}  
                        </ul>
                    </div>
                </div>
                
            </div>
        )

}

export default Product;

