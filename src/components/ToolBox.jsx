import React, { Component } from "react";
import { Link } from "react-router-dom";

class ToolBox extends Component {
  state = {
    searchText: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchText: value });
    this.props.search(value);
  };

  clearSearchText = () => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };

  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input search-input"
                placeholder="Search Product"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>
                ✕
              </button>
            </div>
          </div>
        </div>
        <Link to="/cart" className="cart-box">
          <i className="fas fa-shopping-chart"></i>
          <span className="cart-num">({this.props.cartNum})</span>
        </Link>
        <div className="cart-box"></div>
      </div>
    );
  }
}

export default ToolBox;
