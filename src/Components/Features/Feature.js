import React from 'react';
import { Link } from 'react-router-dom';
import './Feature.css';
const Feature = () => {
    return (
        <div className="Features">
            <div class="row row-cols-1 row-cols-md-2 p-4 g-2">
                <div class="col mx-auto">
                    <div class="card">
                        <div className="card-img-style mx-auto p-2">
                            <img src="https://i.ibb.co/XyMGL5y/doctor1.jpg" class="feature-img card-img-top img-fluid mx-auto" alt="..." />
                            <div className="img-btn">
                                <Link to="/Contact"><button className="btn btn-success mb-2">Contact Us</button></Link>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">WeCare Tele Online</h5>
                            <p class="card-text">Evercare launches an innovative platform for consulting your doctors of different specialty sitting at saftery and convenience of home. We understand your needs during this time of crisis. We also understand travel issues due to lockdown but yes its all done so that the pandemic virus doesn’t spread.</p>
                        </div>
                    </div>
                </div>
                <div class="col mx-auto">
                    <div class="card">
                        <div className="card-img-style mx-auto p-2">
                            <img src="https://i.ibb.co/qFJffZV/doctor2.jpg" class="feature-img card-img-top img-fluid mx-auto" alt="..." />
                            <div className="img-btn">
                                <Link to="/Contact"><button className="btn btn-success mb-2">Contact Us</button></Link>
                            </div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Find Consultant</h5>
                            <p class="card-text">Evercare launches an innovative platform for consulting your doctors of different specialty sitting at saftery and convenience of home. We understand your needs during this time of crisis. We also understand travel issues due to lockdown but yes its all done so that the pandemic virus doesn’t spread.</p>
                        </div>
                    </div>
                </div>
                <div class="col mx-auto">
                    <div class="card">
                        <div className="card-img-style mx-auto p-2">
                            <img src="https://i.ibb.co/1RpDkSP/doctor3.jpg" class="feature-img card-img-top img-fluid mx-auto" alt="..." />
                            <div className="img-btn">
                                <Link to="/Contact"><button className="btn btn-success mb-2">Contact Us</button></Link>
                            </div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Patient Portal</h5>
                            <p class="card-text">Evercare launches an innovative platform for consulting your doctors of different specialty sitting at saftery and convenience of home. We understand your needs during this time of crisis. We also understand travel issues due to lockdown but yes its all done so that the pandemic virus doesn’t spread.</p>
                        </div>
                    </div>
                </div>
                <div class="col mx-auto">
                    <div class="card">
                        <div className="card-img-style mx-auto p-2">
                            <img src="https://i.ibb.co/G7VJpDv/doctor4.jpg" class="feature-img card-img-top img-fluid mx-auto" alt="..." />
                            <div className="img-btn">
                                <Link to="/Contact"><button className="btn btn-success mb-2">Contact Us</button></Link>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Make Appointment</h5>
                            <p class="card-text">Evercare launches an innovative platform for consulting your doctors of different specialty sitting at saftery and convenience of home. We understand your needs during this time of crisis. We also understand travel issues due to lockdown but yes its all done so that the pandemic virus doesn’t spread.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;