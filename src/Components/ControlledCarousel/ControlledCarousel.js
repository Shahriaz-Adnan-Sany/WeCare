import { render } from "@testing-library/react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import './ControlledCarousel.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="img-style mx-auto ">
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/J3dJwrr/surgeon-2821375-1920.jpg"
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <div className="slider-text">
                        <h3>Exceptional Care Close to You </h3>
                        <p className="">Not just better healthcare, but a better healthcare experience.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="img-style mx-auto ">
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/n7NXch2/bg-2.jpg"
                        alt="Second slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Better Care and Better Understanding</h3>
                    <p>Not just better healthcare, but a better healthcare experience.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="img-style mx-auto ">
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/P53NPXw/heart-bg1.jpg"
                        alt="Second slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>The care you need. The compassion you deserve.</h3>
                    <p>
                        Not just better healthcare, but a better healthcare experience.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default ControlledCarousel;