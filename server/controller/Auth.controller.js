import crypto from "crypto";
import catchAsync from "../utils/WrapAsync.js";
import  {User} from "../models/User.model.js";
import  {SignToken}  from "../services/Jwt.js";

export const RegisterUser = async  ( req,res) =>{

const {username,email,password} = req.body;
if(!username || !email || !password){
    return res.status(400).json({message:"Please fill all fields"})
}

// Check if user already exists
const existingUser = await User.findOne({email})
if(existingUser){
    return res.status(400).json({message:"User already exists"})
}
const user =  new User({
    username,
    email,
    password
})

user.save()
console.log(user._id)
const token = SignToken({ id: user._id })
// console.log(token)       
console.log(user._id)

const options = {
      httpOnly: true,                                 // JS can’t read
    secure: process.env.NODE_ENV === "production",  // HTTPS only in prod
    sameSite: "lax",                                 // blocks CSRF for same origin apps
    maxAge: 7 * 24 * 60 * 60 * 1000,
}


return res.cookie("accessToken", token , options).status(201).json({
    success:true,
    message:"User registered successfully",
    token,
    data:user   

})

}


export const LoginUser = async (req,res)=>{
    const {email,password}= req.body
    if(!email || !password){
        return res.status(400).json({message:"Please fill all fields"})
    }

    const user = await User.findOne({email})
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = SignToken({id:user._id})

    const options = {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }

    console.log('Setting cookie with token:', token); // Debug log

    return res.cookie("accessToken", token, options).status(200).json({
        message: "success",
        data: user,
        token
    })
}

// src/controllers/auth.controller.js

export const logoutUser = (req, res) => {
  res.cookie("accessToken", "", {
    httpOnly: true,
    expires: new Date(0),          // Immediately expire cookie
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({ message: "Logged out successfully" });
};




// 1️⃣ Forgot Password Controller
export const forgotPassword = catchAsync(async (req, res) => {
  const { email, newPassword } = req.body;

  // Check if user exists with this email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "No user found with this email" });
  }

  // Validate new password
  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  // Update user password directly
  user.password = newPassword;
  await user.save();

  return res.status(200).json({
    message: "Password changed successfully!",
  });
});

// The resetPassord function has been removed as it's no longer needed
