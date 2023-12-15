import React from "react";
import ServiceStyle from "../../../assets/css/Home.module.css";
import ServiceBg from "../../../assets/images/service-bg.webp";
import ServiceFront from "../../../assets/images/service-front.webp";

const Services = () => {
  return (
    <section class={ServiceStyle.services}>
      <div class={ServiceStyle.left}>
        <img
          src={ServiceBg}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <img
          src={ServiceFront}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <div class="circle"></div>
      </div>
      <div class={ServiceStyle.right}>
        <h4 data-aos="fade-left" data-aos-duration="1000">
          Services
        </h4>
        <h1 data-aos="fade-left" data-aos-duration="1000" class="uppercase">
          Combining Intelligence <br /> & Expertise
        </h1>
        <p data-aos="fade-left" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt
          nulla vel, vitae tenetur itaque molestiae.
        </p>
        <ul data-aos="fade-left" data-aos-duration="1000">
          <li>Outbound Calls</li>
          <li>Customer Service</li>
          <li>Chat Support</li>
          <li>Email Outreach</li>
          <li>Email Support</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
