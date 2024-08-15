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

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const users = require('./routes/userRoutes');
const auth = require('./routes/authRoutes');

const app = express();

//testing backend
const search = require('./routes/recipeRoutes');
const { searchRecipes, searchRecipeById } = require('./controllers/recipeController');
const authMiddleware = require('./middlewares/authMiddleware');
// Connect Database
connectDB();

// Middleware
app.use(cors()); 
// const corsOptions = {
// 	origin: 'https://inno-cook-bundles-web-application-5zz6af8ou.vercel.app/',
// 	methods: ['GET', 'POST', 'PUT', 'DELETE'],
// 	allowedHeaders: ['Content-Type', 'Authorization']
//   };
// app.options('*', cors()); // Enable pre-flight requests for all routes

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
  
app.get('/api/recipes', (req, res) => {
    res.json({ message: 'Hello from the recipes!' });// testing used
    });
    
    
//testing backend
app.post('/api/recipes/search', searchRecipes);
app.post('/api/recipes/search/id', authMiddleware, searchRecipeById);

module.exports = app