import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full 
                 pointer-events-none bg-rose-500 opacity-60 
                 blur-xl z-[99999]"
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
};

export default MouseFollower;
