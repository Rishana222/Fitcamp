import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import regular from '../../assets/Regular.png';
import gym1 from '../../assets/Gym 2 (3).png';
import gym2 from '../../assets/gym-526995_1280.jpg';
import gym3 from '../../assets/home-workout-5031689_1280.jpg';
import gym4 from '../../assets/towels-4537954_1280.jpg';
import operation from '../../assets/Operational Time.png';
import address from '../../assets/Address.png';
import profile from '../../assets/Profile 4.png';
import rating from '../../assets/Frame 82 (1).png'; 
import { parkdata } from '../../data/centralParkdata';
import { testimonials } from '../../data/testimonial';
import { imageUrl } from '../../utils/axios';
import Parkcard from '../Detail/Parkcard';
import { useQuery } from '@tanstack/react-query';
import operationalIcon from '../../assets/Operational Time.png';
import addressIcon from '../../assets/Address.png';
import { getGymById } from '../../utils/gymApi';





const Swiper = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(gym1);

  const images = [gym1, gym2, gym3, gym4];

  const handleButtonClick = () => {
    navigate('/subscription');
  };

 
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
      queryKey: ['gym', id],
      queryFn: () => getGymById(id),
    });
  const gym = data?.data

  

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[350px] bg-sky-200 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 ">
        {/* Top Section: Image Gallery and Membership Card */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between gap-8 mb-10 pt-12 lg:pt-0 lg:mt-[80px] md:mt-[50px] mt-[150px]"> {/* Adjusted pt for spacing */}
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-[600px] flex flex-col items-center lg:items-start self-start">
            {/* Main Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-4 max-w-[600px]">
              <img
                src={currentImage}
                alt="Main Gym View"
                className="w-full h-[300px] md:h-[400px] object-cover object-center rounded-2xl"
              />
            </div>
            {/* Thumbnails */}
            <div className="w-full flex justify-between gap-2 max-w-[600px]">
              {images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={`w-1/4 aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    currentImage === image ? 'border-indigo-500' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white px-6 py-6 rounded-2xl shadow-xl w-full max-w-[350px] md:max-w-[280px] lg:max-w-[350px] xl:max-w-[350px] self-start mx-auto lg:mx-0">
            <h1 className="font-bold text-lg text-center mb-3">Access All Member Benefits</h1>
            <img className="h-[150px] mx-auto mt-2" src={regular} alt="" />
            <div className="space-y-4 mt-4">
              <div className='flex gap-3'>
                <img className='h-[30px]' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                <h1>Gym Facility Access</h1>
              </div>
              <div className='flex gap-3'>
                <img className='h-[30px]' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                <h1>All Class Enrollment</h1>
              </div>
              <div className='flex gap-3'>
                <img className='h-[30px]' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                <h1>Workshop & Discount</h1>
              </div>
              <div className='flex gap-3'>
                <img className='h-[30px]' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                <h1>Personal Training Session</h1>
              </div>
            </div>
            <button
              onClick={handleButtonClick}
              className="w-full text-white bg-indigo-500 hover:bg-indigo-600 rounded-full px-4 py-2 mt-6 font-semibold"
            >
              Become Member
            </button>
          </div>
        </div>

{/* central park        */}
         <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between gap-8 mt-10">
          
          <div className="w-full lg:w-[600px] flex flex-col gap-8 self-start mx-auto lg:mx-0">
          

            <div className="w-[95%] max-w-2xl mx-auto bg-white  px-6 md:px-10 py-4 shadow-sm font-sans text-slate-900  rounded-xl mb-7">
            
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-6">
                      <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{gym?.name}</h1>
                        <div className="flex items-center gap-1 mt-1 text-gray-400">
                           <img
                            src="https://img.icons8.com/?size=100&id=52671&format=png&color=000000"
                            alt=""
                            className="h-[25px]"
                          />
                          <span className="text-sm md:text-base">{gym?.gymLocation?.name}</span>
                        </div>
                      </div>
                      <span className="bg-[#EB6A6A] text-white px-4 py-1.5 rounded-2xl text-xs font-bold shadow-sm">
                        Populer
                      </span>
                    </div>
            
                    {/* Facilities Section */}
                    <div className="mb-6">
                      <h2 className="text-lg font-extrabold mb-3">Facilities Available</h2>
                      <div className="border-t border-gray-100 pt-5 grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
                        {gym?.facilities?.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-12 h-12 shrink-0  rounded-full flex items-center justify-center overflow-hidden">
                              <img src={`${imageUrl}${item.icons?.[0]}`} alt={item.name} className="w-full h-full object-contain p-2" />
                            </div>
                            <div>
                              <p className="font-extrabold text-[14px] leading-tight">{item.name}</p>
                              <p className="text-[10px] text-gray-400 font-medium uppercase">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
            
                    {/* Description Section */}
                    <div className="mb-6">
                      <h2 className="text-lg font-extrabold mb-3">Description</h2>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-[#333] leading-snug text-sm md:text-[15px] opacity-90">
                          {gym?.description || 'No description available.'}
                        </p>
                      </div>
                    </div>
            
                    {/* Footer Info Section */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-2">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14  rounded-full flex items-center justify-center shrink-0">
                           <img src={operationalIcon} alt="Opening Work" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base leading-tight">Opening Work</h3>
                         {/* <img src={operationalIcon} alt="Opening Work" className="w-8 h-8 object-contain" /> */}
                        </div>
                      </div>
            
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14  rounded-full flex items-center justify-center shrink-0">
                         <img src={addressIcon} alt="Address" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="max-w-[240px]">
                          <h3 className="font-extrabold text-base leading-tight">Detail Address</h3>
                          <p className="text-gray-400 text-[12px] font-medium leading-tight mt-0.5">
                            {gym?.gymLocation?.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>



            {/* HappyStories*/}
             <div className="bg-white shadow-2xl rounded-xl px-6 py-8 w-full">
              <div className="mb-8 text-left">
                <h1 className="font-bold text-3xl mb-2 text-gray-900">Happy Stories</h1>
                <p className="text-sm font-light text-gray-500">
                  What they said about this gym location, facilities, and environment
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {testimonials.map((items, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg px-4 py-4 h-full flex flex-col justify-between"
                  >
                    <div className="flex items-center mb-3">
                      <img
                        className="h-[45px] w-[45px] rounded-full object-cover"
                        src={items.img}
                        alt={items.name}
                      />
                      <div className="ml-3">
                        <h1 className="font-bold text-base">{items.name}</h1>
                        <p className="text-xs text-gray-500">{items.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 font-light mb-3 text-sm leading-relaxed">
                      {items.text}
                    </p>
                    <div>
                      {rating && <img src={rating} alt="Rating" className="h-[20px] w-auto" />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-3 flex justify-center">
                <button className="bg-black text-white rounded-full px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </div>

       
          <div className="w-full lg:w-[350px] xl:w-[350px] bg-white rounded-xl shadow-2xl h-[180px] px-6 py-5 self-start mx-auto lg:mx-0 lg:mt-0">
            <h1 className="font-black text-xl mb-3">Contact Person</h1>
            <hr className="border-t border-gray-300 w-full mb-4" />
            <div className="flex items-center">
              <img
                className="h-[50px] w-[50px] rounded-full object-cover"
                src={profile}
                alt="Profile Picture"
              />
              <div className="ml-4">
                <h1 className="font-black text-lg">Lilli Marliin</h1>
                <p className="text-gray-400 text-sm">021-0200-9911</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Swiper;