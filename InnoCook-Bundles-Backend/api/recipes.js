// /innocook-backend/api/recipes.js

const express = require('express');
const { searchRecipes, searchRecipeById } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');

const app = express();
app.use(express.json());

app.post('/api/recipes/search', searchRecipes);
app.post('/api/recipes/search/id', authMiddleware, searchRecipeById);

module.exports = app;
