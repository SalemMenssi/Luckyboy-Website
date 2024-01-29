import React from "react";
import "./gallery.css";
import image from "../../assets/iPhone 11 Pro Max - 75.png";
import image1 from "../../assets/iPhone 11 Pro Max - 76.png";
import image2 from "../../assets/iPhone 11 Pro Max - 77.png";
import image3 from "../../assets/iPhone 11 Pro Max - 78.png";
import image4 from "../../assets/iPhone 11 Pro Max - 79.png";
import image5 from "../../assets/iPhone 11 Pro Max - 80.png";
import image6 from "../../assets/product1.png";
import image7 from "../../assets/product2.png";

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
