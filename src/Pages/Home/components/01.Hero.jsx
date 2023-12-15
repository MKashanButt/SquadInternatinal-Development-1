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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aliquam quo nam error, pariatur sunt laudantium excepturi
            necessitatibus ad quibusdam repudiandae accusamus! Dolorem et beatae
            quo natus earum sint reprehenderit provident assumenda?
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
