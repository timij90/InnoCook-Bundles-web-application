// pages/index.js
import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
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

      </main>
    </div>
  );
}
