import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, Tabs, Drawer, Radio, Space } from "antd";
import logo from "../Nav/resource/onedays.png";
import cart from "./resource/cart.svg";
import menu from "./resource/menu.svg";
import contact_lenses_LImg from "./resource/contact_lenses_LImg.jpg";
import contact_lenses_RImg from "./resource/contact_lenses_RImg.jpg";
import lens_LImg from "./resource/lens_LImg.jpg";
import about_Img01 from "./resource/about_Img01.jpg";
import about_Img02 from "./resource/about_Img02.jpg";
import about_Img03 from "./resource/about_Img03.jpg";
import about_Img04 from "./resource/about_Img04.jpg";
import about_Img05 from "./resource/about_Img05.jpg";
import search_Img01 from "./resource/search_Img01.jpg";
import search_Img02 from "./resource/search_Img02.jpg";
import search_Img03 from "./resource/search_Img03.jpg";
import search_Img04 from "./resource/search_Img04.jpg";
import Icon_stores from "../Icon/Icon_stores";
import Icon_eyeglasses from "../Icon/Icon_eyeglasses";
import Icon_sunglasses from "../Icon/Icon_sunglasses";
import Icon_gm from "../Icon/Icon_gm";
import Icon_contactLenses from "../Icon/Icon_contactLenses";
import Icon_allproduct from "../Icon/Icon_allproduct";
import Icon_searchBrands from "../Icon/Icon_searchBrands";
import Icon_myFavourite from "../Icon/Icon_myFavourite";
import Icon_virtual from "../Icon/Icon_virtual";
import Icon_about from "../Icon/Icon_about";
import Icon_peace from "../Icon/Icon_peace";
import Icon_aboutONEDAYS from "../Icon/Icon_aboutOnedays";
import Icon_EYE_CAMP from "../Icon/Icon_EYE_CAMP";
import fb from "./resource/fb.svg";
import ig from "./resource/ig.svg";
import line from "./resource/line.svg";
import yt from "./resource/yt.svg";
import { Link } from "react-router-dom";
import "./index.css";
import Panel from "components/Panel";
import UserProfile from "components/UserProfile";
import { useNavigate } from "react-router-dom";

