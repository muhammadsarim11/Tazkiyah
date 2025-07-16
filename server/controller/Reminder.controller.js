    import { Reminder } from "../models/Reminder.model.js";

    import catchAsync from "../utils/WrapAsync.js";



        const isValidTime = (time) => {
    return /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(time);
    };

    export const CreateReminder =  catchAsync( async (req,res)=>{


        const {title,message,time} = req.body
        if (!title?.trim()) {
        return res.status(400).json({ message: "Title is required" });
    }
    if (time && !isValidTime(time)) {
        return res.status(400).json({ message: "Invalid time format (use HH:MM)" });
    }

    const reminder = await Reminder.create({
        title:title,
        message:message,
        time:time||null,
        user:req.user.id

    })

    return res.status(200).json({
        message:"Reminder created",
        data:reminder
    })

    })


export const GetReminder = catchAsync(async (req, res) => {
  const reminder = await Reminder.find({ user: req.user.id });

  if (reminder.length === 0) {
    return res.status(404).json({
      message: "No reminders found for this user",
    });
  }

  return res.status(200).json({
    message: "Success",
    data: reminder, // No need to send user ID here
  });
});



export const UpdateReminder = catchAsync(async (req, res) => {
  const { title, message, time } = req.body;

  // Optional: Validate time if given
  if (time && !/^([0-1]\d|2[0-3]):([0-5]\d)$/.test(time)) {
    return res.status(400).json({ message: "Invalid time format (HH:MM)" });
  }

  // 🔍 Find reminder by ID and user
  const reminder = await Reminder.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!reminder) {
    return res.status(404).json({ message: "Reminder not found" });
  }

  // 🔄 Update fields only if provided
  reminder.title = title || reminder.title;
  reminder.message = message || reminder.message;
  reminder.time = time || reminder.time;

  await reminder.save();

  return res.status(200).json({
    message: "Reminder updated successfully",
    data: reminder,
  });
});



export const DeleteReminder =  catchAsync(async(req,res)=>{

    const reminder = await Reminder.findOne({_id:req.params.id , user:req.user.id})
    if(!reminder){
        return res.status(404).json({
            message:"no reminder found for this user"
        })
    }

    await reminder.deleteOne()
    return res.status(200).json({
        message:"Successfully deleted!"
    })
})