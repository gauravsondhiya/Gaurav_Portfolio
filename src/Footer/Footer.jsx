/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub,FaTwitterSquare,FaLinkedin   } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
         <div className='text-center  border-white mt-5 mx-14'>
            <h1 className='text-4xl font-bold underline underline-offset-2'>FIND ME ON </h1>
            <p>Feel Free to Connect with Me</p>
            <br />
            <div className='flex place-content-center  border-white gap-10'>
            <FaGithub className='h-10 w-10  hover:bg-fuchsia-700'/>
            <FaTwitterSquare className='h-10 w-10 hover:bg-fuchsia-700'/>
            <FaLinkedin className='h-10 w-10 hover:bg-fuchsia-700'/>

            </div>
         </div>
         <br />
         <div className=' border-white flex justify-around mx-14'>
         
            <h1>Designed and Developed by Gaurav Sondhiya💀</h1>
            <h1>Copyright © 2024 GS</h1>
            
         </div>
    </div>
  )
}

export default Footer
