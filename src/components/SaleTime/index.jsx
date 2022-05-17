import React, { useState, useEffect } from "react";
import "./index.css";

const SaleTime = () => {
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
    <div className="SaleTimeBg">
      <div className="SaleTimeBox">
        <div className="SaleTimeBox_2">距離優惠結束</div>
        <div className="SaleTimeText">
          只剩<span className="SpanFont">22</span>天
        </div>
      </div>
      {screenWidth > 765 ? (
        <React.Fragment>
          <div className="SaleOff">
            <div className="SaleTimeWhiteBg">
              <div className="SaleTimeWhiteText_1">適用</div>
              <div className="SaleTimeWhiteText_2">商品</div>
            </div>
            <div className="OffText">
              50%<span className="SpanOff">OFF</span>
            </div>
          </div>
          <div className="SaleTimeTitle">『鬼滅之刃』眼鏡系列 5折</div>
        </React.Fragment>
      ) : (
        <div className="SaleCol">
          <div className="SaleTimeTitle">『鬼滅之刃』眼鏡系列 5折</div>
          <div className="SaleOff">
            <div className="SaleTimeWhiteBg">
              <div className="SaleTimeWhiteText_1">適用</div>
              <div className="SaleTimeWhiteText_2">商品</div>
            </div>
            <div className="OffText">
              50%<span className="SpanOff">OFF</span>
            </div>
          </div>
        </div>
      )}
      {screenWidth > 765 ? (
        <div className="LimitButton">
          <a href="#">限定商品請按此</a>
        </div>
      ) : (
        <div className="LimitButton">
          <a href="#">請按此</a>
        </div>
      )}
    </div>
  );
};

export default SaleTime;
