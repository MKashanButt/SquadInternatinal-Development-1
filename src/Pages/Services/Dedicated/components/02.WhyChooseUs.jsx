import React from "react";
import SectionStyles from "../../../../assets/css/Services.module.css";

const WhyChooseUs = () => {
  return (
    <section class={SectionStyles.whyChooseUs}>
      <div class={SectionStyles.left}>
        <div class={SectionStyles.imgBorderTop}></div>
        <div class={SectionStyles.imgBorderBottom}></div>
        <img src='https://api.squadinternational.net/api/images/whyChooseUs.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" data-aos="fade-in" data-aos-duration="2000" />
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
          At our core, we recognize that each customer is unique, as are their
          demands. That is why we take pleasure in providing bespoke solutions
          that are particularly designed for you. We guarantee that our services
          are in sync with your company objectives by paying close attention to
          detail and committing to understanding them.
        </p>
        <p data-aos="fade-left" data-aos-duration="1000">
          We stand out in the business because of our customer-centric strategy,
          which prioritizes your pleasure above all else. We collaborate with
          you throughout the whole process, from the initial consultation to the
          final execution. Trust us to provide personalized solutions that solve
          your difficulties and move your success further.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
