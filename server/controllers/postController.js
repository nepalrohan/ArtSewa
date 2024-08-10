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
};


const deletePost = async (req, res)=>{
  const {id} = req.id;

  try{
   
  const post = await Post.findById(id);
  if(!post) return res.status(404).json({success:false, message:"Post not available"});


  const {authorId} = post;

  await User.findByIdAndUpdate(authorId, {
    $pull:{uploads:id}
  } );

  // await Post.findByIdAndDelete(id);

  return res.status(200).json({success:true, message:"Post deleted succesfully"});
  

  }
  catch(error){
    return res.status(500).json({success:false, message:error.message});
  }
}



const searchPosts = async (req, res)=>{
  const {search} = req.query;

  try{

    const posts = await Post.find({title : {$regex :search, $options:"i"}});
    if(posts.length === 0) return res.status(404).json({success:false, message:"No post found"})
  
  
return res.status(200).json({success:true, data:posts});
    }
  catch(error){
return res.status(500).json({success:false, message:"Internal server error"});
  }
}



const addToFavourites = async (req, res) => {
  const {authorId} = req.id;
  const {postId} = req.params;
  try{
    const user = await User.findByIdAndUpdate(authorId, {
      $push:{favourites:postId},
    });

    if(!user) return res.status(404).json({success:false, message:"User not found"})
return res.status(200).json({success:true, message:"Post added to favourites"})
  }catch(error){return res.status(500).json({success:false, message:"Internal server error"})}

};


const removeFromFavourites = async (req, res) => {
  const {authorId} = req.id;
  const {postId} = req.params;
  try{
    const user = await User.findByIdAndUpdate(authorId, {
      $pull:{favourites:postId},
    });

    if(!user) return res.status(404).json({success:false, message:"User not found"})
return res.status(200).json({success:true, message:"Post removed from favourites"})
  }catch(error){return res.status(500).json({success:false, message:"Internal server error"})}

};

const getFavourites = async (req, res)=>{
  const authorId = req.id;
  try{
      const {favourites} = await User.findById(authorId).populate("favourites");
if(!favourites) return res.status(404).json({success:false, message:"Nothing to show in favourites"});
return res.status(200).json({success:true, data:favourites});

  }catch(error){
      return res.status(404).json({success:false, message:"Internal Server Error"})
  }
}

module.exports = {createPost,getAllPosts,getMyPosts, deletePost, searchPosts, removeFromFavourites, addToFavourites, getFavourites };

