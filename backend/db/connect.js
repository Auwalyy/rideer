const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected successfully: $[connection.host]');
    }catch (error) {
        console.log('error connecting mongodb:', error.message);
        process.exit(1)
    }
}
module.exports = connectDB