const Individual = require('../models/individual');
const Organization = require('../models/organization');
const bcrypt = require('bcryptjs');
const token = require('../utils/generateToken');
const sendVerificationEmail = require('../mailtrap/email');

// organization signup, login and logout endpoints
const signupOrg = async (req,res) => {
    const {email, password, name} = req.body;

    try{
        if(!email || !password || !name){
            throw new Error("Alls fields are required");
        }
        const userAlreadyExists = await Individual.findOne({email});
        console.log("userAlreadyExists", userAlreadyExists)
        if (userAlreadyExists) {
            return res.status(400).json({success:false, message: 'user already exists'});

        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const orgUser = new Organization ({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })

        await orgUser.save();
        
        // jwt
        token(res, orgUser._id);

        // send email
        sendVerificationEmail(orgUser.email,verificationToken);
        
		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...orgUser._doc,
				password: undefined,
			},
        });

    }catch (error) {
        res.status(400).json({success:false, message: error.message});
    }

};
const loginOrg = async (req,res) => {
    res.send('login route')
}
const logoutOrg = async (req,res) => {
    res.send('logout route')
}

const signupInd = async (req,res) => {
    const {email, password, name} = req.body;

    try{
        if(!email || !password || !name){
            throw new Error("Alls fields are required");
        }
        const userAlreadyExists = await Individual.findOne({email});
        if (userAlreadyExists) {
            return res.status(400).json({success:false, message: 'user already exists'});
        }
    }catch (error) {
        res.status(400).json({success:false, message: error.message});
    }

};
const loginInd = async (req,res) => {
    res.send('login route')
}
const logoutInd = async (req,res) => {
    res.send('logout route')
}

module.exports = {
    signupOrg,
    loginOrg,
    logoutOrg,
    signupInd,
    loginInd,
    logoutInd
}