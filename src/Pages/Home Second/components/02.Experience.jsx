import React from "react";
import ServiceStyle from "../../../assets/css/HomeTwo.module.css";

const Services = () => {
  return (
    <section class={ServiceStyle.experience}>
      <div className={ServiceStyle.content}>
        <p>We have passion for our craft with two decades of experience and a presence across the globe, our teams work as a cohesive unit to ensure we go above and beyond to deliver to our diverse customer base worldwide.</p>
        <a href="/about-us"><button>Learn More</button></a>
      </div >
    </section>
  );
};

export default Services;
