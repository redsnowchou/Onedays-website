import React, { useState, useEffect } from "react";
import heart from "../Icon_myFavourite/resource/heart.svg";
import "./index.css";

const Icon_myFavourite = () => {
  return (
    <a href="#" className="Icon_myFavouriteContainer">
      <img src={heart} alt="heart" className="heart" />
      <div className="Icon_myFavouriteText">
        我的最愛
        <br />
        也適用於非會員
      </div>
    </a>
  );
};

export default Icon_myFavourite;
