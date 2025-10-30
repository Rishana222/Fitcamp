import React from 'react'
import regular from '../../assets/Group 38.png'
import vector from '../../assets/Vector.png'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
    const Navigate = useNavigate();
    const handleCheckoutClick = ()=>(
        Navigate('/booking')
    )
    return (
        <>
          <div className="relative bg-sky-200 h-[350px] mb-[1100px] sm:mb-[990px] lg:mb-[480px]">
      <div className="absolute inset-x-0 top-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* ACCOUNT DETAILS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-24 lg:mt-0">
          <h1 className="font-bold text-lg mb-2">Account Details</h1>
          <p className="text-gray-500 text-sm mb-4">
            Fill your data and make sure your contact before checkout
          </p>
          <hr className="border-t border-gray-300 mb-4" />

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm" htmlFor="fullname">Full Name :</label>
              <input
                className="border border-gray-300 rounded-lg text-gray-700 px-3 py-2 flex-1 w-full text-xs focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                id="fullname"
                placeholder="Input full name of yourself"
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm" htmlFor="phone">Phone Number :</label>
              <input
                className="border border-gray-300 rounded-lg text-gray-700 px-3 py-2 flex-1 w-full text-xs focus:ring-indigo-500 focus:border-indigo-500"
                type="number"
                id="phone"
                placeholder="Input valid phone number"
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm" htmlFor="email">Email :</label>
              <input
                className="border border-gray-300 rounded-lg text-gray-700 px-3 py-2 flex-1 w-full text-xs focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                id="email"
                placeholder="Input your valid email address"
              />
            </div>
          </form>
        </div>

        {/* SUMMARY BOX */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl h-fit">
          <h2 className="font-bold text-lg mb-2">Summary</h2>
          <p className="text-gray-500 text-sm mb-4">Quick snapshot, review your bill</p>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between mb-2 text-sm">
            <h1 className="font-bold">Subtotal</h1>
            <h1>Rp 199.000</h1>
          </div>
          <div className="flex justify-between mb-4 text-sm">
            <h1 className="font-bold">Tax 11%</h1>
            <h1>Rp 21.890</h1>
          </div>
          <hr className="border-t-2 border-dashed border-gray-400 my-4" />
          <div className="flex justify-between mb-4 text-base">
            <h1 className="font-bold">Total</h1>
            <h1 className="font-bold">Rp 220.890</h1>
          </div>
          <button onClick={handleCheckoutClick} className="text-white bg-indigo-500 w-full px-4 py-2 mt-3 rounded-full hover:bg-indigo-600 transition duration-300">Checkout</button>

          <div className="flex justify-between items-center mt-4 bg-sky-100 rounded-lg px-4 py-2">
            <img className="h-6 w-6" src="https://img.icons8.com/?size=100&id=118287&format=png&color=000000" alt="Coupon Icon" />
            <h1 className="font-bold text-sm text-gray-800">Use Promo Code</h1>
            
            <img className="h-5 w-5" src={vector} alt="" />
          </div>
        </div>

        {/* BOOKING DETAILS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-8 lg:mt-0">
          <h1 className="font-bold text-lg mb-2">Booking Details</h1>
          <p className="text-sm text-gray-500 mb-4">Your next workout awaits, check booking details</p>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center mb-4 sm:mb-0">
             
              <img className="mr-3 h-10 w-10" src={regular} alt="Plan Icon" />
              <div>
                <h1 className="font-bold text-base">Regular Package Plan</h1>
                <p className="text-gray-500 text-sm">3 Month - All Benefits Included</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="font-bold text-base">Rp 199.000</p>
              <img className="h-8 w-8" src="https://img.icons8.com/?size=100&id=GGOtccjoJgmr&format=png&color=000000" alt="Delete Icon" />
            </div>
          </div>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex justify-between font-bold bg-sky-100 rounded-xl px-4 py-3 text-lg">
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