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
          Dive into captivating narratives and glean expert insights on our
          blogs page. Explore a diverse array of topics, from industry trends to
          practical tips, curated to enrich your knowledge and inspire growth.
        </p>
      </div>
      <div className={sectionStyles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
