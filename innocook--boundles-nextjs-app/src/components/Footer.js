// components/Footer.js
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Footer() {
    const router = useRouter();

    if (router.pathname === '/login') {
        return null; // Don't render the footer on the login page
    }

    return (
        <footer className="lighter-footer text-white mt-3">
            <Container>
                <Row className="py-4">
                    <Col md={4}>
                        <h5>InnoCook Bundles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/search" className="text-white">Search</a></li>
                            <li><a href="/premium" className="text-white">Premium</a></li>
                            <li><a href="/about" className="text-white">About Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="me-3"><a href="#" className="text-white"><i className="bi bi-facebook"></i></a></li>
                            <li className="me-3"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
                            <li className="me-3"><a href="#" className="text-white"><i className="bi bi-instagram"></i></a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: support@innocook.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </Col>
                </Row>
                <Row className="pt-3 border-top">
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} InnoCook Bundles. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
