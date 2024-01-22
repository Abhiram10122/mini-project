import mongoose, { Schema } from "mongoose";

const guideSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    minLength: [3, "Name must be atleast 3 characters"],
  },
  username: {
    type: String,
    required: [true, 'username is required']
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "tag is required"],
  },
  about: {
    type: String,
    required: [true, "Purpose is required"],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  location: {
    type: String,
    required: [true, "Purpose is required"],
  },
  languages: {
    type: String,
    required: [true, "Date is required"],
  },
  worked: {
    type: Number,
    default: 100,
  },
  allowed: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const guides = mongoose.models.guides || mongoose.model("guides", guideSchema);

export default guides;
