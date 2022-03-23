import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';

const Navigation = () => {
    return (

        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/aboutus">About Us</Link></Nav.Link>
                            <Nav.Link><Link to="/services">Services</Link></Nav.Link>
                            <Nav.Link><Link to="/products">Products</Link></Nav.Link>
                            <Nav.Link><Link to="/createauction">Create Auction</Link></Nav.Link>
                            <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                            <Nav.Link><Link to="/connecttowallet">Connect to Wallet</Link></Nav.Link>
                            <Nav.Link><Link to="/contactus">Contact Us</Link></Nav.Link>
                            <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Navigation