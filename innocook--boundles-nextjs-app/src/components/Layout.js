// components/Layout.js
import { useState } from 'react';
import { Button, Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Footer from './Footer';
import CustomAlert from '@/components/CustomAlert';  // Import the CustomAlert component

export default function Layout({ children }) {
  const router = useRouter();
  const { authState, logout } = useAuth();
  const { token, username } = authState;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      handleClose();
      router.push("/");
      setShowSuccess(true); // Show success logout message
    }, 2000);
    
    setTimeout(() => {
      setShowSuccess(false); // Close the success logout message after 5 seconds
    }, 5000); 
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div>
      <Navbar expand="lg">
        <Container fluid className="px-3">
          <Navbar.Brand href="/" className="{styles.navbarBrand}">
            <img
              alt=""
              src="https://cdn2.iconfinder.com/data/icons/cooking-56/64/30-cook_book-recipe_book-recipe-ingredients-kitchen-book-512.png"
              width="30"
              height="30"
              className="d-inline-block me-2"
            />
            InnoCook Bundles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/premium">Premium</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
            <Nav>
              {router.pathname !== '/login' && (
                token ? (
                  <Button className="my-button" onClick={handleShow}>
                    <i className="bi bi-list"></i>
                  </Button>
                ) : (
                  <Button className="my-button" href="/login">Login</Button>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomAlert
            show={showSuccess}
            variant="success"
            heading="See you soon!"
            message="You have successfully logged out."
            onClose={() => setShowSuccess(false)}
          />
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        backdrop={false}
        scroll={false}
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Name: {username}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column m-auto">
            <Nav.Link href="/premium">Favorites</Nav.Link>
            <Nav.Link href="/profile">View Profile</Nav.Link>

            <Button className="my-button" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <main>{children}</main>
      <Footer />
    </div>
  );
}


