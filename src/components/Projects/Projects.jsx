import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio with React, Tailwind CSS & Framer Motion.",
    image: "/projects/portfolio.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN e-commerce app with payment integration.",
    image: "/projects/ecommerce.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "Blog platform using Next.js, MongoDB & Tailwind CSS.",
    image: "/projects/blog.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Chat App",
    description: "Real-time chat app using Socket.io & React.",
    image: "/projects/chat.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    description: "CRUD task manager app with React & Node.js backend.",
    image: "/projects/tasks.jpg",
    github: "#",
    live: "#",
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
