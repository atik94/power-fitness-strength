import React from "react";
import "./Excercises.css";
const Excercises = ({ excercise, handleAddToCart }) => {
  //const {excercise, handleAddToCart} =props
  const { name, img, details, age, time } = excercise;
  return (
    <div className="excercise">
      <img src={img} alt="" />
      <div className="excercise-info">
        <p className="excercise-name">{name}</p>
        <p>{details ? details.slice(0, 100) : ""}</p>
        <p>For age: {age}</p>
        <p>Time required: {time}s</p>
      </div>
      <button onClick={() => handleAddToCart(excercise)} className="btn-cart">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Excercises;
