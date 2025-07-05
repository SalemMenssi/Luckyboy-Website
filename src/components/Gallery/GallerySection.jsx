import React from "react";
import "./gallery.css";
import image from "../../assets/1.jpg";
import image1 from "../../assets/12.jpg";
import image2 from "../../assets/3.jpg";
import image3 from "../../assets/4.jpg";
import image4 from "../../assets/2.jpg";
import image5 from "../../assets/8.jpg";
import image6 from "../../assets/7.jpg";
import image7 from "../../assets/5.jpg";
import image8 from "../../assets/6.jpg";
import image9 from "../../assets/10.jpg";
import image10 from "../../assets/11.jpg";
import image11 from "../../assets/9.jpg";

const images = [
  {
    src: image2,
    id: 0,
  },
  {
    src: image5,
    id: 1,
  },
  {
    src: image1,
    id: 2,
  },
  {
    src: image3,
    id: 3,
  },
  {
    src: image6,
    id: 4,
  },
  {
    src: image4,
    id: 5,
  },
  {
    src: image,
    id: 6,
  },
  {
    src: image7,
    id: 7,
  },
  {
    src: image8,
    id: 8,
  },
  {
    src: image9,
    id: 9,
  },
  {
    src: image10,
    id: 10,
  },
  {
    src: image11,
    id: 11,
  },
];

const GallerySection = () => {
  return (
    <div id="gallery" className="gallery-container">
      <h2 style={{ marginBottom: "1em" }}>Gallery</h2>
      <div className="image-box">
        {images.map((e) => (
          <div className="pic" key={e.id}>
            <img src={e.src} style={{ width: "100%" }} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
