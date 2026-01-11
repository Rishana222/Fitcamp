import React from 'react'
import ticket from '../../assets/Frame 10 (1).png'
import boxingGloves from '../../assets/Regular (1).png'
import { useLocation ,useNavigate} from 'react-router-dom';

const Transaction = () => {
    const location = useLocation();
    const bookingId = location.state?.bookingId;
    const navigate = useNavigate();
    const subscriptionData = JSON.parse(localStorage.getItem('subscriptionData'));
    const transaction = location.state?.transaction;
    
   
      if (!subscriptionData) {
    
    return (
      <div className='relative bg-sky-200 h-[350px] flex justify-center items-center'>
        <h1 className='text-red-500 font-bold text-xl'>
          No subscription data found!
        </h1>
        <button
          onClick={() => navigate('/subscription')}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
        >
          Go Back to Subscriptions
        </button>
      </div>
    );
  }
    if (!bookingId ) {
        return (
            <div className='relative bg-sky-200 h-[350px] flex justify-center items-center'>
                <h1 className='text-red-500 font-bold text-xl'>
                    No Booking ID or Phone Number provided!
                </h1>
            </div>
        );
    }

    return (
        <>
            <div className='relative bg-sky-200 h-[350px] flex justify-center mb-[450px]'>
                <div className='absolute md:top-[160px] top-[250px] flex flex-wrap justify-center gap-8 items-start lg:flex-row'>

                 
                    <div className='rounded-xl bg-white md:px-24 sm:px-16 px-7 py-14 sm:max-w-[700px] h-auto shadow-2xl'>
                        <img className='h-[150px] lg:h-[200px]' src={ticket} alt="Transaction Ticket" />
                        <h1 className='font-bold text-center mt-5 text-2xl'>Transaction Ticket</h1>

                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Booking ID</h1>
                            <h1 className='text-blue-600'>{bookingId}</h1>
                        </div>
                      

                      
                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Started At</h1>
                            <h1>Aug 07, 2024</h1>
                        </div>
                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Ended At</h1>
                            <h1>Nov 07, 2024</h1>
                        </div>

                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Total Payment</h1>
                            <h1>Rp 220.890</h1>
                        </div>

                        <div className='flex justify-between mt-5 font-bold text-xs'>
                            <h1>Subtotal</h1>
                            <button className='text-white bg-green-500 rounded-full px-3 py-2'>Success</button>
                        </div>
                    </div>

                   
                    <div className='rounded-xl bg-white px-5 py-8 sm:max-w-[230px] shadow-xl flex flex-col items-center justify-between'>
                        <img className='h-[60px] lg:h-[120px]' src={boxingGloves} alt="Plan Image" />
                        <h1 className='font-semibold text-left mt-3 text-lg'>Regular Package Plan</h1>
                        <p className='text-left text-gray-600 text-xs mt-1.5'>Enjoy all subscribe package benefits</p>
                        <p className='font-bold text-base mt-3'>
                            Rp 199.000 <span className='text-gray-500 text-xs text-left'>/ 3 Month</span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Transaction
