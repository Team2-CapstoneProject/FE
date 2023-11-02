import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro-wrapper">
      <div className="intro-container">
        {/* Left */}
        <div className="item-left">
          <div className="intro-title">
            <h3>
              <span>01</span> | PROPERLAND INTRO
            </h3>
            <h1>
              Rent Villa Property <br />
              In An Easy Way
            </h1>
            <span>
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="intro-right">
          <img src="./intro.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
