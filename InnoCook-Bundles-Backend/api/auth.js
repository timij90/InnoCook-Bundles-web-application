// /InnoCook-Bundles-Backend/api/auth.js

const express = require('express');
const { register, login } = require('../controllers/authController');
const cors = require('cors');

const app = express();

// CORS Configuration
// app.use(cors({
//   origin: "https://inno-cook.vercel.app",  // Allow specific origin
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
// }));

app.use(cors({origin:"*",
	methods:["GET","POST","PUT","DELETE"]
}));

// Body parser middleware
app.use(express.json());

// Define Routes
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

module.exports = app;

