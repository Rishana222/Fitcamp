import React from 'react'
import { gyms } from '../../data/gymdatas'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { getGym } from '../../utils/gymApi';


const Card = () => {
  const Navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['gyms'],
    queryFn: getGym
  });


console.log({data});




  const handleDetailClick = () => {
    Navigate('/detail')
  }

  return (
    <>
      {/* mapping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-y-6 p-6 lg:px-12 xl:px-20 mb-14">
        {data?.data?.map((item) => (
          <div
            key={item._id}
            onClick={() => handleDetailClick(item._id)}
            className="bg-white rounded-2xl shadow-lg p-6 max-w-[380px] mx-auto"
          >
            <h2 className="text-lg font-extrabold text-gray-800 mb-1.5">{item.name}</h2>

            <div className="flex items-center gap-2">
              <img
                src="https://img.icons8.com/?size=100&id=52671&format=png&color=000000"
                alt=""
                className="h-[35px]"
              />
              <p className="text-gray-500 text-sm sm:text-base">
                {item.gymLocation?.name}
              </p>
            </div>

            <img
              src={`http://localhost:5000/${item.image}`}
              alt={item.name}
              className="mt-4 w-full h-auto rounded-xl object-cover"
            />

            <div className="flex justify-between mt-7 items-center">
              <h1 className="font-bold">Facilities</h1>
              <a className="text-blue-500" href="#">
                View All
              </a>
            </div>

            {/*grid mapping ) */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {item.facilities?.map((f, i) => (
                <div key={i} className="flex flex-col items-center justify-center rounded-lg p-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                   <img src={`http://localhost:5000/${f.icons?.[0]}`}alt="" className="h-[45px] object-contain" /> 
                  </div>
                  <p className="text-sm font-bold text-gray-800 mt-2">{f.name}</p>
                  <p className="text-xs text-gray-500">{f.description}</p>
                </div>
              ))}
            </div>
            <hr className="border-t border-gray-400 mt-3" />
            <div className="flex gap-3 mt-2.5 px-2">
              <img className="h-[45px]" src={`http://localhost:5000/${item.icon}`} alt="" />
              <div>
                <p className="font-semibold text-gray-900">Opening Work</p>
                <p className="text-sm text-gray-400">{item.openingWork || '05:00 AM - 11:00 PM'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card