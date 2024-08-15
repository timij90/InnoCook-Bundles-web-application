// /innocook-backend/config/mongoose.js
const mongoose = require('mongoose');

const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,   // Deprecated in Mongoose 6.x
            useFindAndModify: false // Deprecated in Mongoose 6.x
        });
        console.log("Mongoose connected to MongoDB Atlas!");
    } catch (err) {
        console.error("Mongoose connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectMongoose;
