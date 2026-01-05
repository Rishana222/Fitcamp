import React from 'react'
import subscribe from '../../assets/Subscribe.png'
import { sData } from '../../data/subscriptiondata'
import { useNavigate } from 'react-router-dom'

const Package = () => {
    const Navigate = useNavigate();
    const handleSubscribeClick = (packageData) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            Navigate("/login");
            return;
        }
        Navigate("/checkout", { state: { packageData } });
    };
    return (
        <>
            <div className="pt-32 mb-10 ">
                <div className="relative flex justify-center mt-24 lg:mt-8 mb-[1000px] sm:mb-[310px] md:mb-[50px]">
                    <img src={subscribe} alt="" className="mx-auto w-full max-w-[1100px] lg:h-[600px]  px-4 " />
                    <div className="absolute inset-0 flex flex-col items-center text-center sm:pt-10 pt-12 px-6">
                        <h1 className="text-4xl font-bold text-black mb-8  "> Subscribe Package </h1>
                        <p className='text-gray-600 text-xs lg'>Find the perfect plan, explore our subscription packages. Discover the bes package for you</p>

                        <div className=" max-w-[950px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-2 lg:mt-8 lg:gap-5">
                            {sData.map((s, index) => (
                                <div key={index} className='bg-white rounded-xl px-3 py-3 shadow-2xl pt-6'>
                                    <img src={s.img} className='w-full object-cover rounded-lg h-[95px] md:h-[115px] ' alt="" />
                                    <h1 className='text-xs text-left mt-2 font-bold'>{s.title}</h1>
                                    <p className='text-left text-gray-400 text-xs font-light'>{s.desc}</p>
                                    <div className='flex mt-2 '>
                                        <img className=' h-[20px] ' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                                        <h1 className='ml-4 text-xs' >{s.text1}</h1>
                                    </div>
                                    <div className='flex mt-2'>
                                        <img className=' h-[20px] ' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                                        <h1 className='ml-4 text-xs' >{s.text2}</h1>
                                    </div>
                                    <div className='flex mt-2'>
                                        <img className=' h-[20px] ' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                                        <h1 className='ml-4 text-xs' >{s.text3}</h1>
                                    </div>
                                    <div className='flex mt-2 mb-2'>
                                        <img className=' h-[20px] ' src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000" alt="" />
                                        <h1 className='ml-4 text-xs' >{s.text4}</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button onClick={() => handleSubscribeClick(s)}className='bg-indigo-500 mt-1 text-white px-3 py-1 rounded-full '>Subscribe</button>
                                        <div className='text-xs'>
                                            <p className='font-black'>{s.rp}</p>
                                            <p className='text-gray-500'>{s.duration}</p>
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Package