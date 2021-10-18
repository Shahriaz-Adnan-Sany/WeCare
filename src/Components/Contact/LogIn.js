import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import useFirebase from '../Hooks/FirebaseHook';
import './LogIn.css';
const LogIn = () => {
    const { signInUsingGoogle, signInUsingGitHub } = useFirebase();
    return (
        <div>
            <Form className="w-75 mx-auto">
                <h2 className="my-2">Please Log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="btn btn-success" type="submit">
                    Log In
                </Button>
            </Form>
            {/* Google Sign In Button */}
            <div className="google-signIn py-4">
                <h3 className="">Please Sign In With Your Google Account</h3>
                <Button onClick={signInUsingGoogle} className="btn btn-success my-2" type="submit">
                    Google Sign In
                </Button>
            </div>
            {/* Git Hub Sign In Button */}
            <div className="google-signIn py-4">
                <h3 className="">Please Sign In With Your GitHub Account</h3>
                <Button onClick={signInUsingGitHub} className="btn btn-success my-2" type="submit">
                    GitHub Sign In
                </Button>
            </div>
        </div>
    );
};

export default LogIn;