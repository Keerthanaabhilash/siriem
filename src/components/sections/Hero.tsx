import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-visual">
                <img src="ev.jpg" alt="Electric Vehicle" className="rounded-corners animated" />
            </div>
            <div className="green-box">
                <img src="wal.jpg" alt="Wall Image" className="wal-image" />
            </div>
            <h1 className="headline">Your Headline Here</h1>
            <p className="description">Your description goes here. This content remains unchanged.</p>
            <div className="buttons">
                <button className="btn-primary">Primary</button>
                <button className="btn-secondary">Secondary</button>
            </div>
            <div className="stats">
                <p>Stat 1: 1000</p>
                <p>Stat 2: 2000</p>
                // Other stats remain unchanged
            </div>
        </div>
    );
};


export default Hero;
