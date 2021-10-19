import React from 'react';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import Covid from '../Covid/Covid';
import Feature from '../Features/Feature';
import './Home.css';
import HomeService from './HomeService/HomeService';

const Home = () => {
    return (
        <div className="home-container px-4">
            <ControlledCarousel></ControlledCarousel>
            <HomeService></HomeService>
            <Feature></Feature>
            <Covid></Covid>
        </div>
    );
};

export default Home;