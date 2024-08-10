const router = require("express").Router();
const {verifyToken} = require("../middlewares/verifyToken.js");
const {createPost,getAllPosts, getFavourites, getMyPosts, removeFromFavourites, addToFavourites, deletePost, searchPosts} = require("../controllers/postController.js");

router.post("/create", verifyToken, createPost );
router.get("/allposts", getAllPosts );
router.get("/myposts", verifyToken, getMyPosts );
router.delete("/delete/:id", verifyToken, deletePost );
router.put("/addToFavourite/:postId", verifyToken, addToFavourites );
router.put("/removeFromFavourites/:postId", verifyToken, removeFromFavourites );
router.get("/Favourites", verifyToken, getFavourites );
router.get("/search", searchPosts );



module.exports = router;
