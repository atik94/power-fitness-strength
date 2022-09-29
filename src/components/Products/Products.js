import React from 'react';
import './Products.css'
const Products = ({product, handleAddToCart}) => {
    //const {product, handleAddToCart} =props
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p> price :{price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Products;