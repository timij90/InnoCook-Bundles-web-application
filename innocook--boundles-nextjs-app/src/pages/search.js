// import { useState, useEffect } from "react";
// import Head from "next/head";
// import { Form, Button, Row, Card, Col, Container, Accordion } from "react-bootstrap";
// import RecipeCard from "@/components/RecipeCard";
// import CustomPagination from "@/components/CustomPagination";
// import { my_fetch } from "@/services";
//
// const mealTypes = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];
// const cuisineTypes = ["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"];
// const dishTypes = ["Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces", "Desserts", "Drinks", "Main course", "Pancake", "Preps", "Preserve", "Salad", "Sandwiches", "Side dish", "Soup", "Starter", "Sweets"];
//
// export default function Search() {
//     const [mealType, setMealType] = useState("");
//     const [cuisineType, setCuisineType] = useState("");
//     const [dishType, setDishType] = useState("");
//     const [recipeName, setRecipeName] = useState("");
//     const [recipes, setRecipes] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//     const recipesPerPage = 6;
//
//     const handleSearch = async (event) => {
//         event.preventDefault();
//         let query = { recipeName };
//         if (mealType) query.mealType = mealType;
//         if (cuisineType) query.cuisineType = cuisineType;
//         if (dishType) query.dishType = dishType;
//
//         try {
//             const response = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/search`, {
//                 method: 'POST',
//                 body: JSON.stringify(query),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const data = await response.json();
//             setRecipes(data);
//             setTotalPages(Math.ceil(data.length / recipesPerPage));
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     };
//
//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };
//
//     const currentRecipes = recipes.slice((currentPage - 1) * recipesPerPage, currentPage * recipesPerPage);
//
//     return (
//         <div>
//             <Head>
//                 <title>Search | InnoCook Bundles</title>
//             </Head>
//             <main>
//                 <Container fluid="md">
//                     <div className="text-start mt-5">
//                         <h3>Explore Recipes</h3>
//                     </div>
//                     <Row className="mt-3">
//                         <Col md={3} className="sidebar">
//                             <div>
//                                 <Card className="form-card no-border-card">
//                                     <Card.Body>
//                                         <div className="d-flex justify-content-center">
//                                             <Form onSubmit={handleSearch}>
//                                                 <Row>
//                                                     <div className="input-group mb-3">
//                                                         <Form.Control
//                                                             type="text"
//                                                             placeholder="Search Recipe..."
//                                                             value={recipeName}
//                                                             onChange={(e) => setRecipeName(e.target.value)}
//                                                         />
//                                                         <Button variant="success" type="submit">
//                                                             <i className="bi bi-search"></i>
//                                                         </Button>
//                                                     </div>
//                                                 </Row>
//                                             </Form>
//                                         </div>
//                                         <Accordion>
//                                             <Accordion.Item eventKey="0">
//                                                 <Accordion.Header>Meal Type</Accordion.Header>
//                                                 <Accordion.Body>
//                                                     {mealTypes.map((type) => (
//                                                         <Form.Check
//                                                             key={type}
//                                                             type="checkbox"
//                                                             label={type}
//                                                             checked={mealType === type}
//                                                             onChange={() => setMealType(type)}
//                                                         />
//                                                     ))}
//                                                 </Accordion.Body>
//                                             </Accordion.Item>
//                                             <Accordion.Item eventKey="1">
//                                                 <Accordion.Header>Cuisine Type</Accordion.Header>
//                                                 <Accordion.Body>
//                                                     {cuisineTypes.map((type) => (
//                                                         <Form.Check
//                                                             key={type}
//                                                             type="checkbox"
//                                                             label={type}
//                                                             checked={cuisineType === type}
//                                                             onChange={() => setCuisineType(type)}
//                                                         />
//                                                     ))}
//                                                 </Accordion.Body>
//                                             </Accordion.Item>
//                                             <Accordion.Item eventKey="2">
//                                                 <Accordion.Header>Dish Type</Accordion.Header>
//                                                 <Accordion.Body>
//                                                     {dishTypes.map((type) => (
//                                                         <Form.Check
//                                                             key={type}
//                                                             type="checkbox"
//                                                             label={type}
//                                                             checked={dishType === type}
//                                                             onChange={() => setDishType(type)}
//                                                         />
//                                                     ))}
//                                                 </Accordion.Body>
//                                             </Accordion.Item>
//                                         </Accordion>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//
//                         <Col md={9}>
//                             <Container>
//
//                                 <Row className="justify-content-center">
//                                     {currentRecipes.map((recipe, index) => (
//                                         <Col key={index} xs={12} md={6} lg={4} className="mb-4">
//                                             <RecipeCard recipe={recipe.recipe} />
//                                         </Col>
//                                     ))}
//                                 </Row>
//                                 {totalPages > 1 && (<div className="d-flex justify-content-center">
//                                     <CustomPagination
//                                         currentPage={currentPage}
//                                         totalPages={totalPages}
//                                         onPageChange={handlePageChange}
//                                     />
//                                 </div>)
//                                 }
//                             </Container>
//                         </Col>
//                     </Row>
//                 </Container>
//             </main>
//         </div>
//     );
// }

