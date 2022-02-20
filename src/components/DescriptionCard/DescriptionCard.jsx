import React from "react";
import "./DescriptionCard.scss";

function DescriptionCard({ title, firstparr, secdparr, color, image }) {
  return (
    <section className="DescriptionCard">
      <div className="image-card" style={{ backgroundColor: color }}>
        {" "}
        {/* Defaults to #FAE9E0*/}
        <img className="image-coffee" src={image} alt="coffee_mug" />
      </div>
      <div className="text-description">
        <h3>{title}</h3>
        <p>{firstparr}</p>
        <p>{secdparr}</p>
      </div>
    </section>
  );
}

export default DescriptionCard;
