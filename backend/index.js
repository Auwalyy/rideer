const express = require("express");
const connectDB = require("./db/connect");
const authRoutes = require('./routes/auth.routes')
const app = express()
require('dotenv').config();

const PORT = process.env.PORT || 3000

app.use(express.json());

app.listen(PORT, ()=> {
    connectDB();
    console.log(`Server running on port: http://localhost:${PORT}`)
});

app.use('/api/auth', authRoutes);