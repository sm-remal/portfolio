import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example Projects Data
const allProjects = [
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
  {
    title: "Weather App",
    description: "Weather forecast app using API & React.",
    image: "/projects/weather.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Todo App",
    description: "Simple todo app using React hooks.",
    image: "/projects/todo.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Social Media Clone",
    description: "Social media clone with React & Firebase.",
    image: "/projects/social.jpg",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirst, indexOfLast);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section
      id="projects"
      className=" text-white px-6 md:px-20"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 lora text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <AnimatePresence>
        <motion.div
          key={currentPage} // re-render animation on page change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600/30 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600/30 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-indigo-600/30 rounded-lg hover:bg-indigo-600 hover:text-white transition disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg transition ${
              currentPage === i + 1
                ? "bg-indigo-500 text-white"
                : "bg-indigo-600/30 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-indigo-600/30 rounded-lg hover:bg-indigo-600 hover:text-white transition disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
