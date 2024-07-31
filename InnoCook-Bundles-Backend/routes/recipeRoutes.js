// /innocook-backend/routes/recipeRoutes.js
const express = require('express');
const { searchRecipes } = require('../controllers/recipeController');
const router = express.Router();

router.post('/search', searchRecipes);

module.exports = router;