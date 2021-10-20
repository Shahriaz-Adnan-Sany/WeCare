import React from 'react';
import Covid from '../Covid/Covid';
import Feature from '../Features/Feature';
import HomeService from './HomeService/HomeService';
import HomeSlider from './HomeService/HomeSlider/HomeSlider';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container px-4">
            <HomeSlider></HomeSlider>
            <HomeService></HomeService>
            <Feature></Feature>
            <Covid></Covid>
        </div>
    );
};

export default Home;