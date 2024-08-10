import { useSelector , useDispatch} from "react-redux"
import {RiMenu3Fill} from 'react-icons/ri';
import {IoClose} from 'react-icons/io5';

import { toggleSidebar } from "../../store/slices/navSlice";

const DashboardHeader = () => {
    const author = useSelector((state)=>state.auth.author);
    const role = useSelector((state)=>state.auth.role);
    const sidebar = useSelector((state)=>state.nav.sidebar);
    const dispatch = useDispatch();

  return (
    <>

<div className='my-5 mx-8 '>
<h1 className="text-2xl font-semibold">Hello {author?.charAt(0).toUpperCase()+author.slice(1)},  </h1>
<p>Welcome to your {role} dashboard</p>
</div>

<RiMenu3Fill
onClick={()=>dispatch(toggleSidebar())}
 className={`${sidebar ? "hidden":"block  sm:hidden"}  text-3xl absolute top-5 right-5  `} />
<IoClose 
onClick={()=>dispatch(toggleSidebar())}

className={`${sidebar ? "block  sm:hidden":"hidden"}  text-3xl absolute top-5 right-5  `} />

    </>
  )
}

export default DashboardHeader