import React from 'react'
import { testimonials } from '../../data/testimonial'
import rating from '../../assets/Frame 82 (1).png'

const HappyStories = () => {
  return (
    <>
        <div className="bg-white shadow-2xl rounded-xl mb-10 px-6 py-8
    w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[650px] xl:max-w-[700px]
    mx-auto lg:mx-0 lg:ml-[60px] xl:ml-[100px] mt-[30px]"> {/* Adjusted max-w to match Fitcamp Central Park card */}

      <div className="mb-8 text-left">
        <h1 className="font-bold text-3xl mb-2 text-gray-900">Happy Stories</h1>
        <p className="text-sm font-light text-gray-500">
          What they said about this gym location, facilities, and environment
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {testimonials.map((items, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg px-4 py-4 h-full flex flex-col justify-between"
          >
            <div className="flex items-center mb-3">
              <img
                className="h-[45px] w-[45px] rounded-full object-cover"
                src={items.img}
                alt={items.name}
              />
              <div className="ml-3">
                <h1 className="font-bold text-base">{items.name}</h1>
                <p className="text-xs text-gray-500">{items.role}</p>
              </div>
            </div>

            <p className="text-gray-700 font-light mb-3 text-sm leading-relaxed">
              {items.text}
            </p>
            <div>
              {rating && <img src={rating} alt="Rating" className="h-[20px] w-auto" />}
            </div>
          </div>
        ))}
      </div>

      <div className="py-3 flex justify-center">
        <button className="bg-black text-white rounded-full px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
          Load More
        </button>
      </div>
    </div>



    </>
  )
}

export default HappyStories