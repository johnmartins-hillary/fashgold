import React from "react";
import Options from "./Options";
import "../styles/AppBody.css";
import Slideshow from "./Slideshow";
import pic1 from "../images/pic1.webp";
import pic2 from "../images/pic2.webp";
import pic3 from "../images/pic3.webp";
import pic4 from "../images/pic4.webp";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.webp";
import pic7 from "../images/pic7.webp";
import axios from "../utils/axios.js";
import ProductContainer from "./ProductContainer";

function Appbody() {
  const fetchData = async () => {
    try {
      const response = await axios.get();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="appBody">
      <Options fetchData={fetchData} />
      <Slideshow
        interval={3000}
        images={[pic1, pic2, pic3, pic4, pic5, pic6, pic7]}
      />
      <ProductContainer />
    </div>
  );
}

export default Appbody;
