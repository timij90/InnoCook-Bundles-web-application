// /InnoCook-Bundles-Backend/api/auth.js

// const express = require('express');
// const { register, login } = require('../controllers/authController');
// const cors = require('cors');

// const app = express();

// // CORS Configuration
// app.use(cors({
//   origin: "*",  // Allow specific origin
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
// }));

// // Body parser middleware
// app.use(express.json());

// // Define Routes
// app.post('/api/auth/register', register);
// app.post('/api/auth/login', login);

// module.exports = app;

// /innocook-backend/routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;


