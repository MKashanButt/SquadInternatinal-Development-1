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
            Our outbound call services allow you to successfully reach your
            target demographic while also offering tailored interactions to
            boost engagement and conversions.
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
            Deliver outstanding client experiences with our dedicated support
            team, which ensures timely resolution of issues and proactive help
            at all touchpoints.
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
            Improve client satisfaction and communication channels with our chat
            support services, which provide real-time assistance and tailored
            solutions.
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
            Our customized email outreach services can help you expand your
            reach and nurture connections by sending captivating content and
            boosting interaction with your target demographic.
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
            With our email support services, we respond to client concerns in a
            prompt and effective manner, providing individualized assistance and
            assuring customer satisfaction with each engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
