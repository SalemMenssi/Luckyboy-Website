import React from "react";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import "./get-app.css";

const GetApp = () => {
  return (
    <div id="GetApp" className="GetApp">
      <h2>Get the App !</h2>
      <span />
      <p>To enjoy our services and products download the app</p>
      <div className="btn-box">
        <a href="#">
          <img src={playStore} alt="play Store" />
        </a>
        <a href="#">
          <img src={appStore} alt="app Store" />
        </a>
      </div>
    </div>
  );
};

export default GetApp;
