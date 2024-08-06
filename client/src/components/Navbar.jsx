import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 py-5 fixed top-0 left-0 right-0 bg-white shadow-md gap-1 sm:gap-0 z-30'>
    {/* logo */}
        <div className='flex items-center justify-between'>
<Link to='/' className='font-bold text-3xl'>Art<span className='text-green-600 text-2xl'>sewa</span></Link>
        </div>
{/* menus */}
        <div>
<ul className='flex gap-5 text-lg font-semibold text-gray-500 '>
  <Link to='/' className='hover:text-black cursor-pointer sm:p-2'>Home</Link>
  <Link to='/about' className='hover:text-black cursor-pointer sm:p-2'>About</Link>
  <Link to='/login' className='hover:text-black  cursor-pointer sm:py-2  '>Log In</Link>
  <Link to='/signup' className='hover:text-black  cursor-pointer sm:py-2'>Sign Up</Link>

</ul>
        </div>

    </nav>
  )
}

export default Navbar