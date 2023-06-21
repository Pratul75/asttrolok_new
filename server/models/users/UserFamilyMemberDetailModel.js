const mongoose = require("mongoose");
const Usermodel = require("./Usermodel");

const UserSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Usermodel,
    },
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
  
    },
   
    mobile: {
      type: Number,
      required: true,
    },
    profilePicture: {
      id: String,
      secure_url: String,
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
