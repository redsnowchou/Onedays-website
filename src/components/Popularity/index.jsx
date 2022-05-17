import React, { useState, useEffect } from "react";
import PopularityImg01 from "./resource/PopularityImg01.jpg";
import PopularityImg02 from "./resource/PopularityImg02.jpg";
import PopularityImg03 from "./resource/PopularityImg03.jpg";
import PopularityImg04 from "./resource/PopularityImg04.jpg";
import PopularityImg05 from "./resource/PopularityImg05.jpg";
import PopularityImg06 from "./resource/PopularityImg06.jpg";
import PopularityImg07 from "./resource/PopularityImg07.jpg";
import PopularityImg08 from "./resource/PopularityImg08.jpg";
import "./index.css";

const Popularity = () => {
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
  return (
    <div className="PopularityContainer">
      <div className="PopularityTitle">人氣品牌</div>
      {screenWidth > 770 ? (
        <div className="PopularityImages">
          <div className="PopularityImagesA">
            <a className="PopularityImg01">
              <img src={PopularityImg01} alt="" />
            </a>
            <a className="PopularityImg02">
              <img src={PopularityImg02} alt="" />
            </a>
            <a className="PopularityImg03">
              <img src={PopularityImg03} alt="" />
            </a>
            <a className="PopularityImg04">
              <img src={PopularityImg04} alt="" />
            </a>
          </div>
          <div className="PopularityImagesB">
            <a className="PopularityImg05">
              <img src={PopularityImg05} alt="" />
            </a>
            <a className="PopularityImg06">
              <img src={PopularityImg06} alt="" />
            </a>
            <a className="PopularityImg07">
              <img src={PopularityImg07} alt="" />
            </a>
            <a className="PopularityImg08">
              <img src={PopularityImg08} alt="" />
            </a>
          </div>
        </div>
      ) : (
        <div className="PopularityImages">
          <div className="PopularityImagesA">
            <a className="PopularityImg01">
              <img src={PopularityImg01} alt="" />
            </a>
            <a className="PopularityImg02">
              <img src={PopularityImg02} alt="" />
            </a>
          </div>
          <div className="PopularityImagesB">
            <a className="PopularityImg03">
              <img src={PopularityImg03} alt="" />
            </a>
            <a className="PopularityImg04">
              <img src={PopularityImg04} alt="" />
            </a>
          </div>
          <div className="PopularityImagesC">
            <a className="PopularityImg05">
              <img src={PopularityImg05} alt="" />
            </a>
            <a className="PopularityImg06">
              <img src={PopularityImg06} alt="" />
            </a>
          </div>
          <div className="PopularityImagesD">
            <a className="PopularityImg07">
              <img src={PopularityImg07} alt="" />
            </a>
            <a className="PopularityImg08">
              <img src={PopularityImg08} alt="" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popularity;
