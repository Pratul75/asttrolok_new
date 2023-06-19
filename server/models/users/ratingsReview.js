const mongoose = require("mongoose");
const Usermodel = require("./Usermodel");
const AstrologerPersonalDetailModel = require("../Astrologers/AstrologerPersonalDetailModel");

const ratingReview = mongoose.Schema({

    // here user is giving rating to astrologer we are not creating an array of obj as if astrologer has 1000ratings and we need to see only one then it be fetching us all
    
    astrologerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerPersonalDetailModel, // use the model name as a string for the ref option
        require:true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: Usermodel,
        require:true,
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    review:{
        type:String,
    },
    // here status means it should be approved by astrologer then they will make status:true, then it will show on the client side
    status: {
        type: String,
        enum: ['pending', 'accept','reject']
      }


}, { timestamps: true })
module.exports = mongoose.model("ratingReview", ratingReview);
