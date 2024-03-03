import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='max-w-[600px] p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-center text-4xl font-bold'>Contact Form</h1>
        <hr  className='mt-3'/>
        <div className='mt-3'>
          <label htmlFor="username" className='block text-gray-500 text-xl mb-2'>Name:</label>
          <input type="text" id='usename' className='border w-full text-base px-2 y-1 focus:outline-none focus:border-gray-600 rounded-md p-2' placeholder='Enter your name' />
        </div>

        <div className='mt-3'>
          <label htmlFor="username" className='block text-gray-500 text-xl mb-2'>Email:</label>
          <input type="text" id='usename' className='border w-full text-base px-2 y-1 focus:outline-none focus:border-gray-600 rounded-md p-2' placeholder='Someone@gmail.com' />
        </div>

        <div className='mt-3'>
          <label htmlFor="username" className='block text-gray-500 text-xl mb-2'>Contact no:</label>
          <input type="text" id='usename' className='border w-full text-base px-2 y-1 focus:outline-none focus:border-gray-600 rounded-md p-2' placeholder='Enter your contact no' />
        </div>
        
      
        <div className='mt-3'>
          <label htmlFor="username" className='block text-gray-500 text-xl mb-2'>Concern:</label>
          <textarea type="textarea" cols={2} rows={4} className='border w-full text-base px-2 y-1 focus:outline-none focus:border-gray-600 rounded-md p-2' placeholder='Write your message' />
        </div>
         <button type="submit" className='bg-indigo-600 text-white rounded w-full mt-4 p-3 hover:opacity-70'>Get Started</button>
            </div>
        </div>
  )
}

export default Form