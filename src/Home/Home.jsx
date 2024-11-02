/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../images/logo1.png";
import logo2 from "../images/ddd.png";

import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      {/* bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 */}
      <div className="flex place-content-around  border-white h-[500px] m-14 ">
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

      <div className=" border-white  mx-14 m h-[450px] flex justify-between">
        <div className="w-[70%]  border-white ">
          <div className="text-center font-semibold">
          <p className="text-6xl text-right inline">
            Let Me <p className="inline text-purple-500 ">Introduce </p>
            Myself...
          </p>
          </div>
          <div className="mt-5">
          <p className="text-2xl  inline">
          Hello! I'm Gaurav, a Software Engineer dedicated to pushing the boundaries of Web Technology.
          With expertise in JavaScript and the MERN stack, I bring ideas to life using 
           <p className="inline underline underline-offset-1 font-bold"> Node.js, React.js, and Next.js.</p>
          </p>
          </div>
           <p className="text-2xl mt-5">
          I believe great Software has the power to inspire and connect people.
          </p>
          <p className="mt-8 text-2xl">
            {" "}
            For me, engineering is about building impactful solutions that truly make a difference.
          </p>
          <div>
          <button className="bg-purple-700 h-[70px] w-[150px] mt-5 rounded-2xl text-2xl">Continue</button>
          </div>
        </div>
        <div className="  border-white w-[30%] place-content-center m-auto">
          <img
            className="h-[350px] rounded-full  border-white hover:bg-fuchsia-700 m-auto "
            src={logo2}
            alt="logo"
          />
        </div>
        
      </div>
    </>
  );
};

export default Home;
