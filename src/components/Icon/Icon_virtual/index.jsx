import React, { useState, useEffect } from "react";
import icon_glasses from "../Icon_virtual/resource/icon_glasses.svg";
import "./index.css";

const Icon_virtual = () => {
  return (
    <a href="#" className="Icon_virtualContainer">
      <img src={icon_glasses} alt="icon_glasses" className="icon_virtual" />
      <div className="Icon_virtualText">
        虛擬試戴清單
        <br />
        請從商品頁面追加至列表
      </div>
    </a>
  );
};

export default Icon_virtual;
