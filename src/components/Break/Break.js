import React from "react";
import "./break.css";
import breakImg from "../../assets/break.png";

const Break = () => {
  return (
    <div className="break">
      <img src={breakImg} alt="break" />
      <div className="content">
        <h4>The Best way to see Tunisia</h4>
        <p>
          Whether you're an experienced kayaker or a beginner looking to try
          something new, we have the equipment and expertise to make your
          experience unforgettable.start exploring the natural wonders of the
          water!
        </p>
      </div>
    </div>
  );
};

export default Break;
