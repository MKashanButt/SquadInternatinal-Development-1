import React from "react";
import careersStyles from "../../../assets/css/HomeTwo.module.css";

const Careers = () => {
  return (
    <section class={careersStyles.careers}>
      <div className={careersStyles.image}>
        <img src="https://www.salsoft.net/assets/images/career.jpg" alt="" />
      </div>
      <div className={careersStyles.content}>
        <h2>Careers At Squad</h2>
        <p>Get yourself an exposure that is rewarding and fulfilling, offering a career trajectory that ends only at the top! Explore opportunities that fuel your passion and drive success. Elevate your career with purpose at Squad International.</p>
        <a href="/about-us#whychooseus"><button>Learn More</button></a>
      </div>
    </section>
  );
};

export default Careers;
