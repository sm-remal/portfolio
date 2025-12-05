import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-6 md:px-20 py-20 flex flex-col justify-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-500"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Text */}
        <div className="space-y-6 text-gray-300">
          <p>
            I am a <span className="text-indigo-400 font-semibold">dedicated Computer Science and Engineering student</span> passionate about building efficient, scalable, and user-friendly software solutions. My journey is focused on mastering <span className="text-indigo-400 font-semibold">MERN Stack development</span> across front-end and back-end technologies.
          </p>
          <p>
            Continuously honing my skills in modern programming languages, frameworks, and tools, I deliver complete <span className="text-indigo-400 font-semibold">end-to-end solutions</span>. With a strong foundation in algorithms, data structures, and system design, I contribute to dynamic and innovative projects that solve real-world problems.
          </p>
          <p>
            Open to collaborations and new opportunities, I aim to expand my expertise in <span className="text-indigo-400 font-semibold">MERN stack development</span> while creating meaningful digital experiences.
          </p>
        </div>

        {/* Right Info Cards */}
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            className="flex items-center gap-4 bg-gray-800/70 p-4 rounded-2xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLaptopCode className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Current Work</h3>
              <p className="text-gray-300">Building MERN stack projects</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-gray-800/70 p-4 rounded-2xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaCode className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Skills</h3>
              <p className="text-gray-300">
                JavaScript, Node.js, Express.js, MongoDB, React, Tailwind CSS
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-gray-800/70 p-4 rounded-2xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaReact className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Goal</h3>
              <p className="text-gray-300">Become a professional MERN Stack Developer</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 bg-gray-800/70 p-4 rounded-2xl shadow-lg hover:scale-105 transition transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaDatabase className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Open To</h3>
              <p className="text-gray-300">Collaboration on MERN stack projects</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
