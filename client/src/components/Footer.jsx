import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="flex items-center p-2 justify-between bg-gray-200">
    <div>
    <span className="text-lg text-indigo-600">Links</span>
    <ul className='flex flex-col  text-medium  text-gray-600 '>
  <Link to='/' className='hover:text-black cursor-pointer '>Home</Link>
  <Link to='/about' className='hover:text-black cursor-pointer '>About</Link>
  <Link to='/login' className='hover:text-black  cursor-pointer  '>Log In</Link>
  <Link to='/signup' className='hover:text-black  cursor-pointer '>Sign Up</Link>

</ul>
    </div>


    <div>
Since 2024...
    </div>

          <div className='flex flex-col items-center sm:justify-between'>
<Link to='/' className='font-bold text-xl'>Art<span className='text-green-600 text-medium'>sewa</span></Link>
<div>
<h3><span className="text-indigo-600">Contact</span>:+977-9867543672</h3>
<h3 className="text-medium"><span className="text-indigo-600">Email</span>:info.artsewa@gmail.com</h3>
<p>&copy; {new Date().getFullYear()} Art-Sewa. All rights reserved.</p>
</div>
        </div>
    </div>
  )
}

export default Footer