/* eslint-disable no-unused-vars */
import React from "react";
import logo2 from "../images/ddd.png";
const About = () => {
  return (
    <div>
      <div className="border border-white  m-10 h-[450px] flex justify-between">
        <div className="w-[60%] border border-white ">
          <h1 className="text-3xl font-bold text-center ">
            Let Me Introduce Myself
          </h1>
          <p className="text-3xl font-semibold bg-clip-text">
            Hi, I’m Gaurav! I’m a software engineer who’s passionate about
            solving complex problems and writing efficient code
          </p>

          <p className="text-2xl font-semibold">
            My involvement with Robin Hood allows me to give back and contribute
            to the community. When I'm not coding, you’ll find me pushing my
            limits at the gym, balancing mind and body for a well-rounded life.
          </p>
          <p>
            {" "}
            My approach? Code with passion, live with purpose, and strive for
            strength in all areas of life.
          </p>
        </div>
        <div className=" border border-white w-[40%] place-content-center m-auto">
          <img
            className="h-[350px] rounded-full border border-white hover:bg-fuchsia-700 m-auto "
            src={logo2}
            alt="logo"
          />
        </div>
      </div>


      
    </div>
  );
};

export default About;
