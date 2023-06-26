// AstrologerAccountModel.js
const mongoose = require("mongoose");
const AstrologerPersonalDetailModel = require("./AstrologerPersonalDetailModel");

// we creating this schema as we have more details than astrologermodel schema sir told this could be use somewhere else 

const AstrologerAccountSchema = new mongoose.Schema({

    AstrologerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerPersonalDetailModel // use the model name as a string for the ref option
      },

    biography: {
        type: String,
        default:" ",
    },
    specialization: [{
        type: String
    }],
    education: [{
        degree: {
            type: String,
        },
        institute: {
            type: String,
        },
        yoc: {
            type: Number,
        }
    }],
    experience: [{
        organizationName: {
            type: String,
        },
        from: {
            type: Number,
        },
        to: {
            type: Number,
        },
        designation: {
            type: String,
        },
    }],
    additionalWork: [{
        awards: {
            type: String,
        },
        description: {
            type: String,
        },
        year: {
            type: Number,
        },
    }],
},
    { timestamps: true })

module.exports = mongoose.model("AstroAccounts", AstrologerAccountSchema);