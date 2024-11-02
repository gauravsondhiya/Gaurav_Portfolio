/* eslint-disable no-unused-vars */
import React from "react";
import about from '../images/1.jpg'
import Skills from "./Skills";
const About = () => {
  return (
    <div>
      <div className=" border-white mt-28 mx-28  h-[400px]  grid sm:grid-cols-12 justify-between">
        <div className="col-span-9  border-white ">
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
          
        </div>
        <div className="  border-white col-span-3 place-content-center  ">
          <img
            className="h-[300px]  rounded-full  hover:border border-purple-600 m-auto"
            src={about}
            alt="logo"
          />
        </div>
        
      </div>
   
    {/* skills section  */}

       <Skills/>
    </div>
  );
};

export default About;
