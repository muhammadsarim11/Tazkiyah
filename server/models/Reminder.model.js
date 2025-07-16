    import mongoose from "mongoose";

// 1. Schema define kar rahe hain for reminders
const ReminderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove extra spaces
  },

  message: {
    type: String,
    trim: true,
  },

  time: {
    type: String,
    default: null,  // Format: "HH:MM" (optional)
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Reminder = mongoose.model("Reminder", ReminderSchema);
