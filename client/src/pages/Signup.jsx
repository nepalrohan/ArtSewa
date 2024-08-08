import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setloading]=useState(false);
const [formdata, setFormdata]=useState({
  username:'',
  email:'',
  password:'',
  accountType:'buyer'

});

const handleFormChange = (e)=>{
  setFormdata({...formdata, [e.target.name]:e.target.value});
}

const handleSubmit= async (e)=>{
  setloading(true);

  e.preventDefault();
  try {
    
    const res = await axios.post(`http://localhost:5000/api/v1/auth/signup`,formdata );
    const data = await res.data;
    if(data.success){
      setFormdata({
        username:'',
        email:'',
        password:'',
        accountType:'buyer'
      });
      setloading(false);
      toast.success(data.message);
      navigate('/login');
    }
    
  } catch (error) {
    setloading(false);

    toast.error(error.response.data.message);
  }

}

  return (
    <div className=" mt-16 sm:mt-12 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white  shadow-md shadow-green-600 rounded-3xl px-5 py-6 w-[85vw] sm:w-[27vw]">
        <h1 className="text-2xl font-semibold text-center mb-2 text-green-600">
          Register Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input

              value={formdata.username}
              onChange={handleFormChange}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
                value={formdata.email}
                onChange={handleFormChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
                value={formdata.password}
                onChange={handleFormChange}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="accountType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select account type
            </label>
            <select
                value={formdata.accountType}
                onChange={handleFormChange}
              name="accountType"
              id="accountType"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* login with acconut */}
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-green-600">
              Already have an account?
              <Link to="/login" className="text-indigo-600">
               
                Login
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-green-600 "
          >
           {loading ? "loading..." :" Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
