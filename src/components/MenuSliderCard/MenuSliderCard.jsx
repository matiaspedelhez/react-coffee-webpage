import React from "react";
import "./MenuSliderCard.scss";

function MenuSliderCard({ card_name, card_description }) {
  return (
    <div className="MenuSliderCard">
      <h2 className="menu-card-title">{card_name}</h2>
      <p className="menu-card-description">{card_description}</p>
      <p className="menu-card-button">Order Now</p>
    </div>
  );
}

export default MenuSliderCard;
