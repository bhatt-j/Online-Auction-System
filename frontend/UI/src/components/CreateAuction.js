import React from 'react';
import Navigation from './Navigation';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';

const CreateAuction = () => {
    return (
        <div>
            <Navigation />
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Select category">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Product Name">
                        <Form.Control type="text" placeholder="Product" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Initial Price">
                        <Form.Control type="number" placeholder="Price" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Start Time">
                        <Form.Control type="time" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="End Time">
                        <Form.Control type="time" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Row>
            <Button variant="primary">Create Auction</Button>{' '}
        </div>
    )
}

export default CreateAuction