import React from "react";
import service from "../../assets/service.png";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import "./service.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <h2>Our Sevices</h2>
      <div className="services-box">
        <div className="service">
          <img src={service} alt="service" />
          <div className="service-content">
            <h4>Blog</h4>
            <p>Get inspired with thrilling stories, and souvenirs</p>
          </div>
        </div>
        <div className="service">
          <img src={service2} alt="service" />
          <div className="service-content">
            <h4>Store</h4>
            <p>Premium products from our online store.</p>
          </div>
        </div>
        <div className="service">
          <img src={service1} alt="service" />
          <div className="service-content">
            <h4>Online reservation</h4>
            <p>paddle gear booking from anywhere</p>
          </div>
        </div>
        <div className="service">
          <img src={service3} alt="service" />
          <div className="service-content">
            <h4>Events</h4>
            <p>Dive into our community exciting gatherings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
