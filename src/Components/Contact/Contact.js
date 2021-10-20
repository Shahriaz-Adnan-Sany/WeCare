import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container py-4 ">
            <div className="contact-info row g-4 ">
                <div className="col-md-6 d-flex justify-content-center align-items-center log-in">
                    <div className="info p-4">
                        <h4> Please Sign In Via Google And GitHub</h4>
                        <p>If you don't sign in till now, Please Sign in by using your google and github account</p>
                        <Link className="btn btn-success" to="/LogIn">Sign In</Link>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center log-in">
                    <div className="info p-4">
                        <h4>Register With Email</h4>
                        <p>You Can easily make an user account by using your Personal email.</p>
                        <Link className="btn btn-success" to="/InputForm">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;