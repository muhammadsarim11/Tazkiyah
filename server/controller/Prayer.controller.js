
import { Prayers } from "../models/Prayer.model.js"
import catchAsync from "../utils/WrapAsync.js"


const getTodayDate = ()=> new Date().toISOString().slice(0,10)


export const getTodayPrayer = catchAsync( async (req,res)=>{

    const today = getTodayDate()

let record = await Prayers.findOne({user:req.user.id, date:today})

    if(!record){
        record = {
            date:today,
            prayers:{
                fajr:false,
                dhuhr:false,
                  asr: false,
        maghrib: false,
        isha: false,
            }
        }
    }


return res.status(200).json({
message:"succes",
record:record

})


})



export const UpdatePrayer = catchAsync(async (req, res) => {
  const today = getTodayDate();
  const { prayers } = req.body;

  // Input validation (optional, but good to have)
  if (!prayers) {
    return res.status(400).json({ message: "Prayers data is required" });
  }

  // Find existing record for this user and today
  let record = await Prayers.findOne({ user: req.user.id, date: today });

  if (record) {
    // Update existing
    record.prayers = prayers;
    await record.save();
  } else {
    // Create new
    record = await Prayers.create({
      user: req.user.id,
      date: today,
      prayers,
    });
  }

  res.status(200).json({
    success: true,
    message: "Prayer record updated",
    record,
  });
});