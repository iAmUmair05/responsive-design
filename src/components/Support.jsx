import React from 'react'
import {FiPhoneCall} from "react-icons/fi"
import {HiAcademicCap} from "react-icons/hi"
import {HiSupport} from "react-icons/hi"
import {AiOutlineArrowRight} from "react-icons/ai"
import supportimg from "../components/Assert/imgsupport.jpg";

const Support = () => {
  return (
    <div className='w-full mt-24'>

        <div className=' h-[500px] bg-gray-900/90 absolute' >

            <img className=" w-[100vw] h-[500px] object-cover mix-blend-overlay" src={supportimg} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>

            <div>
            <h2 className=' text-center text-4xl pt-6 text-gray-300'>Support</h2>
            <h1 className='text-5xl py-5 font-bold'>Finding the right team</h1>
            <p className='text-gray-300 py-4 text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae harum deserunt sequi soluta sint neque quam illo maiores, minus ab odit et enim?</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-y-16 gap-x-8 px-4 pt-12 sm:pt-12 text-black'>

            <div className='bg-white shadow-xl rounded-xl'>
                <div className='p-8'>
                    <FiPhoneCall className='w-16 p-5 bg-indigo-600 text-white rounded-lg mt-[-3rem]'/>
                    <h2 className='font-bold text-2xl my-3'>Sales</h2>
                    <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic facilis fugiat quia alias modi aut eius porro labore. Fuga qui tempora eos.</p>
                </div>
                <div className='bg-gray-200 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2'/> </p>
                </div>
            </div>
            <div className='bg-white shadow-xl rounded-xl'>
                <div className='p-8'>
                    <HiSupport className='w-16 p-5 bg-indigo-600 text-white rounded-lg mt-[-3rem]'/>
                    <h2 className='font-bold text-2xl my-3'>Support</h2>
                    <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic facilis fugiat quia alias modi aut eius porro labore. Fuga qui tempora eos.</p>
                </div>
                <div className='bg-gray-200 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2'/> </p>
                </div>
            </div>
            <div className='bg-white shadow-xl rounded-xl'>
                <div className='p-8'>
                    <HiAcademicCap className='w-16 p-5 bg-indigo-600 text-white rounded-lg mt-[-3rem]'/>
                    <h2 className='font-bold text-2xl my-3'>Inquries</h2>
                    <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic facilis fugiat quia alias modi aut eius porro labore. Fuga qui tempora eos.</p>
                </div>
                <div className='bg-gray-200 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact Us <AiOutlineArrowRight className='w-5 ml-2'/> </p>
                </div>
            </div>
        </div>
        <div>
            <div>
            </div>
        </div>
    </div>
    </div> 
  )
}

export default Support;
