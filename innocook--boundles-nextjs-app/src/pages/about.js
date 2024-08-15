// import { Stack, Container } from 'react-bootstrap';
// import MeetTheTeam from '@/components/MeetTheTeam';
//
// function About() {
// 	return (
// 		<div className="align-items-center text-center"> <main>
// 			<Stack gap={3}>
// 			<div className="p-2">First item</div>
// 			<div className="p-2">Second item</div>
// 			<div className="p-2">
// 			</div>
// 		</Stack><Container fluid id="about-section" className="mt-5">
// 					<MeetTheTeam />
// 				</Container></main> </div>
//
// 	);
// }
//
// export default About;

import { Container, Row, Col, Card, ListGroup, Stack } from 'react-bootstrap';
import MeetTheTeam from '@/components/MeetTheTeam';

function About() {
  return (
    <Container fluid className="p-4">
      <main>
        {/* Hero Section */}
        <section className="text-center mb-5">
          <h1 className="display-4 mb-3">About Our Project</h1>
          <p className="lead">
            Discover the technologies and features that make our project unique.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Tech Stack</h2>
          <Row className="text-center">
            <Col md={6} lg={3} className="mb-4">
              <Card className="no-border-card">
                <Card.Header as="h5" className="info-card-header">Front-End</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Next.js</ListGroup.Item>
                    <ListGroup.Item>React Bootstrap</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="no-border-card">
                <Card.Header as="h5" className="info-card-header">Back-End</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Node.js</ListGroup.Item>
                    <ListGroup.Item>Express.js</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="no-border-card">
                <Card.Header as="h5" className="info-card-header">APIs & Others</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Edamam Recipe API</ListGroup.Item>
                    <ListGroup.Item>JWT</ListGroup.Item>
                    <ListGroup.Item>Atom, Jotai</ListGroup.Item>
                    <ListGroup.Item>CORS</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="no-border-card">
                <Card.Header as="h5" className="info-card-header">Deployment</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <div className="card-subtitle">Back-End:</div>
                      Vercel
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="card-subtitle">Front-End:</div>
                      Vercel
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>


        <section className="mb-5">
          <h2 className="text-center mb-4">Features</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="no-border-card">
                <Card.Body>
                  <Card.Title className="info-card-title">Recipe Search</Card.Title>
                  <Card.Text>
                    Search for recipes using keywords or filter by categories such as meal type, cuisine, and dish type.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="no-border-card">
                <Card.Body>
                  <Card.Title className="info-card-title">User Authentication</Card.Title>
                  <Card.Text>
                    Register, login, and logout to access premium features and manage your favorite recipes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="no-border-card">
                <Card.Body>
                  <Card.Title className="info-card-title">Premium Features</Card.Title>
                  <Card.Text>
                    Add recipes to your favorites, view recent history, and explore detailed recipe information.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section id="about-us-section" className="mt-5">
          <MeetTheTeam />
        </section>
      </main>
    </Container>
  );
}

export default About;
