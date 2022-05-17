import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./index.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const Banner = () => {
  return (
    <Carousel afterChange={onChange} effect="fade">
      <a href="#" className="BannerImg01"></a>
      <a href="#" className="BannerImg02"></a>
      <a href="#" className="BannerImg03"></a>
      <a href="#" className="BannerImg04"></a>
    </Carousel>
  );
};

export default Banner;
