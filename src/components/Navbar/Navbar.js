import "./navbar.css";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isScolling, setIsScolling] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setIsScolling(true) : setIsScolling(false);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={`Navbar ${isScolling && "chaged-color"}`}>
      <h1>
        <img src={logo} alt="logow" /> LuckyBoy
      </h1>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <a href="#" className="get-app">
        Get The app
      </a>
    </div>
  );
};

export default Navbar;
