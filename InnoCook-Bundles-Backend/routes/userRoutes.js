// /innocook-backend/routes/userRoutes.js
const express = require('express');
const { getUser, updateUser, deleteUser, addFavorite, getFavorites } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/me', authMiddleware, getUser);
router.put('/me', authMiddleware, updateUser);
router.delete('/me', authMiddleware, deleteUser);
router.post('/me/favorites', authMiddleware, addFavorite);
router.get('/me/favorites', authMiddleware, getFavorites);

module.exports = router;