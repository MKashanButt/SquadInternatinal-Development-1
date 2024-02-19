import React from "react";
import HeroStyles from "../../../assets/css/Services.module.css";
import heroImg from "../../../assets/images/services-hero.webp";

const Hero = () => {
  return (
    <section
      class={HeroStyles.hero}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class={HeroStyles.left}>
        <h4>Innovative Solutions for a</h4>
        <h1>
          <span>Dynamic</span> World
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
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
