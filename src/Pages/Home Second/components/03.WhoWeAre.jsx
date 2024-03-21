import React, { useEffect, useState } from "react";
import insightsStyles from "../../../assets/css/HomeTwo.module.css";

const Insights = () => {
  return (
    <section class={insightsStyles.insights}>
      <div className={insightsStyles.content}>
        <h2>Who We Are</h2>
        <p>We are fundamentally motivated by a single goal: to leave a legacy of greatness. Since its foundation, we have relentlessly sought innovation, honesty, and an unshakable dedication to our clients and communities. With a foundation of trust and a constant pursuit of quality, we seek to make a lasting impression in all we do. Join us on our adventure as we change the future and create a legacy that will last generations.</p>
        <a href="/about-us"><button>Learn More</button></a>
      </div>
      <div className={insightsStyles.image}>
        <img src="https://www.salsoft.net/assets/images/counter.png" alt="" />
      </div>
    </section >
  );
};

export default Insights;
