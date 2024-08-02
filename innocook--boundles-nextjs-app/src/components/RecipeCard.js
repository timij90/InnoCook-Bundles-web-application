import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const RecipeCard = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite); // Toggle the favorite state
    };

    if (!recipe) {
        return (
            <Card className="recipe-card">
                <Card.Body className="recipe-card-body">
                    <Card.Title className="recipe-card-title">No Recipe Available</Card.Title>
                    <Card.Text className="recipe-card-text">
                        Please select a recipe to view details.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Card className="recipe-card">
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body className="recipe-card-body">
                <Card.Title className="recipe-card-title">{recipe.label}</Card.Title>
                <Card.Text className="recipe-card-text">
                    {recipe.source}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button href={recipe.url} className="recipe-card-button">
                        <i className="bi bi-book"> Recipe</i>
                    </Button>
                    <Button className="recipe-card-fav-button" onClick={handleFavoriteClick}>
                        <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
