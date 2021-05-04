import React, { Component } from "react";
import "./Header.css";
import logo from "../../logo.svg";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <img src={logo} className="Logo" alt="Logo"></img>
        </div>
      </div>
    );
  }
}
export default Header;
