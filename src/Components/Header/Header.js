import Button from '@restart/ui/esm/Button';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

/* import useFirebase from '../Hooks/FirebaseHook'; */
import './Header.css';
const Header = () => {
    /*  const { user, logOut } = useFirebase(); */
    const { user, logOut } = useAuth();
    return (
        <div className="header px-4 py-2">
            <Container fluid>
                <Navbar className="row my-2">
                    <div className="col-sm-12 col-md-3 heading">
                        <h2 className="fw-bold">WeCare</h2>
                    </div>
                    <Nav className="col-sm-12 col-md-5 d-flex justify-content-center">
                        <Link className="btn btn-success mx-2" to="/Home">Home</Link>
                        <Link className="btn btn-success mx-2" to="/Features">Features</Link>
                        <Link className="btn btn-success mx-2" to="/Services">Services</Link>
                        <Link className="btn btn-success mx-2" to="/About">About</Link>
                        <Link className="btn btn-success mx-2" to="/Career">Career</Link>
                    </Nav>

                    <div className="col-sm-12 col-md-4 d-flex justify-content-end">

                        <Form className="">
                            <span className="fw-bold ">{user.displayName}</span>
                            {user?.email && <Button onClick={logOut} className="btn btn-success mx-2">Log Out</Button>
                            }
                            <Link to='/Contact' className="btn btn-success text-end">Contact US</Link>
                        </Form>
                    </div>
                </Navbar>
            </Container>
        </div >
    );
};

export default Header;