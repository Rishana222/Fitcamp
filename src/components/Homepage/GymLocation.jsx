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
        <h1 className='text-2xl md:text-3xl capitalize font-medium px-5 md:px-11 mb-1 lg:px-14'>gym location</h1>
        <p className='md:px-11  px-5 text-gray-500 mb-1 lg:px-14'>Find the nearby gym that near your location to transfrom your healthy journey </p>

   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 place-items-center gap-6 lg:px-4 xl:px-11'>
  {/* Jakarta */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Jakarta} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Jakarta</p>
  </div>

  {/* Bandng */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Bandng} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Bandng</p>
  </div>

  {/* Surabaya */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Surabaya} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Surabaya</p>
  </div>

  {/* Madura */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Madura} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Madura</p>
  </div>

  {/* Bali */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Bali} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Bali</p>
  </div>

  {/* Padang */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Padang} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Padang</p>
  </div>

  {/* Semarang */}
  <div className='bg-white flex justify-center items-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[170px] xl:max-w-[160px] rounded-4xl shadow-xl/30 px-4 py-2.5 space-x-2.5 mb-5'>
    <img src={Semarang} alt="" className='h-8 w-auto xl:h-7' />
    <p className='text-gray-600 pt-1 text-sm xl:text-xs'>Semarang</p>
  </div>
</div>



    </div> 
    
    </>
  )
}

export default GymLocation