"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [index, setIndex] = useState(0);
  const texts = ["Sadhukhan", "Dev", "Coder"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Changes text every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [texts.length]);

  const flipVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: 90 },
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-200 w-full h-auto font-bold">
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex gap-2 justify-start flex-row lg:text-xl text-sm items-center py-5">
          <Image src="/logo.svg" width={30} height={30} alt="logo" className="lg:ml-1 ml-2" />
          Shrey +
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              variants={flipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex justify-end items-center lg:text-xl text-sm lg:space-x-8 lg:gap-0 gap-4 pr-3">
          <span>Videos + Photos</span> <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
