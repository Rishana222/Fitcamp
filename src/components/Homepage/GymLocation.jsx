import React from 'react'
import Jakarta from '../../assets/Jakarta.png'
import Bandng from '../../assets/Group 36.png'
import Surabaya from '../../assets/Group 37.png'
import Madura from '../../assets/Group 37 (1).png'
import Bali from '../../assets/Denpasar.png'
import Padang from '../../assets/Padang.png'
import Semarang from '../../assets/Yogyakarta.png'

const GymLocation = () => {
  return (
    <>
    <div className='mx-auto mb-7'>
        <h1 className='text-2xl md:text-3xl capitalize font-medium px-2 mb-1 lg:px-9'>gym location</h1>
        <p className='  px-2 text-gray-500 mb-1 lg:px-9'>Find the nearby gym that near your location to transfrom your healthy journey </p>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 place-items-center lg:px-4 '>
        <div className='bg-white flex  rounded-4xl shadow-xl/30 px-6 py-3 space-x-3.5 mb-5 '>
            <img className='' src={Jakarta} alt="" />
            <p className='text-gray-600 pt-2'>Jakarta</p>
        </div>
        <div className='bg-white flex  rounded-4xl shadow-xl/30  px-6  py-3 space-x-3.5 mb-5  '>
            <img className='' src={Bandng} alt="" />
            <p className='text-gray-600 pt-2'>Bandng</p>
        </div>
        <div className='bg-white flex  rounded-4xl shadow-xl/30 px-6  py-3 space-x-3.5 mb-5  '>
            <img className='' src={Surabaya} alt="" />
            <p className='text-gray-600 pt-2'>Surabaya</p>
        </div>
        <div className='bg-white flex  rounded-4xl shadow-xl/30 px-6  py-3 space-x-3.5 mb-5  '>
            <img className='' src={Madura} alt="" />
            <p className='text-gray-600 pt-2'>Madura</p>
        </div>
        <div className='bg-white flex  rounded-4xl shadow-xl/30 px-6  py-3 space-x-3.5 mb-5 '>
            <img className='' src={Bali} alt="" />
            <p className='text-gray-600 pt-2'>Bali</p>
        </div>
        <div className='bg-white flex  rounded-4xl shadow-xl/30 px-6  py-3 space-x-3.5 mb-5  '>
            <img className='' src={Padang} alt="" />
            <p className='text-gray-600 pt-2'>Padang</p>
        </div>
        <div className='bg-white flex  rounded-4xl shadow-xl/30 px-6  py-3 space-x-3.5 mb-5 '>
            <img className='' src={Semarang} alt="" />
            <p className='text-gray-600 pt-2'>Semarang</p>
        </div>

    </div>
    </div> 
    
    </>
  )
}

export default GymLocation