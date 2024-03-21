import React, { useEffect, useState } from "react";
import insightsStyles from "../../../assets/css/HomeTwo.module.css";

const WhatWeDo = () => {
  return (
    <section class={insightsStyles.insights}>
      <div className={insightsStyles.image}>
        <img src="https://www.salsoft.net/assets/images/counter.png" alt="" />
      </div>
      <div className={insightsStyles.content}>
        <h2>What We Do</h2>
        <p>Explore our cutting-edge services, designed to satisfy the needs of a continuously changing landscape. From pioneering technology to forward-thinking tactics, we provide creative solutions to help you navigate today's changing environment with confidence.</p>
        <a href="/services"><button>Learn More</button></a>
      </div>
    </section >
  );
};

export default WhatWeDo;
