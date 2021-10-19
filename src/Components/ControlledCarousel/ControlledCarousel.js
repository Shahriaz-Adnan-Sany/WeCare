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
                <div className="img-style">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2tTSwHp/heart-bg2.jpg"
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Exceptional Care Close to You </h3>
                    <p>Not just better healthcare, but a better healthcare experience.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="img-style">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yhCffkP/heart-bg3.png"
                        alt="Second slide"
                    />
                </div>

                <Carousel.Caption>
                    <h3>Better Care and Better Understanding</h3>
                    <p>Not just better healthcare, but a better healthcare experience.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="img-style">
                    <img
                        className="d-block w-100"
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

render(<ControlledCarousel />);
export default ControlledCarousel;