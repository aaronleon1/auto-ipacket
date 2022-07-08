import React from "react";
import CompanyIcon from "./CompanyIcon";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-main">
          <div className="hero-text">
            <h1>The Next Generation has Arrived</h1>
            <span>
              STARtUp connects you with the latest stars, all in search of a
              partner to get their ideas off the ground.
            </span>
          </div>
          <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero graphic" />
          </div>
        </div>
        <div className="hero-companies">
          <span>
            We've introduced thousands of startups to the largest players
          </span>
          <div>
            <CompanyIcon image="/images/amazon-logo.png" />
            <CompanyIcon image="/images/apple-logo.png" />
            <CompanyIcon image="/images/google-logo.png" />
            <CompanyIcon image="/images/microsoft-logo.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
