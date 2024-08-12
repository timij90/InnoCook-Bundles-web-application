// /innocook-backend/routes/recipeRoutes.js
const express = require('express');
const { searchRecipes, searchRecipeById } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/search', searchRecipes);
router.post('/search/id', authMiddleware, searchRecipeById);

module.exports = router;