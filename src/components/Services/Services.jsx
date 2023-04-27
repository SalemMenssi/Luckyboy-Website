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
          <img src={service} alt="service" />
          <div className="service-content">
            <h4>Blog</h4>
            <p>
              Eget mattis viverra in lorem dictum consequat etiam non
              pellentesque mauris diamprice ore
            </p>
          </div>
        </div>
        <div className="service">
          <img src={service} alt="service" />
          <div className="service-content">
            <h4>Store</h4>
            <p>
              Eget mattis viverra in lorem dictum consequat etiam non
              pellentesque mauris diamprice ore
            </p>
          </div>
        </div>
        <div className="service">
          <img src={service} alt="service" />
          <div className="service-content">
            <h4>Online reservation</h4>
            <p>
              Eget mattis viverra in lorem dictum consequat etiam non
              pellentesque mauris diamprice ore
            </p>
          </div>
        </div>
        <div className="service">
          <img src={service} alt="service" />
          <div className="service-content">
            <h4>Events</h4>
            <p>
              Eget mattis viverra in lorem dictum consequat etiam non
              pellentesque mauris diamprice ore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
