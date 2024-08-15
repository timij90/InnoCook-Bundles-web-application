// /innocook-backend/models/User.js
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: Object }],
    history: [{ type: Object }]
});

module.exports = mongoose.model('User', UserSchema);

// // /innocook-backend/models/User.js
// const { MongoClient } = require('mongodb');
// const connectDB = require('../config/db');

// let usersCollection;

// const getUsersCollection = async () => {
//     if (!usersCollection) {
//         await connectDB();
//         const client = new MongoClient(process.env.MONGODB_URI);
//         const db = client.db('innocook-bundles'); // Replace 'yourDatabaseName' with your actual database name
//         usersCollection = db.collection('users');
//     }
//     return usersCollection;
// };

// module.exports = getUsersCollection;
