import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = (props) => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="#About-Section">About</Nav.Link>
            <Nav.Link href="#Contact-Section">Contact</Nav.Link>
            <Nav.Link href="#Portfolio-Section">Portfolio</Nav.Link>
        </Nav>
    );
};

export default NavigationBar;