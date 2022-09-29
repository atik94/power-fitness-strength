import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Products from '../Products/Products';
import './Shops.css'
const Shops = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddToCart =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Products 
                        key={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Carts cart={cart}></Carts>
            </div>
        </div>
    );
};

export default Shops;