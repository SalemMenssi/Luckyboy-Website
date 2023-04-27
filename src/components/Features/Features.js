import "./features.css";
import React from "react";
import f1 from "../../assets/Rocket.png";

const Features = () => {
  return (
    <div className="features">
      <h2>The smoothest Ride</h2>
      <p>
        Welcome to our kayak and paddle rental shop, where we offer you the
        chance to discover the beauty of nature in a whole new way. Our
        high-quality kayaks and paddles are perfect for a fun and exciting
        adventure on the water.
      </p>
      <div className="features-box">
        <div className="feature">
          <img src={f1} alt="logo" />

          <h4>Good Quality</h4>
          <p>
            Our high-quality kayaks and paddles are well-maintained and suitable
            for all skill levels.
          </p>
        </div>
        <div className="feature">
          <img src={f1} alt="logo" />
          <h4>Equipment</h4>
          <p>
            We offer a wide range of kayaks and paddles to cater to different
            skill levels and interests.
          </p>
        </div>
        <div className="feature">
          <img src={f1} alt="logo" />
          <h4>Expert staff</h4>
          <p>
            Our knowledgeable staff are passionate about kayaking and
            paddleboarding and are here to provide expert guidance and advice.
          </p>
        </div>
        <div className="feature">
          <img src={f1} alt="logo" />
          <h4>Convenience</h4>
          <p>
            Our online reservations, flexible rental periods, and easy pickup
            and drop-off locations make renting kayaks and paddles from us a
            hassle-free and convenient experience.
          </p>
        </div>
        <div className="feature">
          <img src={f1} alt="logo" />
          <h4>Safety</h4>
          <p>
            We prioritize safety above all else, offering life jackets and other
            safety equipment as well as tips and guidance on safe kayaking and
            paddleboarding practices.
          </p>
        </div>
        <div className="feature">
          <img src={f1} alt="logo" />
          <h4>Location</h4>
          <p>
            Our shop is located in an ideal spot that offers easy access to a
            variety of waterways, allowing you to fully explore the natural
            surroundings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
