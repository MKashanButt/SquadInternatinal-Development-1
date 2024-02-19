import React from "react";
import sectionStyles from "../../../assets/css/About.module.css";
import img from "../../../assets/images/about-hero.webp";

const Hero = () => {
  return (
    <section
      className={sectionStyles.hero}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={sectionStyles.left}>
        <h4>Crafting a Vision</h4>
        <h1>
          <span>Building</span> a Legacy
        </h1>
        <p>
          We are fundamentally motivated by a single goal: to leave a legacy of
          greatness. Since its foundation, we have relentlessly sought
          innovation, honesty, and an unshakable dedication to our clients and
          communities. With a foundation of trust and a constant pursuit of
          quality, we seek to make a lasting impression in all we do. Join us on
          our adventure as we change the future and create a legacy that will
          last generations.
        </p>
      </div>
      <div className={sectionStyles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
