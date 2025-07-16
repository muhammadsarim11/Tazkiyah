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
    sameSite: "strict",                             // blocks CSRF for same origin apps
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
        return res.status(400).json({message:"Please fill all fie"})
    }

    const user =  await User.findOne({email})
  // compare entered password with hash
    const isMatch = await user.comparePassword(password);
    if (!isMatch)                                                // wrong password
      return res.status(400).json({ message: "Invalid credentials" });

    const token = SignToken({id:user._id})

    const options = {
      httpOnly: true,                                 // JS can’t read
    secure: process.env.NODE_ENV === "production",  // HTTPS only in prod
    sameSite: "strict",                             // blocks CSRF for same origin apps
    maxAge: 7 * 24 * 60 * 60 * 1000,
}
    return(
        res.cookie(
            "accessToken",token,
            options
        ).status(200).json({
            message:"succes",
            data:user,
            token
        })
    )
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
  // 🧠 Step 1: Get email from user input
  const { email } = req.body;

  // ✅ Step 2: Check if user exists with this email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "No user found with this email" });
  }

  // 🔑 Step 3: Generate token using the method we defined in the model
  const resetToken = await user.getResetToken(); // <-- Plain token return hoga, hash DB me gaya

  // ⚠️ Step 4: Save user with token info (disable validations like password required)
  await user.save({ validateBeforeSave: false });

  // 🔗 Step 5: Create reset password URL using frontend route
  const resetURL = `${req.protocol}://${req.get("host")}/reset-password/${resetToken}`;

  // 📨 Step 6: Send token to user (email, SMS, console, etc.)
  // Note: You can use nodemailer later, for now use console
  console.log(`🔗 RESET LINK: ${resetURL}`);

  // ✅ Step 7: Send response
  return res.status(200).json({
    message: "Reset password link has been sent!",
    resetURL, // (for development only, not in production)
  });
});



export const resetPassord = catchAsync(async  (req,res )=>{

const {token} = req.params
const {newpassword} = req.body

const hashed = crypto.createHash('sha256').update(token).digest('hex')

const user = await User.findOne({
resetPasswordToken:hashed,
resetTokenExpiry:{$gt:Date.now()}
})

  // ❌ Step 4: Handle if token is invalid or expired
  if (!user) {
    return res.status(400).json({ message: "Token is invalid or expired" });
  }
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  // 🔐 Step 6: Update user password
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetTokenExpiry = undefined;

  // 💾 Step 8: Save updated user with new password
  await user.save();

  // 🟢 Step 9: Optionally send token or login user directly
  return res.status(200).json({
    message: "Password reset successful! You can now log in.",
  });
})