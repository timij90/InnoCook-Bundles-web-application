import RecipeCard from "./RecipeCard";
import { Container, Row, Col } from "react-bootstrap";
export default function Favorites() {
	return (
		<div>
			<h1>Favorites</h1>
			<p>Favorite recipes will be displayed here.</p>

			<Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-4">
            <RecipeCard />
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <RecipeCard />
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <RecipeCard />
          </Col>
        </Row>
      </Container>

		</div>
	);
}

