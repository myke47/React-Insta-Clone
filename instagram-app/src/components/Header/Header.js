import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="brand">
          <btn className="brand-logo" href="#" />
          <input type="text" placeholder="...Search"></input>
        </div>
      </div>
    );
  }
}

export default Header;
