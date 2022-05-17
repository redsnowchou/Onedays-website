import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, Tabs } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "./resource/owndays.svg";
import search from "./resource/search.svg";
import heart from "./resource/heart.svg";
import cart from "./resource/cart.svg";
import eyeglasses from "./resource/eyeglasses.svg";
import sunglasses from "./resource/sunglasses.svg";
import invisibleIMg01 from "./resource/invisibleIMg01.jpg";
import invisibleIMg02 from "./resource/invisibleIMg02.jpg";

import "./index.css";

const InvisibleMenu = () => {
  return (
    <div className="invisibleMenu">
      <div className="invisibleBg">
        <div className="invistriangle"></div>
      </div>
    </div>
  );
};

export default InvisibleMenu;
