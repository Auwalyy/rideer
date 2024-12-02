const { MailtrapClient } = require("mailtrap");
require('dotenv').config();


const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Abdulhafiz",
};

module.exports = {
  client, sender
}