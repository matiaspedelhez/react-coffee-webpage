import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MenuSlider.scss";
import coffee_items from "../../coffee_items";
import MenuSliderCard from "../MenuSliderCard/MenuSliderCard";

function MenuSlider() {
  // const [innerCarouselWidth, setInnerCarouselWidth] = useState(0);
  const innerCarouselRef = useRef(null);

  // useEffect(() => {
  //   function handleInnerCarouselWidth() {
  //     setInnerCarouselWidth(
  //       innerCarouselRef.current.offsetWidth -
  //         innerCarouselRef.current.scrollWidth
  //     );
  //   }
  //   window.addEventListener("resize", handleInnerCarouselWidth);
  //   handleInnerCarouselWidth();

  //   return (_) => {
  //     window.removeEventListener("resize", handleInnerCarouselWidth);
  //   };
  // });

  return (
    <div className="MenuSlider">
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          ref={innerCarouselRef}
          drag="x"
          dragConstraints={innerCarouselRef}
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
