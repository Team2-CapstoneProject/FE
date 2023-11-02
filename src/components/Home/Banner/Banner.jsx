import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-wrapper">
      <div className="padding innerWidth flexCenter banner-container">
        {/* Left Side */}
        <div className="flexColStart banner-left">
          <div className="banner-cat">
            <img src="./home.png" alt="" />
            <h3>Villa Agency</h3>
          </div>
          <div className="banner-title">
            <img src="./acc1.png" alt="" />
            <h1>
              Find the perfect <br />
              place to stay with <br /> your family
            </h1>
          </div>

          <div className="banner-desc">
            <p>
              Distinctively re-engineer revolutionary meta-services and premium
              <br /> architectures. Intrinsically incubate.
            </p>
          </div>
          <button className="button">
            <h2>Explore Places</h2>
            <img src="./arrow-right.png" alt="" />
          </button>
        </div>

        {/* Right Side */}
        <div className="banner-right">
          <div className="banner-bg">
            <img src="./acc2.png" alt="" />
          </div>
          <div className="image-container">
            <img src="./banner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
