import Button from '@restart/ui/esm/Button';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/FirebaseHook';
import './Header.css';
const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Nav>
                        <Link className="btn btn-success mx-2" to="/Home">Home</Link>
                        <Link className="btn btn-success mx-2" to="/Features">Features</Link>
                        <Link className="btn btn-success mx-2" to="/Services">Services</Link>
                        <Link className="btn btn-success mx-2" to="/About">About</Link>
                        <Link className="btn btn-success mx-2" to="/Home">Home</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Link to='/Contact' className="btn btn-success mx-2">Contact US</Link>
                        <span>{user.displayName}</span>
                        {user?.email && <Button onClick={logOut} className="btn btn-success mx-2">Log Out</Button>
                        }
                    </Form>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;