/* eslint-disable no-unused-vars */
import React from 'react'

const Skills = () => {
  return (
    <div>
        <div  className='border border-white mt-8 mx-28'>
            <div className='text-center text-3xl '>
                <h1>Professional Skillset</h1>
            </div>
            <br />
            <div>
                <h1 className=' text-3xl '>Frontend Skills :</h1>
            </div>
               <div className='grid  grid-cols-3 place-content-center border border-white   '>
                   <div className='border border-white'>1</div>
                   <div className='border border-white'>2</div>
                   <div className='border border-white'>3</div>
                   <div className='border border-white'>4</div>
                   <div className='border border-white'>5</div>
                   <div className='border border-white'>6</div>
               </div>
        </div>
    </div>
  )
}

export default Skills
