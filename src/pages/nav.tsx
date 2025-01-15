import React, { useState } from "react";
import "../styles/globals.css";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-2 pb-2 mx-auto nav sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-4 md:px-8">
        <a href="./" className="font-extrabold text-xl nav-logo">
          <Image className="pr-2" src="/icons/R&R.png" width={100} height={50} alt="People icon" />
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`nav-links flex-col md:flex-row md:flex ${
            isOpen ? "flex" : "hidden"
          } md:items-center md:space-x-4`}
        >
          <li className="nav-link p-2">
            <a
              href="#hero"
              className="underline dark-mint-decoration underline-offset-4 hover:decoration-4 hover:text-lg transition-all duration-100 ease-in-out"
            >
              Home
            </a>
          </li>
          <li className="nav-link p-2">
            <a
              href="#services"
              className="underline dark-mint-decoration underline-offset-4 hover:decoration-4 hover:text-lg transition-all duration-100 ease-in-out"
            >
              Services
            </a>
          </li>
          <li className="nav-link p-2">
            <a
              href="#about"
              className="underline dark-mint-decoration underline-offset-4 hover:decoration-4 hover:text-lg transition-all duration-100 ease-in-out"
            >
              About
            </a>
          </li>
          <li className="nav-link p-2">
            <a
              href="#contact"
              className="underline dark-mint-decoration underline-offset-4 hover:decoration-4 hover:text-lg transition-all duration-100 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
