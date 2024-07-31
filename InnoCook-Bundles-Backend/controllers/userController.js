// /innocook-backend/controllers/userController.js
const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateUser = async (req, res) => {
    const { username, email, password } = req.body;
    const updatedFields = { username, email };
    if (password) {
        const salt = await bcrypt.genSalt(10);
        updatedFields.password = await bcrypt.hash(password, salt);
    }
    try {
        const user = await User.findByIdAndUpdate(req.user.id, { $set: updatedFields }, { new: true });
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.json({ msg: 'User deleted' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.addFavorite = async (req, res) => {
    const { recipe } = req.body;
    try {
        const user = await User.findById(req.user.id);
        user.favorites.push(recipe);
        await user.save();
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
