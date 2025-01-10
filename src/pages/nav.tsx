import React from "react";
import "../styles/globals.css";

const Nav = () => {
  return (
    <>
      <div className="mx-auto nav sticky top-0 bg-white shadow-md z-50">
        <nav className="flex justify-between ">
          <a href="./" className="nav-logo p-2">
            R&R Cleaning Co.
          </a>

          <ul className="nav-links flex">
            <li className="nav-link p-2">
              <a
                href="#"
                className="underline decoration-green-400 underline-offset-4 hover:decoration-4 hover:text-lg transition-all duration-300 ease-in-out"
                style={{ display: "inline-block", height: "2rem" }}
              >
                Home
              </a>
            </li>
            <li className="nav-link p-2">
              <a
                href="#"
                className="underline decoration-green-400 underline-offset-4 hover:decoration-4 hover:text-lg transition-all duration-300 ease-in-out"
                style={{ display: "inline-block", height: "2rem" }}
              >
                Services
              </a>
            </li>
            <li className="nav-link p-2">
              <a
                href="#"
                className="underline decoration-green-400 underline-offset-4 hover:decoration-4 hover:text-md transition-all duration-300 ease-in-out"
                style={{ display: "inline-block", height: "2rem" }}
              >
                About
              </a>
            </li>
          </ul>

          <div className="nav-contact p-2">
            <a
              href="#"
              className="bg-green-400 p-1 font-normal hover:font-semibold hover:text-lg rounded-md transition-all duration-500 ease-in-out "
            >
              Get a quote
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
