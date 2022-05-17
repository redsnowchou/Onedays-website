import React, { useState, useEffect } from "react";
import PopularityImg01 from "./resource/PopularityImg01.jpeg";
import "./index.css";

const EyeCAMP = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return <div className="PopularityContainer"></div>;
};

export default EyeCAMP;
