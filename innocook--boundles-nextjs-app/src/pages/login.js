import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import RegisterModal from "@/components/RegisterModal";

export default function Login() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

	
	return (
		<div>
			<Head>
				<title>Login | InnoCook Bundles</title>
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
					<Button className="my-button font-monospace" onClick={handleShow}>
					Register
					</Button>
				</Form>
				</div>
				<RegisterModal show={show} handleClose={handleClose} />
			</main>
		</div>
	);
}

