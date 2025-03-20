import React from "react";
import ServiceStyle from "../../../../../assets/css/sub/DesignDevelopment.module.css";

const Services = () => {
  return (
    <section className={ServiceStyle.services}>
      <div className={ServiceStyle.left}>
        <img
          src="https://api.squadinternational.net/api/images/service-bg.webp?apikey=21b72d701586241ce2004e28d2276882"
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <img
          src="https://api.squadinternational.net/api/images/service-front.webp?apikey=21b72d701586241ce2004e28d2276882"
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <div className="circle"></div>
      </div>
      <div className={ServiceStyle.right}>
        <h4 data-aos="fade-left" data-aos-duration="1000">
          Services
        </h4>
        <h1 data-aos="fade-left" data-aos-duration="1000" className="uppercase">
          Elevate Your Brand’s Impact
        </h1>
        <p data-aos="fade-left" data-aos-duration="1000">
          We leverage data-driven strategies and creative expertise to deliver
          powerful marketing solutions. Our tailored approach ensures increased
          visibility, engagement, and long-term growth for your brand.
        </p>
        <ul data-aos="fade-left" data-aos-duration="1000">
          <li>Digital Marketing</li>
          <li>SEO & Content Strategy</li>
          <li>Social Media Management</li>
          <li>Brand Positioning</li>
          <li>Performance Advertising</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
