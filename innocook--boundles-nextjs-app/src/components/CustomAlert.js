// components/CustomAlert.js

import { Alert, Button } from 'react-bootstrap';

export default function CustomAlert({ show, variant, heading, message, onClose }) {
  if (!show) return null;

  return (
    <Alert variant={variant} onClose={onClose} dismissible>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{message}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={onClose} variant={`outline-${variant}`}>
          Close
        </Button>
      </div>
    </Alert>
  );
}
