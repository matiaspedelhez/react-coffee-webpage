import React, { useState, useEffect } from "react";
import "./Navbar.scss";

const open_menu = require("./assets/menu.png");
const close_menu = require("./assets/menu-close.png");

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    //freeze scroll to the top during sidemenu
    if (showMenu) {
      document.body.style.overflowY = "hidden";
      // document.body.style.position = "fixed";
    } else {
      document.body.style.overflowY = "unset";
      document.body.style.position = "unset";
    }
  }, [showMenu]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="logo-img"
          src={require("./assets/logo.svg").default}
          alt="Logo"
        />
        <h3 className="logo-name">Samwayle</h3>
        <img
          className="menu-button"
          src={showMenu ? close_menu : open_menu}
          alt="Menu"
          onClick={handleShowMenu}
        />
      </div>
      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/">About us</a>
        </li>
        <li className="nav-item">
          <a href="/">Discounts</a>
        </li>
        <li className="nav-item">
          <a href="/">Shop</a>
        </li>
        <li className="nav-item hightlited-button">
          <a href="/">Contact us</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
