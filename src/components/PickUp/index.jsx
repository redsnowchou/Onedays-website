import React, { useState, useEffect } from "react";
import "./index.css";

const PickUp = () => {
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
    <div className="PickUpContainer">
      <div className="PickUpTitle">Pick up</div>
      <div className="PickUpImgContainer">
        <a className="PickUpLeft">
          {screenWidth > 770 ? (
            <React.Fragment>
              <div className="PickUpLeft_Text01">eco²xy</div>
              <div className="PickUpLeft_Text02">
                使用可永續利用的天然植物資源Biomass原料蓖麻種子所製作而成的環保再生系列。
              </div>
              <a className="PickUpLeft_Text03">VIEW MORE</a>
            </React.Fragment>
          ) : (
            ""
          )}
        </a>
        {screenWidth < 770 ? (
          <React.Fragment>
            <div className="PickUpLeft_Text01">eco²xy</div>
            <div className="PickUpLeft_Text02">
              使用可永續利用的天然植物資源Biomass原料蓖麻種子所製作而成的環保再生系列。
            </div>
            <a className="PickUpLeft_Text03">VIEW MORE</a>
          </React.Fragment>
        ) : (
          ""
        )}
        <div className="PickUpRight">
          <div className="PickUpRight01">
            {screenWidth > 770 ? (
              <a className="PickUpRightImg02">
                <div className="PickUpRightImg02_Text01">角色造型眼鏡系列</div>
                <a className="PickUpRightImg02_Text02">VIEW MORE</a>
              </a>
            ) : (
              ""
            )}
            {screenWidth < 770 ? (
              <React.Fragment>
                <a className="PickUpRightImg02Container">
                  <a className="PickUpRightImg02"></a>
                  {screenWidth > 465 ? (
                    <div className="PickUpRightImg02_Text01">
                      角色造型眼鏡系列
                    </div>
                  ) : (
                    <div className="PickUpRightImg02_Text01">
                      角色造
                      <br />
                      型眼鏡系列
                    </div>
                  )}
                  <a className="PickUpRightImg02_Text02">VIEW MORE</a>
                </a>
              </React.Fragment>
            ) : (
              ""
            )}
            {screenWidth > 770 ? (
              <a className="PickUpRightImg03">
                <div className="PickUpRightImg03_Text01">LAMIO × ONEDAYS</div>
                <a className="PickUpRightImg03_Text02">VIEW MORE</a>
              </a>
            ) : (
              ""
            )}
            {screenWidth < 770 ? (
              <React.Fragment>
                <a className="PickUpRightImg03Container">
                  <a className="PickUpRightImg03"></a>
                  {screenWidth > 465 ? (
                    <div className="PickUpRightImg03_Text01">
                      LAMIO × ONEDAYS
                    </div>
                  ) : (
                    <div className="PickUpRightImg03_Text01">
                      LAMIO ×
                      <br />
                      ONEDAYS
                    </div>
                  )}
                  <a className="PickUpRightImg03_Text02">VIEW MORE</a>
                </a>
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
          <div className="PickUpRight02">
            {screenWidth > 770 ? (
              <a className="PickUpRightImg04">
                <div className="PickUpRightImg04_Text01">MAXONE × ONEDAYS</div>
                <a className="PickUpRightImg04_Text02">VIEW MORE</a>
              </a>
            ) : (
              ""
            )}
            {screenWidth < 770 ? (
              <React.Fragment>
                <a className="PickUpRightImg04Container">
                  <a className="PickUpRightImg04"></a>
                  {screenWidth > 465 ? (
                    <div className="PickUpRightImg04_Text01">
                      MAXONE × ONEDAYS
                    </div>
                  ) : (
                    <div className="PickUpRightImg04_Text01">
                      MAXONE ×
                      <br />
                      ONEDAYS
                    </div>
                  )}
                  <a className="PickUpRightImg04_Text02">VIEW MORE</a>
                </a>
              </React.Fragment>
            ) : (
              ""
            )}
            {screenWidth > 770 ? (
              <a className="PickUpRightImg05">
                <div className="PickUpRightImg05_Text01">
                  AIR WItem AIR WItem
                </div>
                <a className="PickUpRightImg05_Text02">VIEW MORE</a>
              </a>
            ) : (
              ""
            )}
            {screenWidth < 770 ? (
              <React.Fragment>
                <a className="PickUpRightImg05Container">
                  <a className="PickUpRightImg05"></a>
                  {screenWidth > 465 ? (
                    <div className="PickUpRightImg05_Text01">
                      AIR WItem AIR WItem
                    </div>
                  ) : (
                    <div className="PickUpRightImg05_Text01">
                      AIR WItem
                      <br />
                      AIR WItem
                    </div>
                  )}
                  <a className="PickUpRightImg05_Text02">VIEW MORE</a>
                </a>
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <button className="PickUpButton">VIEW MORE</button>
    </div>
  );
};

export default PickUp;
