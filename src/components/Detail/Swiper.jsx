import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import regular from '../../assets/Regular.png';
import gym1 from '../../assets/Gym 1.png';
import gym2 from '../../assets/Gym 2.png';
import gym3 from '../../assets/Gym 3.png';
import gym4 from '../../assets/Gym 4.png';

const Swiper = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(gym1);

  const images = [gym1, gym2, gym3, gym4];

  const handleButtonClick = () => {
    navigate('/subscription');
  };

  return (
    <div className="relative pt-20 bg-sky-200 h-[350px] pb-10 lg:mb-[550px] mb-[890px] sm:mb-[1010px] ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 px-6 mt-[150px]">

        {/* ---------- Left: Image Gallery Section ---------- */}
        <div className="w-full lg:w-[55%] flex flex-col items-center">
          {/* Main Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg mb-4">
            <img src={currentImage} alt="Main Gym View" className="w-full h-auto object-cover" />
          </div>

          {/* Thumbnails */}
          <div className="flex justify-between w-full mt-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-1/4 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${currentImage === image ? 'border-indigo-500' : 'border-transparent'
                  }`}
                onClick={() => setCurrentImage(image)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right: Benefits Section ---------- */}
        <div className="bg-white px-6 py-6 rounded-2xl shadow-xl w-full sm:w-[80%] md:w-[70%] lg:w-[35%]">
          <h1 className="font-bold text-lg text-center mb-3">Access All Member Benefits</h1>
          <img className="h-[150px] mx-auto mt-2" src={regular} alt="" />

          <div className="space-y-4 mt-4">
            {[
              "Gym Facility Access",
              "All Class Enrollment",
              "Workshop & Discount",
              "Personal Training Session",
            ].map((benefit, i) => (
              <div className="flex items-center" key={i}>
                <img
                  src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000"
                  className="h-[30px]"
                  alt=""
                />
                <h1 className="ml-3">{benefit}</h1>
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
  );
};

export default Swiper;
