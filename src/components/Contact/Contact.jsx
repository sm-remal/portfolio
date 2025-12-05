import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Placeholder for now
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white px-6 md:px-20 py-20"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-gray-800/70 rounded-3xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl p-3 hover:bg-gray-700/70 transition">
            <FiUser className="text-indigo-400 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-transparent outline-none w-full text-white placeholder-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl p-3 hover:bg-gray-700/70 transition">
            <FiMail className="text-indigo-400 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-transparent outline-none w-full text-white placeholder-gray-300"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 bg-gray-700/50 rounded-xl p-3 hover:bg-gray-700/70 transition">
            <FiMessageCircle className="text-indigo-400 text-xl mt-1" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-transparent outline-none w-full text-white placeholder-gray-300 resize-none h-32"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-500 rounded-xl font-semibold text-white shadow-lg hover:bg-indigo-600 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
