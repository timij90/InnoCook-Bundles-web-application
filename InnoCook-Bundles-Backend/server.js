// // /innocook-backend/server.js
// // require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const users = require('./routes/userRoutes');
// const auth = require('./routes/authRoutes');
// const search = require('./routes/recipeRoutes');
//
// const app = express();
//
// // app.use(express.urlencoded({ extended: true }));
//
// // Connect Database
// connectDB();
//
// // Middleware
// // app.use(cors({
// //   origin: "https://inno-cook.vercel.app",  // Allow specific origin
// //   methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
// //   allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],  // Allowed headers
// // }));
// //
// //
// // // Handle preflight requests for all routes
// // app.options('*', cors());
//
// app.use(cors());
// // Body parser middleware
// app.use(express.json());
//
// // Define Routes
// app.use('/api/auth', auth);
// app.use('/api/users', users);
// app.use('/api/recipes', search);
//
// const PORT = process.env.PORT || 8080;
//
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//
// module.exports = app;
//
// /innocook-backend/server.js
// require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const users = require('./routes/userRoutes');
const auth = require('./routes/authRoutes');
const search = require('./routes/recipeRoutes');
const app = express();


// Connect Database
connectDB();

// Middleware

app.use(cors()); 

const corsOptions = {
	origin: 'https://inno-cook-bundles-web-application-5zz6af8ou.vercel.app/',
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions)); 

app.options('*', cors()); // Enable pre-flight requests for all routes

// app.use(express.json({ extended: false }));
app.use(express.json());

// Define Routes

// app.get("/", (req, res) => res.send("Express on Vercel")); // testing used
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/recipes', search);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Example route
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from the server!' });// testing used
  });
  
module.exports = app; 
