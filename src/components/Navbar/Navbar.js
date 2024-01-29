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
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#activities">Activities</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>
      <a href="#GetApp" className="get-app">
        Get The app
      </a>
    </div>
  );
};

export default Navbar;
