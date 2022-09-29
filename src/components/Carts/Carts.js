import React, { useState } from "react";
import "./Carts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const showToastMessage = () => {
    toast.success("Activity complete successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="cart">
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

      <div className="div">
        <h2>Add A Break</h2>
        <div className="add-break">
          <input onClick={timeChange} type="text" value={10} />
          <input onClick={timeChange} type="text" value={20} />
          <input onClick={timeChange} type="text" value={30} />
          <input onClick={timeChange} type="text" value={40} />
          <input onClick={timeChange} type="text" value={50} />
        </div>
      </div>

      <div className="exercise-details">
        <h2>Excercise Details</h2>
        <div className="exercise-time">
          <p>
            Exercise time <span className="same">{total} s</span>
          </p>
        </div>
        <div className="break-time">
          <p>
            Break time <span className="same">{breaks} s</span>
          </p>
        </div>
      </div>
      <div className="activity-completed">
        <button onClick={showToastMessage} className="activity-btn">
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Carts;
