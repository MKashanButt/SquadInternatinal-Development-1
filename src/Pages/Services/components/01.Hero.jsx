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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repudiandae consectetur sint tenetur obcaecati. Eligendi error et
          voluptate ipsa deserunt, amet sint debitis velit similique
          repudiandae. Cum expedita vitae dignissimos delectus excepturi.
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
