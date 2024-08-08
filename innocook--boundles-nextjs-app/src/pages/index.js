// pages/index.js
import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page | InnoCook Bundles</title>
      </Head>
      <main>
        <div className="text-center">
          <h1 className="slogan-title">Unlock the Chef in You:</h1>
          <h1 className="slogan-title">Recipes, Instructions, Delivered!</h1>
          <Button className="my-button font-monospace" href="/search">GO EXPLORE</Button>
        </div>
        <Carousel data-bs-theme="bright">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images.unsplash.com/photo-1556178676-00b901fb09b2?q=80&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Welcome to InnoCook Bundles!</h5>
              <p className="font-monospace"> Explore unique recipes crafted for your taste.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images.unsplash.com/photo-1576097449802-2aa05e59b212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Taste the Magic at Home</h5>
              <p className="font-monospace">A collection of recipes and tools to help you cook delicious meals at home.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100  carousel-image"
              src="https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p className="font-monospace">
                Register Now for Full Access!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container fluid="md" className="mt-5">
          <Row className="mt-5">
            <Col md={6} className="pr-md-6">
              <Container fluid="md">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1535384515441-5a7293014fce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Family meals"
                />
              </Container>
              <Row className="mt-3">
                <Col>
                  <h6 className="fw-bold">Family Dinners</h6>
                  <p>Create memorable family dinners with our assortment of hearty and wholesome recipes.</p>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="pl-md-6">
              <Container fluid="md">
                <Row className="mt-3">
                  <Col xs={4}>
                    <img
                      className="w-100 small-image"
                      src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Man and woman cooking"
                    />
                  </Col>
                  <Col>
                    <h6>QUICK MEALS</h6>
                    <p className="fw-bold">InnoCook Bundles - Quick Recipes Galore</p>
                    <p>Discover easy and delicious recipes for busy weeknights and lazy weekends.</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={4}>
                    <img
                      className="w-100 small-image"
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Salad bowl"
                    />
                  </Col>
                  <Col>
                    <h6>HEALTHY SALADS</h6>
                    <p className="fw-bold">Fresh Salad Ideas</p>
                    <p>Explore a variety of nutritious and flavorful salad recipes to keep you feeling satisfied.</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={4}>
                    <img
                      className="w-100 small-image"
                      src="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Pink macarons"
                    />
                  </Col>
                  <Col>
                    <h6>TASTY DESSERTS</h6>
                    <p className="fw-bold">Delectable Dessert Delights</p>
                    <p>Indulge in sweet treats with our collection of mouth-watering dessert recipes for every occasion.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid id="about-section" className="mt-5">
          <MeetTheTeam />
        </Container>
      </main>
    </div>
  );
}
