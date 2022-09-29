import React, { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Excercises from "../Excercises/Excercises";
import "./Fitnesses.css";
const Fitnesses = () => {
  const [excercises, setExcercises] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("excercises.json")
      .then((res) => res.json())
      .then((data) => setExcercises(data));
  }, []);
  const handleAddToCart = (excercise) => {
    const newCart = [...cart, excercise];
    setCart(newCart);
  };
  return (
    <div className="fitness-container">
      <div className="excercise-container">
        {excercises.map((excercise) => (
          <Excercises key={excercise.id} excercise={excercise} handleAddToCart={handleAddToCart}></Excercises>
        ))}
      </div>
      <div className="cart-container">
        <Carts cart={cart}></Carts>
      </div>
    </div>
  );
};

export default Fitnesses;
