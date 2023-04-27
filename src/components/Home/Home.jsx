import "./home.css";
import React from "react";
import video from "../../assets/landpage.mp4";

const Home = () => {
  return (
    <div className="home">
      <video
        className="land"
        src={video}
        loop
        autoPlay
        muted
        playsInline
      ></video>
      <h2>Lucky boy</h2>
      <h3>Explore the beauty of the sea</h3>
      <div className="btn-home-container">
        <a href="#">Discover</a>
        <a href="#">Products</a>
      </div>
    </div>
  );
};

export default Home;
