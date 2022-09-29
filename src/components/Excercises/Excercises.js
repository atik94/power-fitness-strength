import React from "react";
import "./Excercises.css";
const Excercises = ({ excercise, handleAddToCart }) => {
  //const {excercise, handleAddToCart} =props
  const { name, img, seller, price, ratings } = excercise;
  return (
    <div className="excercise">
      <img src={img} alt="" />
      <div className="excercise-info">
        <p className="excercise-name">{name}</p>
        <p> price :{price}</p>
      </div>
      <button onClick={() => handleAddToCart(excercise)} className="btn-cart">
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Excercises;
