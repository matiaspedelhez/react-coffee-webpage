import React from "react";
import "./MainContent.scss";

const arrow_button = require("./assets/button-arrow.svg").default;
const coffee_desktop = require("./assets/coffee-desktop.svg").default;

function MainContent() {
  return (
    <section className="MainContent">
      <div className="side-order">
        <div className="title">
          <p>Drink coffee, enjoy with Samwayle</p>
          <h1>Coffee Shop</h1>
        </div>
        <div className="order-here-button">
          <p>Order Here</p>
          <img src={arrow_button} alt="arrow" />
        </div>
      </div>
      <img className="coffee-aside-image" src={coffee_desktop} alt="coffee" />
    </section>
  );
}

export default MainContent;
