import React from 'react'
import { parkdata } from '../../data/centralParkdata'

const Parkcard = () => {
    return (
        <>
            <div className="w-[95%] max-w-2xl mx-auto bg-white rounded-[40px] px-6 md:px-10 py-4 shadow-sm font-sans text-slate-900 mt-[100px] mb-7">

                {/* Header Section - Tightened mb-6 */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Fitcamp Central Park</h1>
                        <div className="flex items-center gap-1 mt-1 text-gray-400">
                            <svg className="w-4 h-4 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm md:text-base">Central Park , Jakarta Barat</span>
                        </div>
                    </div>
                    <span className="bg-[#EB6A6A] text-white px-4 py-1.5 rounded-2xl text-xs font-bold shadow-sm">
                        Populer
                    </span>
                </div>

                {/* Facilities Section - Reduced divider padding and gap */}
                <div className="mb-6">
                    <h2 className="text-lg font-extrabold mb-3">Facilities Available</h2>
                    <div className="border-t border-gray-100 pt-5 grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
                        {parkdata.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-12 h-12 shrink-0  rounded-full flex items-center justify-center overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-[14px] leading-tight">{item.name}</p>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description Section - Compact spacing */}
                <div className="mb-6">
                    <h2 className="text-lg font-extrabold mb-3">Description</h2>
                    <div className="border-t border-gray-100 pt-4">
                        <p className="text-[#333] leading-snug text-sm md:text-[15px] opacity-90">
                            Welcome to Fitcamp Central Park, your top choice for fitness in the city Our gym features.
                            modern equipment, a variety of group classes and comfortable amenities. Whether you’re
                            into cardio, strength training, or group workouts, we’ve got you covered, enjoy our clean
                            locker rooms, relaxing sauna, and easy access to all gym location.
                        </p>
                    </div>
                </div>

                {/* Footer Info Section - Reduced icon sizes and gaps */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-2">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14  rounded-full flex items-center justify-center shrink-0">
                            <img src="src/assets/Operational Time.png" alt="Opening Work" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-base leading-tight">Opening Work</h3>
                            <p className="text-gray-500 text-sm font-medium">05:00 AM - 11:00 PM</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14  rounded-full flex items-center justify-center shrink-0">
                            <img src="src/assets/Address.png" alt="Address" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="max-w-[240px]">
                            <h3 className="font-extrabold text-base leading-tight">Detail Address</h3>
                            <p className="text-gray-400 text-[12px] font-medium leading-tight mt-0.5">
                                Litjen S. Parman St No.Kav. 28. Tanjng Duren Utara.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Parkcard
