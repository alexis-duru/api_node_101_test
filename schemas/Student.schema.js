import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: [true, "Please add an email address"],
    unique: true,
    maxlength: [100, "Email cannot be more than 100 characters"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  entranceFee: {
    type: Number,
    required: [true, "Please add an entranceFee"],
  },
  name: {
    type: String,
    required: [true, "Please add an name"],
    trim: true,
    maxlength: [100, "Name cannot be bigger than 100 characters"],
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["admin", "student", "teacher"],
    default: "student",
  },
});

export const Student = mongoose.model("Student", StudentSchema);