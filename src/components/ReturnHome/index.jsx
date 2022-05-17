import React, { Component } from "react";
import ReturnHome from "./resource/ReturnHome.png";
import { Anchor } from "antd";
import "./index.css";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      // 控制跳上跳下
      show: false,
      scrollPos: 0,
      // 控制解析度
      width: 0,
      height: 0,
    };
    // 控制解析度
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    // 控制跳上跳下
    window.addEventListener("scroll", this.handleScroll);
    // 控制解析度
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    // 控制跳上跳下
    window.removeEventListener("scroll", this.handleScroll);
    // 控制解析度
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  // 控制跳上跳下
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  // 控制解析度
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { Link } = Anchor;
    const BackHome = (
      <img className="ReturnHome" src={ReturnHome} alt="ReturnHome" />
    );
    return (
      <div>
        {window.scrollY > 400 ? (
          this.state.width < 415 ? (
            <div className={this.state.show ? "ReturnHome2" : "ReturnHome"}>
              <Anchor affix={false}>
                <Link title={BackHome} href="#Banner"></Link>
              </Anchor>
            </div>
          ) : (
            <div className="ReturnHome">
              <Anchor affix={false}>
                <Link title={BackHome} href="#Banner"></Link>
              </Anchor>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}
