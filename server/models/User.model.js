import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { hash, randomBytes } from "crypto";
import Randomstring from "randomstring";
import crypto from 'crypto'


const UserSchema =  new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true,
},
email:{
    type:String,
    required:true,
    unique:true,},

password:{
    type:String,
    required:true,
}
,
resetPasswordToken:{
type:String
}
,
resetTokenExpiry:{
    type:Date
}

},{timestamps:true});


// Hash password before saving

UserSchema.pre("save", async function(next){

if(!this.isModified("password")){
    return next();
}
this.password = await bcrypt.hash(this.password,12)
next()

})


// Method to compare password
UserSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};



UserSchema.methods.getResetToken =   function(){
const plainToken = Randomstring.generate(20)

const hashed = crypto.createHash('sha256').update(plainToken).digest('hex')

this.resetPasswordToken = hashed
this.resetTokenExpiry =  Date.now() + 15 * 60 *1000

return plainToken

}

export const User =  mongoose.model("User",UserSchema)