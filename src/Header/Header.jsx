/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 flex justify-between w-[100%] backdrop-blur-3xl  h-16 font-bold text-xl text-fuchsia-500">
        <div className=" w-[40%] text-center p-3">
          <Link
            to="💀HOME"
            className="text-2xl underline underline-offset-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 
        inline-block text-transparent bg-clip-text"
          >
            ☠️ G.S
          </Link>
        </div>
        <div className=" w-[60%] space-x-9 text-center p-3">
          <Link to="/💀HOME">💀HOME</Link>
          <Link to="/💀PROJECTS">💀PROJECTS</Link>
          <Link to="/💀ABOUT">💀ABOUT</Link>
          <Link to="/💀RESUME">💀RESUME</Link>
          <Link to="/💀CONTACT">☠️CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
