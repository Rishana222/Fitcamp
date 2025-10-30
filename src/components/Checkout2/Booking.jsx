import React from 'react'

const Booking = () => {
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

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Full Name</span>
          <span className="font-medium text-gray-800">Peri Ariento</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Phone Number</span>
          <span className="font-medium text-gray-800">085234874120</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Email</span>
          <span className="font-medium text-gray-800">FurikHer233@gmail.com</span>
        </div>
      </div>
    </div>

    {/* TRANSFER TO (SUMMARY BOX) */}
    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl h-fit">
      <h2 className="font-bold text-lg mb-2">Transfer To</h2>
      <p className="text-gray-500 text-sm mb-4">Select one of two banks below</p>
      <hr className="border-t border-gray-300 mb-4" />

      {/* bank list */}
      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3 bg-sky-100 rounded-lg px-3 py-2">
          <img className="h-6 w-6" src="https://img.icons8.com/?size=100&id=89936&format=png&color=000000" alt="" />
          <div>
            <h3 className="font-semibold text-sm">Fitneamp Corporation</h3>
            <p className="text-xs text-gray-600">23823823823</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-sky-100 rounded-lg px-3 py-2">
          <img className="h-6 w-6" src="https://img.icons8.com/?size=100&id=100561&format=png&color=000000" alt="" />
          <div>
            <h3 className="font-semibold text-sm">Fitneamp Mandiri</h3>
            <p className="text-xs text-gray-600">23823823823</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Transfer Proof</label>
        <input
          type="file"
          className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <button className="text-white bg-indigo-500 w-full px-4 py-2 mt-3 rounded-full hover:bg-indigo-600 transition duration-300">
        Checkout
      </button>
    </div>

    {/* BOOKING DETAILS */}
    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-8 lg:mt-0">
      <h1 className="font-bold text-lg mb-2">Booking ID: <span className="text-blue-600">10238</span></h1>
      <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <img className="h-10 w-10" src="https://img.icons8.com/?size=100&id=7643&format=png&color=000000" alt="" />
          <div>
            <h3 className="font-bold text-base">Regular Package Plan</h3>
            <p className="text-sm text-gray-500">3 Month - All Benefits Include</p>
          </div>
        </div>
        <p className="font-semibold text-gray-800">Rp 220.890</p>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-600">Subtotal</span>
        <span>Rp 220.890</span>
      </div>

      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-600">Promo Code</span>
        <span className="text-red-600">- Rp 0</span>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <div className="flex justify-between items-center font-bold bg-sky-100 rounded-xl px-4 py-3 text-base">
        <span>Total Payment</span>
        <p>Rp 220.890</p>
      </div>
    </div>

  </div>
</div>

    </>
  )
}

export default Booking