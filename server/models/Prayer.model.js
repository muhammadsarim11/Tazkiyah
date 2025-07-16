
import mongoose, { Types } from "mongoose";


const PrayerSchema =  new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
     date:{
        type:String,
        required:true

     },

     
prayers: {
    fajr: { type: Boolean, default: false },
    dhuhr: { type: Boolean, default: false },
    asr: { type: Boolean, default: false },
    maghrib: { type: Boolean, default: false },
    isha: { type: Boolean, default: false },
  },
     
},{timestamps:true})



PrayerSchema.index({ user: 1, date: 1 }, { unique: true });

export const Prayers = mongoose.model('Prayer',PrayerSchema)

