import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, Tabs, Drawer, Radio, Space } from "antd";
import Icon_sunglasses from "../Icon/Icon_sunglasses";
import Icon_gm from "../Icon/Icon_gm";
import Icon_contactLenses from "../Icon/Icon_contactLenses";
import Icon_allproduct from "../Icon/Icon_allproduct";
import Icon_searchBrands from "../Icon/Icon_searchBrands";
import Icon_myFavourite from "../Icon/Icon_myFavourite";
import Icon_virtual from "../Icon/Icon_virtual";
import Icon_about from "../Icon/Icon_about";
import Icon_peace from "../Icon/Icon_peace";
import Icon_aboutOnedays from "../Icon/Icon_aboutOnedays";
import Icon_EYE_CAMP from "../Icon/Icon_EYE_CAMP";
import Icon_search from "../Icon/Icon_search";
import Icon_footerabout from "../Icon/Icon_footerabout";
import Icon_footerabout2 from "../Icon/Icon_footerabout2";
import Icon_support from "../Icon/Icon_support";
import fb from "./resource/fb.svg";
import ig from "./resource/ig.svg";
import line from "./resource/line.svg";
import yt from "./resource/yt.svg";
import "./index.css";

const rootSubmenuKeys = [
  "sub1",
  "sub2",
  "sub3",
  "sub4",
  "sub5",
  "sub6",
  "sub7",
  "sub8",
  "sub9",
  "sub10",
  "sub11",
  "sub12",
  "sub13",
];
const Footer = () => {
  const { SubMenu } = Menu;
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

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
  const Icon_storesArrow = <div className="Icon_storesArrow"></div>;

  return (
    <footer>
      {screenWidth > 770 ? (
        <section className="FooterBg">
          <div className="FooterContainer">
            <div className="FooterContent1">
              <div className="FooterContent1_Title">搜尋商品</div>
              <a className="FooterContent1_Text">眼鏡</a>
              <a className="FooterContent1_Text">太陽眼鏡</a>
              <a className="FooterContent1_Text">隱形眼鏡</a>
              <a className="FooterContent1_Text">品牌一覽</a>
              <a className="FooterContent1_Text">搜尋特集</a>
            </div>
            <div className="FooterContent2">
              <div className="FooterContent2_Title">關於購買</div>
              <a className="FooterContent2_Text">關於鏡片</a>
              <a className="FooterContent2_Text">安心保證</a>
            </div>
            <div className="FooterContent3">
              <div className="FooterContent3_Title">關於ONEDAYS</div>
            </div>
            <div className="FooterContent4">
              <div className="FooterContent4_Title">支援服務</div>
              <a className="FooterContent4_Text">聯絡我們</a>
              <a className="FooterContent4_Text">常見問題</a>
              <a className="FooterContent4_Text">建議使用環境</a>
              <a className="FooterContent4_Text">網站地圖</a>
              <br />
              <a className="FooterContent4_Text">初次使用者</a>
              <a className="FooterContent4_Text">註冊為新會員</a>
            </div>
            <div className="FooterContent5">
              <div className="FooterContent5_Title">客戶服務中心聯絡</div>
              <a className="FooterContent5_Text">0800-000-000</a>
            </div>
          </div>
          <div className="Copyright">
            COPYRIGHT (C) ONEDAYS眼鏡股份有限公司 ALL RIGHTS RESERVED.
          </div>
        </section>
      ) : (
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
        >
          <div className="NavLine"></div>
          <SubMenu key="sub1" icon={<Icon_search />}>
            <Menu.Item>眼鏡</Menu.Item>
            <Menu.Item>太陽眼鏡</Menu.Item>
            <Menu.Item>隱形眼鏡</Menu.Item>
            <Menu.Item>品牌一覽</Menu.Item>
            <Menu.Item>搜尋特集</Menu.Item>
            <Menu.Item className="submenuNone"></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<Icon_footerabout />}>
            <Menu.Item>關於鏡片</Menu.Item>
            <Menu.Item>安心保證</Menu.Item>
            <Menu.Item className="submenuNone"></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            icon={<Icon_footerabout2 />}
            expandIcon={Icon_storesArrow}
          ></SubMenu>
          <SubMenu key="sub4" icon={<Icon_support />}>
            <Menu.Item>聯絡我們</Menu.Item>
            <Menu.Item>常見問題</Menu.Item>
            <Menu.Item>建議使用環境</Menu.Item>
            <Menu.Item>網站地圖</Menu.Item>
            <Menu.Item>初次使用者</Menu.Item>
            <Menu.Item>註冊為新會員</Menu.Item>
            <Menu.Item className="submenuNone"></Menu.Item>
          </SubMenu>
          <div className="phone_InformationContainer">
            <div className="phone_Information_01">客戶服務中心聯絡</div>
            <div className="phone_Information_02">0800-000-000</div>
            <div className="phone_Information_03">服務時間11:00 - 22:00</div>
          </div>
          <div className="Logo_InformationContainer">
            <img className="Logo_Information_fb" src={fb}></img>
            <img className="Logo_Information_ig" src={ig}></img>
            <img className="Logo_Information_line" src={line}></img>
            <img className="Logo_Information_yt" src={yt}></img>
          </div>
          <div className="InformationText">
            ONEDAYS眼鏡股份有限公司 ALL RIGHTS RESERVED.
          </div>
          <div className="NavLine02"></div>
        </Menu>
      )}
    </footer>
  );
};

export default Footer;
