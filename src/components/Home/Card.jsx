import React from "react";
import "./Card.css";

const card = () => {
  return (
    <div className="flexColStart paddings innerWidth wrapper">
      <div className="image-container">
        <img src="./content.png" alt="" />
      </div>
      <div className="content">
        <h2>Rp 2.500.000/night</h2>
        <h4>Seminyak VIlla</h4>
        <p>
          <img src="./location.png" alt="" />
          Seminyak Bali, Indonesia
        </p>
      </div>
      <div className="item-content">
        <p>
          <img src="./Icon_bed.png" alt="" /> 3 Beds
        </p>
        <p>
          <img src="./Icon_bath.png" alt="" /> 2 Baths
        </p>
        <p>
          <img src="./Icon_car.png" alt="" /> 1 Parking
        </p>
        <p>
          <img src="./Icon_square.png" alt="" /> 120 sqft
        </p>
      </div>
    </div>
  );
};

export default card;
