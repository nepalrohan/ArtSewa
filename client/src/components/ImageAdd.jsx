import { useState } from "react";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import useUpload from "../hooks/useUpload";
import axios from 'axios';
import ProgressBar from '@ramonak/react-progress-bar';

const ImageAdd = () => {
const [image, setImage] = useState(null);
const [progress, setProgress] = useState(0);
const author = useSelector((state=>state.auth.author));

const handleimageChange = (e)=>{
const file = e.target.files[0];
setImage(file);
}

const onUploadProgress = ( progressEvent)=> {
setProgress(Math.round((progressEvent.loaded * 100)/progressEvent.total))
}

const addPost = async (e)=>{
e.preventDefault();
try {
    
    const title = e.target.title.value;
    const price = e.target.price.value;

    if(!title || !price) return toast.error("Please fill all fields");
    if(title.trim() === "" || price.trim() === "")return toast.error("Please fill all fields");

    const {public_id, secure_url} = await useUpload({image, onUploadProgress});

    if(!public_id || !secure_url) return toast.error("Image upload failed");
    const res= await axios.post(`http://localhost:5000/api/v1/post/create`, {
        publicId:public_id,
        author,
        image: secure_url,      
        title,                  
        price,   
    
    }, {
        headers : {
            "Authorization":"Bearer "+localStorage.getItem("accessToken"),
        }
    });
    console.log(res);

    const data = await res.data;
    if(data.success){
        toast.success(data.message);
        e.target.reset();
        setImage(null);
        setProgress(0);
    }

} catch (error) {
    return toast.error(error.response.data.message);
}
}

  return (
    <div className="p-5 bg-white mx-8 rounded-2xl shadow-md ">
<h2 className="text-xl font-bold">Add New Product</h2>
<form className='grid grid-cols-1 gap-2 my-4'  onSubmit={addPost}>
<img src={`${image ? URL.createObjectURL(image):null}`} alt='Image'
className="w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover" />

{/* progressbar */}
{
    progress > 0 &&(
     <ProgressBar
      completed={progress} 
       bgColor="green" 
        transitionTimingFunction="ease-in-out" />)
}

<div className='flex flex-col'>
<label htmlFor='image' className='font-semibold'>Image</label>
<input type='file'
onChange={handleimageChange}
  name='image' id='image' className='cursor-pointer rounded-lg border outline-none px-3 py-1 mt-1' />

</div>

<div className='flex flex-col'>
<label htmlFor='title' className='font-semibold'>Title</label>
<input type='text'
  name='title' required id='title' placeholder='Enter product title' className=' rounded-lg border outline-none px-3 py-1 mt-1' />

</div>

<div className='flex flex-col'>
<label htmlFor='price' className='font-semibold'>Price</label>
<input type='number'  name='price' id='price' required placeholder="Enter product price" className='rounded-lg border outline-none px-3 py-1 mt-1' />

</div>

<button className="py-1 px-3 bg-green-600 font-semibold text-white rounded-lg mt-2" type='submit'>Add Product</button>
</form>
    </div>
  )
}

export default ImageAdd