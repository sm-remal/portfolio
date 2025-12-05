import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import remal_Image from "../../assets/remal_Image.jpg";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 -mt-22 overflow-hidden">

      {/* Floating Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-rose-600/30 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-purple-500/30 rounded-full blur-3xl top-1/3 right-20"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-xl text-white relative z-10"
      >
        <h1 className="text-xl md:text-2xl text-rose-500 font-bold">
          Hi, I'm <br /> 
          <span className="text-4xl md:text-5xl font-bold text-white lora">
            Shah Mozzem Remal
          </span>
        </h1>

        {/* Subtitle with typing effect */}
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400">
          <Typewriter
            words={["MERN Stack Developer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl">
          I build fast, scalable & modern web applications using MongoDB, Express, React & Node.js.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/path-to-your-resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 bg-rose-700
            hover:from-rose-700 hover:via-red-700 hover:to-red-800
            text-white rounded-xl font-medium shadow-md transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-rose-600 text-rose-400 rounded-xl font-medium shadow-md
            hover:text-white hover:bg-gradient-to-r hover:from-rose-700 hover:via-red-700 hover:to-red-800 transition"
          >
            See My Projects
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0 relative z-10"
      >
        {/* Floating Animation + Glow */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 blur-2xl rounded-full bg-rose-600 opacity-30"></div>

          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-rose-500 shadow-xl">
            <img
              src={remal_Image}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
