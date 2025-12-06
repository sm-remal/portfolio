import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import { Toaster } from 'react-hot-toast';
import Education from "./components/Education/Education";


function App() {
  return (
    <div className="bg-neutral-950 text-white">
      <MouseFollower />
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="pt-24 md:pt-38 max-w-7xl mx-auto">
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />
        <Education></Education>

        {/* Contact */}
        <Contact />

        {/* Footer  */}
        <Footer />

      </main>
       <Toaster />
    </div>
  );
}

export default App;
