import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import icon from "../../assets/uil_facebook-f.svg";
import icon1 from "../../assets/uil_instagram.svg";
import icon2 from "../../assets/uil_linkedin-alt.svg";
import icon3 from "../../assets/uil_twitter-alt.svg";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";

const Footer = () => {
  return (
    <div className="footer">
      <svg
        className="head"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="MyGradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="rgba(0, 172, 193, 1)" />
            <stop offset="100%" stopColor="rgb(84 58 183" />
          </linearGradient>
        </defs>
        <path
          fill="#5AC2E3 "
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,218.7C840,203,960,181,1080,170.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <div className="footer-content">
        <div className="leftf">
          <img className="comp" src={logo} alt="logo" />
          <p className="service-info" style={{ fontSize: "1rem" }}>
            Adresse sidi bou said
            <br />
            <br />
            Tel : +62 21 2922 2999
          </p>
        </div>

        <div className="rightf">
          <ul className="link-foot">
            <li>Services</li>
            <li>Surfing</li>
            <li>Paddle</li>
            <li>Kayak</li>
          </ul>
          <ul className="link-foot">
            <li>Products</li>
            <li>Accessories</li>
            <li>Clothes</li>
            <li>Tools</li>
            <li>Equipments</li>
          </ul>
        </div>
        <div className="centerf">
          <h1 className="folow">Follow us</h1>
          <div className="icon">
            <a href="https://www.facebook.com/kicksoft.tn/" className="ico">
              <img src={icon} className="iconn" alt="icon" />
            </a>
            <a href="https://www.facebook.com/kicksoft.tn/" className="ico">
              <img src={icon1} className="iconn" alt="icon" />
            </a>
            <a href="https://www.facebook.com/kicksoft.tn/" className="ico">
              <img src={icon2} className="iconn" alt="icon" />
            </a>
            <a href="https://www.facebook.com/kicksoft.tn/" className="ico">
              <img src={icon3} className="iconn" alt="icon" />
            </a>
          </div>
          <div
            style={{ margin: 0, width: "120%" }}
            className="btn-home-container"
          >
            <a href="#">
              <img style={{ width: "10em" }} src={playStore} alt="playStore" />
            </a>
            <a href="#">
              <img style={{ width: "10em" }} src={appStore} alt="appStore" />
            </a>
          </div>
        </div>
      </div>
      <div className="waves-box">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FEE6C233" />
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#FEE6C273" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#FEE6C2a6" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#FEE6C2d9" />
          </g>
        </svg>
      </div>
      <h5>© 2021 Luckyboy. All right reserved.</h5>
    </div>
  );
};

export default Footer;
