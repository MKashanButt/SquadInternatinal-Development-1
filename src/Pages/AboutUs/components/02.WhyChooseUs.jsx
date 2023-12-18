import React from "react";
import sectionStyles from "../../../assets/css/About.module.css";

const WhyChooseUs = () => {
  return (
    <section className={sectionStyles.whyChooseUs}>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        Why Choose Us?
      </h1>
      <p data-aos="fade-in" data-aos-duration="1000">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae
        ut aperiam repellat illum maxime fuga, quasi reprehenderit sequi totam
        voluptas laborum quibusdam ex harum minus rem deleniti voluptatum
        eligendi commodi sit. Inventore culpa quam tempore nisi ipsam. Alias,
        nulla at ipsam ut pariatur molestias asperiores facilis error aspernatur
        fugit!
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            consequatur facere sunt? Pariatur iure nemo ullam id minima. Aperiam
            dolores eius error enim, adipisci nulla officia aspernatur ducimus
            eveniet. In, recusandae? Rem.
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            consequatur facere sunt? Pariatur iure nemo ullam id minima. Aperiam
            dolores eius error enim, adipisci nulla officia aspernatur ducimus
            eveniet. In, recusandae? Rem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
