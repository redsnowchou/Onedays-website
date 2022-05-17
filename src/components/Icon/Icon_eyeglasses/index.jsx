import React, { useState, useEffect } from "react";
import icon_eyeglasses from "../Icon_eyeglasses/resource/icon_eyeglasses.svg";
import "./index.css";

const Icon_eyeglasses = () => {
  return (
    <a href="#" className="Icon_eyeglassesContainer">
      <img
        src={icon_eyeglasses}
        alt="icon_eyeglasses"
        className="Icon_eyeglassesImg"
      />
      <div>眼鏡</div>
    </a>
  );
};

export default Icon_eyeglasses;
