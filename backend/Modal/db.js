const mongoose = require('mongoose'); 
const dotenv =require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Access the URL from process.env
const mongoUrl = process.env.MONGO_CONN;

//connect mongoDB
mongoose.connect(mongoUrl)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((e) => {
        console.log('Error: ',e);
    });