// /innocook-backend/api/recipes.js

const express = require('express');
const { searchRecipes, searchRecipeById } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/recipes/search', searchRecipes);
router.post('/recipes/search/id', authMiddleware, searchRecipeById);

module.exports = router
