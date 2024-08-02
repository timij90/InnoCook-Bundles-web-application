import RecipeCard from "./RecipeCard";
import { Container, Row, Col } from "react-bootstrap";

export default function History() {
	return (
		<div>
			<h1>History</h1>
			<p>Searched recipes will be displayed here.</p>
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