import React from 'react'



const LatestAdded = () => {

 

  return (
    <>
      <div className="flex sm:flex-row justify-between items-start sm:items-center mb-6 px-4 sm:px-11 lg:px-24 xl:ml-[25px]">
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



    </>
  )
}

export default LatestAdded