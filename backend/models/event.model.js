import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String },
    location: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
