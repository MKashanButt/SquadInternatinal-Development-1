import React from "react";
import sectionStyles from "../../../assets/css/Services.module.css";

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
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <dotlottie-player
            src="https://lottie.host/ca0355d6-9045-4e35-8a56-86c442bed3c9/HnJaOpn5Gg.json"
            background="##FFFFFF"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
            class={sectionStyles.lottiePlayer}
          ></dotlottie-player>
          <h2>Design & Development</h2>
          <p>
            Supporting Your Product Improvement and Configuration Interaction:
            By using our broad examination and detailing capacities, we offer
            invaluable bits of knowledge. We screen execution measures, inspect
            drifts, and give valuable data to assist you with pursuing all
            around informed choices and boost the profit from speculation of
            your arrangement.
          </p>
          <a href="/services/design-and-development">
            <button>Learn More</button>
          </a>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <dotlottie-player
            src="https://lottie.host/790cbdc8-0dd5-4474-a914-94516a70efce/Thwk2taJqz.lottie"
            background="transparent"
            speed="1"
            class={sectionStyles.lottiePlayer}
            loop
            autoplay
          ></dotlottie-player>
          <h2>Marketing</h2>
          <p>
            Enhancing your marketing strategy and customer engagement: By
            leveraging our advanced analytics and insights, we create impactful
            campaigns. We track key performance metrics, analyze trends, and
            deliver valuable data to help you make informed decisions and
            maximize your return on investment.
          </p>
          <a href="/services/marketing">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
