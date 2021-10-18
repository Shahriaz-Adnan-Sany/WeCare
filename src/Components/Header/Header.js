import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Nav>
                        <Link className="btn btn-success mx-2" to="/Home">Home</Link>
                        <Link className="btn btn-success mx-2" to="/Features">Features</Link>
                        <Link className="btn btn-success mx-2" to="/Services">Services</Link>
                        <Link className="btn btn-success mx-2" to="/About">About</Link>
                        <Link className="btn btn-success mx-2" to="/Contact">Contact Us</Link>
                        <Link className="btn btn-success mx-2" to="/Home">Home</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Link to='/Contact' className="btn btn-success mx-2">Register</Link>
                        <Button className="btn btn-success mx-2">Log Out</Button>
                    </Form>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;