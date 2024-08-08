import { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomPagination from './CustomPagination'; // Import your custom pagination component

const Favorites = ({ favorites, onDelete, isPremiumPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFavorites = favorites.slice(startIndex, endIndex);

  return (
    <div className="tabs-container">
      <h1 className="tabs-title">My Favorites</h1>
      <Container>
        <Row className="justify-content-center">
          {displayedFavorites.length === 0 ? (
            <Col xs={12} className="mb-4 text-center">
              <Card className="no-added-card text-center">
                <Card.Body>
                  <Card.Title>No Favorites Added</Card.Title>
                  <Card.Text>
                    You haven't added any recipes to your favorites yet. Start adding some to see them here!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            displayedFavorites.map((recipe, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <RecipeCard recipe={recipe} onDelete={onDelete} isPremiumPage={isPremiumPage} />
              </Col>
            ))
          )}
        </Row>
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
