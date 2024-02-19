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
          Embrace the future with our groundbreaking approach to innovation. We
          use cutting-edge technology and forward-thinking techniques to
          redefine industry norms and push enterprises to unparalleled success.
          Join us in transforming how industries operate and prosper in an
          ever-changing environment.
        </p>
      </div>
      <div className={sectionStyles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
