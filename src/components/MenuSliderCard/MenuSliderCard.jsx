import React from "react";
import "./MenuSliderCard.scss";
import { motion } from "framer-motion";

function MenuSliderCard({ card_name, card_description }) {
  return (
    <motion.div className="MenuSliderCard">
      <h2 className="menu-card-title">{card_name}</h2>
      <p className="menu-card-description">{card_description}</p>
      <p className="menu-card-button">Order Now</p>
    </motion.div>
  );
}

export default MenuSliderCard;
