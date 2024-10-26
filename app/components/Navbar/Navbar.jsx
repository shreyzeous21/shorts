"use client"; // This is necessary for the component to be client-side rendered
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex justify-center items-center text-black">
        <button
          className=" focus:outline-none" // Hide button on larger screens
          onClick={toggleMenu} //
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // Cross icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Fullscreen Menu */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to this state
          exit={{ opacity: 0 }} // Exit animation
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h2 className="text-3xl mb-4">Galgotian Buddy</h2>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="hover:text-gray-400"
                onClick={toggleMenu} // Close menu on link click
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
          </ul>
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleMenu} // Close menu on button click
          >
            &times; {/* Close icon */}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
