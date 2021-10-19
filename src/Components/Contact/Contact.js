import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="m-4 row row-cols-2 g-4">
            {/* <div className="register ">
                <h4>New Here? Then Please Register As a New Patient</h4>
                <Link className="btn btn-success" to="/Register">Register Now</Link>
            </div> */}

            <div className="log-in">
                <h4> Please Sign In Via Google</h4>
                <Link className="btn btn-success" to="/LogIn">Sign In</Link>
            </div>

            <div className="log-in">
                <h4>Register With Email </h4>
                <Link className="btn btn-success" to="/InputForm">Register</Link>
            </div>
        </div>
    );
};

export default Contact;