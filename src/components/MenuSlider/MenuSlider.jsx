import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MenuSlider.scss";
import coffee_items from "../../coffee_items";
import MenuSliderCard from "../MenuSliderCard/MenuSliderCard";

function MenuSlider() {
  const innerCarouselRef = useRef(null);
  const [innerCarouselWidth, setInnerCarouselWidth] = useState(0);

  useEffect(() => {
    handleInnerCarouselWidth();
    function handleInnerCarouselWidth() {
      setInnerCarouselWidth(
        innerCarouselRef.current.offsetWidth -
          innerCarouselRef.current.scrollWidth
      );
    }

    window.addEventListener("resize", handleInnerCarouselWidth);

    return (_) => {
      window.removeEventListener("resize", handleInnerCarouselWidth);
    };
  }, []);

  return (
    <div className="MenuSlider">
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          ref={innerCarouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: innerCarouselWidth }}
          className="inner-carousel"
        >
          {coffee_items.map((item) => {
            return (
              <MenuSliderCard
                card_name={item.card_name}
                card_description={item.card_description}
                key={item.id}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MenuSlider;
