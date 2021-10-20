import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer row py-2">
            <div className="col-md-6 content text-center">
                <h5 className="text-white">Thanks For Keep In Touch With WeCare</h5>
                <p className="text-dark fw-bold">All copyrights reserved by WeCare Ⓒ Adnan, 2021</p>
            </div>
            <div className="col-md-6 d-flex align-items-center link text-center">
                <span className="text-white fw-bold me-2">If you don't have an user account then please Create One</span>
                <Link to='/Contact' className="btn btn-success  text-end">Register</Link>
            </div>
        </div>

    );
};

export default Footer;