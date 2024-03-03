import React from 'react'

const Trust = () => {
  return (
    <div className='py-10 w-full mx-auto container'> <h1 className='text-center font-bold text-4xl m-6'>Trusted by clients across the world</h1>

    <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis itaque, sed doloremque id sint aspernatur. Dolorum aspernatur voluptatem repellendus quis facere excepturi laboriosam consectetur dolorem placeat error facilis, sint libero rem ullam impedit officia?</p>

    <div className='container mx-auto m-10 grid md:grid-cols-3 gap-10'>

        <div className="shadow-lg text-center rounded-lg py-3"> 
        <p className='text-indigo-600 text-6xl font-bold'> 100% </p>
        <p className='text-gray-500 mt-2'>Completion</p>
        </div>
                <div className="shadow-lg text-center rounded-lg py-3"> 
        <p className='text-indigo-600 text-6xl font-bold'> 24/7 </p>
        <p className='text-gray-500 mt-2'>Delivery</p>
        </div>
                <div className="shadow-lg text-center rounded-lg py-3"> 
        <p className='text-indigo-600 text-6xl font-bold'> 1000K </p>
        <p className='text-gray-500 mt-2'>Transcation</p>
        </div>

        </div>
    </div>
  )
}

export default Trust