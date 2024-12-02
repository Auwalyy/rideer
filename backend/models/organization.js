const mongoose = require('mongoose');

// organization schema
const organizationSchema = new mongoose.Schema({
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
// const Organization = mongoose.model('User', organizationSchema)
const Organization = mongoose.models.orgUser || mongoose.model('orgUser', organizationSchema);

// export model
module.exports = Organization


