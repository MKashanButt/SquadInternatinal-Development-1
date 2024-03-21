import React from "react";
import heroStyles from "../../../assets/css/Home.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <>
      <div className={heroStyles.bgFilter}>
        <Carousel className={heroStyles.slider} infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={false} >
          <div>
            <img src="https://api.squadinternational.net/api/images/bg-image-one.webp?apikey=21b72d701586241ce2004e28d2276882" />
          </div>
          <div>
            <img src="https://api.squadinternational.net/api/images/bg-image-two.webp?apikey=21b72d701586241ce2004e28d2276882" />
          </div>
          <div>
            <img src='https://api.squadinternational.net/api/images/bg-image-three.webp?apikey=21b72d701586241ce2004e28d2276882' />
          </div>
          <div>
            <img src='https://api.squadinternational.net/api/images/bg-image-four.webp?apikey=21b72d701586241ce2004e28d2276882' />
          </div>
        </Carousel>
        <section class={heroStyles.hero}>
          <div class={heroStyles.right}>
            <h3>Your Marketing</h3>
            <h1 class={heroStyles.uppercase}>Companion</h1>
            <p>
              Improve your marketing strategy with our professional B2B Business
              Process Outsourcing (BPO) services. From data management to lead
              creation, we provide customized solutions to help you maximize your
              marketing efforts. Trust us to help you achieve unparalleled success
              and development in today's competitive business world.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
