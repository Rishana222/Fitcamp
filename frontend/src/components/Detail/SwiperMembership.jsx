import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import regular from '../../assets/Regular.png';
import gym1 from '../../assets/Gym 2 (3).png';
import gym2 from '../../assets/gym-526995_1280.jpg';
import gym3 from '../../assets/home-workout-5031689_1280.jpg';
import gym4 from '../../assets/towels-4537954_1280.jpg';

const SwiperMembership = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(gym1);

  const images = [gym1, gym2, gym3, gym4];

  const handleButtonClick = () => {
    navigate('/subscription');
  };

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-sky-200 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between gap-8 mb-10 pt-12 lg:pt-0 lg:mt-[80px] md:mt-[50px] mt-[150px]">
          
          {/* Image Swiper */}
          <div className="w-full lg:w-[600px] flex flex-col items-center lg:items-start self-start">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-4 max-w-[600px]">
              <img
                src={currentImage}
                alt="Main Gym View"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
              />
            </div>

            <div className="w-full flex justify-between gap-2 max-w-[600px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(image)}
                  className={`w-1/4 aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 ${
                    currentImage === image ? 'border-indigo-500' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Access Membership */}
          <div className="bg-white px-6 py-6 rounded-2xl shadow-xl w-full max-w-[350px] self-start mx-auto lg:mx-0">
            <h1 className="font-bold text-lg text-center mb-3">
              Access All Member Benefits
            </h1>

            <img className="h-[150px] mx-auto mt-2" src={regular} alt="" />

            <div className="space-y-4 mt-4">
              {[
                'Gym Facility Access',
                'All Class Enrollment',
                'Workshop & Discount',
                'Personal Training Session',
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img
                    className="h-[30px]"
                    src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000"
                    alt=""
                  />
                  <h1>{item}</h1>
                </div>
              ))}
            </div>

            <button
              onClick={handleButtonClick}
              className="w-full text-white bg-indigo-500 hover:bg-indigo-600 rounded-full px-4 py-2 mt-6 font-semibold"
            >
              Become Member
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SwiperMembership;