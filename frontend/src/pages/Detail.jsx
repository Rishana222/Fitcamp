import React from 'react'
import CentralParkCards from '../components/Detail/CentralParkCard'
import HappyStories from '../components/Detail/HappyStories'
import Swiper from '../components/Detail/Swiper'
import { useParams } from 'react-router-dom';
import SwiperMembership from '../components/Detail/SwiperMembership'


const Detail = () => {
  const { gymId } = useParams();
  
  return (
    <>
    
     <Swiper gymId={gymId} />
    {/* <CentralParkCard/>
    <HappyStories/> */}
    {/* <SwiperMembership/>
    <CentralParkCards/>
    <HappyStorie/> */}
    </>
  )
}

export default Detail 