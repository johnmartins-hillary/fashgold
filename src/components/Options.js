import React from "react";
import requests from "../utils/requests";
import "../styles/Options.css"

function Options({fetchData}) {
  return (
    <div className="options">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2 className="option" onClick={fetchData}>{title}</h2>
      ))}
    </div>
  );
}

export default Options;
