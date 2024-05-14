import React from "react";
import HeroStyles from "../../../../../assets/css/sub/DesignDevelopment.module.css";

const Hero = () => {
  return (
    <section
      class={HeroStyles.hero}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class={HeroStyles.left}>
        <h4>Innovative</h4>
        <h1>
          <span>Design And Development</span> Services
        </h1>
        <p>
          Explore our cutting-edge services, designed to satisfy the needs of a
          continuously changing landscape. From pioneering technology to
          forward-thinking tactics, we provide creative solutions to help you
          navigate today's changing environment with confidence. Learn how our
          experience can help your business survive in an ever-changing climate.
        </p>
      </div>
      <div class={HeroStyles.right}>
        <div class={HeroStyles.circle}></div>
        <img src='https://api.squadinternational.net/api/images/services-hero.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
      </div>
    </section>
  );
};

export default Hero;
