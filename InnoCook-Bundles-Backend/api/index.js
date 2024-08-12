// // api/index.js
// require('dotenv').config();
// const express = require('express');
// const connectDB = require('../config/db');
// const cors = require('cors');
// const users = require('../routes/userRoutes');
// const auth = require('../routes/authRoutes');
// const search = require('../routes/recipeRoutes');

// const app = express();

// // Connect Database
// connectDB();

// // CORS Configuration
// app.use(cors({
//   origin: "https://inno-cook.vercel.app",  // Allow specific origin
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
// }));

// // Handle preflight requests for all routes
// app.options('*', cors());

// // Body parser middleware
// app.use(express.json());

// // Define Routes
// app.use('/auth', auth);   // This mounts routes like /auth/register, /auth/login
// app.use('/users', users);
// app.use('/recipes', search);

// // Test Route
// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello from the server!' });
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = app;


// api/index.js
require('dotenv').config();
const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');
const users = require('../routes/userRoutes');
const auth = require('../routes/authRoutes');
const search = require('../routes/recipeRoutes');

const app = express();

// Connect Database
connectDB();

// CORS Configuration
app.use(cors({
  origin: "https://inno-cook.vercel.app",  // Allow specific origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

// Handle preflight requests for all routes
app.options('*', cors());

// Body parser middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', auth);   // Update this to match server.js
app.use('/api/users', users); // Consistent route paths
app.use('/api/recipes', search); // Consistent route paths

// Test Route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;

