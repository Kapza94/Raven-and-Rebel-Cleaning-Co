import React from "react";

const Nav = () => {
  return (
    <>
      <nav className=" flex justify-between">
        <div className="nav-logo p-2">Raven and Rebel Cleaning Co.</div>
        <ul className="nav-links flex">
          <li className="nav-link p-2">
            <a href="#">Home</a>
          </li>
          <li className="nav-link p-2">
            <a href="#">Services</a>
          </li>
          <li className="nav-link p-2">
            <a href="#">About</a>
          </li>
          <li className="nav-link p-2">
            <a href="#">Get a quote</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
