import React from 'react'
import { TypeAnimation } from "react-type-animation";


const Banner = () => {
  return (
    <div className='bg-blue-500 w-full py-[100px]'>

        <div className="max-w-[1240px] my-[64px] mx-auto text-center">

            <div className='font-bold text-xl md:text-2xl'>Learn with us</div>
            <div className='text-white text-5xl md:text-[80px] font-bold mb-3'>Grow with us</div>
            <div className='font-bold text-4xl md:text-[50px] text-white mb-[63px]'>

                {/* <Typed className='pl-3'
                    strings={["Web Development","Digital Marketing","Search Engine Optimization", "and Much More"]}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                /> */}

                <TypeAnimation
              sequence={[
                "Web Development",
                1000,
                "Digital Marketing",
                1000,
                "Search Engine Optimization",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
</div>



            <button className='bg-black text-white rounded w-[200px] p-3 hover:opacity-50'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner