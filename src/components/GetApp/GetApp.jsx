import React from "react";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import phone from "../../assets/Group 9.png";
import phone1 from "../../assets/Group 10.png";
import phone2 from "../../assets/Group 11.png";
import "./get-app.css";

const GetApp = () => {
  return (
    <div id="GetApp" className="GetApp">
      <h2>Get the App !</h2>
      <span />
      <div className="phone-box">
        <img src={phone1} alt="phone" />
        <img src={phone} alt="phone" />
        <img src={phone2} alt="phone" />
      </div>
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
