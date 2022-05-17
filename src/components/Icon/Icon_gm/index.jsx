import React, { useState, useEffect } from "react";
import icon_gm from "../Icon_gm/resource/icon_gm.svg";
import "./index.css";

const Icon_gm = () => {
  return (
    <a href="#" className="Icon_gmContainer">
      <img src={icon_gm} alt="icon_gm" className="Icon_gmImg" />
      <div>配件</div>
    </a>
  );
};

export default Icon_gm;
