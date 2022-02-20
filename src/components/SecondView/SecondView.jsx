import React from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import "./SecondView.scss";

const coffee_mug = require("./assets/coffee-mug.png");
const coffee_vessel = require("./assets/coffee-vessel.png");
//{ title, firstparr, secdparr, color, image }

function SecondView() {
  return (
    <section className="SecondView">
      <DescriptionCard
        title={"Coffee Shop Samwayle"}
        firstparr={
          "Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand of the buyer. But this is exactly the moment when a connection arises between us and our guests. "
        }
        secdparr={
          "And we strive to do our best to maintain this connection - starting with our commitment to selecting the highest quality coffee in the world and ending with how we interact with guests and organizations to fulfill our obligations."
        }
        image={coffee_mug}
      />
      <DescriptionCard
        title={"Сoffee of the day"}
        firstparr={
          "Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed. Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system."
        }
        secdparr={""}
        color={"#E3EBE7"}
        image={coffee_vessel}
      />
    </section>
  );
}

export default SecondView;
