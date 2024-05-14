import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import heroStyles from "../../../assets/css/HomeTwo.module.css";


const Hero = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "white",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 20,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#8A8A8A",
        },
        links: {
          color: "#8A8A8A",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      <section class={heroStyles.hero}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{ height: "100vh" }}
        />
        <div class={heroStyles.content}>
          <h1>Your Marketing Companion</h1>
          <p>Explore our cutting-edge services, designed to satisfy the needs of a continuously changing landscape. From pioneering technology to forward-thinking tactics, we provide creative solutions to help you navigate today's changing environment with confidence.</p>
        </div>
      </section>
    </>
  );
};

export default Hero;