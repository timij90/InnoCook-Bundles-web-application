import { useState } from "react";
import { useForm } from "react-hook-form"
import { registerUser } from "../services";
import { useRouter } from "next/router";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // Your form submission logic here
    router.reload();
  };
  return (
    <>
      <div className="form-card">
        <Form id="register-form" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First name"
                {...register('firstName', { required: true })}
                className={`${errors.firstName ? "inputError" : ""} mb-3`}

              />
              {/* {errors.firstName && <span>This field is required</span>} */}
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && <span>This field is required</span>}
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword', { required: true })}
            />
            {errors.confirmPassword && <span>This field is required</span>}
          </Form.Group>
        </Form>
      </div>

      <Button className="my-button font-monospace" form="register-form" type="submit">
        Register
      </Button>


    </>
  );
}

