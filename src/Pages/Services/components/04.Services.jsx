import React from "react";
import sectionStyles from "../../../assets/css/Services.module.css";
import img from "../../../assets/images/service.webp";

const Services = () => {
  return (
    <section
      class={sectionStyles.services}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h4>Services</h4>
      <h1>
        Discover the Power of <br />
        <span>Dynamic</span> Solutions
      </h1>
      <div class={sectionStyles.stage}>
        <div className={sectionStyles.circle}></div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <h2>Outbound Calls</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias saepe architecto repellendus, reprehenderit unde
            reiciendis repudiandae eaque dignissimos at blanditiis? Quam
            corrupti expedita corporis, libero accusantium eaque tempore harum
            explicabo aspernatur?
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <h2>Customer Service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias saepe architecto repellendus, reprehenderit unde
            reiciendis repudiandae eaque dignissimos at blanditiis? Quam
            corrupti expedita corporis, libero accusantium eaque tempore harum
            explicabo aspernatur?
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <h2>Chat Support</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias saepe architecto repellendus, reprehenderit unde
            reiciendis repudiandae eaque dignissimos at blanditiis? Quam
            corrupti expedita corporis, libero accusantium eaque tempore harum
            explicabo aspernatur?
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <h2>Email Outreach</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias saepe architecto repellendus, reprehenderit unde
            reiciendis repudiandae eaque dignissimos at blanditiis? Quam
            corrupti expedita corporis, libero accusantium eaque tempore harum
            explicabo aspernatur?
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <h2>Email Support</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias saepe architecto repellendus, reprehenderit unde
            reiciendis repudiandae eaque dignissimos at blanditiis? Quam
            corrupti expedita corporis, libero accusantium eaque tempore harum
            explicabo aspernatur?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
