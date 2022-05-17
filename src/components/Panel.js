/**
 1. 一次渲染，隨需調用
 2. 裝載組件
    (1)、子組件作為參數傳遞並被渲染
    (2)、子組件可以關閉彈出層
    (3)、子組件與調用者可以通訊
 */

import React from "react";
import { render } from "react-dom";

class Panel extends React.Component {
  state = {
    active: false,
    component: null,
    callback: () => {},
  };

  open = (
    //如果沒有傳值時,也必須設定options的初始值
    options = {
      props: {},
      component: null,
      callback: () => {},
    }
  ) => {
    const { props, component, callback } = options;
    //每次open的時候都會有不同的key值,讓AddInventory組件重新渲染
    const _key = new Date().getTime();
    //創建可渲染的組件實例
    const _component = React.createElement(component, {
      //把props作為component組件裡的屬性來傳遞,解構的props必須為對象
      ...props,
      //將close方法傳遞到AddInventory組件裡
      close: this.close,
      //將產生的_key放到AddInventory組件的key屬性裡
      key: _key,
    });
    this.setState({
      active: true,
      component: _component,
      callback: callback,
    });
  };

  close = (data) => {
    this.setState({
      active: false,
    });
    this.state.callback(data);
  };

  render() {
    const _class = {
      true: "panel-wrapper active",
      false: "panel-wrapper",
    };
    return (
      <div className={_class[this.state.active]}>
        <div
          className="over-layer"
          //箭頭函數提交,以不傳遞任何參數
          onClick={() => {
            this.close();
          }}
        ></div>
        <div className="panel">
          <div className="head">
            <span
              className="close"
              //箭頭函數提交,以不傳遞任何參數
              onClick={() => {
                this.close();
              }}
            >
              ×
            </span>
            {this.state.component}
          </div>
        </div>
      </div>
    );
  }
}

const _div = document.createElement("div");
document.body.appendChild(_div);

const _panel = render(<Panel />, _div);
export default _panel; //引用加載後的組件實例對象
