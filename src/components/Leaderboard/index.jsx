import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import first from "./resource/first.svg";
import second from "./resource/second.svg";
import third from "./resource/third.svg";
import product01 from "./resource/product01.jpeg";
import product02 from "./resource/product02.jpg";
import product03 from "./resource/product03.jpeg";
import product04 from "./resource/product04.jpeg";
import product05 from "./resource/product05.jpeg";
import product06 from "./resource/product06.jpeg";
import product07 from "./resource/product07.jpeg";
import product08 from "./resource/product08.jpeg";
import product09 from "./resource/product09.jpeg";
import { Link } from "react-router-dom";
import "./index.css";

const Leaderboard = () => {
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
  const { TabPane } = Tabs;
  const tab01 = <div className="tab01">眼鏡一週銷售排行榜</div>;
  const tab02 = <div className="tab02">最新眼鏡商品</div>;
  const tab03 = <div className="tab03">店員推薦款</div>;
  return (
    <div className="card-container">
      <Tabs
        type="card"
        centered={true}
        size="large"
        tabBarGutter={10}
        className="Tabs"
      >
        <TabPane tab={tab01} key="1">
          <div className="productAllContainer">
            <div className="productContainer">
              <a className="product">
                <img className="ranking" src={first} alt="" />
                <img className="product" src={product01} alt="" />
                <div className="productName">ONEDAYS SNAP</div>
                <div className="productPrice">NT$3,490</div>
              </a>
              <a className="product">
                <img className="ranking" src={second} alt="" />
                <img className="product" src={product02} alt="" />
                <div className="productName">John Dillinger</div>
                <div className="productPrice">NT$2,990</div>
              </a>
              {screenWidth > 770 ? (
                <a className="product">
                  <img className="ranking" src={third} alt="" />
                  <img className="product" src={product03} alt="" />
                  <div className="productName">ONEDAYS SNAP</div>
                  <div className="productPrice">NT$3,490</div>
                </a>
              ) : (
                ""
              )}
            </div>
            <Link to="/productpage" className="productButton">
              進入產品頁面
            </Link>
          </div>
        </TabPane>
        <TabPane tab={tab02} key="2">
          <div className="productAllContainer">
            <div className="productContainer">
              <a className="product">
                <img className="ranking" src={first} alt="" />
                <img className="product" src={product04} alt="" />
                <div className="productName">John Dillinger</div>
                <div className="productPrice">NT$3,490</div>
              </a>
              <a className="product">
                <img className="ranking" src={second} alt="" />
                <img className="product" src={product05} alt="" />
                <div className="productName">John Dillinger</div>
                <div className="productPrice">NT$3,490</div>
              </a>
              {screenWidth > 770 ? (
                <a className="product">
                  <img className="ranking" src={third} alt="" />
                  <img className="product" src={product06} alt="" />
                  <div className="productName">ONEDAYS</div>
                  <div className="productPrice">NT$2,490</div>
                </a>
              ) : (
                ""
              )}
            </div>
            <Link to="/productpage" className="productButton">
              進入產品頁面
            </Link>
          </div>
        </TabPane>
        <TabPane tab={tab03} key="3">
          <div className="productAllContainer">
            <div className="productContainer">
              <a className="product">
                <img className="ranking" src={first} alt="" />
                <img className="product" src={product07} alt="" />
                <div className="productName">AIR FIT</div>
                <div className="productPrice">NT$3,490</div>
              </a>
              <a className="product">
                <img className="ranking" src={second} alt="" />
                <img className="product" src={product08} alt="" />
                <div className="productName">ONEDAYS SNAP</div>
                <div className="productPrice">NT$3,490</div>
              </a>
              {screenWidth > 770 ? (
                <a className="product">
                  <img className="ranking" src={third} alt="" />
                  <img className="product" src={product09} alt="" />
                  <div className="productName">+NICHE</div>
                  <div className="productPrice">NT$3,490</div>
                </a>
              ) : (
                ""
              )}
            </div>
            <Link to="/productpage" className="productButton">
              進入產品頁面
            </Link>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Leaderboard;
