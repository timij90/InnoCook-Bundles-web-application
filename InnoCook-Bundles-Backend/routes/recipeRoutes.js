// /innocook-backend/routes/recipeRoutes.js
const express = require('express');
const { searchRecipes } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/search', authMiddleware, searchRecipes);

module.exports = router;