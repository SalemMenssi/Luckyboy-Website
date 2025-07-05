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
        <h2>Discover the Sea Like Never Before</h2>
        <p>
          Glide through Sidi Bousaid’s crystal-clear waters with
          Lucky Boy Tunisia. Rent kayaks, paddleboards, or surf gear — all at
          your fingertips.
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
