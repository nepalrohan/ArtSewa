const router = require("express").Router();
const {verifyToken} = require("../middlewares/verifyToken.js");
const {createPost,getAllPosts, getMyPosts} = require("../controllers/postController.js");

router.post("/create", verifyToken, createPost );
router.get("/allposts", getAllPosts );
router.get("/myposts", verifyToken, getMyPosts );

module.exports = router;