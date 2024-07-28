import Head from "next/head";
import { Form, Button } from "react-bootstrap";

export default function Login() {
	return (
		<div>
			<Head>
				<title>InnoCook Bundles</title>
			</Head>
			<main>
				<h1 className="slogan-title text-center">Login Page</h1>
				<div className="form-card">  <Form>
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
						Login
					</Button>
				</Form></div>

			</main>
		</div>
	);
}

