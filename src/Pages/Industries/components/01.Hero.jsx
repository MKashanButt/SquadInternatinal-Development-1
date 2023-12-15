import React from "react";
import sectionStyles from "../../../assets/css/Industries.module.css";
import img from "../../../assets/images/industries-hero.webp";

const Hero = () => {
  return (
    <section
      className={sectionStyles.hero}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={sectionStyles.left}>
        <h4>Revolutionizing Through</h4>
        <h1 className="uppercase">
          <span>Innovative</span> Solutions
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quam
          harum deleniti quibusdam fugiat. Doloribus quae eum dolorum molestias
          facilis impedit nam voluptatum id, quas quam? Atque a molestiae
          exercitationem nulla obcaecati.
        </p>
      </div>
      <div className={sectionStyles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
