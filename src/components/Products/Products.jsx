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
          <p>
            Welcome to our kayak and paddle rental shop, where we offer you the
            chance to discover the beauty of nature in a whole new way. Our
            high-quality kayaks and paddles are perfect for a fun and exciting
            adventure on the water.
          </p>
        </div>
        <div className="product">
          <img src={product1} alt="product" />
          <h4>Kayak</h4>
          <p>
            Kayaking is an exhilarating and unique way to explore the great
            outdoors, offering a perspective on nature that you simply can't get
            from land
          </p>
        </div>
        <div className="product">
          <img src={product2} alt="product" />
          <h4>Paddle</h4>
          <p>
            The sense of freedom and tranquility that comes with paddling your
            way through the water is truly unmatched
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
