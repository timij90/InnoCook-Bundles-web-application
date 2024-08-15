// /innocook-backend/config/db.js
const mongoose = require('mongoose');

let isConnected; // Track the connection status

const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState;
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// 
// const client = new MongoClient(process.env.MONGODB_URI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
// 
// const connectDB = async () => {
//     try {
//         await client.connect();
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);  // Exit process with failure
//     }
// };
// 
// const getDB = (dbName) => client.db(dbName);
// 
// module.exports = { connectDB, getDB };