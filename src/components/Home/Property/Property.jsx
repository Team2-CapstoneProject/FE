import React from "react";
import "./Property.css";
import Card from "../Card";

const Property = () => {
  return (
    <section className="property-wrapper">
      <div className="paddings innerWidth property-container">
        <div className="property-title">
          <h3>
            <span>02</span> | Featured properties
          </h3>
          <h1>
            Villa for rent in your
            <br /> favorite area
          </h1>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Property;
