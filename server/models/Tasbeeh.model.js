import mongoose from "mongoose";

const TasbeehSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Har tasbeeh ka owner hona chahiye
    },
    title: {
      type: String,
      required: [true, "Tasbeeh title is required"],
      trim: true,
    },
    goal: {
      type: Number,
      default: 100, // Default tasbeeh goal
    },
    count: {
      type: Number,
      default: 0, // Start from zero
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export const Tasbeeh = mongoose.model("Tasbeeh", TasbeehSchema);
