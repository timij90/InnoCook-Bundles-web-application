// components/TeamMember.js
import { Card, Col, Image } from 'react-bootstrap';

const TeamMember = ({ image, name, title, description, social }) => {
    return (
        <Col md={6} className="mb-4">
            <Card className="text-center border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Image
                        src={image}
                        roundedCircle
                        style={{ width: '150px', height: '150px' }}
                        className="mb-3"
                    />
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <div>
                        {social.map((link, index) => (
                            <a key={index} href={link.url} className="me-2">
                                <i className={`bi bi-${link.platform}`}></i>
                            </a>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TeamMember;
