/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className=" sticky top-0 flex justify-between p-4 m-2  border-white rounded-lg font-bold text-xl">
        <div className="text-white w-[40%] text-center">
          <h1>Gaurav Sondhiya</h1>
        </div>
        <div className="text-white w-[60%] space-x-9 text-center">
          <Link to="/💀HOME">🕸️HOME</Link>
          <Link to="/💀PROJECTS">💀PROJECTS</Link>
          <Link to="/💀ABOUT">🕸️ABOUT</Link>
          <Link to="/💀RESUME">💀RESUME</Link>
          <Link to="/💀CONTACT">☠️CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
