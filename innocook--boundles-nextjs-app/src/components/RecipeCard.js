import { useState, useEffect } from 'react';
import { isAuthenticated, addFavorite, addRecentlyViewed, deleteFavorite, getFavorites } from '@/services';
import { Card, Button, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';

const RecipeCard = ({ recipe, onDelete, isPremiumPage, isHistory }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [warning, setWarning] = useState('');
    const router = useRouter();

    const recipeUri = recipe.uri;
    const recipeId = recipeUri.split('#recipe_')[1];

    useEffect(() => {
        const checkFavoriteStatus = async () => {
            if (isAuthenticated()) {
                try {
                    const userFavorites = await getFavorites();
                    setIsFavorite(userFavorites.some(fav => fav.uri.includes(recipeId)));
                } catch (error) {
                    console.error('Error fetching favorites:', error);
                }
            }
        };
        checkFavoriteStatus();
    }, [recipeId]);

    const handleOnClick = async (e) => {
        e.preventDefault();

        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }
        
        try {
            const fetchedRecipe = await addRecentlyViewed(recipeId);
            router.push(fetchedRecipe.url);
        } catch (error) {
            console.error(error.message);
        }
    };

//     const handleToggleFavorite = async () => {
//         if (!isAuthenticated()) {
//             router.push('/login');
//             return;
//         }
//
//         try {
//             if (isFavorite) {
//                 await deleteFavorite(recipeId);
//                 setIsFavorite(false);
//                 if (!isHistory) {
//                     onDelete(recipeId); // Call the onDelete function passed as a prop if not in History
//                 }
//             } else {
//                 await addFavorite(recipeId);
//                 setIsFavorite(true);
//             }
//         } catch (error) {
//             console.error('Error toggling favorite:', error);
//             setWarning(error.message);
//         }
//     };

    
const handleAddFavorite = async () => {
    if (!isAuthenticated()) {
        router.push('/login');
        return;
    }

    try {
        await addFavorite(recipeId);
        setIsFavorite(true);
    } catch (error) {
        console.error('Error adding to favorites:', error);
        setWarning(error.message);
    }
};

const handleDeleteFavorite = async () => {
    if (!isAuthenticated()) {
        router.push('/login');
        return;
    }

    try {
        await deleteFavorite(recipeId);
        if (isPremiumPage) {
            onDelete(recipeId); // Call the onDelete function passed as a prop
        } else {
            setIsFavorite(false); // Unfavorite the recipe
        }
    } catch (error) {
        console.error('Error deleting from favorites:', error);
        setWarning(error.message);
    }
};
    return (
        <Card className='recipe-card'>
            <Card.Img variant="top" src={recipe.image} className='recipe-card-image' />
            <Card.Body className='recipe-card-body'>
                <Card.Title>{recipe.label}</Card.Title>
                <Card.Text>{recipe.source}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button
                        href={recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="recipe-card-button"
                    >
                        <i className="bi bi-book" onClick={handleOnClick}> Recipe</i>
                    </Button>
                    {isPremiumPage && !isHistory ? (
                        <i className="bi bi-trash text-warning" onClick={handleDeleteFavorite}></i>
                    ) : (
                        <i
                            className={`bi ${isFavorite ? 'bi-heart-fill text-danger' : 'bi-heart text-danger'}`}
                            onClick={isFavorite ? handleDeleteFavorite : handleAddFavorite}
                        ></i>
                    )}
                </div>
            </Card.Body>
            {warning && (
                <div className='d-flex justify-content-center'>
                    <br />
                    <Alert variant='danger'>
                        {warning}
                    </Alert>
                </div>
            )}
        </Card>
    );
};

export default RecipeCard;
