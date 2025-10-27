import React from 'react'
import { parkdata } from '../../data/centralParkdata'
import operation from '../../assets/Operational Time.png'
import address from '../../assets/Address.png'
import profile from '../../assets/Profile 4.png'
const CentralParkCard = () => {
    return (
        <>
            <div className='md:flex mb-10 grid grid-cols-1 '>
              <div className="bg-gray-50 rounded-xl shadow-2xl px-4 sm:px-6 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%] mx-auto py-8">


                    <div className='flex justify-between mb-7'>
                        <div>
                            <h2 className="font-bold text-xl text-gray-900">Fitcamp Central Park</h2>

                            <p className="text-sm font-light text-gray-500 flex items-center ">
                                <img
                                    src="https://img.icons8.com/?size=100&id=52671&format=png&color=000000"
                                    alt="location"
                                    className="h-[16px] w-[16px] mr-1"
                                />
                                Central Park, Jakarta Barat
                            </p>
                        </div>
                        <div>
                            <button className='bg-red-500 text-white px-3 py-2 rounded-full'>popular</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold'>Facilities Available</h1>
                    </div>
                    <hr className="border-t border-gray-400 mt-3" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-12'>
                        {parkdata.map((card, index) => (
                            <div key={index} className='flex justify-center py-4'>
                                <img className='h-[45px] ' src={card.image} alt="" />
                                <div className='ml-2 '>
                                    <h1 className='font-extrabold'>{card.name}</h1>
                                    <p className='text-gray-500'>{card.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className='font-extrabold'>Description</h1>
                        <hr className="border-t border-gray-300 mt-3" />
                        <p className='mt-2'>Welcome to Fitcamp Central Park, your top choice for fitness in the city Our gym features.
                            modern equipment, a variety of group classes and comfortable amenities. Whether you’re
                            into cardio, strength training, or group workouts, we’ve got you covered, enjoy our clean
                            locker rooms, relaxing sauna, and easy access to all gym location.</p>
                    </div>
                    <div className='flex'>
                        <div className="flex gap-3 mt-2.5 px-2">
                            <img className="h-[45px]" src={operation} alt="" />
                            <div>
                                <p className="font-semibold text-gray-900">Opening Work</p>
                                <p className="text-sm text-gray-400">05:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-2.5 px-2 ml-6">
                            <img className="h-[45px]" src={address} alt="" />
                            <div>
                                <p className="font-semibold text-gray-900">Detail Address</p>
                                <p className="text-sm text-gray-400">Litjen S. Parman St No.Kav. 28. Tanjing <br />
                                    Duren Utara. Grogol Petamburan, Jakarta <br />
                                    barat, Jakarat 11470</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 rounded-xl h-[200px] w-[300px] mr-12 mt-6 mx-auto'>
                   <h1 className='font-black ml-6 pt-5'>Contact Person</h1>
                   <hr className="border-t border-gray-400 mt-3 w-[250px] mx-auto" />
                   <div className='flex mt-5 ml-6'>
                        <img  src={profile} alt="" />
                   </div>
                </div>

            </div>
        </>
    )
}

export default CentralParkCard