import React, { useEffect } from 'react';
import regular from '../../assets/Group 38.png';
import vector from '../../assets/Vector.png';
import { useNavigate, useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const packageData = location.state?.packageData;

 
  useEffect(() => {
    if (!packageData) {
      navigate('/subscribe');
    }
  }, [packageData, navigate]);

 
  if (!packageData) return null;

  
  const subtotal = Number(packageData.amount);
  const tax = +(subtotal * 0.11).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const handleCheckoutClick = () => navigate('/booking');

  return (
    <div className="relative bg-sky-200 h-[350px] mb-[1100px] sm:mb-[990px] lg:mb-[480px]">
      <div className="absolute inset-x-0 top-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">

        {/* Account Details */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-24 lg:mt-0">
          <h1 className="font-bold text-lg mb-2">Account Details</h1>
          <p className="text-gray-500 text-sm mb-4">
            Fill your data and make sure your contact before checkout
          </p>
          <hr className="border-t border-gray-300 mb-4" />

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm">Full Name :</label>
              <input className="border border-gray-300 rounded-lg px-3 py-2 w-full text-xs" />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm">Phone Number :</label>
              <input className="border border-gray-300 rounded-lg px-3 py-2 w-full text-xs" />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm">Email :</label>
              <input className="border border-gray-300 rounded-lg px-3 py-2 w-full text-xs" />
            </div>
          </form>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl h-fit">
          <h2 className="font-bold text-lg mb-2">Summary</h2>
          <hr className="border-t border-gray-300 mb-4" />

          <div className="flex justify-between mb-2 text-sm">
            <h1 className="font-bold">Subtotal</h1>
            <h1>Rp {subtotal.toFixed(2)}</h1>
          </div>

          <div className="flex justify-between mb-4 text-sm">
            <h1 className="font-bold">Tax 11%</h1>
            <h1>Rp {tax.toFixed(2)}</h1>
          </div>

          <hr className="border-t-2 border-dashed border-gray-400 my-4" />

          <div className="flex justify-between mb-4 text-base">
            <h1 className="font-bold">Total</h1>
            <h1 className="font-bold">Rp {total.toFixed(2)}</h1>
          </div>

          <button
            onClick={handleCheckoutClick}
            className="text-white bg-indigo-500 w-full px-4 py-2 rounded-full"
          >
            Checkout
          </button>
        </div>

        {/* Booking Details */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-8 lg:mt-0">
          <h1 className="font-bold text-lg mb-2">Booking Details</h1>
          <hr className="border-t border-gray-300 mb-4" />

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-3 h-10 w-10" src={regular} alt="" />
              <div>
                <h1 className="font-bold">{packageData.title}</h1>
                <p className="text-gray-500 text-sm">
                  {packageData.duration} - All Benefits Included
                </p>
              </div>
            </div>
            <p className="font-bold">{subtotal.toFixed(2)}</p>
          </div>

          <hr className="border-t border-gray-300 my-4" />

          <div className="flex justify-between font-bold bg-sky-100 rounded-xl px-4 py-3 text-lg">
            <h1>Total</h1>
            <p>{total.toFixed(2)}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
