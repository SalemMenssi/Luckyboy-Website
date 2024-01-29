import React from "react";
import service from "../../assets/service.png";
import "./service.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <h2>Our Sevices</h2>
      <p>To enjoy our services , get the app </p>
      <div className="services-box">
        <div className="service">
          <h4>Store</h4>
        </div>
        <div className="service">
          <h4>Reservation</h4>
        </div>
        <div className="service">
          <h4>Events</h4>
        </div>
        <div className="service">
          <h4>Blog</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
