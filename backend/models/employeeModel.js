import mongoose from "mongoose";

export const empolyeeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true},
    designation: { type: String, required: true },
    gender: { type: String, required: true },
    course: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", empolyeeSchema);