import { useState, useEffect } from "react";
import Head from "next/head";
import { Form, Button, Row, Card, Col, Container, Accordion } from "react-bootstrap";
import RecipeCard from "@/components/RecipeCard";
import CustomPagination from "@/components/CustomPagination";
import { my_fetch } from "@/services";

const mealTypes = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];
const cuisineTypes = ["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"];
const dishTypes = ["Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces", "Desserts", "Drinks", "Main course", "Pancake", "Preps", "Preserve", "Salad", "Sandwiches", "Side dish", "Soup", "Starter", "Sweets"];

export default function Search() {
    const [mealType, setMealType] = useState("");
    const [cuisineType, setCuisineType] = useState("");
    const [dishType, setDishType] = useState("");
    const [recipeName, setRecipeName] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const recipesPerPage = 6;

    const handleSearch = async (event) => {
        event.preventDefault();
        let query = { recipeName };
        if (mealType) query.mealType = mealType;
        if (cuisineType) query.cuisineType = cuisineType;
        if (dishType) query.dishType = dishType;

        try {
            const response = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/search`, {
                method: 'POST',
                body: JSON.stringify(query),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setRecipes(data);
            setTotalPages(Math.ceil(data.length / recipesPerPage));
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentRecipes = recipes.slice((currentPage - 1) * recipesPerPage, currentPage * recipesPerPage);

    return (
        <div>
            <Head>
                <title>Search | InnoCook Bundles</title>
            </Head>
            <main>
                <Container fluid="md">
                    <div className="text-start mt-5">
                        <h3>Explore Recipes</h3>
                    </div>
                    <Row className="mt-3">
                        <Col md={3} className="sidebar">
                            <div>
                                <Card className="form-card no-border-card">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <Form onSubmit={handleSearch}>
                                                <Row>
                                                    <div className="input-group mb-3">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Search Recipe..."
                                                            value={recipeName}
                                                            onChange={(e) => setRecipeName(e.target.value)}
                                                        />
                                                        <Button variant="success" type="submit">
                                                            <i className="bi bi-search"></i>
                                                        </Button>
                                                    </div>
                                                </Row>
                                            </Form>
                                        </div>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Meal Type</Accordion.Header>
                                                <Accordion.Body>
                                                    {mealTypes.map((type) => (
                                                        <Form.Check
                                                            key={type}
                                                            type="checkbox"
                                                            label={type}
                                                            checked={mealType === type}
                                                            onChange={() => setMealType(type)}
                                                        />
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Cuisine Type</Accordion.Header>
                                                <Accordion.Body>
                                                    {cuisineTypes.map((type) => (
                                                        <Form.Check
                                                            key={type}
                                                            type="checkbox"
                                                            label={type}
                                                            checked={cuisineType === type}
                                                            onChange={() => setCuisineType(type)}
                                                        />
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Dish Type</Accordion.Header>
                                                <Accordion.Body>
                                                    {dishTypes.map((type) => (
                                                        <Form.Check
                                                            key={type}
                                                            type="checkbox"
                                                            label={type}
                                                            checked={dishType === type}
                                                            onChange={() => setDishType(type)}
                                                        />
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col md={9}>
                            <Container>

                                <Row className="justify-content-center">
                                    {currentRecipes.map((recipe, index) => (
                                        <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                                            <RecipeCard recipe={recipe.recipe} />
                                        </Col>
                                    ))}
                                </Row>
                                {totalPages > 1 && (<div className="d-flex justify-content-center">
                                    <CustomPagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>)}

                            </Container>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
