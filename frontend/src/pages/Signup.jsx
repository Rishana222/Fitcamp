import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateSignup } from "../utils/signupApi";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", email: "", password: "", phoneNo: "", age: "", gender: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateSignup(formData);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="relative min-h-screen bg-white ">

        <div className="bg-sky-200 h-[250px] w-full"></div>


        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-full max-w-md bg-sky-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center">Sign Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sky-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-500"
            />


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


            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sky-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-500"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sky-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-500"
            />


            <select  onChange={handleChange} name="gender" className="w-full px-4 py-3 border border-sky-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400">
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>


            <button
              type="submit"
              className="w-full py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition"
            >
              Sign Up
            </button>
          </form>


          <p className="text-sm text-center mt-4 text-sky-700">
            Already have an account? <span onClick={handleLoginRedirect} className="cursor-pointer font-medium underline">Log 
              
              in</span>
          </p>
        </div>
      </div>



    </>
  )
}

export default Signup
