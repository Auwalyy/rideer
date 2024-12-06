const {	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
	WELCOME_EMAIL_TEMPLATE
} = require('../mailtrap/emailTemplate');
const { client, sender } = require("./mailtrap.config.js");

const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

const sendWelcomeEmail = async (email,name) => {
	const recipient = [{email}];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
			
		});

	console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error('error sending welcome email', error);

		throw new Error('error sending welcome email: ${error} ');
	}
};

module.exports = {
	sendVerificationEmail,
	sendWelcomeEmail
}