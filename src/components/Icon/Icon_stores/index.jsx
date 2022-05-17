import React, { useState, useEffect } from "react";
import icon_stores from "../Icon_stores/resource/icon_stores.svg";
import "./index.css";

const Icon_stores = () => {
  return (
    <a href="#" className="Icon_storesContainer">
      <img src={icon_stores} alt="icon_stores" className="Icon_storesImg" />
      <div>門市查詢</div>
    </a>
  );
};

export default Icon_stores;
