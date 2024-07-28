// pages/404.js or pages/404/index.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Custom404 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <section className="vh-100 d-flex align-items-center justify-content-center bg-gray-50 dark:bg-gray-700">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl md:text-3xl dark:text-gray-300">
                Sorry, we couldn't find this page.
              </p>
              <Button href="/" variant="danger" size="lg" className="mt-4 ">
                Back to Home Page
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Custom404;
