import {useSelector, useDispatch} from 'react-redux';
import {IoLogOut} from 'react-icons/io5';
import {useLocation, Link} from 'react-router-dom';
import {IoMdPhotos} from 'react-icons/io';
import {SiGoogleanalytics} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {IoIosHeart} from 'react-icons/io';
import {FaList} from 'react-icons/fa';
import {setTab} from '../../store/slices/navSlice';
import {logout} from '../../store/slices/authSlice';



const DashboardSidebar = () => {
    const {pathname} = useLocation();
    const sidebar = useSelector((state)=>state.nav.sidebar);
    const tab = useSelector((state)=>state.nav.tab);
    const dispatch = useDispatch();
    const author = useSelector((state)=>state.auth.author);
  return (
    <nav className={` ${sidebar? 'translate-x-0':'-translate-x-[500px] sm:translate-x-0'} ease-in-out  duration-300 sm:static fixed z-10 flex flex-col text-lg font-semibold bg-white shadow-lg shadow-green-600  gap-2 w-fit min-h-screen p-3 list-none justify-between items-center`}>
<div>
<div className='flex items-center justify-center'>
<div className='bg-green-600 my-5 w-fit rounded-full px-6 py-4 text-white '>
{author?.charAt(0).toUpperCase()}
</div>
</div>
<div>

<div className='flex flex-col gap-2'>
{
    pathname === "/seller/profile" ? (<li className={`${tab === "art-management" && 'bg-green-600 text-white'} w-full text-gray-700 rounded-lg px-2 hover:bg-green-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
    onClick={()=>dispatch(setTab("art-management"))}

    >

    <IoMdPhotos/>
    Art Management
    </li>)
    :
    (<li className={`${tab === "art-purchased" && "text-white bg-green-600"} w-full rounded-lg px-2 hover:bg-green-600 text-gray-700 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
onClick={()=>dispatch(setTab("art-purchased"))}
>

    <IoMdPhotos/>
    Art Purchased
    </li>)
}
<li className={` ${tab === "analytics" && "text-white bg-green-600"} w-full rounded-lg px-2 hover:bg-green-600 text-gray-700 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
onClick={()=>dispatch(setTab("analytics"))}
>
<SiGoogleanalytics/>
    Analytics
</li>
<li className={` ${tab === "orders" && "text-white bg-green-600"} w-full rounded-lg px-2 hover:bg-green-600 text-gray-700 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
onClick={()=>dispatch(setTab("orders"))}

>
<FaList/>
    Orders
</li>
<li className={` ${tab === "favourites" && "text-white bg-green-600"} w-full rounded-lg px-2 hover:bg-green-600 text-gray-700 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
onClick={()=>dispatch(setTab("favourites"))}

>
<IoIosHeart/>
    Favourites
</li>
<Link to='/' className='w-full rounded-lg px-2 hover:bg-green-600 text-gray-700 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'

>
<AiFillHome/>
    Home
</Link>
</div>
</div>


</div>

<li className='w-full rounded-lg px-2 text-gray-700  hover:bg-green-600 hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center'
onClick={()=>dispatch(logout())}>
<IoLogOut/>Logout
    
</li>
    </nav>
  )
}

export default DashboardSidebar