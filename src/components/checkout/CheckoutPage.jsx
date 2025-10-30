import React from 'react'
import vector from '../../assets/Vector.png'
import plan from '../../assets/Group 38.png'

const CheckoutPage = () => {
    return (
        <>
            <div className='relative bg-sky-200 h-[350px] mb-[740px] sm:mb-[610px] lg:mb-[310px] lg:'>
                
                
                    <div className='absolute bg-white px-5 py-6  top-[230px] md:top-[300px] md:w-[600px] md:h-[250px] left-1/2 transform -translate-x-1/2
  rounded-lg shadow-xl lg:left-auto lg:-translate-x-0 lg:right-[40%] lg:ml-[100px] '>
                        <h1 className='font-bold mb-2'>Account Details</h1>
                        <p className='text-gray-500 text-xs mb-2'>
                            Fill your data and make sure your contact before checkout
                        </p>
                        <hr className='border-t text-gray-500 mt-3.5' />

                        <form className='flex flex-col md:flex-row mt-4 gap-2'>
                            <label className='font-bold md:w-[150px]' htmlFor="fullname">Full Name :</label>
                            <input className='border rounded-lg text-gray-700 px-3 py-2 flex-1 min-w-0 text-xs'
                                type="text" id="fullname" placeholder='Input full name of yourself' />
                        </form>

                        <form className='flex flex-col md:flex-row mt-4 gap-2'>
                            <label className='font-bold md:w-[150px]' htmlFor="phone">Phone Number :</label>
                            <input className='border rounded-lg text-gray-700 px-3 py-2 flex-1 min-w-0 text-xs'
                                type="number" id="phone" placeholder='Input valid phone number' />
                        </form>

                        <form className='flex flex-col md:flex-row mt-4 gap-2'>
                            <label className='font-bold md:w-[150px]' htmlFor="email">Email :</label>
                            <input className='border rounded-lg text-gray-700 px-3 py-2 flex-1 min-w-0 text-xs'
                                type="email" id="email" placeholder='Input your valid email address' />
                        </form>
                    </div>

                    <div className='absolute bg-white px-5 py-4 top-[600px] md:top-[580px]
                  left-1/2 transform -translate-x-1/2 rounded-lg shadow-xl md:w-[600px]
  lg:w-[300px] lg:top-[300px] lg:left-[calc(50%+220px)] lg:ml-[100px] xl:ml-[180px] mt-4 '>
                        <h2 className='font-bold mb-2'>Summary</h2>
                        <p className='text-gray-500 text-sm'>Quick snapshot, review your bill</p>
                        <hr className='border-t mt-3 text-gray-500' />
                        <div className='flex justify-between mt-2'>
                            <h1 className='font-bold'>Subtotal</h1>
                            <h1>Rp 199.000</h1>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <h1 className='font-bold'>Tax 11%</h1>
                            <h1>Rp 21.890</h1>
                        </div>
                        <hr className="border-t-2 border-dashed border-gray-400 my-4" />
                        <div className='flex justify-between mt-2'>
                            <h1 className='font-bold'>Total</h1>
                            <h1 className='font-bold'>RRp 220.890</h1>
                        </div>
                        <button className='text-white bg-indigo-500 w-full px-3 py-2 mt-3 rounded-full'>Checkout</button>

                        <div className='flex justify-between mt-3 bg-sky-200 rounded-lg px-3 py-1.5'>
                            <img className='h-[35px]' src="https://img.icons8.com/?size=100&id=118287&format=png&color=000000" alt="" />
                            <h1 className='font-bold mt-0.5'>Use Promo Code</h1>
                            <img className='h-[25px] mt-0.5' src={vector} alt="" />
                        </div>
                    </div>


                    <div className='px-5 py-2 mt-3'>
                        <div className='bg-white shadow-lg px-6 py-2.5 rounded-lg max-w-[850px] mt-3'>
                            <h1 className='mt-2.5 font-bold mb-2'>Booking Details</h1>
                            <p className='text-xs text-gray-400 mt-2'>Your next workout awaits, check booking deatils</p>
                            <hr className='border-t mt-2.5 text-gray-400' />
                            <div className='flex justify-between mt-3'>
                                <div className='flex mt-3'>
                                    <img className='mr-1.5 h-[30px] mt-2' src={plan} alt="ghghghgh" />
                                    <div>
                                        <h1 className='font-bold'>Regular Package Plan</h1>
                                        <p className='text-gray-400'>3 Moont  -  All Benefit Include</p>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row mt-4 gap-x-2'>
                                    <p className='font-bold'>Rp 199.000</p>
                                    <img className='sm:h-[35px] h-[38px] w-[45px]' src="https://img.icons8.com/?size=100&id=GGOtccjoJgmr&format=png&color=000000" alt="" />

                                </div>
                            </div>
                            <hr className='border-t mt-2.5 text-gray-400' />
                            <div className='flex justify-between font-bold bg-sky-200 rounded-xl px-3 py-3 mt-4 mb-3 '>
                                <h1>Total</h1>
                                <p>Rp 199.000</p>
                            </div>
                        </div>
                    </div>
                




            </div>





        </>
    )
}

export default CheckoutPage