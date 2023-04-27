import React from "react";
import "./footer.css";

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
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,218.7C840,203,960,181,1080,170.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <div className="footer-content">
        <ul className="row">
          <h2>Lucky boy</h2>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
        <ul className="row">
          <h2>Lucky boy</h2>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
        <ul className="row">
          <h2>Lucky boy</h2>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
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
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <h5>© 2021 Luckyboy. All right reserved.</h5>
    </div>
  );
};

export default Footer;
