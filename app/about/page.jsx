import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./_components/About";

const page = () => {
  return (
    <div className="h-auto lg:w-[60vw] mx-auto justify-center">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default page;
