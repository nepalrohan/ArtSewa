import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
import { login } from "../../store/slices/authSlice";
import {useDispatch}  from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [loading, setloading] = useState(false);
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handellogin = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      
      const res = await axios.post(`http://localhost:5000/api/v1/auth/login`, logindata);
      const data = await res.data;
      
      toast.success(data.message);
      // dispatch login
dispatch(login(data));
      if(data.success){
        setlogindata({
          email:"",
          password:""
        });
        setloading(false);
        navigate(`/${data.role}/profile`);
      }
    } catch (error) {
      setloading(false);

      toast.error(error.response.data.message);
      
    }
  };

  return (
    <div className=" mt-16 sm:mt-12 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-lg rounded-3xl px-5 py-6 shadow-green-600 w-[85vw] sm:w-[27vw]">
        <h1 className="text-2xl font-semibold text-center mb-4 text-green-600">
          Login
        </h1>
        <form onSubmit={handellogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input

              value={logindata.email}
              onChange={handlechange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              value={logindata.password}
              onChange={handlechange}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          {/* login with acconut */}
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm text-green-600">
              Dont have an account?
              <Link to="/signup" className="text-indigo-600">
                {" "}
                Signup
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-green-600 "
          >
            {loading? "Loading...":"Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
