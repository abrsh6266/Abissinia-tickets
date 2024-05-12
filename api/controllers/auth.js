require("dotenv").config(); //to load variables from .env variable

const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.postSignup = asyncHandler(async (req, res) => {
  const { username, email, password, profileUrl } = req.body;
  if (!username || !email || !password || !profileUrl) {
    res.status(400);
    throw new Error("Pls fill all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exits");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    email,
    password: hashedPassword,
    profileUrl,
  });
  try {
    const savedUser = await user.save();
    if (!savedUser) {
      res.status(400);
      throw new Error("Invalid user data");
    }
    console.log("New User registered!!");
    res.json({
      _id: savedUser._id,
      name: savedUser.username,
      email: savedUser.email,
      token: generateToken(savedUser._id),
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err); // Send an HTTP 500 response for the error
  }
});

exports.postLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credential!!");
  }
});
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

exports.getMe = asyncHandler(async (req, res) => {
  const { _id, email, username } = await User.findById(req.user.id);
  res.status(200).send({
    id: _id,
    email,
    username,
  });
});
