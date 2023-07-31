import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "./../utils/error.js";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("Sccessfully Created");
  } catch (error) {
    next(error);
  }
};

// Login
export const login = async (req, res, next) => {
  try {
    // Check if There is any account with this username
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not Found"));
    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wroung Password"));

    // Create token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token,{httpOnly : true})
      .status(200)
      .json(otherDetails);
  } catch (error) {
    next(error);
  }
};
