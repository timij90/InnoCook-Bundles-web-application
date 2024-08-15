// /InnoCook-Bundles-Backend/api/auth.js

const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get('/test', (req, res) => res.send('Auth route is working'));

module.exports = router;
