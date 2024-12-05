const Individual = require('../models/individual');
const Organization = require('../models/organization');
const bcrypt = require('bcryptjs');
const token = require('../utils/generateToken');
const {sendVerificationEmail,sendWelcomeEmail} = require('../mailtrap/email');

// organization signup, login and logout endpoints
const signupOrg = async (req,res) => {
    const {email, password, name} = req.body;

    try{
        if(!email || !password || !name){
            throw new Error("Alls fields are required");
        }
        const userAlreadyExists = await Organization.findOne({email});
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

const verifyEmail = async (req,res) => {
    const { code } = req.body;
	try {
		const orgUser = await Individual.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!orgUser) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		orgUser.isVerified = true;
		orgUser.verificationToken = undefined;
		orgUser.verificationTokenExpiresAt = undefined;
		await orgUser.save();

		await sendWelcomeEmail(orgUser.email, orgUser.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...orgUser._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};


const loginOrg = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await orgUser.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, orgUser._id);

		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};

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
    verifyEmail,
    loginOrg,
    logoutOrg,
    signupInd,
    loginInd,
    logoutInd
}