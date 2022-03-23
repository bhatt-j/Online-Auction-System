import React from 'react';
import Navigation from './Navigation';
import {Form, Button} from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Navigation />
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary">Login</Button>{' '}
            </Form>
        </div>
    )
}

export default Login