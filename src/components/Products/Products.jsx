import React from "react";
import "./products.css";
import product from "../../assets/product.png";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";

const Products = () => {
  return (
    <div id="activities" className="products">
      <h2>Our Activities</h2>
      <p>
        We offer a wide variety of activities, including different styles to
        different skill levels and interests
      </p>
      <div className="products-box">
        <div className="product">
          <img src={product} alt="product" />
          <h4>Surf</h4>
          <p>Thrilling water sport involving riding waves on a surfboard</p>
        </div>
        <div className="product">
          <img src={product1} alt="product" />
          <h4>Kayak</h4>
          <p>
            Unique way to explore the sea, offering a perspective on nature.
          </p>
        </div>
        <div className="product">
          <img src={product2} alt="product" />
          <h4>Paddle</h4>
          <p>
            Exiting sense of freedom with paddling your way through the water.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
