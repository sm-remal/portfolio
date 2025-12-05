import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-neutral-950 text-white">
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

        {/* Contact */}
        <Contact />

        {/* Footer  */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
