// api/auth.js

const express = require('express');
const authRoutes = require('../routes/authRoutes');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Export the Express app as a serverless function
module.exports = app;
