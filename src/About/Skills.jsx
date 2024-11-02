/* eslint-disable no-unused-vars */
import React from "react";
import react from '../images/react.jpg'
import redux from '../images/redux.png'
import tailwind from '../images/tailwind.png'
import css from '../images/css.png'
import html from '../images/html.png'
import js from '../images/js.webp'
import express from '../images/express.png'
import node from '../images/node.png'
import sql from '../images/sql.png'
import postgress from '../images/postgress.png'
import api from '../images/api.png'
import docker from '../images/docker.png'
import aws from '../images/aws.png'
import cicd from '../images/cicd.png'
import mongo from '../images/mongo.webp'
const Skills = () => {
  return (
    <div>
      <div className="  border-white mt-8 mx-28">
        <div className="text-center text-3xl ">
          <h1>Professional Skillset</h1>
        </div>
        <br />
        <div>
          <h1 className=" text-3xl ">Frontend Skills :</h1>
        </div>
        <div className=" gap-5 grid  sm:grid-cols-12 text-center mt-4">
          <div className=" h-[160px] col-span-2">
            <img className="rounded-full" src={react} alt="" />
          </div>
          <div className=" h-[160px] col-span-2">
            <img className="rounded-full" src={redux} alt="" />
          </div>
          <div className="  h-[160px] col-span-2">
            <img className="rounded-full " src={tailwind} alt="" />
          </div>
          <div className="  h-[160px] col-span-2">
            <img className="" src={css} alt="" />
          </div>
          <div className="  h-[160px] col-span-2">
            <img className="" src={html} alt="" />
          </div>
          <div className="  h-[160px] col-span-2">
            <img className="" src={js} alt="" />
          </div>
          
        </div>
        <div>
          <h1 className=" text-3xl mt-4">Backend Skills :</h1>
        </div>
        <div className=" gap-10 grid  sm:grid-cols-12 text-center mt-4">
           <div className="  h-[160px] col-span-2">
            <img className="" src={express} alt="" />
            </div>
           <div className="  h-[160px] col-span-2">
            <img className="" src={node} alt="" />
            </div>
            <div className="  h-[160px] col-span-2">
            <img className="" src={mongo} alt="" />
            </div>
            <div className="  h-[160px] col-span-2">
            <img className="rounded-full" src={sql} alt="" />
            </div>
            <div className="  h-[160px] col-span-2">
            <img className="rounded-full content-center" src={postgress} alt="" />
            </div>
            <div className="  h-[160px] col-span-2">
            <img className="rounded-full content-center" src={api} alt="" />
            </div>
            
        </div>
        <div>
          <h1 className=" text-3xl mt-4">Devops Skills :</h1>
        </div>
        <div className=" gap-10 grid  sm:grid-cols-12 text-center mt-4">
           <div className="  h-[160px] col-span-2">
            <img className="" src={docker} alt="" />
            </div>
           <div className="  h-[160px] col-span-2">
            <img className="" src={aws} alt="" />
            </div>
            <div className="  h-[160px] col-span-2">
            <img className="" src={cicd} alt="" />
            </div>
        
            
        </div>
      </div>
    </div>
  );
};

export default Skills;
