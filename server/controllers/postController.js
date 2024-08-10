const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");

const createPost = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;

  if (authorAccountType === "buyer") {
    return res
      .status(403)
      .json({ success: false, message: "Only seller can post" });
  }

  const { title, author, price, image, publicId } = req.body;
  if(!title || !image || !price) return res.status(404).json({success:false, message:"All fields are required"});

  try {
    const post = new Post({
      title,
      author,
      price,
      image,
      publicId,
      authorId,
    });
    await post.save();

    await User.findByIdAndUpdate(authorId, {
      $push: {
        uploads: post._id,
      },
    });

    return res
      .status(201)
      .json({ success: true, message: "Post added successfully", post });
      
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message:"Internal server error"});
  }
};



const getAllPosts = async (req, res)=>{
  try{
const posts = await Post.find();
if(posts.length === 0){
  return res.status(404).json({success:false, message:"No post found"})
};
return res.status(200).json({success:true, data:posts});

  }
  catch(error){

    return res.status(500).json({message:"Internal Server Error", success:false})
  }
};


const  getMyPosts = async (req, res)=>{
  const authorId = req.id;
  const authorAccountType= req.acountType;

  try{
if(authorAccountType === "buyer"){
  const {purchased} = await User.findById(authorId).populate("purchased");
  console.log(purchased);
  if(!purchased)return res.status(404).json({success:false, message:"No post found"});
  return res.status(200).json({success:true, data:purchased});
}
else {
  const {uploads} = await User.findById(authorId).populate("uploads");
  if(!uploads) return res.status(404).json({success:false, message:"No post found"});
  return res.status(200).json({success:true, data:uploads});

}

  }
  catch(error){
    return res.status(500).json({success:false, message:"Internal server error"})
  }
}




module.exports = {createPost,getAllPosts,getMyPosts};

