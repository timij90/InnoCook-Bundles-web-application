import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authenticateUser } from "@/services";
import RegisterModal from "@/components/RegisterModal";
import { useRouter } from "next/router";
import { useAuth } from '@/context/AuthContext';
import CustomAlert from '@/components/CustomAlert'; 

export default function Login(props) {
  const { register, handleSubmit, formState: { errors, touchedFields }, reset, trigger } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [warning, setWarning] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleClose = () => {
    reset(); // Reset the form fields and touched fields
    setShowRegister(false);
  };
  const handleShow = () => setShowRegister(true);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const token = await authenticateUser(data.email, data.password);
      login(token);
      setShowSuccess(true); // Show success message
      setWarning(''); // Clear any warnings
      setTimeout(() => {
        router.push("/");
      }, 3000); // Redirect after 3 seconds
    } catch (error) {
      console.error('Error during login:', error);
      setWarning(error.message);
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
          <CustomAlert
            show={warning !== ''}
            variant="danger"
            heading="Login Error"
            message={warning}
            onClose={() => setWarning('')}
          />

          <CustomAlert
            show={showSuccess}
            variant="success"
            heading="Welcome back!"
            message="You have successfully logged in."
            onClose={() => setShowSuccess(false)}
          />

          <Form id="login-form" className="shadow p-4 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register('email', { required: 'Email is required' })}
                isInvalid={touchedFields.email && errors.email}
              />
              {touchedFields.email && errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
                isInvalid={touchedFields.password && errors.password}
              />
              {touchedFields.password && errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
            </Form.Group>
            <div className="text-center">
              <Button className="my-button mb-4 w-100" type="submit" onClick={() => trigger()}>
                Login
              </Button>
              <p>
                Don't have an account? <Button variant="link" onClick={handleShow}>Register</Button>
              </p>
            </div>
          </Form>
        </div>
        <RegisterModal show={showRegister} handleClose={handleClose} />
      </main>
    </div>
  );
}
