import React from 'react';
import {AiOutlineCheck} from "react-icons/ai";

const plans = () => {
  return (
    <div className='py-[70px] px-2'>

        <div className="max-w-[1240px] grid mx-auto grid-cols-1 md:grid-cols-3 gap-2">

            <div className="shadow-xl my-2 hover:scale-105 rounded-lg duration-100 m-4 p-8">

              <span className='uppercase bg-indigo-200 font-bold text-indigo-900 rounded-2xl p-2'>Basic</span>

              <p className='text-4xl font-bold m-4 flex'>$99<span className='text-xl text-gray-500 flex flex-col justify-end '>/mo</span></p>
              <p className='text-lg text-slate-500 py-3'>Rerum non totam assumendas tenetur voluptates dolorum autem.</p>

              <div>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>

              </div>
              <button className='bg-indigo-600 text-white rounded w-full mt-4 p-3 hover:opacity-70'>Get Started</button>
            </div>
            <div className="shadow-xl my-2 hover:scale-105 rounded-lg duration-100 m-[-8px] p-8">

              <span className='uppercase bg-indigo-200 font-bold text-indigo-900 rounded-2xl p-2'>Standard</span>

              <p className='text-4xl font-bold m-4 flex'>$199<span className='text-xl text-gray-500 flex flex-col justify-end '>/mo</span></p>
              <p className='text-lg text-slate-500 py-3'>Rerum non totam assumendas tenetur voluptates dolorum autem.</p>

              <div>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>

              </div>
              <button className='bg-indigo-600 text-white rounded w-full mt-4 p-3 hover:opacity-70'>Get Started</button>
            </div>
            <div className="shadow-xl my-2 hover:scale-105 rounded-lg duration-100 m-4 p-8">

              <span className='uppercase bg-indigo-200 font-bold text-indigo-900 rounded-2xl p-2'>Enterprise</span>

              <p className='text-4xl font-bold m-4 flex'>$299<span className='text-xl text-gray-500 flex flex-col justify-end '>/mo</span></p>
              <p className='text-lg text-slate-500 py-3'>Rerum non totam assumendas tenetur voluptates dolorum autem.</p>

              <div>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
              <p className='flex p-2'><AiOutlineCheck className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>

              </div>
              <button className='bg-indigo-600 text-white rounded w-full mt-4 p-3 hover:opacity-70'>Get Started</button>
            </div>

        </div>
    </div>
  )
}

export default plans