import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import skillSwap from "../../assets/projects/skillSwap.PNG"
import payBills from "../../assets/projects/paybill.PNG"
import gadget from "../../assets/projects/gadgetzone.PNG"
import dragonNews from "../../assets/projects/dragonNews.PNG"

const projects = [
  {
    title: "SkillSwap Platform",
    description: "Discover and exchange skills with creative minds near you — from coding and design to music and public speaking. Learn together, connect, and grow.",
    image: skillSwap,
    github: "https://github.com/sm-remal/skillswap-platform?tab=readme-ov-file",
    live: "https://skill-swap-4c338.web.app/",
  },
  {
    title: "UtilityPay",
    description: "MERN Stack base - Utility Bill Management System.",
    image: payBills,
    github: "https://github.com/sm-remal/utility-bills-client",
    live: "https://utility-bills-client.web.app/",
  },
  {
    title: "Gadget Zone",
    description: "Use Next.JS – E-Commerce Gadget Store.",
    image: gadget,
    github: "https://github.com/sm-remal/gadget-zone-client",
    live: "https://gadget-zone-client.vercel.app/",
  },
  {
    title: "The Dragon News",
    description: "Trusted source for accurate and timely updates.",
    image: dragonNews,
    github: "https://github.com/sm-remal/dragon-news",
    live: "https://the-dragon-news11.netlify.app/category/1",
  },
];

const Projects = () => {
  const x = useMotionValue(0);
  const speed = 0.8; // marquee speed
  const isHovering = React.useRef(false);

  // Animate marquee manually
  useAnimationFrame(() => {
    if (!isHovering.current) {
      x.set(x.get() - speed);
    }

    // Reset when too far left
    if (x.get() <= -2000) {
      x.set(0);
    }
  });

  return (
    <section id="projects" className="text-white px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div
        className="overflow-hidden whitespace-nowrap w-full mt-18"
        onMouseEnter={() => (isHovering.current = true)} 
        onMouseLeave={() => (isHovering.current = false)} 
      >
        <motion.div style={{ x }} className="flex gap-8">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/70 rounded-2xl shadow-lg w-80 shrink-0 overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-rose-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-3 py-1 bg-rose-600 rounded hover:bg-rose-700 transition flex items-center gap-1"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-3 py-1 bg-rose-600 rounded hover:bg-rose-700 transition flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
