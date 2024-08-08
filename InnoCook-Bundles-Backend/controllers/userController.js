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
    const { recipeId } = req.body;
    try {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`);
        const data = await response.json();

        if (!data || !data.recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        const recipe = data.recipe;
        const user = await User.findById(req.user.id);
        const recipeIndex = user.favorites.findIndex(recipe => recipe.uri.includes(recipeId));

        if (recipeIndex !== -1) {
            console.log(recipeIndex);
            return res.status(400).json({ message: 'Already added to favorites' });
        }

        user.favorites.push(recipe);
        await user.save();
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteFavorite = async (req, res) => {
    const { recipeId } = req.body;

    try {
        const user = await User.findById(req.user.id);
        const recipeIndex = user.favorites.findIndex(recipe => recipe.uri.includes(recipeId));

        if (recipeIndex === -1) {
            return res.status(404).json({ message: 'Recipe not found in favorites' });
        }

        user.favorites.splice(recipeIndex, 1);
        await user.save();
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.favorites.length > 0) res.json(user.favorites);
        else res.json([]);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};


exports.getHistory = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.history.length > 0) res.json(user.history);
        else res.json([])
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};