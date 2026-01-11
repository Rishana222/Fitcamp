import React, { useEffect, useState } from 'react';
import regular from '../../assets/Group 38.png';
import { toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';
import { useCreateCheckout } from "../../utils/checkoutApi";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { mutate: createCheckout } = useCreateCheckout();
  const location = useLocation();

  const packageData = location.state?.packageData;

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!packageData) {
      navigate('/Subscription');
    } else {
      setName(packageData.name || "");
      setPhoneNumber(packageData.phoneNumber || "");
      setEmail(packageData.email || "");
    }
  }, [packageData, navigate]);

  if (!packageData) return null;

  const subtotal = Number(packageData.amount);
  const tax = +(subtotal * 0.11).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const handleCheckoutClick = () => {
    if (!name || !phoneNumber || !email) {
      toast.error("Please fill all the fields!");
      return;
    }

    const checkoutData = {
      name,
      phoneNumber,
      email,
      totalAmount: total,
      userId: packageData.userId,
      planId: packageData.planId,
      packageName: packageData.title,
      amount: packageData.amount,
      duration: packageData.duration,
      desc: packageData.desc,
      features: packageData.features,
      img: packageData.img,
    };
    console.log("Checkout data:", packageData.planId, packageData);

    createCheckout(checkoutData, {
      onSuccess: (res) => {
        toast.success("Checkout successful!");
        navigate("/booking", { state: { checkout: res.data } });
      },
      onError: (err) => {
        console.error(err);
        toast.error("Checkout failed. Try again.");
      },
    });
  };

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
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-xs"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm">Phone Number :</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-xs"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <label className="font-bold w-full md:w-36 text-sm">Email :</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-xs"
              />
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

          <button className="flex items-center w-full mt-4 p-4 bg-[#D1EEFD] rounded-2xl">
            <img src="https://img.icons8.com/ios-filled/50/ticket.png" className="w-6 h-6 mr-3" alt="icon" />
            <span className="font-bold flex-1 text-left text-sm">Use Promo Code</span>
            <div className="bg-black rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
              </svg>
            </div>
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
