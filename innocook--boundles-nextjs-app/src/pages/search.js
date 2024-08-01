// import { useState } from "react";
// import Head from "next/head";
// import { Form, Button, FloatingLabel, Row, Col, Container } from "react-bootstrap";
// import RecipeCard from "@/components/RecipeCard";
// import { my_fetch } from "@/services";

// export default function Search() {
//     const [category, setCategory] = useState("");
//     const [recipeName, setRecipeName] = useState("");
//     const [recipes, setRecipes] = useState([]);

//     const handleSearch = async (event) => {
//         event.preventDefault();
//         const query = { category, recipeName };
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
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     };

//     return (
//         <div>
//             <Head>
//                 <title>Search | InnoCook Bundles</title>
//             </Head>
//             <main>
//                 <div className="text-center">
//                     <h1 className="slogan-title">Unlock the Chef in You:</h1>
//                     <h1 className="slogan-title">Recipes, Instructions, Delivered!</h1>
//                 </div>
//                 <div className="search-form form-card justify-content-center">
//                     <Form onSubmit={handleSearch}>
//                         <Row className="g-2 form-weight">
//                             <Form.Select
//                                 aria-label="Floating label select example"
//                                 value={category}
//                                 onChange={(e) => setCategory(e.target.value)}
//                             >
//                                 <option>Category menu</option>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                             </Form.Select>
//                         </Row>
//                         <Row className="g-2 mt-3 form-weight">
//                             <FloatingLabel controlId="floatingInput" label="Recipe Name" className="mb-3">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Recipe Name"
//                                     value={recipeName}
//                                     onChange={(e) => setRecipeName(e.target.value)}
//                                 />
//                             </FloatingLabel>
//                         </Row>
//                         <Row className="g-2 mt-3 form-weight">
//                             <Button variant="outline-success" type="submit">
//                                 Search
//                             </Button>
//                         </Row>
//                     </Form>
//                 </div>
//                 <Container>
//                     <Row className="justify-content-center">
//                         {recipes.map((recipe, index) => (
//                             <Col key={index} xs={12} md={6} lg={4} className="mb-4">
//                                 <RecipeCard recipe={recipe} />
//                             </Col>
//                         ))}
//                     </Row>
//                 </Container>
//             </main>
//         </div>
//     );
// }


