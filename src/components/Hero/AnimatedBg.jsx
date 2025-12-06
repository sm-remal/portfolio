import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: { 
          color: "transparent" 
        }, 
        fpsLimit: 60,
        particles: {
          number: { 
            value: 50, 
            density: { 
              enable: true, 
              area: 800 
            } 
          },
          color: { 
            value: ["#f43f5e", "#ec4899", "#e11d48", "#ff006e"] 
          },
          shape: { 
            type: "circle" 
          },
          opacity: { 
            value: 0.7, 
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false
            }
          },
          size: { 
            value: 4, 
            random: { 
              enable: true, 
              minimumValue: 1 
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false
            }
          }, 
          links: {
            enable: true,
            distance: 150,
            color: "#f43f5e",
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce"
            },
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: { 
            onHover: { 
              enable: true,
              mode: "grab"
            }, 
            onClick: { 
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.8
              }
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBg;