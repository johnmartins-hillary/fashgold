import React from "react";
import Product from "./Product.js";
import "../styles/ProductContainer.css";
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
import pic12 from "../images/pic12.webp";
import pic13 from "../images/pic13.webp";
import pic16 from "../images/pic16.webp";

function ProductContainer() {
  return (
    <div className="product-container">
      <Product src={pic1} />
      <Product src={pic2} />
      <Product src={pic3} />
      <Product src={pic4} />
      <Product src={pic5} />
      <Product src={pic6} />
      <Product src={pic7} />
      <Product src={pic9} />
      <Product src={pic10} />
      <Product src={pic11} />
      <Product src={pic12} />
      <Product src={pic13} />
      <Product src={pic16} />
    </div>
  );
}

export default ProductContainer;
