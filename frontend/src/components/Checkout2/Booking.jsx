import React, { useEffect } from 'react';
import corporation from '../../assets/2425807_asia_bank_bca_central_indonesian_icon 1.png';
import mandiri from '../../assets/2425804_bank_indonesia_mandiri_icon 1.png';
import regular from '../../assets/Group 38.png';
import Membership from '../checkout/Membership';
import { useNavigate, useLocation } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const rawCheckout = location.state?.checkout;
  const checkout = rawCheckout?.data; 

  
  useEffect(() => {
    if (!checkout) {
      navigate('/subscribe');
    }
  }, [checkout, navigate]);

  if (!checkout) return null; 
const handlePaymentClick = () => {
  navigate('/payment', { state: { checkout } });
};
  
  const subtotal = checkout.totalAmount || 0;

  return (
    <>
      <div className="relative bg-sky-200 h-[350px] mb-[1100px] sm:mb-[990px] lg:mb-[590px]">
        <div className="absolute inset-x-0 top-[180px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          
          {/* Account Details */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-24 lg:mt-0 h-[250px]">
            <h1 className="font-bold text-lg mb-2">Account Details</h1>
            <p className="text-gray-500 text-sm mb-4">
              Fill your data and make sure your contact before checkout
            </p>
            <hr className="border-t border-gray-300 mb-4" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold text-black">Full Name</span>
                <span className="font-medium text-gray-800">{checkout.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-black">Phone Number</span>
                <span className="font-medium text-gray-800">{checkout.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-black">Email</span>
                <span className="font-medium text-gray-800">{checkout.email}</span>
              </div>
            </div>
          </div>

          {/* Transfer Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl h-fit">
            <h2 className="font-bold text-lg mb-2">Transfer To</h2>
            <p className="text-gray-500 text-sm mb-4">Select one of two banks below</p>
            <hr className="border-t border-gray-300 mb-4" />

            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-30 rounded-lg px-3 py-2">
                <img className="h-11 w-11" src={corporation} alt="" />
                <div>
                  <h3 className="font-semibold text-sm">Fitneamp Corporation</h3>
                  <p className="text-xs text-gray-600">23823823823</p>
                </div>
              </div>

              <div className="flex items-center gap-30 rounded-lg px-3 py-2">
                <img className="h-11 w-11" src={mandiri} alt="" />
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
                placeholder="Upload transfer proof"
                className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <button  onClick={handlePaymentClick}
              className="text-white bg-indigo-500 w-full px-4 py-2 mt-3 rounded-full hover:bg-indigo-600 transition duration-300"
            >
              Checkout
            </button>
          </div>

          {/* Booking Details */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl mt-8 lg:mt-0">
            <h1 className="font-bold text-lg mb-2">
              Booking ID: <span className="text-blue-600">{checkout._id}</span>
            </h1>
            <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row">
              <div className="flex items-center gap-3 mb-3 sm:mb-0">
                <img className="h-10 w-10" src={regular} alt="" />
                <div>
                  <h3 className="font-bold text-base">Regular Package Plan</h3>
                  <p className="text-sm text-gray-500">3 Month - All Benefits Include</p>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Rp {subtotal.toFixed(2)}</p>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold text-black">Subtotal</span>
              <span>Rp {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold text-black">Promo Code</span>
              <span className="text-red-600">- Rp 0</span>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="flex justify-between items-center font-bold bg-sky-100 rounded-xl px-4 py-3 text-base">
              <span>Total Payment</span>
              <p>Rp {subtotal.toFixed(2)}</p>
            </div>
          </div>

        </div>
      </div>

      <Membership />
    </>
  );
};

export default Booking;
