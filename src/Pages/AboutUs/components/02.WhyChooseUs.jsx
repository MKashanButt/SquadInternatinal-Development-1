import React from "react";
import sectionStyles from "../../../assets/css/About.module.css";

const WhyChooseUs = () => {
  return (
    <section className={sectionStyles.whyChooseUs} id="whychooseus">
      <h1 data-aos="fade-up" data-aos-duration="1000">
        Why Choose Us?
      </h1>
      <p data-aos="fade-in" data-aos-duration="1000">
        At our core, we value your success over all else. With an unwavering
        commitment to quality and a track record of success, we stand out as
        your reliable partner in reaching your objectives. Our dedication to
        innovation guarantees that we remain ahead of the curve, providing
        cutting-edge solutions adapted to your specific requirements. When you
        pick us, you are choosing a team that is not just enthusiastic about
        what we do, but also profoundly committed to your success. Experience
        the difference of working with a partner that is devoted to exceeding
        your expectations at all times.
      </p>
      <div className={sectionStyles.stage}>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <i class="bx bxs-bullseye"></i>
          <h2>Our Vision</h2>
          <p>
            Our aim is to drive global transformation via continuous innovation
            and unflinching dedication. We imagine a future in which every
            problem is addressed with limitless opportunity, propelling
            development and empowerment globally. With a focus on quality, we
            hope to construct a future in which success has no limitations.
          </p>
        </div>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <i class="bx bx-target-lock"></i>
          <h2>Our Mission</h2>
          <p>
            Our purpose is to help individuals and businesses succeed via
            innovative solutions and unrivaled support. In all we do, we strive
            to promote development, drive positive change, and surpass
            expectations. We hope to be a catalyst for success in an
            ever-changing world by focusing on ethics, teamwork, and customer
            pleasure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
