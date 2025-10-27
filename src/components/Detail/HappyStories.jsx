import React from 'react'
import { testimonials } from '../../data/testimonial'
import rating from '../../assets/Frame 82 (1).png'

const HappyStories = () => {
  return (
    <>
      <div className='bg-gray-50 shadow-2xl  w-[90%] sm:w-[70%] md:w-[50%] lg:w-[65%] lg:ml-28 rounded-l mb-10'>
        <div className='mb-10 text-left ml-9 lg:ml-6 '>
          <h1 className='font-bold text-3xl mb-2'>Happy Stories</h1>
          <p className='text-xs font-light text-gray-400'>What they said about this gym location, facilities, and environtment</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 px-4 lg:w-[900px] lg:ml-6 mt-3 mb-10'>
          {testimonials.map((items, index) => (
            <div key={index} className='border border-gray-200 rounded-lg px-3 py-3 mb-2 h-[170px] w-[400px]' >
              <div className='flex'>
                <div className=''>
                  <img className='h-[45px]' src={items.img} alt="" />
                </div>

                <div className='ml-3'>
                  <h1 className='font-bold'>{items.name}</h1>
                  <p className='text-xs text-gray-500'>{items.role}</p>
                </div>
              </div>

              <p className='text-gray-500 font-light mb-3'>{items.text}</p>
              <div>
                <img src={rating} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className='py-3'>
          <button className='bg-black text-white rounded-full px-3 py-3 mx-auto flex'>Load More</button>
        </div>
      </div>

    </>
  )
}

export default HappyStories