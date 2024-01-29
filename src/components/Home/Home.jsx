import "./home.css";
import React from "react";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  return (
    <div className="home">
      <h2>LuckyBoy</h2>
      <h3>Explore the beauty of the sea</h3>
      <div className="btn-home-container">
        <a href="#">
          <img src={playStore} alt="playStore" />
        </a>
        <a href="#">
          <img src={appStore} alt="appStore" />
        </a>
      </div>
    </div>
  );
};

export default Home;
