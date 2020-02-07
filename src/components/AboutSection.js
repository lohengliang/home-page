import React from 'react';
import Card from 'react-bootstrap/Card';
import './static/css/AboutSection.css';

const AboutSection = (props) => {
    return (
        <Card border="light" id="About-Section">
            <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                Hi there! I am Eng Liang. I graduated from National University of Singapore with a degree in Electrical Engineering. 
                I was involved in supervisory control and data acquisition system programming projects and worked with Python and SQL.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default AboutSection;