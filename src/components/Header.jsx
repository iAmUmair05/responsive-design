import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';


const Header = () => {

  const [toggle,setToggle] =useState(false)
  return (
    <div className='bg-blue-500 p-4'>

        <div className="max-w-[1220px] my-[5px] container pl-[15px] flex justify-between">

          <div className='text-3xl font-bold uppercase cursor-pointer'>Web Solution</div>

          {
            toggle ?

          <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
          :
          <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
    

          }
          

          <ul className='hidden md:flex gap-[60px] text-white items-center'>

            <li className='hover:opacity-70 hover:font-semibold hover:text-blue-800'>
              <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>

              </li>
            
            <li className='hover:opacity-70 hover:font-semibold hover:text-blue-800'>
              <Link to="/services" spy={true} smooth={true} offset={50} duration={500}>Our Offers</Link>
            </li>
            <li className='hover:opacity-70 hover:font-semibold hover:text-blue-800'>
              <Link to="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            </li>
            <li className='hover:opacity-70 hover:font-semibold hover:text-blue-800'>
             <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            </li>

          </ul>
          {/* responsive menu */}
          <ul className={`md:hidden text-white fixed bg-black top-[78px] w-full h-screen ${toggle? 'left-[0]' : 'left-[-100%]'} duration-300`}>

            <li className='p-5'> <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='p-5'><Link to="/services" spy={true} smooth={true} offset={50} duration={500}>Our Offers</Link></li>
            <li className='p-5'><Link to="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            <li className='p-5'><Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>

          </ul>
          </div>
    </div>
  )
}

export default Header