import React from 'react'
import vector from '../../assets/Vector.png'

const CheckoutPage = () => {
    return (
        <>
            <div className='relative bg-sky-200 h-[350px] mb-[1000px]'>


                <div className='absolute bg-white px-5 py-2.5 top-[230px] md:top-[300px]
  md:w-[600px] md:h-[250px] left-1/2 transform -translate-x-1/2
  rounded-lg shadow-xl lg:left-auto lg:-translate-x-0 lg:right-[40%] lg:ml-[100px]'>
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
  lg:w-[300px] lg:top-[300px] lg:left-[calc(50%+220px)] lg:ml-[100px]'>
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

            </div>





        </>
    )
}

export default CheckoutPage