import React from "react";
import "../styles/Product.css";
import pic1 from "../images/pic1.webp";
import pic2 from "../images/pic2.webp";
import pic3 from "../images/pic3.webp";
import pic4 from "../images/pic4.webp";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.webp";
import pic7 from "../images/pic7.webp";
import pic9 from "../images/pic9.webp";
import pic10 from "../images/pic10.webp";
import pic11 from "../images/pic11.webp";

function Product({ src }) {
  return (
    <div className="product">
      <h4 className="desc">This is a product</h4>
      <img src={src} className="product-image" />
      <p className="price">$200</p>
      <button className="add-product">Add to cart</button>
    </div>
  );
}

export default Product;
