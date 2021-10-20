import React from 'react';
import './Covid.css'
const Covid = () => {
    return (
        <div className="covid-container p-2">
            <h3 className="fw-bold text-5xl my-4">Worried Aboud Covid? Here We Are</h3>
            <div className="row g-4">
                <div className="col-md-6 mx-auto">
                    <div className="covid-img d-flex flex-wrap align-items-center">
                        <img src="https://i.ibb.co/9n2dbWS/covid.jpg" className="img-fluid img-thumbnail mx-auto" alt="" />
                    </div>
                </div>
                <div className="col-md-6 p-4">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5>Keep yourself and others safe: Do it all!</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body"><p>Get vaccinated as soon as it’s your turn and follow local guidance on vaccination.
                                    Keep physical distance of at least 1 metre from others, even if they don’t appear to be sick. Avoid crowds and close contact.
                                    Wear a properly fitted mask when physical distancing is not possible and in poorly ventilated settings.
                                    Clean your hands frequently with alcohol-based hand rub or soap and water.
                                    Cover your mouth and nose with a bent elbow or tissue when you cough or sneeze. Dispose of used tissues immediately and clean hands regularly.
                                    If you develop symptoms or test positive for COVID-19, self-isolate until you recover.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5>Wear a mask properly</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>To properly wear your mask:

                                        Make sure your mask covers your nose, mouth and chin.
                                        Clean your hands before you put your mask on, before and after you take it off, and after you touch it at any time.
                                        When you take off your mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask or dispose of it in a trash bin if it’s a medical mask.
                                        Don’t use masks with valves.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5>Make your environment safer</h5>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>The risks of getting COVID-19 are higher in crowded and inadequately ventilated spaces where infected people spend long periods of time together in close proximity.

                                        Outbreaks have been reported in places where people have gather, often in crowded indoor settings and where they talk loudly, shout, breathe heavily or sing such as restaurants, choir practices, fitness classes, nightclubs, offices and places of worship.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covid;