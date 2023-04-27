import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Logo</h1>
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
