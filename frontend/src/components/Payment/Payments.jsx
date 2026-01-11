import React from 'react'
import success from '../../assets/Success (1).png'
import regular from '../../assets/Group 38.png'
import { useNavigate,useLocation} from 'react-router-dom'


const Payments = () => {
    
    const Navigate = useNavigate();
    const handleViewSubscriptionClick = ()=>(
        Navigate('/viewsubscription')
    )
     const location = useLocation();
  const checkout = location.state?.checkout; 
    return (
        <>
            <div className='relative bg-sky-200 h-[350px] flex justify-center mb-[450px]'>
                <div className='rounded-xl absolute bg-white md:px-24 sm:px-16 px-7 py-14 md:top-[180px] top-[250px] ax-w-full sm:max-w-[700px] h-[500px] shadow-2xl '>
                    <img className='h-[150px] lg:h-[200px]' src={success} alt="" />
                    <h1 className='font-bold text-center mt-5 text-2xl'>Booking Completed</h1>
                    <p className='text-gray-400 text-xs text-center mt-3'>We will confirm your payment and update <br />
                        the status to your email address</p>
                        <div className='flex bg-sky-100 mt-4 justify-between px-4 py-2 rounded-2xl'>
                            <img className='h-10 w-10' src={regular} alt="" />
                            <h1 className="font-bold text-lg mt-1">Booking ID: <span className="text-blue-600">{checkout?._id || 'N/A'}</span></h1>
                        </div>
                        <div className='flex justify-center'>
                             <button onClick={handleViewSubscriptionClick} className='text-white bg-indigo-400 mt-5 px-5 rounded-full py-1'>View My Subscription</button>
                        </div>
                       
                </div>
            </div>

        </>
    )
}

export default Payments