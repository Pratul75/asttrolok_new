const mongoose = require("mongoose");


const AstrologerPersonalDetailModelSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
     required: true,
      min: 2,
      max: 25,
    },
    lastName: {
      type: String,
     required: true,
      min: 2,
      max: 25,
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
     required: true,
      unique: true,
    },
    password: {
      type: String,
     required: true,
      min: 6,
    },
    mobile: {
      type: Number,
    },
    profilePicture: {
      id: String,
      secure_url: String,
    },
    nationalBookCharges: {
      type: Number,
      default: "0",
    },
    role: {
      type: String,
      default: "astrologer",
    },
    internationalBookCharges: {
      type: Number,
      default: "0",
    },
    experienceInYears: {
      type: Number,
    },
    organization: {
      type: String,
      default: "Asttrolok",
    },
    address: {
      type: String,
    },
    areaofInterest: [
      {
        type: String,
      },
    ],
    videoType: {
      type: String,
    },
    reviewVideoLink: {
      type: String,
    },
    // Astrologerdetails: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Astrologer" // use the model name as a string for the ref option
    // }
  },
  { timestamps: true }
);



module.exports = mongoose.model("AstrologerPersonalDetailModelSchema", AstrologerPersonalDetailModelSchema);
