import React from 'react';
import Card from 'react-bootstrap/Card';
import './static/css/ContactSection.css';

const ContactSection = (props) => {
    return (
        <Card border="light" id="Contact-Section">
            <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Link href="mailTo:lohengliang@gmail.com">Email</Card.Link>
                <Card.Link href="#" target="_blank">Linkedin</Card.Link>
                <Card.Link href="https://github.com/lohengliang" target="_blank">GitHub</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ContactSection;

