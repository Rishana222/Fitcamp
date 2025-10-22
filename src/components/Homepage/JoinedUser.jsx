import React from 'react'
import User from '../../assets/Profile 1.png'
import frame from '../../assets/Frame 36.png'

const JoinedUser = () => {
  return (
    <>
      <div className='mb-14 flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 md:px-24'>
  <h1 className='text-left font-bold sm:text-xl md:text-2xl md:font-extrabold mb-3 sm:mb-0'>
    Joined 10.000+ User <br /> with Happy User
  </h1>
  <button className="bg-black text-white rounded-full px-6 py-1.5 text-xs sm:text-sm mt-3 sm:mt-0 hover:bg-gray-900 ">
   See All
  </button>
      </div>
      {/* white div */}
      <div className='bg-gray-100 w-[330px] sm:w-[550px] md:w-[700px] md:px-6 md:py-12  text-black shadow-2xl text-center mb-5   mx-auto py-9 rounded-xl '>
        <p className='mb-3.5 font-medium sm:text-xl '>
          I’ve been a member of this gym for six months, and it’s <br />
          been a game-changer! The trainers are incredibly <br />
          knowledgeable and supportive.
        </p>

        <div className='flex justify-center items-center text-center flex-wrap'>
          <img src={User} alt="" className='rounded-4xl w-14 h-14 object-cover' />
          <div className='ml-3 text-left'>
            <h1 className='font-bold'>Saputra</h1> <br />
            <h1 className='text-xs'>Product Designer</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center mb-3.5'>
        <img className='h-[60px]' src={frame} alt="" />
      </div>



    </>
  )
}

export default JoinedUser