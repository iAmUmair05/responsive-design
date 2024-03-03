import React from 'react'
import {AiOutlineInstagram} from "react-icons/ai";
import {BsTwitter, BsYoutube, BsLinkedin, BsPinterest} from "react-icons/bs";




const Footer = () => {
  return (
    <section className='w-full bg-blue-500 mt-24 px-2'>
    <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 py-4'>
        <div>
            <h6 className='font-bold uppercase my-2'>Solution</h6>
            <ul>
                <li><a py-1 href="#">Marketing</a></li>
                <li><a py-1 href="#">Designing</a></li>
                <li><a py-1 href="#">Socil Media</a></li>
                <li><a py-1 href="#">Development</a></li>
            </ul>
                </div>
                <div>
            <h6 className='font-bold uppercase my-2'>Support</h6>
            <ul>
                <li><a py-1 href="#">Marketing</a></li>
                <li><a py-1 href="#">inqueries</a></li>
                <li><a py-1 href="#">Socil Media</a></li>
                <li><a py-1 href="#">Development</a></li>
            </ul>
                </div>
                <div>
            <h6 className='font-bold uppercase my-2'>Links</h6>
            <ul>
                <li><a py-1 href="#">Marketing</a></li>
                <li><a py-1 href="#">Designing</a></li>
                <li><a py-1 href="#">Socil Media</a></li>
                <li><a py-1 href="#">Development</a></li>
            </ul>
                </div>
                   <div>
            <h6 className='font-bold uppercase my-2'>Inquries</h6>
            <ul>
                <li><a py-1 href="#">Marketing</a></li>
                <li><a py-1 href="#">Designing</a></li>
                <li><a py-1 href="#">Socil Media</a></li>
                <li><a py-1 href="#">Development</a></li>
            </ul>
                </div>
    </div>

    <div className="grid-cols-5">
        <div className='flex justify-evenly max-w-[400px] mx-auto cursor-pointer pt-4 text-2xl'>
       <a href="https://www.instagram.com/"><AiOutlineInstagram /></a> 
        <a href="https://www.twitter.com/"><BsTwitter /></a>
        <a href="https://www.youtube.com/"><BsYoutube /></a>
        <a href="https://www.linkedin.com/"><BsLinkedin /></a>
        <a href="https://www.pinterest.com/"><BsPinterest /></a>
        </div>

    </div>

    <div className='text-center flex justify-center items-center pb-[40px] mt-6'>
        &copy; 2023 all rights reverved websolution.com
    </div>

    </section>
  )
}

export default Footer;