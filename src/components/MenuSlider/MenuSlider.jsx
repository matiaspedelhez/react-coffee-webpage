import React, { useRef, useEffect, useState } from "react";
import motion from "framer-motion";
import "./MenuSlider.scss";
import coffee_items from "../../coffee_items";
import MenuSliderCard from "../MenuSliderCard/MenuSliderCard";

function MenuSlider() {
  return (
    <div className="MenuSlider">
      {coffee_items.map((item) => {
        return (
          <MenuSliderCard
            card_name={item.card_name}
            card_description={item.card_description}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default MenuSlider;
