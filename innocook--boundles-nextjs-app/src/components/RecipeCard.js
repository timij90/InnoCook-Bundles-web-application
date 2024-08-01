import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.label}</Card.Title>
                <Card.Text>
                    {recipe.source}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Link href={recipe.url}>View Recipe</Card.Link>
                    <Button className="btn btn-sm btn-danger" variant="primary">
                        <i className="bi bi-heart"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
