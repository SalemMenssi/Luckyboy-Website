import React from "react";
import "./products.css";
import product from "../../assets/product.png";

const Products = () => {
  return (
    <div id="products" className="products">
      <h2>Products</h2>
      <p>
        We offer a wide variety of Products, including different styles and
        sizes that cater to different skill levels and interests, so that you
        can find the perfect equipment to suit your needs and preferences.
      </p>
      <div className="products-box">
        <div className="product">
          <img src={product} alt="product" />
          <h4>Surf</h4>
          <p>
            Surfing is a thrilling and adrenaline-pumping water sport that
            involves riding waves on a surfboard
          </p>
        </div>
        <div className="product">
          <img src={product} alt="product" />
          <h4>Surf</h4>
          <p>
            Surfing is a thrilling and adrenaline-pumping water sport that
            involves riding waves on a surfboard
          </p>
        </div>
        <div className="product">
          <img src={product} alt="product" />
          <h4>Surf</h4>
          <p>
            Surfing is a thrilling and adrenaline-pumping water sport that
            involves riding waves on a surfboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
