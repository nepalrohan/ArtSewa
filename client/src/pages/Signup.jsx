import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className=" mt-20 sm:mt-12 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-semibold text-center mb-2 text-green-600">Register Account</h1>
        <form>
<div className="mb-3">
  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
  <input type='text' name='name' id='name' placeholder="Enter your username" className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black" />
</div>

<div className="mb-3">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
  <input type='email' name='email' id='email' placeholder="Enter your email" className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black" />
</div>

<div className="mb-3">
  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
  <input type='password' name='password' id='password' placeholder="Enter your password" className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black" />
</div>

<div className="mb-3">
  <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-2">Select account type</label>
  <select name='' id='' className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black" >
    <option value='buyer'>Buyer</option>
    <option value='seller'>Seller</option>

  </select>
</div>

{/* login with acconut */}
<div className="flex items-center justify-center mb-3">
<span className="text-sm text-green-600">Already have an account?<Link to='/login' className="text-indigo-600"> Login</Link></span>
</div>

<button  type='submit' className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-green-600 ">
  Signup
</button>
        </form>
      </div>
    </div>
  )
}



export default Signup