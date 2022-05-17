import React, { useState, useEffect } from "react";
import service from "./resource/service.png";
import "./index.css";

const Serve = () => {
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
    <div className="ServeContainer">
      <div className="serveLeft">
        {screenWidth < 770 ? (
          <img className="serviceImg" src={service} alt="" />
        ) : (
          ""
        )}
        <div className="serveLeft_text01">
          ONEDAYS<span>服務</span>
        </div>
        <div className="serveLeft_text02">
          薄型非球面鏡片 追加費用 NT$<span>0</span>
        </div>
        <div className="serveLeft_text03">
          最快 <span>20</span>分鐘即可交件
        </div>
        <div className="serveLeft_text04">
          非於本店購買的鏡框 鏡片更換 NT$<span>1,990</span>
        </div>
        <button className="serveButton">前往眼鏡介紹</button>
      </div>
      {screenWidth > 770 ? (
        <img className="serviceImg" src={service} alt="" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Serve;
