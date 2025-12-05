import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-800/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Remal<span className="text-indigo-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200">
          {links.map((nav, i) => (
            <li key={i}>
              <a
                href={nav.link}
                className="text-lg font-medium hover:text-indigo-500 transition"
              >
                {nav.name}
              </a>
            </li>
          ))}
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
          {links.map((nav, i) => (
            <li key={i}>
              <a
                href={nav.link}
                className="text-lg font-medium hover:text-indigo-500 transition"
                onClick={() => setOpen(false)}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
