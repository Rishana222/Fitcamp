import React from 'react'
import {parkdata} from '../../data/centralParkdata'
const CentralParkCard = () => {
    return (
        <>
            <div className='flex mb-10'>
                <div className='bg-gray-50 rounded-xl shadow-2xl px-6 w-[500px] mx-auto py-4'>
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
                </div>

            </div>
        </>
    )
}

export default CentralParkCard