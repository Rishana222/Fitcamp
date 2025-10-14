import React from 'react'
import Header from './Header Illustration.png'
import Logo from './Logo.png';
import User from './Icon User.png'


const Navbar = () => {
  return (
    <>
      <img className='object-cover w-full   h-[900px] bg-top relative' src={Header} alt="" />
      <div className='absolute top-3 '>
        <div className='flex px-4 md:px-8 lg:px-24  '>
          <img src={Logo} alt="" className='w-10 md:w-auto  ' />
          <h1 className='ml-2 font-bold uppercase mt-2 md:text-2xl lg:text-3xl lg:mt-1'>fitcamp</h1>
        </div>
        <div className='ml-[150px] -mt-9 md:flex md:space-x-4 md:ml-[300px] font-medium lg:ml-[600px]'>
          <h1>subscribe plan</h1>
          <h1>blog</h1>
          <h1>Testimonial</h1>
          <h1>About</h1>
          <button className='mt-2 bg-indigo-500 text-white py-2  rounded-4xl px-2 relative top-[-6px] hover:bg-indigo-600 capitalize '>my subscribtion</button>

        </div>
      </div>
      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2  text-white    text-center">
        <div className='bg-black  py-2 rounded-3xl flex px-3'>
          <img className='h-[35px]' src={User} alt="" />
          <h1 className='capitalize text-xs mt-2'>over 100k+ members joined</h1>
        </div>
      </div>
      <div> <h1 className='text-white capitalize lg:text-6xl lg:font-bold md:text-5xl md:font-medium  absolute left-1/2 transform -translate-x-1/2 top-[290px] text-xl font-medium sm:text-4xl sm:font-bold lg:top-[]'>priotize your health</h1></div>
      <div className='absolute left-1/2 transform -translate-x-1/2 top-[350px] md:top-[380px] lg:top-[400px]  capitalize text-xs text-white sm:text-xl '>
        <p>transform your investing your wellness</p>
      </div>

    </>
  )
}

export default Navbar