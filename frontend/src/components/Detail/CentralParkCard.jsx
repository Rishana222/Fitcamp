import React from 'react'
import { parkdata } from '../../data/centralParkdata'
import operation from '../../assets/Operational Time.png'
import address from '../../assets/Address.png'
import profile from '../../assets/Profile 4.png'
import { useQuery } from '@tanstack/react-query';
import { getFacility } from '../../utils/facilityApi'

const CentralParkCard = () => {

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["getFacility"],
  //   queryFn: () => getFacility(),
  // });


  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start lg:gap-[60px] w-full mt-[100px] md:mt-[150px] lg:mt-[120px] xl:mt-[80px] lg:ml-[60px] xl:ml-[150px]">
        <div className="bg-white rounded-xl shadow-2xl px-4 sm:px-6 py-8 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
          <div className="flex flex-col sm:flex-row justify-between mb-7 items-start sm:items-center">
            <div>
              <h2 className="font-bold text-2xl text-gray-900">Fitcamp Central Park</h2>
              <p className="text-sm font-light text-gray-500 flex items-center mt-1">
                <img
                  src="https://img.icons8.com/?size=100&id=52671&format=png&color=000000"
                  alt="location"
                  className="h-[16px] w-[16px] mr-1"
                />
                Central Park, Jakarta Barat
              </p>
            </div>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm mt-3 sm:mt-0">Popular</button>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="font-bold text-lg">Facilities Available</h1>
          </div>
          <hr className="border-t border-gray-300 mt-3" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-x-8 mt-5">
         {data?.data?.data?.map((item) => (
              <div key={item._id} className="flex items-center">
                <img
                  className="h-[40px] w-[40px] object-contain"
                  src={item.image}
                  alt={item.name}
                />
                <div className="ml-3">
                  <h1 className="font-extrabold text-sm">{item.name}</h1>
                  <p className="text-gray-500 text-xs">{item.description}</p>

                  <div className="flex gap-1 mt-1">
                    {Array.isArray(item.icons) &&
                      item.icons.map((icon, i) => (
                        <img
                          key={i}
                          src={icon}
                          className="h-[15px] w-[15px]"
                          alt="icon"
                        />
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h1 className="font-extrabold text-lg">Description</h1>
            <hr className="border-t border-gray-300 mt-3" />
            <p className="mt-3 font-light text-gray-700 leading-relaxed text-sm">
              Welcome to Fitcamp Central Park, your top choice for fitness in the city. Our gym features
              modern equipment, a variety of group classes, and comfortable amenities. Whether you’re into cardio,
              strength training, or group workouts, we’ve got you covered. Enjoy our clean locker rooms,
              relaxing sauna, and easy access to all gym locations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row mt-6 gap-y-4 sm:gap-y-0 sm:gap-x-12">
            <div className="flex gap-3 items-center">
              {operation && <img className="h-[45px] w-[45px] object-contain" src={operation} alt="Operation Hours Icon" />}
              <div>
                <p className="font-semibold text-gray-900 text-base">Opening Work</p>
                <p className="text-sm text-gray-400">05:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              {address && <img className="h-[45px] w-[45px] object-contain" src={address} alt="Address Icon" />}
              <div>
                <p className="font-semibold text-gray-900 text-base">Detail Address</p>
                <p className="text-sm text-gray-400">
                  Litjen S. Parman St No.Kav. 28. Tanjing <br />
                  Duren Utara. Grogol Petamburan, Jakarta <br />
                  Barat, Jakarta 11470
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Person  */}
        <div className="bg-white rounded-xl shadow-2xl h-[180px] w-full max-w-[90%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-[250px] xl:max-w-[250px] lg:mt-0 xl:mt-0 px-6 py-5">
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
    </>
  )
}

export default CentralParkCard