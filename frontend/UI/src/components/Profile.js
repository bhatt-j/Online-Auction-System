import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { Card, ListGroup, ListGroupItem, Button, Modal, Form } from 'react-bootstrap';
import './Products.css';

const Profile = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navigation />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/1.jpg"} height="250" />
                <Card.Body>
                    <Card.Title>Painting</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        <Card.Title>Time left : </Card.Title>
                        <div className='countdown'>
                            <span>30</span>
                            <span>days</span>
                            <span>40</span>
                            <span>hours</span>
                            <span>20</span>
                            <span>min</span>
                            <span>12</span>
                            <span>sec</span>
                        </div>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price : $817.59</ListGroupItem>
                    <ListGroupItem>Creator : Richard</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary" onClick={handleShow}>
                        Place a Bid
                    </Button>

                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Place a Bid</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Enter Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter Amount" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Current Bid : $125</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Profile