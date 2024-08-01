// /innocook-backend/controllers/recipeController.js

exports.searchRecipes = async (req, res) => {
    const { recipeName, mealType, cuisineType, dishType } = req.body;

    let query = `q=${recipeName}`;
    if (mealType) query += `&mealType=${mealType}`;
    if (cuisineType) query += `&cuisineType=${cuisineType}`;
    if (dishType) query += `&dishType=${dishType}`;

    try {
        const response = await fetch(`https://api.edamam.com/search?${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`);
        const data = await response.json();
        if (data.hits) {
            res.json(data.hits);
        } else {
            res.json([]);
        }
    } catch (err) {
        console.error('Error fetching recipes:', err);
        res.status(500).json({ msg: 'Server error' });
    }
};


// exports.searchRecipes = async (req, res) => {
//     const { recipeName, mealType, cuisineType, dishType } = req.body;

//     if (!process.env.EDAMAM_APP_ID || !process.env.EDAMAM_APP_KEY) {
//         console.error('Missing EDAMAM API credentials');
//         return res.status(500).json({ msg: 'Server error: Missing API credentials' });
//     }

//     let query = `q=${encodeURIComponent(recipeName)}`;
//     if (mealType) query += `&mealType=${encodeURIComponent(mealType)}`;
//     if (cuisineType) query += `&cuisineType=${encodeURIComponent(cuisineType)}`;
//     if (dishType) query += `&dishType=${encodeURIComponent(dishType)}`;

//     const apiUrl = `https://api.edamam.com/search?${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`;

//     try {
//         console.log(`Fetching recipes from: ${apiUrl}`);
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error('Error response from API:', response.status, errorText);
//             return res.status(500).json({ msg: 'Error fetching recipes from API', details: errorText });
//         }
//         const data = await response.json();
//         if (Array.isArray(data.hits)) {
//             res.json(data.hits);
//         } else {
//             console.error('Unexpected API response structure:', data);
//             res.status(500).json({ msg: 'Server error: Unexpected API response structure' });
//         }
//     } catch (err) {
//         console.error('Error fetching recipes:', err);
//         res.status(500).json({ msg: 'Server error', details: err.message });
//     }
// };
