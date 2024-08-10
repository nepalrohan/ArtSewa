import { useDispatch, useSelector } from "react-redux"
import DashboardHeader from "../DashboardHeader"
import ImageAdd from "../ImageAdd"
import {logout} from '../../../store/slices/authSlice';
import {setMyPosts} from '../../../store/slices/postSlice';
import axios from "axios";
import { useEffect } from "react";
import ImageCard from '../ImageCard';
import toast from 'react-hot-toast';

import {BiSolidMessageSquareEdit} from 'react-icons/bi';
import {MdDelete} from "react-icons/md";

const ArtManagement = () => {
const dispatch = useDispatch();
const posts = useSelector((state)=>state.posts.myPosts);

const getMyPosts = async ()=>{
  try {
    if (posts.length > 0) return;

    const res = await axios.get('http://localhost:5000/api/v1/post/myposts', {
      headers:{
        Authorization:"Bearer "+localStorage.getItem("accessToken"),
      },
    });
   

    const {data} = await res.data;
    dispatch(setMyPosts(data));
    
  } catch (error) {
    toast.error(error.response.data.message);
    // dispatch(logout());

  }
}



useEffect(()=>{
  getMyPosts();
}, [posts]);
  return (
    <div className="flex flex-col sm:flex-row ">
<div>
    <DashboardHeader/>
    <ImageAdd/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 bg-transparent sm:bg-white p-5 w-[90vw] sm:w-[50vw] sm:h-[95vh] sm:overflow-y-scroll rounded-lg mx-auto sm:mx-0">
{
  posts.length > 0 && 
  posts?.map(({_id, title, image, author, price,})=>{
return (<ImageCard key={_id}  id={_id} title={title} img={image}  author={author}  price={price} 
icon1={<BiSolidMessageSquareEdit title="Edit" className='text-3xl text-green-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 ' />}
icon2={<MdDelete title="Delete"
  className='text-3xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'  />}

/>)
  })
}
</div>
    </div>
  )
}

export default ArtManagement