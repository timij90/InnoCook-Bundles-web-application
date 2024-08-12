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
// api/auth.js

const { authController } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

module.exports = async (req, res) => {
  // Middleware logic can be added here
  authMiddleware(req, res, () => {
    if (req.method === 'POST') {
      authController.login(req, res);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  });
};