// submenu keys of first level
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
const Nav = (props) => {
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

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const Icon_storesArrow = <div className="Icon_storesArrow"></div>;
  const mobileNavIcon = (
    <div className="mobileNavIconContainer">
      <div className="mobileNavIconText">
        ONEDAYS
        <br />
        MEMBERSHIP
      </div>
    </div>
  );

  const navigate = useNavigate();
  const toProfile = () => {
    Panel.open({
      component: UserProfile,
      props: {
        user: props.user,
      },
      callback: (data) => {
        if (data === "logout") {
          navigate(0);
        }
      },
    });
  };

  return (
    <React.Fragment>
      {screenWidth > 1150 ? (
        <header>
          <div className="NavLeft">
            <div className="NavLogo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="mega_menu">
              <ul>
                <li>
                  <a href="#">搜尋眼鏡</a>
                  <div className="sub_menu">
                    <div className="searchContainer">
                      <div className="Left_search">
                        <img
                          className="search_LImg"
                          src={search_Img01}
                          alt=""
                        />
                        <a className="search_LText01" href="#">
                          ▶眼鏡 TOP
                        </a>
                        <a className="search_LText02" href="#">
                          ▶所有眼鏡
                        </a>
                      </div>
                      <div className="Center_search">
                        <div className="Center_search_R">
                          <a className="Center_search_R02" href="#">
                            <img src={search_Img02} alt="" />
                            <div className="Center_search_Box">MEN</div>
                          </a>
                          <a className="Center_search_R03" href="#">
                            <img src={search_Img03} alt="" />
                            <div className="Center_search_Box">WOMEN</div>
                          </a>
                          <a className="Center_search_R04" href="#">
                            <img src={search_Img04} alt="" />
                            <div className="Center_search_Box">KIDS</div>
                          </a>
                        </div>
                      </div>
                      <div className="search_Line01"></div>
                      <div className="Right_search">
                        <div className="Right_search_Text01">機能/特徵</div>
                        <a className="Right_search_Text02" href="#">
                          輕量不易損壞的眼鏡
                        </a>
                        <a className="Right_search_Text02" href="#">
                          2WAY眼鏡也是太陽眼鏡
                        </a>
                      </div>
                      <div className="search_Line02"></div>
                      <div className="Right_search">
                        <div className="Right_search_Text01">相關說明</div>
                        <a className="Right_search_Text02" href="#">
                          不知道度數也沒有關係
                        </a>
                        <a className="Right_search_Text02" href="#">
                          關於鏡片
                        </a>
                        <a className="Right_search_Text02" href="#">
                          鏡片更換
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">隱形眼鏡</a>
                  <div className="sub_menu">
                    <div className="contact_lenses_Container">
                      <div className="Left_contact_lenses">
                        <a href="#">
                          <img
                            className="contact_lenses_LImg"
                            src={contact_lenses_LImg}
                            alt=""
                          />
                        </a>
                        <a className="contact_lenses_LText" href="#">
                          ▶透明日拋隱形眼鏡
                        </a>
                      </div>
                      <div className="Right_contact_lenses">
                        <a href="#">
                          <img
                            className="contact_lenses_RImg"
                            src={contact_lenses_RImg}
                            alt=""
                          />
                        </a>
                        <a className="contact_lenses_RText" href="#">
                          ▶彩色日拋隱形眼鏡
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">品牌</a>
                </li>
                <li>
                  <a href="#">鏡片</a>
                  <div className="sub_menu">
                    <div className="lensContainer">
                      <div className="Left_lens">
                        <img className="lens_LImg" src={lens_LImg} alt="" />
                        <a className="lens_LText01" href="#">
                          ▶關於鏡片
                        </a>
                        <a className="lens_LText02" href="#">
                          ▶鏡片更換
                        </a>
                      </div>
                      <div className="Right_lens">
                        <div className="lens_RText01">ONEDAYS鏡片</div>
                        <div className="lens_RText02">
                          ONEDAYS除了提供無需追加費用的薄型非球面鏡片，也提供多樣特製鏡片種類。
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">關於ONEDAYS</a>
                  <div className="sub_menu">
                    <div className="aboutContainer">
                      <div className="Left_about">
                        <img className="about_LImg" src={about_Img01} alt="" />
                        <a className="about_LText" href="#">
                          ▶ONEDAYS服務一覽
                        </a>
                      </div>
                      <div className="Center_about">
                        <div className="Center_about_R">
                          <a className="Center_about_R02" href="#">
                            <img src={about_Img02} alt="" />
                            <div className="Center_about_Box">
                              ONEDAYS MEMBERSHIP
                            </div>
                          </a>
                          <a className="Center_about_R03" href="#">
                            <img src={about_Img03} alt="" />
                            <div className="Center_about_Box">
                              ONEDAYS安心保證
                            </div>
                          </a>
                          <a className="Center_about_R04" href="#">
                            <img src={about_Img04} alt="" />
                            <div className="Center_about_Box">關於網路購物</div>
                          </a>
                        </div>
                        <div className="Center_about_L">
                          <a className="Center_about_L01" href="#">
                            <img
                              className="Center_about_LImg"
                              src={about_Img05}
                              alt=""
                            />
                            <div className="Center_about_Box">
                              ONEDAYS EYE CAMP
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="about_Line"></div>
                      <div className="Right_about">
                        <div className="Right_about_Text01">相關說明</div>
                        <a className="Right_about_Text02" href="#">
                          公司簡介
                        </a>
                        <a className="Right_about_Text02" href="#">
                          招募資訊
                        </a>
                        <a className="Right_about_Text02" href="#">
                          常見問題
                        </a>
                        <a className="Right_about_Text02" href="#">
                          聯絡我們
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">門市查詢</a>
                </li>
              </ul>
            </div>
            <div className="NavRight">
              <React.Fragment>
                <Link to="/login" className="login">
                  Login
                </Link>
                <Link to="/register" className="login">
                  Register
                </Link>
              </React.Fragment>
            </div>
            <div className="cart">
              <a href="/cart">
                <img src={cart} alt="cart" />
              </a>
            </div>
          </div>
        </header>
      ) : (
        <div className="mobileNavContainer">
          <div className="mobileNavLeft">
            <React.Fragment>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="register">
                Register
              </Link>
            </React.Fragment>
          </div>
          <div className="mobile_NavLogo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="mobileNavRight">
            <div className="cart">
              <a href="/cart">
                <img src={cart} alt="cart" />
              </a>
            </div>
            <div className="mobile_menu" onClick={showDrawer}>
              <a href="#">
                <img src={menu} alt="menu" />
              </a>
            </div>
            <Drawer
              title={mobileNavIcon}
              closable={false}
              placement="right"
              onClose={onClose}
              visible={visible}
              width="75vw"
              extra=""
            >
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
              >
                <div className="NavLine"></div>
                <SubMenu
                  key="sub1"
                  icon={<Icon_stores />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <SubMenu key="sub2" icon={<Icon_eyeglasses />}>
                  <Menu.Item>眼鏡 TOP</Menu.Item>
                  <Menu.Item>MEN</Menu.Item>
                  <Menu.Item>WOMEN</Menu.Item>
                  <Menu.Item>KIDS</Menu.Item>
                  <Menu.Item>所有眼鏡</Menu.Item>
                  <Menu.Item className="submenuNone"></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<Icon_sunglasses />}>
                  <Menu.Item>太陽眼鏡 TOP</Menu.Item>
                  <Menu.Item>MEN</Menu.Item>
                  <Menu.Item>WOMEN</Menu.Item>
                  <Menu.Item>KIDS</Menu.Item>
                  <Menu.Item>所有太陽眼鏡</Menu.Item>
                  <Menu.Item className="submenuNone"></Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<Icon_gm />}>
                  <Menu.Item>眼鏡盒</Menu.Item>
                  <Menu.Item>清潔/防霧</Menu.Item>
                  <Menu.Item>眼鏡擦拭布</Menu.Item>
                  <Menu.Item>其他配件</Menu.Item>
                  <Menu.Item>所有配件</Menu.Item>
                  <Menu.Item className="submenuNone"></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  icon={<Icon_contactLenses />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <div className="NavLine02"></div>
                <SubMenu
                  key="sub6"
                  icon={<Icon_searchBrands />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <SubMenu
                  key="sub7"
                  icon={<Icon_allproduct />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <div className="NavLine02"></div>
                <SubMenu
                  key="sub8"
                  icon={<Icon_myFavourite />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <SubMenu
                  key="sub9"
                  icon={<Icon_virtual />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <div className="NavLine02"></div>
                <SubMenu
                  key="sub10"
                  icon={<Icon_about />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>
                <SubMenu
                  key="sub11"
                  icon={<Icon_peace />}
                  expandIcon={Icon_storesArrow}
                ></SubMenu>

                <div className="NavLine02"></div>
                <SubMenu key="sub12" icon={<Icon_aboutONEDAYS />}>
                  <Menu.Item>服務一覽</Menu.Item>
                  <Menu.Item>鏡片更換</Menu.Item>
                  <Menu.Item>ONEDAYS MEMBERSHIP</Menu.Item>
                  <Menu.Item>公司簡介</Menu.Item>
                  <Menu.Item>招募資訊</Menu.Item>
                  <Menu.Item className="submenuNone"></Menu.Item>
                </SubMenu>
                <SubMenu key="sub13" icon={<Icon_EYE_CAMP />}>
                  <Menu.Item>EYE CAMP</Menu.Item>
                  <Menu.Item className="submenuNone"></Menu.Item>
                </SubMenu>
                <div className="NavLine02"></div>
                <div className="phone_InformationContainer">
                  <div className="phone_Information_01">電話諮詢專線</div>
                  <div className="phone_Information_02">0800-000-000</div>
                  <div className="phone_Information_03">
                    服務時間11:00 - 22:00
                  </div>
                </div>
                <div className="Logo_InformationContainer">
                  <img className="Logo_Information_fb" src={fb}></img>
                  <img className="Logo_Information_ig" src={ig}></img>
                  <img className="Logo_Information_line" src={line}></img>
                  <img className="Logo_Information_yt" src={yt}></img>
                </div>
                <div className="InformationText">
                  會員隱私權規範 會員服務使用規範
                </div>
              </Menu>
            </Drawer>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Nav;
