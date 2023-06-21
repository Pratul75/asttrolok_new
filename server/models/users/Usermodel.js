const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 2,
      max: 25,
    },
    lastName:{
      type: String,
      require: true,
      min: 2,
      max: 25,
    },
    gender: {
      type: String,
    },
    birthTime: {
      type: String,
    },
    birthCountry: {
      type: String,
    },
    birthCity: {
      type: String,
    },

    birthDate: {
      type: String,
    },

    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    mobile: {
      type: Number,
    },
    profilePicture: {
      id: String,
      secure_url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    address:{
      type: String,
    },
    location:{
      type: String,
    },
    message:{
      type:String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("userData", UserSchema);
