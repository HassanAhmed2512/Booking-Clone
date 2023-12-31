import User from "../models/User.js";

// CREATE
export const createUser = async (req,res,next)=>{
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    next(error);
  }
}

// Update
export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

// Delete
export const deleteUser = async (req,res,next)=>{
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully");
    } catch (error) {
    next(error);
  }
}

// GET

export const getUser = async (req,res,next)=>{
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    next(error);
  }
}

// Get All
export const getAllUser = async (req,res,next)=>{
  try {           
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
}
