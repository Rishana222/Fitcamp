import React from 'react'
import ticket from '../../assets/Frame 10 (1).png'

const Transaction = () => {
    return (
        <>
            <div className='relative bg-sky-200 h-[350px] flex justify-center mb-[450px]'>
              
                    <div className='rounded-xl absolute bg-white md:px-24 sm:px-16 px-7 py-14 md:top-[180px] top-[250px]  sm:max-w-[700px] h-[520px] shadow-2xl'>
                        <img className='h-[150px] lg:h-[200px]' src={ticket} alt="" />
                        <h1 className='font-bold text-center mt-5 text-2xl'>Transcation Ticket</h1>

                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Booking ID</h1>
                            <h1 className='text-blue-600'>10238</h1>
                        </div>
                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Started At</h1>
                            <h1 className=''>Aug 07, 2024</h1>
                        </div>
                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Ended At</h1>
                            <h1 className=''>No 07, 2024</h1>
                        </div>

                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Total Payment</h1>
                            <h1 className=''>Rp 220.890</h1>
                        </div>

                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Subtotal</h1>
                            <button className='text-white bg-green-500 rounded-full px-3 py-2'>Success</button>
                        </div>

                    </div>
                    
              
                
                

            </div>
        </>
    )
}

export default Transaction