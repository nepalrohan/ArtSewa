import { Link } from "react-router-dom";


const MenuSidebar = () => {
  return (
    <div className="min-h-[85vh] sm:w-64 w-[80vw] bg-gray-700 text-white z-30 mt-20 font-semibold text-medium">
<ul className='flex flex-col gap-5 items-left ml-10  text-lg font-semibold text-gray-500 '>
  <Link to='/' className='hover:text-gray-300 mt-10  cursor-pointer '>Home</Link>
  <Link to='/about' className='hover:text-gray-300   cursor-pointer '>About</Link>
  <Link to='/login' className='hover:text-gray-300    cursor-pointer  '>Log In</Link>
  <Link to='/signup' className='hover:text-gray-300    cursor-pointer '>Sign Up</Link>

</ul>

    </div>
  )
}

export default MenuSidebar