// import Head from "next/head";
// import { Form, Button } from "react-bootstrap";
// import { useState } from "react";
// import { authenticateUser } from "@/services";
// import RegisterModal from "@/components/RegisterModal";
// import { useRouter } from "next/router";

// export default function Login() {
// 	const [show, setShow] = useState(false);
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const router = useRouter();

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		console.log('Form submitted'); // Debugging line
// 		try {
// 			await authenticateUser(email, password);
// 			router.push("/search");

// 		} catch (error) {
// 			console.error('Error during login:', error); // Debugging line
// 		}
// 	};

// 	return (
// 		<div>
// 			<Head>
// 				<title>Login | InnoCook Bundles</title>
// 			</Head>
// 			<main>
// 				<h1 className="slogan-title text-center">Login Page</h1>
// 				<div className="form-card">  <Form onSubmit={handleSubmit}>
// 					<Form.Group className="mb-3" controlId="formBasicEmail">
// 						<Form.Label>Email address</Form.Label>
// 						<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
// 						<Form.Text className="text-muted">

// 						</Form.Text>
// 					</Form.Group>

// 					<Form.Group className="mb-3" controlId="formBasicPassword">
// 						<Form.Label>Password</Form.Label>
// 						<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// 					</Form.Group>
// 					<Button className="my-button font-monospace" type="submit">
// 						Login
// 					</Button>
// 					<Button className="my-button font-monospace" onClick={handleShow}>
// 						Register
// 					</Button>
// 				</Form>
// 				</div>
// 				<RegisterModal show={show} handleClose={handleClose} />
// 			</main>
// 		</div>
// 	);
// }


import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authenticateUser } from "@/services";
import RegisterModal from "@/components/RegisterModal";
import { useRouter } from "next/router";

export default function Login() {
	const { register, handleSubmit, formState: { errors, touchedFields }, reset, trigger } = useForm({
		defaultValues: {
			email: "",
			password: ""
		}
	});
	const [show, setShow] = useState(false);
	const router = useRouter();

	const handleClose = () => {
		reset(); // Reset the form fields and touched fields
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const onSubmit = async (data, e) => {
		e.preventDefault();
		console.log('Form submitted'); // Debugging line
		try {
			await authenticateUser(data.email, data.password);
			router.push("/search");
		} catch (error) {
			console.error('Error during login:', error); // Debugging line
		}
	};

	return (
		<div>
			<Head>
				<title>Login | InnoCook Bundles</title>
			</Head>
			<main>
				<h1 className="slogan-title text-center">Login Page</h1>
				<div className="form-card">
					<Form id="login-form" onSubmit={handleSubmit(onSubmit)}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								{...register('email', { required: 'Email is required' })}
								isInvalid={touchedFields.email && errors.email}
							/>
							{touchedFields.email && errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								{...register('password', { required: 'Password is required' })}
								isInvalid={touchedFields.password && errors.password}
							/>
							{touchedFields.password && errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
						</Form.Group>
						<Button className="my-button font-monospace" type="submit" onClick={() => trigger()}>
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
