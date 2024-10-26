import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
     <Image src={"/logo.svg"} width={30} height={30} alt="logo" />
    </div>
  );
};

export default Navbar;
