import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getGymById } from '../../utils/gymApi';
import { imageUrl } from '../../utils/axios';
import operationalIcon from '../../assets/Operational Time.png';
import addressIcon from '../../assets/Address.png';

const Parkcard = () => {
  const { gymId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['gym', gymId],
    queryFn: () => getGymById(gymId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const gym = data?.data;

  return (
    <>
      <div className="w-[95%] max-w-2xl mx-auto bg-white rounded-[40px] px-6 md:px-10 py-4 shadow-sm font-sans text-slate-900 mt-[100px] mb-7">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{gym?.name}</h1>
            <div className="flex items-center gap-1 mt-1 text-gray-400">
               <img
                src="https://img.icons8.com/?size=100&id=52671&format=png&color=000000"
                alt=""
                className="h-[25px]"
              />
              <span className="text-sm md:text-base">{gym?.gymLocation?.name}</span>
            </div>
          </div>
          <span className="bg-[#EB6A6A] text-white px-4 py-1.5 rounded-2xl text-xs font-bold shadow-sm">
            Populer
          </span>
        </div>

        {/* Facilities Section */}
        <div className="mb-6">
          <h2 className="text-lg font-extrabold mb-3">Facilities Available</h2>
          <div className="border-t border-gray-100 pt-5 grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
            {gym?.facilities?.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 shrink-0  rounded-full flex items-center justify-center overflow-hidden">
                  <img src={`${imageUrl}${item.icons?.[0]}`} alt={item.name} className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <p className="font-extrabold text-[14px] leading-tight">{item.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium uppercase">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <h2 className="text-lg font-extrabold mb-3">Description</h2>
          <div className="border-t border-gray-100 pt-4">
            <p className="text-[#333] leading-snug text-sm md:text-[15px] opacity-90">
              {gym?.description || 'No description available.'}
            </p>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-2">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14  rounded-full flex items-center justify-center shrink-0">
               <img src={operationalIcon} alt="Opening Work" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">Opening Work</h3>
             {/* <img src={operationalIcon} alt="Opening Work" className="w-8 h-8 object-contain" /> */}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14  rounded-full flex items-center justify-center shrink-0">
             <img src={addressIcon} alt="Address" className="w-8 h-8 object-contain" />
            </div>
            <div className="max-w-[240px]">
              <h3 className="font-extrabold text-base leading-tight">Detail Address</h3>
              <p className="text-gray-400 text-[12px] font-medium leading-tight mt-0.5">
                {gym?.gymLocation?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parkcard;
