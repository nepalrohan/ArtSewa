const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {generateAccessToken} = require('../utils/accessToken.js');
const {generateRefreshToken} = require('../utils/refreshToken.js');
// signup
const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exist" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      email,
      password: hashpassword,
      accountType,
    });
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User created succesfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Please Signup" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credientials" });
    }

const data = {
    id:user._id,
    accountType:user.accountType,
    author:user.username
};

const accessToken = generateAccessToken(data);
const refreshToken = generateRefreshToken(data);


return res.status(200).json({success:true, message:"Login sucessful", accessToken, refreshToken, role:user.accountType, author:user.username})

} catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }


};

module.exports = { login, signup };
