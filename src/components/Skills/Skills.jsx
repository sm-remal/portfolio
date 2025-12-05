// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGit,
//   FaGithub,
//   FaCode,
// } from "react-icons/fa";
// import { SiTailwindcss, SiFirebase, SiVercel, SiFigma, SiPostman, SiNextdotjs, SiExpress } from "react-icons/si";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//   { name: "React JS", icon: <FaReact className="text-blue-400" /> },
//   { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
//   { name: "Express JS", icon: <SiExpress className="text-white" /> },
//   { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
//   { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
// ];

// const tools = [
//   { name: "Git", icon: <FaGit className="text-orange-500" /> },
//   { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
//   { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
//   { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
//   { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//   { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
//   { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//   { name: "Vercel", icon: <SiVercel className="text-white" /> },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-gray-900 text-white px-6 md:px-20 py-20">
//       {/* Skills Section */}
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-500"
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         My Skills
//       </motion.h2>

//       <motion.div
//         className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800/70 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:bg-gray-800/90 transition-transform duration-300 cursor-pointer"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <div className="text-6xl mb-4">{skill.icon}</div>
//             <h3 className="text-xl font-semibold">{skill.name}</h3>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Tools & Technologies */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-400"
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Tools & Technologies
//       </motion.h2>
//       <p className="text-center text-gray-400 mb-12">Tools I use to bring ideas to life</p>

//       <motion.div
//         className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         {tools.map((tool, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800/70 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:bg-gray-800/90 transition-transform duration-300 cursor-pointer"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <div className="text-5xl mb-4">{tool.icon}</div>
//             <h3 className="text-lg font-semibold">{tool.name}</h3>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVercel, SiFigma, SiPostman, SiNextdotjs, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-blue-400" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express JS", icon: <SiExpress className="text-white" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
];

const tools = [
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

const Skills = () => {
  return (
    <section id="skills" className=" text-white px-6 md:px-20 py-20">
      {/* Skills Section */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 lora text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/70 p-6 pt-12 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:bg-gray-800/90 transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Infinite up-down animated icon */}
            <motion.div
              className="text-6xl mb-4"
              animate={{ y: ["0%", "-20%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Tools & Technologies */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-8 lora text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tools & Technologies
      </motion.h2>
      <p className="text-center text-gray-400 mb-12">Tools I use to bring ideas to life</p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/70 p-6 pt-12 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:bg-gray-800/90 transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Infinite up-down animated icon */}
            <motion.div
              className="text-5xl mb-4"
              animate={{ y: ["0%", "-20%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {tool.icon}
            </motion.div>
            <h3 className="text-lg font-semibold">{tool.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
