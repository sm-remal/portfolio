import React from "react";
import { FaSchool, FaRegStar, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMap = {
  school: <FaSchool className="w-6 h-6" />,
  star: <FaRegStar className="w-6 h-6" />,
  university: <FaUniversity className="w-6 h-6" />,
};

const timeline = [
  {
    title: "B.Sc in Computer Science and Engineering",
    institution: "Northern University Bangladesh",
    period: "2023 - Present",
    icon: "university",
    items: [
      "Focused on software engineering, algorithms, and web development",
      "Completed capstone project on AI-based recommendation systems",
      "Member on NUBCC Computer Club"
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "National College of Education",
    period: "2018 - 2020",
    icon: "school",
    items: [
      "Studied Science with focus on Mathematics, Physics, and Chemistry",
    //   "Board Scholarship Recipient",
    //   "Science Club President",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "SerajNagar M A Pilot Model High School",
    period: "2016 - 2018",
    icon: "star",
    items: [
      "General Science curriculum with excellent performance in all subjects",
    ],
  },
];

const cardVariant = (reverse) => ({
  hidden: { opacity: 0, x: reverse ? 80 : -80, rotate: -3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Education = () => {
  return (
    <section id="education" className=" text-gray-300 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            MY ACADEMIC JOURNEY
          </p>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-bold text-white mt-2"
          >
            Education
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center line animation */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b 
                       from-rose-500/70 via-rose-500/30 to-rose-500/70 rounded-full"
          ></motion.div>

          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  variants={cardVariant(reverse)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center 
                    ${reverse ? "md:flex-row-reverse" : ""}`}
                >

                  {/* Icon + Period */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center md:items-start md:w-1/2"
                  >
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative p-4 rounded-full bg-rose-900/20 border border-rose-400/40 
                                   shadow-lg shadow-rose-500/40"
                      >
                        <div className="absolute inset-0 rounded-full bg-rose-400 blur-xl opacity-30"></div>
                        <div className="relative text-rose-400">{iconMap[item.icon]}</div>
                      </motion.div>

                      <span className="text-sm font-medium bg-rose-900/30 px-3 py-1 
                                       rounded-full backdrop-blur-sm border border-rose-400/30 
                                       text-rose-100 shadow-sm">
                        {item.period}
                      </span>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className={`md:w-1/2 w-full bg-gray-800/50 backdrop-blur-md border border-rose-500/30 
                               rounded-3xl p-6 shadow-lg text-white hover:shadow-rose-500/50 
                               hover:border-rose-500/50 transition-all duration-300
                               ${reverse ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <h3 className="text-2xl font-bold text-rose-400">{item.title}</h3>
                    <p className="text-sm text-rose-300 mt-1">{item.institution}</p>

                    <ul className="mt-4 list-disc list-inside text-gray-200 space-y-1">
                      {item.items.map((listItem, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 }}
                        >
                          {listItem}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


