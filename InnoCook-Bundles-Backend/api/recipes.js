// /innocook-backend/api/recipes.js

// const express = require('express');
// const { searchRecipes, searchRecipeById } = require('../controllers/recipeController');
// const authMiddleware = require('../middlewares/authMiddleware');
// const cors = require('cors');

// const app = express();
// app.use(cors({origin:"*",
// 	methods:["GET","POST","PUT","DELETE"]
// }));
// app.use(express.json());

// app.post('/api/recipes/search', searchRecipes);
// app.post('/api/recipes/search/id', authMiddleware, searchRecipeById);

// module.exports = app;

// // /innocook-backend/routes/recipeRoutes.js
// const express = require('express');
// const { searchRecipes, searchRecipeById } = require('../controllers/recipeController');
// const authMiddleware = require('../middlewares/authMiddleware');
// const router = express.Router();
// 
// router.post('api/recipes/search', searchRecipes);
// router.post('api/recipes/search/id', authMiddleware, searchRecipeById);
// 
// module.exports = router;
//api/recipes.js
const express = require('express');
const { searchRecipes, searchRecipeById } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');

const app = express();
app.use(express.json());

app.post('/api/recipes/search', searchRecipes);
app.post('/api/recipes/search/id', authMiddleware, searchRecipeById);

module.exports = app;
