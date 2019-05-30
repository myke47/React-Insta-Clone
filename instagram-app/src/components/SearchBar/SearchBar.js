import React from "react";
// import { FaInstagram } from 'react-icons/fa';
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar-container">
        <div className="brand">
          <btn className="brand-logo" href="#" />
          <span
            class="glyphsSpriteApp_instagram__outline__24__grey_9 u-__7"
            aria-label="Instagram"
          />
          <input className="search-input" type="text" placeholder="...Search" />
          <nav className="right-nav">
            <btn className="explore">1</btn>
            <btn className="navbtn2">2</btn>
            <btn className="navbtn3">3</btn>
          </nav>
        </div>
      </div>
    );
  }
}

export default SearchBar;
