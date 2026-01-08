import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Createlogin } from "../utils/loginApi";
import { toast } from "react-toastify";
import {useCreatelogin} from '../utils/loginApi'


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const { mutate: login, isLoading } = useCreatelogin();

  const handleLogin = (e) => {
    e.preventDefault();

    login(formData, {
      onSuccess: (data) => {
        localStorage.setItem('accessToken',data.data.accessToken);
        localStorage.setItem("userId", data.data.userId); 
        toast.success("Login successful ✅");
        navigate("/");
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Login failed ❌");
      }
    });
  };
  
  const handleSignupRedirect = () => {
    navigate('/signup');
  };


  return (
    <div className="relative min-h-screen bg-white">

      <div className="bg-sky-200 h-[250px] w-full"></div>


      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-full max-w-md bg-sky-50 p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sky-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sky-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition"
          >
            Login
          </button>
        </form>


        <p className="text-sm text-center mt-4 text-sky-700">
          Don't have an account?{' '}
          <span
            onClick={handleSignupRedirect}
            className="cursor-pointer font-medium underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
