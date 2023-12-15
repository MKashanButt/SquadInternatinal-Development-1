import React from "react";
import sectionStyles from "../../../assets/css/Blog.module.css";
import img from "../../../assets/images/blog-hero.webp";

const Hero = () => {
  return (
    <section
      className={sectionStyles.hero}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={sectionStyles.left}>
        <h4>Captivating Stories and</h4>
        <h1>
          <span>Expert</span> Insights
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eveniet, aliquam omnis facilis rerum perspiciatis, asperiores
          molestiae eum dolore veritatis quaerat voluptates fugiat officiis aut
          assumenda quas odit. Id, veritatis.
        </p>
      </div>
      <div className={sectionStyles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
