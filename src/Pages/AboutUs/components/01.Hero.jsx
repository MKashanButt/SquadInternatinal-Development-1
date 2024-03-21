import React from "react";

import sectionStyles from "../../../assets/css/About.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <div className={sectionStyles.bgFilter}>
      <Carousel className={sectionStyles.slider} infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={false} >
        <div>
          <img src='https://api.squadinternational.net/api/images/bg_imge_one.webp?apikey=21b72d701586241ce2004e28d2276882' />
        </div>
        <div>
          <img src='https://api.squadinternational.net/api/images/bg_imge_two.webp?apikey=21b72d701586241ce2004e28d2276882' />
        </div>
        <div>
          <img src='https://api.squadinternational.net/api/images/bg_imge_three.webp?apikey=21b72d701586241ce2004e28d2276882' />
        </div>
        <div>
          <img src='https://api.squadinternational.net/api/images/bg_imge_four.webp?apikey=21b72d701586241ce2004e28d2276882' />
        </div>
      </Carousel>
      <section
        className={sectionStyles.hero}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={sectionStyles.left}>
          <h1>
            <span>
              <div data-aos="fade-right" data-aos-duration="100">B</div>
              <div data-aos="fade-right" data-aos-duration="200">u</div>
              <div data-aos="fade-right" data-aos-duration="300">i</div>
              <div data-aos="fade-right" data-aos-duration="400">l</div>
              <div data-aos="fade-right" data-aos-duration="500">d</div>
              <div data-aos="fade-right" data-aos-duration="600">i</div>
              <div data-aos="fade-right" data-aos-duration="700">n</div>
              <div data-aos="fade-right" data-aos-duration="800">g</div>
            </span>
            <span>
              <div data-aos="fade-right" data-aos-duration="900">a</div>
            </span>
            <span>
              <div data-aos="fade-right" data-aos-duration="1000">L</div>
              <div data-aos="fade-right" data-aos-duration="1100">e</div>
              <div data-aos="fade-right" data-aos-duration="1200">g</div>
              <div data-aos="fade-right" data-aos-duration="1300">a</div>
              <div data-aos="fade-right" data-aos-duration="1400">c</div>
              <div data-aos="fade-right" data-aos-duration="1500">y</div>
            </span>
          </h1>
          <p>
            We are fundamentally motivated by a single goal: to leave a legacy of
            greatness. Since its foundation, we have relentlessly sought
            innovation, honesty, and an unshakable dedication to our clients and
            communities. With a foundation of trust and a constant pursuit of
            quality, we seek to make a lasting impression in all we do. Join us on
            our adventure as we change the future and create a legacy that will
            last generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
