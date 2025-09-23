import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, index: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Email", emailSchema);
