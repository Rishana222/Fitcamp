import React from 'react'
import { gyms } from '../../data/gymdatas'


const LatestAdded = () => {

  // console.log("gyms:::",gyms)

  return (
    <>
      <div className="flex sm:flex-row justify-between items-start sm:items-center mb-6 px-4 sm:px-11 lg:px-24">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black">
            Latest Added
          </h2>
          <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg font-light text-gray-500">
            New gyms from around the city with variety facilities available
          </p>
        </div>

        <button className="bg-black text-white rounded-full px-6 py-1.5 text-xs sm:text-sm mt-3 sm:mt-0 hover:bg-gray-900 ">
          See All
        </button>
      </div>
      {/* mapping */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 lg:px-12 xl:px-20 mb-14">
  {gyms.map((it, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-6 max-w-[380px] mx-auto"
    >
      <h2 className="text-lg font-extrabold text-gray-800 mb-1.5">{it.name}</h2>

      <div className="flex items-center gap-2">
        <img
          src="https://img.icons8.com/?size=100&id=52671&format=png&color=000000"
          alt=""
          className="h-[35px]"
        />
        <p className="text-gray-500 text-sm sm:text-base">{it.location}</p>
      </div>

      <img
        src={it.image}
        alt=""
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
        {it.facilities.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-lg p-2"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <img src={f.icons} alt="" className="h-[45px] object-contain" />
            </div>
            <p className="text-sm font-bold text-gray-800 mt-2">{f.name}</p>
            <p className="text-xs text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-400 mt-3" />

      <div className="flex gap-3 mt-2.5 px-2">
        <img className="h-[45px]" src={it.icon} alt="" />
        <div>
          <p className="font-semibold text-gray-900">Opening Work</p>
          <p className="text-sm text-gray-400">05:00 AM - 11:00 PM</p>
        </div>
      </div>
    </div>
  ))}
</div>


    </>
  )
}

export default LatestAdded