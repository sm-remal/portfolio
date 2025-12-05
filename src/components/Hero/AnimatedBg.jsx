import React from "react";
import Particles from "react-tsparticles";

const AnimatedBg = () => {
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "white" }, 
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: "#f43f5e" },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 6, random: true }, 
          links: {
            enable: true,
            distance: 180,
            color: "#f43f5e",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
            bounce: false,
          },
        },
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBg;
