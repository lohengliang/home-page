import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './static/css/PortfolioSection.css'

const PortfolioSection = (props) => {
    return (
        <div >
            <Card id="Portfolio-Section">
                <Card.Body>
                    <Card.Title>Portfolio</Card.Title>
                </Card.Body>
            </Card>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="./static/img/twitterclone.PNG" />
                    <Card.Body>
                        <Card.Title>Twitter Clone</Card.Title>
                        <Card.Text>
                            This is a clone of Twitter's page using Bootstrap.
                        </Card.Text>
                        <Card.Link href="https://lohengliang.github.io/twitter-clone/" target="_blank">Project Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./static/img/thestraitstimesclone.png" />
                    <Card.Body>
                        <Card.Title>The Straits Times Clone</Card.Title>
                        <Card.Text>
                            This is a clone of The Straits Times' page using React.
                        </Card.Text>
                        <Card.Link href="https://lohengliang.github.io/the-straits-times-clone/" target="_blank">Project Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./static/img/todolistclone.png" />
                    <Card.Body>
                        <Card.Title>To Do List Clone</Card.Title>
                        <Card.Text>
                            This is a clone of a to do list using React and Redux.
                        </Card.Text>
                        <Card.Link href="https://lohengliang.github.io/to-do-list/" target="_blank">Project Website</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default PortfolioSection;