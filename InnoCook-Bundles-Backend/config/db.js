// /innocook-backend/config/db.js
// const mongoose = require('mongoose');
//
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };
//
// module.exports = connectDB;
//
// const { MongoClient, ServerApiVersion } = require('mongodb');
//
// const uri = process.env.MONGODB_URI;
//
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
//
// const connectDB = async () => {
//     try {
//         // Connect the client to the server (optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };
//
// module.exports = connectDB;

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB with MongoClient");

        // Define operations here if needed
        const database = client.db('newdb');
        const collection = database.collection('newcoll');

        const documents = [
            { key: 'Id' },
            { key: 'Name' },
            { key: 'Age' }
        ];
        const result = await collection.insertMany(documents);
        console.log(`Inserted ${result.insertedCount} documents`);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    } finally {
        await client.close();
    }
};

connectDB().catch(console.error);
