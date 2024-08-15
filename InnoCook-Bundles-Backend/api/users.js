// /InnoCook-Bundles-Backend/api/users.js

// const express = require('express');
// const {
//     getUser,
//     updateUser,
//     deleteUser,
//     addFavorite,
//     getFavorites,
//     deleteFavorite,
//     getHistory
// } = require('../controllers/userController');
// const authMiddleware = require('../middlewares/authMiddleware');
// 
// // const cors = require('cors');
// // const app = express();
// // app.use(cors({origin:"*",
// // 	methods:["GET","POST","PUT","DELETE"]
// // }));
// // app.use(express.json());
// 
// app.get('/me', authMiddleware, getUser);
// app.put('/me', authMiddleware, updateUser);
// app.delete('/me', authMiddleware, deleteUser);
// app.get('/me/history', authMiddleware, getHistory);
// app.post('/me/favorites', authMiddleware, addFavorite);
// app.get('/me/favorites', authMiddleware, getFavorites);
// app.delete('/me/favorites', authMiddleware, deleteFavorite);
// 
// module.exports = app;

const express = require('express');
const { getUser, updateUser, deleteUser, addFavorite, getFavorites, deleteFavorite, getHistory } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/me', authMiddleware, getUser);
router.put('/me', authMiddleware, updateUser);
router.delete('/me', authMiddleware, deleteUser);
router.get('/me/history', authMiddleware, getHistory);
router.post('/me/favorites', authMiddleware, addFavorite);
router.get('/me/favorites', authMiddleware, getFavorites);
router.delete('/me/favorites', authMiddleware, deleteFavorite);

module.exports = router;