/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../images/logo1.png";
import logo2 from "../images/ddd.png";
import About from "../About/About";
const Main = () => {
  return (
    <>
    {/* bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 */}
      <div className="flex  border-white p-3 m-2">
        <div className="w-[40%]  border-white">
             <img className="rounded-full  border-white hover:bg-red-700" src={logo} alt="logo1"/>
          </div>
        <div className="  border-white w-[60%] text-center font-semibold space-y-5">
          <h1 className="text-5xl my-10">Hi There!👋</h1>
          <h2 className="text-6xl  backdrop-blur-sm white-10">I am Gaurav Sondhiya</h2>
          <p className="text-4xl">Software Enginner Mern Stack Developer</p>
        </div>

      </div>
        {/* about section  */}
     
      <About/>
    </>
  );
};

export default Main;
