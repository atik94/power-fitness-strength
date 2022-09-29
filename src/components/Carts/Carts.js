import React, { useState } from "react";
import "./Carts.css";
const Carts = ({ cart }) => {
  //console.log(cart);
  let total = 0;
  for (const product of cart) {
    total = total + product.time;
  }
  const [breaks, setBreak] = useState(0);
  const timeChange = (e) => {
    let bbb = e.target.value;
    //console.log(bbb);
    //setBreak(bbb);

    localStorage.setItem("item", bbb);
    const getItems = localStorage.getItem("item");
    setBreak(getItems);
  };
  return (
    <div className="cart">
      <p>price : {total}s</p>
      <div>
        <input onClick={timeChange} type="text" value={10} />
        <input onClick={timeChange} type="text" value={20} />
        <p>{breaks}</p>
      </div>
      <div className="profile">
        <h2>Atikur Rahman</h2>
        <p>Dhaka, Bangladesh</p>
      </div>
      <div className="myself">
        <div>
          <h2>75kg Weight</h2>
        </div>
        <div>
          <h2>4.6 height</h2>
        </div>
        <div>
          <h2>25yrs Age</h2>
        </div>
      </div>
      <div className="exercise-details">
        <h2>Excercise Details</h2>
        <div className="exercise-time">
          <p>
            Exercise time <span className="same">200 s</span>
          </p>
        </div>
        <div className="break-time">
          <p>
            Break time <span className="same">15 s</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carts;
