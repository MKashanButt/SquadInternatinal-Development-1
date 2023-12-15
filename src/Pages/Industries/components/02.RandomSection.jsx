import React from "react";
import SectionStyles from "../../../assets/css/Industries.module.css";
import img from "../../../assets/images/whyChooseUs.webp";

const RandomSection = () => {
  return (
    <section class={SectionStyles.randomSection}>
      <div class={SectionStyles.left}>
        <div class={SectionStyles.imgBorderTop}></div>
        <div class={SectionStyles.imgBorderBottom}></div>
        <img src={img} alt="" data-aos="fade-in" data-aos-duration="2000" />
      </div>
      <div class={SectionStyles.right}>
        <h3 data-aos="fade-left" data-aos-duration="1000">
          Why choose us?
        </h3>
        <h1 data-aos="fade-left" data-aos-duration="1000">
          Tailored Solutions <br />
          for Your Unique Needs
        </h1>
        <p data-aos="fade-left" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quis suscipit perferendis officia laudantium tempore dolorum eos
          nulla. Sunt laboriosam temporibus similique animi numquam deserunt
          aspernatur, quas quasi itaque dolorem omnis nisi!
        </p>
        <p data-aos="fade-left" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quis suscipit perferendis officia laudantium tempore dolorum eos
          nulla. Sunt laboriosam temporibus similique animi numquam deserunt
          aspernatur, quas quasi itaque dolorem omnis nisi!
        </p>
      </div>
    </section>
  );
};

export default RandomSection;
