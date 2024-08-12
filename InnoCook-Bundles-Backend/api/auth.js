// /InnoCook-Bundles-Backend/api/auth.js

const express = require('express');
const { register, login } = require('../controllers/authController');

const app = express();
app.use(express.json());

app.post('api/auth/register', register);
app.post('api/auth/login', login);

module.exports = app;
