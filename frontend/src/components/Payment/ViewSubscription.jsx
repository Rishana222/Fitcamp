import React from 'react'
import id from '../../assets/Booking ID.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ViewSubscription = () => {
    const Navigate = useNavigate();
    const [bookingId, setBookingId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleTicketclick = () => (
        Navigate('/ticket', { state: { bookingId, phoneNumber } })
    )
    return (
        <>
            <div className='relative bg-sky-200 h-[350px] flex justify-center mb-[450px]'>
                <div className='rounded-xl absolute bg-white md:px-24 sm:px-16 px-7 py-14 md:top-[180px] top-[250px] ax-w-full sm:max-w-[700px] h-[550px] shadow-2xl '>
                    <img className='h-[150px] lg:h-[200px]' src={id} alt="" />
                    <h1 className='font-bold text-center mt-5 text-2xl'>View Subscription</h1>
                    <div className="flex flex-col  items-start  gap-2 text-left mt-3">
                        <label className="font-bold w-full md:w-36 text-sm " htmlFor="phone" >Booking ID</label>
                        <input
                            className="border border-gray-300 rounded-lg text-gray-700 px-3 py-2 flex-1 w-full text-xs focus:ring-indigo-500 focus:border-indigo-500"
                            type="number"
                            value={bookingId}
                            onChange={(e) => setBookingId(e.target.value)}
                            id="phone"
                            placeholder="Inpiut your Booking ID from transaction"
                        />
                    </div>
                    <div className="flex flex-col  items-start  gap-2 text-left mt-3">
                        <label className="font-bold w-full md:w-36 text-sm " htmlFor="phone" >Phone Number :</label>
                        <input
                            className="border border-gray-300 rounded-lg text-gray-700 px-3 py-2 flex-1 w-full text-xs focus:ring-indigo-500 focus:border-indigo-500"
                            type="number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            id="phone"
                            placeholder="Input your phone number base on transaction"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleTicketclick} className='text-white bg-indigo-400 mt-5 px-5 rounded-full py-1'>Search My Subscription</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewSubscription