import React from "react";
import logo from "../../images/logo.png";
import "./Headers.css";
const Headers = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <h1>Power Fitness Strength</h1>
    </nav>
  );
};

export default Headers;
