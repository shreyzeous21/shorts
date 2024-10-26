import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-auto w-full bg-black text-white py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="text-sm flex justify-center items-center">
          <ul className="flex flex-row gap-2">
            <li>
              <Link href={"https://github.com/shreyzeous21"}>About Me</Link>
            </li>
          </ul>
        </div>

        <div className="text-sm flex justify-center items-center">
          &copy; {new Date().getFullYear()} Galgotian Buddy
        </div>

        <div className="text-sm flex justify-center items-center">
          Developed & Designed by Cutie
        </div>
      </div>
    </div>
  );
};

export default Footer;
