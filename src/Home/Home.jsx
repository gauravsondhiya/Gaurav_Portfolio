/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../images/logo1.png";
import About from "../About/About";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      {/* bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 */}
      <div className="flex place-content-around border border-white h-[500px] m-10 mt-14">
        <div className=" m-auto w-[50%] flex place-content-center">
          <img
            className="bg-red rounded-full  hover:bg-fuchsia-700 h-[300px] w-[300px]"
            src={logo}
            alt="logo1"
          />
        </div>
        <div className=" m-auto w-[50%] text-6xl  text-center items-center ">
          <div>
            <p className=" font-bold ">Hi There! 👋</p>
            <p
              className="mt-2 font-semibold text-4xl bg-gradient-to-r from-white via-fuchsia-500 to-indigo-400 
          inline-block text-transparent bg-clip-text"
            >
              I am Gaurav Sondhiya
            </p>
          </div>
          <div
            className="mt-2 font-semibold text-4xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400
          inline-block text-transparent bg-clip-text"
          >
            {" "}
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Freelancer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      {/* about section  */}

      <About />
    </>
  );
};

export default Home;
