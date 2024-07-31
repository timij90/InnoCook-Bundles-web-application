// /innocook-backend/controllers/recipeController.js

exports.searchRecipes = async (req, res) => {
    const { query } = req.body;
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`);
        const data = await response.json();
        res.json(data.hits);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}