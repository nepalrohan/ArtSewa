import ImageCard from "./ImageCard"
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
<h3 className="text-3xl font-semibold  my-14"><span className='text-green-600'>Art</span> Gallery</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
<ImageCard title='Rohan Nepal' author='rohan' img='https://images.unsplash.com/photo-1722809431349-cc97ef738eb3?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
price={10}
           
icon1={ <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
          
icon2={  <IoIosHeart className="text-2xl text-red-400 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
 />


</div>
    </div>
  )
}

export default PhotoGallery