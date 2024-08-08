import { Link, useNavigate } from "react-router-dom"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 items-center  p-2 mt-4 mb-4 ">
    <div className="flex flex-col sm:ml-10">
    <span className="text-lg   sm:text-start text-indigo-600 font-semibold">Links</span>
    <ul className='flex  items-start justify-center gap-1 sm:gap-0 flex-col   text-medium  text-gray-600 '>
  <Link to='/' className='hover:text-black cursor-pointer '>Home</Link>
  <Link to='/about' className='hover:text-black cursor-pointer '>About</Link>
  <Link to='/login' className='hover:text-black  cursor-pointer  '>Log In</Link>
  <Link to='/signup' className='hover:text-black  cursor-pointer '>Sign Up</Link>

</ul>
    </div>


    

          <div className='flex flex-col mr-16 items-center sm:justify-between '>
<Link to='/' className='font-bold text-xl'>Art<span className='text-green-600 text-medium'>sewa</span></Link>
<div>
<h3><span className="text-indigo-600">Contact</span>:+977-9867543672</h3>
<h3 className="text-medium"><span className="text-indigo-600">Email</span>:info.artsewa@gmail.com</h3>
<p>&copy; {new Date().getFullYear()} Art-Sewa. All rights reserved.</p>
</div>
        </div>
        <div className="flex flex-col gap-2">
        <h1 className="text-medium font-semibold text-indigo-600 ">Follow us here</h1>
        <div className='flex items-center gap-4 justify-start'>
          <FaFacebook
            onClick={() => window.open('https://www.facebook.com/', '_blank')}
            className="text-2xl sm:text-3xl text-indigo-600 cursor-pointer hover:text-indigo-400"
          />
          <FaInstagram
            onClick={() => window.open('https://www.instagram.com/', '_blank')}
            className="text-2xl sm:text-3xl text-purple-600 cursor-pointer hover:text-purple-400"
          />
          <FaLinkedin
            onClick={() => window.open('https://linkedin.com/', '_blank')}
            className="text-2xl sm:text-3xl text-indigo-600 cursor-pointer hover:text-indigo-400"
          />
          <FaXTwitter
            onClick={() => window.open('https://twitter.com/', '_blank')}
            className="text-2xl sm:text-3xl text-black-600 cursor-pointer hover:text-gray-600"
          />
          <FaThreads
            onClick={() => window.open('https://threads.net/', '_blank')}
            className="text-2xl sm:text-3xl text-purple-700 cursor-pointer hover:text-purple-400"
          />
        </div>
        </div>
    </div>
  )
}

export default Footer