import { useState } from "react";
import Head from "next/head";
import { Form, Button, FloatingLabel, Row, Col, Container, Modal, ListGroup } from "react-bootstrap";
import RecipeCard from "@/components/RecipeCard";
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

    const [showMealTypeModal, setShowMealTypeModal] = useState(false);
    const [showCuisineTypeModal, setShowCuisineTypeModal] = useState(false);
    const [showDishTypeModal, setShowDishTypeModal] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        let query = { recipeName };
        if (mealType) query.mealType = mealType;
        if (cuisineType) query.cuisineType = cuisineType;
        if (dishType) query.dishType = dishType;
        // console.log(query);

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
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <Head>
                <title>Search | InnoCook Bundles</title>
            </Head>
            <main>
                <Container fluid>
                    <Row>
                        <Col md={3} className="sidebar">
                            <h4>Category</h4>
                            <ListGroup>
                                <ListGroup.Item action onClick={() => setShowMealTypeModal(true)}>Meal Type</ListGroup.Item>
                                <ListGroup.Item action onClick={() => setShowCuisineTypeModal(true)}>Cuisine Type</ListGroup.Item>
                                <ListGroup.Item action onClick={() => setShowDishTypeModal(true)}>Dish Type</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={9}>
                            <div className="text-center">
                                <h1 className="slogan-title">Unlock the Chef in You:</h1>
                                <h1 className="slogan-title">Recipes, Instructions, Delivered!</h1>
                            </div>
                            <div className="search-form form-card justify-content-center">
                                <Form onSubmit={handleSearch}>
                                    <Row className="g-2 form-weight">
                                        <FloatingLabel controlId="floatingInput" label="Recipe Name" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Recipe Name"
                                                value={recipeName}
                                                onChange={(e) => setRecipeName(e.target.value)}
                                            />
                                        </FloatingLabel>
                                    </Row>
                                    <Row className="g-2 mt-3 form-weight">
                                        <Button variant="outline-success" type="submit">
                                            Search
                                        </Button>
                                    </Row>
                                </Form>
                            </div>
                            <Container>
                                <Row className="justify-content-center">
                                    {recipes.map((recipe, index) => (
                                        <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                                            <RecipeCard recipe={recipe.recipe} />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Modal show={showMealTypeModal} onHide={() => setShowMealTypeModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Meal Type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {mealTypes.map((type) => (
                            <Form.Check
                                key={type}
                                type="checkbox"
                                label={type}
                                checked={mealType === type}
                                onChange={() => setMealType(type)}
                            />
                        ))}
                    </Modal.Body>
                </Modal>

                <Modal show={showCuisineTypeModal} onHide={() => setShowCuisineTypeModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Cuisine Type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {cuisineTypes.map((type) => (
                            <Form.Check
                                key={type}
                                type="checkbox"
                                label={type}
                                checked={cuisineType === type}
                                onChange={() => setCuisineType(type)}
                            />
                        ))}
                    </Modal.Body>
                </Modal>

                <Modal show={showDishTypeModal} onHide={() => setShowDishTypeModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Dish Type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {dishTypes.map((type) => (
                            <Form.Check
                                key={type}
                                type="checkbox"
                                label={type}
                                checked={dishType === type}
                                onChange={() => setDishType(type)}
                            />
                        ))}
                    </Modal.Body>
                </Modal>
            </main>
        </div>
    );
}


// import { useState } from "react";
// import Head from "next/head";
// import { Form, Button, FloatingLabel, Row, Col, Container, Modal, ListGroup } from "react-bootstrap";
// import RecipeCard from "@/components/RecipeCard";
// import { my_fetch } from "@/services";

// const mealTypes = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];
// const cuisineTypes = ["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"];
// const dishTypes = ["Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces", "Desserts", "Drinks", "Main course", "Pancake", "Preps", "Preserve", "Salad", "Sandwiches", "Side dish", "Soup", "Starter", "Sweets"];

// export default function Search() {
//     const [mealType, setMealType] = useState("");
//     const [cuisineType, setCuisineType] = useState("");
//     const [dishType, setDishType] = useState("");
//     const [recipeName, setRecipeName] = useState("");
//     const [recipes, setRecipes] = useState([]);

//     const [showMealTypeModal, setShowMealTypeModal] = useState(false);
//     const [showCuisineTypeModal, setShowCuisineTypeModal] = useState(false);
//     const [showDishTypeModal, setShowDishTypeModal] = useState(false);

//     const handleSearch = async (event) => {
//         event.preventDefault();
//         let query = { recipeName };
//         if (mealType) query.mealType = mealType;
//         if (cuisineType) query.cuisineType = cuisineType;
//         if (dishType) query.dishType = dishType;
//         console.log(query);

//         try {
//             const response = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/search`, {
//                 method: 'POST',
//                 body: JSON.stringify(query),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const data = await response.json();
//             setRecipes(Array.isArray(data) ? data : []); // Ensure `data` is an array
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//             setRecipes([]); // Set to an empty array in case of error
//         }
//     };

//     return (
//         <div>
//             <Head>
//                 <title>Search | InnoCook Bundles</title>
//             </Head>
//             <main>
//                 <Container fluid>
//                     <Row>
//                         <Col md={3} className="sidebar">
//                             <h4>Category</h4>
//                             <ListGroup>
//                                 <ListGroup.Item action onClick={() => setShowMealTypeModal(true)}>Meal Type</ListGroup.Item>
//                                 <ListGroup.Item action onClick={() => setShowCuisineTypeModal(true)}>Cuisine Type</ListGroup.Item>
//                                 <ListGroup.Item action onClick={() => setShowDishTypeModal(true)}>Dish Type</ListGroup.Item>
//                             </ListGroup>
//                         </Col>
//                         <Col md={9}>
//                             <div className="text-center">
//                                 <h1 className="slogan-title">Unlock the Chef in You:</h1>
//                                 <h1 className="slogan-title">Recipes, Instructions, Delivered!</h1>
//                             </div>
//                             <div className="search-form form-card justify-content-center">
//                                 <Form onSubmit={handleSearch}>
//                                     <Row className="g-2 form-weight">
//                                         <FloatingLabel controlId="floatingInput" label="Recipe Name" className="mb-3">
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="Recipe Name"
//                                                 value={recipeName}
//                                                 onChange={(e) => setRecipeName(e.target.value)}
//                                             />
//                                         </FloatingLabel>
//                                     </Row>
//                                     <Row className="g-2 mt-3 form-weight">
//                                         <Button variant="outline-success" type="submit">
//                                             Search
//                                         </Button>
//                                     </Row>
//                                 </Form>
//                             </div>
//                             <Container>
//                                 <Row className="justify-content-center">
//                                     {recipes.length > 0 ? (
//                                         recipes.map((recipe, index) => (
//                                             <Col key={index} xs={12} md={6} lg={4} className="mb-4">
//                                                 <RecipeCard recipe={recipe.recipe} />
//                                             </Col>
//                                         ))
//                                     ) : (
//                                         <p>No recipes found. Try adjusting your search criteria.</p>
//                                     )}
//                                 </Row>
//                             </Container>
//                         </Col>
//                     </Row>
//                 </Container>

//                 <Modal show={showMealTypeModal} onHide={() => setShowMealTypeModal(false)}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Select Meal Type</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         {mealTypes.map((type) => (
//                             <Form.Check
//                                 key={type}
//                                 type="checkbox"
//                                 label={type}
//                                 checked={mealType === type}
//                                 onChange={() => setMealType(type)}
//                             />
//                         ))}
//                     </Modal.Body>
//                 </Modal>

//                 <Modal show={showCuisineTypeModal} onHide={() => setShowCuisineTypeModal(false)}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Select Cuisine Type</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         {cuisineTypes.map((type) => (
//                             <Form.Check
//                                 key={type}
//                                 type="checkbox"
//                                 label={type}
//                                 checked={cuisineType === type}
//                                 onChange={() => setCuisineType(type)}
//                             />
//                         ))}
//                     </Modal.Body>
//                 </Modal>

//                 <Modal show={showDishTypeModal} onHide={() => setShowDishTypeModal(false)}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Select Dish Type</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         {dishTypes.map((type) => (
//                             <Form.Check
//                                 key={type}
//                                 type="checkbox"
//                                 label={type}
//                                 checked={dishType === type}
//                                 onChange={() => setDishType(type)}
//                             />
//                         ))}
//                     </Modal.Body>
//                 </Modal>
//             </main>
//         </div>
//     );
// }

