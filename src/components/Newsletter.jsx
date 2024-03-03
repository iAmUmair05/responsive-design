import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-blue-500 w-full mt-[80px]'>

      <div className='max-w-[1240px] md:flex mx-auto justify-between py-[40px]'>

        <div className="m-2">

          <h1 className='text-white text-3xl font-bold'>Want to learn latest I.T Skills?</h1>
          <span className='text-white'>Sign up to newslatter and stay up to date</span>
        </div>

        <div className="m-2">
          <input className='p-3 rounded-md text-slate-500 md:w-[20vw]' type="text" placeholder='Enter Email' />

          <button className='bg-black ml-5 m-3 text-white rounded-md w-[100px] p-[10px]'>Notify Me</button>
          <br />
          <p className='text-white'>We care about your private data.<br /> <a className='text-black' href="#">Read our policy.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter