// pages/index.js
import Head from "next/head";
import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";


export default function Search() {
	return (
		<div>
			<Head>
				<title>Search Page</title>
			</Head>
			<main>
				<div className="text-center">
					<h1 className="slogan-title">Unlock the Chef in You:</h1>
					<h1 className="slogan-title">Recipes, Instructions, Delivered!</h1>
				</div>
				<div className="search-form form-card">	<Form>
					<Row className="g-2">
						<Col md><Form.Select aria-label="Floating label select example">
        <option>Category menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select></Col>
						<Col md>	<FloatingLabel
        controlId="floatingInput"
        label="Recipe Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Recipe Name" />
      </FloatingLabel></Col>
					</Row>
				
			

					 <Button variant="outline-success">Search</Button>
				</Form></div>

			</main>
		</div>
	);
}
