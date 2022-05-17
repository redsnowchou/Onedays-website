import React, { useState, useEffect } from "react";
import line from "./resource/line.svg";
import calendar from "./resource/calendar.svg";
import frequency from "./resource/frequency.svg";

import "./index.css";

const Publicity = () => {
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
    <div>
      {screenWidth > 1024 ? (
        <div className="PublicityContainer">
          <a href="#" className="lineContainer">
            <div className="lineBg">
              <img src={line} alt="" />
              <div className="lineText">
                使用手機或是電腦，
                <br />
                網路預約就這麼簡單 !
              </div>
            </div>
          </a>
          <a className="calendarContainer" href="#">
            <div className="calendarBg">
              <div className="calendarLeft">
                <div className="calendarText_01">線上預約超簡單!當日也OK</div>
                <div className="calendarText_02_Container">
                  <div className="calendarText_02">視力檢查預約</div>
                  <img className="calendar" src={calendar} alt="" />
                </div>
                <div className="calendarButton_Container">
                  <div className="calendarButton_01">無需等待</div>
                  <div className="calendarButton_02">不用排隊</div>
                </div>
              </div>
            </div>
          </a>
          <a className="frequencyContainer" href="#">
            <div className="frequencyBg">
              <img className="frequency" src={frequency} alt="" />
              <div className="frequencyText">
                不知道度數
                <br />
                也沒有關係
              </div>
            </div>
          </a>
        </div>
      ) : (
        <div className="PublicityContainer">
          <a href="#" className="lineContainer">
            <div className="lineBg">
              <img src={line} alt="" />
              <div className="lineText">
                使用手機或是電腦，
                <br />
                網路預約就這麼簡單 !
              </div>
            </div>
          </a>
          <div className="BothContainer">
            <a className="calendarContainer" href="#">
              <div className="calendarBg">
                <div className="calendarLeft">
                  <div className="calendarText_01">線上預約超簡單!當日也OK</div>
                  <div className="calendarText_02_Container">
                    <div className="calendarText_02">視力檢查預約</div>
                    <img className="calendar" src={calendar} alt="" />
                  </div>
                  <div className="calendarButton_Container">
                    <div className="calendarButton_01">無需等待</div>
                    <div className="calendarButton_02">不用排隊</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="frequencyContainer" href="#">
              <div className="frequencyBg">
                <img className="frequency" src={frequency} alt="" />
                <div className="frequencyText">
                  不知道度數
                  <br />
                  也沒有關係
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publicity;
