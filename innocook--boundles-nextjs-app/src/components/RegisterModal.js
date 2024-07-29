import { Button, Form, Col, Row, Modal } from 'react-bootstrap';

function RegisterModal({show, handleClose}) {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Now!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

				</Form></div>
        </Modal.Body>
        <Modal.Footer>

		  <Button className="my-button font-monospace" type="submit">
						Submit
				  </Button>
				  <Button className="my-button font-monospace" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;