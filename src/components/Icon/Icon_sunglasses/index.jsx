import React, { useState, useEffect } from "react";
import icon_sunglasses from "../Icon_sunglasses/resource/icon_sunglasses.svg";
import "./index.css";

const Icon_sunglasses = () => {
  return (
    <a href="#" className="Icon_sunglassesContainer">
      <img
        src={icon_sunglasses}
        alt="icon_sunglasses"
        className="Icon_sunglassesImg"
      />
      <div>太陽眼鏡</div>
    </a>
  );
};

export default Icon_sunglasses;
