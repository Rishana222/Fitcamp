import React from 'react'
import Flexible from '../../assets/Flexible Time.png'
import WorkfromAnywhere from '../../assets/Work From Anywhere.png'
import ExpertTrainer from '../../assets/Expert Trainer.png'
import Schedule from '../../assets/Schedule.png'
import Event1 from '../../assets/Event.png'
import Enjoy from '../../assets/Enjoy.png'

const Membership = () => {
  return (
    <>
      <div className='py-6 mb-7'>
        <h1 className='text-center font-extrabold text-xl mb-2 sm:text-3xl md:text-4xl'>Unlock All the Membership  Benefits</h1>
        <p className='text-center text-gray-600 md:text-xl xs:text-xs  '>Experience full access to premium, features, services, and facilities</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 mb-12 '>
        <div className='text-center place-items-center mb-3.5'>
          <img className='h-[65px] flex items-center mb-3 ' src={Flexible} alt="" />
          <h1 className='font-bold'>Flexible Time</h1>
          <p className='font-light'>Your schedulee, your workout. <br />
            flexibility that fist your life, <br />
            no time limits</p>
        </div>
        <div className='text-center place-items-center mb-3.5'>
          <img className='h-[65px] flex items-center mb-3 ' src={WorkfromAnywhere} alt="" />
          <h1 className='font-bold'>Workout From Anywhere</h1>
          <p className='font-light'>Stay fit where you are. <br />
            All location, one membership, <br />
            workout is just a click away   </p>

        </div>
        <div className='text-center place-items-center mb-3.5'>
          <img className='h-[65px] flex items-center mb-3 ' src={ExpertTrainer} alt="" />
          <h1 className='font-bold'>Workout From Anywhere</h1>
          <p className='font-light'>Stay fit where you are. <br />
            All location, one membership, <br />
            workout is just a click away   </p>

        </div>
        <div className='text-center place-items-center mb-3.5'>
          <img className='h-[65px] flex items-center mb-3 ' src={Schedule} alt="" />
          <h1 className='font-bold'>Well Planned Schedule</h1>
          <p className='font-light'>Optimize monthly membership <br />
            scheduling for consistent progress <br />
            and result   </p>

        </div>

        <div className='text-center place-items-center mb-3.5'>
          <img className='h-[65px] flex items-center mb-3 ' src={Event1} alt="" />
          <h1 className='font-bold'>Fitness Event</h1>
          <p className='font-light'>Enjoy fitness envet benefit,  <br />
            joined membership get vartiety <br />
            free class on every month  </p>

        </div>
        <div className='text-center place-items-center mb-3.5'>
          <img className='h-[65px] flex items-center mb-3 ' src={Enjoy} alt="" />
          <h1 className='font-bold'>Enjoy All Facillties</h1>
          <p className='font-light'>Experience fitness at it’s finest <br />
            with our premium facilities. <br />
            Train with the best  </p>

        </div>
      </div>
    </>
  )
}

export default Membership