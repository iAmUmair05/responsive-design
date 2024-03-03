import React from 'react'
import webpic from "../components/Assert/web.jpeg";
import reactpic from "../components/Assert/react.jpg";
import softwarepic from "../components/Assert/software.jpg";
import fullpic from "../components/Assert/full.jpg";

const Team = () => {
  return (

 <div className='py-10 w-full mx-auto container'> <h1 className='text-center font-bold text-4xl m-6 text-indigo-600'>Team</h1>

    <div className='max-w-[700px] mx-auto m-10 grid md:grid-cols-3 gap-10'>

        <div className="text-center rounded-lg p-6"> 
        <img src={webpic} className="hover:scale-110 duration-100 object-cover rounded-full" alt=""/>
        <p className='text-2xl mt-2 text-indigo-600'>Haseeb</p>
         <p className='text-gray-500'>Web Developer</p>
        </div>

        <div className="text-center rounded-lg p-6"> 
        <img src={softwarepic} className="hover:scale-110 duration-100 object-cover rounded-full" alt=""/>
        <p className='text-2xl mt-2 text-indigo-600'>Husnain</p>
         <p className='text-gray-500'>Software Enginner</p>
        </div>

        <div className="text-center rounded-lg p-6"> 
        <img src={fullpic} className="hover:scale-110 duration-100 object-cover rounded-full" alt=""/>
        <p className='text-2xl mt-2 text-indigo-600'>Awais</p>
         <p className='text-gray-500'>Full Stack Developer</p>
        </div>

        </div>
    </div>
          
  )
}

export default Team