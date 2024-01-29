import "./features.css";
import React from "react";
import f1 from "../../assets/image 4.png";
import f2 from "../../assets/image 3.png";
import f3 from "../../assets/image 9.png";
import f4 from "../../assets/image 8.png";
import f5 from "../../assets/image 6.png";
import f6 from "../../assets/image 5.png";
import ScrollAnimation from "react-animate-on-scroll";

const Features = () => {
  return (
    <div id="features" className="features">
      <ScrollAnimation animateOnce animateIn="zoomInDown">
        <h2>The smoothest Ride</h2>
        <p>
          Welcome to our kayak and paddle rental shop, where we offer you the
          chance to discover the beauty of nature in a whole new way. Our
          high-quality kayaks and paddles are perfect for a fun and exciting
          adventure on the water.
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="slideInUp">
        <div className="features-box">
          <div className="feature">
            <img src={f1} alt="logo" />

            <h4>Good Quality</h4>
            <p>Well-maintained high-quality kayaks and paddles</p>
          </div>
          <div className="feature">
            <img src={f2} alt="logo" />
            <h4>Equipment</h4>
            <p>A wide range of kayaks and paddles for different skill levels</p>
          </div>
          <div className="feature">
            <img src={f3} alt="logo" />
            <h4>Expert staff</h4>
            <p>Our knowledgeable staff are here to provide expert guidance</p>
          </div>
          <div className="feature">
            <img src={f4} alt="logo" />
            <h4>Convenience</h4>
            <p>online reservations, flexible rental period</p>
          </div>
          <div className="feature">
            <img src={f5} alt="logo" />
            <h4>Safety</h4>
            <p>offering life jackets and other safety equipment</p>
          </div>
          <div className="feature">
            <img src={f6} alt="logo" />
            <h4>Location</h4>
            <p>Ideal spot that offers easy access to a variety of waterways;</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Features;
