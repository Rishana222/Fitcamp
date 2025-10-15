import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-3 lg:top-10 left-0 w-full z-50 bg-transparent px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between text-black font-medium">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img src={Logo} alt="Logo" className="w-10 md:w-12" />
          <h1 className="font-bold uppercase text-xl md:text-2xl lg:text-3xl">
            Fitcamp
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center text-sm md:text-base space-y-2 md:space-y-0 md:space-x-6">
          <a href="#subscribe" className="hover:text-gray-200 capitalize">
            subscribe plan
          </a>
          <a href="#blog" className="hover:text-gray-200 capitalize">
            blog
          </a>
          <a href="#testimonial" className="hover:text-gray-200 capitalize">
            testimonial
          </a>
          <a href="#about" className="hover:text-gray-200 capitalize">
            about
          </a>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full capitalize">
            my subscription
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
   
            
         
                 
          
              
         
           
          
           
          
          



