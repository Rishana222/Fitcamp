import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../assets/Header Illustration.png' 
import User from '../assets/Icon User.png'

const HomePage = () => {
  return (
    <>
    <section className="relative w-full min-h-[900px] overflow-hidden bg-[#2cb4f5]">
      <div className="absolute inset-0 bg-grid opacity-40 z-0"></div>
      <img
        className="object-cover w-full h-full absolute top-0 left-0 opacity-80"
        src={Header}
        alt="Header Illustration"
      />
      <div className="absolute top-[230px] left-1/2 -translate-x-1/2 text-center text-white z-10 w-[90%] md:w-auto">
        <div className="bg-black py-2 px-4 rounded-full flex items-center justify-center w-fit mx-auto mb-5">
          <img className="h-[30px] md:h-[35px] mr-2" src={User} alt="User" />
          <h1 className="capitalize text-xs md:text-sm">
            over 100k+ members joined
          </h1>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize">
          prioritize your health
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 capitalize">
          transform your life by investing in your wellness
        </p>
        <div className="mt-8 bg-white text-black px-2 py-2 rounded-3xl w-[260px] sm:w-[300px] md:w-[400px] mx-auto flex items-center">
          <input
            className="w-full outline-none text-sm px-2"
            type="search"
            placeholder="Search gym location nearby"
          />
          <button className="bg-black text-white px-3 py-1.5 rounded-2xl text-sm hover:bg-gray-800">
            Search
          </button>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default HomePage