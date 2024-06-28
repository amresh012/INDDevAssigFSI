import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: String,
  age: Number,
  city: String,
  state: String,
  zip: Number,
  email: { type: String, required: true, unique: true },
  web: String,
});

export const User = mongoose.model("User", userSchema);

