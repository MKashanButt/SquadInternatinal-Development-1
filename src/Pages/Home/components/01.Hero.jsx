import React from "react";
import heroStyles from "../../../assets/css/Home.module.css";
import hero from "../../../assets/images/hero-left.webp";

const Hero = () => {
  return (
    <>
      <section class={heroStyles.hero}>
        <div class={heroStyles.left}>
          <img src={hero} alt="" data-aos="fade-up" data-aos-duration="1000" />
          <div class={heroStyles.circle}></div>
        </div>
        <div class={heroStyles.right}>
          <h3>Your Marketing</h3>
          <h1 class={heroStyles.uppercase}>Companion</h1>
          <p>
            Improve your marketing strategy with our professional B2B Business
            Process Outsourcing (BPO) services. From data management to lead
            creation, we provide customized solutions to help you maximize your
            marketing efforts. Trust us to help you achieve unparalleled success
            and development in today's competitive business world.
          </p>
        </div>
      </section>
      <div class="side-lines">
        <p class="first"></p>
        <p class="second"></p>
        <p class="third"></p>
      </div>
    </>
  );
};

export default Hero;
