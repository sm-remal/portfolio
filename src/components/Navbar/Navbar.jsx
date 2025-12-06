import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Scroll to section smoothly
  const handleClick = (e, link) => {
    e.preventDefault();
    const sectionId = link.substring(1); // Remove '#' from link
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setOpen(false);
    }
  };

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-800/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <motion.span
            className="text-rose-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaReact size={28} />
          </motion.span>
          <h3 className="logo text-2xl">
            SM <span className="text-rose-500">Remal</span>
          </h3>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200">
          {links.map((nav, i) => {
            const sectionId = nav.link.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <li key={i}>
                <a
                  href={nav.link}
                  onClick={(e) => handleClick(e, nav.link)}
                  className={`text-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-rose-500 border-b-2 border-rose-500 pb-1" 
                      : "hover:text-rose-400"
                  }`}
                >
                  {nav.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-3xl cursor-pointer text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800/90 absolute w-full left-0 transition-all duration-300 ${
          open ? "top-16 opacity-100" : "top-[-500px] opacity-0"
        }`}
      >
        <ul className="flex flex-col text-center py-6 space-y-4 text-gray-200">
          {links.map((nav, i) => {
            const sectionId = nav.link.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <li key={i}>
                <a
                  href={nav.link}
                  onClick={(e) => handleClick(e, nav.link)}
                  className={`text-lg font-medium transition-all duration-300 inline-block ${
                    isActive 
                      ? "text-rose-500 border-b-2 border-rose-500 pb-1" 
                      : "hover:text-rose-400"
                  }`}
                >
                  {nav.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;