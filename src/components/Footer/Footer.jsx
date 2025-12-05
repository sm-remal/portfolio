import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Meaningful Title */}
        <h2 className="text-xl font-bold text-gray-400 text-center">
          Let’s Build Something Awesome Together
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:remal@example.com"
            className="hover:text-indigo-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Remal. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
