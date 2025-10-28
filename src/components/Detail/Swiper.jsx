import React from 'react'
import regular from '../../assets/Regular.png'
import { useNavigate } from 'react-router-dom'




const Swiper = () => {
  const Navigate = useNavigate();
  const handleButtonClick = () => {
    Navigate('/subscription')
  }
  return (
    <>
      <div className="relative pt-32 bg-sky-200 h-[450px] mb-8 ">
        <div className="absolute bg-white px-4 py-3 right-[200px] top-32 rounded-lg ">
          <h1 className='font-bold'>Access All Member Benefits</h1>
          <img className='h-[150px] mt-2' src={regular} alt="" />
          <div className='flex mt-4'>
            <img src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" className='h-[30px]' alt="" />
            <h1 className='ml-3'>Gym Facility Access</h1>
          </div>
          <div className='flex mt-4'>
            <img src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" className='h-[30px]' alt="" />
            <h1 className='ml-3'>All Class Enrollment</h1>
          </div>
          <div className='flex mt-4'>
            <img src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" className='h-[30px]' alt="" />
            <h1 className='ml-3'>Workshop & Discount</h1>
          </div>
          <div className='flex mt-4'>
            <img src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" className='h-[30px]' alt="" />
            <h1 className='ml-3'>Personal Training Session</h1>
          </div>
          <button onClick={handleButtonClick} className='w-full text-white bg-indigo-500 rounded-full px-2 py-1 mt-2'>Become Member</button>
        </div>
      </div>

    </>
  )
}

export default Swiper