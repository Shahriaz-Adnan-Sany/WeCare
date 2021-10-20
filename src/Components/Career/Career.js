import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './Career.css';
const Career = () => {
    const { CareerID } = useParams();





    return (
        <div>
            <div className="career-table my-4 w-75 mx-auto shadow-lg">
                <h2 className="fw-bold py-2">We Are Hiring</h2>
                <table className="WeCare-table my-2">
                    <thead>
                        <tr>
                            <th className="text-center">Position</th>
                            <th className="text-center">Poisting</th>
                            <th className="text-center">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Registrar/Specialist/RMO</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                        <tr>
                            <td>Nursing In Charge/Staff Nurse</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                        <tr>
                            <td>Technician</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                        <tr>
                            <td>Customer Care Officer</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                        <tr>
                            <td>Infection Control Nurse</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                        <tr>
                            <td>Manager, Finance and Accounts</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                        <tr>
                            <td>Patient Welfare Officer</td>
                            <td>Chittagong</td>
                            <td>31 December, 2021</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mb-2">
                    <p className="fw-bold">Are You Interested To Collaborate With Us?</p>
                    <Link to="/Contact"><button className="btn btn-success mb-2">Join Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Career;