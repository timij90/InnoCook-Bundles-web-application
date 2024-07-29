// components/Layout.js
import { Container, Navbar, Nav } from 'react-bootstrap';


export default function Layout({ children }) {
  return (
    <div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>

      <Navbar>
        <Container fluid className="px-3">
          <Navbar.Brand href="/" className="{styles.navbarBrand}">
                <img
                alt=""
      src="https://cdn2.iconfinder.com/data/icons/cooking-56/64/30-cook_book-recipe_book-recipe-ingredients-kitchen-book-512.png
"
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />
            InnoCook Bundles
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav.Item>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/premium">Premium</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav.Item>

        </Container>
      </Navbar>

      <main>{children}</main>
      <footer>
        
      </footer>
    </div>
  );
}
