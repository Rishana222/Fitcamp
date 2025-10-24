import React from 'react';
import { location } from '../../data/locationdata';
import { useNavigate } from 'react-router-dom'; 

const GymLocation = () => {
  const navigate = useNavigate();

 
  const handleCardClick = () => {
    navigate('/category');
  };

  return (
    <>
      <div className="mx-auto mb-7">
        <h1 className="text-2xl md:text-3xl capitalize font-medium px-5 md:px-11 mb-1 lg:px-14 xl:px-44">
          gym location
        </h1>
        <p className="md:px-11 px-5 text-gray-500 lg:px-14 xl:px-44 mb-6">
          Find the nearby gym that near your location to transform your healthy journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 px-4 place-items-center lg:px-20">
          {location.map((item, index) => (
            <div
              key={index}
              onClick={handleCardClick} 
              className="flex mb-4 bg-white shadow-2xl px-2 py-2 rounded-full xl:px-3 cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img src={item.image} alt={item.name} />
              <span className="ml-2 mt-2">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GymLocation;
