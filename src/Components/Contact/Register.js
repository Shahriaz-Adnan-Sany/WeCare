import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div>
            <Form className="w-75 mx-auto">
                <h2 className="my-2">Please Register Now</h2>
                <Row className="mb-3">
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Link className="btn btn-success" to="/LogIn">Already Registered?</Link>
                </Form.Group>

                <Button className="btn btn-success" variant="primary" type="submit">
                    Register
                </Button>


            </Form>
        </div>
    );
};

export default Register;