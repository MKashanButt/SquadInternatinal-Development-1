import React from "react";
import HeroStyles from "../../../../../assets/css/sub/DesignDevelopment.module.css";

const Hero = () => {
  return (
    <section
      className={HeroStyles.hero}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={HeroStyles.left}>
        <h4>Strategic</h4>
        <h1>
          <span>Marketing</span> Solutions
        </h1>
        <p>
          Elevate your brand with our data-driven marketing strategies tailored
          to today’s dynamic business landscape. From targeted campaigns to
          innovative engagement tactics, we craft solutions that drive results.
          Discover how our expertise can help you expand your reach and maximize
          impact in an ever-evolving market.
        </p>
      </div>
      <div className={HeroStyles.right}>
        <div className={HeroStyles.circle}></div>
        <img
          src="https://api.squadinternational.net/api/images/services-hero.webp?apikey=21b72d701586241ce2004e28d2276882"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
