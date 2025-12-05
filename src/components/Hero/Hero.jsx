import React from "react";
import { motion } from "framer-motion";
import remal_Image from "../../assets/remal_Image.jpg"

const Hero = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gray-900">
      
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-xl text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-indigo-500">Remal</span> 👋
          <br />
          MERN Stack Developer
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          I build fast, scalable & modern web applications using MongoDB, Express, React & Node.js.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium shadow-md hover:bg-indigo-600 transition"
        >
          View My Work
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
          <img
            src={remal_Image}
            alt="Developer"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
