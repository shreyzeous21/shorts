"use client"
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="h-auto lg:w-[60vw] mx-auto justify-center">
      <Header />
      <div className="flex flex-col items-center my-10">
        <motion.h1
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation on enter
          exit={{ opacity: 0, y: 50 }} // Animation on exit
          transition={{ duration: 0.5 }} // Transition duration
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg text-center max-w-lg"
          initial={{ opacity: 0, x: -100 }} // Initial state
          animate={{ opacity: 1, x: 0 }} // Animation on enter
          exit={{ opacity: 0, x: 100 }} // Animation on exit
          transition={{ duration: 0.5 }} // Transition duration
        >
          Hi, I`m a coder with a passion for creating unique and innovative solutions.
          My journey in coding has allowed me to explore various technologies and 
          develop projects that I`m proud of. I believe in continuous learning and 
          am always looking for new challenges to tackle.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
