import { React, useState, useEffect } from 'react';
import Navigation from './Navigation';
import { Card, ListGroup, ListGroupItem, Button, Modal, Form } from 'react-bootstrap';
import './Products.css';
import './CountdownTimer';
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimer';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Products = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearTimeout(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

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
                            <span>{remainingTime.days}</span>
                            <span>days</span>
                            <span>{remainingTime.hours}</span>
                            <span>hours</span>
                            <span>{remainingTime.minutes}</span>
                            <span>min</span>
                            <span>{remainingTime.seconds}</span>
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
                        Register
                    </Button>

                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Register for an Auction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Do you have amount in wallet?" />
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

export default Products