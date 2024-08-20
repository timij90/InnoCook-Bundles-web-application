// /innocook-backend/models/User.js
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: Object }],
    history: [{ type: Object }]
});

module.exports = mongoose.model('User', UserSchema);


