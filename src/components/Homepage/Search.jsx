import React from 'react'
import Header from '../../assets/Header Illustration.png';
import User from '../../assets/Icon User.png';
import Location from '../../assets/Location.png'
import Illustration from '../../assets/Illustration.png'
import Maintain from '../../assets/Maintain.png'

const Search = () => {
    return (
        <>

            <section className="relative w-full min-h-[900px] overflow-hidden bg-[#2cb4f5]">
                <div className="absolute inset-0 bg-grid opacity-40 z-0"></div>
                <img
                    className="object-cover w-full h-full absolute top-0 left-0 opacity-80"
                    src={Header}
                    alt="Header Illustration"
                />
                <div className="absolute top-[230px] left-1/2 -translate-x-1/2 text-center text-white z-10 w-[90%] md:w-auto">
                    <div className="bg-black py-2 px-4 rounded-full flex items-center justify-center w-fit mx-auto mb-5">
                        <img className="h-[30px] md:h-[35px] mr-2" src={User} alt="User" />
                        <h1 className="capitalize text-xs md:text-sm">
                            over 100k+ members joined
                        </h1>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize">
                        prioritize your health
                    </h1>
                    <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 capitalize">
                        transform your life by investing in your wellness
                    </p>
                    <div className="mt-8 bg-white text-black px-2 py-2 rounded-3xl w-[260px] sm:w-[300px] md:w-[400px] mx-auto flex items-center">
                        <input
                            className="w-full outline-none text-sm px-2"
                            type="search"
                            placeholder="Search gym location nearby"
                        />
                        <button className="bg-black text-white px-3 py-1.5 rounded-2xl text-sm hover:bg-gray-800">
                            Search
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 bg-white bottom-[-30px] overflow-visible text-black absolute w-[90%] left-1/2 transform -translate-x-1/2 shadow-2xl z-10'>
                    <div className='text-center py-3 mb-3'>
                        <img className='w-12 mx-auto mb-2' src={Location} alt="" />
                        <h1 className='capitalize font-medium'>find nearby location</h1>
                        <p>
                            Find the nearby gym that <br />
                            is near your location to transform <br />
                            your healthy journey
                        </p>
                    </div>

                    <div className='text-center py-3 mb-3'>
                        <img className='w-12 mx-auto mb-2' src={Illustration} alt="" />
                        <h1 className='capitalize font-medium'>Become Membership</h1>
                        <p>
                            Access all FitCamp gyms <br />
                            and become part of our exclusive <br />
                            healthy community.
                        </p>
                    </div>

                    <div className='text-center py-3 mb-3'>
                        <img className='w-12 mx-auto mb-2' src={Maintain} alt="" />
                        <h1 className='capitalize font-medium'>Maintain The Body</h1>
                        <p>
                            Ensure long-term wellness <br />
                            with effective healthy body <br />
                            maintenance strategies
                        </p>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Search


