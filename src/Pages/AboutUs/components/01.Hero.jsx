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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          tempora sint provident dolore mollitia vero hic est doloremque?
          Voluptas, provident saepe doloremque nulla mollitia quae, laboriosam,
          suscipit similique nihil adipisci perferendis itaque.
        </p>
      </div>
      <div className={sectionStyles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
