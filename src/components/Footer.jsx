import React from 'react'
import Logo from './Logo.png';

const Footer = () => {
    return (
        <>
            <div className='bg-black h-auto w-[90%] md:w-[80%] rounded-3xl text-white px-4 md:px-6 py-10 md:py-16 mx-auto'>
  <div className='flex flex-col md:flex-row justify-between items-start md:items-center mx-4 md:mx-[55px] space-y-10 md:space-y-0'>
    <div>
      <div className='flex items-center space-x-3 md:space-x-4'>
        <img src={Logo} alt="" className='w-10 md:w-auto' />
        <h1 className='text-xl md:text-2xl font-normal uppercase mt-1'>fitcamp</h1>
      </div>
      <div className='mt-4 text-xs md:text-sm leading-relaxed'>
        <p>
          Largest gym in Indonesian, top-tier <br className='hidden md:block' />
          facilities, premium amenities, and <br className='hidden md:block' />
          nationwide access to all gym locations.
        </p>
      </div>
    </div>

    <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10 md:space-x-14'>
      <div className='capitalize leading-loose space-y-2 text-center sm:text-left'>
        <h1 className='text-xs font-bold'>more to know</h1>
        <p className='text-xs'>Blog </p>
        <p className='text-xs'>Subscription </p>
        <p className='text-xs'>Testimonial</p>
        <p className='text-xs'>About</p>
      </div>
      <div className='capitalize leading-loose space-y-2 text-center sm:text-left'>
        <h1 className='text-xs font-bold'>Contact Us</h1>
        <p className='text-xs'>021-0892-2323</p>
        <p className='text-xs'>@fitcamp.body.fit </p>
        <p className='text-xs'>admin@fitcamp.com</p>
      </div>
    </div>
  </div>

  <div className="border-b-2 border-gray-400 mx-4 md:mx-[40px] mt-10"></div>

  <div className='flex flex-col md:flex-row justify-between text-xs mt-8 md:mt-12 mx-4 md:mx-[40px] space-y-4 md:space-y-0 text-center md:text-left'>
    <div>2024 fitcampcorption</div>
    <div className='space-x-2 md:space-x-4 flex justify-center md:justify-end flex-wrap'>
      <p>Terms of Services</p>
      <p>Privacy Policies</p>
      <p>Cookies</p>
      <p>Legal</p>
    </div>
  </div>
</div>




        </>
    )
}

export default Footer