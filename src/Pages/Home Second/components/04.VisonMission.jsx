import React, { useEffect, useState } from "react";
import insightsStyles from "../../../assets/css/HomeTwo.module.css";

const VisonMission = () => {
  return (
    <section class={insightsStyles.insights}>
      <div className={insightsStyles.content}>
        <h2>Our Vison</h2>
        <p>Our aim is to drive global transformation via continuous innovation and unflinching dedication. We imagine a future in which every problem is addressed with limitless opportunity, propelling development and empowerment globally. With a focus on quality, we hope to construct a future in which success has no limitations.</p>
        <a href="/about-us"><button>Learn More</button></a>
      </div>
      <div className={insightsStyles.content}>
        <h2>Our Mission</h2>
        <p>Our purpose is to help individuals and businesses succeed via innovative solutions and unrivaled support. In all we do, we strive to promote development, drive positive change, and surpass expectations. We hope to be a catalyst for success in an ever-changing world by focusing on ethics, teamwork, and customer pleasure.</p>
        <a href="/about-us"><button>Learn More</button></a>
      </div>
    </section >
  );
};

export default VisonMission;
