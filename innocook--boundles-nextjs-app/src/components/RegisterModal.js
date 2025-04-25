import { useForm } from 'react-hook-form';
import { registerUser } from "@/services";
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomAlert from './CustomAlert';

export default function RegisterModal({ show, handleClose }) {
	const { register, handleSubmit, formState: { errors, touchedFields }, trigger, reset } = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	});
	const [warning, setWarning] = useState('');
	const [showMessage, setShowMessage] = useState(false);
	const router = useRouter();

	const onSubmit = async (data, e) => {
		e.preventDefault();
		console.log('Form submitted'); // Debugging line
		try {
			const { firstName, lastName, email, password, confirmPassword } = data;
			const registered = await registerUser({ firstName, lastName, email }, password, confirmPassword);
			if (registered) {
				console.log('Registration successful'); // Debugging line
				setShowMessage(true); // Show success message

				setTimeout(() => {
					router.push("/");
				}, 4000); // Redirect to home page after 4 seconds
			}
		} catch (error) {
			console.error('Error during registration:', error); // Debugging line
			setWarning(error.message);
		}
	};

	const handleCloseModal = () => {
		reset();
		handleClose();
	};

	return (
		<>
			<Modal show={show} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Join Us!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CustomAlert show={warning !== ''}
						variant="danger"
						heading="Login Error"
						message={warning}
						onClose={() => setWarning('')}>
					</CustomAlert>
					<CustomAlert show={showMessage}
						variant="success"
						heading="Successfully Registered!"
						message="Start exploring your recipes now..."
						onClose={() => setShowMessage(false)}>

					</CustomAlert>
					<div className="form-card">
						<Form id="register-form" onSubmit={handleSubmit(onSubmit)}>
							<Row>
								<Col>
									{/* <Form.Label>First Name</Form.Label> */}
									<Form.Control
										placeholder="First name"
										{...register('firstName', { required: 'First name is required' })}
										isInvalid={touchedFields.firstName && errors.firstName}
									/>
									{touchedFields.firstName && errors.firstName && <Form.Text className="text-danger">{errors.firstName.message}</Form.Text>}
								</Col>
								<Col>
									{/* <Form.Label>Last Name</Form.Label> */}
									<Form.Control
										placeholder="Last name"
										{...register('lastName', { required: 'Last name is required' })}
										isInvalid={touchedFields.lastName && errors.lastName}
									/>
									{touchedFields.lastName && errors.lastName && <Form.Text className="text-danger">{errors.lastName.message}</Form.Text>}
								</Col>
							</Row>

							<Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
								{/* <Form.Label>Email address</Form.Label> */}
								<Form.Control
									type="email"
									placeholder="Enter email"
									{...register('email', { required: 'Email is required' })}
									isInvalid={touchedFields.email && errors.email}
								/>
								{touchedFields.email && errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
							</Form.Group>

							<Form.Group className="mb-4" controlId="formBasicPassword">
								{/* <Form.Label>Password</Form.Label> */}
								<Form.Control
									type="password"
									placeholder="Password"
									{...register('password', { required: 'Password is required', maxLength: { value: 20, message: 'Password cannot exceed 20 characters' } })}
									isInvalid={touchedFields.password && errors.password}
								/>
								{touchedFields.password && errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
							</Form.Group>

							<Form.Group className="mb-3" controlId="formConfirmPassword">
								{/* <Form.Label>Confirm Password</Form.Label> */}
								<Form.Control
									type="password"
									placeholder="Confirm Password"
									{...register('confirmPassword', { required: 'Confirm password is required' })}
									isInvalid={touchedFields.confirmPassword && errors.confirmPassword}
								/>
								{touchedFields.confirmPassword && errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword.message}</Form.Text>}
							</Form.Group>
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="my-button" form="register-form" type="submit" onClick={() => trigger()}>
						Register
					</Button>
					<Button className="my-button" onClick={handleCloseModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}


