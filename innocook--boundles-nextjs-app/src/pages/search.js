// pages/index.js
import Head from "next/head";
import { Form, Button, FloatingLabel, Row, Col, Container } from "react-bootstrap";
import RecipeCard from "@/components/RecipeCard";

export default function Search() {
	return (
		<div>
			<Head>
				<title>Search | InnoCook Bundles</title>
			</Head>
			<main>
				<div className="text-center">
					<h1 className="slogan-title">Unlock the Chef in You:</h1>
					<h1 className="slogan-title">Recipes, Instructions, Delivered!</h1>
				</div>
				<div className="search-form form-card justify-content-center">	<Form>
					<Row className="g-2  form-weight">
						<Form.Select aria-label="Floating label select example">
						<option value="">Select Meal Type</option>
								<option value="Breakfast">Breakfast</option>
								<option value="Lunch">Lunch</option>
								<option value="Dinner">Dinner</option>
						</Form.Select>
					</Row>
					<Row className="g-2 mt-3  form-weight">
						<FloatingLabel
							controlId="floatingInput"
							label="Recipe Name"
							className="mb-3"
						>
							<Form.Control type="text" placeholder="Recipe Name" />
						</FloatingLabel>
					</Row>
					<Row className="g-2 mt-3 form-weight">
						<Button variant="outline-success">Search</Button>
					</Row>
				</Form></div>

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
			</main>
		</div>
	);
}
