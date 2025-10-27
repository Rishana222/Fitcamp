import React from 'react'
import CentralParkCard from '../components/Detail/CentralParkCard'
import HappyStories from '../components/Detail/HappyStories'
import Swiper from '../components/Detail/Swiper'

const Detail = () => {
  return (
    <>
    <div className='relative pt-32 bg-sky-200 h-[450px] mb-8'></div>
    <Swiper/>
    <CentralParkCard/>
    <HappyStories/>
    </>
  )
}

export default Detail