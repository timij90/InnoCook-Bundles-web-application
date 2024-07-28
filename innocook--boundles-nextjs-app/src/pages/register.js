import Head from "next/head";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function Register() {
	return (
		<div>
			<Head>
				<title>InnoCook Bundles</title>
			</Head>
			<main>
				<h1 className="slogan-title text-center">Register Page</h1>
				<div className="form-card">  <Form>
					<Row>
						<Col>
							<Form.Label>First Name</Form.Label>

							<Form.Control placeholder="First name" />
						</Col>
						<Col>
							<Form.Label>Last Name</Form.Label>

							<Form.Control placeholder="Last name" />
						</Col>
					</Row>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">

						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button className="my-button font-monospace" type="submit">
						Register
					</Button>
				</Form></div>

			</main>
		</div>
	);
}

