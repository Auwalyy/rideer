const mongoose = require('mongoose');

// individual schema
const individualSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
        },
    name:{
        type:String,
        required:true
        },
    password: {
        type:String,
        required:true
        },
    lastLogin: {
        type:Date,
        default:Date.now
        },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
}, {timestamps:true});

// create the model
const Individual = mongoose.model('orgUser', individualSchema)

// export model
module.exports = Individual


