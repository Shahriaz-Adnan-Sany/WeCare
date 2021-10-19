import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const Notfound = () => {
    return (
        <div className="not-found">
            <div class="text">
                <h2 className="text-danger fw-bold">Oooppsss! 404 Not Founded</h2>
                <h5 className="text-primary fw-bold">Please Go Back To another Link</h5>
                <Link to="/"><button className="btn btn-success">Go Back</button></Link>

            </div>
        </div>
    );
};

export default Notfound;